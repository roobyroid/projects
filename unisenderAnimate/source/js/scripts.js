/* eslint-disable no-unused-vars */
import LocomotiveScroll from 'locomotive-scroll';
import {ieFix} from './utils/ie-fix';
import Swiper, {Pagination, Navigation} from 'swiper';
import mobMenuScroll from './modules/mobmenu-scroll';
import {initModals} from './modules/init-modals';

Swiper.use([Pagination, Navigation]);

document.addEventListener('DOMContentLoaded', function () {
  ieFix();
  mobMenuScroll();
  try {
    initModals();
  } catch (e) { }
  // Work Slider
  const workSlider = new Swiper('.js_work-slider .swiper', {
    slidesPerView: 'auto',
    speed: 1000,
    freeMode: true,
    centeredSlides: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: '.js_work-slider .js_btn-slide-next',
      prevEl: '.js_work-slider .js_btn-slide-prev',
    },
    breakpoints: {
      320: {
        autoHeight: true,
      },
      575: {
        autoHeight: false,
      },
    },
  });
  // Marketing Slider
  const marketingSlider = new Swiper('.js_marketing-slider .swiper', {
    slidesPerView: 'auto',
    speed: 1000,
    freeMode: true,
    centeredSlides: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: '.js_marketing-slider .js_btn-slide-next',
      prevEl: '.js_marketing-slider .js_btn-slide-prev',
    },
    breakpoints: {
      320: {
        autoHeight: true,
      },
      575: {
        autoHeight: false,
      },
    },
  });

  // Stat Slider
  const statSlider = new Swiper('.js_stat-slider .swiper', {
    slidesPerView: 1,
    autoHeight: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: '.js_stat-slider .js_btn-slide-next',
      prevEl: '.js_stat-slider .js_btn-slide-prev',
    },
    pagination: {
      el: '.js_stat-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  // Trend Slider
  const trendsSlider = new Swiper('.js_trends-slider .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    mousewheel: {
      forceToAxis: true,
    },
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
          mousewheel: {
            forceToAxis: true,
          },
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
    autoHeight: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: '.js_business-slider .js_btn-slide-next',
      prevEl: '.js_business-slider .js_btn-slide-prev',
    },
    pagination: {
      el: '.js_business-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  // Myths Slider
  const mythsSlider = new Swiper('.js_myths-slider .swiper', {
    slidesPerView: 'auto',
    speed: 1000,
    freeMode: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: '.js_myths-slider .js_btn-slide-next',
      prevEl: '.js_myths-slider .js_btn-slide-prev',
    },
    breakpoints: {
      320: {
        autoHeight: true,
      },
      575: {
        autoHeight: false,
      },
    },
  });


  // Animate
  const media = window.matchMedia('(max-width: calc(993px - 1px))');
  if (!media.matches) {
    const header = document.querySelector('header');
    window.onload = function () {
      const scroller = new LocomotiveScroll({
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

  document.querySelectorAll('.form__btn').forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
});
