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

    // y_copy
    this.instance = new lib.y();
    this.instance.setTransform(208.3, 10.85, 0.1, 0.1, 0, 0, 0, 18, 16.5);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off: false}, 0).to({regX: 17.4, regY: 16, scaleX: 0.8971, scaleY: 0.8971, x: 208.25, y: 10.9}, 15, cjs.Ease.backOut).wait(113).to({regX: 18, regY: 16.5, scaleX: 0.1, scaleY: 0.1, x: 208.3, y: 10.85}, 15, cjs.Ease.backIn).wait(1));

    // t_copy
    this.instance_1 = new lib._t();
    this.instance_1.setTransform(179.4, 10.8, 0.1, 0.1, 0, 0, 0, 16, 16.5);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off: false}, 0).to({regX: 15.6, regY: 16, scaleX: 0.8971, scaleY: 0.8971, y: 10.9}, 15, cjs.Ease.backOut).wait(113).to({regX: 16, regY: 16.5, scaleX: 0.1, scaleY: 0.1, y: 10.8}, 15, cjs.Ease.backIn).to({_off: true}, 1).wait(1));

    // i_copy
    this.instance_2 = new lib.i();
    this.instance_2.setTransform(147.15, 10.85, 0.1, 0.1, 0, 0, 0, 17.5, 16.5);
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off: false}, 0).to({regY: 16, scaleX: 0.8971, scaleY: 0.8971, x: 147.1, y: 10.9}, 15, cjs.Ease.backOut).wait(113).to({regY: 16.5, scaleX: 0.1, scaleY: 0.1, x: 147.15, y: 10.85}, 15, cjs.Ease.backIn).to({_off: true}, 1).wait(2));

    // c_copy
    this.instance_3 = new lib.c();
    this.instance_3.setTransform(116.85, 10.8, 0.1, 0.1, 0, 0, 0, 15, 16);
    this.instance_3._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off: false}, 0).to({regY: 16.4, scaleX: 0.8971, scaleY: 0.8971, x: 116.9}, 15, cjs.Ease.backOut).wait(113).to({regY: 16, scaleX: 0.1, scaleY: 0.1, x: 116.85}, 15, cjs.Ease.backIn).to({_off: true}, 1).wait(3));

    // t_copy
    this.instance_4 = new lib.t();
    this.instance_4.setTransform(89.05, 10.85, 0.1, 0.1, 0, 0, 0, 15.5, 15.5);
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off: false}, 0).to({regX: 15.6, regY: 16, scaleX: 0.8971, scaleY: 0.8971, x: 89.1, y: 10.9}, 15, cjs.Ease.backOut).wait(113).to({regX: 15.5, regY: 15.5, scaleX: 0.1, scaleY: 0.1, x: 89.05, y: 10.85}, 15, cjs.Ease.backIn).to({_off: true}, 1).wait(4));

    // e_copy
    this.instance_5 = new lib.e();
    this.instance_5.setTransform(59.6, 10.85, 0.1, 0.1, 0, 0, 0, 15.5, 15.5);
    this.instance_5._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off: false}, 0).to({regX: 15.1, regY: 16, scaleX: 0.8971, scaleY: 0.8971, y: 10.9}, 15, cjs.Ease.backOut).wait(113).to({regX: 15.5, regY: 15.5, scaleX: 0.1, scaleY: 0.1, y: 10.85}, 15, cjs.Ease.backIn).to({_off: true}, 1).wait(5));

    // b_copy
    this.instance_6 = new lib.b();
    this.instance_6.setTransform(28.05, 10.85, 0.1, 0.1, 0, 0, 0, 18, 15.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX: 17.5, regY: 15.9, scaleX: 0.8971, scaleY: 0.8971}, 15, cjs.Ease.backOut).wait(113).to({regX: 18, regY: 15.5, scaleX: 0.1, scaleY: 0.1}, 15, cjs.Ease.backIn).to({_off: true}, 1).wait(6));

    // y_idn
    this.instance_7 = new lib.y();
    this.instance_7.setTransform(208.25, 10.9, 0.8971, 0.8971, 0, 0, 0, 17.4, 16);
    this.instance_7.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(150));

    // t
    this.instance_8 = new lib._t();
    this.instance_8.setTransform(179.4, 10.9, 0.8971, 0.8971, 0, 0, 0, 15.6, 16);
    this.instance_8.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150));

    // i
    this.instance_9 = new lib.i();
    this.instance_9.setTransform(147.1, 10.9, 0.8971, 0.8971, 0, 0, 0, 17.5, 16);
    this.instance_9.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150));

    // c
    this.instance_10 = new lib.c();
    this.instance_10.setTransform(116.9, 10.8, 0.8971, 0.8971, 0, 0, 0, 15, 16.4);
    this.instance_10.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(150));

    // t
    this.instance_11 = new lib.t();
    this.instance_11.setTransform(89.1, 10.9, 0.8971, 0.8971, 0, 0, 0, 15.6, 16);
    this.instance_11.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(150));

    // e
    this.instance_12 = new lib.e();
    this.instance_12.setTransform(59.6, 10.9, 0.8971, 0.8971, 0, 0, 0, 15.1, 16);
    this.instance_12.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(150));

    // b
    this.instance_13 = new lib.b();
    this.instance_13.setTransform(28.05, 10.85, 0.8971, 0.8971, 0, 0, 0, 17.5, 15.9);
    this.instance_13.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(10.5, -5.2, 214.9, 32.5);


  // stage content:
  (lib.Logo = function (mode, startPosition, loop, reversed) {
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
    this.instance.setTransform(209.3, 51.1, 1.9025, 1.9025, 0, 0, 0, 118, 16.4);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(218.3, 52.5, 192.7, 16);
  // library properties:
  lib.properties = {
    id: '3FD7C49FF977644DAACCE1327A287F92',
    width: 420,
    height: 80,
    fps: 30,
    color: '#333333',
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
  an.compositions['3FD7C49FF977644DAACCE1327A287F92'] = {
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
