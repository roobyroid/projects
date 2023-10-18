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
// var showDebug = false;

// if (!showDebug) {
//   console.log = function() {};
//   console.debug = function() {};
//   console.table = function() {};
// }

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
  let sliderPlayers;
  const sliderPlayersNav = {
    nextEl: '.js_players-slider .js_btn-slide-next',
    prevEl: '.js_players-slider .js_btn-slide-prev',
  };
  const sliderPlayersSettings = {
    loop: true,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    slidesPerView: 3,
    navigation: sliderPlayersNav,
    breakpoints: {
      768: {
        spaceBetween: 40,
      },
      990: {
        spaceBetween: 60,
      },
    },
  };
  const sliderPlayersMobileSettings = {
    loop: true,
    observer: true,
    observeParents: true,
    centeredSlides: true,
    effect: 'coverflow',
    slidesPerView: 'auto',
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 0,
      stretch: 50,
      depth: 200,
      modifier: 2,
      scale: 0.9,
    },
    navigation: sliderPlayersNav,
  };
  // responsive effect players slider
  function playersSlider() {
    const checker = function () {
      if (window.matchMedia('(max-width: 767px)').matches) {
        if (sliderPlayers !== undefined) sliderPlayers.destroy(true, true);
        return (sliderPlayers = new Swiper(
          '.js_players-slider .swiper',
          sliderPlayersMobileSettings,
        ));
      } else {
        if (sliderPlayers !== undefined) sliderPlayers.destroy(true, true);
        return (sliderPlayers = new Swiper('.js_players-slider .swiper', sliderPlayersSettings));
      }
    };
    window.matchMedia('(max-width: 767px)').addEventListener('change', checker);
    checker();
  }

  playersSlider();

  // show more players
  const playersAllBtn = document.querySelector('.js_players-all');
  const playersWrapper = document.querySelector('.js_players-slider');
  playersAllBtn.addEventListener('click', () => {
    playersWrapper.classList.toggle('all');
    if (playersWrapper.classList.contains('all')) {
      playersAllBtn.textContent = 'Скрыть';
      sliderPlayers.destroy(true, true);
    } else {
      playersAllBtn.textContent = 'Все игроки';
      if (window.matchMedia('(max-width: 767px)').matches) {
        sliderPlayers = new Swiper('.js_players-slider .swiper', sliderPlayersMobileSettings);
      } else {
        sliderPlayers = new Swiper('.js_players-slider .swiper', sliderPlayersSettings);
      }
    }
  });

  // init modal
  const formModal = new HystModal({
    linkAttributeName: 'data-hystmodalForm',
    backscroll: false,
  });
  formModal.init();

  const thanksModal = new HystModal({
    linkAttributeName: 'data-hystmodal',
  });
  thanksModal.init();

  //form
  const ideaForm = document.querySelector('.js_form');

  function handleFormSubmit(event) {
    event.preventDefault();
    if (hasErrors(ideaForm)) return;

    const data = serializeForm(event.target);

    // Convert the FormData to a plain JavaScript object
    const formDataObject = {};
    for (const [key, value] of data.entries()) {
      formDataObject[key] = value;
    }

    // Define the URL where you want to send the POST request
    const url = 'https://xcomfeed.com/fonbet/fonteam/send';

    // Create the request headers
    const headers = {
      'Content-Type': 'application/json', // Set the content type to JSON
    };

    // Create the request body
    const requestBody = JSON.stringify(formDataObject);

    // Send the POST request
    fetch(url, {
      method: 'POST',
      headers,
      body: requestBody,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // You can parse the response JSON if needed
      })
      .then((data) => {
        // Handle the response data here if needed
        console.log('Response:', data);

        try {
          thanksModal.open(document.getElementById('thanks'));
        } catch (e) {
          console.error('Error:', error);
        }
      })
      .catch((error) => {
        // Handle errors here
        console.error('Error:', error);
      });
  }

  function serializeForm(formNode) {
    return new FormData(formNode);
  }

  ideaForm.addEventListener('submit', handleFormSubmit);
}

document.addEventListener('DOMContentLoaded', app);
