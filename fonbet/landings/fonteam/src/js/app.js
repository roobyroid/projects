// import { isMobile() } from './config/functions.js';
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
import { hasErrors } from './modules/forms.js';
import scrollToSection from './modules/scrollToSection.js';
import { initModal } from './lib/hystmodal.min.js';
import Swiper, { Navigation, EffectCoverflow } from 'swiper';
Swiper.use([Navigation, EffectCoverflow]);
// > - - - - - - - - [app development] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function app() {
  scrollToSection();
  initModal();

  // slider ideas
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

  resizableSwiper('(max-width: 767px)', '.js_ideas-slider .swiper', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.js_ideas-slider .js_btn-slide-next',
      prevEl: '.js_ideas-slider .js_btn-slide-prev',
    },
  });

  //slider players
  const sliderPlayersSettings = {
    loop: true,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    effect: 'coverflow',
    slidesPerView: 'auto',
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 50,
      depth: 200,
      modifier: 2,
      scale: 0.9,
    },
    navigation: {
      nextEl: '.js_players-slider .js_btn-slide-next',
      prevEl: '.js_players-slider .js_btn-slide-prev',
    },
    breakpoints: {
      768: {
        spaceBetween: 40,
        effect: '',
        slidesPerView: 3,
      },
      990: {
        spaceBetween: 60,
        effect: '',
        slidesPerView: 3,
      },
    },
  };
  let sliderPlayers = new Swiper('.js_players-slider .swiper', sliderPlayersSettings);

  const playersAllBtn = document.querySelector('.js_players-all');
  const playersWrapper = document.querySelector('.js_players-slider');
  playersAllBtn.addEventListener('click', () => {
    playersWrapper.classList.toggle('all');
    if (playersWrapper.classList.contains('all')) {
      playersAllBtn.textContent = 'Скрыть';
      sliderPlayers.destroy(true, true);
    } else {
      playersAllBtn.textContent = 'Все игроки';
      sliderPlayers = new Swiper('.js_players-slider .swiper', sliderPlayersSettings);
    }
  });

  // init modal
  const formModal = new HystModal({
    linkAttributeName: 'data-hystmodal',
  });

  //form
  const ideaForm = document.querySelector('.js_form');

  function handleFormSubmit(event) {
    event.preventDefault();
    if (hasErrors(ideaForm)) return;

    const data = serializeForm(event.target);
    console.log(Array.from(data.entries()));
  }

  function serializeForm(formNode) {
    return new FormData(formNode);
  }

  ideaForm.addEventListener('submit', handleFormSubmit);
}

document.addEventListener('DOMContentLoaded', app);
