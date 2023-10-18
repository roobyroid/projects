function scrollToSection() {
  const scrollLinks = document.querySelectorAll('.js_scroll-link');
  const header = document.querySelector('.header');
  scrollLinks.forEach((el) => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const headerHeight = header.offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top - headerHeight;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth',
      });
    });
  });
}

export default scrollToSection;
