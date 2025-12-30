gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray(".hero-stat-value").forEach((el, index) => {
  const raw = el.innerText.trim();
  const number = parseInt(raw);
  const suffix = raw.replace(number, "");

  gsap.fromTo(
    el,
    { innerText: 0, opacity: 0, y: 10 },
    {
      innerText: number,
      opacity: 1,
      y: 0,
      duration: 1.4,
      delay: 0.3 + index * 0.2,
      ease: "power3.out",
      snap: { innerText: 1 },
      onUpdate() {
        el.innerText = Math.round(el.innerText) + suffix;
      }
    }
  );
});




/* =====================
   GLOBAL SECTION REVEAL
===================== */
gsap.utils
  .toArray(".collection, .product-section")
  .forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 24,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        once: true
      }
    });
  });


/* =====================
   COMPARISON TABLE
===================== */
const comparisonTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".comparison-section",
    start: "top 70%",
    once: true
  }
});

comparisonTL.from(".comparison-cell", {
  opacity: 0,
  y: 20,
  duration: 0.6,
  ease: "power3.out",
  stagger: {
    each: 0.04,
    from: "start"
  }
});

comparisonTL.from(
  ".comparison-cell .icon",
  {
    scale: 0.6,
    opacity: 0,
    duration: 0.4,
    ease: "back.out(2)",
    stagger: 0.03
  },
  "-=0.3"
);

/* =====================
   STATS SECTION
===================== */
gsap.from(".stats-section .stat-card:hover", {
  scrollTrigger: {
    trigger: ".stats-section",
    start: "top 75%",
    once: true
  },
  opacity: 0,
  y: 32,
  duration: 0.9,
  ease: "power3.out",
  stagger: 0.15
});

/* =====================
   DOM READY
===================== */
document.addEventListener("DOMContentLoaded", () => {
  initGallery();
  initProductOptions();
  initAccordion();

  // Mobile menu
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburger?.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  // Mega menu
  document.addEventListener("DOMContentLoaded", () => {
  const shopTrigger = document.getElementById("shopTrigger");
  const megaMenu = document.getElementById("megaMenu");

  if (!shopTrigger || !megaMenu) return;

  let closeTimeout;

  const openMenu = () => {
    clearTimeout(closeTimeout);
    megaMenu.classList.add("active");
  };

  const closeMenu = () => {
    closeTimeout = setTimeout(() => {
      megaMenu.classList.remove("active");
    }, 200);
  };

  shopTrigger.addEventListener("mouseenter", openMenu);
  shopTrigger.addEventListener("mouseleave", closeMenu);

  megaMenu.addEventListener("mouseenter", openMenu);
  megaMenu.addEventListener("mouseleave", closeMenu);

  // Mobile tap
  shopTrigger.addEventListener("click", (e) => {
    e.preventDefault();
    megaMenu.classList.toggle("active");
  });
});


  // Search
  searchBtn?.addEventListener("click", () => {
    searchWrapper.classList.add("active");
    searchWrapper.querySelector("input")?.focus();
  });
});


//Footer reveal Animation
gsap.registerPlugin(ScrollTrigger);

gsap.from(".site-footer", {
  scrollTrigger: {
    trigger: ".site-footer",
    start: "top 85%",
    once: true
  },
  opacity: 0,
  y: 60,
  duration: 0.9,
  ease: "power3.out"
});

gsap.from(".site-footer .footer-col, .site-footer .newsletter", {
  scrollTrigger: {
    trigger: ".site-footer",
    start: "top 85%",
    once: true
  },
  opacity: 0,
  y: 30,
  duration: 0.7,
  stagger: 0.15,
  ease: "power3.out"
});
