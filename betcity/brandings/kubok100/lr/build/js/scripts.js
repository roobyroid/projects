window.addEventListener('DOMContentLoaded', () => {
  init();
  if (navigator.userAgent.includes('Firefox')) {
    document.body.classList.add('firefox');
  }
  document
      .querySelectorAll('.js_anim-el')
      .forEach((item) => item.classList.add('animate'));
});

/* eslint-disable no-var */
var canvasBg;
var canvasLogo;
var canvasLogo2;
var canvasLogo3;
var canvasBall;
var canvasBall2;
var canvasText;
var canvasBtnTop;
var canvasText2;
var canvasText3;
var canvasBtnSide;
var canvasBtnSide2;

function init() {
  canvasBg = document.getElementById('canvasBg');
  canvasLogo = document.getElementById('canvasLogo');
  canvasLogo2 = document.getElementById('canvasLogo2');
  canvasLogo3 = document.getElementById('canvasLogo3');
  canvasBall = document.getElementById('canvasBall');
  canvasBall2 = document.getElementById('canvasBall2');
  canvasText = document.getElementById('canvasText');
  canvasBtnTop = document.getElementById('canvasBtnTop');
  canvasText2 = document.getElementById('canvasText2');
  canvasText3 = document.getElementById('canvasText3');
  canvasBtnSide = document.getElementById('canvasBtnSide');
  canvasBtnSide2 = document.getElementById('canvasBtnSide2');

  var compBg = AdobeAn.getComposition('680991B9B3D3BF4CB70115B0AA3B0512');

  var compLogo = AdobeAn.getComposition('A426DF23C071AB468D763CF9194D8D24');
  var compLogo2 = AdobeAn.getComposition('A426DF23C071AB468D763CF9194D8D24');
  var compLogo3 = AdobeAn.getComposition('A426DF23C071AB468D763CF9194D8D24');

  var compBall = AdobeAn.getComposition('25739F0BBC05914EB8BFCB115C993B28');
  var compBall2 = AdobeAn.getComposition('25739F0BBC05914EB8BFCB115C993B28');

  var compText = AdobeAn.getComposition('A34F88EBE308604B81BBCEA8F0011F08');
  var compText2 = AdobeAn.getComposition('D89D5A560235C8408D4832FDA5AC3970');
  var compText3 = AdobeAn.getComposition('D89D5A560235C8408D4832FDA5AC3970');

  var compBtnTop = AdobeAn.getComposition('BAE1D25AA5122B44BBA5F87421E81E5D');

  var compBtnSide = AdobeAn.getComposition('9B1A6E81559748418E14B248B8AA6F9C');
  var compBtnSide2 = AdobeAn.getComposition('9B1A6E81559748418E14B248B8AA6F9C');

  var loader = new createjs.LoadQueue(false);

  loader.addEventListener('fileload', function (evt) {
    handleFileLoad(evt, compBall, compBall2);
  });

  var libBall = compBall.getLibrary();
  loader.loadManifest(libBall.properties.manifest);

  var libBall2 = compBall2.getLibrary();
  loader.loadManifest(libBall2.properties.manifest);

  loader.addEventListener('complete', function (evt) {
    handleComplete(
        evt,
        compBg,
        compLogo,
        compLogo2,
        compLogo3,
        compBall,
        compBall2,
        compText,
        compBtnTop,
        compText2,
        compText3,
        compBtnSide,
        compBtnSide2
    );
  });
}
function handleFileLoad(evt, comp) {
  var images = comp.getImages();
  if (evt && evt.item.type == 'image') {
    images[evt.item.id] = evt.result;
  }
}

function handleComplete(
    evt,
    compBg,
    compLogo,
    compLogo2,
    compLogo3,
    compBall,
    compBall2,
    compText,
    compBtnTop,
    compText2,
    compText3,
    compBtnSide,
    compBtnSide2,
) {
  var libBg = compBg.getLibrary();
  var libLogo = compLogo.getLibrary();
  var libLogo2 = compLogo2.getLibrary();
  var libLogo3 = compLogo3.getLibrary();
  var libBall = compBall.getLibrary();
  var libBall2 = compBall2.getLibrary();
  var libText = compText.getLibrary();
  var libBtnTop = compBtnTop.getLibrary();
  var libText2 = compText2.getLibrary();
  var libText3 = compText3.getLibrary();
  var libBtnSide = compBtnSide.getLibrary();
  var libBtnSide2 = compBtnSide2.getLibrary();

  var ssBall = compBall.getSpriteSheet();
  var ssBall2 = compBall2.getSpriteSheet();

  var queue = evt.target;

  var ssMetadataBall = libBall.ssMetadata;
  var ssMetadataBall2 = libBall2.ssMetadata;

  for (var i = 0; i < ssMetadataBall.length; i++) {
    ssBall[ssMetadataBall[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadataBall[i].name)],
      frames: ssMetadataBall[i].frames,
    });
  }
  for (var i = 0; i < ssMetadataBall2.length; i++) {
    ssBall[ssMetadataBall2[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadataBall2[i].name)],
      frames: ssMetadataBall2[i].frames,
    });
  }

  var exportRoot = new libBg.bg();
  var exportRootLogo = new libLogo.logo();
  var exportRootLogo2 = new libLogo2.logo();
  var exportRootLogo3 = new libLogo3.logo();
  var exportRootBall = new libBall.ball();
  var exportRootBall2 = new libBall2.ball();
  var exportRootText = new libText.Text_lr();
  var exportRootBtnTop = new libBtnTop.btn_up();
  var exportRootText2 = new libText2.Text();
  var exportRootText3 = new libText3.Text();
  var exportRootBtnSide = new libBtnSide.btn_side();
  var exportRootBtnSide2 = new libBtnSide2.btn_side();

  var stage = new libBg.Stage(canvasBg);
  var stageLogo = new libLogo.Stage(canvasLogo);
  var stageLogo2 = new libLogo2.Stage(canvasLogo2);
  var stageLogo3 = new libLogo3.Stage(canvasLogo3);
  var stageBall = new libBall.Stage(canvasBall);
  var stageBall2 = new libBall2.Stage(canvasBall2);
  var stageText = new libText.Stage(canvasText);
  var stageBtnTop = new libBtnTop.Stage(canvasBtnTop);
  var stageText2 = new libText2.Stage(canvasText2);
  var stageText3 = new libText3.Stage(canvasText3);
  var stageBtnSide = new libBtnSide.Stage(canvasBtnSide);
  var stageBtnSide2 = new libBtnSide2.Stage(canvasBtnSide2);

  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    stageLogo.addChild(exportRootLogo);
    stageLogo2.addChild(exportRootLogo2);
    stageLogo3.addChild(exportRootLogo3);
    stageBall.addChild(exportRootBall);
    stageBall2.addChild(exportRootBall2);
    stageText.addChild(exportRootText);
    stageBtnTop.addChild(exportRootBtnTop);
    stageText2.addChild(exportRootText2);
    stageText3.addChild(exportRootText3);
    stageBtnSide.addChild(exportRootBtnSide);
    stageBtnSide2.addChild(exportRootBtnSide2);
    createjs.Ticker.framerate = libBg.properties.fps;
    createjs.Ticker.framerate = libLogo.properties.fps;
    createjs.Ticker.framerate = libLogo2.properties.fps;
    createjs.Ticker.framerate = libLogo3.properties.fps;
    createjs.Ticker.framerate = libBall.properties.fps;
    createjs.Ticker.framerate = libBall2.properties.fps;
    createjs.Ticker.framerate = libText.properties.fps;
    createjs.Ticker.framerate = libBtnTop.properties.fps;
    createjs.Ticker.framerate = libText2.properties.fps;
    createjs.Ticker.framerate = libText3.properties.fps;
    createjs.Ticker.framerate = libBtnSide.properties.fps;
    createjs.Ticker.framerate = libBtnSide2.properties.fps;
    createjs.Ticker.addEventListener('tick', stage);
    createjs.Ticker.addEventListener('tick', stageLogo);
    createjs.Ticker.addEventListener('tick', stageLogo2);
    createjs.Ticker.addEventListener('tick', stageLogo3);
    createjs.Ticker.addEventListener('tick', stageBall);
    createjs.Ticker.addEventListener('tick', stageBall2);
    createjs.Ticker.addEventListener('tick', stageText);
    createjs.Ticker.addEventListener('tick', stageBtnTop);
    createjs.Ticker.addEventListener('tick', stageText2);
    createjs.Ticker.addEventListener('tick', stageText3);
    createjs.Ticker.addEventListener('tick', stageBtnSide);
    createjs.Ticker.addEventListener('tick', stageBtnSide2);
  };
  AdobeAn.compositionLoaded(libBg.properties.id);
  AdobeAn.compositionLoaded(libLogo.properties.id);
  AdobeAn.compositionLoaded(libLogo2.properties.id);
  AdobeAn.compositionLoaded(libLogo3.properties.id);
  AdobeAn.compositionLoaded(libBall.properties.id);
  AdobeAn.compositionLoaded(libBall2.properties.id);
  AdobeAn.compositionLoaded(libText.properties.id);
  AdobeAn.compositionLoaded(libBtnTop.properties.id);
  AdobeAn.compositionLoaded(libText2.properties.id);
  AdobeAn.compositionLoaded(libText3.properties.id);
  AdobeAn.compositionLoaded(libBtnSide.properties.id);
  AdobeAn.compositionLoaded(libBtnSide2.properties.id);
  fnStartAnimation();
}
