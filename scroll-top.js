(function () {
  'use strict';

  var lang = document.documentElement.lang === 'en' ? 'en' : 'tr';
  var label = lang === 'en' ? 'Back to top' : 'Yukarı dön';
  var button = document.createElement('button');

  button.type = 'button';
  button.className = 'scroll-top';
  button.setAttribute('aria-label', label);
  button.setAttribute('title', label);
  button.innerHTML = '<span aria-hidden="true">↑</span>';
  document.body.appendChild(button);

  function updateVisibility() {
    button.classList.toggle('is-visible', window.scrollY > 600);
  }

  button.addEventListener('click', function () {
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });

  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();
}());
