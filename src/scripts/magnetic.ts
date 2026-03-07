function initMagnetic() {
  const elements = document.querySelectorAll<HTMLElement>("[data-magnetic]");

  elements.forEach(el => {
    const strength = parseFloat(el.dataset.magnetic || "0.2");

    el.style.transition = "transform 0.3s cubic-bezier(0.21, 0.47, 0.32, 0.98)";

    el.addEventListener("mousemove", (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

initMagnetic();
document.addEventListener("astro:page-load", initMagnetic);
