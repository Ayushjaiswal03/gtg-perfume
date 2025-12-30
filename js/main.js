gsap.registerPlugin(ScrollTrigger);

/**
 * Global smooth scroll feel
 * (No paid plugins, safe for assignment)
 */
gsap.to('body', {
  scrollTrigger: {
    trigger: 'body',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.6
  }
});
gsap.utils.toArray('section:not(.hero)').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    // y: 40,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: section,
      start: 'top 85%',
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
  initProductOptions();
  initCounter();
  initAccordion();
});


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});
document.addEventListener('DOMContentLoaded', () => {

  // ===== MEGA MENU =====
  const shopTrigger = document.getElementById('shopTrigger');
  const megaMenu = document.getElementById('megaMenu');

  if (shopTrigger && megaMenu) {
    shopTrigger.addEventListener('mouseenter', () => {
      megaMenu.classList.add('active');
    });

    shopTrigger.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!megaMenu.matches(':hover')) {
          megaMenu.classList.remove('active');
        }
      }, 150);
    });

    megaMenu.addEventListener('mouseenter', () => {
      megaMenu.classList.add('active');
    });

    megaMenu.addEventListener('mouseleave', () => {
      megaMenu.classList.remove('active');
    });
  }

  // ===== SEARCH =====
  searchBtn.addEventListener('click', () => {
  searchWrapper.classList.add('active');
  searchWrapper.querySelector('input').focus();
});

});


//=======Stats section======
gsap.registerPlugin(ScrollTrigger);

gsap.from(".stats-section .stat", {
  scrollTrigger: {
    trigger: ".stats-section",
    start: "top 80%",
    once: true
  },
  opacity: 0,
  y: 40,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.15
});
