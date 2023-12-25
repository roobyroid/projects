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
  accordion('.js_accordion');
  // init modal
  const rulesModal = new HystModal({
    linkAttributeName: 'data-hystmodalRules',
    backscroll: false,
  });
  rulesModal.init();

  document.querySelectorAll('.js_canvas').forEach((canvas) => {
    init(canvas);
  });

  function init(canvas) {
    let comp;
    let lib;
    let loader;
    switch (canvas.dataset.name) {
      case 'gr':
        console.log(1);
        loader = new createjs.LoadQueue(false);
        comp = AdobeAn.getComposition('97D162834277B14D8069DB7A27C0BC3C');
        lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
        loader.addEventListener('fileload', function (evt) {
          handleFileLoad(evt, comp);
        });
        loader.addEventListener('complete', function (evt) {
          handleComplete(evt, comp, canvas);
        });
        return null;
      case 'star':
        console.log(2);
        loader = new createjs.LoadQueue(false);
        comp = AdobeAn.getComposition('9CF9F763DF48B74799E8DB9793799DAF');
        lib = comp.getLibrary();
        loader.loadManifest(lib.properties.manifest);
        loader.addEventListener('fileload', function (evt) {
          handleFileLoad(evt, comp);
        });
        loader.addEventListener('complete', function (evt) {
          handleComplete(evt, comp, canvas);
        });
        return null;
    }

    handleComplete({}, comp, canvas);
  }

  function handleFileLoad(evt, comp) {
    let images = comp.getImages();
    if (evt && evt.item.type == 'image') {
      images[evt.item.id] = evt.result;
    }
  }

  function handleComplete(evt, comp, canvas) {
    let lib = comp.getLibrary();

    if (lib.ssMetadata.length) {
      let ss = comp.getSpriteSheet();
      let queue = evt.target;
      let ssMetadata = lib.ssMetadata;
      for (let i = 0; i < ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet({
          images: [queue.getResult(ssMetadata[i].name)],
          frames: ssMetadata[i].frames,
        });
      }
    }

    let exportRoot;

    switch (canvas.dataset.name) {
      case 'gr':
        exportRoot = new lib.gr();
        break;
      case 'star':
        exportRoot = new lib.star();
        break;
    }

    let stage = new lib.Stage(canvas);

    let fnStartAnimation = function () {
      stage.addChild(exportRoot);
      createjs.Ticker.framerate = lib.properties.fps;
      createjs.Ticker.addEventListener('tick', stage);
    };
    AdobeAn.compositionLoaded(lib.properties.id);

    fnStartAnimation();
  }
}

document.addEventListener('DOMContentLoaded', app);
