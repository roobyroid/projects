/* eslint-disable no-var */
(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [
    {name: 'Aegis_atlas_1', frames: [[1002, 0, 453, 450], [0, 0, 1000, 636]]}
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


  (lib.Image = function () {
    this.initialize(ss['Aegis_atlas_1']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();


  (lib.Image_aeg = function () {
    this.initialize(ss['Aegis_atlas_1']);
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


  (lib.r2 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#06B9FF').s().p('AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIgBALQABAMgJAIQgIAJgMgBQgLABgIgJg');
    this.shape.setTransform(2.85, 2.85);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.r2, new cjs.Rectangle(0, 0, 5.7, 5.7), null);


  (lib.r = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg');
    this.shape.setTransform(3.95, 3.95);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.r, new cjs.Rectangle(0, 0, 7.9, 7.9), null);


  (lib.logo_Int_3 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Image();
    this.instance.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.logo_Int_3, new cjs.Rectangle(0, 0, 226.5, 225), null);


  (lib.light = function (mode, startPosition, loop, reversed) {
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

    // Layer_3
    this.instance = new lib.Image_aeg();
    this.instance.setTransform(-191, 24);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-191, 24, 1000, 636), null);


  (lib.Logo_Int2 = function (mode, startPosition, loop, reversed) {
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

    // Layer_1_copy_copy
    this.instance = new lib.logo_Int_3();
    this.instance.setTransform(113.2, 112.5, 1, 1, 0, 0, 0, 113.2, 112.5);
    this.instance.alpha = 0.1992;
    this.instance.compositeOperation = 'multiply';

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    // Layer_1_copy
    this.instance_1 = new lib.logo_Int_3();
    this.instance_1.setTransform(113.2, 112.5, 1, 1, 0, 0, 0, 113.2, 112.5);
    this.instance_1.compositeOperation = 'hard-light';

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    // Layer_1
    this.instance_2 = new lib.logo_Int_3();
    this.instance_2.setTransform(113.2, 112.5, 1, 1, 0, 0, 0, 113.2, 112.5);
    this.instance_2.compositeOperation = 'hard-light';

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

    // Layer_1_copy
    this.instance_3 = new lib.logo_Int_3();
    this.instance_3.setTransform(113.2, 112.5, 1, 1, 0, 0, 0, 113.2, 112.5);
    this.instance_3.compositeOperation = 'overlay';

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.Logo_Int2, new cjs.Rectangle(0, 0, 226.5, 225), null);


  (lib.light2 = function (mode, startPosition, loop, reversed) {
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

    // Layer_2_copy
    this.instance = new lib.light();
    this.instance.setTransform(84.9, 292, 1, 1, 0, 0, 180, 344, 258);
    this.instance.alpha = 0;
    this.instance.compositeOperation = 'screen';

    this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha: 1}, 29).to({alpha: 0}, 30).wait(1));

    // Layer_2
    this.instance_1 = new lib.light();
    this.instance_1.setTransform(134.9, 292, 1, 1, 0, 0, 0, 344, 258);
    this.instance_1.compositeOperation = 'screen';

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha: 0}, 29).to({alpha: 1}, 30).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-400.1, 58, 1020, 636);


  (lib.logo_int = function (mode, startPosition, loop, reversed) {
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

    // Layer_7_copy
    this.instance = new lib.r2();
    this.instance.setTransform(144.95, 81.6, 0.3136, 0.3136, 0, 0, 0, 3.2, 3.1);
    this.instance.alpha = 0.1094;
    this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance.cache(-2, -2, 10, 10);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

    // Layer_7_copy_copy
    this.instance_1 = new lib.r2();
    this.instance_1.setTransform(195.65, 159.05, 0.5547, 0.5547, 0, 0, 0, 3.1, 3.1);
    this.instance_1.alpha = 0.1094;
    this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_1.cache(-2, -2, 10, 10);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

    // Layer_7_copy
    this.instance_2 = new lib.r2();
    this.instance_2.setTransform(172.9, 139.95, 0.5547, 0.5547, 0, 0, 0, 3, 3.1);
    this.instance_2.alpha = 0.1094;
    this.instance_2.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_2.cache(-2, -2, 10, 10);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

    // Layer_7_copy
    this.instance_3 = new lib.r2();
    this.instance_3.setTransform(151.35, 134.4, 0.6874, 0.6874, 0, 0, 0, 3, 3.1);
    this.instance_3.alpha = 0.1094;
    this.instance_3.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_3.cache(-2, -2, 10, 10);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150));

    // Layer_7
    this.instance_4 = new lib.r2();
    this.instance_4.setTransform(166.05, 116.5, 0.6874, 0.6874, 0, 0, 0, 3, 3.1);
    this.instance_4.alpha = 0.1094;
    this.instance_4.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_4.cache(-2, -2, 10, 10);

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150));

    // Layer_4_copy_copy_copy_copy
    this.instance_5 = new lib.r();
    this.instance_5.setTransform(206.75, 157.85, 0.4956, 0.4956, 0, 0, 0, 4, 4.2);
    this.instance_5.alpha = 0.1094;
    this.instance_5.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_5.cache(-2, -2, 12, 12);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150));

    // Layer_4_copy_copy_copy
    this.instance_6 = new lib.r();
    this.instance_6.setTransform(169.85, 134.25, 0.2845, 0.2845, 0, 0, 0, 4.2, 4.4);
    this.instance_6.alpha = 0.1094;
    this.instance_6.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_6.cache(-2, -2, 12, 12);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150));

    // Layer_4_copy_copy
    this.instance_7 = new lib.r();
    this.instance_7.setTransform(151.9, 137.8, 0.3045, 0.3045, 0, 0, 0, 4.1, 4.5);
    this.instance_7.alpha = 0.1094;
    this.instance_7.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_7.cache(-2, -2, 12, 12);

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(150));

    // Layer_4_copy
    this.instance_8 = new lib.r();
    this.instance_8.setTransform(141.7, 73.75, 0.5482, 0.5482, 0, 0, 0, 4.1, 4.1);
    this.instance_8.alpha = 0.1094;
    this.instance_8.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_8.cache(-2, -2, 12, 12);

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150));

    // Layer_4
    this.instance_9 = new lib.r();
    this.instance_9.setTransform(150.9, 41, 0.5482, 0.5482, 0, 0, 0, 4.2, 4.2);
    this.instance_9.alpha = 0.1094;
    this.instance_9.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_9.cache(-2, -2, 12, 12);

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150));

    // Layer_1
    this.instance_10 = new lib.Logo_Int2();
    this.instance_10.setTransform(238.05, 78.6, 0.6874, 0.6874, 0, 0, 0, 113.4, 112.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(150));

    // Layer_3
    this.instance_11 = new lib.light2();
    this.instance_11.setTransform(186.35, -12.2, 0.6874, 0.6874, 0, 0, 0, 25.8, 25.4);

    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(150));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-106.4, 1.3, 701.1, 446.2);


  // stage content:
  (lib.Aegis = function (mode, startPosition, loop, reversed) {
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

    // LI
    this.instance = new lib.logo_int();
    this.instance.setTransform(220.2, 164.75, 1, 1, 0, 0, 0, 113.2, 112.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

    // stageBackground
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s('rgba(0,0,0,0)').ss(1, 1, 1, 3, true).p('Eg4PgonMBwfAAAMAAABRPMhwfAAAg');
    this.shape.setTransform(350, 250);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('rgba(8,16,48,0)').s().p('Eg4PAooMAAAhRPMBwfAAAMAAABRPg');
    this.shape_1.setTransform(350, 250);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_1}, {t: this.shape}]}).wait(150));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(350.6, 303.5, 351.1, 196.2);
  // library properties:
  lib.properties = {
    id: '5CC1CC8E7EC3894B99291DE8CE6F8335',
    width: 700,
    height: 500,
    fps: 30,
    color: '#081030',
    opacity: 0.00,
    manifest: [
      {src: 'img/Aegis_atlas_1.png', id: 'Aegis_atlas_1'}
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
  an.compositions['5CC1CC8E7EC3894B99291DE8CE6F8335'] = {
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
