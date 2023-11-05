/* eslint-disable no-var */
(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [];


  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:


  (lib.ball1 = function () {
    this.initialize(img.ball1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 251, 609);


  (lib.ball2 = function () {
    this.initialize(img.ball2);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 250, 611);


  (lib.BALL3 = function () {
    this.initialize(img.BALL3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 249, 772);


  (lib.IMGBG = function () {
    this.initialize(img.IMGBG);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 1101, 551);


  (lib.Mob = function () {
    this.initialize(img.Mob);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 77, 97);


  (lib.Snow = function () {
    this.initialize(img.Snow);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 108, 49);


  (lib.Snow1 = function () {
    this.initialize(img.Snow1);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 67, 49);


  (lib.Snow3 = function () {
    this.initialize(img.Snow3);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 108, 49);// helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }


  (lib.snow3 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.Snow3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.snow3, new cjs.Rectangle(0, 0, 108, 49), null);


  (lib.snow1 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.Snow1();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.snow1, new cjs.Rectangle(0, 0, 67, 49), null);


  (lib.snow = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.Snow();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.snow, new cjs.Rectangle(0, 0, 108, 49), null);


  (lib.mob = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.Mob();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.mob, new cjs.Rectangle(0, 0, 77, 97), null);


  (lib.IMG_BG = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.IMGBG();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.IMG_BG, new cjs.Rectangle(0, 0, 1101, 551), null);


  (lib.foot_b = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.instance = new lib.ball1();
    this.instance.setTransform(51, -269, 0.5356, 0.5356);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.foot_b, new cjs.Rectangle(51, -269, 134.4, 326.2), null);


  (lib.BGBG2 = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#081051').s().p('EhI0AtSMAAAhajMCRpAAAMAAABajg');
    this.shape.setTransform(466.1, 289.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.BGBG2, new cjs.Rectangle(0, 0, 932.2, 579.6), null);


  (lib.bac_b = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.instance = new lib.ball2();
    this.instance.setTransform(-40, -243, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.bac_b, new cjs.Rectangle(-40, -243, 125, 305.5), null);


  (lib.small_b = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_5
    this.instance = new lib.BALL3();
    this.instance.setTransform(21, -249, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(205));

    // snow1
    this.instance_1 = new lib.snow1();
    this.instance_1.setTransform(61.45, 103.85, 0.6694, 0.6694, 0, 0, 0, 33.5, 24.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({scaleX: 1, scaleY: 1, x: 78.5, y: 92.5}, 64, cjs.Ease.cubicOut).to({regY: 24.6, scaleX: 0.7406, scaleY: 0.6905, x: 83.55, y: 112.25}, 131).wait(1));

    // snow
    this.instance_2 = new lib.snow();
    this.instance_2.setTransform(79.75, 79.15, 1, 1, 11.2203, 0, 0, 54.1, 0);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({regX: 54, rotation: 0, x: 81, y: 80}, 106, cjs.Ease.backOut).wait(90));

    // mob
    this.instance_3 = new lib.mob();
    this.instance_3.setTransform(83.45, 71.85, 1, 1, -14.9983, 0, 0, 38.5, 48.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({rotation: 0, x: 87.5, y: 73.5}, 106, cjs.Ease.cubicOut).wait(90));

    // snow3
    this.instance_4 = new lib.snow3();
    this.instance_4.setTransform(88, 78.3, 1, 1, -24.9919, 0, 0, 54, 0);

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({rotation: 0, y: 81}, 106, cjs.Ease.backOut).wait(90));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(17.2, -249, 140.5, 394.5);


  (lib.small = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.instance = new lib.small_b();
    this.instance.setTransform(155.6, 383.6, 1, 1, 0, 0, 0, 34.6, 34.6);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({y: 373.6}, 59).to({y: 383.6}, 60).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(138.2, 90, 140.5, 404.5);


  (lib.foot = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_2
    this.instance = new lib.foot_b();
    this.instance.setTransform(483, 707, 1, 1, 0, 0, 0, 112, 112);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({y: 698.9}, 72, cjs.Ease.none).to({y: 707}, 47, cjs.Ease.none).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(422, 317.9, 134.39999999999998, 334.30000000000007);


  (lib.bac = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // Layer_1
    this.instance = new lib.bac_b();
    this.instance.setTransform(-20.2, 442.8, 1, 1, 0, 0, 0, 72.8, 72.8);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({y: 451.55}, 59).to({y: 442.8}, 60).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-133, 127, 125, 314.3);


  // stage content:
  (lib.Ball_UP = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // SHADOW1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(['#081051', 'rgba(8,16,81,0)'], [0.267, 1], 0, -106.4, 0, 106.5).s().p('EgosAQpMAAAghRMBRaAAAMAAAAhRg');
    this.shape.setTransform(349.061, 80.7498, 1.7559, 0.7584);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(210));

    // small
    this.instance = new lib.small();
    this.instance.setTransform(230.5, -620.8, 1, 1, 0, 0, 0, 53.5, 55.5);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off: false}, 0).to({y: -150.65}, 25, cjs.Ease.backOut).wait(150).to({y: -620.8}, 25, cjs.Ease.backIn).wait(5));

    // bac
    this.instance_1 = new lib.bac();
    this.instance_1.setTransform(588, -579.95, 1, 1, 0, 0, 0, 107, 97.5);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off: false}, 0).to({y: -109.8}, 25, cjs.Ease.backOut).wait(142).to({y: -579.95}, 25, cjs.Ease.backIn).wait(9));

    // foot
    this.instance_2 = new lib.foot();
    this.instance_2.setTransform(2.5, -683.45, 1, 1, 0, 0, 0, 165.5, 166);
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off: false}, 0).to({y: -213.3}, 25, cjs.Ease.backOut).wait(146).to({y: -683.45}, 25, cjs.Ease.backIn).wait(7));

    // BG2
    this.instance_3 = new lib.BGBG2();
    this.instance_3.setTransform(165.55, 280.3, 1, 1, 0, 0, 0, 247.1, 369.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({alpha: 0}, 6).wait(191).to({alpha: 1}, 6).wait(4));

    // BG_img
    this.instance_4 = new lib.IMG_BG();
    this.instance_4.setTransform(378.3, 226.6, 0.426, 0.426, 0, 0, 0, 550.3, 275.6);
    this.instance_4.compositeOperation = 'lighten';
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off: false}, 0).to({regX: 550.5, regY: 275.5, scaleX: 0.6638, scaleY: 0.6638, x: 378.35, y: 197.85}, 18, cjs.Ease.cubicInOut).wait(167).to({regX: 550.3, regY: 275.6, scaleX: 0.426, scaleY: 0.426, x: 378.3, y: 226.6}, 18, cjs.Ease.cubicIn).wait(4));

    // stageBackground
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('rgba(0,0,0,0)').ss(1, 1, 1, 3, true).p('Eg9FgfUMB6LAAAMAAAA+pMh6LAAAg');
    this.shape_1.setTransform(381, 190.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#081051').s().p('Eg9FAfVMAAAg+pMB6LAAAMAAAA+pg');
    this.shape_2.setTransform(381, 190.5);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2}, {t: this.shape_1}]}).wait(210));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(272.6, -385.8, 578.1, 875.8);
  // library properties:
  lib.properties = {
    id: 'D4379D299E48794E8C2650E82FD8DF20',
    width: 762,
    height: 381,
    fps: 30,
    color: '#081051',
    opacity: 1.00,
    manifest: [
      {src: 'img/ball1.png', id: 'ball1'},
      {src: 'img/ball2.png', id: 'ball2'},
      {src: 'img/BALL3.png', id: 'BALL3'},
      {src: 'img/IMGBG.png', id: 'IMGBG'},
      {src: 'img/Mob.png', id: 'Mob'},
      {src: 'img/Snow.png', id: 'Snow'},
      {src: 'img/Snow1.png', id: 'Snow1'},
      {src: 'img/Snow3.png', id: 'Snow3'}
    ],
    preloads: [],
  };


  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) {
      this.seek(ms);
    } this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
  };
  p.getDuration = function () {
    return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
  };

  p.getTimelinePosition = function () {
    return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions['D4379D299E48794E8C2650E82FD8DF20'] = {
    getStage() {
      return exportRoot.stage;
    },
    getLibrary() {
      return lib;
    },
    getSpriteSheet() {
      return ss;
    },
    getImages() {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };


  an.makeResponsive = function (isResp, respDim, isScale, scaleType, domContainers) {
    var lastW; var lastH; var lastS = 1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width; var h = lib.properties.height;
      var iw = window.innerWidth; var ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1; var xRatio = iw / w; var yRatio = ih / h; var sRatio = 1;
      if (isResp) {
        if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) {
            sRatio = Math.min(xRatio, yRatio);
          }
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = w * sRatio + 'px';
        container.style.height = h * sRatio + 'px';
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw; lastH = ih; lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if ((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)) {
              cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
            }
          }
        }
      }
    }
  };


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs; var AdobeAn;
