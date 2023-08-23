window.addEventListener('DOMContentLoaded', () => {
  init();
  autobet.promise.then((data) => {
    runautobet(data);
  });
  document
    .querySelectorAll('.js_anim-el')
    .forEach((item) => item.classList.add('animate'));
});

let animations = {};
let eventAnimationDuration;
let fistFrameAnimationDuration = 5;
function runautobet(event) {
  const ev = event; // for prod
  const elements = document.querySelectorAll(`[data-autobet]`);
  const data = { ...ev, ...autobet.fields };

  const tl = gsap.timeline();
  tl.set('.header__bonus-second', { opacity: 0 });
  tl.set('.aside__content-second', { opacity: 0 });

  console.log(data);
  init();
  hasEvent();
  changeAsideHeight('.aside__content-first');

  document.body.classList.add('loaded')

  function init() {
    [...elements].forEach((el) => {
      if (el.tagName == 'SPAN' || el.tagName == 'DIV') {
        data[el.dataset.autobet]
          ? (el.innerText = data[el.dataset.autobet])
          : null;
      }

      if (el.tagName == 'IMG') {
        data[el.dataset.autobet] ? (el.src = data[el.dataset.autobet]) : null;
      }
    });
  }

  function hasEvent() {
    if (!data.EVENT) {
      return;
    }

    if (data.QUOTEX == '') {
      document.body.classList.add('two-teams');
    }

    document.body.classList.add('has-event');

    if (data.LIVE) {
      document.querySelector('.event__live').classList.remove('hidden');
    }

    animate(['.aside__content-first', '.aside__content-second']);
    animate(['.header__bonus-first', '.header__bonus-second']);

    function animate(elements) {
      const tl = gsap.timeline({ repeat: -1 });
      tl.set(elements, { opacity: 0 });
      tl.set(elements[0], { opacity: 1 });
      tl.to(
        elements[0],
        {
          opacity: 0,
          delay: fistFrameAnimationDuration,
          duration: 0.3,
          onStart: function () {
            changeAsideHeight('.aside__content-first');
          },
          onComplete: function () {
            animations.event.restart();
          },
        },
        '>'
      );
      tl.to(
        elements[1],
        {
          opacity: 1,
          duration: 0.3,
          onStart: function () {
            changeAsideHeight('.aside__content-second');
            document.body.classList.add('show-second-frame')
          },
          onComplete: function () {},
        },
        '>'
      );
      tl.to(
        elements[1],
        {
          opacity: 0,
          delay: eventAnimationDuration,
          duration: 0.3,
          onStart: function () {
            document.body.classList.remove('show-second-frame')
            changeAsideHeight('.aside__content-first');
          },
        },
        '>'
      );
    }
  }

  function changeAsideHeight(selector) {
    const calc = () => {
      const el = document.querySelector(selector);
      const aside = document.querySelectorAll('.aside__content');
      function getAbsoluteHeight(el) {
        el = typeof el === 'string' ? document.querySelector(el) : el;

        const styles = window.getComputedStyle(el);
        const margin =
          parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
        return el.offsetHeight + margin;
      }

      const h = getAbsoluteHeight(el);
      gsap.set(aside, {
        height: h,
      });
    };
    calc();
    window.addEventListener('resize', calc);
  }
}

const topBannerAnimation = () => {
  const tl = new gsap.timeline({ paused: true });
  tl.timeScale(1);
  animations.event = tl;
  console.log(animations);
  const eventOutDelay = 2;

  //second
  tl.from(
    '.event__title',
    {
      opacity: 0,
      y: -40,
      duration: 0.5,
      ease: 'power1.in',
    },
    '<'
  );
  tl.from(
    '.event__time',
    {
      opacity: 0,
      y: -40,
      duration: 0.7,
      ease: 'power1.in',
    },
    '<'
  );
  tl.from(
    '.event__live',
    {
      opacity: 0,
      duration: 0.1,
    },
    '<'
  );

  tl.from(
    '.event__nums-item span',
    {
      opacity: 1,
      y: -60,
      duration: 0.7,
      ease: 'power1.in',
    },
    '>'
  );

  tl.to('.event__time', {
    opacity: 1,
    duration: 0.5,
  });

  tl.to('.js_event-logo-one', {
    opacity: 1,
    x: 0,
    duration: 0.5,
  });
  tl.to('.js_event-logo-two', {
    opacity: 1,
    x: 0,
    duration: 0.5,
  });
  tl.to('.event__title', {
    opacity: 1,
    x: 0,
    duration: 0.5,
  });
  tl.to('.event__live', {
    opacity: 1,
    duration: 0.5,
    ease: 'power1.in',
  });

  tl.to('.js_event-team-one', {
    opacity: 1,
    x: 0,
    duration: 0.5,
  });
  tl.to('.js_event-team-two', {
    opacity: 1,
    x: 0,
    duration: 0.5,
  });

  // out
  tl.to(
    '.event__nums-item span',
    {
      opacity: 1,
      y: 60,
      duration: 0.7,
      ease: 'power1.in',
    },
    '-=50%'
  );

  eventAnimationDuration = tl._dur - 0.3;
};

topBannerAnimation();


/* eslint-disable no-var */
var canvasTball;
var canvasBball;
var canvasFball;
// var canvasBball;
function init() {
  canvasTball = document.getElementById('canvasTball');
  canvasBball = document.getElementById('canvasBball');
  canvasFball = document.getElementById('canvasFball');

  var compTball = AdobeAn.getComposition('5AF7DE1E4667E346B317BCE34A7CE79F');
  var libTball = compTball.getLibrary();

  var compBball = AdobeAn.getComposition('95EFA2304D692E428A03462175030859');
  var libBball = compBball.getLibrary();

  var compFball = AdobeAn.getComposition('44C502E15A805A49B34D1D1945DDC986');
  var libFball = compFball.getLibrary();

  var loader = new createjs.LoadQueue(false);

  loader.addEventListener('fileload', function (evt) {
    handleFileLoad(evt, compTball);
    handleFileLoad(evt, compBball);
    handleFileLoad(evt, compFball);
  });
  loader.addEventListener('complete', function (evt) {
    handleComplete(evt, compTball, compBball, compFball);
  });

  loader.loadManifest(libTball.properties.manifest);
  loader.loadManifest(libBball.properties.manifest);
  loader.loadManifest(libFball.properties.manifest);

  // handleComplete({}, compTball);
}
function handleFileLoad(evt, comp) {
  var images = comp.getImages();
  if (evt && evt.item.type == 'image') {
    images[evt.item.id] = evt.result;
  }
}
function handleComplete(evt, compTball, compBball, compFball) {
  var libTball = compTball.getLibrary();
  var libBball = compBball.getLibrary();
  var libFball = compFball.getLibrary();

  var ssTball = compTball.getSpriteSheet();
  var ssBball = compBball.getSpriteSheet();
  var ssFball = compFball.getSpriteSheet();

  var ssMetadataTball = libTball.ssMetadata;
  var ssMetadataBball = libBball.ssMetadata;
  var ssMetadataFball = libFball.ssMetadata;

  var queue = evt.target;

  for (var i = 0; i < ssMetadataTball.length; i++) {
    ssTball[ssMetadataTball[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadataTball[i].name)],
      frames: ssMetadataTball[i].frames,
    });
  }

  for (var i = 0; i < ssMetadataBball.length; i++) {
    ssBball[ssMetadataBball[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadataBball[i].name)],
      frames: ssMetadataBball[i].frames,
    });
  }
  for (var i = 0; i < ssMetadataFball.length; i++) {
    ssFball[ssMetadataFball[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadataFball[i].name)],
      frames: ssMetadataFball[i].frames,
    });
  }

  var exportRoot = new libTball.T_Ball();
  var exportRoot2 = new libBball.B_Ball();
  var exportRoot3 = new libFball.f_ball();

  var stage = new libTball.Stage(canvasTball);
  var stage2 = new libBball.Stage(canvasBball);
  var stage3 = new libFball.Stage(canvasFball);

  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    stage2.addChild(exportRoot2);
    stage3.addChild(exportRoot3);
    createjs.Ticker.framerate = libTball.properties.fps;
    createjs.Ticker.addEventListener('tick', stage);
    createjs.Ticker.addEventListener('tick', stage2);
    createjs.Ticker.addEventListener('tick', stage3);
  };
  // AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}
