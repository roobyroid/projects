const mobMenu = () => {
  // mob menu
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const burger = document.querySelector('.header__burger');
  const headerMenu = document.querySelector('.js_menu');

  burger.addEventListener('click', () => {
    body.classList.toggle('scroll-lock');
    body.classList.toggle('scroll-lock--menu');
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
  });

  // закрытие моб меню по клику вне меню
  document.addEventListener('click', function ({target}) {
    const itsHeader = target === header || header.contains(target);
    const itsMenu = target === headerMenu || headerMenu.contains(target);
    const itsOpenMenu = target === burger || burger.contains(target);
    const menuActive = headerMenu.classList.contains('active');
    if (!itsMenu && !itsOpenMenu && !itsHeader && menuActive) {
      body.classList.remove('scroll-lock');
      body.classList.remove('scroll-lock--menu');
      burger.classList.remove('active');
      headerMenu.classList.remove('active');
    }
  });

  // scroll

  const scrollLinks = document.querySelectorAll('.js_scroll-link');
  scrollLinks.forEach((el) => {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      if (headerMenu.classList.contains('active')) {
        body.classList.remove('scroll-lock');
        body.classList.remove('scroll-lock--menu');
        burger.classList.remove('active');
        headerMenu.classList.remove('active');
      }

      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      if (!scrollTarget) {
        return;
      }
      // const topOffset = document.querySelector('.header').offsetHeight;
      const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
};

export default mobMenu;
