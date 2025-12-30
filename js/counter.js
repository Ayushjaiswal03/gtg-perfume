gsap.utils.toArray(".stat-value").forEach((el) => {
  const value = parseInt(el.innerText);

  gsap.fromTo(
    el,
    { innerText: 0 },
    {
      innerText: value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
      snap: { innerText: 1 },
      onUpdate: function () {
        el.innerText = Math.round(el.innerText) + "%";
      },
    }
  );
});

