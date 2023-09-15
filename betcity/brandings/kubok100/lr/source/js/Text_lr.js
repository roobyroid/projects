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


(lib.T3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAmA5IAAhNIgdBNIgUAAIgchMIAABMIgeAAIAAhxIAwAAIAWA+IAXg+IAuAAIAABxg");
	this.shape.setTransform(89.45,15.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfA5IgHgQIgxAAIgGAQIgiAAIAwhxIAjAAIAwBxgAgOAOIAbAAIgNghg");
	this.shape_1.setTransform(74.5,15.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARA5IgsgyIAAAyIghAAIAAhxIAhAAIAAAwIAsgwIAqAAIg0A2IA2A7g");
	this.shape_2.setTransform(61.775,15.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrAqQgRgQAAgaQAAgZARgRQASgQAZAAQAaAAASAQQARARAAAZQAAAagRAQQgSARgaAAQgZAAgSgRgAgTgUQgHAIAAAMQAAANAHAIQAIAJALAAQAMAAAIgJQAHgIAAgNQAAgMgHgIQgIgJgMAAQgLAAgIAJg");
	this.shape_3.setTransform(47.65,15.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3A5IAAhxIBFAAQAUAAALAKQALAKAAATQAAARgLAKQgLAKgUAAIgkAAIAAAlgAgWgHIAgAAQANAAgBgKQABgLgNAAIggAAg");
	this.shape_4.setTransform(34.65,15.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyA5IAAhxIBlAAIAAAcIhEAAIAABVg");
	this.shape_5.setTransform(22.25,15.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZA5IAAhDIgxBDIghAAIAAhxIAhAAIAABEIAxhEIAhAAIAABxg");
	this.shape_6.setTransform(8.975,15.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T3, new cjs.Rectangle(0,0,99.9,28.6), null);


(lib.T2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AkZA5QgXgVAAgkQAAgiAXgVQAXgXAjAAQAjAAAYAXQAXAVAAAiQAAAkgXAVQgYAWgjAAQgjAAgXgWgAj5gaQgLALAAAPQAAARALALQAKAMAQAAQARAAALgMQAJgLAAgRQAAgPgJgLQgLgMgRAAQgQAAgKAMgAG5BMIAAhmIgmBmIgdAAIglhmIAABmIgoAAIAAiWIA/AAIAgBTIAfhTIA9AAIAACWgADcBMIAAiWIAsAAIAACWgAA6BMIAAiWIAsAAIAAAsIAuAAQAcAAAPANQAQAPAAAYQAAAbgQAOQgPANgcAAgABmAnIAoAAQATAAAAgRQAAgPgTAAIgoAAgAh0BMIAAiWIBeAAQAYgBANAMQAOALAAATQAAAVgVAIQAYAJAAAdQAAATgNAMQgOAMgZgBgAhIAqIArAAQASAAAAgOQAAgMgSAAIgrAAgAhIgRIAqAAQAPgBAAgKQAAgNgPAAIgqAAgAl2BMIAAg5IhAAAIAAA5IgtAAIAAiWIAtAAIAAA5IBAAAIAAg5IAsAAIAACWg");
	this.shape.setTransform(-9.825,42.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(-58.2,34.9,96.80000000000001,15.700000000000003), null);


(lib.T1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#06DCFF").s().p("AgbAUIANgPIgSgGIAHgRIAQAGIAAgTIATAAIAAATIAQgGIAHARIgSAGIANAPIgQALIgMgOIgLAPg");
	this.shape.setTransform(249.3463,12.0161,0.5208,0.5208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#06DCFF").s().p("AHPCLQgognAAg9IAAhNQAAg9AognQAmgnA8AAQA7AAAnAmQAoAnAAA9IAABOQAAA9gpAnQgmAng9AAQg7AAglgngAIBhXQgSASAAAfIAABNQAAAfASASQASASAcAAQAeAAASgSQAUgSAAgfIAAhOQAAgegTgSQgSgSgdAAQgeAAgSASgACRCLQgmgnAAg9IAAhNQAAg9AngnQAngnA7AAQA7AAAoAmQAoAnAAA9IAABOQAAA9goAnQgoAng8AAQg7AAgngngADFhXQgSASAAAfIAABNQAAAfASASQASASAcAAQAdAAATgSQATgSAAgfIAAhOQAAgegSgSQgTgSgdAAQgcAAgTASgAipCLQgognAAg9IAAhNQAAg9AognQAngnA7AAQA8AAAlAmQAoAnAAA9IAABOQAAA9goAnQgnAng7AAQg7AAgmgngAh2hXQgSASAAAfIAABNQAAAfASASQASASAcAAQAeAAARgSQAVgSAAgfIAAhOQAAgegTgSQgTgSgdAAQgdAAgSASgAo3CLQgngnAAg9IAAhNQAAg9AngnQAngnA8AAQA7AAAnAmQApAnAAA9IAABOQAAA9gpAnQgnAng8AAQg7AAgngngAoDhXQgSASAAAfIAABNQAAAfASASQARASAdAAQAeAAARgSQAUgSAAgfIAAhOQAAgegTgSQgSgSgdAAQgdAAgSASgAt5CLQgmgnAAg9IAAhNQAAg9AngnQAmgnA8AAQA7AAAnAmQApAnAAA9IAABOQAAA9gpAnQgnAng8AAQg7AAgngngAtFhXQgSASgBAfIAABNQABAfASASQASASAcAAQAdAAAUgSQASgSAAgfIAAhOQAAgegSgSQgTgSgdAAQgcAAgTASgANqCrIAAgzIgrAAIAAg/IArAAIAAgbIgrAAIAAg9IArAAIAAiKICSAAQA0AAAdAfQAcAcAAApQAAApgbAcQgfAegzAAIhLAAIAAAbICFAAIAAA/IiFAAIAAAzgAOxgfIBGAAQAmAAAAgiQAAgigmAAIhGAAgAwZCrIAAkOIhOAAIAAhGICWAAIAAFUg");
	this.shape_1.setTransform(134.8,28.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T1, new cjs.Rectangle(22,10.3,229.1,35.599999999999994), null);


// stage content:
(lib.Text_lr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// T2
	this.instance = new lib.T2();
	this.instance.setTransform(542.4,19.75,1.5122,1.5122,0,0,0,56.4,19.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({_off:false},0).to({x:543.7,y:45.65,alpha:1},14,cjs.Ease.backOut).wait(194).to({x:542.7,y:-16.35,alpha:0},12,cjs.Ease.backIn).to({_off:true},1).wait(4));

	// t3
	this.instance_1 = new lib.T3();
	this.instance_1.setTransform(462.3,84.2,2,2,0,0,0,49.9,14.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({x:463.6,y:110.1,alpha:1},14,cjs.Ease.backOut).wait(198).to({x:462.6,y:48.1,alpha:0},12,cjs.Ease.backIn).to({_off:true},1).wait(2));

	// T1
	this.instance_2 = new lib.T1();
	this.instance_2.setTransform(179.15,57.8,1.571,1.571,0,0,0,135.6,19.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({regX:135.7,regY:19.2,x:180.6,y:83.25,alpha:1},14,cjs.Ease.backOut).wait(196).to({regX:135.8,regY:19.3,x:178.35,y:22.1,alpha:0},12,cjs.Ease.backIn).to({_off:true},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,563.7,144.9);
// library properties:
lib.properties = {
	id: 'A34F88EBE308604B81BBCEA8F0011F08',
	width: 560,
	height: 140,
	fps: 30,
	color: "#000000",
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
an.compositions['A34F88EBE308604B81BBCEA8F0011F08'] = {
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