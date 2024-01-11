window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js_canvas').forEach((canvas) => {
    initCanvas(canvas);
  });
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
  hasPromocode();
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

  function hasPromocode(){
		if(!data.PROMOCODE){
			document.body.classList.add('has-no-promocode');
			return
		}

		document.body.classList.add('has-promocode');
		changeAsideHeight('.aside__frame--first');
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
            document.body.classList.add('show-second-frame');
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
            document.body.classList.remove('show-second-frame');
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

function initCanvas(canvas) {
  let comp;
  let lib;
  switch (canvas.dataset.name) {
    case 'bg':
      comp = AdobeAn.getComposition('EDE0A1D7EAC4234FBC043EE64452CAC4');
      lib = comp.getLibrary();
      handleComplete({}, comp, canvas);
      return null;
    case 'rktk':
      comp = AdobeAn.getComposition('4BDDEB208ADC1143A504558FE23F9CB8');
      lib = comp.getLibrary();
      handleComplete({}, comp, canvas);
      return null;
  }

  handleComplete({}, comp, canvas);
}

function handleComplete(evt, comp, canvas) {
  let lib = comp.getLibrary();

  let exportRoot;

  switch (canvas.dataset.name) {
    case 'bg':
      exportRoot = new lib._1920x1080();
      break;
    case 'rktk':
      exportRoot = new lib.rktk();
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
