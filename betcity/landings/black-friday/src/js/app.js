// import { isMobile() } from './config/functions.js';
// import { initSpoiler, initDropdown } from './modules/spoilers.js';
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
import gsap from 'gsap';
import { initModal } from './lib/hystmodal.min.js';
import 'simplebar';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
import ResizeObserver from 'resize-observer-polyfill';

window.ResizeObserver = ResizeObserver;

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// > - - - - - - - - [app development] - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function app() {
  initModal();

  // scroll full page
  const media = window.matchMedia('(min-width: 992px)');
  // let observer = ScrollTrigger.normalizeScroll(true);
  if (media.matches) {
    let panels = gsap.utils.toArray('.hero'),
      scrollTween;

    // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
    document.addEventListener(
      'touchstart',
      (e) => {
        if (scrollTween) {
          e.preventDefault();
          e.stopImmediatePropagation();
        }
      },
      { capture: true, passive: false },
    );

    function goToSection(i) {
      scrollTween = gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false },
        // onStart: () => {
        //   observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
        //   observer.enable();
        // },
        duration: 0.2,
        onComplete: () => (scrollTween = null),
        overwrite: true,
      });
    }

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top bottom',
        end: '+=199%',
        onToggle: (self) => self.isActive && !scrollTween && goToSection(i),
      });
    });

    // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      snap: 1 / (panels.length - 1),
    });
  }

  document.querySelector('.js_btn-to-second').addEventListener('click', () => {
    gsap.to(window, {
      duration: 0.2,
      scrollTo: '.js_hero-second',
    });
  });

  // init modal
  const rulesModal = new HystModal({
    linkAttributeName: 'data-hystmodalRules',
  });
  rulesModal.init();
}

document.addEventListener('DOMContentLoaded', app);
