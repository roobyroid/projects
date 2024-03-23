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
import Papa from 'papaparse';
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

  async function getData() {
    try {
      const response = await fetch('https://xcomfeed.com/partners_empire_webbamsters_rating.json', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      createBoardRows(data);
    } catch (error) {
      console.error(error);
    }
  }
  // getData();

  function createBoardRows(data) {
    if (!data.length) return;

    const board = document.querySelector('.js_board-rows');

    const dataSort = data.sort((a, b) => b.Points - a.Points);

    dataSort.forEach((item, i) => {
      const boardRow = document.createElement('div');
      boardRow.classList.add('board__row');

      let boardCup = '';
      switch (i) {
        case 0:
          boardCup = 'gold';
          break;
        case 1:
          boardCup = 'silver';
          break;
        case 2:
          boardCup = 'bronze';
          break;
        default:
          break;
      }

      boardRow.innerHTML = `
        <div class="board__cell board__name">
        ${i < 3 ? `<img class="board__cup" src="img/page/cup-${boardCup}.png" alt="">` : ''}
        ${item.Partner ? item.Partner : '&nbsp;'}
        </div>
        <div class="board__cell">${item['Web-Master'] ? item['Web-Master'] : '&nbsp;'}</div>
        <div class="board__cell">${item.Points ? item.Points : '&nbsp;'}</div>
      `;
      board.appendChild(boardRow);
    });
  }

  // scroll to section
  try {
    const scrollLinks = document.querySelectorAll('.js_scroll-link');
    scrollLinks.forEach((el) => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);

        scrollTarget.scrollIntoView ({
          behavior: 'smooth',
        });
      });
    });
  } catch (e) {}
}

document.addEventListener('DOMContentLoaded', app);
