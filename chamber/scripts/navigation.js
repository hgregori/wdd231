document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (!navToggle || !primaryNav) return;

  const closeMenu = () => {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    primaryNav.classList.remove("is-open");
  };

  const openMenu = () => {
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    primaryNav.classList.add("is-open");
  };

  // Toggle on click
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  // Close with Escape key when focus is within nav
  primaryNav.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      navToggle.focus();
    }
  });

  // Optional: click outside to close
  document.addEventListener("click", (e) => {
    const isClickInside =
      primaryNav.contains(e.target) || navToggle.contains(e.target);
    if (!isClickInside && primaryNav.classList.contains("is-open")) {
      closeMenu();
    }
  });
});