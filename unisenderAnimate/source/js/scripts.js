/* eslint-disable no-unused-vars */
import LocomotiveScroll from 'locomotive-scroll';
import {ieFix} from './utils/ie-fix';
import Swiper, {Pagination, Navigation} from 'swiper';
import {initModals} from './modules/init-modals';

Swiper.use([Pagination, Navigation]);

document.addEventListener('DOMContentLoaded', function () {
  ieFix();
  try {
    initModals();
  } catch (e) { }
  // Work Slider
  const workSlider = new Swiper('.js_work-slider .swiper', {
    slidesPerView: 'auto',
    speed: 1000,
    centeredSlides: true,
    mousewheel: true,
    cssMode: false,
    navigation: {
      nextEl: '.js_work-slider .js_btn-slide-next',
      prevEl: '.js_work-slider .js_btn-slide-prev',
    },
    breakpoints: {
      320: {
        autoHeight: true,
        cssMode: false,
      },
      575: {
        autoHeight: false,
        cssMode: true,
      },
    },
  });
  // Marketing Slider
  const marketingSlider = new Swiper('.js_marketing-slider .swiper', {
    slidesPerView: 'auto',
    speed: 1000,
    centeredSlides: true,
    mousewheel: true,
    cssMode: false,
    navigation: {
      nextEl: '.js_marketing-slider .js_btn-slide-next',
      prevEl: '.js_marketing-slider .js_btn-slide-prev',
    },
    breakpoints: {
      320: {
        autoHeight: true,
        cssMode: false,
      },
      575: {
        autoHeight: false,
        cssMode: true,
      },
    },
  });

  // Stat Slider
  const statSlider = new Swiper('.js_stat-slider .swiper', {
    slidesPerView: 1,
    mousewheel: true,
    cssMode: false,
    navigation: {
      nextEl: '.js_stat-slider .js_btn-slide-next',
      prevEl: '.js_stat-slider .js_btn-slide-prev',
    },
    pagination: {
      el: '.js_stat-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        autoHeight: true,
        cssMode: false,
      },
      575: {
        autoHeight: false,
        cssMode: true,
      },
    },
  });

  // Trend Slider
  const trendsSlider = new Swiper('.js_trends-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    mousewheel: true,
    cssMode: true,
    navigation: {
      nextEl: '.js_trends-slider .js_btn-slide-next',
      prevEl: '.js_trends-slider .js_btn-slide-prev',
    },
    pagination: {
      el: '.js_trends-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  // Examples Slider
  let init = false;
  let swiperExamples;

  function creditSlider() {
    if (window.innerWidth <= 767) {
      if (!init) {
        init = true;
        swiperExamples = new Swiper('.examples__wrap.swiper', {
          slidesPerView: 1,
          spaceBetween: 32,
          pagination: {
            el: '.js_examples-pagination',
            clickable: true,
          },
        });
      }
    } else if (init) {
      swiperExamples.destroy();
      init = false;
    }
  }
  creditSlider();
  window.addEventListener('resize', creditSlider);

  // Business Slider
  const businessSlider = new Swiper('.js_business-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    mousewheel: true,
    cssMode: false,
    navigation: {
      nextEl: '.js_business-slider .js_btn-slide-next',
      prevEl: '.js_business-slider .js_btn-slide-prev',
    },
    pagination: {
      el: '.js_business-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      320: {
        autoHeight: true,
        cssMode: false,
      },
      575: {
        autoHeight: false,
        cssMode: true,
      },
    },
  });

  // Myths Slider
  const mythsSlider = new Swiper('.js_myths-slider .swiper', {
    slidesPerView: 'auto',
    speed: 1000,
    mousewheel: true,
    cssMode: false,
    centeredSlides: true,
    navigation: {
      nextEl: '.js_myths-slider .js_btn-slide-next',
      prevEl: '.js_myths-slider .js_btn-slide-prev',
    },
    breakpoints: {
      320: {
        autoHeight: true,
        cssMode: false,
      },
      575: {
        autoHeight: false,
        cssMode: true,
      },
    },
  });


  // Animate
  const media = window.matchMedia('(max-width: calc(993px - 1px))');
  let scroller;
  if (!media.matches) {
    const header = document.querySelector('header');
    window.onload = function () {
      scroller = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        getDirection: true,
        mobile: {
          breakpoint: 0,
          smooth: false,
        },
        tablet: {
          breakpoint: 990,
          smooth: false,
        },
      });
      scroller.update();

      scroller.on('call', (func, state, obj) => {
        if (!obj.target.classList.contains('animate-in-up')) {
          obj.target.classList.add('animate-in-up');
        }
      });
      scroller.on('scroll', (instance) => {
        if (instance.scroll.y > 50) {
          header.classList.add('is-scroll');
        } else {
          header.classList.remove('is-scroll');
        }
      });

      new ResizeObserver(() => scroller.update()).observe(
          document.querySelector('[data-scroll-container]')
      );
    };
  }

  // mob menu
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const headerMenu = document.querySelector('.header__menu');
  const headerBurger = document.querySelector('.header__burger');

  headerBurger.addEventListener('click', () => {
    body.classList.toggle('scroll-lock');
    headerMenu.classList.toggle('active');
    headerBurger.classList.toggle('active');
  });

  // scroll
  const scrollLinks = document.querySelectorAll('[data-scroll-to]');
  scrollLinks.forEach((el) => {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      if (media.matches) {
        if (headerMenu.classList.contains('active')) {
          body.classList.remove('scroll-lock');
          headerMenu.classList.remove('active');
          headerBurger.classList.remove('active');
        }

        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        if (!scrollTarget) {
          return;
        }
        const topOffset = 30;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        });

      } else if (!media.matches && e.target.className === 'header__nav-link') {
        let href = e.target.getAttribute('href');
        scroller.scrollTo(href);
      }
    });
  });


  document.querySelectorAll('.form__btn').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
});
