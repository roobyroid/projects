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


  (lib.T4 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('Ag/BBIAAiBIBQAAQAOAAAKAEQAKAFAEAIQAGAHgBAMQAAAGgCAFQgDAFgEAEQgDAEgFABQAGACAEADQAFAFADAGQADAHAAAIQAAARgMAKQgLAKgXAAgAgaAkIAkAAQAHAAAFgDQADgDAAgFQAAgHgDgCQgFgDgHAAIgkAAgAgagQIAjAAQAHAAADgCQADgCAAgFQAAgGgDgCQgDgCgHAAIgjAAg');
    this.shape.setTransform(195.55, 329.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AgjA7QgQgIgJgQQgJgPAAgUQAAgUAJgPQAKgPAPgIQAQgJATABQAUgBAQAJQAQAIAJAPQAJAPAAAUQAAAUgJAPQgJAQgQAIQgQAJgUAAQgTAAgQgJgAgQgcQgHAEgEAIQgEAHAAAJQAAAKAEAHQAEAIAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgIQAEgHAAgKQAAgJgEgHQgEgIgHgEQgHgFgKAAQgJAAgHAFg');
    this.shape_1.setTransform(179.925, 329.9);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AAcBBIAAgwIg3AAIAAAwIgmAAIAAiBIAmAAIAAAwIA3AAIAAgwIAmAAIAACBg');
    this.shape_2.setTransform(164.15, 329.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('AgjA7QgQgIgJgQQgJgPAAgUQAAgUAJgPQAKgPAPgIQAQgJATABQAUgBAQAJQAQAIAJAPQAJAPAAAUQAAAUgJAPQgJAQgQAIQgQAJgUAAQgTAAgQgJgAgQgcQgHAEgEAIQgEAHAAAJQAAAKAEAHQAEAIAHAEQAHAFAJAAQAKAAAHgFQAHgEAEgIQAEgHAAgKQAAgJgEgHQgEgIgHgEQgHgFgKAAQgJAAgHAFg');
    this.shape_3.setTransform(148.375, 329.9);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AgSBDIAAgWIgbAAQgYAAgNgMQgNgMAAgVQAAgYANgLQANgMAYAAIAbAAIAAgTIAlAAIAAATIAbAAQAXAAAOAMQANALAAAYQAAAVgNAMQgOAMgYAAIgaAAIAAAWgAATANIAWAAQAIAAAEgEQAEgEAAgFQAAgIgEgDQgEgEgIAAIgWAAgAg0gLQgEADAAAIQAAAFAEAEQAEAEAIAAIAWAAIAAgcIgWAAQgIAAgEAEg');
    this.shape_4.setTransform(130.225, 329.925);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AAcBXIAAhPIg4BPIglAAIAAiCIAlAAIAABOIA4hOIAnAAIAACCgAgTg4QgIgEgEgIQgEgHAAgJIAAgCIAcAAIAAACQAAADACACQABADAEAAQAEAAACgDQACgCAAgDIAAgCIAbAAIAAACQAAAJgDAHQgEAIgIAEQgIAEgMAAQgMAAgHgEg');
    this.shape_5.setTransform(111.85, 327.775);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#FFFFFF').s().p('AAjBBIgHgSIg6AAIgHASIgmAAIA3iBIAoAAIA4CBgAAOAQIgOgmIgQAmIAeAAg');
    this.shape_6.setTransform(96.05, 329.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#2EF3D0').s().p('Ag8BNIAAgcIA7gzQAGgGADgEQADgGAAgFQAAgHgEgEQgDgEgHAAQgHAAgEAEQgEAFAAAIIAAAHIgqAAIAAgJQAAgOAHgMQAGgNANgGQAMgIATAAQASAAANAGQANAGAHALQAGAMAAAPQAAAMgEAJQgEAHgHAIIgRAQIgQAOIA3AAIAAAlg');
    this.shape_7.setTransform(76.975, 328.75);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#2EF3D0').s().p('AgCBMIAAhoIglAUIAAgnIAvgcIAgAAIAACXg');
    this.shape_8.setTransform(64.125, 328.85);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#FFFFFF').s().p('AAdBBIAAhNIg5BNIgmAAIAAiBIAmAAIAABOIA5hOIAlAAIAACBg');
    this.shape_9.setTransform(46.9, 329.9);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.T4, new cjs.Rectangle(36.9, 308.5, 168, 36.69999999999999), null);


  // stage content:
  (lib.TXT_2 = function (mode, startPosition, loop, reversed) {
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

    // T4
    this.instance = new lib.T4();
    this.instance.setTransform(161.4, -637, 2.37, 2.37, 0, 0, 0, 100.8, 38.9);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off: false}, 0).to({y: -566, alpha: 1}, 14, cjs.Ease.backOut).wait(86).to({x: 159.75, y: -511.75, alpha: 0}, 12, cjs.Ease.backIn).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(0, 0, 408.2, 214.1);
  // library properties:
  lib.properties = {
    id: 'A1685B3A8EA9B7468FFABFCD5375CDBD',
    width: 415,
    height: 215,
    fps: 30,
    color: '#000000',
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
  an.compositions['A1685B3A8EA9B7468FFABFCD5375CDBD'] = {
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
