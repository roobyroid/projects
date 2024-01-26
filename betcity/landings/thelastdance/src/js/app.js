// import { isMobile() } from './config/functions.js';
// import { initTabs } from './modules/tabs.js';
// import { initHeader } from './modules/header.js';
// import { useDynamicAdapt } from './modules/dynamicAdapt.js';
// import AOS from 'aos';
// import Rellax from "rellax";
// import fslightbox from 'fslightbox';
// import Ellipsis from 'ellipsis.js';
// import { CountUp } from '../../node_modules/countup.js/dist/countUp.js';
// import noUiSlider from 'nouislider';
// import scrollToSection from './modules/scrollToSection.js';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
import { initModal } from './lib/hystmodal.min.js';
import 'simplebar';
import ResizeObserver from 'resize-observer-polyfill';
import accordion from './modules/accordion.js';

window.ResizeObserver = ResizeObserver;

// > - - - - - - - - [app development] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function app() {
  initModal();
  // init modal
  const rulesModal = new HystModal({
    linkAttributeName: 'data-hystmodalRules',
    backscroll: false,
  });
  rulesModal.init();
}

document.addEventListener('DOMContentLoaded', app);
