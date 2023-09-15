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
	this.shape.graphics.f("#FFFFFF").s().p("AqsAqQgRgQAAgaQAAgZARgPQARgQAaAAQAZAAARAQQARAPAAAZQAAAagRAQQgRAQgZAAQgaAAgRgQgAqVgTQgHAIAAALQAAANAHAIQAIAJAMAAQAMAAAIgJQAHgIAAgNQAAgLgHgIQgIgJgMAAQgMAAgIAJgAE6ApQgRgQAAgZQAAgaARgPQAQgQAbABQAZgBARAQQARAPAAAaQAAAZgRAQQgRAPgZAAQgbAAgQgPgAFRgUQgIAJAAALQAAALAIAJQAGAJAOgBQALABAHgJQAIgJAAgLQAAgLgIgJQgHgJgLAAQgOAAgGAJgAidA4IAAhLIgcBLIgVAAIgbhLIAABLIgdAAIAAhuIAuAAIAXA8IAXg8IAsAAIAABugAk+A4IAAhuIAgAAIAABugAm0A4IAAhuIAgAAIAAAhIAhAAQAVAAALAJQALALAAARQAAAUgLAKQgLAKgVAAgAmUAcIAdAAQAOAAAAgMQAAgLgOAAIgdAAgAozA4IAAhuIBEAAQASAAAKAIQAKAJAAAOQAAAPgPAGQARAFAAAVQAAAPgJAJQgLAIgTAAgAoUAfIAgAAQANAAAAgKQAAgKgNABIggAAgAoUgMIAfAAQALgBAAgHQAAgJgLAAIgfAAgArvA4IAAgpIgvAAIAAApIghAAIAAhuIAhAAIAAAqIAvAAIAAgqIAgAAIAABugAMgA2IAAhKIgbBKIgVAAIgchKIAABKIgcAAIAAhuIAuAAIAXA+IAXg+IAsAAIAABugAKIA2IgGgPIgyAAIgGAPIghAAIgrAAIgsgwIAAAwIggAAIAAhuIAgAAIAAAvIAsgvIAqAAIg0A2IA1A4IAwhuIAiAAIAwBugAJ2ANIgNghIgNAhIAaAAgACvA2IAAhuIBEAAQATAAALAKQALAKAAASQAAASgLAKQgLAJgTAAIglAAIAAAjgADOgHIAhAAQAMAAAAgLQAAgKgMAAIghAAgAA7A2IAAhuIBkAAIAAAcIhEAAIAABSgAADA2IAAhBIgwBBIggAAIAAhuIAgAAIAABDIAwhDIAgAAIAABug");
	this.shape.setTransform(55.9688,42.6784,1.3725,1.3725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.T2, new cjs.Rectangle(-58.2,34.8,228.39999999999998,15.800000000000004), null);


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
(lib.Text = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(382.6,146.4,3.18,3.18,0,0,0,56.2,18.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).to({regX:56.1,regY:19,x:384.6,y:198.6,alpha:1},14,cjs.Ease.backOut).wait(197).to({regY:19.1,x:380,y:70.05,alpha:0},12,cjs.Ease.backIn).to({_off:true},1).wait(3));

	// T1
	this.instance_1 = new lib.T1();
	this.instance_1.setTransform(385.5,55.65,3.3037,3.3037,0,0,0,135.4,18.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({regY:19,x:387.9,y:109.85,alpha:1},14,cjs.Ease.backOut).wait(197).to({x:383.3,y:-19.05,alpha:0},12,cjs.Ease.backIn).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,770.5,311.8);
// library properties:
lib.properties = {
	id: 'D89D5A560235C8408D4832FDA5AC3970',
	width: 778,
	height: 320,
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
an.compositions['D89D5A560235C8408D4832FDA5AC3970'] = {
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