/* eslint-disable no-unused-vars */
import {ieFix} from './utils/ie-fix';
import Swiper, {Navigation, Pagination} from 'swiper';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import mobMenuScroll from './modules/mobmenu-scroll';
import accordion from './modules/accordion';
import tabs from './modules/tabs';

Swiper.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  ieFix();
  mobMenuScroll();
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
  // lang
  try {
    const langParent = document.querySelector('.js_lang');
    const langHead = langParent.querySelector('.js_lang-head');
    const langHeadVal = langHead.querySelector('.js_lang-val');
    const langItems = langParent.querySelectorAll('li');

    langHead.addEventListener('click', () => {
      langParent.classList.toggle('open');
    });

    langItems.forEach((langItem) => {
      langItem.addEventListener('click', (event) => {
        let langText = event.target.textContent;
        event.target.textContent = langHeadVal.textContent;
        langHeadVal.textContent = langText;
        langParent.classList.remove('open');
      });
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
    gsap.to('.js_text-line-left', {
      xPercent: -50,
      ease: 'none',
      scrollTrigger: {
        start: 'top bottom',
        trigger: '.lines',
        scrub: 1,
      },
    });

    gsap.to('.js_text-line-right', {
      xPercent: 30,
      ease: 'none',
      scrollTrigger: {
        // markers: {startColor: 'blue', endColor: 'red'},
        start: 'top bottom',
        trigger: '.lines',
        scrub: 1,
      },
    });
  } catch (e) {}
});
