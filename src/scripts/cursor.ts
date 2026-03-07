function initCursor() {
  const cursorEl = document.getElementById("custom-cursor");
  if (!cursorEl) return;
  const cursor: HTMLElement = cursorEl;

  // Skip on touch devices
  if (window.matchMedia("(pointer: coarse)").matches) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let animating = true;

  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.classList.add("visible");
  });

  document.addEventListener("mouseover", e => {
    const target = e.target as HTMLElement;
    const isClickable =
      target.tagName === "A" ||
      target.tagName === "BUTTON" ||
      !!target.closest("a") ||
      !!target.closest("button") ||
      window.getComputedStyle(target).cursor === "pointer";
    cursor.classList.toggle("hovering", isClickable);
  });

  document.addEventListener("mouseleave", () => {
    cursor.classList.remove("visible");
  });

  function lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
  }

  function animate() {
    if (!animating) return;
    cursorX = lerp(cursorX, mouseX, 0.15);
    cursorY = lerp(cursorY, mouseY, 0.15);
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
    requestAnimationFrame(animate);
  }

  animate();

  // Restart on view transitions
  document.addEventListener("astro:after-swap", () => {
    animating = false;
    animating = true;
    animate();
  });
}

initCursor();
document.addEventListener("astro:page-load", initCursor);
