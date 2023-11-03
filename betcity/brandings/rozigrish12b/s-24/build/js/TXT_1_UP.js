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


  (lib.T2 = function (mode, startPosition, loop, reversed) {
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
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#21EAF7').s().p('AAAASIgMAQIgQgNIANgQIgTgGIAHgSIASAGIAAgUIATAAIAAAUIASgGIAHASIgTAGIANAQIgQANg');
    this.shape.setTransform(183.65, 339.125);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    // Layer_1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.lf(['#21EAF7', '#40FF98'], [0, 1], 119, 0, -128.1, 0).s().p('AKQBrQgcgaAAgtIAAhHQAAgtAcgaQAbgbAwAAQAxAAAbAbQAcAaAAAtIAABHQAAAtgcAaQgbAbgxAAQgwAAgbgbgALEg6QgHAJAAAQIAABDQAAAQAHAJQAIAKAPgBQAfABAAgjIAAhDQAAgjgfAAQgPAAgIAKgAGRBrQgbgaAAgtIAAhHQAAgtAbgaQAcgbAwAAQAwAAAcAbQAbAaAAAtIAABHQAAAtgbAaQgcAbgwAAQgwAAgcgbgAHGg6QgIAJAAAQIAABDQAAAjAfgBQAPABAIgKQAIgJAAgQIAAhDQAAgQgIgJQgIgKgPAAQgPAAgIAKgACTBrQgcgaAAgtIAAhHQAAgtAcgaQAbgbAxAAQAwAAAbAbQAcAaAAAtIAABHQAAAtgcAaQgbAbgwAAQgxAAgbgbgADHg6QgHAJAAAQIAABDQAAAjAfgBQAPABAIgKQAHgJAAgQIAAhDQAAgQgHgJQgIgKgPAAQgQAAgIAKgAjDBrQgcgaAAgtIAAhHQAAgtAcgaQAbgbAwAAQAxAAAbAbQAcAaAAAtIAABHQAAAtgcAaQgbAbgxAAQgwAAgbgbgAiPg6QgHAJAAAQIAABDQAAAQAHAJQAIAKAPgBQAfABAAgjIAAhDQAAgjgfAAQgPAAgIAKgAnCBrQgbgaAAgtIAAhHQAAgtAbgaQAcgbAwAAQAwAAAcAbQAbAaAAAtIAABHQAAAtgbAaQgcAbgwAAQgwAAgcgbgAmNg6QgIAJAAAQIAABDQAAAQAIAJQAIAKAPgBQAPABAIgKQAIgJAAgQIAAhDQAAgQgIgJQgIgKgPAAQgPAAgIAKgArABrQgcgaAAgtIAAhHQAAgtAcgaQAbgbAxAAQAwAAAcAbQAbAZAAAuIAABHQAAAtgbAaQgcAbgwAAQgxAAgbgbgAqMg6QgHAJAAAQIAABDQAAAQAHAJQAIAKAQgBQAPABAIgKQAHgJAAgQIAAhDQAAgQgHgJQgIgKgPAAQgQAAgIAKgAPkCAIAAgkIgmAAIAAgtIAmAAIAAgQIgmAAIAAgsIAmAAIAAhyICbAAQAtgBAZAWQAZAVAAAlQAABPhfAAIhRAAIAAAQICBAAIAAAtIiBAAIAAAkgAQugQIBIAAQAcAAAAgZQAAgXgcAAIhIAAgAwnCAIAAgwIBkhWQAXgTAAgSQAAgLgGgHQgHgHgMAAQgMAAgHAIQgHAIAAAMIAAANIhHAAIAAgPQAAgnAZgYQAagbAuAAQAvAAAaAXQAaAXAAAnQAAAbgPAWQgMAQgcAYIgcAYIBfAAIAAA+gAyfCAIAAixIg+AjIAAhDIBQgwIA2AAIAAEBg');
    this.shape_1.setTransform(53.325, 347.9);

    this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(-71.3, 326.5, 260.9, 34.80000000000001), null);


  (lib.T1 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('Ag0A6IAAhzIBjAAIAAAbIhCAAIAAAPIAnAAIAAAbIgnAAIAAASIBIAAIAAAcg');
    this.shape.setTransform(265.075, 338.275);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AhTA6IAAhzIAiAAIAABWIAhAAIAAhWIAgAAIAABWIAhAAIAAhWIAjAAIAABzg');
    this.shape_1.setTransform(248.95, 338.275);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AAtA6IAAhzIAiAAIAABzgAhOA6IAAhzIAhAAIAAAiIAkAAQATAAAMAKQANALAAATQAAAVgNAKQgMAKgTAAgAgtAdIAfAAQAIAAADgDQADgDAAgGQAAgGgDgDQgDgDgIAAIgfAAg');
    this.shape_2.setTransform(230.25, 338.275);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBGAAQAUAAAMAKQALAKAAATQAAATgLAKQgMAKgUAAIglAAIAAAlgAgXgHIAhAAQAGAAAEgDQADgDAAgFQAAgFgDgDQgDgCgHAAIghAAg');
    this.shape_3.setTransform(214.775, 338.275);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AgzA6IAAhzIBnAAIAAAdIhGAAIAABWg');
    this.shape_4.setTransform(202.075, 338.275);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AAtA6IAAhzIAiAAIAABzgAhOA6IAAhzIAhAAIAAAiIAkAAQATAAAMAKQANALAAATQAAAVgNAKQgMAKgTAAgAgtAdIAfAAQAIAAADgDQADgDAAgGQAAgGgDgDQgDgDgIAAIgfAAg');
    this.shape_5.setTransform(186.5, 338.275);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#FFFFFF').s().p('AgaA4QgKgEgHgHQgHgGgDgHQgDgHgBgFIAiAAQABAEAHAEQAFADALAAQALAAAFgCQAGgDAAgFQAAgFgEgCQgEgCgKAAIgRAAIAAgZIAQAAQAJAAADgCQAEgCAAgEQAAgFgFgCQgFgCgJAAIgMABIgHADIgEAEIgiAAQACgKAHgIQAGgIAMgGQANgFARAAQATAAAMAEQAMAFAFAHQAGAIgBAJQAAAHgDAFQgCAFgEADQgEADgFACQAFABAGACQAEAEADAEQAEAFAAAHQAAASgPAKQgOAKgcAAQgPAAgMgEg');
    this.shape_6.setTransform(170.9, 338.275);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#FFFFFF').s().p('AgfA1QgNgIgJgNQgIgOAAgSQAAgRAIgOQAJgNANgIQAPgHAQAAQASAAAOAHQAOAIAIANQAJAOAAARQAAASgJAOQgIANgOAIQgOAHgSAAQgQAAgPgHgAgOgZQgGAEgEAHQgDAGAAAIQAAAJADAHQAEAGAGAEQAGAEAIAAQAJAAAGgEQAHgEADgGQADgHABgJQgBgIgDgGQgDgHgHgEQgGgEgJAAQgIAAgGAEg');
    this.shape_7.setTransform(157.6, 338.275);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBGAAQAUAAAMAKQALAKAAATQAAATgLAKQgMAKgUAAIglAAIAAAlgAgXgHIAhAAQAGAAAEgDQADgDAAgFQAAgFgDgDQgDgCgHAAIghAAg');
    this.shape_8.setTransform(144.275, 338.275);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBHAAQANAAAJAEQAIAEAEAHQAFAHAAAKQAAAGgDAEQgCAFgDADIgHAFQAEABAFADQAEAEADAGQACAFAAAIQAAAPgKAJQgLAJgUAAgAgXAgIAgAAQAGAAAEgCQADgDAAgFQAAgFgDgDQgEgCgGAAIggAAgAgXgNIAfAAQAGAAACgCQAEgDAAgEQAAgFgEgCQgCgCgGAAIgfAAg');
    this.shape_9.setTransform(126.9, 338.275);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#FFFFFF').s().p('AAZBNIAAhGIgyBGIghAAIAAhzIAhAAIAABFIAyhFIAiAAIAABzgAgRgyQgHgEgDgGQgEgHAAgHIAAgCIAZAAIAAABQAAADABACQACACADAAQAEAAABgCQACgCAAgDIAAgBIAYAAIAAACQAAAHgDAHQgDAGgHAEQgHAEgLAAQgKAAgHgEg');
    this.shape_10.setTransform(108.825, 336.4);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AgmA6IAXgnIgzhMIAoAAIAdAuIAcguIAkAAIhFBzg');
    this.shape_11.setTransform(94.975, 338.275);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBHAAQANAAAIAEQAJAEAFAHQAEAHAAAKQAAAGgDAEQgCAFgDADIgHAFQAEABAFADQAEAEACAGQADAFAAAIQAAAPgLAJQgKAJgUAAgAgXAgIAgAAQAGAAAEgCQADgDABgFQgBgFgDgDQgEgCgGAAIggAAgAgXgNIAfAAQAGAAACgCQADgDAAgEQAAgFgDgCQgCgCgGAAIgfAAg');
    this.shape_12.setTransform(81.7, 338.275);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('AgQA6IAAhWIgqAAIAAgdIB1AAIAAAdIgqAAIAABWg');
    this.shape_13.setTransform(68.375, 338.275);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#FFFFFF').s().p('AgcA0QgOgHgHgOQgIgNAAgSQAAgRAIgNQAHgOAOgHQAOgIARAAQAOAAALAEQAKAFAHAGQAGAHADAHQAEAHAAAFIgiAAIgDgEQgDgDgEgCQgFgCgGAAQgIAAgGAEQgFAEgEAHQgDAHAAAHQAAAJADAGQAEAHAFAEQAGAEAIAAQAHAAAEgCQAFgCACgDIADgEIAiAAQAAAFgDAGQgDAHgHAHQgGAHgLAEQgKAFgPAAQgRAAgOgIg');
    this.shape_14.setTransform(55.525, 338.275);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#FFFFFF').s().p('AAfA6IgGgQIgzAAIgHAQIgiAAIAyhzIAjAAIAyBzgAANAOIgNghIgOAhIAbAAg');
    this.shape_15.setTransform(42.075, 338.275);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#FFFFFF').s().p('AAXA6IAAgnIgFABIgLABIgMAAQgRAAgLgEQgLgFgFgKQgHgJAAgRIAAghIAiAAIAAAhQAAAJAFAEQAEAEAKAAIANAAIAKgBIADgBIAAgwIAiAAIAABzg');
    this.shape_16.setTransform(28.25, 338.275);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f('#FFFFFF').s().p('AgmA6IAXgnIgzhMIAoAAIAdAuIAcguIAkAAIhFBzg');
    this.shape_17.setTransform(14.925, 338.275);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_17}, {t: this.shape_16}, {t: this.shape_15}, {t: this.shape_14}, {t: this.shape_13}, {t: this.shape_12}, {t: this.shape_11}, {t: this.shape_10}, {t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(6.3, 322.3, 266.5, 28.69999999999999), null);


  // stage content:
  (lib.TXT_1_UP = function (mode, startPosition, loop, reversed) {
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

    // T2
    this.instance = new lib.T2();
    this.instance.setTransform(354.35, -764.95, 2.732, 2.732, 0, 0, 0, 56.1, 18.9);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off: false}, 0).to({x: 356.15, y: -720.25, alpha: 1}, 14, cjs.Ease.backOut).wait(63).to({x: 354.35, y: -657.75, alpha: 0}, 12, cjs.Ease.backIn).wait(3));

    // T1
    this.instance_1 = new lib.T1();
    this.instance_1.setTransform(352.7, -826.85, 2.732, 2.732, 0, 0, 0, 135.4, 18.9);
    this.instance_1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x: 354.6, y: -782.15, alpha: 1}, 14, cjs.Ease.backOut).wait(69).to({x: 352.7, y: -719.65, alpha: 0}, 12, cjs.Ease.backIn).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(365, 142.1, 365.29999999999995, 135.50000000000003);
  // library properties:
  lib.properties = {
    id: 'A1685B3A8EA9B7468FFABFCD5375CDBC',
    width: 730,
    height: 280,
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
  an.compositions['A1685B3A8EA9B7468FFABFCD5375CDBC'] = {
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
