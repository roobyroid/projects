window.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.js_anim-el')
    .forEach((item) => item.classList.add('animate'));
});

// create element
const scrollElement = document.createElement('div');

// add styles
scrollElement.style.width = '100px';
scrollElement.style.height = '100px';
scrollElement.style.overflow = 'scroll';
scrollElement.style.visibility = 'hidden';
scrollElement.style.position = 'absolute';
scrollElement.style.top = '-9999px';

document.body.appendChild(scrollElement);

const scrollbarWidth = scrollElement.offsetWidth - scrollElement.clientWidth;

document.body.removeChild(scrollElement);

// check window width and add class
function trackWidthChanges() {
  const bodyWrap = document.querySelector('.body-wrap');
  if (bodyWrap.clientWidth + scrollbarWidth <= 1626) {
    bodyWrap.classList.add('mq');
  } else {
    if (bodyWrap.classList.contains('mq')) bodyWrap.classList.remove('mq');
  }
}

window.addEventListener('load', trackWidthChanges);
window.addEventListener('resize', trackWidthChanges);
