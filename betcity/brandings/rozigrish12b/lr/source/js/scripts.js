
/* eslint-disable new-cap */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js_canvas').forEach((canvas) => {
    init(canvas);
  });
  document
      .querySelectorAll('.js_anim-el')
      .forEach((item) => item.classList.add('animate'));
});

function init(canvas) {
  let comp;
  let lib;
  let loader;
  switch (canvas.dataset.name) {
    case 'logo':
      comp = AdobeAn.getComposition('CFCEE90035074C4796DAE69AB23499A2');
      break;
    case 'ball':
      loader = new createjs.LoadQueue(false);
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
      loader = new createjs.LoadQueue(false);
      comp = AdobeAn.getComposition('A1685B3A8EA9B7468FFABFCD5375CDBC');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas);
      });
      return null;
    case 'side':
      loader = new createjs.LoadQueue(false);
      comp = AdobeAn.getComposition('ED2BBC256F7ABD47B875EBC1A91BAF0C');
      lib = comp.getLibrary();
      loader.loadManifest(lib.properties.manifest);
      loader.addEventListener('fileload', function (evt) {
        handleFileLoad(evt, comp);
      });
      loader.addEventListener('complete', function (evt) {
        handleComplete(evt, comp, canvas);
      });
      return null;
    case 'side2':
      loader = new createjs.LoadQueue(false);
      comp = AdobeAn.getComposition('ED2BBC256F7ABD47B875EBC1A91BAF0D');
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
    case 'logo':
      exportRoot = new lib.LOGO();
      break;
    case 'ball':
      exportRoot = new lib.Ball_UP();
      break;
    case 'text-top':
      exportRoot = new lib.TXT_1_UP();
      break;
    case 'side':
      exportRoot = new lib.TXT_1_SIDE();
      break;
    case 'side2':
      exportRoot = new lib.TXT_1_SIDE();
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
