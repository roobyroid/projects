/* eslint-disable no-var */
(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [
    {name: 'ball_atlas_1', frames: [[0, 0, 656, 656], [0, 658, 101, 18]]}
  ];


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


  (lib._VolleyballBall_1 = function () {
    this.initialize(ss['ball_atlas_1']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();


  (lib.Shadow1 = function () {
    this.initialize(ss['ball_atlas_1']);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();
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


  (lib.shadow = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Shadow1();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.shadow, new cjs.Rectangle(0, 0, 101, 18), null);


  (lib.ball_b = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib._VolleyballBall_1();
    this.instance.setTransform(-62, -55, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.ball_b, new cjs.Rectangle(-62, -55, 328, 328), null);


  (lib.ball_2 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.ball_b();
    this.instance.setTransform(133.75, 138, 1.0328, 1.0328, 0, 0, 0, 103.9, 109.1);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.ball_2, new cjs.Rectangle(-37.6, -31.5, 338.8, 338.8), null);


  // stage content:
  (lib.ball = function (mode, startPosition, loop, reversed) {
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

    // ball_2
    this.instance = new lib.ball_2();
    this.instance.setTransform(166.9, 266.3, 0.8377, 0.8112, 0, 0, 0, 134.9, 136.8);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({regY: 136.7, scaleY: 0.8377, y: 153.3}, 12, cjs.Ease.cubicOut).to({regY: 136.9, scaleY: 0.8073, y: 266.3}, 11, cjs.Ease.cubicIn).to({regY: 136.8, scaleY: 0.7942, y: 153.35}, 13, cjs.Ease.cubicOut).to({regY: 136.7, scaleY: 0.8093, y: 266.35}, 12, cjs.Ease.cubicIn).to({scaleY: 0.817, y: 153.3}, 12, cjs.Ease.cubicOut).to({scaleY: 0.8093, y: 266.35}, 12, cjs.Ease.cubicIn).to({scaleY: 0.817, y: 153.3}, 12, cjs.Ease.cubicOut).to({regY: 136.8, scaleY: 0.8112, y: 266.3}, 12, cjs.Ease.cubicIn).wait(1));

    // Layer_1
    this.instance_1 = new lib.shadow();
    this.instance_1.setTransform(163.05, 354.8, 2.0268, 3.5295, 0, 0, 0, 50.5, 9.1);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX: 50.9, scaleX: 0.9413, scaleY: 2.1618, x: 163.6, y: 354.65, alpha: 0.7188}, 12, cjs.Ease.cubicOut).to({regX: 50.5, scaleX: 2.0268, scaleY: 3.5295, x: 163.05, y: 354.8, alpha: 1}, 11, cjs.Ease.cubicIn).to({regX: 50.9, scaleX: 0.9413, scaleY: 2.1618, x: 163.6, y: 354.65, alpha: 0.7188}, 13, cjs.Ease.cubicOut).to({regX: 50.5, scaleX: 2.0268, scaleY: 3.5295, x: 163.05, y: 354.8, alpha: 1}, 12, cjs.Ease.cubicIn).to({regX: 50.9, scaleX: 0.9413, scaleY: 2.1618, x: 163.6, y: 354.65, alpha: 0.7188}, 12, cjs.Ease.cubicOut).to({regX: 50.5, scaleX: 2.0268, scaleY: 3.5295, x: 163.05, y: 354.8, alpha: 1}, 12, cjs.Ease.cubicIn).to({regX: 50.9, scaleX: 0.9413, scaleY: 2.1618, x: 163.6, y: 354.65, alpha: 0.7188}, 12, cjs.Ease.cubicOut).to({regX: 50.5, scaleX: 2.0268, scaleY: 3.5295, x: 163.05, y: 354.8, alpha: 1}, 12, cjs.Ease.cubicIn).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(186.4, 220.3, 119.79999999999998, 184.3);
  // library properties:
  lib.properties = {
    id: '25739F0BBC05914EB8BFCB115C993B28',
    width: 328,
    height: 416,
    fps: 30,
    color: '#FFFFFF',
    opacity: 0.00,
    manifest: [
      {src: 'img/ball_atlas_1.png', id: 'ball_atlas_1'}
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
  an.compositions['25739F0BBC05914EB8BFCB115C993B28'] = {
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
