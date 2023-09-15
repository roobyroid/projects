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
	this.shape.graphics.f("#FFFFFF").s().p("AiSI3IAAxtIElAAIAARtg");
	this.shape.setTransform(31.05,56.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16.4,0,29.300000000000004,113.3);


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
	mask.graphics.p("AE2CiIiaAAIAAjfIAAgFIGVAAICaAAIAADfIAAAFImVAAg");
	mask.setTransform(71.4551,16.1758);

	// Layer_3
	this.instance = new lib.blick();
	this.instance.setTransform(-44.7,-3.4,1,1,14.9983,0,0,30.9,56.6);
	this.instance.alpha = 0.6797;
	this.instance._off = true;
	this.instance.filters = [new cjs.BlurFilter(36, 36, 1)];
	this.instance.cache(14,-2,33,117);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({x:303.25,y:38.1},21,cjs.Ease.cubicOut).wait(61));

	// TXT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRATQgIgHAAgMQAAgLAIgHQAHgIALAAQAFAAAEACIAHADIAFAFIADAEIABAFIgPAAQgDgFgHAAQgEAAgDADQgDAEAAAFQAAAGADAEQADADAEAAQAHAAADgEIAPAAIgBADIgDAFIgEAFIgHADQgFACgFAAQgLAAgHgIg");
	this.shape.setTransform(127.325,25.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAaIAKgRIgXgiIASAAIANAVIALgVIARAAIgfAzg");
	this.shape_1.setTransform(121.5,25.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALAaIAAgUIgVAAIAAAUIgPAAIAAgzIAPAAIAAAUIAVAAIAAgUIAPAAIAAAzg");
	this.shape_2.setTransform(115.325,25.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTATQgIgHAAgMQAAgLAIgHQAIgIALAAQAMAAAIAIQAIAHAAALQAAAMgIAHQgIAIgMAAQgLAAgIgIgAgIgJQgDAEAAAFQAAAGADAEQADADAFAAQAGAAADgDQAEgEAAgGQAAgFgEgEQgDgDgGAAQgFAAgDADg");
	this.shape_3.setTransform(109.125,25.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAaIAAgzIAsAAIAAANIgeAAIAAAGIAPAAQAKAAAFAEQAFADAAAIQAAAIgFAFQgFAEgKAAgAgKANIAOAAQAGAAAAgEQAAgEgGAAIgOAAg");
	this.shape_4.setTransform(103.225,25.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAaIAAgzIAOAAIAAAPIAPAAQAKAAAFAFQAFAFAAAIQAAAIgFAFQgFAFgKAAgAgKANIANAAQAHAAAAgFQAAgGgHAAIgNAAg");
	this.shape_5.setTransform(135.575,17.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGAaIAAgmIgTAAIAAgNIAzAAIAAANIgTAAIAAAmg");
	this.shape_6.setTransform(129.7,17.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALAaIAAgeIgVAeIgPAAIAAgzIAPAAIAAAeIAVgeIAPAAIAAAzg");
	this.shape_7.setTransform(123.675,17.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKAaIAAgRIgMAAQgLAAgFgEQgGgFAAgKIAAgPIAPAAIAAAPQgBAEADACQACACAFAAIAEgBIAEAAIACAAIAAgWIAPAAIAAAzg");
	this.shape_8.setTransform(117.5,17.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAaIAKgRIgXgiIASAAIANAVIALgVIARAAIgfAzg");
	this.shape_9.setTransform(111.6,17.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAaIAAgPIABAAQAEAAABgCQACgCAAgEIADgcIAqAAIAAAzIgPAAIAAgmIgOAAIgCAQIgCAKIgDAGQgDAEgDABIgKABg");
	this.shape_10.setTransform(105.325,17.15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTATQgIgHAAgMQAAgLAIgHQAIgIALAAQAMAAAIAIQAIAHAAALQAAAMgIAHQgIAIgMAAQgLAAgIgIgAgIgJQgDAEAAAFQAAAGADAEQADADAFAAQAGAAADgDQAEgEAAgGQAAgFgEgEQgDgDgGAAQgFAAgDADg");
	this.shape_11.setTransform(99.275,17.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AALAaIAAgmIgVAAIAAAmIgOAAIAAgzIAxAAIAAAzg");
	this.shape_12.setTransform(93.15,17.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(90));

	// btn_copy
	this.instance_1 = new lib.btn2();
	this.instance_1.setTransform(115,20.95,0.226,0.5205,0,0,0,123.5,22.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87.1,9.1,55.80000000000001,23.299999999999997);


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
p.nominalBounds = new cjs.Rectangle(87.1,9.1,55.80000000000001,23.299999999999997);


// stage content:
(lib.btn_side = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(125.65,55.7,1.0167,1.0167,0,0,0,115,20.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:21.8,scaleX:4.0424,scaleY:4.0424,x:125.75,y:55.4},11,cjs.Ease.backOut).wait(213).to({regY:20.8,scaleX:1.0167,scaleY:1.0167,x:122.95,y:55.7},9,cjs.Ease.backIn).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,247.3,105.6);
// library properties:
lib.properties = {
	id: '9B1A6E81559748418E14B248B8AA6F9C',
	width: 250,
	height: 104,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
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
an.compositions['9B1A6E81559748418E14B248B8AA6F9C'] = {
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