/* eslint-disable no-var */
(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [
    {name: 'f_ball_atlas_1', frames: [[0, 0, 332, 329]]}
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


  (lib.f_ball_1 = function () {
    this.initialize(ss['f_ball_atlas_1']);
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


  (lib.bl2 = function (mode, startPosition, loop, reversed) {
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
    this.shape.graphics.f().s('#FFFFFF').ss(19, 0, 0, 4).p('AOYAAQAAF9kNEOQkOENl9AAQl8AAkOkNQkNkOAAl9QAAl8ENkOQEOkNF8AAQF9AAEOENQENEOAAF8g');
    this.shape.setTransform(92, 92);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.bl2, new cjs.Rectangle(-9.5, -9.5, 203, 203), null);


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

    // Layer_23 (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p('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');
    mask.setTransform(110.5612, 113.9478);

    // Layer_26
    this.instance = new lib.bl2();
    this.instance.setTransform(107.3, 113.65, 0.4772, 0.4772, 0, 0, 0, 92, 92);
    this.instance._off = true;
    this.instance.filters = [new cjs.BlurFilter(10, 10, 1)];
    this.instance.cache(-11, -11, 207, 207);

    var maskedShapeInstanceList = [this.instance];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off: false}, 0).to({regX: 91.7, regY: 91.8, scaleX: 1.5046, scaleY: 1.5046, x: 107, y: 113.5}, 22).wait(12));

    // Layer_21 (mask)
    var mask_1 = new cjs.Shape();
    mask_1._off = true;
    mask_1.graphics.p('AByDNQgJgDAEgIQArhXAcheQAHgdgehEQglhJgLgYQgDgIAIgHIAPgKQAHgDAGAIIAHAOQA2BjASBFQgEAUgJAeIgQAyQgEAJgOAkQgMAdgJATIgJAUQgHAMgJACIgOgDgABDDIIgPgDQgIgGAIgQIAMgZQAfhEAGgkQALg4gZg0QgDgMgTghQgQgbgCgSQABgFAHgFIAMgGQAIgIAIAJIAKARQA6BngHBHQgFA1g7B3QgEAEgHAAIgCAAgAgICrQANgcABgNQAQgzABgjQABgpgPgsQgBgIgMgfQgMgaAEgHQAighAHAcQAcBBAIAvQAKA+gVA0QgFAJgKApQgMAkgOAAQgcAAAHgXgAhMCpQgDgIAHgUQAVhAgFgoQgDgsgWgxQgIgNAXgLQASgTAOAeQAIAQAJAgQASA7gTBJQgEAJgHAgQgJAagNACQgVgCgEgJgAiPCRQAHgXACgQQAJg8gQgtIgGgPQgFgKAEgFQAXgVALADQALADAJAdQAUA3gOBAIgHAhQgFAUgMAFQgfAAAAgRgAi9CRIgRgHQgIgFAAgJQABgzgHgwQgCgLALgJIAUgNQAQgGAEAYQACAMACAYIACA9QgCAngRAAIgFgBg');
    mask_1.setTransform(150.8019, 125.5609);

    // Layer_8_copy_copy_copy_copy_copy_copy_copy
    this.instance_1 = new lib.blblbl();
    this.instance_1.setTransform(80.15, 120.05, 0.3855, 0.9999, -3.3289, 0, 0, 34.7, 75.7);
    this.instance_1._off = true;
    this.instance_1.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_1.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_1];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off: false}, 0).to({regX: 35.1, regY: 75.8, scaleX: 0.3385, scaleY: 0.9998, rotation: -2.0772, x: 232.65, y: 121.5}, 27, cjs.Ease.quadInOut).wait(17));

    // Layer_20 (mask)
    var mask_2 = new cjs.Shape();
    mask_2._off = true;
    mask_2.graphics.p('ABXEuQgggEgPgBQilgThxgsQgFgCAAgHQgFgsAUAFIAYAJQARAIAMABQBUAbBgARIA0AJQAdAFAXAAQAKgEAJgRQAMgYAEgEQAohOAPgkQAchDAIg2QgYhThIh1QgPgZgFgEQgIgGgVAUQg3AogtAeQhRA2hfA4IgiAWQgcARgEgHQgEgFAAgMIgBgTQAAgIALgGIASgKICNhVQBWg0A0gmIAxgjQAFgGAHAAQAHABAFAHQBCBcAmBYQAPAfAPAwQABANgFASIgIAcQgbBgg4BhQgFANgNATIgUAgQgKAUgbAAIgBAAg');
    mask_2.setTransform(152.433, 124.9987);

    // Layer_8_copy_copy_copy_copy_copy_copy
    this.instance_2 = new lib.blblbl();
    this.instance_2.setTransform(80.15, 120.05, 0.3855, 0.9999, -3.3289, 0, 0, 34.7, 75.7);
    this.instance_2._off = true;
    this.instance_2.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_2.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_2];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off: false}, 0).to({regX: 35.1, regY: 75.8, scaleX: 0.3385, scaleY: 0.9998, rotation: -2.0772, x: 232.65, y: 121.5}, 27, cjs.Ease.quadInOut).wait(27));

    // Layer_19 (mask)
    var mask_3 = new cjs.Shape();
    mask_3._off = true;
    mask_3.graphics.p('AAeGMIAAgBQiqgDh4guQgGgFABgQQAAgNAEgLQALgFAfAKQAoAPAGABIBgATQA3AKAoAEQAPAAAiAFQAeACAMgTIAggyQAVgfALgTQBFh2AfiIQABgngghHQgSgoglhBQghg4gqg2QgLgSgJAEQgMAKgJAGQgaAXguAhQhKA1huA9IggASQgaANgGAFQgMAHgHADQgLAFgFgKQgFggAGgHQACgEAhgQIA8giQAngVAWgOQBfg1A1grIAogfQAGgEALgKQALgHAHAJQCOCgAxC6QAEAkgPAxQgIAcgSA3QgvB1hFBZQgZAjgTAUQgJALgTAAQgWgCgKACg');
    mask_3.setTransform(153.7796, 123.8719);

    // Layer_8_copy_copy_copy_copy_copy
    this.instance_3 = new lib.blblbl();
    this.instance_3.setTransform(80.15, 120.05, 0.3855, 0.9999, -3.3289, 0, 0, 34.7, 75.7);
    this.instance_3._off = true;
    this.instance_3.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_3.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_3];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off: false}, 0).to({regX: 35.1, regY: 75.8, scaleX: 0.3385, scaleY: 0.9998, rotation: -2.0772, x: 232.65, y: 121.5}, 27, cjs.Ease.quadInOut).wait(31));

    // Layer_18 (mask)
    var mask_4 = new cjs.Shape();
    mask_4._off = true;
    mask_4.graphics.p('Ag9F6QgWgIgqgsQhJhJg3hYQg3hZghhgQgSghA5hiQBFhoAPgZQAug9AagcQAFgMANACQAHABAPAHQARAFgSAWQgbAfgxBBIhWB9QhABkARAUQAqBjA/BZQA/BaBRBHQAnAGA4gHQAggEBAgKQBggTAtgNQAZgEAAgQQADgwgIheQgOiqgDhiQgEglABgOQABgaAfAXQANAFAAAKIAJDBQAHBxAJBRQABAUAHAbQAEAWgBAHQgCASg+ANQiKAph7AMQghAEgWAAQgSAAgJgDg');
    mask_4.setTransform(77.6839, 129.8242);

    // Layer_8_copy_copy_copy_copy
    this.instance_4 = new lib.blblbl();
    this.instance_4.setTransform(107, 72.75, 0.3855, 0.9999, 109.7238, 0, 0, 34.6, 75.7);
    this.instance_4._off = true;
    this.instance_4.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_4.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_4];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off: false}, 0).to({regX: 34.9, scaleX: 0.3386, scaleY: 0.9998, rotation: 90.7573, x: 80.5, y: 214.65}, 27, cjs.Ease.quadInOut).wait(31));

    // Layer_17 (mask)
    var mask_5 = new cjs.Shape();
    mask_5._off = true;
    mask_5.graphics.p('AgmE5QgegIgjgtQhdhrhAiAQgEgQAQgVQAVgeADgGQAphKA8hUQBbiAAXAYQAPAOgWAVQgmArgaAcQgoArgrBAQgcAlgMATQgUAggIAdQgDAOAPATQASAYADAHQAXAwAtA0QAMAOBHBKQAHAFAQAAIAYgBQAhAABDgLQAcgGAmgCQAagCAHgEQAJgGABgUQABgOgFg2QgBgugHhiQgHhcgBgyQgEg1ADgPQAFgYArApQAHAGAAAMIAAAVQADAbABAyIADBNQAAAeAHBZQAFBKgCAtQgBACACAMQABAJgFACQgKAFgQADIgaAEQhvATgxAEQgpADgWAAQgOAAgGgBg');
    mask_5.setTransform(75.9583, 129.2536);

    // Layer_8_copy_copy_copy
    this.instance_5 = new lib.blblbl();
    this.instance_5.setTransform(107, 72.75, 0.3855, 0.9999, 109.7238, 0, 0, 34.6, 75.7);
    this.instance_5._off = true;
    this.instance_5.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_5.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_5];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off: false}, 0).to({regX: 34.9, scaleX: 0.3386, scaleY: 0.9998, rotation: 90.7573, x: 81.15, y: 217.15}, 27, cjs.Ease.quadInOut).wait(27));

    // Layer_16 (mask)
    var mask_6 = new cjs.Shape();
    mask_6._off = true;
    mask_6.graphics.p('ABFDsQgrAAgVgCQglgEgQgZQgtgwgSgWQgigqgSgjQACgOAFgEQAGgGAJAMQA1BKAQATQA0A7AjgCQAxAKBZgDQAHAAADAHIABANQgBAOgoAAQgsgCgKABgACNCsQhkAAgugdQgegThMhYIgOgQQgJgKADgJIAIgHQAGgEAEACQATAOAeAeQAhAhAOAMQAaAdAvALQAUAEBBAFQADABAKAAQAIAAAAAHQgCAHgCAPQgDAMgNAAIgBAAgACVBTIhEgDQgmgEgbgMQgpghg7g6QgOgMABgQQABgQAVALIA8AuQAiAYAeAMQAFABAXAIQASAHALABQAJADAXABQAUACAFAKIABAMIgBAAQACAIgEAFQgDADgFAAIgEAAgABdgNQgXgIgkgTQghgUgMgLQgXgTgLgVQgEgKAJgJQAIgJAJAHQBgBIBRATQAHAFgCAKIgCASQgKACgLAAQgUAAgXgHgACIhRQgJgBgQgIQg6gPgygyQgHgIAIgOQAKgNAJAKQApAgBLAgQAOgBAFAJQAEAJgFANQgDAGgJAAIgJgBgABXi+Qg2gZALgLQAUgSAiAPIA4AZQAJAEgDAJQgCACABANQAAAKgFABQgWgFgtgUg');
    mask_6.setTransform(73.8583, 127.7892);

    // Layer_8_copy_copy_copy_copy
    this.instance_6 = new lib.blblbl();
    this.instance_6.setTransform(107, 72.75, 0.3855, 0.9999, 109.7238, 0, 0, 34.6, 75.7);
    this.instance_6._off = true;
    this.instance_6.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_6.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_6];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(16).to({_off: false}, 0).to({regX: 34.9, scaleX: 0.3386, scaleY: 0.9998, rotation: 90.7573, x: 81.15, y: 217.15}, 27, cjs.Ease.quadInOut).wait(17));

    // Layer_12 (mask)
    var mask_7 = new cjs.Shape();
    mask_7._off = true;
    mask_7.graphics.p('AI2GgQgRgNAqgcQAWgOAigQQAQgJAMAAQAQgBADAQIAGAQQADALgHAEQgNAHghAUQgdASgRAGQgRgFgVgMgAHvF1QgLgIAJgPQAFgJANgOQAmgtBTgSQAQgGALAOQAGAGAHAUQABAKgVADQgZADgEAEQgqAQgkAoQgKAMgIABIgBAAQgLAAgUgOgAGkFLQgNgGAHgMIAPgVQAZgqAtgZQArgZAzgEQARgHAJAFQAIAFAIARQAIAMgPAFQgUACgGACIgeAJQgSAGgMAHQglATgjAwQgKANgJADIgDAAQgLAAgRgLgAFMEmQgPgEATgaQAKgPARgVQAwhEBJgNQAXgHA8gKQALgBAKAMQAJAMgDAMQg3AGhAAZQgYAJgYAaQgaAggNAOQgRAZgGACIgDABQgKAAgUgLgAECEFQgJgGAIgPQALgQACgFQAZg4AugrQAUgRBUgQQBWgPASANQATASgMAGIggAEQg6AFgYAIQgrAFgdAbQgVAUgaAuQgPAhgIAJQgFAGgJAAQgLAAgRgLgADPDzIgSgIQgMgGAEgJQAlhTAzhAQAcgNAvgIIBOgMQAQAAAmgIQAhgDAMAUQAEAJgUACQgYAAgFACIhWANQg+ALgNAIQgRAKgfA0QgEAKgLARIgQAbQgFAPgFAHQgGALgKAAIgDAAg');
    mask_7.setTransform(70.1057, 43.3);

    // Layer_8_copy_copy
    this.instance_7 = new lib.blblbl();
    this.instance_7.setTransform(161.75, 107.6, 0.3855, 0.9999, -122.7661, 0, 0, 34.5, 75.7);
    this.instance_7._off = true;
    this.instance_7.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_7.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_7];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(16).to({_off: false}, 0).to({regX: 34.6, regY: 75.8, scaleX: 0.3386, rotation: -141.9548, x: 67.9, y: 28.4}, 27, cjs.Ease.quadInOut).wait(17));

    // Layer_15 (mask)
    var mask_8 = new cjs.Shape();
    mask_8._off = true;
    mask_8.graphics.p('AAOEfIgKgFQjciAjEgoQgMgIAGgfQAJgiABgLQAWh3BBhfQAagnAagPQAVgLAzgJQBzgYB/gDQA0gCBXADIgDgDQAKAAAJAEQBpBuAyBaQAgA3AOAfIANAbQAIARgBALQgJAJgFAEQgJAGgIgGIgbg8QgqhUgng9QgxhMg2g4QgNgMhCABQhIAFgSgBQh7AHh4AfQhIArg3CsQgSA+gBAKQgDAUANAHIAzAMQAzALA0AVQB2ArCXBbQALAKgQAJQgUAIgFADIgEABIgGgBg');
    mask_8.setTransform(112.4145, 68.4818);

    // Layer_8_copy_copy_copy_copy
    this.instance_8 = new lib.blblbl();
    this.instance_8.setTransform(161.75, 107.6, 0.3855, 0.9999, -122.7661, 0, 0, 34.5, 75.7);
    this.instance_8._off = true;
    this.instance_8.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_8.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_8];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off: false}, 0).to({regX: 34.6, regY: 75.8, scaleX: 0.3386, rotation: -141.9548, x: 67.9, y: 28.4}, 27, cjs.Ease.quadInOut).wait(31));

    // Layer_14 (mask)
    var mask_9 = new cjs.Shape();
    mask_9._off = true;
    mask_9.graphics.p('ABKDoQgZgQgHgDQikhciOgvQg0gMgNgIQgWgMAVgvQAoh2A0hAQAPgWBVgOQAugHBIgHQA3gFBQAAQAMgBAMAJIASASQBsCBBLC9QAEAIgJAGQgLAGgEAEQgPAIgLgeQgPgqgBgBQhKivhXhlQgGgJgKgCQgFgBgPABIgyADIgxADIhUALQgvAHgkAKQgWANgTAgQgTAmgKARQgOAjgTApQgKAYADAIQAEAHAZAIQA5ASASAHQBkAnBHAiQBbAsBDAwQgCAHgMAGIgTAJIgEAAQgIAAgTgLg');
    mask_9.setTransform(113.7257, 67.3908);

    // Layer_8_copy_copy_copy
    this.instance_9 = new lib.blblbl();
    this.instance_9.setTransform(161.75, 107.6, 0.3855, 0.9999, -122.7661, 0, 0, 34.5, 75.7);
    this.instance_9._off = true;
    this.instance_9.filters = [new cjs.BlurFilter(35, 35, 1)];
    this.instance_9.cache(-29, -2, 129, 156);

    var maskedShapeInstanceList = [this.instance_9];

    for (var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
      maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
    }

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off: false}, 0).to({regX: 34.6, regY: 75.8, scaleX: 0.3386, rotation: -141.9548, x: 67.9, y: 28.4}, 27, cjs.Ease.quadInOut).wait(27));

    // Layer_2
    this.instance_10 = new lib.f_ball_1();
    this.instance_10.setTransform(34, 38, 0.4604, 0.4604);

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(60));

    this._renderFirstFrame();

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(33.9, 37.9, 153.4, 152.2);


  // stage content:
  (lib.f_ball = function (mode, startPosition, loop, reversed) {
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
    this.instance = new lib.foot_b();
    this.instance.setTransform(140.6, 135.15, 1.78, 1.78, 0, 0, 0, 112, 112);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(140, 140.2, 134.60000000000002, 133.90000000000003);
  // library properties:
  lib.properties = {
    id: '44C502E15A805A49B34D1D1945DDC986',
    width: 277,
    height: 274,
    fps: 30,
    color: '#FFFFFF',
    opacity: 0.00,
    manifest: [
      {src: 'img/f_ball_atlas_1.png', id: 'f_ball_atlas_1'}
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
  an.compositions['44C502E15A805A49B34D1D1945DDC986'] = {
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
