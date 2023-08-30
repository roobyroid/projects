window.addEventListener('DOMContentLoaded', () => {
  init();
  document
      .querySelectorAll('.js_anim-el')
      .forEach((item) => item.classList.add('animate'));
});

/* eslint-disable no-var */
var canvasBg;
var canvasLogo;
var canvasLogo2;

function init() {
  canvasBg = document.getElementById('canvasBg');
  canvasLogo = document.getElementById('canvasLogo');
  canvasLogo2 = document.getElementById('canvasLogo2');

  var compBg = AdobeAn.getComposition('680991B9B3D3BF4CB70115B0AA3B0512');

  var compLogo = AdobeAn.getComposition('A426DF23C071AB468D763CF9194D8D24');
  var compLogo2 = AdobeAn.getComposition('A426DF23C071AB468D763CF9194D8D24');

  handleComplete({}, compBg, compLogo, compLogo2);
}

function handleComplete(evt, compBg, compLogo, compLogo2) {
  var libBg = compBg.getLibrary();
  var libLogo = compLogo.getLibrary();
  var libLogo2 = compLogo2.getLibrary();

  var exportRoot = new libBg.bg();
  var exportRootLogo = new libLogo.logo();
  var exportRootLogo2 = new libLogo2.logo();

  var stage = new libBg.Stage(canvasBg);
  var stageLogo = new libLogo.Stage(canvasLogo);
  var stageLogo2 = new libLogo2.Stage(canvasLogo2);

  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    stageLogo.addChild(exportRootLogo);
    stageLogo2.addChild(exportRootLogo2);
    createjs.Ticker.framerate = libBg.properties.fps;
    createjs.Ticker.framerate = libLogo.properties.fps;
    createjs.Ticker.framerate = libLogo2.properties.fps;
    createjs.Ticker.addEventListener('tick', stage);
    createjs.Ticker.addEventListener('tick', stageLogo);
    createjs.Ticker.addEventListener('tick', stageLogo2);
  };
  AdobeAn.compositionLoaded(libBg.properties.id);
  AdobeAn.compositionLoaded(libLogo.properties.id);
  AdobeAn.compositionLoaded(libLogo2.properties.id);
  fnStartAnimation();
}
