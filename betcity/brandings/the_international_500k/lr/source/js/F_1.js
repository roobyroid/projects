/* eslint-disable no-var */
(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [
    {name: 'F_1_atlas_1', frames: [[0, 0, 1276, 888], [0, 890, 833, 425]]}
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


  (lib._2 = function () {
    this.initialize(ss['F_1_atlas_1']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();


  (lib.Image = function () {
    this.initialize(ss['F_1_atlas_1']);
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


  (lib.smoke3 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Image();
    this.instance.setTransform(10, -14, 0.375, 0.375);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.smoke3, new cjs.Rectangle(10, -14, 312.4, 159.4), null);


  (lib.smoke2 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib._2();
    this.instance.setTransform(-13, -19, 0.3718, 0.3718);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.smoke2, new cjs.Rectangle(-13, -19, 474.4, 330.2), null);


  (lib.grgr = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.lf(['rgba(22,48,131,0)', '#163083'], [0, 1], -234.3, 0, 234.4, 0).s().p('EgknAboMAAAg3PMBJPAAAMAAAA3Pg');
    this.shape.setTransform(234.35, 176.825, 1, 1, 180);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.grgr, new cjs.Rectangle(0, 0, 468.7, 353.7), null);


  (lib.smoke222 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.smoke2();
    this.instance.setTransform(-10.05, -121.65, 1.7985, 1.7985, 35.2235, 0, 0, 210.9, 147);
    this.instance.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance).to({regY: 146.9, x: 35.35, y: -89.7, alpha: 1}, 59).wait(1));

    // Layer_3
    this.instance_1 = new lib.smoke2();
    this.instance_1.setTransform(35.35, -89.7, 1.7985, 1.7985, 35.2235, 0, 0, 210.9, 146.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX: 211, regY: 147, x: 68.85, y: -77.15}, 29).to({regX: 210.8, x: 103.3, y: -64.45, alpha: 0}, 30).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-509.2, -597.7, 1152.8, 1034.4);


  (lib.smoke = function (mode, startPosition, loop, reversed) {
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

    // Layer_2_copy_copy_copy
    this.instance = new lib.smoke3();
    this.instance.setTransform(984.45, 167.7, 1.3793, 1.3793, 0, 0, 0, 138, 70.5);
    this.instance.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance).to({x: 1013.35, y: 158.9, alpha: 1}, 43, cjs.Ease.none).to({regX: 138.1, x: 1043.35, y: 149.75}, 46).wait(1));

    // Layer_2_copy_copy
    this.instance_1 = new lib.smoke3();
    this.instance_1.setTransform(1043.35, 149.75, 1.3793, 1.3793, 0, 0, 0, 138.1, 70.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX: 138, x: 1076.05, y: 147.1}, 43, cjs.Ease.none).to({x: 1110.05, y: 144.35, alpha: 0}, 46).wait(1));

    // Layer_2_copy_copy
    this.instance_2 = new lib.smoke3();
    this.instance_2.setTransform(1283.25, 774.65, 1, 1, 0, 0, 0, 138, 70.5);
    this.instance_2.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x: 1304.2, y: 768.25, alpha: 1}, 43, cjs.Ease.none).to({x: 1325.85, y: 761.6}, 46).wait(1));

    // Layer_2_copy
    this.instance_3 = new lib.smoke3();
    this.instance_3.setTransform(1325.85, 761.6, 1, 1, 0, 0, 0, 138, 70.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x: 1349.65, y: 759.7}, 43, cjs.Ease.none).to({x: 1374.3, y: 757.7, alpha: 0}, 46).wait(1));

    // Layer_5_copy
    this.instance_4 = new lib.smoke2();
    this.instance_4.setTransform(1479.1, 767.6, 1, 1, 0, 0, 0, 211, 147);
    this.instance_4.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x: 1509.95, alpha: 1}, 89).wait(1));

    // Layer_3_copy
    this.instance_5 = new lib.smoke2();
    this.instance_5.setTransform(1509.95, 767.6, 1, 1, 0, 0, 0, 211, 147);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x: 1529.1, y: 762.5}, 43).to({x: 1548.95, y: 757.2, alpha: 0}, 46).wait(1));

    // Layer_5
    this.instance_6 = new lib.smoke2();
    this.instance_6.setTransform(835.05, 767.6, 1, 1, 0, 0, 0, 211, 147);
    this.instance_6.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x: 865.9, alpha: 1}, 89).wait(1));

    // Layer_3
    this.instance_7 = new lib.smoke2();
    this.instance_7.setTransform(865.9, 767.6, 1, 1, 0, 0, 0, 211, 147);

    this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x: 885.05, y: 762.5}, 43).to({x: 904.9, y: 757.2, alpha: 0}, 46).wait(1));

    // Layer_2_copy
    this.instance_8 = new lib.smoke3();
    this.instance_8.setTransform(639.2, 774.65, 1, 1, 0, 0, 0, 138, 70.5);
    this.instance_8.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x: 660.15, y: 768.25, alpha: 1}, 43, cjs.Ease.none).to({x: 681.8, y: 761.6}, 46).wait(1));

    // Layer_2
    this.instance_9 = new lib.smoke3();
    this.instance_9.setTransform(681.8, 761.6, 1, 1, 0, 0, 0, 138, 70.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x: 705.6, y: 759.7}, 43, cjs.Ease.none).to({x: 730.25, y: 757.7, alpha: 0}, 46).wait(1));

    // Layer_6
    this.instance_10 = new lib.smoke222();
    this.instance_10.setTransform(1412.65, 242.35, 0.4639, 0.4639, -5.2785, 0, 0, 38.8, 38.8);
    this.instance_10.alpha = 0.5313;

    this.instance_11 = new lib.smoke222();
    this.instance_11.setTransform(826.1, 209.55, 0.4639, 0.4639, -45, 0, 0, 38.6, 38.7);
    this.instance_11.alpha = 0.5313;

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance_11}, {t: this.instance_10}]}).wait(90));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(511.2, -42.9, 1288.1, 974.6999999999999);


  // stage content:
  (lib.F_1 = function (mode, startPosition, loop, reversed) {
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
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(['#0A1334', 'rgba(10,19,52,0)'], [0, 1], 0.3, -124.6, 0.3, 124.4).s().p('EixSATeMAAAgm7MFilAAAMAAAAm7g');
    this.shape.setTransform(910.3, 124.575);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

    // CLOWD
    this.instance = new lib.smoke();
    this.instance.setTransform(1030.05, 459, 2.1806, 2.1806, 0, 0, 0, 1117.1, 401.1);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

    // Layer_1
    this.instance_1 = new lib.grgr();
    this.instance_1.setTransform(587.15, 670.05, 2.5066, 3.7897, 0, 0, 0, 234.2, 176.8);
    this.instance_1.compositeOperation = 'multiply';

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.lf(['#01051E', 'rgba(3,8,37,0)'], [0, 1], 41.7, 0, -141.5, 0).s().p('EgWHAqpMAAAhVRMAsPAAAMAAABVRg');
    this.shape_1.setTransform(1420.8917, 674.6831, 3.6148, 2.472);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(150));

    // bg
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#051854').s().p('EiWvBpbMAAAjS1MEtfAAAMAAADS1g');
    this.shape_2.setTransform(964.8, 674.7);

    this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(150));

    // stageBackground
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s('rgba(0,0,0,0)').ss(1, 1, 1, 3, true).p('EiXjhljMEvHAAAMAAADLHMkvHAAAg');
    this.shape_3.setTransform(960, 640);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('EiXjBlkMAAAjLHMEvHAAAMAAADLHg');
    this.shape_4.setTransform(960, 640);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_4}, {t: this.shape_3}]}).wait(150));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(668.9, 130.8, 1763.7999999999997, 1485.4);
  // library properties:
  lib.properties = {
    id: '7AF8085D90176042B2825EE91889CCA8',
    width: 1920,
    height: 1280,
    fps: 30,
    color: '#FFFFFF',
    opacity: 1.00,
    manifest: [
      {src: 'img/F_1_atlas_1.png', id: 'F_1_atlas_1'}
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
  an.compositions['7AF8085D90176042B2825EE91889CCA8'] = {
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
