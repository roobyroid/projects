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
};

export default mobMenu;
