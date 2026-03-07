function initFadeUp() {
  const elements = document.querySelectorAll<HTMLElement>("[data-fade-up]");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.delay ?? "0";
          el.style.transitionDelay = `${delay}s`;
          el.classList.add("in-view");
          observer.unobserve(el);
        }
      });
    },
    { rootMargin: "-50px" }
  );

  elements.forEach(el => observer.observe(el));
}

initFadeUp();
document.addEventListener("astro:page-load", initFadeUp);
