/* eslint-disable no-unused-vars */
// import {ieFix} from './utils/ie-fix';
// import Swiper, {Navigation, Pagination} from 'swiper';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import mobMenuScroll from './modules/mobmenu-scroll';
// import accordion from './modules/accordion';
// import tabs from './modules/tabs';
// import lang from './modules/lang';

// Swiper.use([Navigation, Pagination]);
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
  mobMenuScroll();

  const animationElements = document.querySelectorAll('.js_animation');
  if (animationElements.length) {
    animationElements.forEach((animationElement) => {
      animationElement.classList.add('animate');
    });
  }

  try {
    // parallax text
    if (document.querySelector('.js_parallax-text')) {
      gsap.from('.js_parallax-text', {
        y: '10%',
        duration: 3,
        scrollTrigger: {
          trigger: '.js_parallax-text',
          scrub: 1,
        },
      });

      let mm = gsap.matchMedia();

      mm.add('(min-width: 990px)', () => {
        gsap.from('.js_parallax-text2', {
          y: '40%',
          duration: 3,
          scrollTrigger: {
            trigger: '.js_parallax-text2',
            scrub: 1,
          },
        });
        gsap.from('.js_parallax-text3', {
          y: '-40%',
          duration: 2,
          scrollTrigger: {
            trigger: '.js_parallax-text3',
            scrub: 1,
          },
        });
      });
    }

    // parallax bg
    const bgImgs = document.querySelectorAll('.js_parallax-bg');
    if (bgImgs.length) {
      bgImgs.forEach((bgImg) => {
        gsap.from(bgImg, {
          y: '-20%',
          duration: 2,
          scrollTrigger: {
            trigger: bgImg,
            scrub: 1,
          },
        });
      });
    }
  } catch (e) {}

  // animate title line
  const titles = document.querySelectorAll('.js_title-animate');
  if (titles.length) {
    titles.forEach((title) => {
      gsap.to(title, {
        ease: 'none',
        scrollTrigger: {
          trigger: title,
          start: 'top bottom-=100',
          onEnter: () => {
            title.classList.add('animate');
          },
        },
      });
    });
  }

  // scroll lines
  if (document.querySelector('.js_text-line-left')) {
    gsap.to('.js_text-line-left', {
      xPercent: -60,
      ease: 'none',
      scrollTrigger: {
        start: 'top bottom',
        trigger: '.world__line',
        scrub: 1,
      },
    });
  }
});
