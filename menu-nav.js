const dropdown = document.querySelector(".nav-item.has-dropdown");
const trigger = dropdown.querySelector(".nav-trigger");

// Toggle on click
trigger.addEventListener("click", (e) => {
  e.stopPropagation();

  const isOpen = dropdown.classList.contains("open");

  document.querySelectorAll(".nav-item.open").forEach((item) => {
    item.classList.remove("open");
    item.querySelector(".nav-trigger")?.setAttribute("aria-expanded", "false");
  });

  if (!isOpen) {
    dropdown.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");
  }
});

// Close when clicking outside
document.addEventListener("click", () => {
  dropdown.classList.remove("open");
  trigger.setAttribute("aria-expanded", "false");
});

// Close with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    dropdown.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
  }
});
