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


  (lib.T3 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#FFFFFF').s().p('AAXBEIAAg9IgtA9IgdAAIAAhmIAdAAIAAA9IAtg9IAdAAIAABmgAgPgsQgGgDgDgGQgDgGAAgHIAAgBIAWAAIAAABQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAQACACACAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIAAgBIAWAAIAAABQAAAHgDAGQgDAGgGADQgGADgKABQgJgBgGgDg');
    this.shape.setTransform(82.875, 329.525);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AghAzIAUgiIgthDIAjAAIAaAoIAZgoIAfAAIg9Blg');
    this.shape_1.setTransform(70.65, 331.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AgyAzIAAhlIA/AAQALgBAIAEQAIADAEAHQADAGAAAJQAAAFgBAEQgCAEgEADQgDADgDABQAFACADACQAEADACAFQADAGAAAGQAAAOgKAHQgJAJgSgBgAgUAdIAcAAQAGAAADgDQADgCAAgEQAAgGgDgBQgDgCgGAAIgcAAgAgUgMIAcAAQAEAAADgBQADgDAAgEQAAgDgDgCQgDgDgEABIgcAAg');
    this.shape_2.setTransform(58.9, 331.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('AgOAzIAAhMIglAAIAAgZIBnAAIAAAZIglAAIAABMg');
    this.shape_3.setTransform(47.125, 331.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AgZAuQgMgHgHgMQgGgMAAgPQAAgPAGgMQAHgMAMgHQAMgGAPAAQANAAAJAEQAJADAGAGQAGAGADAGIADALIgeAAIgDgEQgCgCgEgCQgEgCgGAAQgGAAgFAEQgGADgCAGQgEAGAAAHQAAAHAEAGQACAGAGAEQAFADAGAAQAGAAAEgCQAEgBADgDIACgDIAeAAQAAAEgDAGQgDAFgGAHQgFAGgJAEQgKAEgNAAQgPAAgMgHg');
    this.shape_4.setTransform(35.75, 331.225);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AAcAzIgGgOIgtAAIgGAOIgeAAIAshlIAfAAIAsBlgAAMANIgMgeIgNAeIAZAAg');
    this.shape_5.setTransform(23.825, 331.2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#FFFFFF').s().p('AAVAzIAAgiIgFAAIgJACIgMAAQgOAAgKgEQgKgEgFgJQgFgJAAgPIAAgcIAeAAIAAAcQAAAJAEADQAEAEAJAAIALAAIAIgBIAEgBIAAgqIAdAAIAABlg');
    this.shape_6.setTransform(11.575, 331.2);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#FFFFFF').s().p('AgiAzIAVgiIgthDIAjAAIAaAoIAYgoIAhAAIg+Blg');
    this.shape_7.setTransform(-0.2, 331.2);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.T3, new cjs.Rectangle(-8.3, 316.7, 99.7, 26.30000000000001), null);


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
    this.shape.setTransform(153.175, 338.275);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AhTA6IAAhzIAiAAIAABWIAhAAIAAhWIAgAAIAABWIAiAAIAAhWIAiAAIAABzg');
    this.shape_1.setTransform(137.05, 338.275);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AAtA6IAAhzIAiAAIAABzgAhOA6IAAhzIAhAAIAAAiIAjAAQAVAAALAKQAMALAAATQAAAVgMAKQgLAKgVAAgAgtAdIAfAAQAIAAADgDQADgDAAgGQAAgGgDgDQgDgDgIAAIgfAAg');
    this.shape_2.setTransform(118.35, 338.275);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBGAAQAUAAAMAKQALAKAAATQAAATgLAKQgMAKgUAAIglAAIAAAlgAgXgHIAhAAQAGAAAEgDQADgDAAgFQAAgFgDgDQgDgCgHAAIghAAg');
    this.shape_3.setTransform(102.825, 338.275);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AgzA6IAAhzIBnAAIAAAdIhGAAIAABWg');
    this.shape_4.setTransform(90.125, 338.275);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AAtA6IAAhzIAiAAIAABzgAhOA6IAAhzIAhAAIAAAiIAkAAQATAAAMAKQANALAAATQAAAVgNAKQgMAKgTAAgAgtAdIAfAAQAIAAADgDQADgDAAgGQAAgGgDgDQgDgDgIAAIgfAAg');
    this.shape_5.setTransform(74.55, 338.275);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#FFFFFF').s().p('AgaA4QgLgEgGgHQgHgGgDgHQgDgHAAgFIAhAAQACAEAFAEQAGADALAAQAKAAAHgCQAFgDAAgFQAAgFgEgCQgFgCgIAAIgRAAIAAgZIAPAAQAJAAAEgCQADgCAAgEQAAgFgFgCQgGgCgIAAIgLABIgIADIgEAEIghAAQABgKAHgIQAGgIANgGQAMgFARAAQATAAAMAEQALAFAGAHQAFAIAAAJQAAAHgCAFQgDAFgEADQgEADgFACQAGABAEACQAGAEACAEQADAFAAAHQAAASgOAKQgOAKgcAAQgPAAgMgEg');
    this.shape_6.setTransform(59, 338.275);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#FFFFFF').s().p('AgfA1QgNgIgJgNQgIgOAAgSQAAgRAIgOQAJgNANgIQAOgHARAAQASAAAOAHQAOAIAIANQAJAOAAARQAAASgJAOQgIANgOAIQgOAHgSAAQgRAAgOgHgAgOgZQgGAEgEAHQgDAGAAAIQAAAJADAHQAEAGAGAEQAGAEAIAAQAJAAAGgEQAHgEADgGQADgHABgJQgBgIgDgGQgDgHgHgEQgGgEgJAAQgHAAgHAEg');
    this.shape_7.setTransform(45.65, 338.275);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBGAAQAUAAAMAKQALAKAAATQAAATgLAKQgMAKgUAAIglAAIAAAlgAgXgHIAhAAQAGAAAEgDQADgDAAgFQAAgFgDgDQgDgCgHAAIghAAg');
    this.shape_8.setTransform(32.375, 338.275);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBHAAQANAAAIAEQAJAEAFAHQAEAHAAAKQAAAGgCAEQgCAFgEADIgIAFQAGABADADQAFAEACAGQADAFAAAIQAAAPgLAJQgKAJgUAAgAgYAgIAhAAQAHAAADgCQAEgDAAgFQAAgFgEgDQgDgCgHAAIghAAgAgYgNIAgAAQAFAAADgCQADgDAAgEQAAgFgDgCQgDgCgFAAIggAAg');
    this.shape_9.setTransform(15, 338.275);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(6.3, 322.3, 154.6, 28.69999999999999), null);


  // stage content:
  (lib.TXT_1_SIDE = function (mode, startPosition, loop, reversed) {
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
    this.instance.setTransform(114.2, -186.65, 0.8757, 0.8757, 0, 0, 0, 56.2, 18.8);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off: false}, 0).to({regY: 18.9, x: 114.8, y: -172.25, alpha: 1}, 14, cjs.Ease.backOut).wait(55).to({x: 114.2, y: -152.25, alpha: 0}, 12, cjs.Ease.backIn).wait(8));

    // T1
    this.instance_1 = new lib.T1();
    this.instance_1.setTransform(188.55, -411.9, 1.4781, 1.4781, 0, 0, 0, 135.4, 18.8);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off: false}, 0).to({x: 189.55, y: -387.6, alpha: 1}, 14, cjs.Ease.backOut).wait(62).to({x: 188.55, y: -373, alpha: 0}, 12, cjs.Ease.backIn).wait(5));

    // T3
    this.instance_2 = new lib.T3();
    this.instance_2.setTransform(46.15, -491.4, 1.6615, 1.6615, 0, 0, 0, 20.9, 18.9);
    this.instance_2.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX: 21.1, x: 47.65, y: -464.2, alpha: 1}, 14, cjs.Ease.backOut).wait(69).to({regX: 20.9, regY: 18.6, x: 46.15, y: -426.4, alpha: 0}, 12, cjs.Ease.backIn).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(114.6, 78.3, 117, 69.3);
  // library properties:
  lib.properties = {
    id: 'ED2BBC256F7ABD47B875EBC1A91BAF0C',
    width: 234,
    height: 150,
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
  an.compositions['ED2BBC256F7ABD47B875EBC1A91BAF0C'] = {
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
