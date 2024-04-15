/* eslint-disable no-var */
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"kubok_atlas_1", frames: [[0,0,228,1037]]}
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



(lib.kybok = function() {
	this.initialize(ss["kubok_atlas_1"]);
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


(lib.s2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,137.9).s().p("AqMSwQnwkOihofQigoeEOnxQEOnwIgihQIdigHxEOQHwEPCgIfQChIdkOHxQkOHwofCgQjLA8jCAAQlKAAk4ipg");
	this.shape.setTransform(136.9,136.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s2, new cjs.Rectangle(0,0,273.8,273.8), null);


(lib.sl4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.s2();
	this.instance.setTransform(535.3,375.8,1.6347,0.6234,-29.9995,0,0,137,137);
	this.instance.filters = [new cjs.BlurFilter(40, 40, 1)];
	this.instance.cache(-2,-2,278,278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sl4, new cjs.Rectangle(278.7,170.1,517,415), null);


(lib.kubok_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2_copy_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjnATIHPhkIjECjg");
	mask.setTransform(39.5,9.625);

	// Слой_6_copy_3_copy_copy
	this.instance = new lib.sl4();
	this.instance.setTransform(6.1,-65.8,0.4647,0.7793,-153.3988,0,0,560.1,350.2);
	this.instance.alpha = 0.6719;
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({regY:350.4,scaleX:0.5707,scaleY:0.7652,rotation:-167.61,x:109.55,y:194.7},15).to({_off:true},1).wait(34));

	// Layer_2_copy (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AB2iMIAFDaIj1A/g");
	mask_1.setTransform(50.875,15.525);

	// Слой_6_copy_3_copy_copy_copy
	this.instance_1 = new lib.sl4();
	this.instance_1.setTransform(38.1,-47.8,0.4647,0.7793,-153.3988,0,0,560.1,350.2);
	this.instance_1.alpha = 0.6719;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regY:350.4,scaleX:0.5707,scaleY:0.7652,rotation:-167.61,x:86.6,y:91.7},15).to({_off:true},1).wait(30));

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AjZhXIGzBuIkIBBg");
	mask_2.setTransform(84.5,10.225);

	// Слой_6_copy_3_copy
	this.instance_2 = new lib.sl4();
	this.instance_2.setTransform(22.7,34.4,0.4647,0.7793,-61.8027,0,0,560.2,350.3);
	this.instance_2.alpha = 0.6719;
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({regY:350.4,scaleX:0.5707,scaleY:0.7652,rotation:-76.0147,x:204.05,y:-68.3},15).to({_off:true},1).wait(25));

	// UP (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AgRBGIgFjaIjyEZIAuh2IDEijIEfEpg");
	mask_3.setTransform(65.025,16.3);

	// Слой_6_copy_3
	this.instance_3 = new lib.sl4();
	this.instance_3.setTransform(-55.05,-42.55,0.4647,0.7793,-21.3081,0,0,560.3,350.3);
	this.instance_3.alpha = 0.6719;
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(20).to({_off:false},0).to({regX:560.2,regY:350.4,scaleX:0.5707,scaleY:0.7652,rotation:-63.0344,x:173.45,y:-3.4},15).to({_off:true},1).wait(29));

	// Left (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("EgGJghaIEOA6IguB2UACvAgoAGEAfdUgI8ghBgDXgh0g");
	mask_4.setTransform(55.525,225.925);

	// Слой_6_copy
	this.instance_4 = new lib.sl4();
	this.instance_4.setTransform(-7.25,-127.5,0.4647,0.4647,-64.1013,0,0,560.2,350.4);
	this.instance_4.alpha = 0.6719;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({regX:560.1,rotation:-73.5626,x:110.05,y:566.35},15).to({_off:true},1).wait(27));

	// Layer_5 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("Alx+nQF7duFodHIjTCaUgHfgqagAxgS1g");
	mask_5.setTransform(79.05,243.825);

	// Слой_6_copy_copy
	this.instance_5 = new lib.sl4();
	this.instance_5.setTransform(-7.25,-127.5,0.4647,0.4647,-64.1013,0,0,560.2,350.4);
	this.instance_5.alpha = 0.6719;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(23).to({_off:false},0).to({regX:560.1,rotation:-73.5626,x:148.8,y:566.35},15).to({_off:true},1).wait(26));

	// Layer_4 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("AmAZyMACSgg8QAFpWg2pRQEFbzGbXwg");
	mask_6.setTransform(56.45,274.85);

	// Слой_6_copy_copy
	this.instance_6 = new lib.sl4();
	this.instance_6.setTransform(-7.25,-127.5,0.4647,0.4647,-64.1013,0,0,560.2,350.4);
	this.instance_6.alpha = 0.6719;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).to({regX:560.1,regY:350.3,scaleX:0.828,scaleY:0.8211,rotation:-73.5631,x:128.2,y:709.65},15).to({_off:true},1).wait(22));

	// Layer_9 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("AgTsqIh1h6IERg+QisOig5QjQgRuHBauGg");
	mask_7.setTransform(93.5,112.325);

	// Слой_6_copy_copy_copy
	this.instance_7 = new lib.sl4();
	this.instance_7.setTransform(81.35,-140.55,0.4647,0.4647,-62.1004,0,0,560.1,350.4);
	this.instance_7.alpha = 0.6719;
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({_off:false},0).to({rotation:-55.8508,x:82,y:358.3},15).to({_off:true},1).wait(24));

	// Layer_8 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("AiNz9IEbBOQiYSiB/ULQj5/wgJoLg");
	mask_8.setTransform(77.35,151.1625);

	// Слой_6_copy_copy_copy
	this.instance_8 = new lib.sl4();
	this.instance_8.setTransform(63.15,-127.5,0.4647,0.4647,-64.1013,0,0,560.2,350.4);
	this.instance_8.alpha = 0.6719;
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({regX:560.1,rotation:-73.5626,x:95.2,y:385.1},15).to({_off:true},1).wait(20));

	// Layer_6 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AkK1JID3g/QBaVKDEXHg");
	mask_9.setTransform(65.2,165.05);

	// Слой_6_copy_copy
	this.instance_9 = new lib.sl4();
	this.instance_9.setTransform(25.9,-127.5,0.4647,0.4647,-64.1013,0,0,560.2,350.4);
	this.instance_9.alpha = 0.6719;
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(25).to({_off:false},0).to({regX:560.1,rotation:-73.5626,x:133.15,y:424.7},15).to({_off:true},1).wait(24));

	// Layer_1
	this.instance_10 = new lib.kybok();
	this.instance_10.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.1,518.5);


// stage content:
(lib.kubok = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.kubok_1();
	this.instance.setTransform(61,262.2,1,1,0,0,0,57,259.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(65,268,55.099999999999994,253.5);
// library properties:
lib.properties = {
	id: '2715B103A07F194DA5982C08FAC6EDC6',
	width: 122,
	height: 530,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"img/kubok_atlas_1.png", id:"kubok_atlas_1"}
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
an.compositions['2715B103A07F194DA5982C08FAC6EDC6'] = {
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