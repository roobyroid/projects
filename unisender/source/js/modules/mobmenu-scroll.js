const mobMenu = () => {
  // mob menu
  const body = document.querySelector('body');
  const headerMenu = document.querySelector('.header__menu');
  const headerBurger = document.querySelector('.header__burger');

  headerBurger.addEventListener('click', () => {
    body.classList.toggle('scroll-lock');
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active');
  });

  // scroll

  const scrollLinks = document.querySelectorAll('.js_scroll-link');
  scrollLinks.forEach((el) => {
    el.addEventListener('click', function (e) {
      e.preventDefault();

      if (headerMenu.classList.contains('active')) {
        body.classList.remove('scroll-lock');
        headerMenu.classList.remove('active');
        headerBurger.classList.remove('active');
      }

      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      if (!scrollTarget) {
        return;
      }
      const topOffset = 30;
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
