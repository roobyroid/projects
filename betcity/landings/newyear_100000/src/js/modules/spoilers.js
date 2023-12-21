const spoilers = {
  spoiler() {
    document.addEventListener('click', function (e) {
      const spoilerTrigger = e.target.closest('[data-spoiler]');
      if (spoilerTrigger) {
        const spoilerData = spoilerTrigger.dataset.spoiler;
        console.log(spoilerData)
        console.log(window.innerWidth)
        if (!spoilerData || window.innerWidth <= spoilerData) {
          spoilers.openSpoiler(spoilerTrigger);
        }
      }
    });
  },

  dropdown() {
    let dropdownContent;
    let dropdownTrigger;
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-dropdown]')) {
        dropdownTrigger = e.target.closest('[data-dropdown]');
        dropdownTrigger.classList.toggle('_active-dropdown');
        dropdownTrigger.setAttribute(
          'aria-expanded',
          dropdownTrigger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true',
        );

        dropdownContent = dropdownTrigger.nextElementSibling;
        dropdownContent.classList.toggle('_active-dropdown-content');
        dropdownContent.setAttribute(
          'aria-hidden',
          dropdownContent.getAttribute('aria-hidden') === 'true' ? 'false' : 'true',
        );
      } else if (
        document.querySelector('._active-dropdown-content') &&
        !e.target.closest('._active-dropdown-content')
      ) {
        const dropdownTriggers = document.querySelectorAll('._active-dropdown');
        dropdownTriggers.forEach((trigger) => {
          trigger.classList.remove('_active-dropdown');
          dropdownTrigger.setAttribute(
            'aria-expanded',
            dropdownTrigger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true',
          );

          trigger.nextElementSibling.classList.remove('_active-dropdown-content');
          dropdownContent.setAttribute(
            'aria-hidden',
            dropdownContent.getAttribute('aria-hidden') === 'true' ? 'false' : 'true',
          );
        });
      }
    });
  },

  openSpoiler(spoilerTrigger) {
    spoilerTrigger.classList.toggle('_active-spoiler');
    spoilerTrigger.setAttribute(
      'aria-expanded',
      spoilerTrigger.getAttribute('aria-expanded') === 'true' ? 'false' : 'true',
    );

    const spoilerContent = spoilerTrigger.nextElementSibling;
    spoilerContent.classList.toggle('_active-spoiler-content');
    spoilerContent.setAttribute(
      'aria-hidden',
      spoilerContent.getAttribute('aria-hidden') === 'true' ? 'false' : 'true',
    );
    spoilerContent.style.maxHeight = spoilerContent.style.maxHeight
      ? null
      : `${spoilerContent.scrollHeight}px`;
  },
};

export const initSpoiler = spoilers.spoiler;
export const initDropdown = spoilers.dropdown;
