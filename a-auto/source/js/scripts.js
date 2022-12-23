/* eslint-disable no-unused-vars */
import {ieFix} from './utils/ie-fix';
import Swiper, {Thumbs, Scrollbar, Pagination, Autoplay} from 'swiper';
import mobMenuScroll from './modules/mobmenu-scroll';
import tabs from './modules/tabs';
import {Fancybox} from '@fancyapps/ui';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {Power3} from 'gsap';
import {initModals} from './modules/init-modals';

gsap.registerPlugin(ScrollTrigger);

Swiper.use([Thumbs, Scrollbar, Pagination, Autoplay]);

document.addEventListener('DOMContentLoaded', function () {
  ieFix();

  try {
    initModals();
  } catch (e) { }

  try {
    const homeHeroSwiperSlides = document.querySelectorAll('.js_hero-slider .swiper-slide');

    const homeHeroSlider = new Swiper('.js_hero-slider.swiper', {
      slidesPerView: 1,
      speed: 1500,
      allowTouchMove: false,
      autoplay: {
        delay: 5000,
      },
      loop: homeHeroSwiperSlides.length > 1,
    });
  } catch (e) { }

  mobMenuScroll();
  try {
    tabs('.js_tabs', '.js_tab', '.js_tab-content', 'active');
  } catch (e) { }

  // salon gallery slider
  try {
    const salonSwiperThumbs = new Swiper('.salon__gallery-thumbs', {
      slidesPerView: 5,
      spaceBetween: 10,
      observer: true,
      observeParents: true,
      breakpoints: {
        990: {
          slidesPerView: 6,
        },
        1700: {
          slidesPerView: 7,
        },
      },
    });

    const salonSwiperSlider = new Swiper('.salon__gallery-slider', {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      thumbs: {
        swiper: salonSwiperThumbs,
      },
      scrollbar: {
        el: '.salon__gallery-scroll',
        draggable: true,
      },
    });
  } catch (e) { }

  try {
    let init = false;

    function creditSlider() {
      if (window.innerWidth <= 990) {
        if (!init) {
          init = true;
          swiper = new Swiper('.credit__slider.swiper', {
            slidesPerView: 1,
            spaceBetween: 32,
            pagination: {
              el: '.credit__pagination',
              clickable: true,
            },
          });
        }
      } else if (init) {
        swiper.destroy();
        init = false;
      }
    }
    creditSlider();
    window.addEventListener('resize', swiperCard);
  } catch (e) { }


  // Animation
  // Anim text
  let splitWords = function (selector) {
    let elements = document.querySelectorAll(selector);

    elements.forEach(function (el) {
      el.dataset.splitText = el.textContent;
      el.innerHTML = el.textContent
          .split(/\s/)
          .map(function (word) {
            return word
                .split('-')
                .map(function (word) {
                  return '<span class="word">' + word + '</span>';
                })
                .join('<span class="hyphen">-</span>');
          })
          .join('<span class="whitespace"> </span>');
    });
  };

  let splitLines = function (selector) {
    let elements = document.querySelectorAll(selector);

    splitWords(selector);

    elements.forEach(function (el) {
      let lines = getLines(el);

      let wrappedLines = '';
      lines.forEach(function (wordsArr) {
        wrappedLines += '<span class="line"><span class="words">';
        wordsArr.forEach(function (word) {
          wrappedLines += word.outerHTML;
        });
        wrappedLines += '</span></span>';
      });
      el.innerHTML = wrappedLines;
    });
  };

  let getLines = function (el) {
    let lines = [];
    let line;
    let words = el.querySelectorAll('span');
    let lastTop;
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.offsetTop != lastTop) {
        // Don't start with whitespace
        if (!word.classList.contains('whitespace')) {
          lastTop = word.offsetTop;

          line = [];
          lines.push(line);
        }
      }
      line.push(word);
    }
    return lines;
  };

  splitLines('.js_text');

  let revealText = document.querySelectorAll('.js_text');

  let revealLines = revealText.forEach((element) => {
    const lines = element.querySelectorAll('.words');

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        toggleActions: 'restart none none reset',
      },
    });
    tl.set(element, {
      autoAlpha: 1,
    });
    tl.from(lines, 1, {
      yPercent: 100,
      ease: Power3.out,
      stagger: 0.25,
      delay: 0.2,
      once: true,
    });
  });

  // // Fade
  const boxes = gsap.utils.toArray('.js_faded');
  // Set things up
  gsap.set(boxes, {
    autoAlpha: 0,
    y: 50,
  });

  boxes.forEach((box, i) => {
    // Set up your animation
    const anim = gsap.to(box, {
      duration: 1,
      autoAlpha: 1,
      y: 0,
      paused: true,
    });

    // Use callbacks to control the state of the animation
    ScrollTrigger.create({
      trigger: box,
      end: 'bottom bottom',
      once: true,
      onEnter: (self) => {
        // If it's scrolled past, set the state
        // If it's scrolled to, play it
        self.progress === 1 ? anim.progress(1) : anim.play();
      },
    });
  });

  // Animate img
  // const animateImgs = gsap.utils.toArray('.js_img-animate');
  // // Set things up
  // gsap.set(animateImgs, {
  //   autoAlpha: 0,
  //   scale: 1.1,
  // });

  // animateImgs.forEach((animateImg, i) => {
  //   // Set up your animation
  //   const anim = gsap.to(animateImg, {
  //     duration: 1,
  //     autoAlpha: 1,
  //     scale: 1,
  //     paused: true,
  //   });

  //   // Use callbacks to control the state of the animation
  //   ScrollTrigger.create({
  //     trigger: animateImg,
  //     start: 'top 50%',
  //     once: true,
  //     onEnter: (self) => {
  //       // If it's scrolled past, set the state
  //       // If it's scrolled to, play it
  //       self.progress === 1 ? anim.progress(1) : anim.play();
  //     },
  //   });
  // });

  // Move
  const moveParents = document.querySelectorAll('.js_move-parent');
  moveParents.forEach((moveParent) => {
    const moveBlocks = moveParent.querySelectorAll('.js_move-block');
    moveBlocks.forEach((moveBlock, i) => {
      gsap.to(moveBlock, {
        y: (-10 * 1 + i) + 'vh',
        ease: 'none',
        scrollTrigger: {
          trigger: moveParent,
          start: 'top bottom',
          end: 'bottom top',
          ease: 'power1.inOut',
          scrub: 1,
        },
      });
    });
  });

  // car gallery slider
  try {
    const carSwiperThumbs = new Swiper('.car__gallery-thumbs', {
      slidesPerView: 'auto',
      observer: true,
      observeParents: true,
      allowTouchMove: false,
    });

    const carSwiperSlider = new Swiper('.car__gallery-slider', {
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      thumbs: {
        swiper: carSwiperThumbs,
      },
      scrollbar: {
        el: '.car__gallery-scroll',
        draggable: true,
      },
    });
  } catch (e) { }

  try {
    Fancybox.bind('[data-fancybox]', {
      Thumbs: {
        autoStart: false,
      },
    });
  } catch (e) { }


});
