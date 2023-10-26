/* eslint-disable new-cap */
window.addEventListener('load', () => {
  document.querySelectorAll('.js_canvas').forEach((canvas) => {
    init(canvas);
  });

  autobet.promise.then((data) => {
    runautobet(data);
  });

  document
    .querySelectorAll('.js_anim-el')
    .forEach((item) => item.classList.add('animate'));
});

// second bg
let compBgSecond = AdobeAn.getComposition('7AF8085D90176042B2825EE91889CCA7');
let libBgSecond = compBgSecond.getLibrary();
// animation

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
  tl.set('.js_bg-second', { opacity: 0 });

  init();
  hasEvent();
  changeAsideHeight('.aside__content-first');

  document.body.classList.add('loaded');

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
    animate(['.js_bg-first', '.js_bg-second']);

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
            document
              .querySelector('.js_header')
              .classList.add('header--second-frame');

            stageBgSecond.addChild(new libBgSecond.F_2());
            stageBgSecond.getChildAt(0).gotoAndPlay(0);
            // createjs.Ticker.addEventListener('tick', stageBgSecond);
          },
          onComplete: function () {
            // createjs.Ticker.removeEventListener('tick', stageBgSecond);
          },
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
            document
              .querySelector('.js_header')
              .classList.remove('header--second-frame');
            stageBgSecond.removeChildAt(0);
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

let stageBgSecond;
function init(canvas) {
  let comp;
  let lib;
  let loader = new createjs.LoadQueue(false);
  switch (canvas.dataset.name) {
    case 'bg-first':
      comp = AdobeAn.getComposition('7AF8085D90176042B2825EE91889CCA8');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas);
      });
      return null;
    case 'bg-second':
      comp = AdobeAn.getComposition('7AF8085D90176042B2825EE91889CCA7');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas);
      });
      return null;
    case 'el':
      comp = AdobeAn.getComposition('5CC1CC8E7EC3894B99291DE8CE6F8335');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas);
      });
      return null;
    case 'logo':
      comp = AdobeAn.getComposition('3FD7C49FF977644DAACCE1327A287F92');
      break;
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
    case 'bg-first':
      exportRoot = new lib.F_1();
      break;
    case 'bg-second':
      exportRoot = new lib.F_2();
      break;
    case 'el':
      exportRoot = new lib.Aegis();
      break;
    case 'logo':
      exportRoot = new lib.Logo();
      break;
  }
  let stage;
  if (lib.properties.id !== '7AF8085D90176042B2825EE91889CCA7') {
    stage = new lib.Stage(canvas);
  } else {
    stageBgSecond = stage = new lib.Stage(canvas);
  }

  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    if (lib.properties.id !== '7AF8085D90176042B2825EE91889CCA7') {
      createjs.Ticker.addEventListener('tick', stage);
    } else {
      createjs.Ticker.addEventListener('tick', stageBgSecond);
      stageBgSecond.removeChildAt(0);
    }
  };
  AdobeAn.compositionLoaded(lib.properties.id);

  fnStartAnimation();
}
