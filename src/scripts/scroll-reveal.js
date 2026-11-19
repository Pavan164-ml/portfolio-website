function initScrollReveal(element) {
  const delay = parseInt(element.dataset.delay || '0', 10);
  const duration = parseInt(element.dataset.duration || '800', 10);
  const easing = element.dataset.easing || 'cubic-bezier(0.16, 1, 0.3, 1)';
  const threshold = parseFloat(element.dataset.threshold || '0.1');
  const rootMargin = element.dataset.rootMargin || '0px 0px -50px 0px';
  const once = element.dataset.once !== 'false';

  element.style.setProperty('--duration', duration + 'ms');
  element.style.setProperty('--easing', easing);
  element.style.setProperty('--delay', delay + 'ms');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        if (once) {
          observer.unobserve(entry.target);
        }
      } else if (!once) {
        entry.target.classList.remove('is-visible');
      }
    });
  }, { threshold: threshold, rootMargin: rootMargin });

  observer.observe(element);
}

function initAllScrollReveal() {
  document.querySelectorAll('.scroll-reveal:not([data-initialized])').forEach(function(el) {
    el.setAttribute('data-initialized', 'true');
    initScrollReveal(el);
  });
}

document.addEventListener('DOMContentLoaded', initAllScrollReveal);
document.addEventListener('astro:after-swap', initAllScrollReveal);