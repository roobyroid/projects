function scrollToSection() {
  const scrollLinks = document.querySelectorAll('.js_scroll-link');
  scrollLinks.forEach((el) => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);

      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
        top: elementPosition,
        behavior: 'smooth',
      });
    });
  });
}

export default scrollToSection;
