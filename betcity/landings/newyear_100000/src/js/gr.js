/* eslint-disable no-var */
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"gr_atlas_1", frames: [[0,58,47,62],[0,0,59,56],[61,0,62,49],[49,58,43,63]]}
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



(lib.Blue = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Green = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Pink = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Yel = function() {
	this.initialize(ss["gr_atlas_1"]);
	this.gotoAndStop(3);
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


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhF3AP5IAA/xMCLvAAAIAAfxg");
	mask.setTransform(447.2,102.2);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(447.1713,101.9191);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0.5,894.4,203.4), null);


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

	// Layer_2
	this.instance = new lib.Yel();
	this.instance.setTransform(711.3,48.5,0.3936,0.3936,-149.9997);

	this.instance_1 = new lib.Yel();
	this.instance_1.setTransform(480.7,76.6,0.3936,0.3936,-14.9974);

	this.instance_2 = new lib.Pink();
	this.instance_2.setTransform(604.9,90.1,0.454,0.454,-35.7669);

	this.instance_3 = new lib.Blue();
	this.instance_3.setTransform(697.3,67.75,0.4605,0.4605,59.9991);

	this.instance_4 = new lib.Blue();
	this.instance_4.setTransform(440,155,0.4553,0.4553);

	this.instance_5 = new lib.Green();
	this.instance_5.setTransform(399,67,0.4607,0.4607);

	this.instance_6 = new lib.Green();
	this.instance_6.setTransform(63,119,0.4122,0.4122);

	this.instance_7 = new lib.Blue();
	this.instance_7.setTransform(242,75,0.4404,0.4404);

	this.instance_8 = new lib.Pink();
	this.instance_8.setTransform(152,32,0.4449,0.4449);

	this.instance_9 = new lib.Yel();
	this.instance_9.setTransform(-52,134,0.4427,0.4427);

	this.instance_10 = new lib.Green();
	this.instance_10.setTransform(-19,-19,0.4518,0.4518);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(60));

	// Layer_1
	this.instance_11 = new lib.ClipGroup();
	this.instance_11.setTransform(306.6,91.5,0.9014,0.9014,0,0,0,447.1,102);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(60));

	// Light_e
	this.instance_12 = new lib.Light_e();
	this.instance_12.setTransform(709.55,33.5,2.0424,2.0424,0,0,0,16.5,16.4);
	this.instance_12.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_12.cache(-2,-2,37,37);

	this.instance_13 = new lib.Light_e();
	this.instance_13.setTransform(492.85,86.05,2.0424,2.0424,0,0,0,16.4,16.4);
	this.instance_13.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_13.cache(-2,-2,37,37);

	this.instance_14 = new lib.Light_e();
	this.instance_14.setTransform(-40.85,149.8,2.0424,2.0424,0,0,0,16.4,16.5);
	this.instance_14.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_14.cache(-2,-2,37,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]}).to({state:[]},31).wait(29));

	// Light_g
	this.instance_15 = new lib.light_g();
	this.instance_15.setTransform(415.45,85.3,2.0424,2.0424,0,0,0,15.7,15.7);
	this.instance_15.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_15.cache(-2,-2,35,35);

	this.instance_16 = new lib.light_g();
	this.instance_16.setTransform(74.8,134.3,2.0424,2.0424,0,0,0,15.7,15.7);
	this.instance_16.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_16.cache(-2,-2,35,35);

	this.instance_17 = new lib.light_g();
	this.instance_17.setTransform(-6.9,-2.4,2.0424,2.0424,0,0,0,15.7,15.7);
	this.instance_17.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_17.cache(-2,-2,35,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15}]},31).wait(29));

	// Light_r
	this.instance_18 = new lib.Light_r();
	this.instance_18.setTransform(623.75,89.7,2.0424,2.0424,0,0,0,14.7,14.7);
	this.instance_18.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_18.cache(-2,-2,33,33);

	this.instance_19 = new lib.Light_r();
	this.instance_19.setTransform(168.45,43.05,2.0424,2.0424,0,0,0,14.7,14.7);
	this.instance_19.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_19.cache(-2,-2,33,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18}]}).to({state:[]},31).wait(29));

	// Light_b
	this.instance_20 = new lib.light_b();
	this.instance_20.setTransform(690.35,86.8,2.0424,2.0424,0,0,0,15,15);
	this.instance_20.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_20.cache(-2,-2,34,34);

	this.instance_21 = new lib.light_b();
	this.instance_21.setTransform(450.7,168.1,2.0424,2.0424,0,0,0,15,15);
	this.instance_21.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_21.cache(-2,-2,34,34);

	this.instance_22 = new lib.light_b();
	this.instance_22.setTransform(254.1,86.8,2.0424,2.0424,0,0,0,15,15);
	this.instance_22.filters = [new cjs.BlurFilter(21, 21, 1)];
	this.instance_22.cache(-2,-2,34,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]},31).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.4,-45.4,855.3,258.9);


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
	this.instance.setTransform(214.4,54.1,1,1,0,0,0,128.3,36.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HNY, new cjs.Rectangle(-10.3,-1.8,855.3,217.10000000000002), null);


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
	this.instance.setTransform(493.9,144.9,2,2,0,0,0,186.5,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(1002.8,311.1,792,164.2);
// library properties:
lib.properties = {
	id: '97D162834277B14D8069DB7A27C0BC3C',
	width: 1805,
	height: 510,
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