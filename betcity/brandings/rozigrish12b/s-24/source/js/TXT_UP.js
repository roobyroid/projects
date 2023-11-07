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


  (lib.PHONE = function () {
    this.initialize(img.PHONE);
  }).prototype = p = new cjs.Bitmap();
  p.nominalBounds = new cjs.Rectangle(0, 0, 94, 193);// helper functions:

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
    this.shape.graphics.f('#FFFFFF').s().p('Ag/BBIAAiBIBQAAQAVgBAMALQALAJgBARQABAIgGAIQgFAGgHADQAJADAHAIQAFAIAAAMQAAARgMAKQgMAKgWAAgAgaAkIAkAAQAPAAAAgLQAAgMgPAAIgkAAgAgagQIAjAAQANAAAAgJQAAgKgNAAIgjAAg');
    this.shape.setTransform(195.55, 329.9);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AgxAxQgUgTAAgeQAAgeAUgSQAUgSAdAAQAeAAAUASQAUASAAAeQAAAegUATQgUASgeABQgdgBgUgSgAgWgYQgJAKAAAOQAAAPAJAKQAJAJANAAQAPAAAIgJQAJgKAAgPQAAgOgJgKQgIgJgPAAQgNAAgJAJg');
    this.shape_1.setTransform(179.925, 329.9);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AAcBBIAAgwIg3AAIAAAwIgmAAIAAiBIAmAAIAAAwIA3AAIAAgwIAmAAIAACBg');
    this.shape_2.setTransform(164.15, 329.9);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('AgxAxQgUgTAAgeQAAgeAUgSQAUgSAdAAQAeAAAUASQAUASAAAeQAAAegUATQgUASgeABQgdgBgUgSgAgWgYQgJAKAAAOQAAAPAJAKQAJAJANAAQAPAAAIgJQAJgKAAgPQAAgOgJgKQgIgJgPAAQgNAAgJAJg');
    this.shape_3.setTransform(148.375, 329.9);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AgSBDIAAgWIgbAAQgYAAgNgMQgNgMAAgVQAAgXANgMQANgMAYAAIAbAAIAAgTIAlAAIAAATIAbAAQAYAAANAMQANAMAAAXQAAAVgNAMQgOAMgYAAIgaAAIAAAWgAATANIAWAAQAIAAAEgEQAEgEAAgFQAAgIgEgDQgEgEgIAAIgWAAgAg0gLQgEADAAAIQAAAFAEAEQAEAEAIAAIAWAAIAAgcIgWAAQgIAAgEAEg');
    this.shape_4.setTransform(130.225, 329.925);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AAcBXIAAhPIg4BPIglAAIAAiCIAlAAIAABOIA4hOIAnAAIAACCgAgag9QgIgJgBgOIAAgCIAcAAIAAACQAAAIAHAAQAEAAACgDQACgCAAgDIAAgCIAbAAIAAACQABAOgKAJQgIAJgSAAQgRAAgJgJg');
    this.shape_5.setTransform(111.85, 327.775);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#FFFFFF').s().p('AAjBBIgHgSIg6AAIgHASIgmAAIA3iBIAoAAIA4CBgAgQAQIAeAAIgOgmg');
    this.shape_6.setTransform(96.05, 329.9);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#2EF3D0').s().p('Ag8BNIAAgcIA7gzQAGgGADgFQADgFAAgFQAAgHgEgEQgEgEgGAAQgHAAgEAEQgEAFAAAIIAAAHIgqAAIAAgJQAAgXAPgPQAPgPAbAAQAbAAAPANQAPAOAAAXQAAAQgHAKQgIAMgRAOIgQAOIA3AAIAAAlg');
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
    this.shape.setTransform(265.075, 338.225);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AhTA6IAAhzIAiAAIAABWIAhAAIAAhWIAgAAIAABWIAhAAIAAhWIAjAAIAABzg');
    this.shape_1.setTransform(248.95, 338.225);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AAtA6IAAhzIAiAAIAABzgAhOA6IAAhzIAhAAIAAAiIAkAAQAUAAALAKQANALAAATQAAAUgNALQgLAKgUAAgAgtAdIAfAAQAOAAAAgMQAAgMgOAAIgfAAg');
    this.shape_2.setTransform(230.25, 338.225);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBGAAQAVAAALAKQALAKAAATQAAATgLAKQgLAKgVAAIglAAIAAAlgAgXgHIAhAAQANAAAAgLQAAgKgNAAIghAAg');
    this.shape_3.setTransform(214.775, 338.225);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AgzA6IAAhzIBnAAIAAAdIhGAAIAABWg');
    this.shape_4.setTransform(202.075, 338.225);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AAtA6IAAhzIAiAAIAABzgAhOA6IAAhzIAhAAIAAAiIAkAAQAUAAALAKQANALAAATQAAAUgNALQgLAKgUAAgAgtAdIAfAAQAOAAAAgMQAAgMgOAAIgfAAg');
    this.shape_5.setTransform(186.5, 338.225);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#FFFFFF').s().p('AgZA4QgMgEgHgHQgGgGgDgHQgDgGgBgGIAiAAQAFALATAAQAWAAAAgKQAAgJgSAAIgRAAIAAgZIAQAAQAQAAAAgIQAAgJgTAAQgRAAgGAIIgiAAQACgQAPgKQAPgLAZAAQAbAAANAJQANAJAAAPQABAJgGAHQgFAGgIADQAKABAFAHQAHAGAAAJQAAASgPAKQgOAKgcAAQgOAAgMgEg');
    this.shape_6.setTransform(170.9, 338.225);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#FFFFFF').s().p('AgrAsQgTgRABgbQgBgaATgRQARgQAaAAQAbAAASAQQARARABAaQAAAbgSARQgSAQgbAAQgaAAgRgQgAgUgVQgHAJAAAMQAAANAHAJQAIAIAMAAQANAAAIgIQAIgJAAgNQAAgMgIgJQgIgIgNAAQgMAAgIAIg');
    this.shape_7.setTransform(157.6, 338.225);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBGAAQAVAAALAKQALAKAAATQAAATgLAKQgLAKgVAAIglAAIAAAlgAgXgHIAhAAQANAAAAgLQAAgKgNAAIghAAg');
    this.shape_8.setTransform(144.275, 338.225);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBHAAQATAAAJAIQALAJAAAPQAAAIgFAGQgEAGgGADQAHACAFAHQAGAHAAALQAAAQgKAIQgMAJgTAAgAgXAgIAgAAQANAAAAgKQAAgKgNAAIggAAgAgXgNIAfAAQAMAAAAgJQAAgJgMAAIgfAAg');
    this.shape_9.setTransform(126.9, 338.225);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#FFFFFF').s().p('AAZBNIAAhGIgyBGIghAAIAAh0IAhAAIAABFIAyhFIAiAAIAAB0gAgXg2QgIgIAAgNIAAgBIAZAAIAAABQAAAHAGAAQADAAACgCQACgCAAgDIAAgBIAYAAIAAABQAAANgIAIQgHAIgQAAQgPAAgIgIg');
    this.shape_10.setTransform(108.825, 336.35);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#FFFFFF').s().p('AgmA6IAXgnIgzhMIAoAAIAdAuIAcguIAkAAIhFBzg');
    this.shape_11.setTransform(94.975, 338.225);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBHAAQASAAAKAIQALAJAAAPQAAAIgEAGQgFAGgGADQAIACAEAHQAGAHAAALQAAAQgLAIQgKAJgUAAgAgXAgIAgAAQAOAAAAgKQAAgKgOAAIggAAgAgXgNIAfAAQALAAAAgJQAAgJgLAAIgfAAg');
    this.shape_12.setTransform(81.7, 338.225);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#FFFFFF').s().p('AgQA6IAAhWIgqAAIAAgdIB1AAIAAAdIgqAAIAABWg');
    this.shape_13.setTransform(68.375, 338.225);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f('#FFFFFF').s().p('AgoArQgRgRAAgaQAAgZARgRQARgRAaAAQALAAAJADQAKADAGAEIAKALQAFAGACAFIACAJIgiAAQgHgLgOAAQgMAAgHAJQgHAIAAAMQAAANAHAJQAHAIAMAAQAOAAAHgLIAiAAIgCAJQgCAEgEAGQgFAGgFAFQgGAFgKADQgKADgLAAQgaAAgRgRg');
    this.shape_14.setTransform(55.525, 338.225);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f('#FFFFFF').s().p('AAfA6IgGgQIgzAAIgHAQIgiAAIAyhzIAjAAIAyBzgAgOAOIAbAAIgNghg');
    this.shape_15.setTransform(42.075, 338.225);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f('#FFFFFF').s().p('AAXA6IAAgnQgPACgNAAQgZAAgNgLQgNgKAAgYIAAghIAiAAIAAAhQAAAJAEAEQAGAEAJAAIAMAAIALgBIADgBIAAgwIAiAAIAABzg');
    this.shape_16.setTransform(28.25, 338.225);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f('#FFFFFF').s().p('AgmA6IAXgnIgzhMIAoAAIAdAuIAcguIAkAAIhFBzg');
    this.shape_17.setTransform(14.925, 338.225);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_17}, {t: this.shape_16}, {t: this.shape_15}, {t: this.shape_14}, {t: this.shape_13}, {t: this.shape_12}, {t: this.shape_11}, {t: this.shape_10}, {t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(6.3, 322.3, 266.5, 28.69999999999999), null);


  (lib.Path_6 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f().s('#000000').ss(0.1, 0, 0, 4).p('AgIgGIASAAQADAAAAAEIAAAFQAAADgDAAIgSAAQgEAAAAgDIAAgFQAAgEAEAAg');
    this.shape.setTransform(1.35, 0.75);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(-0.9, -0.9, 4.6000000000000005, 3.3), null);


  (lib.Path_5 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#000000').s().p('AAAgBIABABQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAg');
    this.shape.setTransform(0.075, 0.225);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0, 0, 0.2, 0.5), null);


  (lib.o = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#2EF3D0').s().p('AgaAqQgTgMgGgUQgFgTAMgTQAMgTAUgDQATgEAUANQATAMAFATQAGATgMATQgMATgUAEIgJABQgPAAgPgKgAgDgSQgHACgEAHQgFAHABAHQACAHAHAFQAGAEAHgDQAHgBAEgIQAFgHgBgGQgCgIgGgEQgFgCgEAAIgFAAg');
    this.shape.setTransform(13.3636, 20.5012);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.o, new cjs.Rectangle(0, 0, 30.6, 35.4), null);


  (lib.h = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#2EF3D0').s().p('AACBEIATguQADgHgCgGQgDgFgGgEQgHgBgGABQgFACgDAIIgTAtIghgNIAzh6IAgAOIgTAvQAFgEAJgCQAJgCAKAFQARAGAEAPQAFANgHAQIgVA1g');
    this.shape.setTransform(11.8042, 19.15);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.h, new cjs.Rectangle(0, 0, 27.5, 35.7), null);


  (lib.EL_PHONE = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.lf(['#EB3D66', '#FFC4D2'], [0, 1], 0, 30.5, 0, -30.4).s().p('AjXDXQhZhYAAh/QAAh9BZhaQBZhZB+AAQB+AABZBZQBaBaAAB9QAAB/haBYQhZBah+AAQh+AAhZhag');
    this.shape.setTransform(30.475, 30.5, 1, 1, 180);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.EL_PHONE, new cjs.Rectangle(0, 0, 61, 61), null);


  (lib._P = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#2EF3D0').s().p('AhBA+IAKh+IBNAGQAXACALAMQAMAMgCAWQgCAUgNAKQgNAKgXgCIgogEIgEApgAgXgGIAkADQAPABABgLQABgMgPgCIgkgDg');
    this.shape.setTransform(10.5837, 17.925);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib._P, new cjs.Rectangle(0, 0, 21.4, 33.2), null);


  (lib._n = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#2EF3D0').s().p('AgTAqIAlgeQAGgGABgFQABgGgFgGQgFgFgGgBQgGgBgFAFIgnAeIgWgbIBJg7IAWAcIgKAIQAHgBAJADQAIADAHAIQALAOgCAOQgDAPgOALIgsAkg');
    this.shape.setTransform(14.2481, 18.45);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib._n, new cjs.Rectangle(0, 0, 35.2, 32.8), null);


  (lib._I = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#2EF3D0').s().p('AgWg+IAkgCIAJB+IgkADg');
    this.shape.setTransform(6.425, 17.9);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib._I, new cjs.Rectangle(0, 0, 12.9, 32.4), null);


  (lib._e = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#2EF3D0').s().p('AgUAyQgOgIgKgUQgKgWAGgTQAHgTAUgKQAVgJARAHQASAHAKAWQAKAVgGASQgGASgVAKIgHADIgcg+QgGAEgCAHQgCAGAEAHQAEAJAGABIAOAgIgHABQgIAAgKgEgAAEgVIAOAeQAFgEACgFQABgFgDgGQgCgGgFgCQgFgCgEAAIgDAAg');
    this.shape.setTransform(14.5882, 15.2739);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib._e, new cjs.Rectangle(0, 0, 35.4, 27.7), null);


  (lib._5 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#2EF3D0').s().p('AgxAoQgOgNgCgZQgBgMAEgLQADgLAGgGQAGgGAHgEQAIgDAIgBIACAlQgFABgDAEQgEAFABAGQAAAHAFAEQAFAEAHAAQAHgBAEgFQAEgEAAgGQgBgKgJgEIgCggIBKgFIAFBdIgcACIgEg7IgSABQAEACADAHQADAFABAIQABASgLAMQgMANgTABIgDABQgTAAgNgNg');
    this.shape.setTransform(14.4889, 9.0036);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib._5, new cjs.Rectangle(0, 0, 32.6, 18), null);


  (lib._1 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#2EF3D0').s().p('AhBAHIBWgPIgVgcIAfgFIAeAiIAFAaIh9AXg');
    this.shape.setTransform(15.175, 9.15);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib._1, new cjs.Rectangle(0, 0, 33.5, 18.4), null);


  (lib.t5 = function (mode, startPosition, loop, reversed) {
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

    // _5
    this.instance = new lib._5();
    this.instance.setTransform(60.15, 66.8, 1, 1, 0, 0, 0, 16.2, 9);
    this.instance.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({regX: 16.4, scaleX: 0.805, scaleY: 0.805, x: 44.9, y: 72.2, alpha: 1}, 0).to({regX: 16.2, scaleX: 1, scaleY: 1, x: 60.15, y: 66.8}, 11, cjs.Ease.backOut).wait(66).to({regX: 16.3, regY: 9.1, scaleX: 0.8087, scaleY: 0.8087, x: 43.85, y: 73.4}, 11, cjs.Ease.backIn).to({_off: true}, 1).wait(4));

    // _1
    this.instance_1 = new lib._1();
    this.instance_1.setTransform(59.25, 56.3, 1, 1, 0, 0, 0, 16.7, 9.2);
    this.instance_1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({regX: 16.8, scaleX: 0.805, scaleY: 0.805, x: 44.1, y: 63.75, alpha: 1}, 0).to({regX: 16.7, scaleX: 1, scaleY: 1, x: 59.25, y: 56.3}, 11, cjs.Ease.backOut).wait(66).to({scaleX: 0.8087, scaleY: 0.8087, x: 43.05, y: 64.85}, 11, cjs.Ease.backIn).to({_off: true}, 1).wait(6));

    // e
    this.instance_2 = new lib._e();
    this.instance_2.setTransform(55.05, 45.05, 1, 1, 0, 0, 0, 17.7, 13.8);
    this.instance_2.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({regX: 17.8, regY: 13.9, scaleX: 0.805, scaleY: 0.805, x: 40.75, y: 54.75, alpha: 1}, 0).to({regX: 17.7, regY: 13.8, scaleX: 1, scaleY: 1, x: 55.05, y: 45.05}, 11, cjs.Ease.backOut).wait(66).to({scaleX: 0.8087, scaleY: 0.8087, x: 39.65, y: 55.75}, 11, cjs.Ease.backIn).to({_off: true}, 1).wait(8));

    // n
    this.instance_3 = new lib._n();
    this.instance_3.setTransform(48.35, 34.55, 1, 1, 0, 0, 0, 17.6, 16.4);
    this.instance_3.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({regX: 17.7, scaleX: 0.805, scaleY: 0.805, x: 35.35, y: 46.25, alpha: 1}, 0).to({regX: 17.6, scaleX: 1, scaleY: 1, x: 48.35, y: 34.55}, 11, cjs.Ease.backOut).wait(66).to({scaleX: 0.8087, scaleY: 0.8087, x: 34.25, y: 47.25}, 11, cjs.Ease.backIn).to({_off: true}, 1).wait(10));

    // o
    this.instance_4 = new lib.o();
    this.instance_4.setTransform(38.95, 26.15, 1, 1, 0, 0, 0, 15.2, 17.7);
    this.instance_4.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({regX: 15.3, scaleX: 0.805, scaleY: 0.805, x: 27.75, y: 39.5, alpha: 1}, 0).to({regX: 15.2, scaleX: 1, scaleY: 1, x: 38.95, y: 26.15}, 11, cjs.Ease.backOut).wait(66).to({scaleX: 0.8087, scaleY: 0.8087, x: 26.65, y: 40.45}, 11, cjs.Ease.backIn).to({_off: true}, 1).wait(12));

    // h
    this.instance_5 = new lib.h();
    this.instance_5.setTransform(28.9, 20.2, 1, 1, 0, 0, 0, 13.8, 17.8);
    this.instance_5.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({regY: 17.9, scaleX: 0.805, scaleY: 0.805, x: 19.6, y: 34.75, alpha: 1}, 0).to({regY: 17.8, scaleX: 1, scaleY: 1, x: 28.9, y: 20.2}, 11, cjs.Ease.backOut).wait(66).to({regY: 17.9, scaleX: 0.8087, scaleY: 0.8087, x: 18.5, y: 35.75}, 11, cjs.Ease.backIn).to({_off: true}, 1).wait(14));

    // P
    this.instance_6 = new lib._P();
    this.instance_6.setTransform(16.25, 16.55, 1, 1, 0, 0, 0, 10.7, 16.6);
    this.instance_6.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({regX: 10.8, scaleX: 0.805, scaleY: 0.805, x: 9.5, y: 31.75, alpha: 1}, 0).to({regX: 10.7, scaleX: 1, scaleY: 1, x: 16.25, y: 16.55}, 11, cjs.Ease.backOut).wait(66).to({regX: 10.8, scaleX: 0.8087, scaleY: 0.8087, x: 8.35, y: 32.7}, 11, cjs.Ease.backIn).to({_off: true}, 1).wait(16));

    // I
    this.instance_7 = new lib._I();
    this.instance_7.setTransform(5.65, 16.2, 1, 1, 0, 0, 0, 6.4, 16.2);
    this.instance_7.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({scaleX: 0.805, scaleY: 0.805, x: 0.9, y: 31.5, alpha: 1}, 0).to({scaleX: 1, scaleY: 1, x: 5.65, y: 16.2}, 11, cjs.Ease.backOut).wait(66).to({regX: 6.5, scaleX: 0.8087, scaleY: 0.8087, x: -0.25, y: 32.45}, 11, cjs.Ease.backIn).to({_off: true}, 1).wait(18));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-5.5, -2, 84, 82.6);


  (lib.ClipGroup = function (mode, startPosition, loop, reversed) {
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

    // Layer_2 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('AjTAaIAAgzIGnAAIAAAzg');
    mask.setTransform(21.225, 2.575);

    // Layer_3
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#000000').s().p('AAAACQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIABAAIABABIAAABIgBABg');
    this.shape.setTransform(31.575, 3.275);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#000000').s().p('AAAAEIgBgBIAAgFIABgBIABAAIABABIAAAFIgBABg');
    this.shape_1.setTransform(32.125, 3.15);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#000000').s().p('AAAAHIgBgBIAAgKIABgCIAAAAIACACIAAAKIgCABg');
    this.shape_2.setTransform(33.2, 2.85);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#000000').s().p('AAAAGIgBgBIAAgIIABgBIAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAAAIQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAg');
    this.shape_3.setTransform(32.675, 2.95);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#000000').s().p('AAAAGIgBgCIAAgBQABgCADACIAAABIgDACgAAEACQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAIAAAAIgCgBIAAgBQAFgEAGAEIAAABIgBABgAAHAAQgDgDgEAAQgCAAgEADIgBAAIgBgBIAAgBQAEgDAEAAQAFAAAEADIAAABIgBABIgBAAIAAAAg');
    this.shape_4.setTransform(35.15, 2.825);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#000000').s().p('AgIAFQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIAAgFQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIARAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIAAAFQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBAAg');
    this.shape_5.setTransform(37.675, 3.025);

    this.instance = new lib.Path_5();
    this.instance.setTransform(39.25, 3.05, 1, 1, 0, 0, 0, 0.1, 0.2);
    this.instance.alpha = 0.3984;

    this.instance_1 = new lib.Path_6();
    this.instance_1.setTransform(37.7, 3.1, 1, 1, 0, 0, 0, 1.4, 0.8);
    this.instance_1.alpha = 0.3516;

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#000000').s().p('AAYAGIACAAQACAEAEAAQAGAAAAgKQgBAEgGAAQgHAAAAgHQgBgIAJAAQAFAAADAFIABAGQgBAMgIAAQgHAAgBgGgAAagDQAAAEAGAAQAFAAAAgEQAAgGgFAAQgFAAgBAGgAAFAFIADAAQABAFAFAAQAEAAAAgGQAAgEgEAAQgFAAgBABIgCAAIABgMIANAAIAAADIgLAAIgBAHQACgCAEAAQAIAAAAAHQAAAIgJAAQgHAAgBgHgAgVAFIACAAQACAFAEAAQAGAAgBgFQABgEgGAAIgDAAIAAgCIADAAQAEAAAAgEQAAgEgEAAQgEAAgBAEIgDAAQABgGAHAAQAIAAgBAGQAAAEgEABQAFAAABAFQAAAHgJAAQgHAAgBgHgAgnAMIAAgCIAIgJQAEgDAAgDQAAgEgEAAQgGAAAAAFIgCAAQAAgHAIAAQACAAADACQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAAEgFAEIgGAGIALAAIAAADgAgBAGQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAgAgBgFQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg');
    this.shape_6.setTransform(7.8, 2.925);

    var maskedShapeInstanceList = [this.shape, this.shape_1, this.shape_2, this.shape_3, this.shape_4, this.shape_5, this.instance, this.instance_1, this.shape_6];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_6}, {t: this.instance_1}, {t: this.instance}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(3.8, 1.7, 35.5, 2.5), null);


  (lib.PHONE2 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.lf(['rgba(255,255,255,0.349)', 'rgba(255,255,255,0)'], [0, 1], 0, -2.1, 0, 3.8).s().p('ABKATIAKAAQADAMAMAAQATAAABgfIAAAAQgFAMgQAAQgLAAgHgHQgHgGAAgLQAAgLAIgHQAHgIAMAAQARAAAHARQAEAKAAALQAAASgHAKQgIALgOAAQgVAAgEgUgABYgYQgFAFAAAHQAAAHAFAFQAEAEAIAAQAHAAAFgEQAFgFAAgHQAAgHgFgFQgFgFgHAAQgHAAgFAFgAAXAhQgHgGAAgKIAJAAQABAOAPAAQAIAAAFgFQAFgFAAgHQAAgIgFgFQgFgEgIAAQgKAAgGAIIgIAAIAEgpIArAAIAAAIIgkAAIgCAYQAGgHALAAQALAAAHAHQAHAGAAALQAAAMgIAHQgHAHgMAAQgLAAgHgGgAg+AhQgHgGgBgJIAJAAQABANAQAAQAIAAAFgEQAEgEAAgGQAAgOgRAAIgKAAIAAgHIAJAAQAHAAAEgDQAEgEAAgGQAAgMgOAAQgOAAgCAMIgJAAQABgJAHgGQAGgFALAAQAKAAAHAFQAGAGAAAIQAAAOgPAEQAJAAAFAEQAFAFAAAIQAAAJgIAHQgIAGgLAAQgLAAgHgGgAh/AmIAAgHIAbgcQAMgMAAgHQAAgGgEgEQgEgDgHAAQgGAAgFAEQgEAEAAAGIgJAAQAAgJAHgHQAHgGALAAQAKAAAGAGQAHAGAAAIQAAALgQAQIgTATIAlAAIAAAJgAgHATQAAgGAGAAQAFAAAAAGQAAAGgFAAQgGAAAAgGgAgHgSQAAgGAGAAQAFAAAAAGQAAAGgFAAQgGAAAAgGg');
    this.shape.setTransform(23.625, 20.525);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('rgba(255,255,255,0.349)').s().p('ABKATIAKAAQADAMAMAAQATAAABgfIAAAAQgFAMgQAAQgLAAgHgHQgHgGAAgLQAAgLAIgHQAHgIAMAAQARAAAHARQAEAKAAALQAAASgHAKQgIALgOAAQgVAAgEgUgABYgYQgFAFAAAHQAAAHAFAFQAEAEAIAAQAHAAAFgEQAFgFAAgHQAAgHgFgFQgFgFgHAAQgHAAgFAFgAAXAhQgHgGAAgKIAJAAQABAOAPAAQAIAAAFgFQAFgFAAgHQAAgIgFgFQgFgEgIAAQgKAAgGAIIgIAAIAEgpIArAAIAAAIIgkAAIgCAYQAGgHALAAQALAAAHAHQAHAGAAALQAAAMgIAHQgHAHgMAAQgLAAgHgGgAg+AhQgHgGgBgJIAJAAQABANAQAAQAIAAAFgEQAEgEAAgGQAAgOgRAAIgKAAIAAgHIAJAAQAHAAAEgDQAEgEAAgGQAAgMgOAAQgOAAgCAMIgJAAQABgJAHgGQAGgFALAAQAKAAAHAFQAGAGAAAIQAAAOgPAEQAJAAAFAEQAFAFAAAIQAAAJgIAHQgIAGgLAAQgLAAgHgGgAh/AmIAAgHIAbgcQAMgMAAgHQAAgGgEgEQgEgDgHAAQgGAAgFAEQgEAEAAAGIgJAAQAAgJAHgHQAHgGALAAQAKAAAGAGQAHAGAAAIQAAALgQAQIgTATIAlAAIAAAJgAgHATQAAgGAGAAQAFAAAAAGQAAAGgFAAQgGAAAAgGgAgHgSQAAgGAGAAQAFAAAAAGQAAAGgFAAQgGAAAAgGg');
    this.shape_1.setTransform(23.625, 20.525);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('ABKATIAKAAQADAMAMAAQATAAABgfIAAAAQgFAMgQAAQgLAAgHgHQgHgGAAgLQAAgLAIgHQAHgIAMAAQARAAAHARQAEAKAAALQAAASgHAKQgIALgOAAQgVAAgEgUgABYgYQgFAFAAAHQAAAHAFAFQAEAEAIAAQAHAAAFgEQAFgFAAgHQAAgHgFgFQgFgFgHAAQgHAAgFAFgAAXAhQgHgGAAgKIAJAAQABAOAPAAQAIAAAFgFQAFgFAAgHQAAgIgFgFQgFgEgIAAQgKAAgGAIIgIAAIAEgpIArAAIAAAIIgkAAIgCAYQAGgHALAAQALAAAHAHQAHAGAAALQAAAMgIAHQgHAHgMAAQgLAAgHgGgAg+AhQgHgGgBgJIAJAAQABANAQAAQAIAAAFgEQAEgEAAgGQAAgOgRAAIgKAAIAAgHIAJAAQAHAAAEgDQAEgEAAgGQAAgMgOAAQgOAAgCAMIgJAAQABgJAHgGQAGgFALAAQAKAAAHAFQAGAGAAAIQAAAOgPAEQAJAAAFAEQAFAFAAAIQAAAJgIAHQgIAGgLAAQgLAAgHgGgAh/AmIAAgHIAbgcQAMgMAAgHQAAgGgEgEQgEgDgHAAQgGAAgFAEQgEAEAAAGIgJAAQAAgJAHgHQAHgGALAAQAKAAAGAGQAHAGAAAIQAAALgQAQIgTATIAlAAIAAAJgAgHATQAAgGAGAAQAFAAAAAGQAAAGgFAAQgGAAAAgGgAgHgSQAAgGAGAAQAFAAAAAGQAAAGgFAAQgGAAAAgGg');
    this.shape_2.setTransform(23.625, 20.525);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.lf(['rgba(255,255,255,0.6)', 'rgba(255,255,255,0)'], [0, 1], 0, -0.4, 0, 0.9).s().p('ABuAKIAAgPIACAAIAAADIACgCIACgBQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIABAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAIgCgDIAAAGgABxgBIgBACIABACQAAABABAAQAAAAAAABQABAAAAAAQAAAAABAAIACgCIABgCIgBgCIgCgBgAA2AKIAAgDIgJAAIAAADIgCAAIAAgFIABAAIACgEIAAgGIAJAAIAAAKIACAAIAAAFgAAwABIgBADIAAABIAFAAIAAgHIgEAAgAAOAKIABgGIADAAIgCAGgAhBAKIAAgDIgJAAIAAADIgCAAIAAgFIABAAIABgEIAAgGIAJAAIAAAKIACAAIAAAFgAhIABIgBADIAAABIAGAAIAAgHIgFAAgABhAFQgBgBAAgEIABgFIACgDIADgBIABAAIAEAAIAAABIgBABIgCAAIgDAAIgCABIgBACIAAADIACgDIACAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIgBAFQgBAAAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAgABjgBIgBACIABADIADABIACgBIABgDIgBgCIgCgBgABUAGIgBgDIABgCIAEgBIADAAIAAAAIgBgCIgCAAIgBAAIgBACIgCAAIABgEIAEgBIADABIABAEIAAAHIgCAAIAAgDQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBABIgCAAIgDgBgABWACIAAABIAAABIACABIACgBIABgCIAAgBIgDAAgAA8AGQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgEQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIgIAAIAAADIADABIACgBIABgBIACAAIgCADIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAA+gBIgBABIAGAAIgBgBIgCgBgAgxAHIAAgDIAAAAIABgBIABgCIAAgGIAJAAIAAAMIgDAAIAAgJIgEAAIAAADIAAACIAAABIgBACIgBABIgCAAgAg8AGQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgEIAEgCQABAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIgIAAIABADIACABIACgBIABgBIACAAIgBADIgEABIgEgBgAg6gBIgBABIAGAAIgBgBIgCgBgAhXAGQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgEQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIgIAAIABADIACABIACgBIABgBIACAAIgBADIgEABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAhVgBIgBABIAGAAIgBgBIgCgBgAhyAGQgBgDAAgCIABgEQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIACAEQAAACgCADQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAhwgBIgBACIABADIACABIADgBIAAgDIAAgCIgDgBgACCAHIAAgFIgBAAIgDAFIgDAAIADgFIgCgBIgBgBQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAIAFAAIAAAMgAB/gCIgBACIABAAIABABIACAAIAAgDIgCAAgABPAHIgFgGIAAAGIgCAAIAAgMIACAAIAAAFIAFgFIADAAIgGAGIAGAGgAAZAHIAAgCIAGgFIACgCIABgDIgBgBIgCgBIgDABIgBACIgCAAIACgEQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgBADIgCADIgEADIAHAAIAAADgAAKAHIgFgGIAAAGIgDAAIAAgMIADAAIAAAFIAFgFIADAAIgGAGIAGAGgAgCAHIAAgHIgGAHIgCAAIAAgMIACAAIAAAIIAGgIIACAAIAAAMgAgQAHIAAgGIgFAAIAAAGIgDAAIAAgMIADAAIAAAFIAFAAIAAgFIADAAIAAAMgAgjAHIAAgMIACAAIAAAFIACAAIAEAAIABACQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAABIgEABgAghAFIACAAIACgBIABgCIgBgBIgCAAIgCAAgAheAHIAAgGIgFAAIAAAGIgCAAIAAgMIACAAIAAAFIAFAAIAAgFIADAAIAAAMgAh5AHIAAgOIgIAAIAAAOIgDAAIAAgPIAOAAIAAAPg');
    this.shape_3.setTransform(23.375, 12.75);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('rgba(255,255,255,0.298)').s().p('ABuAKIAAgPIACAAIAAADIACgCIACgBQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIABAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAIgCgDIAAAGgABxgBIgBACIABACQAAABABAAQAAAAAAABQABAAAAAAQAAAAABAAIACgCIABgCIgBgCIgCgBgAA2AKIAAgDIgJAAIAAADIgCAAIAAgFIABAAIACgEIAAgGIAJAAIAAAKIACAAIAAAFgAAwABIgBADIAAABIAFAAIAAgHIgEAAgAAOAKIABgGIADAAIgCAGgAhBAKIAAgDIgJAAIAAADIgCAAIAAgFIABAAIABgEIAAgGIAJAAIAAAKIACAAIAAAFgAhIABIgBADIAAABIAGAAIAAgHIgFAAgABhAFQgBgBAAgEIABgFIACgDIADgBIABAAIAEAAIAAABIgBABIgCAAIgDAAIgCABIgBACIAAADIACgDIACAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIgBAFQgBAAAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAgABjgBIgBACIABADIADABIACgBIABgDIgBgCIgCgBgABUAGIgBgDIABgCIAEgBIADAAIAAAAIgBgCIgCAAIgBAAIgBACIgCAAIABgEIAEgBIADABIABAEIAAAHIgCAAIAAgDQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBABIgCAAIgDgBgABWACIAAABIAAABIACABIACgBIABgCIAAgBIgDAAgAA8AGQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgEQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIgIAAIAAADIADABIACgBIABgBIACAAIgCADIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAA+gBIgBABIAGAAIgBgBIgCgBgAgxAHIAAgDIAAAAIABgBIABgCIAAgGIAJAAIAAAMIgDAAIAAgJIgEAAIAAADIAAACIAAABIgBACIgBABIgCAAgAg8AGQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgEIAEgCQABAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIgIAAIABADIACABIACgBIABgBIACAAIgBADIgEABIgEgBgAg6gBIgBABIAGAAIgBgBIgCgBgAhXAGQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgEQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIgIAAIABADIACABIACgBIABgBIACAAIgBADIgEABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAhVgBIgBABIAGAAIgBgBIgCgBgAhyAGQgBgDAAgCIABgEQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIACAEQAAACgCADQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAhwgBIgBACIABADIACABIADgBIAAgDIAAgCIgDgBgACCAHIAAgFIgBAAIgDAFIgDAAIADgFIgCgBIgBgBQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAIAFAAIAAAMgAB/gCIgBACIABAAIABABIACAAIAAgDIgCAAgABPAHIgFgGIAAAGIgCAAIAAgMIACAAIAAAFIAFgFIADAAIgGAGIAGAGgAAZAHIAAgCIAGgFIACgCIABgDIgBgBIgCgBIgDABIgBACIgCAAIACgEQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgBADIgCADIgEADIAHAAIAAADgAAKAHIgFgGIAAAGIgDAAIAAgMIADAAIAAAFIAFgFIADAAIgGAGIAGAGgAgCAHIAAgHIgGAHIgCAAIAAgMIACAAIAAAIIAGgIIACAAIAAAMgAgQAHIAAgGIgFAAIAAAGIgDAAIAAgMIADAAIAAAFIAFAAIAAgFIADAAIAAAMgAgjAHIAAgMIACAAIAAAFIACAAIAEAAIABACQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAABIgEABgAghAFIACAAIACgBIABgCIgBgBIgCAAIgCAAgAheAHIAAgGIgFAAIAAAGIgCAAIAAgMIACAAIAAAFIAFAAIAAgFIADAAIAAAMgAh5AHIAAgOIgIAAIAAAOIgDAAIAAgPIAOAAIAAAPg');
    this.shape_4.setTransform(23.375, 12.75);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('ABuAKIAAgPIACAAIAAADIACgCIACgBQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAIABAEQAAAAAAABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAIgCgDIAAAGgABxgBIgBACIABACQAAABABAAQAAAAAAABQABAAAAAAQAAAAABAAIACgCIABgCIgBgCIgCgBgAA2AKIAAgDIgJAAIAAADIgCAAIAAgFIABAAIACgEIAAgGIAJAAIAAAKIACAAIAAAFgAAwABIgBADIAAABIAFAAIAAgHIgEAAgAAOAKIABgGIADAAIgCAGgAhBAKIAAgDIgJAAIAAADIgCAAIAAgFIABAAIABgEIAAgGIAJAAIAAAKIACAAIAAAFgAhIABIgBADIAAABIAGAAIAAgHIgFAAgABhAFQgBgBAAgEIABgFIACgDIADgBIABAAIAEAAIAAABIgBABIgCAAIgDAAIgCABIgBACIAAADIACgDIACAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIgBAFQgBAAAAAAQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAgABjgBIgBACIABADIADABIACgBIABgDIgBgCIgCgBgABUAGIgBgDIABgCIAEgBIADAAIAAAAIgBgCIgCAAIgBAAIgBACIgCAAIABgEIAEgBIADABIABAEIAAAHIgCAAIAAgDQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBABIgCAAIgDgBgABWACIAAABIAAABIACABIACgBIABgCIAAgBIgDAAgAA8AGQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgEQAAAAABgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABABQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIgIAAIAAADIADABIACgBIABgBIACAAIgCADIgDABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAA+gBIgBABIAGAAIgBgBIgCgBgAgxAHIAAgDIAAAAIABgBIABgCIAAgGIAJAAIAAAMIgDAAIAAgJIgEAAIAAADIAAACIAAABIgBACIgBABIgCAAgAg8AGQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgEIAEgCQABAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIgIAAIABADIACABIACgBIABgBIACAAIgBADIgEABIgEgBgAg6gBIgBABIAGAAIgBgBIgCgBgAhXAGQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIACgEQAAAAABgBQAAAAAAAAQABAAABAAQAAgBABAAQAAAAABABQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIgIAAIABADIACABIACgBIABgBIACAAIgBADIgEABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAgAhVgBIgBABIAGAAIgBgBIgCgBgAhyAGQgBgDAAgCIABgEQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIACAEQAAACgCADQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAhwgBIgBACIABADIACABIADgBIAAgDIAAgCIgDgBgACCAHIAAgFIgBAAIgDAFIgDAAIADgFIgCgBIgBgBQAAgBAAAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABgBAAAAIAFAAIAAAMgAB/gCIgBACIABAAIABABIACAAIAAgDIgCAAgABPAHIgFgGIAAAGIgCAAIAAgMIACAAIAAAFIAFgFIADAAIgGAGIAGAGgAAZAHIAAgCIAGgFIACgCIABgDIgBgBIgCgBIgDABIgBACIgCAAIACgEQAAAAABAAQAAAAAAgBQABAAABAAQAAAAABAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgBADIgCADIgEADIAHAAIAAADgAAKAHIgFgGIAAAGIgDAAIAAgMIADAAIAAAFIAFgFIADAAIgGAGIAGAGgAgCAHIAAgHIgGAHIgCAAIAAgMIACAAIAAAIIAGgIIACAAIAAAMgAgQAHIAAgGIgFAAIAAAGIgDAAIAAgMIADAAIAAAFIAFAAIAAgFIADAAIAAAMgAgjAHIAAgMIACAAIAAAFIACAAIAEAAIABACQAAABAAABQAAAAAAABQgBAAAAAAQAAAAAAABIgEABgAghAFIACAAIACgBIABgCIgBgBIgCAAIgCAAgAheAHIAAgGIgFAAIAAAGIgCAAIAAgMIACAAIAAAFIAFAAIAAgFIADAAIAAAMgAh5AHIAAgOIgIAAIAAAOIgDAAIAAgPIAOAAIAAAPg');
    this.shape_5.setTransform(23.375, 12.75);

    this.instance = new lib.ClipGroup();
    this.instance.setTransform(23.5, 4.6, 1, 1, 0, 0, 0, 21.2, 2.6);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    // Layer_1
    this.instance_1 = new lib.PHONE();
    this.instance_1.setTransform(0, 0, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.PHONE2, new cjs.Rectangle(0, 0, 47, 96.5), null);


  (lib.n = function (mode, startPosition, loop, reversed) {
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

    // T5
    this.instance = new lib.t5();
    this.instance.setTransform(30.5, 30.55, 0.735, 0.735, -45, 0, 0, 9.8, 67.7);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation: -405}, 115).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-19.6, -24.3, 100.19999999999999, 104.89999999999999);


  (lib.PHONE_1 = function (mode, startPosition, loop, reversed) {
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

    // Layer_1_copy (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    var mask_graphics_0 = new cjs.Graphics().p('AjWDXQhahYAAh/QAAh9BahaQBZhZB9AAQB/AABZBZQBZBaAAB9QAAB/hZBYQhZBah/AAQh9AAhZhag');
    var mask_graphics_1 = new cjs.Graphics().p('AB9CdQgHgGAAgKQAAgKAHgGQAGgHAKAAQAJAAAHAHQAHAGAAAKQAAAKgHAGQgHAHgJAAQgKAAgGgHg');
    var mask_graphics_2 = new cjs.Graphics().p('AgDCzQglgmAAg1QAAg2AlgkQAlgmA2AAQA1AAAmAmQAmAkAAA2QAAA1gmAmQgmAmg1AAQg2AAglgmg');
    var mask_graphics_3 = new cjs.Graphics().p('AhjDDQg9g8AAhXQAAhWA9g9QA9g9BWAAQBWAAA9A9QA9A9AABWQAABXg9A8Qg9A+hWAAQhWAAg9g+g');
    var mask_graphics_4 = new cjs.Graphics().p('AinDPQhOhNAAhvQAAhtBOhNQBNhOBtAAQBvAABNBOQBOBNAABtQAABvhOBNQhNBOhvAAQhtAAhNhOg');
    var mask_graphics_5 = new cjs.Graphics().p('AjUDXQhZhZAAh9QAAh9BZhYQBYhZB9AAQB9AABZBZQBYBYAAB9QAAB9hYBZQhZBZh9AAQh9AAhYhZg');
    var mask_graphics_6 = new cjs.Graphics().p('AjkDlQhfhfAAiGQAAiFBfhfQBfhfCFAAQCHAABeBfQBfBfAACFQAACGhfBfQheBfiHAAQiFAAhfhfg');
    var mask_graphics_7 = new cjs.Graphics().p('AjqDrQhhhhAAiKQAAiJBhhhQBhhiCJAAQCKAABhBiQBhBhAACJQAACKhhBhQhhBiiKAAQiJAAhhhig');
    var mask_graphics_8 = new cjs.Graphics().p('AjpDqQhihgAAiKQAAiJBihgQBhhiCIAAQCKAABhBiQBhBgAACJQAACKhhBgQhhBiiKAAQiIAAhhhig');
    var mask_graphics_9 = new cjs.Graphics().p('AjlDmQhfhfAAiHQAAiGBfhfQBfhfCGAAQCHAABfBfQBfBfAACGQAACHhfBfQhfBfiHAAQiGAAhfhfg');
    var mask_graphics_10 = new cjs.Graphics().p('AjeDfQhdhcAAiDQAAiCBdhcQBchdCCAAQCDAABdBdQBcBcAACCQAACDhcBcQhdBdiDAAQiCAAhchdg');
    var mask_graphics_11 = new cjs.Graphics().p('AjZDaQhahaAAiAQAAh/BahaQBahaB/AAQCAAABaBaQBaBaAAB/QAACAhaBaQhaBaiAAAQh/AAhahag');
    var mask_graphics_12 = new cjs.Graphics().p('AjWDXQhahYAAh/QAAh9BahaQBZhZB9AAQB/AABZBZQBZBaAAB9QAAB/hZBYQhZBah/AAQh9AAhZhag');
    var mask_graphics_103 = new cjs.Graphics().p('AjWDXQhahYAAh/QAAh9BahaQBZhZB9AAQB/AABZBZQBZBaAAB9QAAB/hZBYQhZBah/AAQh9AAhZhag');
    var mask_graphics_104 = new cjs.Graphics().p('AjYDaQhbhaAAiAQAAh/BbhaQBZhaB/AAQCAAABaBaQBaBaAAB/QAACAhaBaQhaBaiAAAQh/AAhZhag');
    var mask_graphics_105 = new cjs.Graphics().p('AjdDfQhdhcAAiDQAAiCBdhcQBchcCBAAQCDAABcBcQBcBcAACCQAACDhcBcQhcBciDAAQiBAAhchcg');
    var mask_graphics_106 = new cjs.Graphics().p('AjjDkQhfheAAiGQAAiFBfheQBehfCFAAQCGAABfBfQBeBeAACFQAACGheBeQhfBfiGAAQiFAAhehfg');
    var mask_graphics_107 = new cjs.Graphics().p('AjnDpQhhhgAAiJQAAiIBhhgQBghgCHAAQCJAABgBgQBgBgAACIQAACJhgBgQhgBgiJAAQiHAAhghgg');
    var mask_graphics_108 = new cjs.Graphics().p('AjoDpQhhhgAAiJQAAiIBhhgQBghhCIAAQCJAABgBhQBhBgAACIQAACJhhBgQhgBhiJAAQiIAAhghhg');
    var mask_graphics_109 = new cjs.Graphics().p('AjiDkQhfheAAiGQAAiFBfheQBeheCEAAQCGAABeBeQBeBeAACFQAACGheBeQheBeiGAAQiEAAheheg');
    var mask_graphics_110 = new cjs.Graphics().p('AjUDXQhZhYAAh+QAAh9BZhYQBYhZB9AAQB+AABYBZQBZBYAAB9QAAB+hZBYQhYBZh+AAQh9AAhYhZg');
    var mask_graphics_111 = new cjs.Graphics().p('AirDSQhPhPAAhwQAAhuBPhPQBOhPBvAAQBwAABOBPQBPBPAABuQAABwhPBPQhOBPhwAAQhvAAhOhPg');
    var mask_graphics_112 = new cjs.Graphics().p('AhtDJQhAhAAAhaQAAhZBAhAQBAhABZAAQBaAABABAQA/BAAABZQAABag/BAQhABAhaAAQhZAAhAhAg');
    var mask_graphics_113 = new cjs.Graphics().p('AgVC9QgrgrAAg8QAAg8ArgpQApgrA8AAQA8AAArArQAqApAAA8QAAA8gqArQgrAqg8AAQg8AAgpgqg');
    var mask_graphics_114 = new cjs.Graphics().p('ABeCtQgOgPAAgUQAAgUAOgOQAOgOAUAAQAUAAAPAOQAOAOAAAUQAAAUgOAPQgPAOgUAAQgUAAgOgOg');

    this.timeline.addTween(cjs.Tween.get(mask).to({graphics: mask_graphics_0, x: 30.475, y: 30.5}).wait(1).to({graphics: mask_graphics_1, x: 16.3708, y: 16.3976}).wait(1).to({graphics: mask_graphics_2, x: 21.6609, y: 21.6965}).wait(1).to({graphics: mask_graphics_3, x: 25.6354, y: 25.6775}).wait(1).to({graphics: mask_graphics_4, x: 28.4652, y: 28.512}).wait(1).to({graphics: mask_graphics_5, x: 30.3215, y: 30.3714}).wait(1).to({graphics: mask_graphics_6, x: 30.3702, y: 30.4468}).wait(1).to({graphics: mask_graphics_7, x: 30.3681, y: 30.4453}).wait(1).to({graphics: mask_graphics_8, x: 30.3683, y: 30.4455}).wait(1).to({graphics: mask_graphics_9, x: 30.3699, y: 30.4466}).wait(1).to({graphics: mask_graphics_10, x: 30.3722, y: 30.4481}).wait(1).to({graphics: mask_graphics_11, x: 30.3741, y: 30.4494}).wait(1).to({graphics: mask_graphics_12, x: 30.475, y: 30.5}).wait(91).to({graphics: mask_graphics_103, x: 30.475, y: 30.5}).wait(1).to({graphics: mask_graphics_104, x: 30.4747, y: 30.476}).wait(1).to({graphics: mask_graphics_105, x: 30.4738, y: 30.4201}).wait(1).to({graphics: mask_graphics_106, x: 30.4729, y: 30.3567}).wait(1).to({graphics: mask_graphics_107, x: 30.4723, y: 30.3101}).wait(1).to({graphics: mask_graphics_108, x: 30.4722, y: 30.3047}).wait(1).to({graphics: mask_graphics_109, x: 30.4731, y: 30.3648}).wait(1).to({graphics: mask_graphics_110, x: 30.3808, y: 30.413}).wait(1).to({graphics: mask_graphics_111, x: 28.6906, y: 28.8516}).wait(1).to({graphics: mask_graphics_112, x: 26.1141, y: 26.4714}).wait(1).to({graphics: mask_graphics_113, x: 22.4954, y: 23.1284}).wait(1).to({graphics: mask_graphics_114, x: 17.6788, y: 18.6828}).wait(1).to({graphics: null, x: 0, y: 0}).wait(1));

    // Layer_2
    this.instance = new lib.PHONE2();
    this.instance.setTransform(30.5, 65.2, 1, 1, 0, 0, 0, 23.5, 48.2);
    this.instance.alpha = 0;

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y: 112.55, alpha: 1}, 0).to({y: 65.2}, 13, cjs.Ease.cubicOut).wait(85).to({regX: 23.6, regY: 48.4, scaleX: 0.1593, scaleY: 0.1593, y: 38.05}, 11, cjs.Ease.backIn).to({_off: true}, 1).wait(1));

    // Layer_1
    this.instance_1 = new lib.EL_PHONE();
    this.instance_1.setTransform(30.4, 30.5, 1, 1, 0, 0, 0, 30.4, 30.5);
    this.instance_1.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX: 30.6, regY: 30.6, scaleX: 0.0753, scaleY: 0.0753, x: 30.45, alpha: 1}, 0).to({regX: 30.4, regY: 30.5, scaleX: 1, scaleY: 1, x: 30.4}, 11, cjs.Ease.backOut).wait(91).to({regY: 30.4, scaleX: 0.1593, scaleY: 0.1593, x: 30.5, y: 32.5}, 11, cjs.Ease.backIn).to({_off: true}, 1).wait(1));

    // Layer_3
    this.instance_2 = new lib.n();
    this.instance_2.setTransform(8.6, 8.6, 1, 1, 0, 0, 0, 8.6, 8.6);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(116));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-10.1, -24.3, 79.39999999999999, 88.1);


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

    // PHONE
    this.instance = new lib.PHONE_1();
    this.instance.setTransform(141.35, 146.25, 2.5184, 2.5184, 0, 0, 0, 30.5, 30.6);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off: false}, 0).wait(116));

    // T4
    this.instance_1 = new lib.T4();
    this.instance_1.setTransform(420, -625.1, 2.37, 2.37, 0, 0, 0, 100.8, 38.9);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off: false}, 0).to({y: -554.1, alpha: 1}, 14, cjs.Ease.backOut).wait(89).to({x: 418.35, y: -499.85, alpha: 0}, 12, cjs.Ease.backIn).wait(1));

    // T2
    this.instance_2 = new lib.T2();
    this.instance_2.setTransform(354.35, -764.95, 2.732, 2.732, 0, 0, 0, 56.1, 18.9);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off: false}, 0).to({x: 356.15, y: -720.25, alpha: 1}, 14, cjs.Ease.backOut).wait(63).to({x: 354.35, y: -657.75, alpha: 0}, 12, cjs.Ease.backIn).to({_off: true}, 3).wait(115));

    // T1
    this.instance_3 = new lib.T1();
    this.instance_3.setTransform(352.7, -826.85, 2.732, 2.732, 0, 0, 0, 135.4, 18.9);
    this.instance_3.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x: 354.6, y: -782.15, alpha: 1}, 14, cjs.Ease.backOut).wait(69).to({x: 352.7, y: -719.65, alpha: 0}, 12, cjs.Ease.backIn).to({_off: true}, 1).wait(115));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(365, 142.1, 365.29999999999995, 213.00000000000003);
  // library properties:
  lib.properties = {
    id: 'A1685B3A8EA9B7468FFABFCD5375CDBC',
    width: 730,
    height: 280,
    fps: 30,
    color: '#000099',
    opacity: 0.00,
    manifest: [
      {src: 'img/PHONE.png', id: 'PHONE'}
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
