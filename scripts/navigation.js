
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if (!toggle || !nav) return;

  function openNav() {
    toggle.setAttribute('aria-expanded', 'true');

    const firstLink = nav.querySelector('a');
    if (firstLink) firstLink.focus();
  }

  function closeNav() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus();
  }

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  toggle.addEventListener('click', () => {
    isOpen() ? closeNav() : openNav();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) {
      closeNav();
    }
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!isOpen()) return;
    const clickInside = toggle.contains(e.target) || nav.contains(e.target);
    if (!clickInside) closeNav();
  });
});