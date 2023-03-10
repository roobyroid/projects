const accordion = (triggersSelector) => {
  const accordions = document.querySelectorAll(triggersSelector);

  accordions.forEach((el) => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      // self.classList.toggle('open');
      if (e.target === control || control.contains(e.target)) {
        // если открыт аккордеон
        if (self.classList.contains('open')) {
          self.classList.remove('open');
          control.setAttribute('aria-expanded', false);
          content.setAttribute('aria-hidden', true);
          content.style.maxHeight = null;
        } else {
          // accordions.forEach((accord) => {
          //   const accControl = accord.querySelector('.accordion__control');
          //   const accContent = accord.querySelector('.accordion__content');

          //   accord.classList.remove('open');
          //   accControl.setAttribute('aria-expanded', false);
          //   accContent.setAttribute('aria-hidden', true);
          //   accContent.style.maxHeight = null;
          // });
          self.classList.add('open');
          control.setAttribute('aria-expanded', true);
          content.setAttribute('aria-hidden', false);
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }

    });
  });
};

export default accordion;
