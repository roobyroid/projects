/* eslint-disable no-var */
(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [
    {name: 'F_2_atlas_1', frames: [[0, 0, 45, 35]]}
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


  (lib.Ellipse96 = function () {
    this.initialize(ss['F_2_atlas_1']);
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


  (lib.spspsp2 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.Ellipse96();

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.spspsp2, new cjs.Rectangle(0, 0, 45, 35), null);


  (lib.sp = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f('#4DA7C8').s().p('AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg');
    this.shape.setTransform(1, 1);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.sp, new cjs.Rectangle(0, 0, 2, 2), null);


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


  (lib.spsp2 = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.spspsp2();
    this.instance.setTransform(7.5, 13.5, 1, 1, 0, 0, 0, 22.5, 17.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.spsp2, new cjs.Rectangle(-15, -4, 45, 35), null);


  (lib.sprkls = function (mode, startPosition, loop, reversed) {
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

    // sp_b_copy_copy
    this.instance = new lib.sp();
    this.instance.setTransform(255.4, 229.5, 1.4, 1.4, 0, 0, 0, 1.1, 1.2);
    this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({x: -56.25, y: 125.95}, 111, cjs.Ease.cubicOut).wait(39));

    // sp_b_copy
    this.instance_1 = new lib.sp();
    this.instance_1.setTransform(232.25, 195.2, 1.4, 1.4, 0, 0, 0, 1.1, 1.2);
    this.instance_1._off = true;
    this.instance_1.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_1.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off: false}, 0).to({x: -79.4, y: 91.65}, 129, cjs.Ease.cubicOut).wait(19));

    // sp_b
    this.instance_2 = new lib.sp();
    this.instance_2.setTransform(182.25, 43.4, 1.4, 1.4, 0, 0, 0, 1.1, 1.2);
    this.instance_2._off = true;
    this.instance_2.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_2.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off: false}, 0).to({x: -129.4, y: -60.15}, 119, cjs.Ease.cubicOut).wait(27));

    // sp_b
    this.instance_3 = new lib.sp();
    this.instance_3.setTransform(123.05, 65.05, 1.4, 1.4, 0, 0, 0, 1.1, 1.2);
    this.instance_3.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_3.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x: -188.6, y: -38.5}, 142, cjs.Ease.cubicOut).wait(8));

    // sp_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy
    this.instance_4 = new lib.sp();
    this.instance_4.setTransform(94.5, 476.95, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_4._off = true;
    this.instance_4.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_4.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(16).to({_off: false}, 0).to({x: -217.15, y: 373.4}, 104, cjs.Ease.cubicOut).wait(30));

    // sp_copy_copy_copy_copy_copy_copy_copy_copy_copy
    this.instance_5 = new lib.sp();
    this.instance_5.setTransform(190.1, 334, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_5._off = true;
    this.instance_5.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_5.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(22).to({_off: false}, 0).to({x: -121.55, y: 230.45}, 115, cjs.Ease.cubicOut).wait(13));

    // sp_copy_copy_copy_copy_copy_copy_copy_copy_copy_copy
    this.instance_6 = new lib.sp();
    this.instance_6.setTransform(227.45, 469.85, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_6._off = true;
    this.instance_6.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_6.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off: false}, 0).to({x: -84.2, y: 366.3}, 117, cjs.Ease.cubicOut).wait(6));

    // sp_copy_copy_copy_copy_copy_copy_copy_copy_copy
    this.instance_7 = new lib.sp();
    this.instance_7.setTransform(72.25, 359.1, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_7._off = true;
    this.instance_7.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_7.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off: false}, 0).to({x: -239.4, y: 255.55}, 135, cjs.Ease.cubicOut).wait(1));

    // sp_copy_copy_copy_copy_copy_copy_copy_copy
    this.instance_8 = new lib.sp();
    this.instance_8.setTransform(223.5, 311.65, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_8._off = true;
    this.instance_8.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_8.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(10).to({_off: false}, 0).to({x: -88.15, y: 208.1}, 120, cjs.Ease.cubicOut).wait(20));

    // sp_copy_copy_copy_copy_copy_copy_copy_copy
    this.instance_9 = new lib.sp();
    this.instance_9.setTransform(28.8, 347.7, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_9._off = true;
    this.instance_9.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_9.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(19).to({_off: false}, 0).to({x: -282.85, y: 244.15}, 122, cjs.Ease.cubicOut).wait(9));

    // sp_copy_copy_copy_copy_copy_copy_copy
    this.instance_10 = new lib.sp();
    this.instance_10.setTransform(103.9, 267.5, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_10._off = true;
    this.instance_10.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_10.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off: false}, 0).to({x: -207.75, y: 163.95}, 125, cjs.Ease.cubicOut).wait(21));

    // sp_copy_copy_copy_copy_copy_copy_copy_copy
    this.instance_11 = new lib.sp();
    this.instance_11.setTransform(205.1, 46.45, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_11._off = true;
    this.instance_11.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_11.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(8).to({_off: false}, 0).to({x: -106.55, y: -57.1}, 133, cjs.Ease.cubicOut).wait(9));

    // sp_copy_copy_copy_copy_copy_copy_copy_copy_copy
    this.instance_12 = new lib.sp();
    this.instance_12.setTransform(242.45, 182.3, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_12._off = true;
    this.instance_12.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_12.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(23).to({_off: false}, 0).to({x: -69.2, y: 78.75}, 108, cjs.Ease.cubicOut).wait(19));

    // sp_copy_copy_copy_copy_copy_copy_copy_copy
    this.instance_13 = new lib.sp();
    this.instance_13.setTransform(87.25, 71.55, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_13._off = true;
    this.instance_13.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_13.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(13).to({_off: false}, 0).to({x: -224.4, y: -32}, 119, cjs.Ease.cubicOut).wait(18));

    // sp_copy_copy_copy_copy_copy_copy_copy
    this.instance_14 = new lib.sp();
    this.instance_14.setTransform(238.5, 24.1, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_14._off = true;
    this.instance_14.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_14.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(6).to({_off: false}, 0).to({x: -73.15, y: -79.45}, 134, cjs.Ease.cubicOut).wait(10));

    // sp_copy_copy_copy_copy_copy_copy
    this.instance_15 = new lib.sp();
    this.instance_15.setTransform(118.9, -20.05, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_15._off = true;
    this.instance_15.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_15.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(18).to({_off: false}, 0).to({x: -192.75, y: -123.6}, 109, cjs.Ease.cubicOut).wait(23));

    // sp_copy_copy_copy_copy_copy
    this.instance_16 = new lib.sp();
    this.instance_16.setTransform(149.25, 51.9, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_16._off = true;
    this.instance_16.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_16.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10).to({_off: false}, 0).to({x: -162.4, y: -51.65}, 118, cjs.Ease.cubicOut).wait(22));

    // sp_copy_copy_copy_copy
    this.instance_17 = new lib.sp();
    this.instance_17.setTransform(163.3, 88.55, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_17._off = true;
    this.instance_17.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_17.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(27).to({_off: false}, 0).to({x: -148.35, y: -15}, 120, cjs.Ease.cubicOut).wait(3));

    // sp_copy_copy_copy
    this.instance_18 = new lib.sp();
    this.instance_18.setTransform(163.3, 139.05, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_18._off = true;
    this.instance_18.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_18.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(15).to({_off: false}, 0).to({x: -148.35, y: 35.5}, 126, cjs.Ease.cubicOut).wait(9));

    // sp_copy_copy
    this.instance_19 = new lib.sp();
    this.instance_19.setTransform(95.7, 143.6, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_19._off = true;
    this.instance_19.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_19.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(23).to({_off: false}, 0).to({x: -215.95, y: 40.05}, 120, cjs.Ease.cubicOut).wait(7));

    // sp_copy
    this.instance_20 = new lib.sp();
    this.instance_20.setTransform(158.05, 182.3, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_20._off = true;
    this.instance_20.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_20.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(8).to({_off: false}, 0).to({x: -153.6, y: 78.75}, 139, cjs.Ease.cubicOut).wait(3));

    // sp
    this.instance_21 = new lib.sp();
    this.instance_21.setTransform(141.1, 200, 0.6, 0.6, 0, 0, 0, 1, 1.1);
    this.instance_21._off = true;
    this.instance_21.filters = [new cjs.BlurFilter(2, 2, 1)];
    this.instance_21.cache(-2, -2, 6, 6);

    this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(17).to({_off: false}, 0).to({x: -170.55, y: 96.45}, 126, cjs.Ease.cubicOut).wait(7));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-284.4, -125.2, 551.3, 612.5);


  (lib.sp2 = function (mode, startPosition, loop, reversed) {
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

    // Layer_1_copy_copy_copy_copy_copy
    this.instance = new lib.spsp2();
    this.instance.setTransform(366.25, 285.85, 1.0586, 1.0586, 0, 0, 0, 12.6, 9.6);
    this.instance._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off: false}, 0).to({regX: 12.7, x: 180.25, y: 58.25}, 144, cjs.Ease.cubicOut).wait(3));

    // Layer_1_copy_copy_copy_copy
    this.instance_1 = new lib.spsp2();
    this.instance_1.setTransform(397.65, 508.25, 0.6357, 0.6357, 0, 0, 0, 12.6, 9.5);
    this.instance_1._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off: false}, 0).to({regX: 12.7, x: 197.1, y: 295.15}, 144, cjs.Ease.cubicOut).wait(1));

    // Layer_1_copy_copy_copy
    this.instance_2 = new lib.spsp2();
    this.instance_2.setTransform(369.05, 646.9, 0.6357, 0.6357, 0, 0, 0, 12.6, 9.5);
    this.instance_2._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off: false}, 0).to({regX: 12.7, x: 168.5, y: 433.8}, 144, cjs.Ease.cubicOut).wait(5));

    // Layer_1_copy_copy
    this.instance_3 = new lib.spsp2();
    this.instance_3.setTransform(510.7, 478.15, 1, 1, 0, 0, 0, 12.6, 9.5);
    this.instance_3._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off: false}, 0).to({x: 207.1, y: 179.8}, 144, cjs.Ease.cubicOut).wait(1));

    // Layer_1_copy
    this.instance_4 = new lib.spsp2();
    this.instance_4.setTransform(465.7, 657.15, 1, 1, 0, 0, 0, 12.6, 9.5);
    this.instance_4._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off: false}, 0).to({x: 162.1, y: 358.8}, 144, cjs.Ease.cubicOut).wait(4));

    // Layer_1_copy_copy_copy_copy
    this.instance_5 = new lib.spsp2();
    this.instance_5.setTransform(225.55, 198.1, 1.0586, 1.0586, 0, 0, 0, 12.6, 9.6);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX: 12.7, x: 39.55, y: -29.5}, 144, cjs.Ease.cubicOut).wait(6));

    // Layer_1_copy_copy_copy
    this.instance_6 = new lib.spsp2();
    this.instance_6.setTransform(256.95, 420.5, 0.6357, 0.6357, 0, 0, 0, 12.6, 9.5);
    this.instance_6._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off: false}, 0).to({regX: 12.7, x: 56.4, y: 207.4}, 144, cjs.Ease.cubicOut).wait(4));

    // Layer_1_copy_copy
    this.instance_7 = new lib.spsp2();
    this.instance_7.setTransform(228.35, 559.15, 0.6357, 0.6357, 0, 0, 0, 12.6, 9.5);
    this.instance_7._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({_off: false}, 0).to({regX: 12.7, x: 27.8, y: 346.05}, 144, cjs.Ease.cubicOut).wait(1));

    // Layer_1_copy
    this.instance_8 = new lib.spsp2();
    this.instance_8.setTransform(235.85, 499.25, 1, 1, 0, 0, 0, 12.6, 9.5);
    this.instance_8._off = true;

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off: false}, 0).to({x: -67.75, y: 200.9}, 144, cjs.Ease.cubicOut).wait(3));

    // Layer_1
    this.instance_9 = new lib.spsp2();
    this.instance_9.setTransform(206.5, 340.75, 1, 1, 0, 0, 0, 12.6, 9.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x: -97.1, y: 42.4}, 144, cjs.Ease.cubicOut).wait(6));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-124.7, -43.8, 652.8000000000001, 722.5);


  // stage content:
  (lib.F_2 = function (mode, startPosition, loop, reversed) {
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

    // Layer_6_copy
    this.instance = new lib.sp2();
    this.instance.setTransform(1540.2, 39.35, 2.5313, 2.5313, 0, 0, 0, 48.5, 48.5);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

    // Layer_6
    this.instance_1 = new lib.sp2();
    this.instance_1.setTransform(350.9, 485.8, 2.5313, 2.5313, 0, 0, 0, 48.4, 48.5);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(150));

    // bg2_copy_copy_copy_copy
    this.instance_2 = new lib.sprkls();
    this.instance_2.setTransform(1904.95, 592.9, 2.5313, 2.5313, 0, 0, 0, 24.9, 24.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(150));

    // bg2_copy_copy_copy
    this.instance_3 = new lib.sprkls();
    this.instance_3.setTransform(2404.75, 759.1, 2.5313, 2.5313, 0, 0, 0, 24.9, 24.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150));

    // bg2_copy_copy_copy
    this.instance_4 = new lib.sprkls();
    this.instance_4.setTransform(1063.05, 59.1, 2.5313, 2.5313, 0, 0, 0, 24.9, 24.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150));

    // bg2_copy_copy
    this.instance_5 = new lib.sprkls();
    this.instance_5.setTransform(1562.85, 225.3, 2.5313, 2.5313, 0, 0, 0, 24.9, 24.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(150));

    // bg2_copy
    this.instance_6 = new lib.sprkls();
    this.instance_6.setTransform(436.75, 697.45, 2.5313, 2.5313, 0, 0, 0, 24.9, 24.9);

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(150));

    // bg2_copy_copy_copy_copy
    this.instance_7 = new lib.sprkls();
    this.instance_7.setTransform(1983.35, 409.9, 2.5313, 2.5313, 0, 0, 0, 24.9, 24.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(150));

    // bg2_copy_copy_copy
    this.instance_8 = new lib.sprkls();
    this.instance_8.setTransform(2518.25, 242.35, 2.5313, 2.5313, 0, 0, 0, 24.9, 24.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(150));

    // bg2_copy_copy
    this.instance_9 = new lib.sprkls();
    this.instance_9.setTransform(846.2, 312.65, 2.5313, 2.5313, 0, 0, 0, 24.9, 24.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(150));

    // bg2_copy
    this.instance_10 = new lib.sprkls();
    this.instance_10.setTransform(207.35, 191.35, 2.5313, 2.5313, 0, 0, 0, 24.9, 24.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(150));

    // bg2
    this.instance_11 = new lib.sprkls();
    this.instance_11.setTransform(1405.15, 759.1, 2.5313, 2.5313, 0, 0, 0, 24.9, 24.8);

    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(150));

    // Layer_7_copy
    this.shape = new cjs.Shape();
    this.shape.graphics.lf(['#0A1334', 'rgba(10,19,52,0)'], [0, 1], 0.3, -124.6, 0.3, 124.4).s().p('EixSATeMAAAgm7MFilAAAMAAAAm7g');
    this.shape.setTransform(910.3, 124.575);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(150));

    // Layer_1
    this.instance_12 = new lib.grgr();
    this.instance_12.setTransform(587.15, 670.05, 2.5066, 3.7897, 0, 0, 0, 234.2, 176.8);
    this.instance_12.compositeOperation = 'multiply';

    this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(150));

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
  p.nominalBounds = new cjs.Rectangle(735.6, 640, 2374.2000000000003, 709.4000000000001);
  // library properties:
  lib.properties = {
    id: '7AF8085D90176042B2825EE91889CCA7',
    width: 1920,
    height: 1280,
    fps: 30,
    color: '#FFFFFF',
    opacity: 1.00,
    manifest: [
      {src: 'img/F_2_atlas_1.png', id: 'F_2_atlas_1'}
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
  an.compositions['7AF8085D90176042B2825EE91889CCA7'] = {
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
