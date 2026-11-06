'use strict';

document.querySelector('.print-button').addEventListener('click', () => window.print());

// Section links still work without this enhancement.
if ('IntersectionObserver' in window) {
  const links = Array.from(document.querySelectorAll('.section-nav a'));
  const observer = new IntersectionObserver(entries => {
    const visible = entries.find(entry => entry.isIntersecting);
    if (!visible) return;
    links.forEach(link => {
      if (link.hash === `#${visible.target.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-15% 0px -60% 0px' });
  document.querySelectorAll('.cv-section').forEach(section => observer.observe(section));
}
