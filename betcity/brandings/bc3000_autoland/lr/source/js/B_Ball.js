/* eslint-disable no-var */
(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [
    {name: 'B_Ball_atlas_1', frames: [[0, 0, 172, 172]]}
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


  (lib.BASKETBALLBALL = function () {
    this.initialize(ss['B_Ball_atlas_1']);
    this.gotoAndStop(0);
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


  (lib.blblbl = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('ApwL1IAA3qIThAAIAAXqg');
    this.shape.setTransform(35, 75.75);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.blblbl, new cjs.Rectangle(-27.4, 0, 124.9, 151.5), null);


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

    // Layer_9 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AlLCTQhPgdgwgsQA+AoBHAVQBuAbCAgWQBQgMCPhPIDSibIBFgvIARgKIAUAAQAIACgBALIgKAUQgIgIgPACIkEC9QhzBBh0AiQhGAMg+AAQhIAAg+gRg');
    mask.setTransform(78.2087, 103.8488);

    // Layer_8_copy_copy
    this.instance = new lib.blblbl();
    this.instance.setTransform(-24.85, 111.3, 0.5014, 1, 14.9983, 0, 0, 35, 75.8);
    this.instance._off = true;
    this.instance.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off: false}, 0).to({regX: 34.9, rotation: -15.0007, x: 198.7, y: 84.45}, 28, cjs.Ease.quadInOut).wait(21));

    // Layer_5 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    mask_1.graphics.p('ACgCZQAVifhCiSQg+iQhfhWQg5g8hQgjQBdAgBBA8QBDA7AsBPQAxBPAWBUQAaBjgKCMIgUBgQgzCRhYBSQB3iPAXi2g');
    mask_1.setTransform(104.9183, 66.1);

    // Layer_8_copy_copy
    this.instance_1 = new lib.blblbl();
    this.instance_1.setTransform(57.9, -41.9, 0.5014, 1, 44.9975, 0, 0, 35.1, 75.7);
    this.instance_1._off = true;
    this.instance_1.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_1.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off: false}, 0).to({regX: 34.9, scaleY: 0.9999, rotation: 111.7641, x: 85.05, y: 166.4}, 28, cjs.Ease.quadInOut).wait(20));

    // Layer_4 (mask)
    var mask_2 = new cjs.Shape();
    mask_2._off = true;
    mask_2.graphics.p('AG+CfQhUgQg7g1IiFhXIiBhCQhNgfhcgVQhdgZg6ABQiMgIhbBgIARgaQAvg6BWgQQBWgQCbAXQCaAXCcBkQBSA0A8AzQBCAuAwAFIAVAAQAegLgDgaIAAgvIAQAnQgCAogKAMQgLAPgQAEg');
    mask_2.setTransform(73.95, 48.2377);

    // Layer_8_copy
    this.instance_2 = new lib.blblbl();
    this.instance_2.setTransform(-9.8, 8.55, 0.5014, 1, 14.9983, 0, 0, 35, 75.8);
    this.instance_2._off = true;
    this.instance_2.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_2.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off: false}, 0).to({regX: 34.9, rotation: -15.0007, x: 188, y: 7.4}, 27, cjs.Ease.quadInOut).wait(22));

    // Layer_3 (mask)
    var mask_3 = new cjs.Shape();
    mask_3._off = true;
    mask_3.graphics.p('AkQAsQhigGhkgYQgrgJgngZIAAgiQAfAYAZAHQC4AzEMgCQDrgCDMgaQB8gSAighIAAAZQgZAchWATQieAhioABQhAACg/AAQiDAAiCgLg');
    mask_3.setTransform(71.075, 77.631);

    // Layer_8
    this.instance_3 = new lib.blblbl();
    this.instance_3.setTransform(-34.85, 47, 0.5014, 1, 14.9983, 0, 0, 35, 75.8);
    this.instance_3._off = true;
    this.instance_3.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_3.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_3];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off: false}, 0).to({regX: 34.9, rotation: -15.0007, x: 184.65, y: 53.7}, 30, cjs.Ease.quadInOut).wait(21));

    // Layer_7
    this.instance_4 = new lib.BASKETBALLBALL();
    this.instance_4.setTransform(15, 15, 0.6585, 0.6585);

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(15, 15, 113.30000000000001, 113.30000000000001);


  // stage content:
  (lib.B_Ball = function (mode, startPosition, loop, reversed) {
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
    this.instance.setTransform(97.05, 97.05, 1.6489, 1.6489, 0, 0, 0, 72.7, 72.7);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(96.9, 97.4, 91.69999999999999, 91.19999999999999);
  // library properties:
  lib.properties = {
    id: '95EFA2304D692E428A03462175030859',
    width: 190,
    height: 191,
    fps: 30,
    color: '#FFFFFF',
    opacity: 0.00,
    manifest: [
      {src: 'img/B_Ball_atlas_1.png', id: 'B_Ball_atlas_1'}
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
  an.compositions['95EFA2304D692E428A03462175030859'] = {
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
