window.addEventListener('DOMContentLoaded', () => {
  init();
  document
      .querySelectorAll('.js_anim-el')
      .forEach((item) => item.classList.add('animate'));
});
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

