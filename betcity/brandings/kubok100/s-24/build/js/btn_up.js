(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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


(lib.btn2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#DA5035").s().p("AoqDcIqoAAIAAmtIAAgKIb9AAIKoAAIAAGtIAAAKI79AAg");
	this.shape.setTransform(123.5,22);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn2, new cjs.Rectangle(0,0,247,44), null);


(lib.blick = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ak1I3IAAxtIJrAAIAARtg");
	this.shape.setTransform(31,56.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62,113.3);


(lib.btn1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn_copy (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApMDcIrRAAIAAmDIAAgKIdqAAILRAAIAAGEIAAAJI9qAAg");
	mask.setTransform(123.9992,22.0001);

	// Layer_3
	this.instance = new lib.blick();
	this.instance.setTransform(-44.7,-3.4,1,1,14.9983,0,0,30.9,56.6);
	this.instance.alpha = 0.6797;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(36, 36, 1)];
	this.instance.cache(-2,-2,66,117);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:303.25,y:38.1},21,cjs.Ease.cubicOut).wait(61));

	// TXT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAwQgTgTAAgdQAAgcATgTQASgSAdAAQAMAAALAEQAKACAGAGQAHAFAFAGQAFAGACAGQACAFABAFIglAAQgIgMgQAAQgNAAgHAJQgIAKAAANQAAAPAIAIQAHAKANAAQAQAAAIgMIAlAAIgDAKIgGALQgFAGgHAGQgGAFgLAEQgKADgNAAQgdAAgSgSg");
	this.shape.setTransform(213.475,23.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBAIAagrIg5hUIAsAAIAgAyIAfgyIAoAAIhMB/g");
	this.shape_1.setTransform(199.025,23.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBAIAAgwIg1AAIAAAwIglAAIAAh/IAlAAIAAAwIA1AAIAAgwIAlAAIAAB/g");
	this.shape_2.setTransform(183.675,23.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwAwQgTgTgBgdQABgdATgSQATgSAdAAQAeAAATASQATASABAdQgBAdgTATQgTASgeAAQgdAAgTgSgAgWgXQgIAKAAANQAAAOAIAKQAJAJANAAQAOAAAIgJQAJgKAAgOQAAgNgJgKQgIgJgOAAQgNAAgJAJg");
	this.shape_3.setTransform(168.25,23.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag9BAIAAh/IBwAAIAAAgIhMAAIAAAQIAnAAQAXAAAMAKQAOAJAAASQAAAVgOALQgMAKgXAAgAgZAgIAkAAQANABAAgLQAAgKgNAAIgkAAg");
	this.shape_4.setTransform(153.55,23.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag+BAIAAh/IAlAAIAAAmIAmAAQAYAAANALQANAMgBAVQABAWgNALQgNAMgYAAgAgZAgIAhAAQARAAAAgNQAAgOgRAAIghAAg");
	this.shape_5.setTransform(134.6,23.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBAIAAhfIguAAIAAggICAAAIAAAgIguAAIAABfg");
	this.shape_6.setTransform(119.95,23.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAcBAIAAhMIg3BMIglAAIAAh/IAlAAIAABMIA3hMIAlAAIAAB/g");
	this.shape_7.setTransform(105.05,23.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZBAIAAgrQgRADgPgBQgbABgOgMQgNgMAAgbIAAgkIAkAAIAAAkQAAAKAGAFQAFAFALAAIANgBIALgCIAEAAIAAg1IAlAAIAAB/g");
	this.shape_8.setTransform(89.625,23.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqBAIAagrIg5hUIAsAAIAgAyIAfgyIAoAAIhMB/g");
	this.shape_9.setTransform(75.025,23.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhCBBIAAglIACAAQAJAAAEgFQAEgEABgMIAHhHIBqAAIAAB/IglAAIAAhfIgmAAIgEAqQgBAOgDAKQgDAJgGAIQgGAHgJAEQgJADgOAAg");
	this.shape_10.setTransform(59.375,23.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgwAwQgTgTAAgdQAAgdATgSQAUgSAcAAQAeAAATASQAUASgBAdQABAdgUATQgTASgeAAQgcAAgUgSgAgVgXQgJAKAAANQAAAOAJAKQAIAJANAAQAOAAAJgJQAIgKAAgOQAAgNgIgKQgJgJgOAAQgNAAgIAJg");
	this.shape_11.setTransform(44.45,23.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAaBAIAAhfIgzAAIAABfIglAAIAAh/IB9AAIAAB/g");
	this.shape_12.setTransform(29.125,23.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

	// btn_copy
	this.instance_1 = new lib.btn2();
	this.instance_1.setTransform(123.9,24.2,1.0611,0.9034,0,0,0,123.4,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,4.3,262.1,39.7);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BTN
	this.instance = new lib.btn1();
	this.instance.setTransform(123.7,21.8,1,1,0,0,0,123.7,21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9101,scaleY:0.9101,x:123.75,y:21.85},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,4.3,262.1,39.7);


// stage content:
(lib.btn_up = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// btn
	this.instance = new lib.btn();
	this.instance.setTransform(320.9,52.65,0.5693,0.5693,0,0,0,124,21.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:123.8,regY:21.8,scaleX:2.2637,scaleY:2.2637,x:320.95,y:51.85},11,cjs.Ease.backOut).wait(213).to({regX:123.7,scaleX:1.8979,scaleY:1.8979,x:320.85,y:52.75},0).to({regX:124,regY:21.9,scaleX:0.5693,scaleY:0.5693,x:320.9,y:52.65},9,cjs.Ease.backIn).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,639.1,105.3);
// library properties:
lib.properties = {
	id: 'BAE1D25AA5122B44BBA5F87421E81E5D',
	width: 640,
	height: 114,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['BAE1D25AA5122B44BBA5F87421E81E5D'] = {
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