/* =========================
   SUBSCRIPTION ACCORDION
========================= */

const subscriptions = document.querySelectorAll('.subscription');
const addToCartBtn = document.getElementById('addToCart');

/**
 * Close all subscriptions
 */
function closeAllSubscriptions() {
  subscriptions.forEach(sub => {
    sub.classList.remove('active');
    const radio = sub.querySelector('.subscription-header input[type="radio"]');
    if (radio) radio.checked = false;
  });
}

/**
 * Open a specific subscription
 */
function openSubscription(subscription) {
  subscription.classList.add('active');
  const radio = subscription.querySelector('.subscription-header input[type="radio"]');
  if (radio) radio.checked = true;
}

/**
 * Handle header click
 */
subscriptions.forEach(subscription => {
  const header = subscription.querySelector('.subscription-header');

  header.addEventListener('click', () => {
    if (subscription.classList.contains('active')) return;

    closeAllSubscriptions();
    openSubscription(subscription);
    updateCartLink();
  });
});

/* =========================
   FRAGRANCE SELECTION
========================= */

/**
 * Returns selected fragrance value for a given group
 */
function getSelectedValue(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : null;
}

/* =========================
   ADD TO CART URL (9 CASES)
========================= */

function updateCartLink() {
  const activeSubscription = document.querySelector('.subscription.active');
  if (!activeSubscription) return;

  const type = activeSubscription.dataset.subscription;

  let f1 = null;
  let f2 = null;

  if (type === 'single') {
    f1 = getSelectedValue('single-f1');
  }

  if (type === 'double') {
    f1 = getSelectedValue('double-f1');
    f2 = getSelectedValue('double-f2');
  }

  /*
    URL structure (example):
    /cart?subscription=single&f1=original
    /cart?subscription=double&f1=original&f2=rose
  */

  let url = `/cart?subscription=${type}`;

  if (f1) url += `&f1=${f1}`;
  if (f2) url += `&f2=${f2}`;

  addToCartBtn.setAttribute('href', url);
}

/* =========================
   RADIO CHANGE LISTENERS
========================= */

// Recompute cart URL whenever any fragrance changes
document.querySelectorAll(
  'input[type="radio"][name^="single-"], input[type="radio"][name^="double-"]'
).forEach(radio => {
  radio.addEventListener('change', updateCartLink);
});

/* =========================
   INIT STATE
========================= */

// Ensure correct state on page load
document.addEventListener('DOMContentLoaded', () => {
  closeAllSubscriptions();

  const defaultSub = document.querySelector('.subscription[data-subscription="single"]');
  if (defaultSub) {
    openSubscription(defaultSub);
    updateCartLink();
  }
});


/* =========================
   OPEN DEFAULT ON SCROLL
========================= */

const productSection = document.querySelector('.product-section');
let openedOnce = false;

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting && !openedOnce) {
      const single = document.querySelector(
        '.subscription[data-subscription="single"]'
      );

      if (single) {
        closeAllSubscriptions();
        openSubscription(single);
        updateCartLink();
        openedOnce = true;
      }
    }
  },
  {
    threshold: 0.35
  }
);

if (productSection) {
  observer.observe(productSection);
}
