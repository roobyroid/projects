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
// import { initModal } from './lib/hystmodal.min.js';
// import Swiper, { Navigation } from 'swiper';
// Swiper.use([Navigation]);
import 'simplebar';
import ResizeObserver from 'resize-observer-polyfill';
import accordion from './modules/accordion.js';
import lang from './modules/lang.js';

window.ResizeObserver = ResizeObserver;
// > - - - - - - - - [app development] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function app() {
  lang();
  accordion('.js_accordion');
  // initModal();

  // const myModal = new HystModal({
  //   linkAttributeName: 'data-hystmodal',
  // });
}

document.addEventListener('DOMContentLoaded', app);
