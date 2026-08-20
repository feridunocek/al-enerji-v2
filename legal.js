const burger = document.getElementById('navBurger');
const drawer = document.getElementById('navMobile');
if (burger && drawer) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    drawer.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    burger.classList.remove('open');
    drawer.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }));
}
const serviceToggle = document.getElementById('mobHizToggle');
const serviceSub = document.getElementById('mobHizSub');
if (serviceToggle && serviceSub) {
  serviceToggle.addEventListener('click', () => {
    serviceToggle.classList.toggle('open');
    serviceSub.classList.toggle('open');
  });
}
