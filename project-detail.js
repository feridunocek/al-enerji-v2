(function () {
  'use strict';

  var burger = document.getElementById('navBurger');
  var drawer = document.getElementById('navMobile');
  var servicesToggle = document.getElementById('mobHizToggle');
  var servicesSub = document.getElementById('mobHizSub');

  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = burger.classList.toggle('open');
      drawer.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        burger.classList.remove('open');
        drawer.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  if (servicesToggle && servicesSub) {
    function toggleServices() {
      var open = servicesSub.classList.toggle('open');
      servicesToggle.classList.toggle('open', open);
      servicesToggle.setAttribute('aria-expanded', String(open));
    }
    servicesToggle.addEventListener('click', toggleServices);
    servicesToggle.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      toggleServices();
    });
  }

  var items = Array.prototype.slice.call(document.querySelectorAll('[data-gallery]'));
  var lightbox = document.getElementById('projectLightbox');
  if (!items.length || !lightbox) return;

  var lightboxImage = lightbox.querySelector('img');
  var caption = lightbox.querySelector('.lightbox-caption');
  var closeButton = lightbox.querySelector('.lightbox-close');
  var previousButton = lightbox.querySelector('.lightbox-prev');
  var nextButton = lightbox.querySelector('.lightbox-next');
  var currentIndex = 0;
  var previousFocus = null;

  function render(index) {
    currentIndex = (index + items.length) % items.length;
    var image = items[currentIndex].querySelector('img');
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    caption.textContent = image.alt;
  }

  function openLightbox(index) {
    previousFocus = document.activeElement;
    render(index);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeButton.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (previousFocus) previousFocus.focus();
  }

  items.forEach(function (item, index) {
    item.addEventListener('click', function () { openLightbox(index); });
  });
  closeButton.addEventListener('click', closeLightbox);
  previousButton.addEventListener('click', function () { render(currentIndex - 1); });
  nextButton.addEventListener('click', function () { render(currentIndex + 1); });
  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (event) {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') render(currentIndex - 1);
    if (event.key === 'ArrowRight') render(currentIndex + 1);
  });
}());
