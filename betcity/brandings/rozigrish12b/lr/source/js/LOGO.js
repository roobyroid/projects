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
  // helper functions:

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


  (lib.y = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('AArChIAci/IihC/IhWAAIAxlCIBWAAIgdDCICgjBIBXAAIgwFBg');
    this.shape.setTransform(17.4694, 15.9438, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.y, new cjs.Rectangle(0, 0, 35, 31.9), null);


  (lib.t = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('AhUChIAkjyIhsAAIAMhPIEtAAIgNBPIhsAAIgkDyg');
    this.shape.setTransform(15.5063, 15.8945, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.t, new cjs.Rectangle(0, 0, 31, 31.8), null);


  (lib.i = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('AArChIAcjAIihDAIhWAAIAwlBIBXAAIgdDAIChjAIBWAAIgwFBg');
    this.shape.setTransform(17.4724, 15.8945, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.i, new cjs.Rectangle(0, 0, 35, 31.8), null);


  (lib.e = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('AiYChIAwlBIEBAAIgMBKIiqAAIgGArIBlAAIgLBLIhlAAIgHAzIC7AAIgMBOg');
    this.shape.setTransform(15.0667, 15.8945, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.e, new cjs.Rectangle(0, 0, 30.2, 31.8), null);


  (lib.c = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('AhrB8QgogpgDhDQgChNAtg0QAtg0BFAAQBIAAAoArQAdAgADAnIhYAAQgFgLgKgIQgQgNgWAAQgiAAgUAdQgUAaACAnQABAgAQAUQAQAVAbAAQAlAAARgeIBXAAQgGAkgdAfQgoAthAAAQhCAAgpgqg');
    this.shape.setTransform(14.8875, 16.4198, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.c, new cjs.Rectangle(0, 0, 29.8, 32.9), null);


  (lib.b = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('AiKChIATiCIg5AAIALhIIA5AAIASh3IELAAIgMBQIi0AAIgGAnIBLAAQA5AAAgAWQAfAVABApQACA6gmAfQgkAdhAAAgAgoBRIBWAAQASAAAKgIQALgIgBgPQAAgTgbAAIhaAAg');
    this.shape.setTransform(17.5062, 15.8692, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.b, new cjs.Rectangle(0, 0, 35, 31.8), null);


  (lib._t = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('AhUChIAkjyIhsAAIAMhPIEtAAIgMBPIhsAAIgkDyg');
    this.shape.setTransform(15.4984, 15.8945, 0.9877, 0.9877);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib._t, new cjs.Rectangle(0, 0, 31, 31.8), null);


  (lib.logo = function (mode, startPosition, loop, reversed) {
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

    // y_idn
    this.instance = new lib.y();
    this.instance.setTransform(214.95, 13.7, 0.9809, 0.9809, 0, 0, 0, 17.5, 16);
    this.instance.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({x: 214.35, y: -21.6}, 0).to({x: 214.95, y: 13.7, alpha: 1}, 15, cjs.Ease.backOut).wait(163).to({x: 214.35, y: -21.6, alpha: 0}, 15, cjs.Ease.backIn).wait(1));

    // t
    this.instance_1 = new lib._t();
    this.instance_1.setTransform(183.35, 13.6, 0.9809, 0.9809, 0, 0, 0, 15.7, 15.9);
    this.instance_1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({x: 182.75, y: -21.7}, 0).to({x: 183.35, y: 13.6, alpha: 1}, 15, cjs.Ease.backOut).wait(163).to({x: 182.75, y: -21.7, alpha: 0}, 15, cjs.Ease.backIn).wait(3));

    // i
    this.instance_2 = new lib.i();
    this.instance_2.setTransform(148, 13.6, 0.9809, 0.9809, 0, 0, 0, 17.6, 15.9);
    this.instance_2.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({x: 147.4, y: -21.7}, 0).to({x: 148, y: 13.6, alpha: 1}, 15, cjs.Ease.backOut).wait(163).to({x: 147.4, y: -21.7, alpha: 0}, 15, cjs.Ease.backIn).wait(5));

    // c
    this.instance_3 = new lib.c();
    this.instance_3.setTransform(114.95, 13.45, 0.9809, 0.9809, 0, 0, 0, 15, 16.2);
    this.instance_3.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({x: 114.35, y: -21.85}, 0).to({x: 114.95, y: 13.45, alpha: 1}, 15, cjs.Ease.backOut).wait(163).to({x: 114.35, y: -21.85, alpha: 0}, 15, cjs.Ease.backIn).wait(7));

    // t
    this.instance_4 = new lib.t();
    this.instance_4.setTransform(84.55, 13.6, 0.9809, 0.9809, 0, 0, 0, 15.6, 15.9);
    this.instance_4.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({x: 83.95, y: -21.7}, 0).to({x: 84.55, y: 13.6, alpha: 1}, 15, cjs.Ease.backOut).wait(163).to({x: 83.95, y: -21.7, alpha: 0}, 15, cjs.Ease.backIn).wait(9));

    // e
    this.instance_5 = new lib.e();
    this.instance_5.setTransform(52.4, 13.6, 0.9809, 0.9809, 0, 0, 0, 15.2, 15.9);
    this.instance_5.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({x: 51.8, y: -21.7}, 0).to({x: 52.4, y: 13.6, alpha: 1}, 15, cjs.Ease.backOut).wait(163).to({x: 51.8, y: -21.7, alpha: 0}, 15, cjs.Ease.backIn).wait(11));

    // b
    this.instance_6 = new lib.b();
    this.instance_6.setTransform(17.85, 13.55, 0.9809, 0.9809, 0, 0, 0, 17.6, 15.8);
    this.instance_6.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({x: 17.25, y: -21.75}, 0).to({x: 17.85, y: 13.55, alpha: 1}, 15, cjs.Ease.backOut).wait(163).to({x: 17.25, y: -21.75, alpha: 0}, 15, cjs.Ease.backIn).wait(13));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -37.7, 232.1, 71);


  // stage content:
  (lib.LOGO = function (mode, startPosition, loop, reversed) {
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

    // logo
    this.instance = new lib.logo();
    this.instance.setTransform(356.25, 160.95, 2.9801, 2.9801, 0, 0, 0, 118, 16.4);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(210));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(356.4, 214.8, 339.80000000000007, -14);
  // library properties:
  lib.properties = {
    id: 'CFCEE90035074C4796DAE69AB23499A2',
    width: 700,
    height: 220,
    fps: 30,
    color: '#000066',
    opacity: 0.00,
    manifest: [],
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
  an.compositions['CFCEE90035074C4796DAE69AB23499A2'] = {
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
