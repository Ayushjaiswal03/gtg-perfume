document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  if (!accordionItems.length) return;

  // 🔥 Ensure first accordion is open by default
  accordionItems.forEach((item, index) => {
    const icon = item.querySelector(".accordion-icon");

    if (index === 0) {
      item.classList.add("active");
      if (icon) icon.textContent = "−";
    } else {
      item.classList.remove("active");
      if (icon) icon.textContent = "+";
    }
  });

  // 🔁 Click handling
  accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");
    const icon = item.querySelector(".accordion-icon");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Close all
      accordionItems.forEach(other => {
        other.classList.remove("active");
        const otherIcon = other.querySelector(".accordion-icon");
        if (otherIcon) otherIcon.textContent = "+";
      });

      // Open clicked (if it wasn't already open)
      if (!isOpen) {
        item.classList.add("active");
        if (icon) icon.textContent = "−";
      }
    });
  });
});
