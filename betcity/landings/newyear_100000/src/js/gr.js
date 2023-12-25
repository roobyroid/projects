/* eslint-disable no-var */
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"gr_atlas_1", frames: [[0,0,17,16],[19,0,17,16],[38,0,17,16],[16,38,13,19],[31,38,13,19],[0,18,18,14],[20,18,14,18],[36,18,14,18],[0,34,14,18]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Mesh = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_0 = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_1 = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_2 = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_3 = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_4 = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_5 = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_6 = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mesh_7 = function() {
	this.initialize(ss["gr_atlas_1"]);
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


(lib.Light_r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF90C4","rgba(204,46,109,0)"],[0,1],0,0,0,0,0,8.9).s().p("Ag9A+QgagaABgkQgBgjAagaQAagZAjgBQAkABAaAZQAZAaAAAjQAAAkgZAaQgaAagkAAQgjAAgagag");
	this.shape.setTransform(14.7114,14.69,1.68,1.68);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Light_r, new cjs.Rectangle(0,0,29.4,29.4), null);


(lib.light_g = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#6BD53A","rgba(17,171,50,0)"],[0,1],0,0,0,0,0,15.9).s().p("AhuBvQguguAAhBQAAhAAuguQAuguBAAAQBBAAAuAuQAtAuABBAQgBBBgtAuQguAthBABQhAgBgugtg");
	this.shape.setTransform(15.65,15.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light_g, new cjs.Rectangle(0,0,31.3,31.3), null);


(lib.Light_e = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FAD100","rgba(248,160,33,0)"],[0,1],0,0,0,0,0,16.9).s().p("Ah0B0QgvgwAAhEQAAhDAvgwQAxgxBDAAQBEAAAwAxQAwAwAABDQAABEgwAwQgwAxhEAAQhDAAgxgxg");
	this.shape.setTransform(16.45,16.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Light_e, new cjs.Rectangle(0,0,32.9,32.9), null);


(lib.light_b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#06CEF0","rgba(8,158,243,0)"],[0,1],0,0,0,0,0,15.1).s().p("AhpBqQgrgsAAg+QAAg9ArgsQAsgsA9AAQA+AAArAsQAsAsABA9QgBA+gsAsQgrArg+AAQg9AAgsgrg");
	this.shape.setTransform(14.95,14.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.light_b, new cjs.Rectangle(0,0,29.9,29.9), null);


(lib.lamp_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFgfIAEgBIAHBBIgEAAg");
	this.shape.setTransform(799.6245,87.0103,0.3261,0.3261,147.5613);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRgeIAagDIAJBAIgaADg");
	this.shape_1.setTransform(798.9081,87.6008,0.3261,0.3261,147.5613);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5D5D5D").s().p("AgggcIA4gIIAJBBIg4AIg");
	this.shape_2.setTransform(799.0902,87.4465,0.3261,0.3261,147.5613);

	this.instance = new lib.Mesh_3();
	this.instance.setTransform(799.6,86.05,0.3265,0.3265,147.5586);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAUIAygqIADADIgyAqg");
	this.shape_3.setTransform(774.1326,131.0741,0.3262,0.3262,87.5628);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghALIAxgqIASAVIgxAqg");
	this.shape_4.setTransform(774.8243,130.4489,0.3262,0.3262,87.5628);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5D5D5D").s().p("AgrAAIAygqIAlArIgyAqg");
	this.shape_5.setTransform(774.6516,130.6113,0.3262,0.3262,87.5628);

	this.instance_1 = new lib.Mesh_0();
	this.instance_1.setTransform(779.55,129.9,0.3265,0.3265,87.5626);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPAdIAbg7IAEACIgaA7g");
	this.shape_6.setTransform(672.1072,215.8893,0.3263,0.3263,117.5585);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAYIAag7IAZALIgaA8g");
	this.shape_7.setTransform(672.8358,215.3218,0.3263,0.3263,117.5585);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5D5D5D").s().p("AgnATIAcg8IAzAYIgbA7g");
	this.shape_8.setTransform(672.6582,215.4683,0.3263,0.3263,117.5585);

	this.instance_2 = new lib.Mesh_7();
	this.instance_2.setTransform(678.6,217.15,0.3265,0.3265,117.5591);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAcIAdg5IAEACIgeA5g");
	this.shape_9.setTransform(720.4617,163.8176,0.3262,0.3262,-47.4438);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAXIAdg5IAYAMIgdA6g");
	this.shape_10.setTransform(719.5864,164.132,0.3262,0.3262,-47.4438);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5D5D5D").s().p("AgoAQIAfg6IAyAbIgfA6g");
	this.shape_11.setTransform(719.8023,164.0535,0.3262,0.3262,-47.4438);

	this.instance_3 = new lib.Mesh_5();
	this.instance_3.setTransform(714.65,159.5,0.3264,0.3264,-47.4438);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdAOIA5geIACADIg5Aeg");
	this.shape_12.setTransform(71.8589,109.738,0.3262,0.3262,-2.4318);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjADIA6geIAMAZIg4Aeg");
	this.shape_13.setTransform(71.3843,108.942,0.3262,0.3262,-2.4318);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5D5D5D").s().p("AgqgJIA6gfIAbAyIg6Afg");
	this.shape_14.setTransform(71.5074,109.149,0.3262,0.3262,-2.4318);

	this.instance_4 = new lib.Mesh_4();
	this.instance_4.setTransform(71.15,105,0.3265,0.3265,-2.435);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAgIALhAIAEABIgLBAg");
	this.shape_15.setTransform(1.8837,7.2976,0.3261,0.3261,-152.4385);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSAeIAMhAIAZAFIgLBAg");
	this.shape_16.setTransform(1.1535,6.7234,0.3261,0.3261,-152.4385);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5D5D5D").s().p("AghAbIAMhAIA3AKIgMBBg");
	this.shape_17.setTransform(1.337,6.8651,0.3261,0.3261,-152.4385);

	this.instance_5 = new lib.Mesh_2();
	this.instance_5.setTransform(3.8,7.45,0.3264,0.3264,-152.4477);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAUIAygqIADADIgyAqg");
	this.shape_18.setTransform(46.2015,50.9841,0.3262,0.3262,177.5602);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AghALIAxgqIASAVIgxAqg");
	this.shape_19.setTransform(46.8268,51.6757,0.3262,0.3262,177.5602);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5D5D5D").s().p("AgrAAIAygrIAlAsIgyArg");
	this.shape_20.setTransform(46.664,51.4949,0.3262,0.3262,177.5602);

	this.instance_6 = new lib.Mesh_1();
	this.instance_6.setTransform(46.8,56.45,0.3265,0.3265,177.5597);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgOAdIAag7IADABIgaA8g");
	this.shape_21.setTransform(93.1182,177.5248,0.3262,0.3262,-137.4377);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAYIAag7IAZALIgaA8g");
	this.shape_22.setTransform(93.4776,178.3753,0.3262,0.3262,-137.4377);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5D5D5D").s().p("AgnATIAbg8IA0AYIgbA7g");
	this.shape_23.setTransform(93.3821,178.1658,0.3262,0.3262,-137.4377);

	this.instance_7 = new lib.Mesh_6();
	this.instance_7.setTransform(89.3,183.65,0.3264,0.3264,-137.4423);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgHAgIALhAIAEABIgLBAg");
	this.shape_24.setTransform(139.4467,234.4337,0.3263,0.3263,-137.4369);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSAeIAMhAIAZAFIgLBAg");
	this.shape_25.setTransform(138.8896,233.6895,0.3263,0.3263,-137.4369);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5D5D5D").s().p("AghAbIAMhAIA3AKIgMBBg");
	this.shape_26.setTransform(139.0303,233.8741,0.3263,0.3263,-137.4369);

	this.instance_8 = new lib.Mesh_2();
	this.instance_8.setTransform(141.3,235.1,0.3265,0.3265,-137.4394);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPAdIAbg7IAEACIgaA7g");
	this.shape_27.setTransform(507.9869,387.4323,0.3263,0.3263,-17.4402);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgZAYIAag7IAZALIgaA8g");
	this.shape_28.setTransform(507.0704,387.3184,0.3263,0.3263,-17.4402);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5D5D5D").s().p("AgnATIAcg8IAzAYIgbA7g");
	this.shape_29.setTransform(507.2996,387.3404,0.3263,0.3263,-17.4402);

	this.instance_9 = new lib.Mesh_7();
	this.instance_9.setTransform(504.45,381.05,0.3266,0.3266,-17.4393);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOAdIAag7IADABIgaA8g");
	this.shape_30.setTransform(431.0716,356.9937,0.3263,0.3263,-17.4402);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZAYIAag7IAZALIgaA8g");
	this.shape_31.setTransform(430.1551,356.8797,0.3263,0.3263,-17.4402);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5D5D5D").s().p("AgnATIAbg8IA0AYIgbA7g");
	this.shape_32.setTransform(430.3843,356.9018,0.3263,0.3263,-17.4402);

	this.instance_10 = new lib.Mesh_6();
	this.instance_10.setTransform(427.25,350.35,0.3266,0.3266,-17.4393);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQAcIAdg5IAEACIgeA5g");
	this.shape_33.setTransform(569.1008,355.1325,0.3263,0.3263,-17.4402);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgaAXIAdg5IAYAMIgdA6g");
	this.shape_34.setTransform(568.1852,354.9669,0.3263,0.3263,-17.4402);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5D5D5D").s().p("AgoAQIAfg6IAyAbIgfA6g");
	this.shape_35.setTransform(568.4116,355.007,0.3263,0.3263,-17.4402);

	this.instance_11 = new lib.Mesh_5();
	this.instance_11.setTransform(566.05,348.7,0.3266,0.3266,-17.4393);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdAOIA5geIACADIg5Aeg");
	this.shape_36.setTransform(396.7421,342.2842,0.3263,0.3263,-17.4402);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgjADIA6geIAMAZIg4Aeg");
	this.shape_37.setTransform(396.0774,341.638,0.3263,0.3263,-17.4402);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5D5D5D").s().p("AgqgJIA6gfIAbAyIg6Afg");
	this.shape_38.setTransform(396.2499,341.8061,0.3263,0.3263,-17.4402);

	this.instance_12 = new lib.Mesh_4();
	this.instance_12.setTransform(395.15,337.5,0.3266,0.3266,-17.4393);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFgfIAEgBIAHBBIgEAAg");
	this.shape_39.setTransform(521.753,346.8396,0.3263,0.3263,-17.4402);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgRgeIAagDIAJBAIgaADg");
	this.shape_40.setTransform(522.5982,346.4544,0.3263,0.3263,-17.4402);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5D5D5D").s().p("AgggcIA4gIIAJBBIg4AIg");
	this.shape_41.setTransform(522.3822,346.5565,0.3263,0.3263,-17.4402);

	this.instance_13 = new lib.Mesh_3();
	this.instance_13.setTransform(520.7,347.4,0.3266,0.3266,-17.4393);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgHAgIALhAIAEABIgLBAg");
	this.shape_42.setTransform(317.2315,373.5772,0.3263,0.3263,-17.4402);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgSAeIAMhAIAZAFIgLBAg");
	this.shape_43.setTransform(318.1545,373.4668,0.3263,0.3263,-17.4402);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5D5D5D").s().p("AghAbIAMhAIA3AKIgMBBg");
	this.shape_44.setTransform(317.9244,373.4963,0.3263,0.3263,-17.4402);

	this.instance_14 = new lib.Mesh_2();
	this.instance_14.setTransform(315.6,374.45,0.3266,0.3266,-17.4393);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgaAUIAygqIADADIgyAqg");
	this.shape_45.setTransform(361.2818,372.6831,0.3263,0.3263,-17.4402);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AghALIAxgqIASAVIgxAqg");
	this.shape_46.setTransform(360.4986,372.1767,0.3263,0.3263,-17.4402);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5D5D5D").s().p("AgrAAIAygrIAlAsIgyArg");
	this.shape_47.setTransform(360.7027,372.3092,0.3263,0.3263,-17.4402);

	this.instance_15 = new lib.Mesh_1();
	this.instance_15.setTransform(358.75,367.5,0.3266,0.3266,-17.4393);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgaAUIAygqIADADIgyAqg");
	this.shape_48.setTransform(490.9061,353.2333,0.3263,0.3263,-17.4402);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AghALIAxgqIASAVIgxAqg");
	this.shape_49.setTransform(490.1229,352.727,0.3263,0.3263,-17.4402);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5D5D5D").s().p("AgrAAIAygqIAlArIgyAqg");
	this.shape_50.setTransform(490.3245,352.8517,0.3263,0.3263,-17.4402);

	this.instance_16 = new lib.Mesh_0();
	this.instance_16.setTransform(488.7,347.9,0.3266,0.3266,-17.4393);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgaAUIAygqIADADIgyAqg");
	this.shape_51.setTransform(330.7903,321.33,0.3263,0.3263,-17.4402);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AghALIAygqIARAVIgyAqg");
	this.shape_52.setTransform(330.007,320.8236,0.3263,0.3263,-17.4402);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5D5D5D").s().p("AgrAAIAygrIAlAsIgyAqg");
	this.shape_53.setTransform(330.2111,320.9562,0.3263,0.3263,-17.4402);

	this.instance_17 = new lib.Mesh();
	this.instance_17.setTransform(328.6,316.3,0.3266,0.3266,-17.4393);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.instance_16},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.instance_15},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.instance_14},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.instance_13},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.instance_12},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.instance_11},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_10},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_9},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_8},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_7},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_6},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_5},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_4},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_3},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_2},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.lamp_2, new cjs.Rectangle(0,0,800.5,388.5), null);


(lib.HNY_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EAj9Ab+IAsg/QA3hTA9hpQDElPCzmkQCEk1DgjqQCjiqD8ikQAqgcCchhQBzhIA9gsQCyiBA4iEQBskCgZi3QgJg5gXg6QgZhAgCgGA19VkQhZgcithyQlbjlmqmwQkZkdicmjQgxiEhAjfQhIj5gfhbQiDl9jgjOQkjkMoyhw");
	this.shape.setTransform(142.0926,-137.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGCFQgGgDgBgGQgKgvgCgwQgDg8ANg2QAHgZAIgRQABgFAHgCQAGgBAFADQAGADABAGQACAGgDAGIgCACIAAABIgCAGQgEAKgFATIgFAdIAAACIAAACIgCANQgFBCAOBNQACAGgDAGQgDAEgGACIgEABQgDAAgDgCg");
	this.shape_1.setTransform(252.9113,63.0888,0.3401,0.3401,-13.2973);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFmGYQg3gahJg4Ig5gsQgggZgagRIg5geIgfgKIgPgEQgIgBgJAAQgWAAgiAJQgsALgMACQhQANgygkQg3gogPg/QgMgvAEhAIAAgIQgLAXgLAUQgxBXhBAwQghAYgmAMQgrANgkgGQg2gJgWhIQgQg2ADhaQgMAggLAXQgZA3gfAnQglAvhCAeQhHAjg8gNQgygKgZgmQgLgPgCgSQgDgTAKgOQAIgMANAHQANAIgIAMIgCADIgBACIgBADIAAAHIACAFQADANAOAOQARAQAaAGQAXAFAbgDQBCgJBCg2QAagVAZgrQArhJAkh/IAMgpIAGgpQAShxAahiQAEgPAOAFQANAEgCAOQgHA2gOBFQgNBFgRA+QgNBaAABFQgBAmAFAkQADASAEAPIAIAZIAHANIAFAIIAMAMIAEADIAHADIACABQAGACAFABIACAAIADAAIAHAAIASgBQBFgHA9g9QAygzArhYQAVgsASg1QAKg7ARhFQAShGASg3QAEgOANAEQAOAEgCAOIgBAEQgRBzgnB3IgGARQgQBfAEBEQADA5ARAeQASAfAcATQAdAUAjACQAZABAjgIIA7gOQAtgKAoAMQA2APBAAuIA6AsIA5ArQBHA0A5AVQBPAdBVgKQBjgMB2hAQCGhIChiNQALgKAKALQALALgLAJQgwAqgiAbQiZB6h+A5Qh0A0hiABQhVAAhPglg");
	this.shape_2.setTransform(335.3302,45.4781,0.3401,0.3401,-13.2973);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmaJKQgXgEgWgTQgngigOhGQgOhLAYhPQAbhaBHhMQAdgfBEgzIAOgKQguAEgtgYQglgSgbglQgYghgOgsQgdhhAdhrQAPg6Agg0QAgg0AsgoQAtgpAygUQA5gVA2AJQAxAIAmAkQAnAkATA8QALAlgDAuQgCAjgNAwQgMAxgVA+IgUA3IBWg/QgCgdADgeQAJhkBChoQA/hjBkggQBGgWA2APQAfAJAbAVQAZAVASAdQApBGgLBoQgGA7gXBCQgZBEgdArQg8BWhWAeQgkAOgkABQgoACghgNQgsgRgaghQgXgdgNgnQgJgdgDgbIhqBNIgCAFQhBCzgbBbQgMAsgXBXQgVBNgZAyQgpBWg2AXQgUAJgSAAIgQgCgAmYDCIgRAYQgMATgLAVIgJAUIAAAAIgHARQgHAVgEASIgGAdIAAACIAAAFQgEAgAEAmIAAABIAAAAIAGAbIAJAaIAAACIABABIAOAaIAKAMIAIAIIADACIABABIADACIAKAFIACABIAKADIADAAQgCAAABABIACAAIANgBIACAAIALgDIADgBIARgJIAFgEIABAAIADgDQAHgGAEgEIALgNIADgEIAAABIAHgKQAOgVAIgQIAKgVIAJgWQALgbAJgdQAIgbALgrIAShGQAWhMAWg/QAQgvAahGIghAXQgOAKgOAJIgXARQhSA8gdAXIgDACQAEgEgEADIgiAeQgRAQgTAWIgJALIAAABIAAgBgAjRosIgYAFQgxAOgsAlQgvAnggAyQgeAvgPAzQgIAcgEAYIgBAHIAAADIgDAmQAAAbACAUIAIArIAMAiIACAFQAJAUALAQIAFAHIADADIAQASIAHAGIAEADIAAAAIABABIAQAKQAUAKAWAEIAGACIADAAIALABQAMABAKgCIAEAAIAPgDIAVgGIASgHIATgLIAWgPQACgCgCABIAKgIQASgPALgMIAYgbIAGgHIABgCIABgCIAIgLQAJgKAGgMIABgBIAJgZQAWg+ALgpQAHgXAFgXIAGgmIABgCQACgXAAgQIgBgWIgBgCIgBgHQgEgWgLgWIgMgXIgIgLIgBgCIgCgCIgDgEIgQgRIgRgNQgKgHgKgEIgDgBIgQgGIgRgDIgDgBIgWgBgACSAFQAQAGATADIABAAIALABIAggBIABAAIACAAIgBAAIAMgCQAQgDATgHIAJgDIAAAAIAGgCIASgJQAkgVAeggQAigkAXgwQAbg0APhDQAOg4gCgvIgBgXIgDgSQgEgUgGgTIgDgIIgBgBIAAgBIgCgEIgIgPIgJgOIgDgEQABABAAAAQAAAAAAAAQAAAAAAAAQgBgBAAgBIgFgFQgLgNgLgIQADACgCgCIgCgBIgCgCIgHgEIgMgGIgGgDIgCgBIgOgFIgNgDIgIgBQgKgBgOABIgSABIgBAAIgIABQgYAFgMAEIgTAHIgCABIgOAHQgqAVgjAlQgcAggcA0Qg5BpAJBrIAAADIABAcIADAPQADASAEALIAHAUIAAABIAAgBIAEAJQAHAQALAOIACACIAQARIAGAFIACABIAGAFIARAJIAFACIABAAIgBAAg");
	this.shape_3.setTransform(288.0703,62.5422,0.3401,0.3401,-13.2973);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("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");
	this.shape_4.setTransform(205.2988,52.4898,0.3401,0.3401,-13.2973);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AGpGZQgHgEgEgIQgEgHgCgJQgCgTALgcQAIgYARgaIAPgWIAAgDIABhWIABgeQgUAXgZAXQgyAtgzAYQg8Adg6gFQgzgEgwgVQgygVgjgkQgVgVgOgbQgNgagGgeQgGgdADgnQACgfAGgfQALgxAZgpQAVgjAdgZIgFgCQhjgXiLgnQh6gih5gkIi+g5IhMgYQgFgCACgEQABgFAFABIARAGICDAoIDUA/QCGAmBrAdQBbAZBDAQIAFgEQAfgXAmgNQAkgNAngDQAhgCAcAFQAZAGAMAMQAHAGABALQAEAYgLAOQgLAPgZAFQgRADgagBQgkgCg6gNIhJgQQgXASgRAXQgcAngPAyQgRA7AEA+QACAeALAcQALAdASAWQAhAoA1AZQAsAUAvAHQAyAGAygRQA3gUA3guQAmggAdgkIABgaQACgpAGgfQADgWAFgKQAKgXAOAFQALAEAFAOQAEAKABANQABANgHAUQgIAUgOAXQgLASgNAQIgCA3IgBBAIAIgJQAQgVAXgaIApgtIAjgoIAJgMIAEgdIAEglQACgVAGgKQAEgIAIgCQAIgDAGAHQAKANgFAZQgFAVgOAXIgSAZIgBALQgJBaAAAzQAAAhAEAXIAEASQADALAFAGQAFAHALADQAKACAKgCQASgEANgTQAOgXADgeQAAgFAFAAQAFAAAAAFQgDAdgNAZQgNAWgSAHQgKAFgNgBQgNgBgKgFQgMgHgHgVQgFgTgCgeQgCggACgmIAFhGIADgaIhRBaQgdAhgUAcIgBABIABAvIABAWIAAAVQgCAggOAOQgFAGgIACIgGAAQgEAAgFgBgAG7EuQgPAagGAXQgIAbAJAPQAEAFAFACQAGACAFgEQAJgHAEgPQACgKABgQIgBgWIAAgXIgBgaIgOAXgAHwgMQgEABgDAGQgFAIgDAOQgCAIgCAQQgEAegDAoIAGgIQAQgWAJgVQAKgVABgNQABgLgEgNQgFgLgFgDIgBgBIgCABgAJzgBQgCABgCAFQgDAHgCAKIgCASIgFAmIAKgPQAMgVADgQQACgJgBgIQgBgKgGgCIgBAAIgCACgADUjuQgdABgfAJQgoALgiAWIgHAGIAqAJIAoAJIAoAHQAbAEAWAAQAZAAAPgHQASgHADgQQACgIgCgMIgBgEIAAAAIgBgDIgCgCIgDgCIgCgCIgDgCQgIgFgKgDQgWgGgZAAIgOABg");
	this.shape_5.setTransform(70.8833,41.0477);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HNY_1, new cjs.Rectangle(-289.1,-317.1,862.5,402.3), null);


(lib.lamp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lamp_2();
	this.instance.setTransform(84.35,-120.4,1,1,0,0,0,400.1,194.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// Light_e
	this.instance_1 = new lib.Light_e();
	this.instance_1.setTransform(-311.05,-309.05,1,1,0,0,0,16.4,16.4);
	this.instance_1.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_1.cache(-2,-2,37,37);

	this.instance_2 = new lib.Light_e();
	this.instance_2.setTransform(480.35,-229.45,1,1,0,0,0,16.4,16.4);
	this.instance_2.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_2.cache(-2,-2,37,37);

	this.instance_3 = new lib.Light_e();
	this.instance_3.setTransform(209.65,32.95,1,1,0,0,0,16.4,16.4);
	this.instance_3.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_3.cache(-2,-2,37,37);

	this.instance_4 = new lib.Light_e();
	this.instance_4.setTransform(3.25,60.75,1,1,0,0,0,16.4,16.4);
	this.instance_4.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_4.cache(-2,-2,37,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},31).wait(29));

	// Light_g
	this.instance_5 = new lib.light_g();
	this.instance_5.setTransform(-270.75,-261.45,1,1,0,0,0,15.7,15.7);
	this.instance_5.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_5.cache(-2,-2,35,35);

	this.instance_6 = new lib.light_g();
	this.instance_6.setTransform(460.05,-183.3,1,1,0,0,0,15.7,15.7);
	this.instance_6.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_6.cache(-2,-2,35,35);

	this.instance_7 = new lib.light_g();
	this.instance_7.setTransform(177.65,36.55,1,1,0,0,0,15.7,15.7);
	this.instance_7.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_7.cache(-2,-2,35,35);

	this.instance_8 = new lib.light_g();
	this.instance_8.setTransform(48,54.75,1,1,0,0,0,15.7,15.7);
	this.instance_8.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_8.cache(-2,-2,35,35);

	this.instance_9 = new lib.light_g();
	this.instance_9.setTransform(16.7,4.25,1,1,0,0,0,15.7,15.7);
	this.instance_9.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_9.cache(-2,-2,35,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},31).wait(29));

	// Light_r
	this.instance_10 = new lib.Light_r();
	this.instance_10.setTransform(-243.2,-206.75,1,1,0,0,0,14.7,14.7);
	this.instance_10.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_10.cache(-2,-2,33,33);

	this.instance_11 = new lib.Light_r();
	this.instance_11.setTransform(402.55,-153,1,1,0,0,0,14.7,14.7);
	this.instance_11.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_11.cache(-2,-2,33,33);

	this.instance_12 = new lib.Light_r();
	this.instance_12.setTransform(254.2,37.45,1,1,0,0,0,14.7,14.7);
	this.instance_12.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_12.cache(-2,-2,33,33);

	this.instance_13 = new lib.Light_r();
	this.instance_13.setTransform(83.05,24.35,1,1,0,0,0,14.7,14.7);
	this.instance_13.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_13.cache(-2,-2,33,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).to({state:[]},31).wait(29));

	// Light_b
	this.instance_14 = new lib.light_b();
	this.instance_14.setTransform(-224.55,-136.5,1,1,0,0,0,15,15);
	this.instance_14.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_14.cache(-2,-2,34,34);

	this.instance_15 = new lib.light_b();
	this.instance_15.setTransform(358.55,-97.65,1,1,0,0,0,15,15);
	this.instance_15.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_15.cache(-2,-2,34,34);

	this.instance_16 = new lib.light_b();
	this.instance_16.setTransform(192.5,69.5,1,1,0,0,0,15,15);
	this.instance_16.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_16.cache(-2,-2,34,34);

	this.instance_17 = new lib.light_b();
	this.instance_17.setTransform(116.5,38,1,1,0,0,0,15,15);
	this.instance_17.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_17.cache(-2,-2,34,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},31).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-338.4,-336.4,850.4,435.9);


(lib.HNY = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Isolation_Mode
	this.instance = new lib.lamp();
	this.instance.setTransform(214.4,47.7,1,1,0,0,0,128.3,36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.HNY_1();
	this.instance_1.setTransform(186.5,42.6,1,1,0,0,0,186.5,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HNY, new cjs.Rectangle(-288.6,-325.6,885.7,428.8), null);


// stage content:
(lib.gr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HNY();
	this.instance.setTransform(493.9,132.5,2,2,0,0,0,186.5,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(43.6,-468,1257.4,706.6);
// library properties:
lib.properties = {
	id: '97D162834277B14D8069DB7A27C0BC3C',
	width: 1000,
	height: 250,
	fps: 30,
	color: "#000000",
	opacity: 0.00,
	manifest: [
		{src:"img/page/gr_atlas_1.png", id:"gr_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['97D162834277B14D8069DB7A27C0BC3C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;