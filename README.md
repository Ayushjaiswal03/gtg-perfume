# GTG Perfumes – Frontend Assignment

## Overview

This project is a responsive frontend implementation for **GTG Perfumes**, focused on creating a clean, premium e-commerce product experience. The assignment demonstrates layout structuring, UI interactions, animations, and responsiveness across all major devices.

The goal was to closely follow the design while ensuring smooth user interactions and scalable code.

---

## Tech Stack

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (Vanilla)
- GSAP (ScrollTrigger)
- Font Awesome (Icons)

---

## Key Features Implemented

### 1. Responsive Layout
- Desktop, tablet, and mobile layouts handled using media queries
- Special care taken for:
  - iPad portrait & landscape (≤1024px)
  - Mobile devices (≤768px & ≤480px)
- All sections are centered properly and avoid horizontal overflow

---

### 2. Product Gallery
- Main product image with navigation arrows
- Thumbnail grid below the main image
- Smooth image transitions on interaction

---

### 3. Subscription Accordion
- Single and Double subscription options
- Only one subscription can be active at a time
- Accordion expands and collapses smoothly
- Automatically updates selected state and pricing

---

### 4. Fragrance Selection
- Radio-based fragrance selection cards
- Visual active state for selected fragrance
- “Best Seller” badge support
- Layout and spacing closely matched to the design

---

### 5. Included Items Section
- Clearly separated “Every 30 Days” and “One Time (Free)” cards
- Image alignment and spacing consistent across devices
- Scales down cleanly for tablets and mobile screens

---

### 6. Button Hover Animations
- Subtle lift and shadow effect on hover
- Press feedback on active state
- Applied consistently across:
  - Add to Cart
  - Shop Now
  - Subscribe
  - Icon buttons

This keeps interactions modern without feeling over-animated.

---

### 7. Footer
- Fully responsive footer layout
- Social media icons using Font Awesome
- Newsletter signup section
- Footer content centers properly on tablets and mobile

---

### 8. Footer Reveal Animation
- Footer fades in and slides upward when scrolled into view
- Child elements animate with a staggered effect
- Animation triggers only once for better performance

---

## Performance & UX Considerations

- GSAP animations use `once: true` to avoid re-triggering
- `will-change` used on animated elements for smoother rendering
- No unnecessary reflows or layout shifts
- Clean hover states for better accessibility and feedback

---

## Possible Improvements

- Replace Font Awesome with inline SVGs for better performance
- Add keyboard accessibility for accordion interactions
- Add lazy loading for gallery images
- Integrate backend cart functionality

---

## Final Notes

The project was built with a focus on:
- Clean structure
- Maintainable CSS
- Smooth user experience
- Real-world e-commerce behavior

All animations and interactions are intentionally subtle to match a premium brand feel.
