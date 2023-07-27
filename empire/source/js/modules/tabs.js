const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    content.forEach((item) => {
      item.classList.remove(activeClass);
    });

    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    content[i].classList.add(activeClass);
    tab[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) &&
      !target.classList.contains(activeClass) &&
      !target.parentNode.classList.contains(activeClass)
    ) {
      tab.forEach((item, i) => {
        if (target === item || target.parentNode === item) {
          content.forEach((contentItem) => {
            if (contentItem.classList.contains(activeClass)) {
              contentItem.classList.add('animate');
            }
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
          showTabContent(i);
          header.style.pointerEvents = 'none';

          setTimeout(() => {
            content.forEach((contentItem) => {
              if (contentItem.classList.contains('animate')) {
                contentItem.classList.remove(activeClass, 'animate');
              }
            });
            header.style.pointerEvents = 'all';
          }, 700);
        }
      });
    }
  });
};

export default tabs;
