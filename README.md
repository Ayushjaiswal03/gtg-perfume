Header & Hero Section Implementation

=> The header and hero section were implemented with a strong focus on pixel accuracy, performance, and real-world interaction patterns.

The header is fixed and layered above the hero to match the design intent, with a responsive layout that transitions cleanly into a hamburger menu on tablet and mobile. Desktop navigation includes subtle hover interactions for visual feedback, along with a mega menu for the “Shop” entry. The mega menu is intentionally driven by state and transitions rather than height-based animations to ensure smooth, GPU-accelerated motion across browsers.

The search interaction expands on hover in desktop view, avoiding click-based toggles for a more natural navigation experience. CSS hover and focus-within states are used instead of JavaScript where possible to keep interactions lightweight and reliable.

The hero section is built as a single background-driven layout, with content positioned above the horizon line to prevent overlap with the foreground image. The background scales responsively without distortion, and spacing is adjusted at each breakpoint to maintain visual balance. To avoid layout shifts or scroll artifacts on load, the hero is excluded from scroll-based entrance animations.

GSAP is used selectively for progressive reveal animations on sections below the fold. Browser overscroll behavior is intentionally disabled to prevent background bleed and ensure a solid, app-like landing experience, especially on macOS.

All interactions and animations were tested across Chrome, Firefox, Edge, and Safari to ensure consistent behavior.