/* eslint-disable no-unused-vars */
import {ieFix} from './utils/ie-fix';
import Swiper, {Navigation, Pagination} from 'swiper';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import mobMenuScroll from './modules/mobmenu-scroll';
import accordion from './modules/accordion';
import tabs from './modules/tabs';
import lang from './modules/lang';

Swiper.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  ieFix();
  mobMenuScroll();
  lang();
  tabs(
      '.js_payments-tabs',
      '.js_payments-tabs-item',
      '.js_payment-screens',
      'active'
  );

  // soc header
  try {
    const socParent = document.querySelector('.js_soc');
    const socOpen = document.querySelector('.js_soc-open');
    const socClose = document.querySelector('.js_soc-close');
    socOpen.addEventListener('click', () => {
      socParent.classList.add('open');
    });
    socClose.addEventListener('click', () => {
      socParent.classList.remove('open');
    });
  } catch (e) {}

  // benefits slider
  try {
    const benefitsSlider = new Swiper('.js_benefits-slider .swiper', {
      slidesPerView: 1.4,
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: '.js_btn-benefits-next',
        prevEl: '.js_btn-benefits-prev',
      },
      breakpoints: {
        575: {
          slidesPerView: 1.8,
          loop: true,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2.1,
          loop: true,
          centeredSlides: true,
        },
        992: {
          centeredSlides: false,
          loop: false,
          slidesPerView: 4,
        },
      },
    });
  } catch (e) {}

  // payments slider
  try {
    let swiperInit = false;
    let paymentSlider;
    function enableSwiper() {
      if (window.innerWidth <= 991) {
        if (!swiperInit) {
          swiperInit = true;
          paymentSlider = new Swiper('.js_payment-slider .swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
              el: '.js_payment-slider .js_slider-pagination',
              type: 'bullets',
              clickable: true,
            },
          });
        }
      } else if (swiperInit) {
        paymentSlider.destroy();
        swiperInit = false;
      }
    }
    enableSwiper();
    window.addEventListener('resize', enableSwiper);
  } catch (e) {}

  // accordion
  try {
    accordion('.faq__item');
  } catch (e) {}

  // cards animate
  try {
    gsap.to('.js_card-scale', {
      scale: () => 1 - 5 * 0.055,
      ease: 'none',
      scrollTrigger: {
        start: 'top center',
        trigger: '.cards',
        scrub: 1,
      },
    });
    gsap.to('.js_cards-roulette', {
      rotation: 360 * 0.5,
      ease: 'none',
      scrollTrigger: {
        start: 'top center',
        trigger: '.cards',
        scrub: 1,
      },
    });
  } catch (e) {}

  // scroll lines
  try {
    const leftLines = document.querySelectorAll('.js_text-line-left');
    leftLines.forEach((leftLine) => {
      gsap.to(leftLine, {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          start: 'top bottom',
          trigger: leftLine.closest('.lines'),
          scrub: 1,
        },
      });
    });
    const rightLines = document.querySelectorAll('.js_text-line-right');
    rightLines.forEach((rightLine) => {
      gsap.to(rightLine, {
        xPercent: 30,
        ease: 'none',
        scrollTrigger: {
          start: 'top bottom',
          trigger: rightLine.closest('.lines'),
          scrub: 1,
        },
      });
    });
  } catch (e) {}
});
