// import { isMobile() } from './config/functions.js';
// import { hasErrors } from './modules/forms.js';
// import { initSpoiler, initDropdown } from './modules/spoilers.js';
// import { initTabs } from './modules/tabs.js';
// import { initHeader } from './modules/header.js';
// import { useDynamicAdapt } from './modules/dynamicAdapt.js';
// import gsap from "gsap";
// import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
// import AOS from 'aos';
// import Rellax from "rellax";
// import fslightbox from 'fslightbox';
// import Ellipsis from 'ellipsis.js';
// import { CountUp } from '../../node_modules/countup.js/dist/countUp.js';
// import noUiSlider from 'nouislider';
import { initModal } from './lib/hystmodal.min.js';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
// > - - - - - - - - [app development] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function app() {
  initModal();

  const modal = new HystModal({
    linkAttributeName: 'data-hystmodal',
  });

  const burger = document.querySelector('.js_burger');
  const headerMenu = document.querySelector('.js_header-menu');

  burger.addEventListener('click', () => {
    headerMenu.classList.toggle('_active');
    burger.classList.toggle('_active');
  });

  // scroll to section
  try {
    const scrollLinks = document.querySelectorAll('.js_scroll-link');
    scrollLinks.forEach((el) => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);

        scrollTarget.scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  } catch (e) {}

  try {
    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
      let swiper;
      breakpoint = window.matchMedia(breakpoint);
      const enableSwiper = function (className, settings) {
        swiper = new Swiper(className, settings);
        if (callback) {
          callback(swiper);
        }
      };
      const checker = function () {
        if (breakpoint.matches) {
          return enableSwiper(swiperClass, swiperSettings);
        } else {
          if (swiper !== undefined) swiper.destroy(true, true);
          return;
        }
      };
      breakpoint.addEventListener('change', checker);
      checker();
    };
    resizableSwiper('(max-width: 768px)', '.js_modal-waves-slider .swiper', {
      slidesPerView: 1,
      pagination: {
        el: '.js_modal-waves-slider .js_slider-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  } catch (e) {}

  // stat slider
  try {
    const statSlider = new Swiper('.js_slider-stat .swiper', {
      slidesPerView: 1,
      pagination: {
        el: '.js_slider-stat .js_slider-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        595: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      },
    });
  } catch (e) {}

  // waves slider
  try {
    const wavesSliders = document.querySelectorAll('.js_waves-slider');
    wavesSliders.forEach((el) => {
      const wavesSlider = el.querySelector('.swiper');
      const wavesSliderNext = el.querySelector('.js_btn-slide-next');
      const wavesSliderPrev = el.querySelector('.js_btn-slide-prev');

      new Swiper(wavesSlider, {
        slidesPerView: 1,

        navigation: {
          nextEl: wavesSliderNext,
          prevEl: wavesSliderPrev,
        },
        breakpoints: {
          320: {
            spaceBetween: 20,
          },
          768: {
            spaceBetween: 120,
          },
        },
      });
    });
  } catch (e) {}

  // prizes slider
  try {
    const prizesSlider = new Swiper('.js_prizes-slider .swiper', {
      slidesPerView: 1,
      pagination: {
        el: '.js_prizes-slider .js_slider-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  } catch (e) {}

  // jury slider
  try {
    const jurySlider = new Swiper('.js_jury-slider .swiper', {
      slidesPerView: 1,
      pagination: {
        el: '.js_jury-slider .js_slider-pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });
  } catch (e) {}

  try {
    const modals = document.querySelectorAll('.js_modal');

    modals.forEach((modal) => {
      const checkboxAgree = modal.querySelector('.js_modal-agree');
      const modalChoiceItems = modal.querySelectorAll('.js_modal-choice');
      const btnNext = modal.querySelector('.js_modal-btn-next');
      const wordsForm = modal.querySelector('.js_modal-words-form');

      let checkAgree = !checkboxAgree;
      let checkChoice = modalChoiceItems.length === 0;

      const updateNextButton = () => {
        btnNext.classList.toggle('_disabled', !checkAgree || !checkChoice);
      };

      if (checkboxAgree) {
        checkboxAgree.addEventListener('change', () => {
          checkAgree = checkboxAgree.checked;
          updateNextButton();
        });
      }

      if (modalChoiceItems.length) {
        modalChoiceItems.forEach((modalChoiceItem) => {
          modalChoiceItem.addEventListener('click', () => {
            modalChoiceItems.forEach((item) => {
              item.style.opacity = '0.3';
            });
            modalChoiceItem.style.opacity = '1';
            checkChoice = true;
            updateNextButton();
          });
        });
      }

      if (wordsForm) {
        wordsForm.addEventListener('submit', (e) => {
          e.preventDefault();
          wordsForm.querySelector('.js_launched-open').click();
        });
      }

      if (btnNext) {
        updateNextButton();
      }
    });
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', app);
