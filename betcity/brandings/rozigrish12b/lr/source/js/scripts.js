/* eslint-disable new-cap */
window.addEventListener('load', () => {
  document.querySelectorAll('.js_canvas').forEach((canvas) => {
    init(canvas);
  });
  initChangeScreens();
  document
      .querySelectorAll('.js_anim-el')
      .forEach((item) => item.classList.add('animate'));
});

// second elements
let compPhone = AdobeAn.getComposition('E5142963BBF42642861D7CA09E5FDC97');
let libPhone = compPhone.getLibrary();
let compTextPhone = AdobeAn.getComposition('A1685B3A8EA9B7468FFABFCD5375CDBD');
let libTextPhone = compTextPhone.getLibrary();

// animation
let fistFrameAnimationDuration = 7;
function initChangeScreens() {
  const tl = gsap.timeline();
  tl.set('.header__bonus-second', {opacity: 0});
  tl.set('.aside__content-second', {opacity: 0});

  changeScreens();
  changeAsideHeight('.aside__content-first');

  document.body.classList.add('loaded');

  function changeScreens() {
    animate(['.aside__content-first', '.aside__content-second']);
    animate(['.header__bonus-first', '.header__bonus-second']);

    function animate(elements) {
      const tl = gsap.timeline({repeat: -1});
      tl.set(elements, {opacity: 0});
      tl.set(elements[0], {opacity: 1});
      tl.to(
          elements[0],
          {
            opacity: 0,
            delay: fistFrameAnimationDuration,
            duration: 0.3,
            onStart() {},
            onComplete() {},
          },
          '>'
      );
      tl.to(
          elements[1],
          {
            opacity: 1,
            duration: 0.3,
            onStart() {
              if (typeof stagePhone !== 'undefined') {
                stagePhone.addChild(new libPhone.Phone());
                stagePhone.getChildAt(0).gotoAndPlay(0);
              }
              if (typeof stagePhone2 !== 'undefined') {
                stagePhone2.addChild(new libPhone.Phone());
                stagePhone2.getChildAt(0).gotoAndPlay(0);
              }
              if (typeof stagePhone3 !== 'undefined') {
                stagePhone3.addChild(new libPhone.Phone());
                stagePhone3.getChildAt(0).gotoAndPlay(0);
              }
              if (typeof stageTextPhone !== 'undefined') {
                stageTextPhone.addChild(new libTextPhone.TXT_2());
                stageTextPhone.getChildAt(0).gotoAndPlay(0);
              }
              if (typeof stageTextPhone2 !== 'undefined') {
                stageTextPhone2.addChild(new libTextPhone.TXT_2());
                stageTextPhone2.getChildAt(0).gotoAndPlay(0);
              }
              if (typeof stageTextPhone3 !== 'undefined') {
                stageTextPhone3.addChild(new libTextPhone.TXT_2());
                stageTextPhone3.getChildAt(0).gotoAndPlay(0);
              }
            },
            onComplete() {},
          },
          '>'
      );
      tl.to(
          elements[1],
          {
            opacity: 0,
            delay: fistFrameAnimationDuration,
            duration: 0.3,
            onStart() {
              if (typeof stagePhone !== 'undefined') {
                stagePhone.removeChildAt(0);
              }
              if (typeof stagePhone2 !== 'undefined') {
                stagePhone2.removeChildAt(0);
              }
              if (typeof stagePhone3 !== 'undefined') {
                stagePhone3.removeChildAt(0);
              }
              if (typeof stageTextPhone !== 'undefined') {
                stageTextPhone.removeChildAt(0);
              }
              if (typeof stageTextPhone2 !== 'undefined') {
                stageTextPhone2.removeChildAt(0);
              }
              if (typeof stageTextPhone3 !== 'undefined') {
                stageTextPhone3.removeChildAt(0);
              }
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

let stagePhone;
let stagePhone2;
let stagePhone3;
let stageTextPhone;
let stageTextPhone2;
let stageTextPhone3;
function init(canvas) {
  let comp;
  let lib;
  let loader = new createjs.LoadQueue(false);
  switch (canvas.dataset.name) {
    case 'logo':
      comp = AdobeAn.getComposition('CFCEE90035074C4796DAE69AB23499A2');
      break;
    case 'ball':
      comp = AdobeAn.getComposition('D4379D299E48794E8C2650E82FD8DF20');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas);
      });
      return null;
    case 'text-top':
      comp = AdobeAn.getComposition('A1685B3A8EA9B7468FFABFCD5375CDBC');
      break;
    case 'text-side':
      comp = AdobeAn.getComposition('ED2BBC256F7ABD47B875EBC1A91BAF0C');
      break;
    case 'ball-side':
      comp = AdobeAn.getComposition('D4379D299E48794E8C2650E82FD8DF21');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas);
      });
      return null;
    case 'phone':
      comp = AdobeAn.getComposition('E5142963BBF42642861D7CA09E5FDC97');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas, 'phone');
      });
      return null;
    case 'text-phone':
      comp = AdobeAn.getComposition('A1685B3A8EA9B7468FFABFCD5375CDBD');
      handleComplete({}, comp, canvas, 'text-phone');
      return null;
    case 'phone2':
      comp = AdobeAn.getComposition('E5142963BBF42642861D7CA09E5FDC97');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas, 'phone2');
      });
      return null;
    case 'text-phone2':
      comp = AdobeAn.getComposition('A1685B3A8EA9B7468FFABFCD5375CDBD');
      handleComplete({}, comp, canvas, 'text-phone2');
      return null;
    case 'phone3':
      comp = AdobeAn.getComposition('E5142963BBF42642861D7CA09E5FDC97');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas, 'phone3');
      });
      return null;
    case 'text-phone3':
      comp = AdobeAn.getComposition('A1685B3A8EA9B7468FFABFCD5375CDBD');
      handleComplete({}, comp, canvas, 'text-phone3');
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

function handleComplete(evt, comp, canvas, selector) {
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
    case 'logo':
      exportRoot = new lib.LOGO();
      break;
    case 'ball':
      exportRoot = new lib.Ball_UP();
      break;
    case 'text-top':
      exportRoot = new lib.TXT_1_UP();
      break;
    case 'text-side':
      exportRoot = new lib.TXT_1_SIDE();
      break;
    case 'ball-side':
      exportRoot = new lib.ball_side();
      break;
    case 'phone':
      exportRoot = new lib.Phone();
      break;
    case 'phone2':
      exportRoot = new lib.Phone();
      break;
    case 'phone3':
      exportRoot = new lib.Phone();
      break;
    case 'text-phone':
      exportRoot = new lib.TXT_2();
      break;
    case 'text-phone2':
      exportRoot = new lib.TXT_2();
      break;
    case 'text-phone3':
      exportRoot = new lib.TXT_2();
      break;
  }

  let stage;
  switch (selector) {
    case 'phone':
      stagePhone = new lib.Stage(canvas);
      break;
    case 'phone2':
      stagePhone2 = new lib.Stage(canvas);
      break;
    case 'phone3':
      stagePhone3 = new lib.Stage(canvas);
      break;
    case 'text-phone':
      stageTextPhone = new lib.Stage(canvas);
      break;
    case 'text-phone2':
      stageTextPhone2 = new lib.Stage(canvas);
      break;
    case 'text-phone3':
      stageTextPhone3 = new lib.Stage(canvas);
      break;
    default:
      stage = new lib.Stage(canvas);
      break;
  }
  fnStartAnimation = function () {
    switch (selector) {
      case 'phone':
        stagePhone.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener('tick', stagePhone);
        stagePhone.removeChildAt(0);
        break;
      case 'phone2':
        stagePhone2.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener('tick', stagePhone2);
        stagePhone2.removeChildAt(0);
        break;
      case 'phone3':
        stagePhone3.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener('tick', stagePhone3);
        stagePhone3.removeChildAt(0);
        break;
      case 'text-phone':
        stageTextPhone.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener('tick', stageTextPhone);
        stageTextPhone.removeChildAt(0);
        break;
      case 'text-phone2':
        stageTextPhone2.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener('tick', stageTextPhone2);
        stageTextPhone2.removeChildAt(0);
        break;
      case 'text-phone3':
        stageTextPhone3.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener('tick', stageTextPhone3);
        stageTextPhone3.removeChildAt(0);
        break;
      default:
        stage.addChild(exportRoot);
        createjs.Ticker.framerate = lib.properties.fps;
        createjs.Ticker.addEventListener('tick', stage);
        break;
    }
  };
  AdobeAn.compositionLoaded(lib.properties.id);

  fnStartAnimation();
}
