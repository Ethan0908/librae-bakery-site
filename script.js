const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = nav ? nav.querySelectorAll('a') : [];
const mq = window.matchMedia('(max-width: 920px)');

if (toggle && nav) {
  const setMenuState = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => {
    setMenuState(!nav.classList.contains('is-open'));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      setMenuState(false);
    });
  });

  mq.addEventListener('change', (event) => {
    if (!event.matches) {
      setMenuState(false);
    }
  });
}
