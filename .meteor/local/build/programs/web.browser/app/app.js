var require = meteorInstall({"client":{"template.submit.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/template.submit.js                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("submit");                                                                                       // 2
Template["submit"] = new Template("Template.submit", (function() {                                                    // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "survey"                                                                                                 // 6
  }, HTML.Raw('<div class="question"><h3>Please enter you name</h3>\n<input id="name" class="form-control" type="text" placeholder="Name">\n<div class="base"></div></div>\n<div class="question"><p class="qnum">1/2</p>\n<h3>How many hours do you study per week?</h3>\n<ul><li><input id="q1o1" class="q1" type="radio" name="q2" value="0">\n<label for="q1o1">I don\'t study</label>\n<div class="check"></div></li>\n<li><input id="q1o2" class="q1" type="radio" name="q2" value="1">\n<label for="q1o2">0 - 5 hours</label>\n<div class="check"></div></li>\n<li><input id="q1o3" class="q1" type="radio" name="q2" value="2">\n<label for="q1o3">5 - 10 hours</label>\n<div class="check"></div></li>\n<li><input id="q1o4" class="q1" type="radio" name="q2" value="3">\n<label for="q1o4">10 - 15 hours</label>\n<div class="check"></div></li>\n<li><input id="q1o5" class="q1" type="radio" name="q2" value="4">\n<label for="q1o5">15 - 20 hours</label>\n<div class="check"></div></li>\n<li><input id="q1o6" class="q1" type="radio" name="q2" value="5">\n<label for="q1o6">more than 20 hours</label>\n<div class="check"></div></li></ul>\n<div class="base"></div></div>\n'), HTML.DIV({
    "class": "question"                                                                                               // 8
  }, HTML.Raw('<p class="qnum">2/2</p>'), "\n", HTML.Raw("<h3>How many times do you party per week?</h3>"), "\n", HTML.DIV({
    "class": "slider"                                                                                                 // 10
  }, HTML.DIV({                                                                                                       // 11
    "class": [ "slide", " ", "active-slide" ]                                                                         // 12
  }, HTML.Raw('<div id="q2" class="dragdealer"><div class="handle green-circle"></div></div>'), "\n", HTML.TABLE({    // 13
    "class": "scale"                                                                                                  // 14
  }, HTML.TR(HTML.TD("0"), "\n", HTML.TD("1"), "\n", HTML.TD("2"), "\n", HTML.TD("3"), "\n", HTML.TD("4"), "\n", HTML.TD("> 5"))))), "\n", HTML.Raw('<div class="base"></div>')), HTML.Raw('\n<div class="submit"><button id="submit" class="btn btn-large btn-block">Submit</button></div>'));
}));                                                                                                                  // 16
                                                                                                                      // 17
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/template.main.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.__checkName("main");                                                                                         // 2
Template["main"] = new Template("Template.main", (function() {                                                        // 3
  var view = this;                                                                                                    // 4
  return HTML.DIV({                                                                                                   // 5
    "class": "main"                                                                                                   // 6
  }, HTML.Raw('<div class="banner"><div class="row"><div class="col-md-8 col-sm-12"><h1>Magic GPA</h1>\n<p>Predict GPA with the art of data mining and nerual networks.</p>\n<a id="clear" class="btn btn-danger btn-lg">Clear</a>\n<a class="btn btn-info btn-lg">Trainer</a>\n<a class="btn btn-primary btn-lg" href="/submit">Submit</a>\n<hr>\n<p>A research project by Lu &amp; Travis</p></div>\n<div class="col-md-4 col-sm-12"><div class="qrcode pull-right"><div id="qrcode"></div></div></div></div>\n<div class="base"></div></div>\n'), HTML.DIV({
    "class": "results"                                                                                                // 8
  }, HTML.DIV({                                                                                                       // 9
    "class": "row"                                                                                                    // 10
  }, Blaze.Each(function() {                                                                                          // 11
    return Spacebars.call(view.lookup("surveys"));                                                                    // 12
  }, function() {                                                                                                     // 13
    return HTML.DIV({                                                                                                 // 14
      "class": [ "col-sm-12", " ", "col-md-4", " ", "col-lg-3" ]                                                      // 15
    }, HTML.DIV({                                                                                                     // 16
      "class": "result"                                                                                               // 17
    }, HTML.H1(Blaze.View("lookup:name", function() {                                                                 // 18
      return Spacebars.mustache(view.lookup("name"));                                                                 // 19
    }))));                                                                                                            // 20
  }))));                                                                                                              // 21
}));                                                                                                                  // 22
                                                                                                                      // 23
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"vendor":{"dragdealer.js":["babel-runtime/helpers/typeof",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/vendor/dragdealer.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _typeof2 = require("babel-runtime/helpers/typeof");                                                               //
                                                                                                                      //
var _typeof3 = _interopRequireDefault(_typeof2);                                                                      //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                     //
                                                                                                                      //
/**                                                                                                                   // 1
 * Dragdealer.js 0.9.8                                                                                                //
 * http://github.com/skidding/dragdealer                                                                              //
 *                                                                                                                    //
 * (c) 2010+ Ovidiu Cherecheș                                                                                         //
 * http://skidding.mit-license.org                                                                                    //
 */(function (root, factory) {                                                                                        //
  if (typeof define === 'function' && define.amd) {                                                                   // 10
    // AMD. Register as an anonymous module.                                                                          // 11
    define(factory);                                                                                                  // 12
  } else if ((typeof module === "undefined" ? "undefined" : (0, _typeof3.default)(module)) === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but                                                                  // 14
    // only CommonJS-like enviroments that support module.exports,                                                    // 15
    // like Node.                                                                                                     // 16
    module.exports.Dragdealer = factory();                                                                            // 17
  } else {                                                                                                            // 18
    // Browser globals                                                                                                // 19
    root.Dragdealer = factory();                                                                                      // 20
  }                                                                                                                   // 21
})(this, function () {                                                                                                // 22
  var Dragdealer = function (wrapper, options) {                                                                      // 24
    /**                                                                                                               // 25
     * Drag-based component that works around two basic DOM elements.                                                 //
     *                                                                                                                //
     *   - The wrapper: The top-level element with the .dragdealer class. We                                          //
     *                  create a Dragdealer instance with the wrapper as the                                          //
     *                  first constructor parameter (it can either receive the ID                                     //
     *                  of the wrapper, or the element itself.) The wrapper                                           //
     *                  establishes the dragging bounds.                                                              //
     *                                                                                                                //
     *   - The handle: A child of the wrapper element, div with a required                                            //
     *                 .handle class (may be overridden in options). This will be                                     //
     *                 the dragged element, constrained by the wrapper's bounds.                                      //
     *                                                                                                                //
     *                                                                                                                //
     * The handle can be both smaller or bigger than the wrapper.                                                     //
     *                                                                                                                //
     *   - When the handle is smaller, Dragdealer will act as a regular slider,                                       //
     *     enabling the handle to be dragged from one side of the wrapper to                                          //
     *     another.                                                                                                   //
     *                                                                                                                //
     *   - When the handle is bigger, Dragdealer will act a mask for a draggable                                      //
     *     surface, where the handle is the draggable surface contrained by the                                       //
     *     smaller bounds of the wrapper. The drag action in this case is used                                        //
     *     to reveal and "discover" partial content at a time.                                                        //
     *                                                                                                                //
     *                                                                                                                //
     * Simple usage:                                                                                                  //
     *                                                                                                                //
     *   // JavaScript                                                                                                //
     *   new Dragdealer('simple-slider');                                                                             //
     *                                                                                                                //
     *   <!-- HTML -->                                                                                                //
     *   <div id="simple-slider" class="dragdealer">                                                                  //
     *     <div class="handle">drag me</div>                                                                          //
     *   </div>                                                                                                       //
     *                                                                                                                //
     *                                                                                                                //
     * The second parameter of the Dragdealer constructor is an object used for                                       //
     * specifying any of the supported options. All of them are optional.                                             //
     *                                                                                                                //
     *   - bool disabled=false: Init Dragdealer in a disabled state. The handle                                       //
     *                          will have a .disabled class.                                                          //
     *                                                                                                                //
     *   - bool horizontal=true: Enable horizontal dragging.                                                          //
     *                                                                                                                //
     *   - bool vertical=false: Enable vertical dragging.                                                             //
     *                                                                                                                //
     *   - number x=0: Initial horizontal (left) position. Accepts a float number                                     //
     *                 value between 0 and 1. Read below about positioning in                                         //
     *                 Dragdealer.                                                                                    //
     *                                                                                                                //
     *   - number y=0: Initial vertical (top) position. Accepts a float number                                        //
     *                 value between 0 and 1. Read below about positoning in                                          //
     *                 Dragdealer.                                                                                    //
     *                                                                                                                //
     *   - number steps=0: Limit the positioning of the handle within the bounds                                      //
     *                     of the wrapper, by defining a virtual grid made out of                                     //
     *                     a number of equally-spaced steps. This restricts                                           //
     *                     placing the handle anywhere in-between these steps.                                        //
     *                     E.g. setting 3 steps to a regular slider will only                                         //
     *                     allow you to move it to the left, to the right or                                          //
     *                     exactly in the middle.                                                                     //
     *                                                                                                                //
     *   - bool snap=false: When a number of steps is set, snap the position of                                       //
     *                      the handle to its closest step instantly, even when                                       //
     *                      dragging.                                                                                 //
     *                                                                                                                //
     *   - number speed=0.1: Speed can be set between 0 and 1, with 1 being the                                       //
     *                       fastest. It represents how fast the handle will slide                                    //
     *                       to position after you mouse up.                                                          //
     *                                                                                                                //
     *   - bool slide=true: Slide handle after releasing it, depending on the                                         //
     *                      movement speed before the mouse/touch release. The                                        //
     *                      formula for calculating how much will the handle                                          //
     *                      slide after releasing it is defined by simply                                             //
     *                      extending the movement of the handle in the current                                       //
     *                      direction, with the last movement unit times four (a                                      //
     *                      movement unit is considered the distance crossed                                          //
     *                      since the last animation loop, which is currently                                         //
     *                      25ms.) So if you were to drag the handle 50px in the                                      //
     *                      blink of an eye, it will slide another 200px in the                                       //
     *                      same direction. Steps interfere with this formula, as                                     //
     *                      the closest step is calculated before the sliding                                         //
     *                      distance.                                                                                 //
     *                                                                                                                //
     *   - bool loose=false: Loosen-up wrapper boundaries when dragging. This                                         //
     *                       allows the handle to be *slightly* dragged outside                                       //
     *                       the bounds of the wrapper, but slides it back to the                                     //
     *                       margins of the wrapper upon release. The formula for                                     //
     *                       calculating how much the handle exceeds the wrapper                                      //
     *                       bounds is made out of the actual drag distance                                           //
     *                       divided by 4. E.g. Pulling a slider outside its                                          //
     *                       frame by 100px will only position it 25px outside                                        //
     *                       the frame.                                                                               //
     *                                                                                                                //
     *   - number top=0: Top padding between the wrapper and the handle.                                              //
     *                                                                                                                //
     *   - number bottom=0: Bottom padding between the wrapper and the handle.                                        //
     *                                                                                                                //
     *   - number left=0: Left padding between the wrapper and the handle.                                            //
     *                                                                                                                //
     *   - number right=0: Right padding between the wrapper and the handle.                                          //
     *                                                                                                                //
     *   - fn callback(x, y): Called when releasing handle, with the projected                                        //
     *                        x, y position of the handle. Projected value means                                      //
     *                        the value the slider will have after finishing a                                        //
     *                        sliding animation, caused by either a step                                              //
     *                        restriction or drag motion (see steps and slide                                         //
     *                        options.) This implies that the actual position of                                      //
     *                        the handle at the time this callback is called                                          //
     *                        might not yet reflect the x, y values received.                                         //
     *                                                                                                                //
     *   - fn dragStopCallback(x,y): Same as callback(x,y) but only called after                                      //
     *                               a drag motion, not after setting the step                                        //
     *                               manually.                                                                        //
     *                                                                                                                //
     *   - fn dragStartCallback(x,y): Same as dragStopCallback(x,y) but called at                                     //
     *                                the beginning of a drag motion and with the                                     //
     *                                sliders initial x, y values.                                                    //
     *                                                                                                                //
     *   - fn animationCallback(x, y): Called every animation loop, as long as                                        //
     *                                 the handle is being dragged or in the                                          //
     *                                 process of a sliding animation. The x, y                                       //
     *                                 positional values received by this                                             //
     *                                 callback reflect the exact position of the                                     //
     *                                 handle DOM element, which includes                                             //
     *                                 exceeding values (even negative values)                                        //
     *                                 when the loose option is set true.                                             //
     *                                                                                                                //
     *   - string handleClass='handle': Custom class of handle element.                                               //
     *                                                                                                                //
     *   - bool css3=true: Use css3 transform in modern browsers instead of                                           //
     *                     absolute positioning.                                                                      //
     *                                                                                                                //
     *   - fn customRequestAnimationFrame: Provide custom requestAnimationFrame                                       //
     *                                     function (used in tests).                                                  //
     *   - fn customCancelAnimationFrame: Provide custom cancelAnimationFrame                                         //
     *                                    function (used in tests).                                                   //
     *                                                                                                                //
     * Dragdealer also has a few methods to interact with, post-initialization.                                       //
     *                                                                                                                //
     *   - disable: Disable dragging of a Dragdealer instance. Just as with the                                       //
     *              disabled option, the handle will receive a .disabled class                                        //
     *                                                                                                                //
     *   - enable: Enable dragging of a Dragdealer instance. The .disabled class                                      //
     *             of the handle will be removed.                                                                     //
     *                                                                                                                //
     *   - reflow: Recalculate the wrapper bounds of a Dragdealer instance, used                                      //
     *             when the wrapper is responsive and its parent container                                            //
     *             changed its size, or after changing the size of the wrapper                                        //
     *             directly.                                                                                          //
     *                                                                                                                //
     *   - getValue: Get the value of a Dragdealer instance programatically. The                                      //
     *               value is returned as an [x, y] tuple and is the equivalent                                       //
     *               of the (projected) value returned by the regular callback,                                       //
     *               not animationCallback.                                                                           //
     *                                                                                                                //
     *   - getStep: Same as getValue, but the value returned is in step                                               //
     *              increments (see steps option)                                                                     //
     *                                                                                                                //
     *   - setValue(x, y, snap=false): Set the value of a Dragdealer instance                                         //
     *                                 programatically. The 3rd parameter allows                                      //
     *                                 to snap the handle directly to the desired                                     //
     *                                 value, without any sliding transition.                                         //
     *                                                                                                                //
     *   - setStep(x, y, snap=false): Same as setValue, but the value is received                                     //
     *                                in step increments (see steps option)                                           //
     *                                                                                                                //
     *                                                                                                                //
     * Positioning in Dragdealer:                                                                                     //
     *                                                                                                                //
     *   Besides the top, bottom, left and right paddings, which represent a                                          //
     *   number of pixels, Dragdealer uses a [0, 1]-based positioning. Both                                           //
     *   horizontal and vertical positions are represented by ratios between 0                                        //
     *   and 1. This allows the Dragdealer wrapper to have a responsive size and                                      //
     *   not revolve around a specific number of pixels. This is how the x, y                                         //
     *   options are set, what the callback args contain and what values the                                          //
     *   setValue method expects. Once picked up, the ratios can be scaled and                                        //
     *   mapped to match any real-life system of coordinates or dimensions.                                           //
     */this.options = this.applyDefaults(options || {});                                                              //
    this.bindMethods();                                                                                               // 206
    this.wrapper = this.getWrapperElement(wrapper);                                                                   // 207
                                                                                                                      //
    if (!this.wrapper) {                                                                                              // 208
      return;                                                                                                         // 209
    }                                                                                                                 // 210
                                                                                                                      //
    this.handle = this.getHandleElement(this.wrapper, this.options.handleClass);                                      // 211
                                                                                                                      //
    if (!this.handle) {                                                                                               // 212
      return;                                                                                                         // 213
    }                                                                                                                 // 214
                                                                                                                      //
    this.init();                                                                                                      // 215
    this.bindEventListeners();                                                                                        // 216
  };                                                                                                                  // 217
                                                                                                                      //
  Dragdealer.prototype = {                                                                                            // 220
    defaults: {                                                                                                       // 221
      disabled: false,                                                                                                // 222
      horizontal: true,                                                                                               // 223
      vertical: false,                                                                                                // 224
      slide: true,                                                                                                    // 225
      steps: 0,                                                                                                       // 226
      snap: false,                                                                                                    // 227
      loose: false,                                                                                                   // 228
      speed: 0.1,                                                                                                     // 229
      xPrecision: 0,                                                                                                  // 230
      yPrecision: 0,                                                                                                  // 231
      handleClass: 'handle',                                                                                          // 232
      css3: true,                                                                                                     // 233
      activeClass: 'active',                                                                                          // 234
      tapping: true                                                                                                   // 235
    },                                                                                                                // 221
    init: function () {                                                                                               // 237
      if (this.options.css3) {                                                                                        // 238
        triggerWebkitHardwareAcceleration(this.handle);                                                               // 239
      }                                                                                                               // 240
                                                                                                                      //
      this.value = {                                                                                                  // 241
        prev: [-1, -1],                                                                                               // 242
        current: [this.options.x || 0, this.options.y || 0],                                                          // 243
        target: [this.options.x || 0, this.options.y || 0]                                                            // 244
      };                                                                                                              // 241
      this.offset = {                                                                                                 // 246
        wrapper: [0, 0],                                                                                              // 247
        mouse: [0, 0],                                                                                                // 248
        prev: [-999999, -999999],                                                                                     // 249
        current: [0, 0],                                                                                              // 250
        target: [0, 0]                                                                                                // 251
      };                                                                                                              // 246
      this.dragStartPosition = {                                                                                      // 253
        x: 0,                                                                                                         // 253
        y: 0                                                                                                          // 253
      };                                                                                                              // 253
      this.change = [0, 0];                                                                                           // 254
      this.stepRatios = this.calculateStepRatios();                                                                   // 255
      this.activity = false;                                                                                          // 257
      this.dragging = false;                                                                                          // 258
      this.tapping = false;                                                                                           // 259
      this.reflow();                                                                                                  // 261
                                                                                                                      //
      if (this.options.disabled) {                                                                                    // 262
        this.disable();                                                                                               // 263
      }                                                                                                               // 264
    },                                                                                                                // 265
    applyDefaults: function (options) {                                                                               // 266
      for (var k in meteorBabelHelpers.sanitizeForInObject(this.defaults)) {                                          // 267
        if (!options.hasOwnProperty(k)) {                                                                             // 268
          options[k] = this.defaults[k];                                                                              // 269
        }                                                                                                             // 270
      }                                                                                                               // 271
                                                                                                                      //
      return options;                                                                                                 // 272
    },                                                                                                                // 273
    getWrapperElement: function (wrapper) {                                                                           // 274
      if (typeof wrapper == 'string') {                                                                               // 275
        return document.getElementById(wrapper);                                                                      // 276
      } else {                                                                                                        // 277
        return wrapper;                                                                                               // 278
      }                                                                                                               // 279
    },                                                                                                                // 280
    getHandleElement: function (wrapper, handleClass) {                                                               // 281
      var childElements, handleClassMatcher, i;                                                                       // 282
                                                                                                                      //
      if (wrapper.getElementsByClassName) {                                                                           // 285
        childElements = wrapper.getElementsByClassName(handleClass);                                                  // 286
                                                                                                                      //
        if (childElements.length > 0) {                                                                               // 287
          return childElements[0];                                                                                    // 288
        }                                                                                                             // 289
      } else {                                                                                                        // 290
        handleClassMatcher = new RegExp('(^|\\s)' + handleClass + '(\\s|$)');                                         // 291
        childElements = wrapper.getElementsByTagName('*');                                                            // 292
                                                                                                                      //
        for (i = 0; i < childElements.length; i++) {                                                                  // 293
          if (handleClassMatcher.test(childElements[i].className)) {                                                  // 294
            return childElements[i];                                                                                  // 295
          }                                                                                                           // 296
        }                                                                                                             // 297
      }                                                                                                               // 298
    },                                                                                                                // 299
    calculateStepRatios: function () {                                                                                // 300
      var stepRatios = [];                                                                                            // 301
                                                                                                                      //
      if (this.options.steps >= 1) {                                                                                  // 302
        for (var i = 0; i <= this.options.steps - 1; i++) {                                                           // 303
          if (this.options.steps > 1) {                                                                               // 304
            stepRatios[i] = i / (this.options.steps - 1);                                                             // 305
          } else {                                                                                                    // 306
            // A single step will always have a 0 value                                                               // 307
            stepRatios[i] = 0;                                                                                        // 308
          }                                                                                                           // 309
        }                                                                                                             // 310
      }                                                                                                               // 311
                                                                                                                      //
      return stepRatios;                                                                                              // 312
    },                                                                                                                // 313
    setWrapperOffset: function () {                                                                                   // 314
      this.offset.wrapper = Position.get(this.wrapper);                                                               // 315
    },                                                                                                                // 316
    calculateBounds: function () {                                                                                    // 317
      // Apply top/bottom/left and right padding options to wrapper extremities                                       // 318
      // when calculating its bounds                                                                                  // 319
      var bounds = {                                                                                                  // 320
        top: this.options.top || 0,                                                                                   // 321
        bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,                                              // 322
        left: this.options.left || 0,                                                                                 // 323
        right: -(this.options.right || 0) + this.wrapper.offsetWidth                                                  // 324
      }; // The available width and height represents the horizontal and vertical                                     // 320
      // space the handle has for moving. It is determined by the width and                                           // 327
      // height of the wrapper, minus the width and height of the handle                                              // 328
                                                                                                                      //
      bounds.availWidth = bounds.right - bounds.left - this.handle.offsetWidth;                                       // 329
      bounds.availHeight = bounds.bottom - bounds.top - this.handle.offsetHeight;                                     // 330
      return bounds;                                                                                                  // 331
    },                                                                                                                // 332
    calculateValuePrecision: function () {                                                                            // 333
      // The sliding transition works by dividing itself until it reaches a min                                       // 334
      // value step; because Dragdealer works with [0-1] values, we need this                                         // 335
      // "min value step" to represent a pixel when applied to the real handle                                        // 336
      // position within the DOM. The xPrecision/yPrecision options can be                                            // 337
      // specified to increase the granularity when we're controlling larger                                          // 338
      // objects from one of the callbacks                                                                            // 339
      var xPrecision = this.options.xPrecision || Math.abs(this.bounds.availWidth),                                   // 340
          yPrecision = this.options.yPrecision || Math.abs(this.bounds.availHeight);                                  // 340
      return [xPrecision ? 1 / xPrecision : 0, yPrecision ? 1 / yPrecision : 0];                                      // 342
    },                                                                                                                // 346
    bindMethods: function () {                                                                                        // 347
      if (typeof this.options.customRequestAnimationFrame === 'function') {                                           // 348
        this.requestAnimationFrame = bind(this.options.customRequestAnimationFrame, window);                          // 349
      } else {                                                                                                        // 350
        this.requestAnimationFrame = bind(requestAnimationFrame, window);                                             // 351
      }                                                                                                               // 352
                                                                                                                      //
      if (typeof this.options.customCancelAnimationFrame === 'function') {                                            // 353
        this.cancelAnimationFrame = bind(this.options.customCancelAnimationFrame, window);                            // 354
      } else {                                                                                                        // 355
        this.cancelAnimationFrame = bind(cancelAnimationFrame, window);                                               // 356
      }                                                                                                               // 357
                                                                                                                      //
      this.animateWithRequestAnimationFrame = bind(this.animateWithRequestAnimationFrame, this);                      // 358
      this.animate = bind(this.animate, this);                                                                        // 359
      this.onHandleMouseDown = bind(this.onHandleMouseDown, this);                                                    // 360
      this.onHandleTouchStart = bind(this.onHandleTouchStart, this);                                                  // 361
      this.onDocumentMouseMove = bind(this.onDocumentMouseMove, this);                                                // 362
      this.onWrapperTouchMove = bind(this.onWrapperTouchMove, this);                                                  // 363
      this.onWrapperMouseDown = bind(this.onWrapperMouseDown, this);                                                  // 364
      this.onWrapperTouchStart = bind(this.onWrapperTouchStart, this);                                                // 365
      this.onDocumentMouseUp = bind(this.onDocumentMouseUp, this);                                                    // 366
      this.onDocumentTouchEnd = bind(this.onDocumentTouchEnd, this);                                                  // 367
      this.onHandleClick = bind(this.onHandleClick, this);                                                            // 368
      this.onWindowResize = bind(this.onWindowResize, this);                                                          // 369
    },                                                                                                                // 370
    bindEventListeners: function () {                                                                                 // 371
      // Start dragging                                                                                               // 372
      addEventListener(this.handle, 'mousedown', this.onHandleMouseDown);                                             // 373
      addEventListener(this.handle, 'touchstart', this.onHandleTouchStart); // While dragging                         // 374
                                                                                                                      //
      addEventListener(document, 'mousemove', this.onDocumentMouseMove);                                              // 376
      addEventListener(this.wrapper, 'touchmove', this.onWrapperTouchMove); // Start tapping                          // 377
                                                                                                                      //
      addEventListener(this.wrapper, 'mousedown', this.onWrapperMouseDown);                                           // 379
      addEventListener(this.wrapper, 'touchstart', this.onWrapperTouchStart); // Stop dragging/tapping                // 380
                                                                                                                      //
      addEventListener(document, 'mouseup', this.onDocumentMouseUp);                                                  // 382
      addEventListener(document, 'touchend', this.onDocumentTouchEnd);                                                // 383
      addEventListener(this.handle, 'click', this.onHandleClick);                                                     // 385
      addEventListener(window, 'resize', this.onWindowResize);                                                        // 386
      this.animate(false, true);                                                                                      // 388
      this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame);                              // 389
    },                                                                                                                // 391
    unbindEventListeners: function () {                                                                               // 392
      removeEventListener(this.handle, 'mousedown', this.onHandleMouseDown);                                          // 393
      removeEventListener(this.handle, 'touchstart', this.onHandleTouchStart);                                        // 394
      removeEventListener(document, 'mousemove', this.onDocumentMouseMove);                                           // 395
      removeEventListener(this.wrapper, 'touchmove', this.onWrapperTouchMove);                                        // 396
      removeEventListener(this.wrapper, 'mousedown', this.onWrapperMouseDown);                                        // 397
      removeEventListener(this.wrapper, 'touchstart', this.onWrapperTouchStart);                                      // 398
      removeEventListener(document, 'mouseup', this.onDocumentMouseUp);                                               // 399
      removeEventListener(document, 'touchend', this.onDocumentTouchEnd);                                             // 400
      removeEventListener(this.handle, 'click', this.onHandleClick);                                                  // 401
      removeEventListener(window, 'resize', this.onWindowResize);                                                     // 402
      this.cancelAnimationFrame(this.interval);                                                                       // 403
    },                                                                                                                // 404
    onHandleMouseDown: function (e) {                                                                                 // 405
      Cursor.refresh(e);                                                                                              // 406
      preventEventDefaults(e);                                                                                        // 407
      stopEventPropagation(e);                                                                                        // 408
      this.activity = false;                                                                                          // 409
      this.startDrag();                                                                                               // 410
    },                                                                                                                // 411
    onHandleTouchStart: function (e) {                                                                                // 412
      Cursor.refresh(e); // Unlike in the `mousedown` event handler, we don't prevent defaults here,                  // 413
      // because this would disable the dragging altogether. Instead, we prevent                                      // 415
      // it in the `touchmove` handler. Read more about touch events                                                  // 416
      // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Touch_events#Handling_clicks                       // 417
                                                                                                                      //
      stopEventPropagation(e);                                                                                        // 418
      this.activity = false;                                                                                          // 419
      this.startDrag();                                                                                               // 420
    },                                                                                                                // 421
    onDocumentMouseMove: function (e) {                                                                               // 422
      if (e.clientX - this.dragStartPosition.x === 0 && e.clientY - this.dragStartPosition.y === 0) {                 // 423
        // This is required on some Windows8 machines that get mouse move events without actual mouse movement        // 425
        return;                                                                                                       // 426
      }                                                                                                               // 427
                                                                                                                      //
      Cursor.refresh(e);                                                                                              // 429
                                                                                                                      //
      if (this.dragging) {                                                                                            // 430
        this.activity = true;                                                                                         // 431
        preventEventDefaults(e);                                                                                      // 432
      }                                                                                                               // 433
    },                                                                                                                // 434
    onWrapperTouchMove: function (e) {                                                                                // 435
      Cursor.refresh(e); // Dragging on a disabled axis (horizontal or vertical) shouldn't prevent                    // 436
      // defaults on touch devices. !this.activity denotes this is the first move                                     // 438
      // inside a drag action; you can drag in any direction after this point if                                      // 439
      // the dragging wasn't stopped                                                                                  // 440
                                                                                                                      //
      if (!this.activity && this.draggingOnDisabledAxis()) {                                                          // 441
        if (this.dragging) {                                                                                          // 442
          this.stopDrag();                                                                                            // 443
        }                                                                                                             // 444
                                                                                                                      //
        return;                                                                                                       // 445
      } // Read comment in `onHandleTouchStart` above, to understand why we're                                        // 446
      // preventing defaults here and not there                                                                       // 448
                                                                                                                      //
                                                                                                                      //
      preventEventDefaults(e);                                                                                        // 449
      this.activity = true;                                                                                           // 450
    },                                                                                                                // 451
    onWrapperMouseDown: function (e) {                                                                                // 452
      Cursor.refresh(e);                                                                                              // 453
      preventEventDefaults(e);                                                                                        // 454
      this.startTap();                                                                                                // 455
    },                                                                                                                // 456
    onWrapperTouchStart: function (e) {                                                                               // 457
      Cursor.refresh(e);                                                                                              // 458
      preventEventDefaults(e);                                                                                        // 459
      this.startTap();                                                                                                // 460
    },                                                                                                                // 461
    onDocumentMouseUp: function (e) {                                                                                 // 462
      this.stopDrag();                                                                                                // 463
      this.stopTap();                                                                                                 // 464
    },                                                                                                                // 465
    onDocumentTouchEnd: function (e) {                                                                                // 466
      this.stopDrag();                                                                                                // 467
      this.stopTap();                                                                                                 // 468
    },                                                                                                                // 469
    onHandleClick: function (e) {                                                                                     // 470
      // We keep track if any dragging activity has been made between the                                             // 471
      // mouse/touch down and up events; based on this we allow or cancel a click                                     // 472
      // event from inside the handle. i.e. Click events shouldn't be triggered                                       // 473
      // when dragging, but should be allowed when clicking still                                                     // 474
      if (this.activity) {                                                                                            // 475
        preventEventDefaults(e);                                                                                      // 476
        stopEventPropagation(e);                                                                                      // 477
      }                                                                                                               // 478
    },                                                                                                                // 479
    onWindowResize: function (e) {                                                                                    // 480
      this.reflow();                                                                                                  // 481
    },                                                                                                                // 482
    enable: function () {                                                                                             // 483
      this.disabled = false;                                                                                          // 484
      this.handle.className = this.handle.className.replace(/\s?disabled/g, '');                                      // 485
    },                                                                                                                // 486
    disable: function () {                                                                                            // 487
      this.disabled = true;                                                                                           // 488
      this.handle.className += ' disabled';                                                                           // 489
    },                                                                                                                // 490
    reflow: function () {                                                                                             // 491
      this.setWrapperOffset();                                                                                        // 492
      this.bounds = this.calculateBounds();                                                                           // 493
      this.valuePrecision = this.calculateValuePrecision();                                                           // 494
      this.updateOffsetFromValue();                                                                                   // 495
    },                                                                                                                // 496
    getStep: function () {                                                                                            // 497
      return [this.getStepNumber(this.value.target[0]), this.getStepNumber(this.value.target[1])];                    // 498
    },                                                                                                                // 502
    getStepWidth: function () {                                                                                       // 503
      return Math.abs(this.bounds.availWidth / this.options.steps);                                                   // 504
    },                                                                                                                // 505
    getValue: function () {                                                                                           // 506
      return this.value.target;                                                                                       // 507
    },                                                                                                                // 508
    setStep: function (x, y, snap) {                                                                                  // 509
      this.setValue(this.options.steps && x > 1 ? (x - 1) / (this.options.steps - 1) : 0, this.options.steps && y > 1 ? (y - 1) / (this.options.steps - 1) : 0, snap);
    },                                                                                                                // 515
    setValue: function (x, y, snap) {                                                                                 // 516
      this.setTargetValue([x, y || 0]);                                                                               // 517
                                                                                                                      //
      if (snap) {                                                                                                     // 518
        this.groupCopy(this.value.current, this.value.target); // Since the current value will be equal to the target one instantly, the
        // animate function won't get to run so we need to update the positions                                       // 521
        // and call the callbacks manually                                                                            // 522
                                                                                                                      //
        this.updateOffsetFromValue();                                                                                 // 523
        this.callAnimationCallback();                                                                                 // 524
      }                                                                                                               // 525
    },                                                                                                                // 526
    startTap: function () {                                                                                           // 527
      if (this.disabled || !this.options.tapping) {                                                                   // 528
        return;                                                                                                       // 529
      }                                                                                                               // 530
                                                                                                                      //
      this.tapping = true;                                                                                            // 532
      this.setWrapperOffset();                                                                                        // 533
      this.setTargetValueByOffset([Cursor.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, Cursor.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2]);
    },                                                                                                                // 539
    stopTap: function () {                                                                                            // 540
      if (this.disabled || !this.tapping) {                                                                           // 541
        return;                                                                                                       // 542
      }                                                                                                               // 543
                                                                                                                      //
      this.tapping = false;                                                                                           // 544
      this.setTargetValue(this.value.current);                                                                        // 546
    },                                                                                                                // 547
    startDrag: function () {                                                                                          // 548
      if (this.disabled) {                                                                                            // 549
        return;                                                                                                       // 550
      }                                                                                                               // 551
                                                                                                                      //
      this.dragging = true;                                                                                           // 552
      this.setWrapperOffset();                                                                                        // 553
      this.dragStartPosition = {                                                                                      // 555
        x: Cursor.x,                                                                                                  // 555
        y: Cursor.y                                                                                                   // 555
      };                                                                                                              // 555
      this.offset.mouse = [Cursor.x - Position.get(this.handle)[0], Cursor.y - Position.get(this.handle)[1]];         // 556
                                                                                                                      //
      if (!this.wrapper.className.match(this.options.activeClass)) {                                                  // 560
        this.wrapper.className += ' ' + this.options.activeClass;                                                     // 561
      }                                                                                                               // 562
                                                                                                                      //
      this.callDragStartCallback();                                                                                   // 563
    },                                                                                                                // 564
    stopDrag: function () {                                                                                           // 565
      if (this.disabled || !this.dragging) {                                                                          // 566
        return;                                                                                                       // 567
      }                                                                                                               // 568
                                                                                                                      //
      this.dragging = false;                                                                                          // 569
      var deltaX = this.bounds.availWidth === 0 ? 0 : (Cursor.x - this.dragStartPosition.x) / this.bounds.availWidth,
          deltaY = this.bounds.availHeight === 0 ? 0 : (Cursor.y - this.dragStartPosition.y) / this.bounds.availHeight,
          delta = [deltaX, deltaY];                                                                                   // 570
      var target = this.groupClone(this.value.current);                                                               // 576
                                                                                                                      //
      if (this.options.slide) {                                                                                       // 577
        var ratioChange = this.change;                                                                                // 578
        target[0] += ratioChange[0] * 4;                                                                              // 579
        target[1] += ratioChange[1] * 4;                                                                              // 580
      }                                                                                                               // 581
                                                                                                                      //
      this.setTargetValue(target);                                                                                    // 582
      this.wrapper.className = this.wrapper.className.replace(' ' + this.options.activeClass, '');                    // 583
      this.callDragStopCallback(delta);                                                                               // 584
    },                                                                                                                // 585
    callAnimationCallback: function () {                                                                              // 586
      var value = this.value.current;                                                                                 // 587
                                                                                                                      //
      if (this.options.snap && this.options.steps > 1) {                                                              // 588
        value = this.getClosestSteps(value);                                                                          // 589
      }                                                                                                               // 590
                                                                                                                      //
      if (!this.groupCompare(value, this.value.prev)) {                                                               // 591
        if (typeof this.options.animationCallback == 'function') {                                                    // 592
          this.options.animationCallback.call(this, value[0], value[1]);                                              // 593
        }                                                                                                             // 594
                                                                                                                      //
        this.groupCopy(this.value.prev, value);                                                                       // 595
      }                                                                                                               // 596
    },                                                                                                                // 597
    callTargetCallback: function () {                                                                                 // 598
      if (typeof this.options.callback == 'function') {                                                               // 599
        this.options.callback.call(this, this.value.target[0], this.value.target[1]);                                 // 600
      }                                                                                                               // 601
    },                                                                                                                // 602
    callDragStartCallback: function () {                                                                              // 603
      if (typeof this.options.dragStartCallback == 'function') {                                                      // 604
        this.options.dragStartCallback.call(this, this.value.target[0], this.value.target[1]);                        // 605
      }                                                                                                               // 606
    },                                                                                                                // 607
    callDragStopCallback: function (delta) {                                                                          // 608
      if (typeof this.options.dragStopCallback == 'function') {                                                       // 609
        this.options.dragStopCallback.call(this, this.value.target[0], this.value.target[1], delta);                  // 610
      }                                                                                                               // 611
    },                                                                                                                // 612
    animateWithRequestAnimationFrame: function (time) {                                                               // 613
      if (time) {                                                                                                     // 614
        // using requestAnimationFrame                                                                                // 615
        this.timeOffset = this.timeStamp ? time - this.timeStamp : 0;                                                 // 616
        this.timeStamp = time;                                                                                        // 617
      } else {                                                                                                        // 618
        // using setTimeout(callback, 25) polyfill                                                                    // 619
        this.timeOffset = 25;                                                                                         // 620
      }                                                                                                               // 621
                                                                                                                      //
      this.animate();                                                                                                 // 622
      this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame);                              // 623
    },                                                                                                                // 624
    animate: function (direct, first) {                                                                               // 625
      if (direct && !this.dragging) {                                                                                 // 626
        return;                                                                                                       // 627
      }                                                                                                               // 628
                                                                                                                      //
      if (this.dragging) {                                                                                            // 629
        var prevTarget = this.groupClone(this.value.target);                                                          // 630
        var offset = [Cursor.x - this.offset.wrapper[0] - this.offset.mouse[0], Cursor.y - this.offset.wrapper[1] - this.offset.mouse[1]];
        this.setTargetValueByOffset(offset, this.options.loose);                                                      // 636
        this.change = [this.value.target[0] - prevTarget[0], this.value.target[1] - prevTarget[1]];                   // 638
      }                                                                                                               // 642
                                                                                                                      //
      if (this.dragging || first) {                                                                                   // 643
        this.groupCopy(this.value.current, this.value.target);                                                        // 644
      }                                                                                                               // 645
                                                                                                                      //
      if (this.dragging || this.glide() || first) {                                                                   // 646
        this.updateOffsetFromValue();                                                                                 // 647
        this.callAnimationCallback();                                                                                 // 648
      }                                                                                                               // 649
    },                                                                                                                // 650
    glide: function () {                                                                                              // 651
      var diff = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];        // 652
                                                                                                                      //
      if (!diff[0] && !diff[1]) {                                                                                     // 656
        return false;                                                                                                 // 657
      }                                                                                                               // 658
                                                                                                                      //
      if (Math.abs(diff[0]) > this.valuePrecision[0] || Math.abs(diff[1]) > this.valuePrecision[1]) {                 // 659
        this.value.current[0] += diff[0] * Math.min(this.options.speed * this.timeOffset / 25, 1);                    // 661
        this.value.current[1] += diff[1] * Math.min(this.options.speed * this.timeOffset / 25, 1);                    // 662
      } else {                                                                                                        // 663
        this.groupCopy(this.value.current, this.value.target);                                                        // 664
      }                                                                                                               // 665
                                                                                                                      //
      return true;                                                                                                    // 666
    },                                                                                                                // 667
    updateOffsetFromValue: function () {                                                                              // 668
      if (!this.options.snap) {                                                                                       // 669
        this.offset.current = this.getOffsetsByRatios(this.value.current);                                            // 670
      } else {                                                                                                        // 671
        this.offset.current = this.getOffsetsByRatios(this.getClosestSteps(this.value.current));                      // 672
      }                                                                                                               // 675
                                                                                                                      //
      if (!this.groupCompare(this.offset.current, this.offset.prev)) {                                                // 676
        this.renderHandlePosition();                                                                                  // 677
        this.groupCopy(this.offset.prev, this.offset.current);                                                        // 678
      }                                                                                                               // 679
    },                                                                                                                // 680
    renderHandlePosition: function () {                                                                               // 681
      var transform = '';                                                                                             // 683
                                                                                                                      //
      if (this.options.css3 && StylePrefix.transform) {                                                               // 684
        if (this.options.horizontal) {                                                                                // 685
          transform += 'translateX(' + this.offset.current[0] + 'px)';                                                // 686
        }                                                                                                             // 687
                                                                                                                      //
        if (this.options.vertical) {                                                                                  // 688
          transform += ' translateY(' + this.offset.current[1] + 'px)';                                               // 689
        }                                                                                                             // 690
                                                                                                                      //
        this.handle.style[StylePrefix.transform] = transform;                                                         // 691
        return;                                                                                                       // 692
      }                                                                                                               // 693
                                                                                                                      //
      if (this.options.horizontal) {                                                                                  // 695
        this.handle.style.left = this.offset.current[0] + 'px';                                                       // 696
      }                                                                                                               // 697
                                                                                                                      //
      if (this.options.vertical) {                                                                                    // 698
        this.handle.style.top = this.offset.current[1] + 'px';                                                        // 699
      }                                                                                                               // 700
    },                                                                                                                // 701
    setTargetValue: function (value, loose) {                                                                         // 702
      var target = loose ? this.getLooseValue(value) : this.getProperValue(value);                                    // 703
      this.groupCopy(this.value.target, target);                                                                      // 705
      this.offset.target = this.getOffsetsByRatios(target);                                                           // 706
      this.callTargetCallback();                                                                                      // 708
    },                                                                                                                // 709
    setTargetValueByOffset: function (offset, loose) {                                                                // 710
      var value = this.getRatiosByOffsets(offset);                                                                    // 711
      var target = loose ? this.getLooseValue(value) : this.getProperValue(value);                                    // 712
      this.groupCopy(this.value.target, target);                                                                      // 714
      this.offset.target = this.getOffsetsByRatios(target);                                                           // 715
    },                                                                                                                // 716
    getLooseValue: function (value) {                                                                                 // 717
      var proper = this.getProperValue(value);                                                                        // 718
      return [proper[0] + (value[0] - proper[0]) / 4, proper[1] + (value[1] - proper[1]) / 4];                        // 719
    },                                                                                                                // 723
    getProperValue: function (value) {                                                                                // 724
      var proper = this.groupClone(value);                                                                            // 725
      proper[0] = Math.max(proper[0], 0);                                                                             // 727
      proper[1] = Math.max(proper[1], 0);                                                                             // 728
      proper[0] = Math.min(proper[0], 1);                                                                             // 729
      proper[1] = Math.min(proper[1], 1);                                                                             // 730
                                                                                                                      //
      if (!this.dragging && !this.tapping || this.options.snap) {                                                     // 732
        if (this.options.steps > 1) {                                                                                 // 733
          proper = this.getClosestSteps(proper);                                                                      // 734
        }                                                                                                             // 735
      }                                                                                                               // 736
                                                                                                                      //
      return proper;                                                                                                  // 737
    },                                                                                                                // 738
    getRatiosByOffsets: function (group) {                                                                            // 739
      return [this.getRatioByOffset(group[0], this.bounds.availWidth, this.bounds.left), this.getRatioByOffset(group[1], this.bounds.availHeight, this.bounds.top)];
    },                                                                                                                // 744
    getRatioByOffset: function (offset, range, padding) {                                                             // 745
      return range ? (offset - padding) / range : 0;                                                                  // 746
    },                                                                                                                // 747
    getOffsetsByRatios: function (group) {                                                                            // 748
      return [this.getOffsetByRatio(group[0], this.bounds.availWidth, this.bounds.left), this.getOffsetByRatio(group[1], this.bounds.availHeight, this.bounds.top)];
    },                                                                                                                // 753
    getOffsetByRatio: function (ratio, range, padding) {                                                              // 754
      return Math.round(ratio * range) + padding;                                                                     // 755
    },                                                                                                                // 756
    getStepNumber: function (value) {                                                                                 // 757
      // Translate a [0-1] value into a number from 1 to N steps (set using the                                       // 758
      // "steps" option)                                                                                              // 759
      return this.getClosestStep(value) * (this.options.steps - 1) + 1;                                               // 760
    },                                                                                                                // 761
    getClosestSteps: function (group) {                                                                               // 762
      return [this.getClosestStep(group[0]), this.getClosestStep(group[1])];                                          // 763
    },                                                                                                                // 767
    getClosestStep: function (value) {                                                                                // 768
      var k = 0;                                                                                                      // 769
      var min = 1;                                                                                                    // 770
                                                                                                                      //
      for (var i = 0; i <= this.options.steps - 1; i++) {                                                             // 771
        if (Math.abs(this.stepRatios[i] - value) < min) {                                                             // 772
          min = Math.abs(this.stepRatios[i] - value);                                                                 // 773
          k = i;                                                                                                      // 774
        }                                                                                                             // 775
      }                                                                                                               // 776
                                                                                                                      //
      return this.stepRatios[k];                                                                                      // 777
    },                                                                                                                // 778
    groupCompare: function (a, b) {                                                                                   // 779
      return a[0] == b[0] && a[1] == b[1];                                                                            // 780
    },                                                                                                                // 781
    groupCopy: function (a, b) {                                                                                      // 782
      a[0] = b[0];                                                                                                    // 783
      a[1] = b[1];                                                                                                    // 784
    },                                                                                                                // 785
    groupClone: function (a) {                                                                                        // 786
      return [a[0], a[1]];                                                                                            // 787
    },                                                                                                                // 788
    draggingOnDisabledAxis: function () {                                                                             // 789
      return !this.options.horizontal && Cursor.xDiff > Cursor.yDiff || !this.options.vertical && Cursor.yDiff > Cursor.xDiff;
    }                                                                                                                 // 792
  };                                                                                                                  // 220
                                                                                                                      //
  var bind = function (fn, context) {                                                                                 // 796
    /**                                                                                                               // 797
     * CoffeeScript-like function to bind the scope of a method to an instance,                                       //
     * the context of that method, regardless from where it is called                                                 //
     */return function () {                                                                                           //
      return fn.apply(context, arguments);                                                                            // 802
    };                                                                                                                // 803
  }; // Cross-browser vanilla JS event handling                                                                       // 804
                                                                                                                      //
                                                                                                                      //
  var addEventListener = function (element, type, callback) {                                                         // 808
    if (element.addEventListener) {                                                                                   // 809
      element.addEventListener(type, callback, false);                                                                // 810
    } else if (element.attachEvent) {                                                                                 // 811
      element.attachEvent('on' + type, callback);                                                                     // 812
    }                                                                                                                 // 813
  };                                                                                                                  // 814
                                                                                                                      //
  var removeEventListener = function (element, type, callback) {                                                      // 816
    if (element.removeEventListener) {                                                                                // 817
      element.removeEventListener(type, callback, false);                                                             // 818
    } else if (element.detachEvent) {                                                                                 // 819
      element.detachEvent('on' + type, callback);                                                                     // 820
    }                                                                                                                 // 821
  };                                                                                                                  // 822
                                                                                                                      //
  var preventEventDefaults = function (e) {                                                                           // 824
    if (!e) {                                                                                                         // 825
      e = window.event;                                                                                               // 826
    }                                                                                                                 // 827
                                                                                                                      //
    if (e.preventDefault) {                                                                                           // 828
      e.preventDefault();                                                                                             // 829
    }                                                                                                                 // 830
                                                                                                                      //
    e.returnValue = false;                                                                                            // 831
  };                                                                                                                  // 832
                                                                                                                      //
  var stopEventPropagation = function (e) {                                                                           // 834
    if (!e) {                                                                                                         // 835
      e = window.event;                                                                                               // 836
    }                                                                                                                 // 837
                                                                                                                      //
    if (e.stopPropagation) {                                                                                          // 838
      e.stopPropagation();                                                                                            // 839
    }                                                                                                                 // 840
                                                                                                                      //
    e.cancelBubble = true;                                                                                            // 841
  };                                                                                                                  // 842
                                                                                                                      //
  var Cursor = {                                                                                                      // 845
    /**                                                                                                               // 846
     * Abstraction for making the combined mouse or touch position available at                                       //
     * any time.                                                                                                      //
     *                                                                                                                //
     * It picks up the "move" events as an independent component and simply makes                                     //
     * the latest x and y mouse/touch position of the user available at any time,                                     //
     * which is requested with Cursor.x and Cursor.y respectively.                                                    //
     *                                                                                                                //
     * It can receive both mouse and touch events consecutively, extracting the                                       //
     * relevant meta data from each type of event.                                                                    //
     *                                                                                                                //
     * Cursor.refresh(e) is called to update the global x and y values, with a                                        //
     * genuine MouseEvent or a TouchEvent from an event listener, e.g.                                                //
     * mousedown/up or touchstart/end                                                                                 //
     */x: 0,                                                                                                          //
    y: 0,                                                                                                             // 862
    xDiff: 0,                                                                                                         // 863
    yDiff: 0,                                                                                                         // 864
    refresh: function (e) {                                                                                           // 865
      if (!e) {                                                                                                       // 866
        e = window.event;                                                                                             // 867
      }                                                                                                               // 868
                                                                                                                      //
      if (e.type == 'mousemove') {                                                                                    // 869
        this.set(e);                                                                                                  // 870
      } else if (e.touches) {                                                                                         // 871
        this.set(e.touches[0]);                                                                                       // 872
      }                                                                                                               // 873
    },                                                                                                                // 874
    set: function (e) {                                                                                               // 875
      var lastX = this.x,                                                                                             // 876
          lastY = this.y;                                                                                             // 876
                                                                                                                      //
      if (e.clientX || e.clientY) {                                                                                   // 878
        this.x = e.clientX;                                                                                           // 879
        this.y = e.clientY;                                                                                           // 880
      } else if (e.pageX || e.pageY) {                                                                                // 881
        this.x = e.pageX - document.body.scrollLeft - document.documentElement.scrollLeft;                            // 882
        this.y = e.pageY - document.body.scrollTop - document.documentElement.scrollTop;                              // 883
      }                                                                                                               // 884
                                                                                                                      //
      this.xDiff = Math.abs(this.x - lastX);                                                                          // 885
      this.yDiff = Math.abs(this.y - lastY);                                                                          // 886
    }                                                                                                                 // 887
  };                                                                                                                  // 845
  var Position = {                                                                                                    // 891
    /**                                                                                                               // 892
     * Helper for extracting position of a DOM element, relative to the viewport                                      //
     *                                                                                                                //
     * The get(obj) method accepts a DOM element as the only parameter, and                                           //
     * returns the position under a (x, y) tuple, as an array with two elements.                                      //
     */get: function (obj) {                                                                                          //
      // Dragdealer relies on getBoundingClientRect to calculate element offsets,                                     // 899
      // but we want to be sure we don't throw any unhandled exceptions and break                                     // 900
      // other code from the page if running from in very old browser that doesn't                                    // 901
      // support this method                                                                                          // 902
      var rect = {                                                                                                    // 903
        left: 0,                                                                                                      // 903
        top: 0                                                                                                        // 903
      };                                                                                                              // 903
                                                                                                                      //
      if (obj.getBoundingClientRect !== undefined) {                                                                  // 904
        rect = obj.getBoundingClientRect();                                                                           // 905
      }                                                                                                               // 906
                                                                                                                      //
      return [rect.left, rect.top];                                                                                   // 907
    }                                                                                                                 // 908
  };                                                                                                                  // 891
  var StylePrefix = {                                                                                                 // 912
    transform: getPrefixedStylePropName('transform'),                                                                 // 913
    perspective: getPrefixedStylePropName('perspective'),                                                             // 914
    backfaceVisibility: getPrefixedStylePropName('backfaceVisibility')                                                // 915
  };                                                                                                                  // 912
                                                                                                                      //
  function getPrefixedStylePropName(propName) {                                                                       // 918
    var domPrefixes = 'Webkit Moz ms O'.split(' '),                                                                   // 919
        elStyle = document.documentElement.style;                                                                     // 919
    if (elStyle[propName] !== undefined) return propName; // Is supported unprefixed                                  // 921
                                                                                                                      //
    propName = propName.charAt(0).toUpperCase() + propName.substr(1);                                                 // 922
                                                                                                                      //
    for (var i = 0; i < domPrefixes.length; i++) {                                                                    // 923
      if (elStyle[domPrefixes[i] + propName] !== undefined) {                                                         // 924
        return domPrefixes[i] + propName; // Is supported with prefix                                                 // 925
      }                                                                                                               // 926
    }                                                                                                                 // 927
  }                                                                                                                   // 928
                                                                                                                      //
  ;                                                                                                                   // 928
                                                                                                                      //
  function triggerWebkitHardwareAcceleration(element) {                                                               // 930
    if (StylePrefix.backfaceVisibility && StylePrefix.perspective) {                                                  // 931
      element.style[StylePrefix.perspective] = '1000px';                                                              // 932
      element.style[StylePrefix.backfaceVisibility] = 'hidden';                                                       // 933
    }                                                                                                                 // 934
  }                                                                                                                   // 935
                                                                                                                      //
  ;                                                                                                                   // 935
  var vendors = ['webkit', 'moz'];                                                                                    // 937
  var requestAnimationFrame = window.requestAnimationFrame;                                                           // 938
  var cancelAnimationFrame = window.cancelAnimationFrame;                                                             // 939
                                                                                                                      //
  for (var x = 0; x < vendors.length && !requestAnimationFrame; ++x) {                                                // 941
    requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];                                             // 942
    cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }                                                                                                                   // 945
                                                                                                                      //
  if (!requestAnimationFrame) {                                                                                       // 947
    requestAnimationFrame = function (callback) {                                                                     // 948
      return setTimeout(callback, 25);                                                                                // 949
    };                                                                                                                // 950
                                                                                                                      //
    cancelAnimationFrame = clearTimeout;                                                                              // 951
  }                                                                                                                   // 952
                                                                                                                      //
  return Dragdealer;                                                                                                  // 954
});                                                                                                                   // 956
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"qrcode.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/vendor/qrcode.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/**                                                                                                                   // 1
 * @fileoverview                                                                                                      //
 * - Using the 'QRCode for Javascript library'                                                                        //
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.                                          //
 * - this library has no dependencies.                                                                                //
 *                                                                                                                    //
 * @author davidshimjs                                                                                                //
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>                             //
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 */var QRCode;                                                                                                        //
                                                                                                                      //
(function () {                                                                                                        // 13
	//---------------------------------------------------------------------                                              // 14
	// QRCode for JavaScript                                                                                             // 15
	//                                                                                                                   // 16
	// Copyright (c) 2009 Kazuhiko Arase                                                                                 // 17
	//                                                                                                                   // 18
	// URL: http://www.d-project.com/                                                                                    // 19
	//                                                                                                                   // 20
	// Licensed under the MIT license:                                                                                   // 21
	//   http://www.opensource.org/licenses/mit-license.php                                                              // 22
	//                                                                                                                   // 23
	// The word "QR Code" is registered trademark of                                                                     // 24
	// DENSO WAVE INCORPORATED                                                                                           // 25
	//   http://www.denso-wave.com/qrcode/faqpatent-e.html                                                               // 26
	//                                                                                                                   // 27
	//---------------------------------------------------------------------                                              // 28
	function QR8bitByte(data) {                                                                                          // 29
		this.mode = QRMode.MODE_8BIT_BYTE;                                                                                  // 30
		this.data = data;                                                                                                   // 31
		this.parsedData = []; // Added to support UTF-8 Characters                                                          // 32
                                                                                                                      //
		for (var i = 0, l = this.data.length; i < l; i++) {                                                                 // 35
			var byteArray = [];                                                                                                // 36
			var code = this.data.charCodeAt(i);                                                                                // 37
                                                                                                                      //
			if (code > 0x10000) {                                                                                              // 39
				byteArray[0] = 0xF0 | (code & 0x1C0000) >>> 18;                                                                   // 40
				byteArray[1] = 0x80 | (code & 0x3F000) >>> 12;                                                                    // 41
				byteArray[2] = 0x80 | (code & 0xFC0) >>> 6;                                                                       // 42
				byteArray[3] = 0x80 | code & 0x3F;                                                                                // 43
			} else if (code > 0x800) {                                                                                         // 44
				byteArray[0] = 0xE0 | (code & 0xF000) >>> 12;                                                                     // 45
				byteArray[1] = 0x80 | (code & 0xFC0) >>> 6;                                                                       // 46
				byteArray[2] = 0x80 | code & 0x3F;                                                                                // 47
			} else if (code > 0x80) {                                                                                          // 48
				byteArray[0] = 0xC0 | (code & 0x7C0) >>> 6;                                                                       // 49
				byteArray[1] = 0x80 | code & 0x3F;                                                                                // 50
			} else {                                                                                                           // 51
				byteArray[0] = code;                                                                                              // 52
			}                                                                                                                  // 53
                                                                                                                      //
			this.parsedData.push(byteArray);                                                                                   // 55
		}                                                                                                                   // 56
                                                                                                                      //
		this.parsedData = Array.prototype.concat.apply([], this.parsedData);                                                // 58
                                                                                                                      //
		if (this.parsedData.length != this.data.length) {                                                                   // 60
			this.parsedData.unshift(191);                                                                                      // 61
			this.parsedData.unshift(187);                                                                                      // 62
			this.parsedData.unshift(239);                                                                                      // 63
		}                                                                                                                   // 64
	}                                                                                                                    // 65
                                                                                                                      //
	QR8bitByte.prototype = {                                                                                             // 67
		getLength: function (buffer) {                                                                                      // 68
			return this.parsedData.length;                                                                                     // 69
		},                                                                                                                  // 70
		write: function (buffer) {                                                                                          // 71
			for (var i = 0, l = this.parsedData.length; i < l; i++) {                                                          // 72
				buffer.put(this.parsedData[i], 8);                                                                                // 73
			}                                                                                                                  // 74
		}                                                                                                                   // 75
	};                                                                                                                   // 67
                                                                                                                      //
	function QRCodeModel(typeNumber, errorCorrectLevel) {                                                                // 78
		this.typeNumber = typeNumber;                                                                                       // 79
		this.errorCorrectLevel = errorCorrectLevel;                                                                         // 80
		this.modules = null;                                                                                                // 81
		this.moduleCount = 0;                                                                                               // 82
		this.dataCache = null;                                                                                              // 83
		this.dataList = [];                                                                                                 // 84
	}                                                                                                                    // 85
                                                                                                                      //
	QRCodeModel.prototype = {                                                                                            // 87
		addData: function (data) {                                                                                          // 87
			var newData = new QR8bitByte(data);                                                                                // 87
			this.dataList.push(newData);                                                                                       // 87
			this.dataCache = null;                                                                                             // 87
		},                                                                                                                  // 87
		isDark: function (row, col) {                                                                                       // 87
			if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {                                    // 87
				throw new Error(row + "," + col);                                                                                 // 87
			}                                                                                                                  // 87
                                                                                                                      //
			return this.modules[row][col];                                                                                     // 88
		},                                                                                                                  // 88
		getModuleCount: function () {                                                                                       // 88
			return this.moduleCount;                                                                                           // 88
		},                                                                                                                  // 88
		make: function () {                                                                                                 // 88
			this.makeImpl(false, this.getBestMaskPattern());                                                                   // 88
		},                                                                                                                  // 88
		makeImpl: function (test, maskPattern) {                                                                            // 88
			this.moduleCount = this.typeNumber * 4 + 17;                                                                       // 88
			this.modules = new Array(this.moduleCount);                                                                        // 88
                                                                                                                      //
			for (var row = 0; row < this.moduleCount; row++) {                                                                 // 88
				this.modules[row] = new Array(this.moduleCount);                                                                  // 88
                                                                                                                      //
				for (var col = 0; col < this.moduleCount; col++) {                                                                // 88
					this.modules[row][col] = null;                                                                                   // 88
				}                                                                                                                 // 88
			}                                                                                                                  // 88
                                                                                                                      //
			this.setupPositionProbePattern(0, 0);                                                                              // 89
			this.setupPositionProbePattern(this.moduleCount - 7, 0);                                                           // 89
			this.setupPositionProbePattern(0, this.moduleCount - 7);                                                           // 89
			this.setupPositionAdjustPattern();                                                                                 // 89
			this.setupTimingPattern();                                                                                         // 89
			this.setupTypeInfo(test, maskPattern);                                                                             // 89
                                                                                                                      //
			if (this.typeNumber >= 7) {                                                                                        // 89
				this.setupTypeNumber(test);                                                                                       // 89
			}                                                                                                                  // 89
                                                                                                                      //
			if (this.dataCache == null) {                                                                                      // 90
				this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);                  // 90
			}                                                                                                                  // 90
                                                                                                                      //
			this.mapData(this.dataCache, maskPattern);                                                                         // 91
		},                                                                                                                  // 91
		setupPositionProbePattern: function (row, col) {                                                                    // 91
			for (var r = -1; r <= 7; r++) {                                                                                    // 91
				if (row + r <= -1 || this.moduleCount <= row + r) continue;                                                       // 91
                                                                                                                      //
				for (var c = -1; c <= 7; c++) {                                                                                   // 91
					if (col + c <= -1 || this.moduleCount <= col + c) continue;                                                      // 91
                                                                                                                      //
					if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
						this.modules[row + r][col + c] = true;                                                                          // 91
					} else {                                                                                                         // 91
						this.modules[row + r][col + c] = false;                                                                         // 91
					}                                                                                                                // 91
				}                                                                                                                 // 91
			}                                                                                                                  // 91
		},                                                                                                                  // 91
		getBestMaskPattern: function () {                                                                                   // 91
			var minLostPoint = 0;                                                                                              // 91
			var pattern = 0;                                                                                                   // 91
                                                                                                                      //
			for (var i = 0; i < 8; i++) {                                                                                      // 91
				this.makeImpl(true, i);                                                                                           // 91
				var lostPoint = QRUtil.getLostPoint(this);                                                                        // 91
                                                                                                                      //
				if (i == 0 || minLostPoint > lostPoint) {                                                                         // 91
					minLostPoint = lostPoint;                                                                                        // 91
					pattern = i;                                                                                                     // 91
				}                                                                                                                 // 91
			}                                                                                                                  // 91
                                                                                                                      //
			return pattern;                                                                                                    // 92
		},                                                                                                                  // 92
		createMovieClip: function (target_mc, instance_name, depth) {                                                       // 92
			var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);                                                  // 92
			var cs = 1;                                                                                                        // 92
			this.make();                                                                                                       // 92
                                                                                                                      //
			for (var row = 0; row < this.modules.length; row++) {                                                              // 92
				var y = row * cs;                                                                                                 // 92
                                                                                                                      //
				for (var col = 0; col < this.modules[row].length; col++) {                                                        // 92
					var x = col * cs;                                                                                                // 92
					var dark = this.modules[row][col];                                                                               // 92
                                                                                                                      //
					if (dark) {                                                                                                      // 92
						qr_mc.beginFill(0, 100);                                                                                        // 92
						qr_mc.moveTo(x, y);                                                                                             // 92
						qr_mc.lineTo(x + cs, y);                                                                                        // 92
						qr_mc.lineTo(x + cs, y + cs);                                                                                   // 92
						qr_mc.lineTo(x, y + cs);                                                                                        // 92
						qr_mc.endFill();                                                                                                // 92
					}                                                                                                                // 92
				}                                                                                                                 // 92
			}                                                                                                                  // 92
                                                                                                                      //
			return qr_mc;                                                                                                      // 93
		},                                                                                                                  // 93
		setupTimingPattern: function () {                                                                                   // 93
			for (var r = 8; r < this.moduleCount - 8; r++) {                                                                   // 93
				if (this.modules[r][6] != null) {                                                                                 // 93
					continue;                                                                                                        // 93
				}                                                                                                                 // 93
                                                                                                                      //
				this.modules[r][6] = r % 2 == 0;                                                                                  // 94
			}                                                                                                                  // 94
                                                                                                                      //
			for (var c = 8; c < this.moduleCount - 8; c++) {                                                                   // 95
				if (this.modules[6][c] != null) {                                                                                 // 95
					continue;                                                                                                        // 95
				}                                                                                                                 // 95
                                                                                                                      //
				this.modules[6][c] = c % 2 == 0;                                                                                  // 96
			}                                                                                                                  // 96
		},                                                                                                                  // 96
		setupPositionAdjustPattern: function () {                                                                           // 96
			var pos = QRUtil.getPatternPosition(this.typeNumber);                                                              // 96
                                                                                                                      //
			for (var i = 0; i < pos.length; i++) {                                                                             // 96
				for (var j = 0; j < pos.length; j++) {                                                                            // 96
					var row = pos[i];                                                                                                // 96
					var col = pos[j];                                                                                                // 96
                                                                                                                      //
					if (this.modules[row][col] != null) {                                                                            // 96
						continue;                                                                                                       // 96
					}                                                                                                                // 96
                                                                                                                      //
					for (var r = -2; r <= 2; r++) {                                                                                  // 97
						for (var c = -2; c <= 2; c++) {                                                                                 // 97
							if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {                                              // 97
								this.modules[row + r][col + c] = true;                                                                        // 97
							} else {                                                                                                       // 97
								this.modules[row + r][col + c] = false;                                                                       // 97
							}                                                                                                              // 97
						}                                                                                                               // 97
					}                                                                                                                // 97
				}                                                                                                                 // 97
			}                                                                                                                  // 97
		},                                                                                                                  // 97
		setupTypeNumber: function (test) {                                                                                  // 97
			var bits = QRUtil.getBCHTypeNumber(this.typeNumber);                                                               // 97
                                                                                                                      //
			for (var i = 0; i < 18; i++) {                                                                                     // 97
				var mod = !test && (bits >> i & 1) == 1;                                                                          // 97
				this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;                                          // 97
			}                                                                                                                  // 97
                                                                                                                      //
			for (var i = 0; i < 18; i++) {                                                                                     // 98
				var mod = !test && (bits >> i & 1) == 1;                                                                          // 98
				this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;                                          // 98
			}                                                                                                                  // 98
		},                                                                                                                  // 98
		setupTypeInfo: function (test, maskPattern) {                                                                       // 98
			var data = this.errorCorrectLevel << 3 | maskPattern;                                                              // 98
			var bits = QRUtil.getBCHTypeInfo(data);                                                                            // 98
                                                                                                                      //
			for (var i = 0; i < 15; i++) {                                                                                     // 98
				var mod = !test && (bits >> i & 1) == 1;                                                                          // 98
                                                                                                                      //
				if (i < 6) {                                                                                                      // 98
					this.modules[i][8] = mod;                                                                                        // 98
				} else if (i < 8) {                                                                                               // 98
					this.modules[i + 1][8] = mod;                                                                                    // 98
				} else {                                                                                                          // 98
					this.modules[this.moduleCount - 15 + i][8] = mod;                                                                // 98
				}                                                                                                                 // 98
			}                                                                                                                  // 98
                                                                                                                      //
			for (var i = 0; i < 15; i++) {                                                                                     // 99
				var mod = !test && (bits >> i & 1) == 1;                                                                          // 99
                                                                                                                      //
				if (i < 8) {                                                                                                      // 99
					this.modules[8][this.moduleCount - i - 1] = mod;                                                                 // 99
				} else if (i < 9) {                                                                                               // 99
					this.modules[8][15 - i - 1 + 1] = mod;                                                                           // 99
				} else {                                                                                                          // 99
					this.modules[8][15 - i - 1] = mod;                                                                               // 99
				}                                                                                                                 // 99
			}                                                                                                                  // 99
                                                                                                                      //
			this.modules[this.moduleCount - 8][8] = !test;                                                                     // 100
		},                                                                                                                  // 100
		mapData: function (data, maskPattern) {                                                                             // 100
			var inc = -1;                                                                                                      // 100
			var row = this.moduleCount - 1;                                                                                    // 100
			var bitIndex = 7;                                                                                                  // 100
			var byteIndex = 0;                                                                                                 // 100
                                                                                                                      //
			for (var col = this.moduleCount - 1; col > 0; col -= 2) {                                                          // 100
				if (col == 6) col--;                                                                                              // 100
                                                                                                                      //
				while (true) {                                                                                                    // 100
					for (var c = 0; c < 2; c++) {                                                                                    // 100
						if (this.modules[row][col - c] == null) {                                                                       // 100
							var dark = false;                                                                                              // 100
                                                                                                                      //
							if (byteIndex < data.length) {                                                                                 // 100
								dark = (data[byteIndex] >>> bitIndex & 1) == 1;                                                               // 100
							}                                                                                                              // 100
                                                                                                                      //
							var mask = QRUtil.getMask(maskPattern, row, col - c);                                                          // 101
                                                                                                                      //
							if (mask) {                                                                                                    // 101
								dark = !dark;                                                                                                 // 101
							}                                                                                                              // 101
                                                                                                                      //
							this.modules[row][col - c] = dark;                                                                             // 102
							bitIndex--;                                                                                                    // 102
                                                                                                                      //
							if (bitIndex == -1) {                                                                                          // 102
								byteIndex++;                                                                                                  // 102
								bitIndex = 7;                                                                                                 // 102
							}                                                                                                              // 102
						}                                                                                                               // 102
					}                                                                                                                // 102
                                                                                                                      //
					row += inc;                                                                                                      // 103
                                                                                                                      //
					if (row < 0 || this.moduleCount <= row) {                                                                        // 103
						row -= inc;                                                                                                     // 103
						inc = -inc;                                                                                                     // 103
						break;                                                                                                          // 103
					}                                                                                                                // 103
				}                                                                                                                 // 103
			}                                                                                                                  // 103
		}                                                                                                                   // 103
	};                                                                                                                   // 87
	QRCodeModel.PAD0 = 0xEC;                                                                                             // 103
	QRCodeModel.PAD1 = 0x11;                                                                                             // 103
                                                                                                                      //
	QRCodeModel.createData = function (typeNumber, errorCorrectLevel, dataList) {                                        // 103
		var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);                                                // 103
		var buffer = new QRBitBuffer();                                                                                     // 103
                                                                                                                      //
		for (var i = 0; i < dataList.length; i++) {                                                                         // 103
			var data = dataList[i];                                                                                            // 103
			buffer.put(data.mode, 4);                                                                                          // 103
			buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));                                       // 103
			data.write(buffer);                                                                                                // 103
		}                                                                                                                   // 103
                                                                                                                      //
		var totalDataCount = 0;                                                                                             // 104
                                                                                                                      //
		for (var i = 0; i < rsBlocks.length; i++) {                                                                         // 104
			totalDataCount += rsBlocks[i].dataCount;                                                                           // 104
		}                                                                                                                   // 104
                                                                                                                      //
		if (buffer.getLengthInBits() > totalDataCount * 8) {                                                                // 105
			throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");            // 105
		}                                                                                                                   // 109
                                                                                                                      //
		if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {                                                           // 110
			buffer.put(0, 4);                                                                                                  // 110
		}                                                                                                                   // 110
                                                                                                                      //
		while (buffer.getLengthInBits() % 8 != 0) {                                                                         // 111
			buffer.putBit(false);                                                                                              // 111
		}                                                                                                                   // 111
                                                                                                                      //
		while (true) {                                                                                                      // 112
			if (buffer.getLengthInBits() >= totalDataCount * 8) {                                                              // 112
				break;                                                                                                            // 112
			}                                                                                                                  // 112
                                                                                                                      //
			buffer.put(QRCodeModel.PAD0, 8);                                                                                   // 113
                                                                                                                      //
			if (buffer.getLengthInBits() >= totalDataCount * 8) {                                                              // 113
				break;                                                                                                            // 113
			}                                                                                                                  // 113
                                                                                                                      //
			buffer.put(QRCodeModel.PAD1, 8);                                                                                   // 114
		}                                                                                                                   // 114
                                                                                                                      //
		return QRCodeModel.createBytes(buffer, rsBlocks);                                                                   // 115
	};                                                                                                                   // 115
                                                                                                                      //
	QRCodeModel.createBytes = function (buffer, rsBlocks) {                                                              // 115
		var offset = 0;                                                                                                     // 115
		var maxDcCount = 0;                                                                                                 // 115
		var maxEcCount = 0;                                                                                                 // 115
		var dcdata = new Array(rsBlocks.length);                                                                            // 115
		var ecdata = new Array(rsBlocks.length);                                                                            // 115
                                                                                                                      //
		for (var r = 0; r < rsBlocks.length; r++) {                                                                         // 115
			var dcCount = rsBlocks[r].dataCount;                                                                               // 115
			var ecCount = rsBlocks[r].totalCount - dcCount;                                                                    // 115
			maxDcCount = Math.max(maxDcCount, dcCount);                                                                        // 115
			maxEcCount = Math.max(maxEcCount, ecCount);                                                                        // 115
			dcdata[r] = new Array(dcCount);                                                                                    // 115
                                                                                                                      //
			for (var i = 0; i < dcdata[r].length; i++) {                                                                       // 115
				dcdata[r][i] = 0xff & buffer.buffer[i + offset];                                                                  // 115
			}                                                                                                                  // 115
                                                                                                                      //
			offset += dcCount;                                                                                                 // 116
			var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);                                                            // 116
			var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);                                                 // 116
			var modPoly = rawPoly.mod(rsPoly);                                                                                 // 116
			ecdata[r] = new Array(rsPoly.getLength() - 1);                                                                     // 116
                                                                                                                      //
			for (var i = 0; i < ecdata[r].length; i++) {                                                                       // 116
				var modIndex = i + modPoly.getLength() - ecdata[r].length;                                                        // 116
				ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;                                                         // 116
			}                                                                                                                  // 116
		}                                                                                                                   // 116
                                                                                                                      //
		var totalCodeCount = 0;                                                                                             // 117
                                                                                                                      //
		for (var i = 0; i < rsBlocks.length; i++) {                                                                         // 117
			totalCodeCount += rsBlocks[i].totalCount;                                                                          // 117
		}                                                                                                                   // 117
                                                                                                                      //
		var data = new Array(totalCodeCount);                                                                               // 118
		var index = 0;                                                                                                      // 118
                                                                                                                      //
		for (var i = 0; i < maxDcCount; i++) {                                                                              // 118
			for (var r = 0; r < rsBlocks.length; r++) {                                                                        // 118
				if (i < dcdata[r].length) {                                                                                       // 118
					data[index++] = dcdata[r][i];                                                                                    // 118
				}                                                                                                                 // 118
			}                                                                                                                  // 118
		}                                                                                                                   // 118
                                                                                                                      //
		for (var i = 0; i < maxEcCount; i++) {                                                                              // 119
			for (var r = 0; r < rsBlocks.length; r++) {                                                                        // 119
				if (i < ecdata[r].length) {                                                                                       // 119
					data[index++] = ecdata[r][i];                                                                                    // 119
				}                                                                                                                 // 119
			}                                                                                                                  // 119
		}                                                                                                                   // 119
                                                                                                                      //
		return data;                                                                                                        // 120
	};                                                                                                                   // 120
                                                                                                                      //
	var QRMode = {                                                                                                       // 120
		MODE_NUMBER: 1 << 0,                                                                                                // 120
		MODE_ALPHA_NUM: 1 << 1,                                                                                             // 120
		MODE_8BIT_BYTE: 1 << 2,                                                                                             // 120
		MODE_KANJI: 1 << 3                                                                                                  // 120
	};                                                                                                                   // 120
	var QRErrorCorrectLevel = {                                                                                          // 120
		L: 1,                                                                                                               // 120
		M: 0,                                                                                                               // 120
		Q: 3,                                                                                                               // 120
		H: 2                                                                                                                // 120
	};                                                                                                                   // 120
	var QRMaskPattern = {                                                                                                // 120
		PATTERN000: 0,                                                                                                      // 120
		PATTERN001: 1,                                                                                                      // 120
		PATTERN010: 2,                                                                                                      // 120
		PATTERN011: 3,                                                                                                      // 120
		PATTERN100: 4,                                                                                                      // 120
		PATTERN101: 5,                                                                                                      // 120
		PATTERN110: 6,                                                                                                      // 120
		PATTERN111: 7                                                                                                       // 120
	};                                                                                                                   // 120
	var QRUtil = {                                                                                                       // 120
		PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
		G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,                                                 // 120
		G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,                                      // 120
		G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,                                                            // 120
		getBCHTypeInfo: function (data) {                                                                                   // 120
			var d = data << 10;                                                                                                // 120
                                                                                                                      //
			while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {                                              // 120
				d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);                                        // 120
			}                                                                                                                  // 120
                                                                                                                      //
			return (data << 10 | d) ^ QRUtil.G15_MASK;                                                                         // 121
		},                                                                                                                  // 121
		getBCHTypeNumber: function (data) {                                                                                 // 121
			var d = data << 12;                                                                                                // 121
                                                                                                                      //
			while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {                                              // 121
				d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);                                        // 121
			}                                                                                                                  // 121
                                                                                                                      //
			return data << 12 | d;                                                                                             // 122
		},                                                                                                                  // 122
		getBCHDigit: function (data) {                                                                                      // 122
			var digit = 0;                                                                                                     // 122
                                                                                                                      //
			while (data != 0) {                                                                                                // 122
				digit++;                                                                                                          // 122
				data >>>= 1;                                                                                                      // 122
			}                                                                                                                  // 122
                                                                                                                      //
			return digit;                                                                                                      // 123
		},                                                                                                                  // 123
		getPatternPosition: function (typeNumber) {                                                                         // 123
			return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];                                                              // 123
		},                                                                                                                  // 123
		getMask: function (maskPattern, i, j) {                                                                             // 123
			switch (maskPattern) {                                                                                             // 123
				case QRMaskPattern.PATTERN000:                                                                                    // 123
					return (i + j) % 2 == 0;                                                                                         // 123
                                                                                                                      //
				case QRMaskPattern.PATTERN001:                                                                                    // 123
					return i % 2 == 0;                                                                                               // 123
                                                                                                                      //
				case QRMaskPattern.PATTERN010:                                                                                    // 123
					return j % 3 == 0;                                                                                               // 123
                                                                                                                      //
				case QRMaskPattern.PATTERN011:                                                                                    // 123
					return (i + j) % 3 == 0;                                                                                         // 123
                                                                                                                      //
				case QRMaskPattern.PATTERN100:                                                                                    // 123
					return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;                                                         // 123
                                                                                                                      //
				case QRMaskPattern.PATTERN101:                                                                                    // 123
					return i * j % 2 + i * j % 3 == 0;                                                                               // 123
                                                                                                                      //
				case QRMaskPattern.PATTERN110:                                                                                    // 123
					return (i * j % 2 + i * j % 3) % 2 == 0;                                                                         // 123
                                                                                                                      //
				case QRMaskPattern.PATTERN111:                                                                                    // 123
					return (i * j % 3 + (i + j) % 2) % 2 == 0;                                                                       // 123
                                                                                                                      //
				default:                                                                                                          // 123
					throw new Error("bad maskPattern:" + maskPattern);                                                               // 123
			}                                                                                                                  // 123
		},                                                                                                                  // 123
		getErrorCorrectPolynomial: function (errorCorrectLength) {                                                          // 123
			var a = new QRPolynomial([1], 0);                                                                                  // 123
                                                                                                                      //
			for (var i = 0; i < errorCorrectLength; i++) {                                                                     // 123
				a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));                                                         // 123
			}                                                                                                                  // 123
                                                                                                                      //
			return a;                                                                                                          // 124
		},                                                                                                                  // 124
		getLengthInBits: function (mode, type) {                                                                            // 124
			if (1 <= type && type < 10) {                                                                                      // 124
				switch (mode) {                                                                                                   // 124
					case QRMode.MODE_NUMBER:                                                                                         // 124
						return 10;                                                                                                      // 124
                                                                                                                      //
					case QRMode.MODE_ALPHA_NUM:                                                                                      // 124
						return 9;                                                                                                       // 124
                                                                                                                      //
					case QRMode.MODE_8BIT_BYTE:                                                                                      // 124
						return 8;                                                                                                       // 124
                                                                                                                      //
					case QRMode.MODE_KANJI:                                                                                          // 124
						return 8;                                                                                                       // 124
                                                                                                                      //
					default:                                                                                                         // 124
						throw new Error("mode:" + mode);                                                                                // 124
				}                                                                                                                 // 124
			} else if (type < 27) {                                                                                            // 124
				switch (mode) {                                                                                                   // 124
					case QRMode.MODE_NUMBER:                                                                                         // 124
						return 12;                                                                                                      // 124
                                                                                                                      //
					case QRMode.MODE_ALPHA_NUM:                                                                                      // 124
						return 11;                                                                                                      // 124
                                                                                                                      //
					case QRMode.MODE_8BIT_BYTE:                                                                                      // 124
						return 16;                                                                                                      // 124
                                                                                                                      //
					case QRMode.MODE_KANJI:                                                                                          // 124
						return 10;                                                                                                      // 124
                                                                                                                      //
					default:                                                                                                         // 124
						throw new Error("mode:" + mode);                                                                                // 124
				}                                                                                                                 // 124
			} else if (type < 41) {                                                                                            // 124
				switch (mode) {                                                                                                   // 124
					case QRMode.MODE_NUMBER:                                                                                         // 124
						return 14;                                                                                                      // 124
                                                                                                                      //
					case QRMode.MODE_ALPHA_NUM:                                                                                      // 124
						return 13;                                                                                                      // 124
                                                                                                                      //
					case QRMode.MODE_8BIT_BYTE:                                                                                      // 124
						return 16;                                                                                                      // 124
                                                                                                                      //
					case QRMode.MODE_KANJI:                                                                                          // 124
						return 12;                                                                                                      // 124
                                                                                                                      //
					default:                                                                                                         // 124
						throw new Error("mode:" + mode);                                                                                // 124
				}                                                                                                                 // 124
			} else {                                                                                                           // 124
				throw new Error("type:" + type);                                                                                  // 124
			}                                                                                                                  // 124
		},                                                                                                                  // 124
		getLostPoint: function (qrCode) {                                                                                   // 124
			var moduleCount = qrCode.getModuleCount();                                                                         // 124
			var lostPoint = 0;                                                                                                 // 124
                                                                                                                      //
			for (var row = 0; row < moduleCount; row++) {                                                                      // 124
				for (var col = 0; col < moduleCount; col++) {                                                                     // 124
					var sameCount = 0;                                                                                               // 124
					var dark = qrCode.isDark(row, col);                                                                              // 124
                                                                                                                      //
					for (var r = -1; r <= 1; r++) {                                                                                  // 124
						if (row + r < 0 || moduleCount <= row + r) {                                                                    // 124
							continue;                                                                                                      // 124
						}                                                                                                               // 124
                                                                                                                      //
						for (var c = -1; c <= 1; c++) {                                                                                 // 125
							if (col + c < 0 || moduleCount <= col + c) {                                                                   // 125
								continue;                                                                                                     // 125
							}                                                                                                              // 125
                                                                                                                      //
							if (r == 0 && c == 0) {                                                                                        // 126
								continue;                                                                                                     // 126
							}                                                                                                              // 126
                                                                                                                      //
							if (dark == qrCode.isDark(row + r, col + c)) {                                                                 // 127
								sameCount++;                                                                                                  // 127
							}                                                                                                              // 127
						}                                                                                                               // 127
					}                                                                                                                // 127
                                                                                                                      //
					if (sameCount > 5) {                                                                                             // 128
						lostPoint += 3 + sameCount - 5;                                                                                 // 128
					}                                                                                                                // 128
				}                                                                                                                 // 128
			}                                                                                                                  // 128
                                                                                                                      //
			for (var row = 0; row < moduleCount - 1; row++) {                                                                  // 129
				for (var col = 0; col < moduleCount - 1; col++) {                                                                 // 129
					var count = 0;                                                                                                   // 129
					if (qrCode.isDark(row, col)) count++;                                                                            // 129
					if (qrCode.isDark(row + 1, col)) count++;                                                                        // 129
					if (qrCode.isDark(row, col + 1)) count++;                                                                        // 129
					if (qrCode.isDark(row + 1, col + 1)) count++;                                                                    // 129
                                                                                                                      //
					if (count == 0 || count == 4) {                                                                                  // 129
						lostPoint += 3;                                                                                                 // 129
					}                                                                                                                // 129
				}                                                                                                                 // 129
			}                                                                                                                  // 129
                                                                                                                      //
			for (var row = 0; row < moduleCount; row++) {                                                                      // 130
				for (var col = 0; col < moduleCount - 6; col++) {                                                                 // 130
					if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
						lostPoint += 40;                                                                                                // 130
					}                                                                                                                // 130
				}                                                                                                                 // 130
			}                                                                                                                  // 130
                                                                                                                      //
			for (var col = 0; col < moduleCount; col++) {                                                                      // 131
				for (var row = 0; row < moduleCount - 6; row++) {                                                                 // 131
					if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
						lostPoint += 40;                                                                                                // 131
					}                                                                                                                // 131
				}                                                                                                                 // 131
			}                                                                                                                  // 131
                                                                                                                      //
			var darkCount = 0;                                                                                                 // 132
                                                                                                                      //
			for (var col = 0; col < moduleCount; col++) {                                                                      // 132
				for (var row = 0; row < moduleCount; row++) {                                                                     // 132
					if (qrCode.isDark(row, col)) {                                                                                   // 132
						darkCount++;                                                                                                    // 132
					}                                                                                                                // 132
				}                                                                                                                 // 132
			}                                                                                                                  // 132
                                                                                                                      //
			var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;                                        // 133
			lostPoint += ratio * 10;                                                                                           // 133
			return lostPoint;                                                                                                  // 133
		}                                                                                                                   // 133
	};                                                                                                                   // 120
	var QRMath = {                                                                                                       // 133
		glog: function (n) {                                                                                                // 133
			if (n < 1) {                                                                                                       // 133
				throw new Error("glog(" + n + ")");                                                                               // 133
			}                                                                                                                  // 133
                                                                                                                      //
			return QRMath.LOG_TABLE[n];                                                                                        // 134
		},                                                                                                                  // 134
		gexp: function (n) {                                                                                                // 134
			while (n < 0) {                                                                                                    // 134
				n += 255;                                                                                                         // 134
			}                                                                                                                  // 134
                                                                                                                      //
			while (n >= 256) {                                                                                                 // 135
				n -= 255;                                                                                                         // 135
			}                                                                                                                  // 135
                                                                                                                      //
			return QRMath.EXP_TABLE[n];                                                                                        // 136
		},                                                                                                                  // 136
		EXP_TABLE: new Array(256),                                                                                          // 136
		LOG_TABLE: new Array(256)                                                                                           // 136
	};                                                                                                                   // 133
                                                                                                                      //
	for (var i = 0; i < 8; i++) {                                                                                        // 136
		QRMath.EXP_TABLE[i] = 1 << i;                                                                                       // 136
	}                                                                                                                    // 136
                                                                                                                      //
	for (var i = 8; i < 256; i++) {                                                                                      // 137
		QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
	}                                                                                                                    // 137
                                                                                                                      //
	for (var i = 0; i < 255; i++) {                                                                                      // 138
		QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;                                                                          // 138
	}                                                                                                                    // 138
                                                                                                                      //
	function QRPolynomial(num, shift) {                                                                                  // 139
		if (num.length == undefined) {                                                                                      // 139
			throw new Error(num.length + "/" + shift);                                                                         // 139
		}                                                                                                                   // 139
                                                                                                                      //
		var offset = 0;                                                                                                     // 140
                                                                                                                      //
		while (offset < num.length && num[offset] == 0) {                                                                   // 140
			offset++;                                                                                                          // 140
		}                                                                                                                   // 140
                                                                                                                      //
		this.num = new Array(num.length - offset + shift);                                                                  // 141
                                                                                                                      //
		for (var i = 0; i < num.length - offset; i++) {                                                                     // 141
			this.num[i] = num[i + offset];                                                                                     // 141
		}                                                                                                                   // 141
	}                                                                                                                    // 141
                                                                                                                      //
	QRPolynomial.prototype = {                                                                                           // 142
		get: function (index) {                                                                                             // 142
			return this.num[index];                                                                                            // 142
		},                                                                                                                  // 142
		getLength: function () {                                                                                            // 142
			return this.num.length;                                                                                            // 142
		},                                                                                                                  // 142
		multiply: function (e) {                                                                                            // 142
			var num = new Array(this.getLength() + e.getLength() - 1);                                                         // 142
                                                                                                                      //
			for (var i = 0; i < this.getLength(); i++) {                                                                       // 142
				for (var j = 0; j < e.getLength(); j++) {                                                                         // 142
					num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));                                     // 142
				}                                                                                                                 // 142
			}                                                                                                                  // 142
                                                                                                                      //
			return new QRPolynomial(num, 0);                                                                                   // 143
		},                                                                                                                  // 143
		mod: function (e) {                                                                                                 // 143
			if (this.getLength() - e.getLength() < 0) {                                                                        // 143
				return this;                                                                                                      // 143
			}                                                                                                                  // 143
                                                                                                                      //
			var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));                                                      // 144
			var num = new Array(this.getLength());                                                                             // 144
                                                                                                                      //
			for (var i = 0; i < this.getLength(); i++) {                                                                       // 144
				num[i] = this.get(i);                                                                                             // 144
			}                                                                                                                  // 144
                                                                                                                      //
			for (var i = 0; i < e.getLength(); i++) {                                                                          // 145
				num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);                                                             // 145
			}                                                                                                                  // 145
                                                                                                                      //
			return new QRPolynomial(num, 0).mod(e);                                                                            // 146
		}                                                                                                                   // 146
	};                                                                                                                   // 142
                                                                                                                      //
	function QRRSBlock(totalCount, dataCount) {                                                                          // 146
		this.totalCount = totalCount;                                                                                       // 146
		this.dataCount = dataCount;                                                                                         // 146
	}                                                                                                                    // 146
                                                                                                                      //
	QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
                                                                                                                      //
	QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {                                                   // 147
		var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);                                             // 147
                                                                                                                      //
		if (rsBlock == undefined) {                                                                                         // 147
			throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);            // 147
		}                                                                                                                   // 147
                                                                                                                      //
		var length = rsBlock.length / 3;                                                                                    // 148
		var list = [];                                                                                                      // 148
                                                                                                                      //
		for (var i = 0; i < length; i++) {                                                                                  // 148
			var count = rsBlock[i * 3 + 0];                                                                                    // 148
			var totalCount = rsBlock[i * 3 + 1];                                                                               // 148
			var dataCount = rsBlock[i * 3 + 2];                                                                                // 148
                                                                                                                      //
			for (var j = 0; j < count; j++) {                                                                                  // 148
				list.push(new QRRSBlock(totalCount, dataCount));                                                                  // 148
			}                                                                                                                  // 148
		}                                                                                                                   // 148
                                                                                                                      //
		return list;                                                                                                        // 149
	};                                                                                                                   // 149
                                                                                                                      //
	QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {                                               // 149
		switch (errorCorrectLevel) {                                                                                        // 149
			case QRErrorCorrectLevel.L:                                                                                        // 149
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];                                                        // 149
                                                                                                                      //
			case QRErrorCorrectLevel.M:                                                                                        // 149
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];                                                        // 149
                                                                                                                      //
			case QRErrorCorrectLevel.Q:                                                                                        // 149
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];                                                        // 149
                                                                                                                      //
			case QRErrorCorrectLevel.H:                                                                                        // 149
				return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];                                                        // 149
                                                                                                                      //
			default:                                                                                                           // 149
				return undefined;                                                                                                 // 149
		}                                                                                                                   // 149
	};                                                                                                                   // 149
                                                                                                                      //
	function QRBitBuffer() {                                                                                             // 149
		this.buffer = [];                                                                                                   // 149
		this.length = 0;                                                                                                    // 149
	}                                                                                                                    // 149
                                                                                                                      //
	QRBitBuffer.prototype = {                                                                                            // 150
		get: function (index) {                                                                                             // 150
			var bufIndex = Math.floor(index / 8);                                                                              // 150
			return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;                                                         // 150
		},                                                                                                                  // 150
		put: function (num, length) {                                                                                       // 150
			for (var i = 0; i < length; i++) {                                                                                 // 150
				this.putBit((num >>> length - i - 1 & 1) == 1);                                                                   // 150
			}                                                                                                                  // 150
		},                                                                                                                  // 150
		getLengthInBits: function () {                                                                                      // 150
			return this.length;                                                                                                // 150
		},                                                                                                                  // 150
		putBit: function (bit) {                                                                                            // 150
			var bufIndex = Math.floor(this.length / 8);                                                                        // 150
                                                                                                                      //
			if (this.buffer.length <= bufIndex) {                                                                              // 150
				this.buffer.push(0);                                                                                              // 150
			}                                                                                                                  // 150
                                                                                                                      //
			if (bit) {                                                                                                         // 151
				this.buffer[bufIndex] |= 0x80 >>> this.length % 8;                                                                // 151
			}                                                                                                                  // 151
                                                                                                                      //
			this.length++;                                                                                                     // 152
		}                                                                                                                   // 152
	};                                                                                                                   // 150
	var QRCodeLimitLength = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
                                                                                                                      //
	function _isSupportCanvas() {                                                                                        // 154
		return typeof CanvasRenderingContext2D != "undefined";                                                              // 155
	} // android 2.x doesn't support Data-URI spec                                                                       // 156
                                                                                                                      //
                                                                                                                      //
	function _getAndroid() {                                                                                             // 159
		var android = false;                                                                                                // 160
		var sAgent = navigator.userAgent;                                                                                   // 161
                                                                                                                      //
		if (/android/i.test(sAgent)) {                                                                                      // 163
			// android                                                                                                         // 163
			android = true;                                                                                                    // 164
			var aMat = sAgent.toString().match(/android ([0-9]\.[0-9])/i);                                                     // 165
                                                                                                                      //
			if (aMat && aMat[1]) {                                                                                             // 167
				android = parseFloat(aMat[1]);                                                                                    // 168
			}                                                                                                                  // 169
		}                                                                                                                   // 170
                                                                                                                      //
		return android;                                                                                                     // 172
	}                                                                                                                    // 173
                                                                                                                      //
	var svgDrawer = function () {                                                                                        // 175
		var Drawing = function (el, htOption) {                                                                             // 177
			this._el = el;                                                                                                     // 178
			this._htOption = htOption;                                                                                         // 179
		};                                                                                                                  // 180
                                                                                                                      //
		Drawing.prototype.draw = function (oQRCode) {                                                                       // 182
			var _htOption = this._htOption;                                                                                    // 183
			var _el = this._el;                                                                                                // 184
			var nCount = oQRCode.getModuleCount();                                                                             // 185
			var nWidth = Math.floor(_htOption.width / nCount);                                                                 // 186
			var nHeight = Math.floor(_htOption.height / nCount);                                                               // 187
			this.clear();                                                                                                      // 189
                                                                                                                      //
			function makeSVG(tag, attrs) {                                                                                     // 191
				var el = document.createElementNS('http://www.w3.org/2000/svg', tag);                                             // 192
                                                                                                                      //
				for (var k in meteorBabelHelpers.sanitizeForInObject(attrs)) {                                                    // 193
					if (attrs.hasOwnProperty(k)) el.setAttribute(k, attrs[k]);                                                       // 194
				}                                                                                                                 // 193
                                                                                                                      //
				return el;                                                                                                        // 195
			}                                                                                                                  // 196
                                                                                                                      //
			var svg = makeSVG("svg", {                                                                                         // 198
				'viewBox': '0 0 ' + String(nCount) + " " + String(nCount),                                                        // 198
				'width': '100%',                                                                                                  // 198
				'height': '100%',                                                                                                 // 198
				'fill': _htOption.colorLight                                                                                      // 198
			});                                                                                                                // 198
			svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");                // 199
                                                                                                                      //
			_el.appendChild(svg);                                                                                              // 200
                                                                                                                      //
			svg.appendChild(makeSVG("rect", {                                                                                  // 202
				"fill": _htOption.colorLight,                                                                                     // 202
				"width": "100%",                                                                                                  // 202
				"height": "100%"                                                                                                  // 202
			}));                                                                                                               // 202
			svg.appendChild(makeSVG("rect", {                                                                                  // 203
				"fill": _htOption.colorDark,                                                                                      // 203
				"width": "1",                                                                                                     // 203
				"height": "1",                                                                                                    // 203
				"id": "template"                                                                                                  // 203
			}));                                                                                                               // 203
                                                                                                                      //
			for (var row = 0; row < nCount; row++) {                                                                           // 205
				for (var col = 0; col < nCount; col++) {                                                                          // 206
					if (oQRCode.isDark(row, col)) {                                                                                  // 207
						var child = makeSVG("use", {                                                                                    // 208
							"x": String(col),                                                                                              // 208
							"y": String(row)                                                                                               // 208
						});                                                                                                             // 208
						child.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template");                                      // 209
						svg.appendChild(child);                                                                                         // 210
					}                                                                                                                // 211
				}                                                                                                                 // 212
			}                                                                                                                  // 213
		};                                                                                                                  // 214
                                                                                                                      //
		Drawing.prototype.clear = function () {                                                                             // 215
			while (this._el.hasChildNodes()) {                                                                                 // 216
				this._el.removeChild(this._el.lastChild);                                                                         // 217
			}                                                                                                                  // 216
		};                                                                                                                  // 218
                                                                                                                      //
		return Drawing;                                                                                                     // 219
	}();                                                                                                                 // 220
                                                                                                                      //
	var useSVG = document.documentElement.tagName.toLowerCase() === "svg"; // Drawing in DOM by using Table tag          // 222
                                                                                                                      //
	var Drawing = useSVG ? svgDrawer : !_isSupportCanvas() ? function () {                                               // 225
		var Drawing = function (el, htOption) {                                                                             // 226
			this._el = el;                                                                                                     // 227
			this._htOption = htOption;                                                                                         // 228
		}; /**                                                                                                              // 229
      * Draw the QRCode                                                                                               //
      *                                                                                                               //
      * @param {QRCode} oQRCode                                                                                       //
      */                                                                                                              //
                                                                                                                      //
		Drawing.prototype.draw = function (oQRCode) {                                                                       // 236
			var _htOption = this._htOption;                                                                                    // 237
			var _el = this._el;                                                                                                // 238
			var nCount = oQRCode.getModuleCount();                                                                             // 239
			var nWidth = Math.floor(_htOption.width / nCount);                                                                 // 240
			var nHeight = Math.floor(_htOption.height / nCount);                                                               // 241
			var aHTML = ['<table style="border:0;border-collapse:collapse;">'];                                                // 242
                                                                                                                      //
			for (var row = 0; row < nCount; row++) {                                                                           // 244
				aHTML.push('<tr>');                                                                                               // 245
                                                                                                                      //
				for (var col = 0; col < nCount; col++) {                                                                          // 247
					aHTML.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + nWidth + 'px;height:' + nHeight + 'px;background-color:' + (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) + ';"></td>');
				}                                                                                                                 // 249
                                                                                                                      //
				aHTML.push('</tr>');                                                                                              // 251
			}                                                                                                                  // 252
                                                                                                                      //
			aHTML.push('</table>');                                                                                            // 254
			_el.innerHTML = aHTML.join(''); // Fix the margin values as real size.                                             // 255
                                                                                                                      //
			var elTable = _el.childNodes[0];                                                                                   // 258
			var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;                                                // 259
			var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;                                               // 260
                                                                                                                      //
			if (nLeftMarginTable > 0 && nTopMarginTable > 0) {                                                                 // 262
				elTable.style.margin = nTopMarginTable + "px " + nLeftMarginTable + "px";                                         // 263
			}                                                                                                                  // 264
		}; /**                                                                                                              // 265
      * Clear the QRCode                                                                                              //
      */                                                                                                              //
                                                                                                                      //
		Drawing.prototype.clear = function () {                                                                             // 270
			this._el.innerHTML = '';                                                                                           // 271
		};                                                                                                                  // 272
                                                                                                                      //
		return Drawing;                                                                                                     // 274
	}() : function () {                                                                                                  // 275
		// Drawing in Canvas                                                                                                // 275
		function _onMakeImage() {                                                                                           // 276
			this._elImage.src = this._elCanvas.toDataURL("image/png");                                                         // 277
			this._elImage.style.display = "block";                                                                             // 278
			this._elCanvas.style.display = "none";                                                                             // 279
		} // Android 2.1 bug workaround                                                                                     // 280
		// http://code.google.com/p/android/issues/detail?id=5141                                                           // 283
                                                                                                                      //
                                                                                                                      //
		if (this._android && this._android <= 2.1) {                                                                        // 284
			var factor = 1 / window.devicePixelRatio;                                                                          // 285
			var drawImage = CanvasRenderingContext2D.prototype.drawImage;                                                      // 286
                                                                                                                      //
			CanvasRenderingContext2D.prototype.drawImage = function (image, sx, sy, sw, sh, dx, dy, dw, dh) {                  // 287
				if ("nodeName" in image && /img/i.test(image.nodeName)) {                                                         // 288
					for (var i = arguments.length - 1; i >= 1; i--) {                                                                // 289
						arguments[i] = arguments[i] * factor;                                                                           // 290
					}                                                                                                                // 291
				} else if (typeof dw == "undefined") {                                                                            // 292
					arguments[1] *= factor;                                                                                          // 293
					arguments[2] *= factor;                                                                                          // 294
					arguments[3] *= factor;                                                                                          // 295
					arguments[4] *= factor;                                                                                          // 296
				}                                                                                                                 // 297
                                                                                                                      //
				drawImage.apply(this, arguments);                                                                                 // 299
			};                                                                                                                 // 300
		} /**                                                                                                               // 301
     * Check whether the user's browser supports Data URI or not                                                      //
     *                                                                                                                //
     * @private                                                                                                       //
     * @param {Function} fSuccess Occurs if it supports Data URI                                                      //
     * @param {Function} fFail Occurs if it doesn't support Data URI                                                  //
     */                                                                                                               //
                                                                                                                      //
		function _safeSetDataURI(fSuccess, fFail) {                                                                         // 310
			var self = this;                                                                                                   // 311
			self._fFail = fFail;                                                                                               // 312
			self._fSuccess = fSuccess; // Check it just once                                                                   // 313
                                                                                                                      //
			if (self._bSupportDataURI === null) {                                                                              // 316
				var el = document.createElement("img");                                                                           // 317
                                                                                                                      //
				var fOnError = function () {                                                                                      // 318
					self._bSupportDataURI = false;                                                                                   // 319
                                                                                                                      //
					if (self._fFail) {                                                                                               // 321
						self._fFail.call(self);                                                                                         // 322
					}                                                                                                                // 323
				};                                                                                                                // 324
                                                                                                                      //
				var fOnSuccess = function () {                                                                                    // 325
					self._bSupportDataURI = true;                                                                                    // 326
                                                                                                                      //
					if (self._fSuccess) {                                                                                            // 328
						self._fSuccess.call(self);                                                                                      // 329
					}                                                                                                                // 330
				};                                                                                                                // 331
                                                                                                                      //
				el.onabort = fOnError;                                                                                            // 333
				el.onerror = fOnError;                                                                                            // 334
				el.onload = fOnSuccess;                                                                                           // 335
				el.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="; // the Image contains 1px data.
                                                                                                                      //
				return;                                                                                                           // 337
			} else if (self._bSupportDataURI === true && self._fSuccess) {                                                     // 338
				self._fSuccess.call(self);                                                                                        // 339
			} else if (self._bSupportDataURI === false && self._fFail) {                                                       // 340
				self._fFail.call(self);                                                                                           // 341
			}                                                                                                                  // 342
		}                                                                                                                   // 343
                                                                                                                      //
		; /**                                                                                                               // 343
     * Drawing QRCode by using canvas                                                                                 //
     *                                                                                                                //
     * @constructor                                                                                                   //
     * @param {HTMLElement} el                                                                                        //
     * @param {Object} htOption QRCode Options                                                                        //
     */                                                                                                               //
                                                                                                                      //
		var Drawing = function (el, htOption) {                                                                             // 352
			this._bIsPainted = false;                                                                                          // 353
			this._android = _getAndroid();                                                                                     // 354
			this._htOption = htOption;                                                                                         // 356
			this._elCanvas = document.createElement("canvas");                                                                 // 357
			this._elCanvas.width = htOption.width;                                                                             // 358
			this._elCanvas.height = htOption.height;                                                                           // 359
			el.appendChild(this._elCanvas);                                                                                    // 360
			this._el = el;                                                                                                     // 361
			this._oContext = this._elCanvas.getContext("2d");                                                                  // 362
			this._bIsPainted = false;                                                                                          // 363
			this._elImage = document.createElement("img");                                                                     // 364
			this._elImage.alt = "Scan me!";                                                                                    // 365
			this._elImage.style.display = "none";                                                                              // 366
                                                                                                                      //
			this._el.appendChild(this._elImage);                                                                               // 367
                                                                                                                      //
			this._bSupportDataURI = null;                                                                                      // 368
		}; /**                                                                                                              // 369
      * Draw the QRCode                                                                                               //
      *                                                                                                               //
      * @param {QRCode} oQRCode                                                                                       //
      */                                                                                                              //
                                                                                                                      //
		Drawing.prototype.draw = function (oQRCode) {                                                                       // 376
			var _elImage = this._elImage;                                                                                      // 377
			var _oContext = this._oContext;                                                                                    // 378
			var _htOption = this._htOption;                                                                                    // 379
			var nCount = oQRCode.getModuleCount();                                                                             // 381
			var nWidth = _htOption.width / nCount;                                                                             // 382
			var nHeight = _htOption.height / nCount;                                                                           // 383
			var nRoundedWidth = Math.round(nWidth);                                                                            // 384
			var nRoundedHeight = Math.round(nHeight);                                                                          // 385
			_elImage.style.display = "none";                                                                                   // 387
			this.clear();                                                                                                      // 388
                                                                                                                      //
			for (var row = 0; row < nCount; row++) {                                                                           // 390
				for (var col = 0; col < nCount; col++) {                                                                          // 391
					var bIsDark = oQRCode.isDark(row, col);                                                                          // 392
					var nLeft = col * nWidth;                                                                                        // 393
					var nTop = row * nHeight;                                                                                        // 394
					_oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;                                    // 395
					_oContext.lineWidth = 1;                                                                                         // 396
					_oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;                                      // 397
                                                                                                                      //
					_oContext.fillRect(nLeft, nTop, nWidth, nHeight); // 안티 앨리어싱 방지 처리                                               // 398
                                                                                                                      //
                                                                                                                      //
					_oContext.strokeRect(Math.floor(nLeft) + 0.5, Math.floor(nTop) + 0.5, nRoundedWidth, nRoundedHeight);            // 401
                                                                                                                      //
					_oContext.strokeRect(Math.ceil(nLeft) - 0.5, Math.ceil(nTop) - 0.5, nRoundedWidth, nRoundedHeight);              // 408
				}                                                                                                                 // 414
			}                                                                                                                  // 415
                                                                                                                      //
			this._bIsPainted = true;                                                                                           // 417
		}; /**                                                                                                              // 418
      * Make the image from Canvas if the browser supports Data URI.                                                  //
      */                                                                                                              //
                                                                                                                      //
		Drawing.prototype.makeImage = function () {                                                                         // 423
			if (this._bIsPainted) {                                                                                            // 424
				_safeSetDataURI.call(this, _onMakeImage);                                                                         // 425
			}                                                                                                                  // 426
		}; /**                                                                                                              // 427
      * Return whether the QRCode is painted or not                                                                   //
      *                                                                                                               //
      * @return {Boolean}                                                                                             //
      */                                                                                                              //
                                                                                                                      //
		Drawing.prototype.isPainted = function () {                                                                         // 434
			return this._bIsPainted;                                                                                           // 435
		}; /**                                                                                                              // 436
      * Clear the QRCode                                                                                              //
      */                                                                                                              //
                                                                                                                      //
		Drawing.prototype.clear = function () {                                                                             // 441
			this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);                                       // 442
                                                                                                                      //
			this._bIsPainted = false;                                                                                          // 443
		}; /**                                                                                                              // 444
      * @private                                                                                                      //
      * @param {Number} nNumber                                                                                       //
      */                                                                                                              //
                                                                                                                      //
		Drawing.prototype.round = function (nNumber) {                                                                      // 450
			if (!nNumber) {                                                                                                    // 451
				return nNumber;                                                                                                   // 452
			}                                                                                                                  // 453
                                                                                                                      //
			return Math.floor(nNumber * 1000) / 1000;                                                                          // 455
		};                                                                                                                  // 456
                                                                                                                      //
		return Drawing;                                                                                                     // 458
	}(); /**                                                                                                             // 459
       * Get the type by string length                                                                                //
       *                                                                                                              //
       * @private                                                                                                     //
       * @param {String} sText                                                                                        //
       * @param {Number} nCorrectLevel                                                                                //
       * @return {Number} type                                                                                        //
       */                                                                                                             //
                                                                                                                      //
	function _getTypeNumber(sText, nCorrectLevel) {                                                                      // 469
		var nType = 1;                                                                                                      // 470
                                                                                                                      //
		var length = _getUTF8Length(sText);                                                                                 // 471
                                                                                                                      //
		for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {                                                    // 473
			var nLimit = 0;                                                                                                    // 474
                                                                                                                      //
			switch (nCorrectLevel) {                                                                                           // 476
				case QRErrorCorrectLevel.L:                                                                                       // 477
					nLimit = QRCodeLimitLength[i][0];                                                                                // 478
					break;                                                                                                           // 479
                                                                                                                      //
				case QRErrorCorrectLevel.M:                                                                                       // 480
					nLimit = QRCodeLimitLength[i][1];                                                                                // 481
					break;                                                                                                           // 482
                                                                                                                      //
				case QRErrorCorrectLevel.Q:                                                                                       // 483
					nLimit = QRCodeLimitLength[i][2];                                                                                // 484
					break;                                                                                                           // 485
                                                                                                                      //
				case QRErrorCorrectLevel.H:                                                                                       // 486
					nLimit = QRCodeLimitLength[i][3];                                                                                // 487
					break;                                                                                                           // 488
			}                                                                                                                  // 476
                                                                                                                      //
			if (length <= nLimit) {                                                                                            // 491
				break;                                                                                                            // 492
			} else {                                                                                                           // 493
				nType++;                                                                                                          // 494
			}                                                                                                                  // 495
		}                                                                                                                   // 496
                                                                                                                      //
		if (nType > QRCodeLimitLength.length) {                                                                             // 498
			throw new Error("Too long data");                                                                                  // 499
		}                                                                                                                   // 500
                                                                                                                      //
		return nType;                                                                                                       // 502
	}                                                                                                                    // 503
                                                                                                                      //
	function _getUTF8Length(sText) {                                                                                     // 505
		var replacedText = encodeURI(sText).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');                                   // 506
		return replacedText.length + (replacedText.length != sText ? 3 : 0);                                                // 507
	} /**                                                                                                                // 508
    * @class QRCode                                                                                                   //
    * @constructor                                                                                                    //
    * @example                                                                                                        //
    * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");                               //
    *                                                                                                                 //
    * @example                                                                                                        //
    * var oQRCode = new QRCode("test", {                                                                              //
    *    text : "http://naver.com",                                                                                   //
    *    width : 128,                                                                                                 //
    *    height : 128                                                                                                 //
    * });                                                                                                             //
    *                                                                                                                 //
    * oQRCode.clear(); // Clear the QRCode.                                                                           //
    * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.                                              //
    *                                                                                                                 //
    * @param {HTMLElement|String} el target element or 'id' attribute of element.                                     //
    * @param {Object|String} vOption                                                                                  //
    * @param {String} vOption.text QRCode link data                                                                   //
    * @param {Number} [vOption.width=256]                                                                             //
    * @param {Number} [vOption.height=256]                                                                            //
    * @param {String} [vOption.colorDark="#000000"]                                                                   //
    * @param {String} [vOption.colorLight="#ffffff"]                                                                  //
    * @param {QRCode.CorrectLevel} [vOption.correctLevel=QRCode.CorrectLevel.H] [L|M|Q|H]                             //
    */                                                                                                                //
                                                                                                                      //
	QRCode = function (el, vOption) {                                                                                    // 535
		this._htOption = {                                                                                                  // 536
			width: 256,                                                                                                        // 537
			height: 256,                                                                                                       // 538
			typeNumber: 4,                                                                                                     // 539
			colorDark: "#000000",                                                                                              // 540
			colorLight: "#ffffff",                                                                                             // 541
			correctLevel: QRErrorCorrectLevel.H                                                                                // 542
		};                                                                                                                  // 536
                                                                                                                      //
		if (typeof vOption === 'string') {                                                                                  // 545
			vOption = {                                                                                                        // 546
				text: vOption                                                                                                     // 547
			};                                                                                                                 // 546
		} // Overwrites options                                                                                             // 549
                                                                                                                      //
                                                                                                                      //
		if (vOption) {                                                                                                      // 552
			for (var i in meteorBabelHelpers.sanitizeForInObject(vOption)) {                                                   // 553
				this._htOption[i] = vOption[i];                                                                                   // 554
			}                                                                                                                  // 555
		}                                                                                                                   // 556
                                                                                                                      //
		if (typeof el == "string") {                                                                                        // 558
			el = document.getElementById(el);                                                                                  // 559
		}                                                                                                                   // 560
                                                                                                                      //
		if (this._htOption.useSVG) {                                                                                        // 562
			Drawing = svgDrawer;                                                                                               // 563
		}                                                                                                                   // 564
                                                                                                                      //
		this._android = _getAndroid();                                                                                      // 566
		this._el = el;                                                                                                      // 567
		this._oQRCode = null;                                                                                               // 568
		this._oDrawing = new Drawing(this._el, this._htOption);                                                             // 569
                                                                                                                      //
		if (this._htOption.text) {                                                                                          // 571
			this.makeCode(this._htOption.text);                                                                                // 572
		}                                                                                                                   // 573
	}; /**                                                                                                               // 574
     * Make the QRCode                                                                                                //
     *                                                                                                                //
     * @param {String} sText link data                                                                                //
     */                                                                                                               //
                                                                                                                      //
	QRCode.prototype.makeCode = function (sText) {                                                                       // 581
		this._oQRCode = new QRCodeModel(_getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);   // 582
                                                                                                                      //
		this._oQRCode.addData(sText);                                                                                       // 583
                                                                                                                      //
		this._oQRCode.make();                                                                                               // 584
                                                                                                                      //
		this._el.title = sText;                                                                                             // 585
                                                                                                                      //
		this._oDrawing.draw(this._oQRCode);                                                                                 // 586
                                                                                                                      //
		this.makeImage();                                                                                                   // 587
	}; /**                                                                                                               // 588
     * Make the Image from Canvas element                                                                             //
     * - It occurs automatically                                                                                      //
     * - Android below 3 doesn't support Data-URI spec.                                                               //
     *                                                                                                                //
     * @private                                                                                                       //
     */                                                                                                               //
                                                                                                                      //
	QRCode.prototype.makeImage = function () {                                                                           // 597
		if (typeof this._oDrawing.makeImage == "function" && (!this._android || this._android >= 3)) {                      // 598
			this._oDrawing.makeImage();                                                                                        // 599
		}                                                                                                                   // 600
	}; /**                                                                                                               // 601
     * Clear the QRCode                                                                                               //
     */                                                                                                               //
                                                                                                                      //
	QRCode.prototype.clear = function () {                                                                               // 606
		this._oDrawing.clear();                                                                                             // 607
	}; /**                                                                                                               // 608
     * @name QRCode.CorrectLevel                                                                                      //
     */                                                                                                               //
                                                                                                                      //
	QRCode.CorrectLevel = QRErrorCorrectLevel;                                                                           // 613
})();                                                                                                                 // 614
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"result.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/result.coffee.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
                                                                                                                      //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/routes.coffee.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Router.route('/', function() {                                                                                        // 1
  return this.render('main');                                                                                         //
});                                                                                                                   // 1
                                                                                                                      //
Router.route('/submit', function() {                                                                                  // 4
  return this.render('submit');                                                                                       //
});                                                                                                                   // 4
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"submit.coffee.js":["dragdealer",function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/submit.coffee.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var nullChecker, survey;                                                                                              // 1
                                                                                                                      //
survey = {                                                                                                            // 1
  name: null,                                                                                                         //
  q1: null,                                                                                                           //
  q2: 0                                                                                                               //
};                                                                                                                    //
                                                                                                                      //
nullChecker = function(obj) {                                                                                         // 6
  var k, v;                                                                                                           // 7
  for (k in obj) {                                                                                                    // 7
    v = obj[k];                                                                                                       //
    if (v === null) {                                                                                                 //
      return true;                                                                                                    // 8
    }                                                                                                                 //
  }                                                                                                                   // 7
  return false;                                                                                                       // 9
};                                                                                                                    // 6
                                                                                                                      //
Template.submit.onRendered(function() {                                                                               // 11
  var Dragdealer;                                                                                                     // 12
  Dragdealer = require('dragdealer').Dragdealer;                                                                      //
  return new Dragdealer('q2', {                                                                                       //
    horizontal: true,                                                                                                 //
    steps: 6,                                                                                                         //
    speed: 0.3,                                                                                                       //
    loose: false,                                                                                                     //
    callback: function(x, y) {                                                                                        //
      return survey.q2 = x;                                                                                           //
    }                                                                                                                 //
  });                                                                                                                 //
});                                                                                                                   // 11
                                                                                                                      //
Template.submit.events({                                                                                              // 21
  'change #name': function(e) {                                                                                       //
    return survey.name = e.target.value;                                                                              //
  },                                                                                                                  //
  'click .q1': function(e) {                                                                                          //
    return survey.q1 = e.target.value;                                                                                //
  },                                                                                                                  //
  'click #submit': function(e) {                                                                                      //
    e.preventDefault();                                                                                               //
    if (nullChecker(survey)) {                                                                                        //
      return toastr.error('Please fill all questions', 'Missing inputs');                                             //
    } else {                                                                                                          //
      Surveys.insert(survey);                                                                                         //
      return Router.go('/');                                                                                          //
    }                                                                                                                 //
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"main.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/main.coffee.js                                                                                              //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Template.main.onRendered(function() {                                                                                 // 1
  return $('#qrcode').qrcode({                                                                                        //
    text: Meteor.absoluteUrl() + '/submit'                                                                            //
  });                                                                                                                 //
});                                                                                                                   // 1
                                                                                                                      //
Template.main.events({                                                                                                // 5
  'click #clear': function(e) {                                                                                       //
    return Meteor.call('surveys.drop');                                                                               //
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
Template.main.helpers({                                                                                               // 9
  surveys: function() {                                                                                               //
    return Surveys.find();                                                                                            //
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"model":{"server.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// model/server.coffee.js                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({                                                                                                      // 1
  'surveys.drop': function() {                                                                                        //
    return Surveys.remove({});                                                                                        //
  }                                                                                                                   //
});                                                                                                                   //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"surveys.coffee.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// model/surveys.coffee.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
this.Surveys = new Mongo.Collection('surveys');                                                                       // 1
                                                                                                                      //
Surveys.allow({                                                                                                       // 3
  remove: (function(_this) {                                                                                          //
    return function() {                                                                                               //
      return true;                                                                                                    // 4
    };                                                                                                                //
  })(this)                                                                                                            //
});                                                                                                                   //
                                                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{"extensions":[".js",".json",".html",".jade",".css",".coffee",".styl"]});
require("./client/template.submit.js");
require("./client/template.main.js");
require("./client/vendor/dragdealer.js");
require("./client/vendor/qrcode.js");
require("./client/result.coffee.js");
require("./client/routes.coffee.js");
require("./client/submit.coffee.js");
require("./model/server.coffee.js");
require("./model/surveys.coffee.js");
require("./client/main.coffee.js");