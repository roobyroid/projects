/* eslint-disable new-cap */
window.addEventListener('load', () => {
  document.querySelectorAll('.js_anim-el').forEach((item) => item.classList.add('animate'));

  document.querySelectorAll('.js_canvas').forEach((canvas) => {
    init(canvas);
  });
});

let currentIndex = 1;
const bodyWrap = document.querySelector('.body-wrap');

function changeText() {
  const previousIndex = currentIndex;
  currentIndex = (currentIndex + 1) % 2;
  if (currentIndex === 0) {
    bodyWrap.classList.remove('body-wrap--first');
    bodyWrap.classList.add('body-wrap--second');
  } else {
    bodyWrap.classList.remove('body-wrap--second');
    bodyWrap.classList.add('body-wrap--first');
  }
}

setInterval(changeText, 5000);

bodyWrap.classList.add('body-wrap--first');

function init(canvas) {
  let comp;
  let lib;
  let loader = new createjs.LoadQueue(false);
  switch (canvas.dataset.name) {
    case 'lines':
      comp = AdobeAn.getComposition('69B74A321F5D064EBF4FA09344445F9B');
      break;
    case 'cup':
      loader = new createjs.LoadQueue(false);
      comp = AdobeAn.getComposition('2715B103A07F194DA5982C08FAC6EDC4');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas);
      });
      return null;
    case 'cup2':
      loader = new createjs.LoadQueue(false);
      comp = AdobeAn.getComposition('2715B103A07F194DA5982C08FAC6EDC5');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas);
      });
      return null;
    case 'cup3':
      loader = new createjs.LoadQueue(false);
      comp = AdobeAn.getComposition('2715B103A07F194DA5982C08FAC6EDC6');
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
    case 'lines':
      exportRoot = new lib.Lines();
      break;
    case 'cup':
      exportRoot = new lib.kubok();
      break;
    case 'cup2':
      exportRoot = new lib.kubok();
      break;
    case 'cup3':
      exportRoot = new lib.kubok();
      break;
  }
  let stage;
  stage = new lib.Stage(canvas);

  const fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener('tick', stage);
  };
  AdobeAn.compositionLoaded(lib.properties.id);

  fnStartAnimation();
}
