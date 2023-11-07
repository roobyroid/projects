/* eslint-disable no-var */
(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [
    {name: 'SIDE_atlas_1', frames: [[1354, 0, 251, 609], [1607, 0, 250, 611], [1103, 0, 249, 772], [0, 0, 1101, 551], [1955, 0, 77, 97], [1859, 0, 94, 193], [1859, 195, 108, 49], [1955, 99, 67, 49], [1859, 246, 108, 49]]}
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


  (lib.ball1 = function () {
    this.initialize(ss['SIDE_atlas_1']);
    this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();


  (lib.ball2 = function () {
    this.initialize(ss['SIDE_atlas_1']);
    this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();


  (lib.BALL3 = function () {
    this.initialize(ss['SIDE_atlas_1']);
    this.gotoAndStop(2);
  }).prototype = p = new cjs.Sprite();


  (lib.IMGBG = function () {
    this.initialize(ss['SIDE_atlas_1']);
    this.gotoAndStop(3);
  }).prototype = p = new cjs.Sprite();


  (lib.Mob = function () {
    this.initialize(ss['SIDE_atlas_1']);
    this.gotoAndStop(4);
  }).prototype = p = new cjs.Sprite();


  (lib.PHONE = function () {
    this.initialize(ss['SIDE_atlas_1']);
    this.gotoAndStop(5);
  }).prototype = p = new cjs.Sprite();


  (lib.Snow = function () {
    this.initialize(ss['SIDE_atlas_1']);
    this.gotoAndStop(6);
  }).prototype = p = new cjs.Sprite();


  (lib.Snow1 = function () {
    this.initialize(ss['SIDE_atlas_1']);
    this.gotoAndStop(7);
  }).prototype = p = new cjs.Sprite();


  (lib.Snow3 = function () {
    this.initialize(ss['SIDE_atlas_1']);
    this.gotoAndStop(8);
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
    this.shape.graphics.f('#FFFFFF').s().p('AAXBEIAAg9IgtA9IgdAAIAAhmIAdAAIAAA9IAtg9IAdAAIAABmgAgUgwQgHgHAAgLIAAgBIAWAAIAAABQAAAGAFAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIAWAAIAAABQAAALgHAHQgHAIgOAAQgNAAgHgIg');
    this.shape.setTransform(82.875, 329.525);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AghAzIAUgiIgthDIAjAAIAaAoIAZgoIAfAAIg9Blg');
    this.shape_1.setTransform(70.65, 331.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AgyAzIAAhlIA/AAQARAAAIAHQAKAIgBANQAAAHgDAFQgFAFgFADQAHACAFAGQAFAHAAAJQAAAOgKAHQgKAJgRgBgAgUAdIAcAAQAMgBAAgIQAAgJgMAAIgcAAgAgUgMIAcAAQAKAAAAgIQAAgHgKAAIgcAAg');
    this.shape_2.setTransform(58.9, 331.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('AgOAzIAAhMIglAAIAAgZIBnAAIAAAZIglAAIAABMg');
    this.shape_3.setTransform(47.125, 331.2);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AgjAmQgPgPAAgXQAAgXAPgPQAPgOAWAAQAKAAAIACQAJADAFAEQAFAEAEAFIAGAKIACAIIgeAAQgGgKgNAAQgJAAgHAIQgHAHAAALQAAALAHAIQAHAHAJAAQANAAAGgJIAeAAIgCAHIgFAKQgEAFgFAEQgGAEgIADQgJADgKAAQgWAAgPgPg');
    this.shape_4.setTransform(35.75, 331.225);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AAcAzIgGgOIgtAAIgGAOIgeAAIAshlIAfAAIAsBlgAgNANIAZAAIgMgeg');
    this.shape_5.setTransform(23.825, 331.2);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#FFFFFF').s().p('AAVAzIAAgiQgOACgMAAQgWAAgLgKQgLgJAAgWIAAgcIAeAAIAAAcQAAAJAEADQAEAEAJAAIALAAIAJgBIADgBIAAgqIAdAAIAABlg');
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
    this.shape.setTransform(153.175, 338.225);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AhTA6IAAhzIAiAAIAABWIAhAAIAAhWIAgAAIAABWIAiAAIAAhWIAiAAIAABzg');
    this.shape_1.setTransform(137.05, 338.225);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('AAtA6IAAhzIAiAAIAABzgAhOA6IAAhzIAhAAIAAAiIAjAAQAVAAALAKQAMALAAATQAAAUgMALQgLAKgVAAgAgtAdIAfAAQAOAAAAgMQAAgMgOAAIgfAAg');
    this.shape_2.setTransform(118.35, 338.225);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBGAAQAVAAALAKQALAKAAATQAAATgLAKQgLAKgVAAIglAAIAAAlgAgXgHIAhAAQANAAAAgLQAAgKgNAAIghAAg');
    this.shape_3.setTransform(102.825, 338.225);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('AgzA6IAAhzIBnAAIAAAdIhGAAIAABWg');
    this.shape_4.setTransform(90.125, 338.225);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AAtA6IAAhzIAiAAIAABzgAhOA6IAAhzIAhAAIAAAiIAkAAQAUAAALAKQANALAAATQAAAUgNALQgLAKgUAAgAgtAdIAfAAQAOAAAAgMQAAgMgOAAIgfAAg');
    this.shape_5.setTransform(74.55, 338.225);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#FFFFFF').s().p('AgZA4QgMgEgHgHQgFgGgEgHQgDgGAAgGIAhAAQAFALATAAQAWAAAAgKQAAgJgRAAIgRAAIAAgZIAPAAQAQAAAAgIQAAgJgTAAQgSAAgFAIIghAAQACgQAPgKQAOgLAZAAQAbAAANAJQANAJAAAPQAAAJgFAHQgFAGgIADQAJABAHAHQAFAGAAAJQAAASgOAKQgOAKgcAAQgOAAgMgEg');
    this.shape_6.setTransform(59, 338.225);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#FFFFFF').s().p('AgrAsQgTgRABgbQgBgaATgRQARgQAaAAQAbAAASAQQASARAAAaQAAAbgSARQgSAQgbAAQgaAAgRgQgAgUgVQgHAJAAAMQAAANAHAJQAIAIAMAAQANAAAIgIQAHgJABgNQgBgMgHgJQgIgIgNAAQgMAAgIAIg');
    this.shape_7.setTransform(45.65, 338.225);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBGAAQAVAAALAKQALAKAAATQAAATgLAKQgLAKgVAAIglAAIAAAlgAgXgHIAhAAQANAAAAgLQAAgKgNAAIghAAg');
    this.shape_8.setTransform(32.375, 338.225);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#FFFFFF').s().p('Ag4A6IAAhzIBHAAQATAAAKAIQAKAJAAAPQAAAIgEAGQgFAGgHADQAJACAFAHQAFAHAAALQAAAQgLAIQgKAJgUAAgAgYAgIAhAAQAOAAAAgKQAAgKgOAAIghAAgAgYgNIAgAAQALAAAAgJQAAgJgLAAIggAAg');
    this.shape_9.setTransform(15, 338.225);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(6.3, 322.3, 154.6, 28.69999999999999), null);


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


  (lib.snow3 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Snow3();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.snow3, new cjs.Rectangle(0, 0, 108, 49), null);


  (lib.snow1 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Snow1();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.snow1, new cjs.Rectangle(0, 0, 67, 49), null);


  (lib.snow = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Snow();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.snow, new cjs.Rectangle(0, 0, 108, 49), null);


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


  (lib.mob = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Mob();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.mob, new cjs.Rectangle(0, 0, 77, 97), null);


  (lib.IMG_BG = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.IMGBG();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.IMG_BG, new cjs.Rectangle(0, 0, 1101, 551), null);


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


  (lib.foot_b = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.ball1();
    this.instance.setTransform(51, -269, 0.5356, 0.5356);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.foot_b, new cjs.Rectangle(51, -269, 134.4, 326.2), null);


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


  (lib.BGBG2 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#081051').s().p('EhI0A2LMAAAhsVMCRpAAAMAAABsVg');
    this.shape.setTransform(466.1, 346.675);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.BGBG2, new cjs.Rectangle(0, 0, 932.2, 693.4), null);


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

    // Layer_2
    this.instance = new lib.ball2();
    this.instance.setTransform(-40, -243, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.bac_b, new cjs.Rectangle(-40, -243, 125, 305.5), null);


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


  (lib.small_b = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.BALL3();
    this.instance.setTransform(21, -249, 0.5, 0.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(96));

    // snow1
    this.instance_1 = new lib.snow1();
    this.instance_1.setTransform(61.45, 103.85, 0.6694, 0.6694, 0, 0, 0, 33.5, 24.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX: 1, scaleY: 1, x: 78.5, y: 92.5}, 43, cjs.Ease.cubicOut).to({regY: 24.6, scaleX: 0.7406, scaleY: 0.6905, x: 83.55, y: 112.25}, 52).wait(1));

    // snow
    this.instance_2 = new lib.snow();
    this.instance_2.setTransform(79.75, 79.15, 1, 1, 11.2203, 0, 0, 54.1, 0);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX: 54, rotation: 0, x: 81, y: 80}, 67, cjs.Ease.backOut).wait(29));

    // mob
    this.instance_3 = new lib.mob();
    this.instance_3.setTransform(83.45, 71.85, 1, 1, -14.9983, 0, 0, 38.5, 48.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation: 0, x: 87.5, y: 73.5}, 67, cjs.Ease.cubicOut).wait(29));

    // snow3
    this.instance_4 = new lib.snow3();
    this.instance_4.setTransform(88, 78.3, 1, 1, -24.9919, 0, 0, 54, 0);

    this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation: 0, y: 81}, 67, cjs.Ease.backOut).wait(29));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(17.2, -249, 140.5, 394.5);


  (lib.small = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.small_b();
    this.instance.setTransform(155.6, 383.6, 1, 1, 0, 0, 0, 34.6, 34.6);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({y: 373.6}, 59).to({y: 383.6}, 60).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(138.2, 90, 140.5, 404.5);


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


  (lib.foot = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.foot_b();
    this.instance.setTransform(483, 707, 1, 1, 0, 0, 0, 112, 112);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({y: 698.9}, 72, cjs.Ease.none).to({y: 707}, 47, cjs.Ease.none).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(422, 317.9, 134.39999999999998, 334.30000000000007);


  (lib.bac = function (mode, startPosition, loop, reversed) {
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
    this.instance.setTransform(-20.2, 442.8, 1, 1, 0, 0, 0, 72.8, 72.8);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({y: 451.55}, 59).to({y: 442.8}, 60).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-133, 127, 125, 314.3);


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

    // PHONE
    this.instance = new lib.PHONE_1();
    this.instance.setTransform(190, 118.85, 1.953, 1.953, 0, 0, 0, 30.5, 30.6);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off: false}, 0).wait(116));

    // T4
    this.instance_1 = new lib.T4();
    this.instance_1.setTransform(166.2, -120.35, 1.1294, 1.1294, 0, 0, 0, 100.8, 38.9);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off: false}, 0).to({y: -86.5, alpha: 1}, 14, cjs.Ease.backOut).wait(89).to({x: 165.4, y: -60.65, alpha: 0}, 12, cjs.Ease.backIn).wait(1));

    // SHADOW1
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(['#081051', 'rgba(8,16,81,0)'], [0.267, 1], 0, -40.4, 0, 40.5).s().p('Egj1AGVIAAspMBHrAAAIAAMpg');
    this.shape.setTransform(175, 40.475);

    this.timeline.addTween(cjs.Tween.get(this.shape).to({_off: true}, 95).wait(116));

    // small
    this.instance_2 = new lib.small();
    this.instance_2.setTransform(115.55, -311.2, 0.5013, 0.5013, 0, 0, 0, 53.6, 55.5);
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off: false}, 0).to({y: -75.5}, 25, cjs.Ease.backOut).wait(42).to({y: -311.2}, 25, cjs.Ease.backIn).to({_off: true}, 1).wait(116));

    // bac
    this.instance_3 = new lib.bac();
    this.instance_3.setTransform(294.75, -290.7, 0.5013, 0.5013, 0, 0, 0, 107, 97.5);
    this.instance_3._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off: false}, 0).to({y: -55}, 25, cjs.Ease.backOut).wait(34).to({y: -290.7}, 25, cjs.Ease.backIn).to({_off: true}, 5).wait(116));

    // foot
    this.instance_4 = new lib.foot();
    this.instance_4.setTransform(1.25, -342.6, 0.5013, 0.5013, 0, 0, 0, 165.5, 166);
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off: false}, 0).to({regY: 165.8, y: -107}, 25, cjs.Ease.backOut).wait(38).to({regY: 166, y: -342.6}, 25, cjs.Ease.backIn).to({_off: true}, 3).wait(116));

    // BG2
    this.instance_5 = new lib.BGBG2();
    this.instance_5.setTransform(83, 140.55, 0.5013, 0.5013, 0, 0, 0, 247.1, 369.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha: 0}, 6).wait(83).to({alpha: 1}, 6).wait(116));

    // BG_img
    this.instance_6 = new lib.IMG_BG();
    this.instance_6.setTransform(189.65, 113.6, 0.2135, 0.2135, 0, 0, 0, 550.5, 275.9);
    this.instance_6.compositeOperation = 'lighten';

    this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY: 275.7, scaleX: 0.3328, scaleY: 0.3328, y: 99.2}, 18, cjs.Ease.cubicInOut).wait(59).to({regY: 275.9, scaleX: 0.2135, scaleY: 0.2135, y: 113.6}, 18, cjs.Ease.cubicIn).to({_off: true}, 1).wait(115));

    // T2
    this.instance_7 = new lib.T2();
    this.instance_7.setTransform(188.3, 16, 0.7335, 0.7335, 0, 0, 0, 56.2, 18.7);
    this.instance_7.alpha = 0;
    this.instance_7._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off: false}, 0).to({regY: 18.8, x: 188.8, y: 28.05, alpha: 1}, 14, cjs.Ease.backOut).wait(55).to({regY: 18.9, x: 188.3, y: 44.85, alpha: 0}, 12, cjs.Ease.backIn).to({_off: true}, 8).wait(115));

    // T1
    this.instance_8 = new lib.T1();
    this.instance_8.setTransform(250.6, -172.6, 1.238, 1.238, 0, 0, 0, 135.4, 18.8);
    this.instance_8.alpha = 0;
    this.instance_8._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off: false}, 0).to({regY: 18.7, x: 251.4, y: -152.35, alpha: 1}, 14, cjs.Ease.backOut).wait(62).to({regY: 18.8, x: 250.6, y: -140, alpha: 0}, 12, cjs.Ease.backIn).to({_off: true}, 5).wait(115));

    // T3
    this.instance_9 = new lib.T3();
    this.instance_9.setTransform(131.3, -239.2, 1.3917, 1.3917, 0, 0, 0, 20.9, 18.9);
    this.instance_9.alpha = 0;

    this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX: 21.1, x: 132.55, y: -216.4, alpha: 1}, 14, cjs.Ease.backOut).wait(69).to({regX: 20.9, regY: 18.6, x: 131.3, y: -184.7, alpha: 0}, 12, cjs.Ease.backIn).to({_off: true}, 1).wait(115));

    // stageBackground
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s('rgba(0,0,0,0)').ss(1, 1, 1, 3, true).p('A/U4rMA+pAAAMAAAAxXMg+pAAAg');
    this.shape_1.setTransform(190.5, 148);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#081051').s().p('A/UYsMAAAgxXMA+pAAAMAAAAxXg');
    this.shape_2.setTransform(190.5, 148);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2}, {t: this.shape_1}]}).wait(211));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(136.2, -140.9, 290.3, 443.6);
  // library properties:
  lib.properties = {
    id: 'ED2BBC256F7ABD47B875EBC1A91BAF0C',
    width: 381,
    height: 296,
    fps: 30,
    color: '#081051',
    opacity: 1.00,
    manifest: [
      {src: 'img/SIDE_atlas_1.png', id: 'SIDE_atlas_1'}
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
