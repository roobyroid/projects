/* eslint-disable no-var */
(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib = {}; var ss = {}; var img = {};
  lib.ssMetadata = [];


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


  (lib.tennis_ball = function (mode, startPosition, loop, reversed) {
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

    // Layer_4
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#FFFFFF').s().p('Ag1G+QhggDhSgoIgzggIgegYIAMAJQA4ApBbASQBeASBTgPQBdgRAxg3QA4g+gOhmQgRh/hDhNQhwiCjWA7QicAqg8gVQgugPAKgyIAHgYIARgpIABgCQgbBMBZAAQA2gBCogpQCAgaBzBPQB+BVAjClQAWBlgqBLQgmBFhTAkQhHAghVAAIgPAAgAFokcQhWhyh2gvIAPAGIABAAQAZAKAtAaQAoAZAlAlQAvAtAgA1IAEAHIAHAOIADAEIACAEQAKAVAFAMIAQAuIAKAuIACAJQgThohOhkgAEZl4IAEADQALAJATARIgigdg');
    this.shape.setTransform(28.6514, 28.7527, 0.4546, 0.4546);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#E43659').s().p('AiYB1QgWgDghgHQglgKgygWIgXgMQA9AcBSAKQCkAUBshYQCFgzBBhJQANgOAJgPIgHANQgPAZgZAfIgOASQgRASgdAaQgPAMgZASIgjAWIggAQIgfANIgdAKIg+AOQgMACgYACIgpABQgiAAgXgEg');
    this.shape_1.setTransform(32.5724, 44.2364, 0.4546, 0.4546);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#E43659').s().p('Ah1IEQiCgMheg/IgRgOIgighIgcgfIgggsIgVgjIgYgyQgKgXgMgnIgKgpIgJg3IgDgqIACg1QACgcADgOQACgMAJgoIAEgQQgPBVBrgCQBDgBDMgyQC1glBzCEQBWBiAVCQQATCHhcBMQg3AuhSAQIgBAAQgsAGguAAQgfAAgggDgAE5EMQAIhig1hmQgxhehRhCQhThDhPgIQhkgJiCAhQhZAYg1ABQhjADgCg/QABgLAIgVQANgaAJgOIAagqIAmguQAXgZAegbIAugjQARgMAYgOIAlgSIAkgPIAigMIBIgQIBYgGQAmAAA3AIQC0AnB8CSQBtCBAbCdIAAAEIAEA4QgBAcgBAOIgHA1QgFAcgEAPIgQAyQgLAdgRAiQgMAYgUAVQhKBUibA8QBWhSAIhvg');
    this.shape_2.setTransform(28.4454, 27.5742, 0.3933, 0.3933);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.tennis_ball, new cjs.Rectangle(7.2, 7.2, 42.599999999999994, 42.599999999999994), null);


  (lib.tennis = function (mode, startPosition, loop, reversed) {
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
    this.shape = new cjs.Shape();
    this.shape.graphics.f('#000000').s().p('AUjP7IgEgBIgDAAIgCAAIgQgEIgQgHQgNgHgOgNIgCgBIgEgFIgBgBIgKgJIgBgBIgBgBIgPgNQgGgGgGgEIgPgMIgEgDIghgZQg0gmhBgsIjjiYQhthHgtgfIgBAAIgDABIgCAAIgFABQgGAAgIgBIgEgCIgCAAIgCgBIgCgCIgCgBIgCgBIgEgFIgCgCIgEgIIAAgBIAAAAIAAgBIgBgCIAAgBIgBAAIgBAAIgBAAIgFAAIgMgCQgLgEgIgJIgGgJIgDgJIgBgHIgNgGIgDgCIiMg7QhBgXhBgPIhNgQQgjgHgxgGIhbgJQgtgDgygBQg1gCiZAAIjegFQhygLhwgmQhuglhng7Qhmg8hXhJQgrgkgogoIgUgUIgJgKIgKgLQgQgRgUgZQhEhXgnhhQgnhdgKhhQgEgqABgwIAEgrIAHgoIAWhLQAFgNAJgUIAQgeIAjg3IA5g8QAMgLAUgPIASgMIA6ggIBXggQAXgHAZgFQAZgGAYgDIAygGQBmgIBvASQBrARBtArQBoApBmA/QBkA/BXBOIBTBRQAnAoAjAuIAjAtIAhAtQAYAhAlA6IBrCyQA2BeAqBEQAvBNAsA7QArA5AsAuQATAUAVASIAkAdQAZATAcARIABABIAGgDIAGgCIAAAAIABAAIABAAQAGgCAGABQAFAAAHACQAGADAEAFQAFAEADAHIABABIAAABIAAAAIAAAAIABABIAAAAIAAABIACAAIAAABIAAAAIAHgCIAHAAIACABIACAAIAHACIAEABIAHAFIADADIAFAHIABADIACAHIABAHIAAABID/CrIB2BNQBOAwAqAYIA5AgQAYANAeAOIAoASQAJAFAFAFQANAJAIAQIAFAPIABAMIAAADQABANgEAOIgIAXQgJASgMARQgKATgMAPQgJAMgGAHQgHAHgNAKIgGAEIgVAJIgIACIgIABIgEABgAUuO3QgLAJgLAFIgKAEIgKADIgDAAIAJAHIALAFIAKADIABAAIABABIAIAAIAFgBIADAAIACAAIAPgGIAFgDQAJgFAIgHIAPgPQAPgRAIgNQAIgOAHgTIAFgUQADgJgBgKIgCgKIgEgIQgEgJgJgGIgKgFIgCgCIgMgEIgVBcIgNArQgEAKgGAIQgFAIgFAFQgGAGgDABQgBABgBABQgBAAAAAAQgBAAAAAAQAAAAAAAAIAQgaIAGgSIABgCQgGAIgJAJgAVKM2QACABgCAHQgBAIgFAKIgHAMIgJANQgLAOgOAKQgPAMgQAGIgcAJIgPACIAcAaIAIAKIACABIABACIAJgEQATgJAPgOQAOgMANgTIAIgMIAAgBIAThfIgJgEIg5gaQgXgLgjgUQgxgahKguQg+gog4gmQgxghg3gpQgzglgkgdQgXgRgMgMIgLgIIgBAGIgHASQgHAQgIAPIgOAaQALAMAUAOQAWAOASAEIAugqQAEgFACABQACABgDAHQgCAGgFAIIgMAQIgLAMIgQAMIgBABQAhAZAgANIACgBIANgKIALgJIAWgVQAEgEABAAQACABgCAGQgCAHgEAHIgLAPIgLALQgEAEgLAHIgCABQgKAHgRAIQgPAIgHACQgIADgXgNIghgWQgDgCAAgDQAAgEADgCQAJgHAFgIQgcAPgSgIQgOgGgkgVIgJAGQBDAkBSAyIBuBEQA8AmA9ApIATANIAMgGIAigYIgKgDIgdgOIgWgQIAAAAIgMAGIgFACIgDABIgCAAQgKACgBgEQAAgCAIgFIAEgCIAbgSIAEgDQAHgFACABQADACgGAIIArAiIAKAKIASgSIAHgHIAUgYQAEgFABABQACABgCAGIgCAHIgHAOIgDAFIgCADIgBACIgBABIgEAGQgKAMgMALQgMAKgPAIIgGADIgBABIgLAEIgHACIBKA1IAYgLIABgBIACgBIAGgDIATgMQgJgEgMgJQgPgKgJgJQgIgKACgDQACgEAMAFQAMAFAPAKQAPALAIAIIAXgTIABgCIAXgZQAEgFACABQACABgDAGIgCAIIgFAJIgMAQIgFAGQgKALgPALQgPALgNAGIgJAEIgWAHIAGAEIAbAVIAKAIIADADIANAKIABACIACgBIAqgRQALgGAIgGQgJgDgJgGQgMgHgJgKQgHgJADgEQADgEALAEQAJADAOAIQANAIAIAHIABABIAQgPIAcgkQADgFACAAIAAAAgAJaH9IACAAIACAAQAHABAHAEIADACIABACIABABIABACIACABIACADIAAACIABACIABACIABAGIAAADIABABIAEAAQAGAAAHgDQAHgDAGgFIANgKQAIgIAMgPIAZgqQAGgMAGgRIAFgQIACgQIAAgEIAAgBIAAgCIgBgBIAAgBIgBgCIAAgBIAAAAIgBAAI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IgQAGgTQALgfAEgmQgIAdgLAYgAooD5IhHgOIhGgYQgbgNABgDQACgEAdAHICLAmQAdAIgBAEQAAADgLAAIgUgCgAneDiIhCgKIgEgBIgvgKQhygbhvg1Qhvg1hdhFQhkhIhMhXIgmgvQgPgTgUgdQgggwgbg5Qgag5gOg5QgPg+ACg7QABgfAFgfIADgPIANgsQALgfAPgaQAPgbAUgXQANgQAPgOQAMgLAMgJIAegVIARgLIAKgFIAEgDIAFgCIAogSQAXgJAUgGIAtgLQAqgJAtgDQAigCApACQAeACAWADIAOADIAEACQACgDADAAQAFgCAFACQAEACACAFQACAGgCAEQgCAFgGACQgFACgEgCIgUAUQAoAEAnAHIASgUIgBgCQgBgFACgFQACgFAFgCQAFgCAFADQAFACACAFQACAFgDAFQgCAFgFACQgFABgFgCIgPAQIATAEIA2AMIAKgKIAAgCQgCgFACgFQACgFAFgCQAFgCAFADQAFACACAFQACAFgDAFQgCAEgFACQgEACgGgCIgHAIIANADQAbAIAdAKIACgDIgBgCQgCgFADgEQACgFAFgCQAFgCAFACQAFACACAFQABAGgCAEQgCAFgFACIgGABIAIACIA1AVIgBgCQgCgFADgFQACgFAFgCQAFgBAFACQAFACACAFQACAFgDAFQgCAFgFACIgCAAQAdAMAbAOIAAgBIAAAAQgCgFADgFQACgFAFgCQAFgCAFADQAFACACAFQABAFgCAFQgCAFgFABIgDABIAxAbQgBgFACgEQADgFAEgBQAFgCAFACQAFACACAFQACAFgDAFQgCAFgFACIgBAAQAXANAaARIAAAAQgCgFACgFQACgFAFgCQAFgCAFADQAFACACAFQACAFgDAFQgCAFgFACIgEAAIAsAgQAAgJAIgCQAFgCAFACQAFACACAFQACAFgCAFQgDAFgFACIArAiQgCgFACgEQACgFAFgCQAFgCAFADQAFACACAFQACAFgDAFQgCAFgFACIgGAAIAqAoQgBgKAKgFQAFgCAFADQAEACACAFQACAFgCAFQgDAFgFACIgGAAIAqAtIACgCIgBgCQgCgFADgFQACgFAFgCQAFgCAFADQAFACACAFQACAFgDAFQgCAFgFACQgFABgFgCIgDADIAMAOIAGAHIARAWIACACQABgGAGgCQAFgCAFACQAFACACAFQACAFgDAFQgCAFgFACIgEABQASAYAMATQACgFAFgCQAGgBAEACQAFACACAFQABAFgCAFQgCAFgFACIgFABQAMASAIATIAKASIABAAIgBgCQgCgFACgFQACgFAFgCQAFgCAFADQAFACACAFQACAFgDAFQgCAEgFACQgFACgFgCIgDADIAbBBIAAABIAHgHIgBgCQgCgFADgFQACgFAFgCQAFgCAFADQAFACACAFQACAFgDAFQgCAFgFACQgFABgFgCIgKALIACAFIACAHIACAEIAKApIABAIIACAFQAFgBAEACQAEACACAFQACAFgCAFQgDAFgFACIgDAAIAEBMIgBASIAEgRQAGgfACgpIAAhBQAAgFABAAIADAEIAEAOIAEAXIABAGIABAHIABAQQADAmgFAmIgNA7IgLAeIgBACIgFAKIgXApIgdAmIgUAWIgCACIgCACIgXAUQgbAVgeAQIgDACIgDACIgeAOQgeANgbAIQggAJgbAFQg2ALhCACIgSAAQgvAAg3gGgAl9DBIAWAAQAcgBAjgDIg0gggAnICnIAqAZIAWABIAlgoIg5ghgAnaC7IABAAIAqAEIgegSgAkUC6IAfgFQAggGAVgHIgrgagAowCsIAUAEIADABIAHABIAuAIIAPgRIg4gigAlXCXIA5AiIAsgvIg5gigAp5CRIAeARIAiAIIAlgnIg5gigAjmCIIAxAcIATgGIAhgkIg5gigAoICBIA5AiIAsgwIg5ghgAiRCXIAjgQIACgBIgOgIgArLB/QAgAMAjALIACgEIg5ghgAmXByIA5AhIAsgvIg5gigAq5BrIA5AhIAsgvIg5gigAkmBiIA5AiIAsgwIg5ghgAh0B4IAQAKQAagOAXgQIAKgIIgggTgApIBbIA5AiIAsgvIg5gigAsTBhQAVAKArARIANgPIg4gigAi0BTIA5AhIArgvIg5gigAnXBMIA5AhIAsgvIg5gigAr5BFIA5AiIAsgwIg5gigAllA8IA4AiIAsgvIg5gigAtXBAQAfAQAVAKIAIAEIAWgXIg5gigAqIA1IA5AiIAsgvIg5gigAhDBDIAhAUIAPgOIAEgDIAHgHIACgCIARgUIgigVgAj0AtIA5AhIArgvIg4ghgAoXAmIA5AiIAsgwIg5ghgAs5AfIA5AiIAsgwIg5gggAiDAdI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');
    this.shape.setTransform(171.3121, 103.4779, 0.8642, 0.8642, 1.7514);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f('#FFFFFF').s().p('AAmBMQgUgagQgbQgOgagOgfIgOgmIgDgLIALAcQAeBHAuBEg');
    this.shape_1.setTransform(55.5971, 80.4513, 0.8642, 0.8642, 1.7514);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f('#FFFFFF').s().p('ABFCFIgGgEIgWgTIgcgfQgvhEgehHIgLgeIgGghQgCgNAEgCQADAAAHALIAnBLQALAXASAeIAnBAIAoA7QAHAMgDACIgCABQgDAAgIgGg');
    this.shape_2.setTransform(58.2921, 80.9611, 0.8642, 0.8642, 1.7514);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f('#FFFFFF').s().p('AgjChIASgqIAEgMIAHgSIACgEIAEgRIAPhAIAHhHIgEhdQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAAAAAIACADIAKAjIAFAsIABAmIgGAzQgDASgEAQIgPAuIgFANIgaAxIgIALIgDADIgDACQAAAAAAgBQAAAAAAAAQAAgBAAgBQABAAAAgBg');
    this.shape_3.setTransform(179.373, 94.9871, 0.8642, 0.8642, 1.7514);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f('#FFFFFF').s().p('ACSAeIgtgLIgDgBIgDAAIhegUIiSgVQgNgCAAgCQAAgCANgBIAHgBIAIAAIBIACQAmAEAYAEQAdAFAiAJIAOAEIA9AXIAHADQALAHgBABIgCABIgLgCg');
    this.shape_4.setTransform(195.3208, 128.2602, 0.8642, 0.8642, 1.7514);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f('#FFFFFF').s().p('AC5EUIgLgJIg5g3QgigmgiguQgmgzgjg7QgfgwglhCIhgiwIgDgHQACAAADAFIAMARQAOAUAaApIA3BdQAkA8AgA0QAsBHAcAnQAkAzAdAjIA9BEIAFAGIAAABIgHgEg');
    this.shape_5.setTransform(200.8201, 106.6289, 0.8642, 0.8642, 1.7514);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f('#FFFFFF').s().p('AgCARIgJgHIgDgEIAUgXIAJAHIgPAcg');
    this.shape_6.setTransform(233.5213, 145.7353, 0.8642, 0.8642, 1.7514);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f('#FFFFFF').s().p('AAcAeQgGAAgLgEIgigQIgOgKIAQgdIArAkIAMAMQAFAGgCADQgBACgEAAIgEAAg');
    this.shape_7.setTransform(236.6603, 147.4849, 0.8642, 0.8642, 1.7514);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f('#FFFFFF').s().p('AgHALIgEgCIAPgUIAIAFIgEAEIgLALIgDADg');
    this.shape_8.setTransform(241.1902, 151.5467, 0.8642, 0.8642, 1.7514);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f('#FFFFFF').s().p('AAMAUIgOgFIgMgGIgSgLIADgDIAMgMIADgEIACABIAhAYQAOAMgCAEQgBACgGAAQgGAAgIgCg');
    this.shape_9.setTransform(243.406, 152.9547, 0.8642, 0.8642, 1.7514);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f('#E43659').s().p('AOIK+IhtgrQhCgXhEgQIhPgQIhXgMIgWgCIgGgBIhAgFQgwgDgygBQhPgCiAACIjagEQhrgKhwgkQhrgjhlg6Qhig4hYhJQgqgjgogoIglgnQgPgQgUgZIgcglIAdAgIAVATIAGADQALAHACgCQADgCgHgMIhPh6QgTgggLgVIgnhMQgHgLgDAAQgDACABANIAGAhQgbhMgJhNQgEgnACgsIAEAXIAEANQAFARACAAQACAAgCgSIgBgOIgBgDIgBgvIAAgEIABgYIAHguIAAgCIAShCIAdg4IAigxIARgUIACgCIAFgFIADgDIARgQQANgLASgNIARgMIAEgCIAEgDIA5gdIBKgaIAtgMIAwgIIAxgFQBkgIBqASQBoASBqAqQBrAqBdA9QBfA8BXBOQASAQAXAYQAYAWAQASQAfAhAqA0IBCBZQAcAoAfAyIBpCwQBKCBAVAiQA0BWAoA2QAsA8AuAwQAWAXAUARIAmAgQAdAWAbAQIAQAKIABAAIgDAJQgDALgHAMIgQAZIgRAXIgSATIgHAGgAIWH4IgHAAQgNACAAACQAAABANADIDQAiIAhAIIADAAIADABIAtALQAMADABgCQABgCgLgGIgHgEIg9gXIgOgEQgigJgdgFQgZgEgmgFIhIgCIgIABgAIcALIBgCwQAlBCAfAxQAkA6AmA0QAiAuAiAmIA5A3IALAIIAHAEIgFgGIg9hEQgdgkgkgyQgcgngthHQggg1gkg9Ig3hcQgagpgOgVIgMgQQgDgFgCAAIADAHgAIoEnQgHAVgKASQgHARgOATQgMATgMAMQgNAQgMAKQgVAUgaAPIBNAEQAxAEAtAGQAwAFA7AMIAVAFIgjgpQgcgkgZgkQghgugmhBgAAEHCIAXAAQAfAAAggEIg1gfgAhGGoIAqAZIAXABIAjgnIg4gigAhYG9IACAAIApADIgegSgABuG8IAegGQAZgEAdgIIgsgagAArGZIA5AiIArgwIg5gigAiuGuIAfAGQAOADAfAEIAQgQIg5gigAj3GSIAeASIAfAIIADAAIAlgoIg5ghgACcGJIAwAdIAUgHIAggjIg4gigAiGGCIA5AiIAsgvIg5ghgAj+GaIAIACIgGgEgADxGZIAjgQIABgBIgOgIgAlJGBQAvARAUAFIADgDIg5gigAgUFzIA4AiIArgwIg5ghgAk3FtIA5AhIAsgwIg5ghgABcFkIA5AiIAsgwIg5ghgAENF6IAQAKQAYgNAZgSIALgIIgggTgAjFFdIA4AiIAsgwIg5ghgAmRFjQAhAPAfAMIAOgQIg5gigADNFUIA5AiIAsgvIg5gigAhUFNIA5AiIAqgvIg3gigAl3FHIA5AhIAsgvIg5gigAAcE+IA5AhIAsgvIg5gigAnVFCIA9AdIAVgWIg5gigAkFE3IA5AiIArgwIg5ghgAE+FEIAhAUIAQgOIACgBIAcgfIgjgVgACNEvIA5AhIAsgwIg5ghgAiUEnIA5AiIAsgvIg5gigAm2EgIA4AiIAsgvIg5gigAHwgIQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAABIAEBcIgHBIIgUBRIgJAXIgEALIgSArQgBAAAAABQAAABAAAAQAAABAAAAQAAAAAAABIADgDIADgDIAIgLIAKgQIAWguIAPguQAEgQADgSIAGgzIgBgnIgLhFIgEgIIgCgEIAAAAgAD+EfIA5AiIAsgwIg5ghgAoVEcQAbARAeARIAZgbIg5gigAgjEYIA4AhIAsguIg5gjgAlFERIA5AiIArgwIg5ghgABNEJIA5AhIAsgvIg5gigAFwEPIAiAVIAMgQIAAAAIALgiIAAgCIABgCIAAgBIABgEIgQgJgAjUECIA5AiIAsgwIg5ghgAn2D7IA5AiIArgwIg5ghgAC+D5IA5AiIAsgwIg5ghgApTDzQAaAUAdARIAZgcIg5ghgAhjDyIA5AiIArgvIg4gigAmFDrIA5AiIArgvIg4gigAEwDpIA5AiIArgvIg5gigAANDiIA5AiIAsgvIg5gigAkUDcIA5AhIAsgvIg5gigAo2DVIA5AiIArgwIg5ghgAB/DTIA4AiIAsgwIg5ghgAqNDHQARAPAWAQIANAJIAWgYIg5gigAijDNIA5AhIAsgwIg5ghgAnFDFIA5AiIAsgvIg5gigADwDDIA5AjIArgwIg4ghgAGhDaIALAHIAEgTIAAgDIAAgBgAgyC9IA4AhIAsgvIg4ghgAlUC2IA5AhIAsgvIg5gigAFhC0IA5AiIAYgaIABggIgmgXgAp2CvIA5AiIArgwIg4ghgAA/CuIA5AhIArgvIg5gigAjjCnIA5AhIAsgvIg5gigArECYQATASAeAZIAQgSIg5gigAoFCgIA5AiIAsgwIg5ghgACwCeIA5AiIAsgwIg5ghgAhxCXIA4AiIAsgvIg5gigAmUCQIA5AiIAsgvIg5gigAEhCOIA5AiIAsgvIg5gigAq2CKIA5AhIAsgwIg5ghgAAACHIA4AiIArgvIg5gigAkjCBIA5AhIAsgvIg5gigApFB6IA5AiIAsgwIg5ghgABwB4IA5AhIAsgvIg5gigAixBxIA5AiIArgwIg5ghgArKCTIAHgIIgmgXIAfAfgAGSB/IAhAUIgEgzgAnUBqIA5AiIAsgvIg5gigADhBpIA5AhIAsgvIg5gigAr1BkIA4AhIAsgvIg5gigAhABhIA5AjIAqgwIg3gigAljBbIA5AhIAsgvIg5gigAFSBZIA5AiIAjglIgDgSIgtgagAqFBUIA5AhIAsgvIg5gigAAwBSIA5AiIAsgvIg5gjgAjxBMIA5AhIArgwIg5ghgAoUBFIA5AhIAsgvIg5gigAChBDIA5AhIAsgvIg5gigAsoAuIArAyIABAAIArgvIg5gjgAiAA8IA5AiIAsgwIg5ghgAmiA1IA4AiIAsgwIg5ghgAESAzIA5AiIAsgwIg5ghgArEAuIA4AiIAsgvIg4ghgAgPAsIA4AiIAsgvIg5ghgAkxAlIA5AiIArgvIg4ghgApUAfIA5AhIAsgvIg5ghgABhAdIA5AhIAsgvIg5ghgAGEAjIAkAXIgCgKIgLgmgAjAAWIA5AhIAsgvIg5ghgAniAPIA5AiIArgwIg5gggADSAOIA5AhIAsgvIg5ghgAsFAIIA6AiIAsguIg6gigAhPAHIA5AhIArgvIg4ghgAtUgMQAPAVARAVIAHAKIAcgeIg5gggAlxAAIA5AhIAsguIg5gigAFEgBIA5AhIAcgfIgMgeIgBgDIgdgQgAqTgGIA4AgIAsguIg4gigAAhgIIA5AhIAsgvIg5gigAkAgPIA5AhIAsgvIg5gigAoigWIA5AhIArgvIg5ghgACTgXIA4AgIAsguIg5gigAtFgdIA5AhIAsgvIg5ghgAiPgeIA5AhIAsgvIg5gigAmxglIA5AiIAsgwIg5ghgAEEgnIA5AiIArgwIg4ghgArTgsIA5AiIAsgvIg6gjgAgeguIA4AiIAsgvIg5gigAlAg1IA5AiIAsgvIg5gigAtYgTIAHgIIgUgLgApig7IA5AhIArgvIg4gigABTg+IA5AiIArgvIg5gigAt7hNIAOAYIAhAUIAsgvIg5gigAjPhEIA5AhIAsgvIg5gigAnxhLIA5AiIAsgwIg5ghgADEhNIA5AhIAsgvIg5gigAF1g3IASALIgBgDIgCgDIgGgOgAsThSIA5AiIArgvIg5gigAhdhUIA4AiIArgwIg4ghgAmAhbIA5AiIAsgvIg5gigAE1hcIA5AiIAMgOIghg7gAqihiIA5AiIAsgvIg5gigAAThkIA5AjIArgwIg4ghgAkPhqIA5AhIAsgvIg5gigAowhwIA4AgIAsgvIg5ghgACEhzIA5AiIAsgvIg5gigAuciUIAOAhIAPAfIAfgiIg5gigAtTh4IA5AiIArgwIg4ghgAidh5IA5AhIArgwIg5ghgAnAiAIA5AhIAsgvIg5gigAD1iCIA5AhIAngpIgKgPIgqgZgAriiIIA5AjIAsgwIg5ghgAgsiJIA4AiIArgwIg3ghgAlPiQIA5AiIAsgvIg5gigApxiXIA6AiIArgvIg5gigABEiZIA5AiIAsgvIg5gigAuTidIA5AhIAsgwIg5ghgAjdigIA5AiIArgvIg5gigAn/imIA4AhIAsgvIg4gigAC1ioIA5AhIAsgvIg5gigAsiitIA5AiIAsgwIg5ghgAhsivIA5AhIAsgvIg5gigAmOi2IA4AiIAsgwIg5ghgAqxi9IA5AiIAsgvIg5gigAAEi/IA5AiIAsgvIg5gigAu1jkIACAHQAGAXAKAfIAJAFIAsgvIg5gigAkdjGIA5AjIArgwIg4gigAEmi3IAbAPIgSgZgApAjMIA6AiIArgvIg5gjgAB1jOIA5AiIAsgvIg5gigAtijTIA5AhIAsgvIg5gigAisjVIA5AiIAsgwIg5ghgAnOjbIA5AhIArgwIg4ghgADmjdIA5AhIALgMIgpgygArxjjIA5AiIAsgvIg5gigAg7jkIA5AiIArgwIg4ghgAldjrIA5AiIAsgwIg5ghgAp/jyIA4AiIAsgvIg5gjgAA1j0IA5AiIAsgvIg5gigAuij5IA5AiIAsgvIg5gjgAjsj7IA5AiIAsgvIg5gigAoOkBIA5AhIAsgvIg5gigACnkEIA5AiIAbgeIgJgKQgTgVgQgPgAsxkIIA5AiIAsgwIg5gigAh7kKIA5AhIAsgvIg5gigAu3juIAJgJIgMgGgAmdkRIA5AiIAsgwIg5ghgAq/kYIA5AiIArgvIg5gigAgKkZIA4AhIAsgwIg5ghgAu/lEQAAAcAEAgIASALIAsgvIg5gigAkskhIA5AiIAsgvIg5gigApOkoIA5AiIArgvIg4gigABnkpIA5AiIApgtIgLgKIAAgBIgsgZgAtxkuIA5AhIAsgvIg5gigAi7kwIA5AhIAsguIg5gjgAndk3IA5AiIAsgwIg5gigAr/k+IA5AiIArgwIg5ghgAhJk/IA4AhIArgvIg4gigAlslGIA5AiIAsgwIg5ghgAqOlOIA5AjIAsgwIg5ghgAAnlPIA5AiIArgwIg4ghgAuwlUIA4AhIAsgvIg5gigAj7lWIA5AiIAsgvIg5gigAodldIA5AiIAsgvIg5gigAs/ljIA5AhIArgwIg4ghgAiJlmIA5AiIArgvIg5gigAmslsIA5AhIAsgvIg5gigAu/lPIACgDIgCgCgArOlzIA5AiIAsgwIg5ghgAgYl1IA4AiIAsgwIg5gigAu0mfIgGAbQgDASgCAVIAIAFIArgvIgogZgACYlfIAIAGIgHgHgAk6l8IA4AiIAsgwIg5ghgApdmDIA5AiIAsgvIg5gigABYmEIA5AiIACgDQgYgVgbgTgAt/mKIA5AiIAsgvIg5gigAjJmMIA5AiIArgvIg5ghgAnsmSIA5AhIAsgvIg5gigAsOmZIA5AhIAsgvIg5gigAhYmbIA5AiIArgwIg4ghgAl6mhIA5AhIArgvIg5gigAqdmpIA5AiIAsgvIg5gigAAYmqIA5AiIAJgLIg1glgAuYnVQgOATgHANIgBACIgEALIAsAbIAsgwIg3ghgAkJmxIA5AiIArgwIg4ghgAosm4IA5AhIAsguIg5gigAtOm/IA5AiIAsgwIg5ghgAiYnBIA5AiIAsgvIg5gigAm6nHIA5AhIArgvIg5gigArdnOIA5AiIAsgwIg5ghgAgnnQIA4AhIANgNQgegUgagOgAlJnXIA5AiIAsgwIg5ghgAprneIA4AiIAsgvIg5gigAttoDIgfAfIA3AhIAsgvIgzgfgAjYnnIA5AiIAsgvIg5gigAn6nuIA5AiIArgvIg4gigAsdn0IA5AhIAsgvIg5gigAhnn2IA5AhIANgNIg7gggAmJn9IA5AiIAsgwIg5ghgAqroDIA5AhIArgwIg5ghgAkYoMIA5AiIAsgwIg5ghgAo6oTIA5AiIAsgwIg5ghgAsho3IgDACIgPAIIgiAXIAxAdIAsguIgggUgAinocIA5AiIALgLQgVgLgqgRgAnJojIA5AiIAsgvIg5gigArropIA5AhIArgvIg5gigAlYoyIA5AhIAsgvIgmgLIgggJgAp6o5IA5AiIAsgwIg5ghgAiuogIAFgFIgjgNgAoJpJIA5AiIAsgvIgogYIgZgBgAsQo/IAeARIAogsgAtIpGIgVATIAngZIgGgEgAmYpYIA5AhIAdgfIgggHIgpgIgAp4prQgfAEgiAJIA4AhIAsgwIgEgCgApHpwIgCABIA5AjIAhgkIgCAAIglgBIgxABgAmfpcIAKgLIgkgFg');
    this.shape_10.setTransform(138.6028, 80.2116, 0.8642, 0.8642, 1.7514);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f('#999A9E').s().p('AgeBaIgBgBIAAgDIgCgIIgBgCIgBgCIgCgDIgBgBIgBgCIgCgBIgBgCIgDgCQgGgEgIgBIgCAAIgCAAIgEAAIgBAAIAAAAIgBAAIgCgBIgCgBIgBgBIAAgBIgBgBIABgFIAGgDIAMgHQAKgIAMgMQAIgJAMgPQAJgNAGgPQAHgPADgOQACgGAAgIIgBgIIABAAIAGgEIABAAIABAAIABABIABABIAAACIABABIAFAGIACACIAKAGQAHADAJAAIAIgBIABgBIABAAIAAAAIAEAAIABAAIABAAIAAABIAAAAIABABIABACIAAABIAAABIAAACIABABIAAAEIgDAQIgEAQQgHARgGALIgUAlIgEAFQgMAPgJAIIgLAKQgHAFgHADQgGADgGAAg');
    this.shape_11.setTransform(227.6018, 144.2142, 0.8642, 0.8642, 1.7514);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f('#999A9E').s().p('AD5ETIgBgBIgBgCIgUgTIgLgLIgFgEIAQgCIANgDQAJgDAFgDQAQgFAPgNQAOgKAMgOIAJgNIAGgLQAFgLACgHQABgIgBAAQgCgBgEAFIgcAkIgQAPIgBAAQgHgIgOgIQgOgIgJgDQgLgEgDAEQgCAEAHAJQAIAKANAHQAJAHAJACQgMAIgIAEIgNAGIgcAMIgCAAIgCgCIgNgKIgDgDIgKgIIgbgVIgFgEIAEgBIARgFIACgCIAHgDQAOgFAPgMQAPgLAKgLIAFgGIALgQIAHgNIABgEQACgGgBAAQgCgBgEAEIgUAWIgbAYQgJgIgPgLQgPgKgMgFQgMgEgCADQgCAEAIAJQAJAJAPALQANAIAJAEIgUANIgGACIgDACIgDABIgVAKIhJg0IAHgDIAIgDIACgBIACgBIAGgDQAOgIAMgKQANgLAJgMIAFgGIABgBIABgBIABgDIAEgGIAHgOIACgHQABgGgBgBQgCgBgEAFIgTAYIgCABIgBABIgEAFIgSASIgLgKQgQgOgHgFIgTgOQAFgJgDgCQgBgBgIAFIgDADIgYAPIgEAEIgEACQgHAEAAADQAAADAKgBIADgBIACgBIAGgCIALgFIABgBIAWARIAcANIALADIgjAYIgMAHIgTgOQg7gpg8glIhvhEQhSgxhDglIAIgFIABgBQAhAUASAIQARAIAcgQQgEAIgKAIQgCACAAADQAAAEADACIAhAVQAWANAIgDQAIgCAPgIQARgIAKgHIACgBQAKgGAFgFIALgLIAKgPQAFgHABgHQADgFgCgCQgCAAgEAEIgWAWIgLAJIgNAJIgCABQgggMgggZIABgBIAMgJIASALIAMAHIAPAEQAIADAGAAQAGAAABgDQACgEgOgLIgigZIgCgBIAIgNQAFgHADgHQACgGgBgBQgCgBgEAEIguAqQgSgDgXgPQgUgOgKgMIADgHIAOAKIAjARQALAEAGAAQAIABABgEQACgCgFgHIgMgMIgsgkIAQgnIACgGIAKAJQANALAXARQAjAdAzAmIBoBJQA4AmA+AoQBKAtAwAaQAjAUAYAMIA5AaIAJADIgUBgIAAAAIgIAMQgMAUgOAMQgPANgUAJIgIAEg');
    this.shape_12.setTransform(257.7289, 165.6056, 0.8642, 0.8642, 1.7514);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f('#999A9E').s().p('AgpBcIAAgBIgCAAIgKgDIgKgFIgKgHIAEAAIAUgHQALgFALgJQAJgJAFgIIAAACQgEALgDAHIgQAaQAAAAABAAQAAAAAAAAQABgBABAAQAAAAABgBQAEgBAFgGQAGgFAFgJQAFgHAEgLIAHgUIAahyIAMAFIADABIAJAGQAJAGAFAIIADAJIACAJQABAKgCAKIgFAUQgIASgHAOQgOASgKAMIgPAOQgIAIgIAFIgFADIgOAGIgDAAIgCAAIgFABg');
    this.shape_13.setTransform(285.9344, 184.4958, 0.8642, 0.8642, 1.7514);

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.shape_13}, {t: this.shape_12}, {t: this.shape_11}, {t: this.shape_10}, {t: this.shape_9}, {t: this.shape_8}, {t: this.shape_7}, {t: this.shape_6}, {t: this.shape_5}, {t: this.shape_4}, {t: this.shape_3}, {t: this.shape_2}, {t: this.shape_1}, {t: this.shape}]}).wait(1));

    this._renderFirstFrame();

  }).prototype = getMCSymbolPrototype(lib.tennis, new cjs.Rectangle(-47.3, -106.2, 407.8, 410), null);


  // stage content:
  (lib.rktk = function (mode, startPosition, loop, reversed) {
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

    // tennis_ball
    this.instance = new lib.tennis_ball();
    this.instance.setTransform(133, 83.5, 1, 1, 0, 0, 0, 28, 28);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({x: 133.5, y: 161.05}, 10, cjs.Ease.cubicIn).to({x: 133, y: 83.5}, 10, cjs.Ease.cubicOut).wait(1));

    // tennis
    this.instance_1 = new lib.tennis();
    this.instance_1.setTransform(364.8, 359.6, 1, 1, -9.4571, 0, 0, 329.8, 276.6);

    this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation: -7.4807, x: 364.85}, 9, cjs.Ease.cubicIn).to({rotation: -9.4571, x: 364.8}, 8).wait(3));

    this._renderFirstFrame();

  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(217.5, 237.7, 102.10000000000002, 87.90000000000003);
  // library properties:
  lib.properties = {
    id: '4BDDEB208ADC1143A504558FE23F9CB8',
    width: 350,
    height: 350,
    fps: 30,
    color: '#FFFFFF',
    opacity: 0.00,
    manifest: [],
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
  an.compositions['4BDDEB208ADC1143A504558FE23F9CB8'] = {
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
