gsap.utils.toArray(".stats-section .stat-value").forEach((el) => {
  const raw = el.innerText.trim();
  const number = parseInt(raw);
  const suffix = raw.replace(number, "");

  const isHero = el.closest(".hero");

  gsap.fromTo(
    el,
    { innerText: 0 },
    {
      innerText: number,
      duration: 1.6,
      ease: "power2.out",
      snap: { innerText: 1 },
      scrollTrigger: isHero
        ? null                          
        : {
            trigger: ".stats-section",  
            start: "top 75%",
            once: true
          },
      onUpdate() {
        el.innerText = Math.round(el.innerText) + suffix;
      }
    }
  );
});
