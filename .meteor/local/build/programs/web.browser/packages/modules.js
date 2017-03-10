//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var meteorInstall = Package['modules-runtime'].meteorInstall;

/* Package-scope variables */
var Buffer, process;

var require = meteorInstall({"node_modules":{"meteor":{"modules":{"client.js":["./install-packages.js","./stubs.js","./buffer.js","./process.js","reify/lib/runtime","./css",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/client.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require("./install-packages.js");                                                                                      // 1
require("./stubs.js");                                                                                                 // 2
require("./buffer.js");                                                                                                // 3
require("./process.js");                                                                                               // 4
require("reify/lib/runtime").enable(module.constructor);                                                               // 5
                                                                                                                       // 6
exports.addStyles = require("./css").addStyles;                                                                        // 7
                                                                                                                       // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"buffer.js":["buffer",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/buffer.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
try {                                                                                                                  // 1
  Buffer = global.Buffer || require("buffer").Buffer;                                                                  // 2
} catch (noBuffer) {}                                                                                                  // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"css.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/css.js                                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var doc = document;                                                                                                    // 1
var head = doc.getElementsByTagName("head").item(0);                                                                   // 2
                                                                                                                       // 3
exports.addStyles = function (css) {                                                                                   // 4
  var style = doc.createElement("style");                                                                              // 5
                                                                                                                       // 6
  style.setAttribute("type", "text/css");                                                                              // 7
                                                                                                                       // 8
  // https://msdn.microsoft.com/en-us/library/ms535871(v=vs.85).aspx                                                   // 9
  var internetExplorerSheetObject =                                                                                    // 10
    style.sheet || // Edge/IE11.                                                                                       // 11
    style.styleSheet; // Older IEs.                                                                                    // 12
                                                                                                                       // 13
  if (internetExplorerSheetObject) {                                                                                   // 14
    internetExplorerSheetObject.cssText = css;                                                                         // 15
  } else {                                                                                                             // 16
    style.appendChild(doc.createTextNode(css));                                                                        // 17
  }                                                                                                                    // 18
                                                                                                                       // 19
  return head.appendChild(style);                                                                                      // 20
};                                                                                                                     // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"install-packages.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/install-packages.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
function install(name, mainModule) {                                                                                   // 1
  var meteorDir = {};                                                                                                  // 2
                                                                                                                       // 3
  // Given a package name <name>, install a stub module in the                                                         // 4
  // /node_modules/meteor directory called <name>.js, so that                                                          // 5
  // require.resolve("meteor/<name>") will always return                                                               // 6
  // /node_modules/meteor/<name>.js instead of something like                                                          // 7
  // /node_modules/meteor/<name>/index.js, in the rare but possible event                                              // 8
  // that the package contains a file called index.js (#6590).                                                         // 9
                                                                                                                       // 10
  if (mainModule) {                                                                                                    // 11
    meteorDir[name + ".js"] = [mainModule, function (require, e, module) {                                             // 12
      module.exports = require(mainModule);                                                                            // 13
    }];                                                                                                                // 14
  } else {                                                                                                             // 15
    // back compat with old Meteor packages                                                                            // 16
    meteorDir[name + ".js"] = function (r, e, module) {                                                                // 17
      module.exports = Package[name];                                                                                  // 18
    };                                                                                                                 // 19
  }                                                                                                                    // 20
                                                                                                                       // 21
  meteorInstall({                                                                                                      // 22
    node_modules: {                                                                                                    // 23
      meteor: meteorDir                                                                                                // 24
    }                                                                                                                  // 25
  });                                                                                                                  // 26
}                                                                                                                      // 27
                                                                                                                       // 28
// This file will be modified during computeJsOutputFilesMap to include                                                // 29
// install(<name>) calls for every Meteor package.                                                                     // 30
                                                                                                                       // 31
install("underscore");                                                                                                 // 32
install("meteor");                                                                                                     // 33
install("meteor-base");                                                                                                // 34
install("mobile-experience");                                                                                          // 35
install("modules-runtime");                                                                                            // 36
install("modules", "meteor/modules/client.js");                                                                        // 37
install("es5-shim", "meteor/es5-shim/client.js");                                                                      // 38
install("promise", "meteor/promise/client.js");                                                                        // 39
install("ecmascript-runtime", "meteor/ecmascript-runtime/runtime.js");                                                 // 40
install("babel-compiler");                                                                                             // 41
install("ecmascript");                                                                                                 // 42
install("base64");                                                                                                     // 43
install("ejson");                                                                                                      // 44
install("id-map");                                                                                                     // 45
install("ordered-dict");                                                                                               // 46
install("tracker");                                                                                                    // 47
install("babel-runtime", "meteor/babel-runtime/babel-runtime.js");                                                     // 48
install("random");                                                                                                     // 49
install("mongo-id");                                                                                                   // 50
install("diff-sequence");                                                                                              // 51
install("geojson-utils", "meteor/geojson-utils/main.js");                                                              // 52
install("minimongo");                                                                                                  // 53
install("check", "meteor/check/match.js");                                                                             // 54
install("retry");                                                                                                      // 55
install("ddp-common");                                                                                                 // 56
install("reload");                                                                                                     // 57
install("ddp-client");                                                                                                 // 58
install("ddp");                                                                                                        // 59
install("ddp-server");                                                                                                 // 60
install("allow-deny");                                                                                                 // 61
install("insecure");                                                                                                   // 62
install("mongo");                                                                                                      // 63
install("blaze-html-templates");                                                                                       // 64
install("reactive-var");                                                                                               // 65
install("jquery", "meteor/jquery/main.js");                                                                            // 66
install("standard-minifier-css");                                                                                      // 67
install("standard-minifier-js");                                                                                       // 68
install("shell-server");                                                                                               // 69
install("autopublish");                                                                                                // 70
install("steeve:synaptic");                                                                                            // 71
install("coffeescript");                                                                                               // 72
install("observe-sequence");                                                                                           // 73
install("deps");                                                                                                       // 74
install("htmljs");                                                                                                     // 75
install("blaze");                                                                                                      // 76
install("mquandalle:jade");                                                                                            // 77
install("stylus");                                                                                                     // 78
install("twbs:bootstrap");                                                                                             // 79
install("ui");                                                                                                         // 80
install("spacebars");                                                                                                  // 81
install("templating-compiler");                                                                                        // 82
install("templating-runtime");                                                                                         // 83
install("templating");                                                                                                 // 84
install("iron:core");                                                                                                  // 85
install("iron:dynamic-template");                                                                                      // 86
install("iron:layout");                                                                                                // 87
install("iron:url");                                                                                                   // 88
install("iron:middleware-stack");                                                                                      // 89
install("iron:location");                                                                                              // 90
install("reactive-dict");                                                                                              // 91
install("iron:controller");                                                                                            // 92
install("iron:router");                                                                                                // 93
install("steeve:jquery-qrcode");                                                                                       // 94
install("chrismbeckett:toastr");                                                                                       // 95
install("webapp");                                                                                                     // 96
install("livedata");                                                                                                   // 97
install("hot-code-push");                                                                                              // 98
install("launch-screen");                                                                                              // 99
install("autoupdate");                                                                                                 // 100
                                                                                                                       // 101
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"process.js":["process",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/process.js                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
try {                                                                                                                  // 1
  // The application can run `npm install process` to provide its own                                                  // 2
  // process stub; otherwise this module will provide a partial stub.                                                  // 3
  process = global.process || require("process");                                                                      // 4
} catch (noProcess) {                                                                                                  // 5
  process = {};                                                                                                        // 6
}                                                                                                                      // 7
                                                                                                                       // 8
if (Meteor.isServer) {                                                                                                 // 9
  // Make require("process") work on the server in all versions of Node.                                               // 10
  meteorInstall({                                                                                                      // 11
    node_modules: {                                                                                                    // 12
      "process.js": function (r, e, module) {                                                                          // 13
        module.exports = process;                                                                                      // 14
      }                                                                                                                // 15
    }                                                                                                                  // 16
  });                                                                                                                  // 17
} else {                                                                                                               // 18
  process.platform = "browser";                                                                                        // 19
  process.nextTick = process.nextTick || Meteor._setImmediate;                                                         // 20
}                                                                                                                      // 21
                                                                                                                       // 22
if (typeof process.env !== "object") {                                                                                 // 23
  process.env = {};                                                                                                    // 24
}                                                                                                                      // 25
                                                                                                                       // 26
_.extend(process.env, meteorEnv);                                                                                      // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"stubs.js":["meteor-node-stubs",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/modules/stubs.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var haveStubs = false;                                                                                                 // 1
try {                                                                                                                  // 2
  require.resolve("meteor-node-stubs");                                                                                // 3
  haveStubs = true;                                                                                                    // 4
} catch (noStubs) {}                                                                                                   // 5
                                                                                                                       // 6
if (haveStubs) {                                                                                                       // 7
  // When meteor-node-stubs is installed in the application's root                                                     // 8
  // node_modules directory, requiring it here installs aliases for stubs                                              // 9
  // for all Node built-in modules, such as fs, util, and http.                                                        // 10
  require("meteor-node-stubs");                                                                                        // 11
}                                                                                                                      // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"node_modules":{"reify":{"lib":{"runtime.js":["./entry.js","./utils.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/modules/node_modules/reify/lib/runtime.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Entry = require("./entry.js").Entry;                                                                               // 1
var utils = require("./utils.js");                                                                                     // 2
                                                                                                                       // 3
exports.enable = function (Module) {                                                                                   // 4
  var Mp = Module.prototype;                                                                                           // 5
                                                                                                                       // 6
  if (typeof Mp.import === "function" &&                                                                               // 7
      typeof Mp.export === "function") {                                                                               // 8
    // If the Mp.{import,export} methods have already been                                                             // 9
    // defined, abandon reification immediately.                                                                       // 10
    return Module;                                                                                                     // 11
  }                                                                                                                    // 12
                                                                                                                       // 13
  // Platform-specific code should implement this method however                                                       // 14
  // appropriate. Module.prototype.resolve(id) should return an absolute                                               // 15
  // version of the given module identifier, like require.resolve.                                                     // 16
  Mp.resolve = Mp.resolve || function resolve(id) {                                                                    // 17
    throw new Error("Module.prototype.resolve not implemented");                                                       // 18
  };                                                                                                                   // 19
                                                                                                                       // 20
  // Platform-specific code should find a way to call this method whenever                                             // 21
  // the module system is about to return module.exports from require. This                                            // 22
  // might happen more than once per module, in case of dependency cycles,                                             // 23
  // so we want Module.prototype.runModuleSetters to run each time.                                                    // 24
  Mp.runModuleSetters = function runModuleSetters(valueToPassThrough) {                                                // 25
    var entry = Entry.get(this.id);                                                                                    // 26
    if (entry) {                                                                                                       // 27
      entry.runModuleSetters(this);                                                                                    // 28
    }                                                                                                                  // 29
                                                                                                                       // 30
    // Assignments to exported local variables get wrapped with calls to                                               // 31
    // module.runModuleSetters, so module.runModuleSetters returns the                                                 // 32
    // valueToPassThrough parameter to allow the value of the original                                                 // 33
    // expression to pass through. For example,                                                                        // 34
    //                                                                                                                 // 35
    //   export var a = 1;                                                                                             // 36
    //   console.log(a += 3);                                                                                          // 37
    //                                                                                                                 // 38
    // becomes                                                                                                         // 39
    //                                                                                                                 // 40
    //   module.export("a", () => a);                                                                                  // 41
    //   var a = 1;                                                                                                    // 42
    //   console.log(module.runModuleSetters(a += 3));                                                                 // 43
    //                                                                                                                 // 44
    // This ensures module.runModuleSetters runs immediately after the                                                 // 45
    // assignment, and does not interfere with the larger computation.                                                 // 46
    return valueToPassThrough;                                                                                         // 47
  };                                                                                                                   // 48
                                                                                                                       // 49
  function setESModule(module) {                                                                                       // 50
    var exports = module.exports;                                                                                      // 51
    if (exports && typeof exports === "object") {                                                                      // 52
      exports.__esModule = true;                                                                                       // 53
    }                                                                                                                  // 54
  }                                                                                                                    // 55
                                                                                                                       // 56
  // If key is provided, it will be used to identify the given setters so                                              // 57
  // that they can be replaced if module.import is called again with the                                               // 58
  // same key. This avoids potential memory leaks from import declarations                                             // 59
  // inside loops. The compiler generates these keys automatically (and                                                // 60
  // deterministically) when compiling nested import declarations.                                                     // 61
  Mp.import = function (id, setters, key) {                                                                            // 62
    var module = this;                                                                                                 // 63
    setESModule(module);                                                                                               // 64
                                                                                                                       // 65
    var absoluteId = module.resolve(id);                                                                               // 66
                                                                                                                       // 67
    if (setters && typeof setters === "object") {                                                                      // 68
      var entry = Entry.getOrCreate(absoluteId);                                                                       // 69
      entry.addSetters(module, setters, key);                                                                          // 70
    }                                                                                                                  // 71
                                                                                                                       // 72
    var countBefore = entry && entry.runCount;                                                                         // 73
    var exports = typeof module.require === "function"                                                                 // 74
      ? module.require(absoluteId)                                                                                     // 75
      : require(absoluteId);                                                                                           // 76
                                                                                                                       // 77
    if (entry && entry.runCount === countBefore) {                                                                     // 78
      // If require(absoluteId) didn't run any setters for this entry,                                                 // 79
      // perhaps because it's not the first time this module has been                                                  // 80
      // required, run the setters now using an object that passes as the                                              // 81
      // real module object.                                                                                           // 82
      entry.runModuleSetters({                                                                                         // 83
        id: absoluteId,                                                                                                // 84
        exports: exports,                                                                                              // 85
        getExportByName: Mp.getExportByName                                                                            // 86
      });                                                                                                              // 87
    }                                                                                                                  // 88
  };                                                                                                                   // 89
                                                                                                                       // 90
  // Register getter functions for local variables in the scope of an                                                  // 91
  // export statement. The keys of the getters object are exported names,                                              // 92
  // and the values are functions that return local values.                                                            // 93
  Mp.export = function (getters) {                                                                                     // 94
    var module = this;                                                                                                 // 95
    setESModule(module);                                                                                               // 96
                                                                                                                       // 97
    if (utils.isPlainObject(getters)) {                                                                                // 98
      Entry.getOrCreate(module.id).addGetters(getters);                                                                // 99
    }                                                                                                                  // 100
                                                                                                                       // 101
    if (module.loaded) {                                                                                               // 102
      // If the module has already been evaluated, then we need to trigger                                             // 103
      // another round of entry.runModuleSetters calls, which begins by                                                // 104
      // calling entry.runModuleGetters(module).                                                                       // 105
      module.runModuleSetters();                                                                                       // 106
    }                                                                                                                  // 107
  };                                                                                                                   // 108
                                                                                                                       // 109
  // This method can be overridden by client code to implement custom export                                           // 110
  // naming logic. The current implementation works well with Babel's                                                  // 111
  // __esModule convention.                                                                                            // 112
  Mp.getExportByName = function (name) {                                                                               // 113
    var exports = this.exports;                                                                                        // 114
                                                                                                                       // 115
    if (name === "*") {                                                                                                // 116
      return exports;                                                                                                  // 117
    }                                                                                                                  // 118
                                                                                                                       // 119
    if (name === "default" &&                                                                                          // 120
        ! (exports &&                                                                                                  // 121
           typeof exports === "object" &&                                                                              // 122
           exports.__esModule &&                                                                                       // 123
           "default" in exports)) {                                                                                    // 124
      return exports;                                                                                                  // 125
    }                                                                                                                  // 126
                                                                                                                       // 127
    return exports && exports[name];                                                                                   // 128
  };                                                                                                                   // 129
                                                                                                                       // 130
  return Module;                                                                                                       // 131
};                                                                                                                     // 132
                                                                                                                       // 133
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"entry.js":["./utils.js",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/modules/node_modules/reify/lib/entry.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var hasOwn = Object.prototype.hasOwnProperty;                                                                          // 1
var entryMap = Object.create(null);                                                                                    // 2
var utils = require("./utils.js");                                                                                     // 3
                                                                                                                       // 4
function Entry(id) {                                                                                                   // 5
  // Same as module.id for this module.                                                                                // 6
  this.id = id;                                                                                                        // 7
  // The number of times this.runModuleSetters has been called.                                                        // 8
  this.runCount = 0;                                                                                                   // 9
  // Setters for assigning to local variables in parent modules.                                                       // 10
  this.setters = Object.create(null);                                                                                  // 11
  // Getters for local variables exported from this module.                                                            // 12
  this.getters = Object.create(null);                                                                                  // 13
}                                                                                                                      // 14
                                                                                                                       // 15
var Ep = Entry.prototype;                                                                                              // 16
                                                                                                                       // 17
Entry.get = function (id) {                                                                                            // 18
  return entryMap[id] || null;                                                                                         // 19
};                                                                                                                     // 20
                                                                                                                       // 21
Entry.getOrCreate = function (id) {                                                                                    // 22
  return entryMap[id] = entryMap[id] || new Entry(id);                                                                 // 23
};                                                                                                                     // 24
                                                                                                                       // 25
var keySalt = 0;                                                                                                       // 26
function makeUniqueKey() {                                                                                             // 27
  return Math.random()                                                                                                 // 28
    .toString(36)                                                                                                      // 29
    // Add an incrementing salt to help track key ordering and also                                                    // 30
    // absolutely guarantee we never return the same key twice.                                                        // 31
    .replace("0.", ++keySalt + ":");                                                                                   // 32
}                                                                                                                      // 33
                                                                                                                       // 34
Ep.addSetters = function (parent, setters, key) {                                                                      // 35
  var entry = this;                                                                                                    // 36
                                                                                                                       // 37
  if (typeof key === "undefined") {                                                                                    // 38
    // If no key was provided, make a new unique key that won't collide                                                // 39
    // with any other keys.                                                                                            // 40
    key = makeUniqueKey();                                                                                             // 41
  } else {                                                                                                             // 42
    // If a key was provided, make sure it is distinct from keys provided                                              // 43
    // by other parent modules.                                                                                        // 44
    key = parent.id + ":" + key;                                                                                       // 45
  }                                                                                                                    // 46
                                                                                                                       // 47
  Object.keys(setters).forEach(function (name) {                                                                       // 48
    var setter = setters[name];                                                                                        // 49
    if (typeof setter === "function" &&                                                                                // 50
        // Ignore any requests for the exports.__esModule property."                                                   // 51
        name !== "__esModule") {                                                                                       // 52
      setter.parent = parent;                                                                                          // 53
      (entry.setters[name] =                                                                                           // 54
       entry.setters[name] || Object.create(null)                                                                      // 55
      )[key] = setter;                                                                                                 // 56
    }                                                                                                                  // 57
  });                                                                                                                  // 58
};                                                                                                                     // 59
                                                                                                                       // 60
Ep.addGetters = function (getters) {                                                                                   // 61
  var entry = this;                                                                                                    // 62
  Object.keys(getters).forEach(function (name) {                                                                       // 63
    var getter = getters[name];                                                                                        // 64
    if (typeof getter === "function" &&                                                                                // 65
        // Ignore any requests for the exports.__esModule property."                                                   // 66
        name !== "__esModule") {                                                                                       // 67
      // Should this throw if hasOwn.call(this.getters, name)?                                                         // 68
      entry.getters[name] = getter;                                                                                    // 69
    }                                                                                                                  // 70
  });                                                                                                                  // 71
};                                                                                                                     // 72
                                                                                                                       // 73
function runModuleSetters(module) {                                                                                    // 74
  var entry = entryMap[module.id];                                                                                     // 75
  if (entry) {                                                                                                         // 76
    entry.runModuleSetters(module);                                                                                    // 77
  }                                                                                                                    // 78
}                                                                                                                      // 79
                                                                                                                       // 80
function runModuleGetters(module) {                                                                                    // 81
  var entry = entryMap[module.id];                                                                                     // 82
  return entry ? entry.runModuleGetters(module) : 0;                                                                   // 83
}                                                                                                                      // 84
                                                                                                                       // 85
Ep.runModuleGetters = function (module) {                                                                              // 86
  var entry = this;                                                                                                    // 87
  var changeCount = 0;                                                                                                 // 88
                                                                                                                       // 89
  Object.keys(entry.getters).forEach(function (name) {                                                                 // 90
    if (entry.runGetter(module, name)) {                                                                               // 91
      ++changeCount;                                                                                                   // 92
    }                                                                                                                  // 93
  });                                                                                                                  // 94
                                                                                                                       // 95
  return changeCount;                                                                                                  // 96
};                                                                                                                     // 97
                                                                                                                       // 98
// Returns true iff the getter updated module.exports with a new value.                                                // 99
Ep.runGetter = function (module, name) {                                                                               // 100
  if (! hasOwn.call(this.getters, name)) {                                                                             // 101
    return false;                                                                                                      // 102
  }                                                                                                                    // 103
                                                                                                                       // 104
  var getter = this.getters[name];                                                                                     // 105
  try {                                                                                                                // 106
    var value = getter.call(module);                                                                                   // 107
  } catch (e) {}                                                                                                       // 108
  var exports = module.exports;                                                                                        // 109
                                                                                                                       // 110
  if (! hasOwn.call(exports, name) ||                                                                                  // 111
      exports[name] !== value) {                                                                                       // 112
    // We update module.exports[name] with the current value so that                                                   // 113
    // CommonJS require calls remain consistent with module.import.                                                    // 114
    exports[name] = value;                                                                                             // 115
    return true;                                                                                                       // 116
  }                                                                                                                    // 117
                                                                                                                       // 118
  return false;                                                                                                        // 119
};                                                                                                                     // 120
                                                                                                                       // 121
// Called whenever module.exports might have changed, to trigger any                                                   // 122
// setters associated with the newly exported values.                                                                  // 123
Ep.runModuleSetters = function (module) {                                                                              // 124
  var entry = this;                                                                                                    // 125
  var names = Object.keys(entry.setters);                                                                              // 126
                                                                                                                       // 127
  // Make sure module.exports is up to date before we call                                                             // 128
  // module.getExportByName(name).                                                                                     // 129
  entry.runModuleGetters(module);                                                                                      // 130
                                                                                                                       // 131
  // Invoke the given callback once for every (setter, value, name) triple                                             // 132
  // that needs to be called. Note that forEachSetter does not call any                                                // 133
  // setters itself, only the given callback.                                                                          // 134
  function forEachSetter(callback, context) {                                                                          // 135
    names.forEach(function (name) {                                                                                    // 136
      var setters = entry.setters[name];                                                                               // 137
      Object.keys(setters).forEach(function (key) {                                                                    // 138
        var value = module.getExportByName(name);                                                                      // 139
        if (name === "*") {                                                                                            // 140
          Object.keys(value).forEach(function (name) {                                                                 // 141
            call(setters[key], value[name], name);                                                                     // 142
          });                                                                                                          // 143
        } else {                                                                                                       // 144
          call(setters[key], value, name);                                                                             // 145
        }                                                                                                              // 146
      });                                                                                                              // 147
    });                                                                                                                // 148
                                                                                                                       // 149
    function call(setter, value, name) {                                                                               // 150
      if (name === "__esModule") {                                                                                     // 151
        // Ignore setters asking for module.exports.__esModule.                                                        // 152
        return;                                                                                                        // 153
      }                                                                                                                // 154
                                                                                                                       // 155
      setter.last = setter.last || Object.create(null);                                                                // 156
                                                                                                                       // 157
      if (! hasOwn.call(setter.last, name) ||                                                                          // 158
          setter.last[name] !== value) {                                                                               // 159
        // Only invoke the callback if we have not called this setter                                                  // 160
        // (with a value of this name) before, or the current value is                                                 // 161
        // different from the last value we passed to this setter.                                                     // 162
        return callback.apply(context, arguments);                                                                     // 163
      }                                                                                                                // 164
    }                                                                                                                  // 165
  }                                                                                                                    // 166
                                                                                                                       // 167
  // Every three elements of this list form a (setter, value, name) triple                                             // 168
  // that needs to be invoked.                                                                                         // 169
  var settersToCall = [];                                                                                              // 170
                                                                                                                       // 171
  // Lazily-initialized objects mapping parent module identifiers to                                                   // 172
  // relevant parent module objects and snapshots of their exports.                                                    // 173
  var relevantParents;                                                                                                 // 174
  var parentSnapshots;                                                                                                 // 175
                                                                                                                       // 176
  // Take snapshots of setter.parent.exports for any setters that we are                                               // 177
  // planning to call, so that we can later determine if calling the                                                   // 178
  // setters modified any of those exports objects.                                                                    // 179
  forEachSetter(function (setter, value, name) {                                                                       // 180
    var parent = setter.parent;                                                                                        // 181
    parentSnapshots = parentSnapshots || Object.create(null);                                                          // 182
    if (! hasOwn.call(parentSnapshots, parent.id)) {                                                                   // 183
      relevantParents = relevantParents || Object.create(null);                                                        // 184
      relevantParents[parent.id] = parent;                                                                             // 185
      if (utils.isPlainObject(parent.exports)) {                                                                       // 186
        // If parent.exports is an object, make a shallow clone of it so                                               // 187
        // that we can see if it changes as a result of calling setters.                                               // 188
        parentSnapshots[parent.id] = utils.assign({}, parent.exports);                                                 // 189
      } else {                                                                                                         // 190
        // If parent.exports is not an object, the "snapshot" is just the                                              // 191
        // value of parent.exports.                                                                                    // 192
        parentSnapshots[parent.id] = parent.exports;                                                                   // 193
      }                                                                                                                // 194
    }                                                                                                                  // 195
                                                                                                                       // 196
    // Push three elements at a time to avoid creating wrapper arrays for                                              // 197
    // each (setter, value, name) triple. Note the i += 3 below.                                                       // 198
    settersToCall.push(setter, value, name);                                                                           // 199
  });                                                                                                                  // 200
                                                                                                                       // 201
  // Now call all the setters that we decided we need to call.                                                         // 202
  for (var i = 0; i < settersToCall.length; i += 3) {                                                                  // 203
    var setter = settersToCall[i];                                                                                     // 204
    var value = settersToCall[i + 1];                                                                                  // 205
    var name = settersToCall[i + 2];                                                                                   // 206
    setter.call(module, setter.last[name] = value, name);                                                              // 207
  }                                                                                                                    // 208
                                                                                                                       // 209
  ++entry.runCount;                                                                                                    // 210
                                                                                                                       // 211
  if (! relevantParents) {                                                                                             // 212
    // If we never called takeSnapshot, then we can avoid checking                                                     // 213
    // relevantParents and parentSnapshots below.                                                                      // 214
    return;                                                                                                            // 215
  }                                                                                                                    // 216
                                                                                                                       // 217
  // If any of the setters updated the module.exports of a parent module,                                              // 218
  // or updated local variables that are exported by that parent module,                                               // 219
  // then we must re-run any setters registered by that parent module.                                                 // 220
  Object.keys(relevantParents).forEach(function (id) {                                                                 // 221
    var parent = relevantParents[id];                                                                                  // 222
                                                                                                                       // 223
    if (runModuleGetters(parent) > 0) {                                                                                // 224
      return runModuleSetters(parent);                                                                                 // 225
    }                                                                                                                  // 226
                                                                                                                       // 227
    var exports = parent.exports;                                                                                      // 228
    var snapshot = parentSnapshots[parent.id];                                                                         // 229
    if (utils.shallowObjEqual(exports, snapshot)) {                                                                    // 230
      // If parent.exports have not changed since we took the snapshot,                                                // 231
      // then we do not need to run the parent's setters.                                                              // 232
      return;                                                                                                          // 233
    }                                                                                                                  // 234
                                                                                                                       // 235
    runModuleSetters(parent);                                                                                          // 236
  });                                                                                                                  // 237
};                                                                                                                     // 238
                                                                                                                       // 239
exports.Entry = Entry;                                                                                                 // 240
                                                                                                                       // 241
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"utils.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/meteor/modules/node_modules/reify/lib/utils.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var hasOwn = Object.prototype.hasOwnProperty;                                                                          // 1
var objToStr = Object.prototype.toString;                                                                              // 2
var objStr = objToStr.call({});                                                                                        // 3
                                                                                                                       // 4
function isPlainObject(value) {                                                                                        // 5
  return objToStr.call(value) === objStr;                                                                              // 6
}                                                                                                                      // 7
exports.isPlainObject = isPlainObject;                                                                                 // 8
                                                                                                                       // 9
exports.assign = Object.assign || function (obj) {                                                                     // 10
  var argc = arguments.length;                                                                                         // 11
  for (var i = 1; i < argc; ++i) {                                                                                     // 12
    var arg = arguments[i];                                                                                            // 13
    if (arg && typeof arg === "object") {                                                                              // 14
      var keys = Object.keys(arg);                                                                                     // 15
      for (var k = 0; k < keys.length; ++k) {                                                                          // 16
        var key = keys[k];                                                                                             // 17
        obj[key] = arg[key];                                                                                           // 18
      }                                                                                                                // 19
    }                                                                                                                  // 20
  }                                                                                                                    // 21
  return obj;                                                                                                          // 22
};                                                                                                                     // 23
                                                                                                                       // 24
exports.shallowObjEqual = function(a, b) {                                                                             // 25
  if (a === b) {                                                                                                       // 26
    return true;                                                                                                       // 27
  }                                                                                                                    // 28
                                                                                                                       // 29
  if (! isPlainObject(a) ||                                                                                            // 30
      ! isPlainObject(b)) {                                                                                            // 31
    return false;                                                                                                      // 32
  }                                                                                                                    // 33
                                                                                                                       // 34
  var aKeys = Object.keys(a);                                                                                          // 35
  var bKeys = Object.keys(b);                                                                                          // 36
                                                                                                                       // 37
  if (aKeys.length !== bKeys.length) {                                                                                 // 38
    return false;                                                                                                      // 39
  }                                                                                                                    // 40
                                                                                                                       // 41
  return aKeys.every(function (key) {                                                                                  // 42
    return hasOwn.call(b, key) &&                                                                                      // 43
      a[key] === b[key];                                                                                               // 44
  });                                                                                                                  // 45
};                                                                                                                     // 46
                                                                                                                       // 47
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},"babel-runtime":{"helpers":{"typeof.js":["../core-js/symbol/iterator","../core-js/symbol",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/babel-runtime/helpers/typeof.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
"use strict";                                                                                                          // 1
                                                                                                                       // 2
exports.__esModule = true;                                                                                             // 3
                                                                                                                       // 4
var _iterator = require("../core-js/symbol/iterator");                                                                 // 5
                                                                                                                       // 6
var _iterator2 = _interopRequireDefault(_iterator);                                                                    // 7
                                                                                                                       // 8
var _symbol = require("../core-js/symbol");                                                                            // 9
                                                                                                                       // 10
var _symbol2 = _interopRequireDefault(_symbol);                                                                        // 11
                                                                                                                       // 12
var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };
                                                                                                                       // 14
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }                        // 15
                                                                                                                       // 16
exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);                                                      // 18
} : function (obj) {                                                                                                   // 19
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};                                                                                                                     // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"core-js":{"symbol":{"iterator.js":["core-js/library/fn/symbol/iterator",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/babel-runtime/core-js/symbol/iterator.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };                       // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"symbol.js":["core-js/library/fn/symbol",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/babel-runtime/core-js/symbol.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };                                // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"regenerator":{"index.js":["regenerator-runtime",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/babel-runtime/regenerator/index.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("regenerator-runtime");                                                                       // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"core-js":{"library":{"fn":{"symbol":{"iterator.js":["../../modules/es6.string.iterator","../../modules/web.dom.iterable","../../modules/_wks-ext",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/fn/symbol/iterator.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../../modules/es6.string.iterator');                                                                          // 1
require('../../modules/web.dom.iterable');                                                                             // 2
module.exports = require('../../modules/_wks-ext').f('iterator');                                                      // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"index.js":["../../modules/es6.symbol","../../modules/es6.object.to-string","../../modules/es7.symbol.async-iterator","../../modules/es7.symbol.observable","../../modules/_core",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/fn/symbol/index.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('../../modules/es6.symbol');                                                                                   // 1
require('../../modules/es6.object.to-string');                                                                         // 2
require('../../modules/es7.symbol.async-iterator');                                                                    // 3
require('../../modules/es7.symbol.observable');                                                                        // 4
module.exports = require('../../modules/_core').Symbol;                                                                // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"modules":{"es6.string.iterator.js":["./_string-at","./_iter-define",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/es6.string.iterator.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';                                                                                                          // 1
var $at  = require('./_string-at')(true);                                                                              // 2
                                                                                                                       // 3
// 21.1.3.27 String.prototype[@@iterator]()                                                                            // 4
require('./_iter-define')(String, 'String', function(iterated){                                                        // 5
  this._t = String(iterated); // target                                                                                // 6
  this._i = 0;                // next index                                                                            // 7
// 21.1.5.2.1 %StringIteratorPrototype%.next()                                                                         // 8
}, function(){                                                                                                         // 9
  var O     = this._t                                                                                                  // 10
    , index = this._i                                                                                                  // 11
    , point;                                                                                                           // 12
  if(index >= O.length)return {value: undefined, done: true};                                                          // 13
  point = $at(O, index);                                                                                               // 14
  this._i += point.length;                                                                                             // 15
  return {value: point, done: false};                                                                                  // 16
});                                                                                                                    // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_string-at.js":["./_to-integer","./_defined",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_string-at.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toInteger = require('./_to-integer')                                                                               // 1
  , defined   = require('./_defined');                                                                                 // 2
// true  -> String#at                                                                                                  // 3
// false -> String#codePointAt                                                                                         // 4
module.exports = function(TO_STRING){                                                                                  // 5
  return function(that, pos){                                                                                          // 6
    var s = String(defined(that))                                                                                      // 7
      , i = toInteger(pos)                                                                                             // 8
      , l = s.length                                                                                                   // 9
      , a, b;                                                                                                          // 10
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;                                                              // 11
    a = s.charCodeAt(i);                                                                                               // 12
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff                 // 13
      ? TO_STRING ? s.charAt(i) : a                                                                                    // 14
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;                                   // 15
  };                                                                                                                   // 16
};                                                                                                                     // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_to-integer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_to-integer.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.1.4 ToInteger                                                                                                     // 1
var ceil  = Math.ceil                                                                                                  // 2
  , floor = Math.floor;                                                                                                // 3
module.exports = function(it){                                                                                         // 4
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);                                                            // 5
};                                                                                                                     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_defined.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_defined.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.2.1 RequireObjectCoercible(argument)                                                                              // 1
module.exports = function(it){                                                                                         // 2
  if(it == undefined)throw TypeError("Can't call method on  " + it);                                                   // 3
  return it;                                                                                                           // 4
};                                                                                                                     // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_iter-define.js":["./_library","./_export","./_redefine","./_hide","./_has","./_iterators","./_iter-create","./_set-to-string-tag","./_object-gpo","./_wks",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_iter-define.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';                                                                                                          // 1
var LIBRARY        = require('./_library')                                                                             // 2
  , $export        = require('./_export')                                                                              // 3
  , redefine       = require('./_redefine')                                                                            // 4
  , hide           = require('./_hide')                                                                                // 5
  , has            = require('./_has')                                                                                 // 6
  , Iterators      = require('./_iterators')                                                                           // 7
  , $iterCreate    = require('./_iter-create')                                                                         // 8
  , setToStringTag = require('./_set-to-string-tag')                                                                   // 9
  , getPrototypeOf = require('./_object-gpo')                                                                          // 10
  , ITERATOR       = require('./_wks')('iterator')                                                                     // 11
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`                        // 12
  , FF_ITERATOR    = '@@iterator'                                                                                      // 13
  , KEYS           = 'keys'                                                                                            // 14
  , VALUES         = 'values';                                                                                         // 15
                                                                                                                       // 16
var returnThis = function(){ return this; };                                                                           // 17
                                                                                                                       // 18
module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){                                     // 19
  $iterCreate(Constructor, NAME, next);                                                                                // 20
  var getMethod = function(kind){                                                                                      // 21
    if(!BUGGY && kind in proto)return proto[kind];                                                                     // 22
    switch(kind){                                                                                                      // 23
      case KEYS: return function keys(){ return new Constructor(this, kind); };                                        // 24
      case VALUES: return function values(){ return new Constructor(this, kind); };                                    // 25
    } return function entries(){ return new Constructor(this, kind); };                                                // 26
  };                                                                                                                   // 27
  var TAG        = NAME + ' Iterator'                                                                                  // 28
    , DEF_VALUES = DEFAULT == VALUES                                                                                   // 29
    , VALUES_BUG = false                                                                                               // 30
    , proto      = Base.prototype                                                                                      // 31
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]                                  // 32
    , $default   = $native || getMethod(DEFAULT)                                                                       // 33
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined                                 // 34
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native                                                // 35
    , methods, key, IteratorPrototype;                                                                                 // 36
  // Fix native                                                                                                        // 37
  if($anyNative){                                                                                                      // 38
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));                                                     // 39
    if(IteratorPrototype !== Object.prototype){                                                                        // 40
      // Set @@toStringTag to native iterators                                                                         // 41
      setToStringTag(IteratorPrototype, TAG, true);                                                                    // 42
      // fix for some old engines                                                                                      // 43
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);                  // 44
    }                                                                                                                  // 45
  }                                                                                                                    // 46
  // fix Array#{values, @@iterator}.name in V8 / FF                                                                    // 47
  if(DEF_VALUES && $native && $native.name !== VALUES){                                                                // 48
    VALUES_BUG = true;                                                                                                 // 49
    $default = function values(){ return $native.call(this); };                                                        // 50
  }                                                                                                                    // 51
  // Define iterator                                                                                                   // 52
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){                                               // 53
    hide(proto, ITERATOR, $default);                                                                                   // 54
  }                                                                                                                    // 55
  // Plug for library                                                                                                  // 56
  Iterators[NAME] = $default;                                                                                          // 57
  Iterators[TAG]  = returnThis;                                                                                        // 58
  if(DEFAULT){                                                                                                         // 59
    methods = {                                                                                                        // 60
      values:  DEF_VALUES ? $default : getMethod(VALUES),                                                              // 61
      keys:    IS_SET     ? $default : getMethod(KEYS),                                                                // 62
      entries: $entries                                                                                                // 63
    };                                                                                                                 // 64
    if(FORCED)for(key in methods){                                                                                     // 65
      if(!(key in proto))redefine(proto, key, methods[key]);                                                           // 66
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);                                      // 67
  }                                                                                                                    // 68
  return methods;                                                                                                      // 69
};                                                                                                                     // 70
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_library.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_library.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = true;                                                                                                 // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_export.js":["./_global","./_core","./_ctx","./_hide",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_export.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var global    = require('./_global')                                                                                   // 1
  , core      = require('./_core')                                                                                     // 2
  , ctx       = require('./_ctx')                                                                                      // 3
  , hide      = require('./_hide')                                                                                     // 4
  , PROTOTYPE = 'prototype';                                                                                           // 5
                                                                                                                       // 6
var $export = function(type, name, source){                                                                            // 7
  var IS_FORCED = type & $export.F                                                                                     // 8
    , IS_GLOBAL = type & $export.G                                                                                     // 9
    , IS_STATIC = type & $export.S                                                                                     // 10
    , IS_PROTO  = type & $export.P                                                                                     // 11
    , IS_BIND   = type & $export.B                                                                                     // 12
    , IS_WRAP   = type & $export.W                                                                                     // 13
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})                                                   // 14
    , expProto  = exports[PROTOTYPE]                                                                                   // 15
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]                      // 16
    , key, own, out;                                                                                                   // 17
  if(IS_GLOBAL)source = name;                                                                                          // 18
  for(key in source){                                                                                                  // 19
    // contains in native                                                                                              // 20
    own = !IS_FORCED && target && target[key] !== undefined;                                                           // 21
    if(own && key in exports)continue;                                                                                 // 22
    // export native or passed                                                                                         // 23
    out = own ? target[key] : source[key];                                                                             // 24
    // prevent global pollution for namespaces                                                                         // 25
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]                                         // 26
    // bind timers to global for call from export context                                                              // 27
    : IS_BIND && own ? ctx(out, global)                                                                                // 28
    // wrap global constructors for prevent change them in library                                                     // 29
    : IS_WRAP && target[key] == out ? (function(C){                                                                    // 30
      var F = function(a, b, c){                                                                                       // 31
        if(this instanceof C){                                                                                         // 32
          switch(arguments.length){                                                                                    // 33
            case 0: return new C;                                                                                      // 34
            case 1: return new C(a);                                                                                   // 35
            case 2: return new C(a, b);                                                                                // 36
          } return new C(a, b, c);                                                                                     // 37
        } return C.apply(this, arguments);                                                                             // 38
      };                                                                                                               // 39
      F[PROTOTYPE] = C[PROTOTYPE];                                                                                     // 40
      return F;                                                                                                        // 41
    // make static versions for prototype methods                                                                      // 42
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;                                    // 43
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%                                                       // 44
    if(IS_PROTO){                                                                                                      // 45
      (exports.virtual || (exports.virtual = {}))[key] = out;                                                          // 46
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%                                                   // 47
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);                                      // 48
    }                                                                                                                  // 49
  }                                                                                                                    // 50
};                                                                                                                     // 51
// type bitmap                                                                                                         // 52
$export.F = 1;   // forced                                                                                             // 53
$export.G = 2;   // global                                                                                             // 54
$export.S = 4;   // static                                                                                             // 55
$export.P = 8;   // proto                                                                                              // 56
$export.B = 16;  // bind                                                                                               // 57
$export.W = 32;  // wrap                                                                                               // 58
$export.U = 64;  // safe                                                                                               // 59
$export.R = 128; // real proto method for `library`                                                                    // 60
module.exports = $export;                                                                                              // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_global.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_global.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028                                                // 1
var global = module.exports = typeof window != 'undefined' && window.Math == Math                                      // 2
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();                       // 3
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef                                                // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_core.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_core.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var core = module.exports = {version: '2.4.0'};                                                                        // 1
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef                                                  // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_ctx.js":["./_a-function",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_ctx.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// optional / simple context binding                                                                                   // 1
var aFunction = require('./_a-function');                                                                              // 2
module.exports = function(fn, that, length){                                                                           // 3
  aFunction(fn);                                                                                                       // 4
  if(that === undefined)return fn;                                                                                     // 5
  switch(length){                                                                                                      // 6
    case 1: return function(a){                                                                                        // 7
      return fn.call(that, a);                                                                                         // 8
    };                                                                                                                 // 9
    case 2: return function(a, b){                                                                                     // 10
      return fn.call(that, a, b);                                                                                      // 11
    };                                                                                                                 // 12
    case 3: return function(a, b, c){                                                                                  // 13
      return fn.call(that, a, b, c);                                                                                   // 14
    };                                                                                                                 // 15
  }                                                                                                                    // 16
  return function(/* ...args */){                                                                                      // 17
    return fn.apply(that, arguments);                                                                                  // 18
  };                                                                                                                   // 19
};                                                                                                                     // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_a-function.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_a-function.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function(it){                                                                                         // 1
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');                                              // 2
  return it;                                                                                                           // 3
};                                                                                                                     // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_hide.js":["./_object-dp","./_property-desc","./_descriptors",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_hide.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var dP         = require('./_object-dp')                                                                               // 1
  , createDesc = require('./_property-desc');                                                                          // 2
module.exports = require('./_descriptors') ? function(object, key, value){                                             // 3
  return dP.f(object, key, createDesc(1, value));                                                                      // 4
} : function(object, key, value){                                                                                      // 5
  object[key] = value;                                                                                                 // 6
  return object;                                                                                                       // 7
};                                                                                                                     // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_object-dp.js":["./_an-object","./_ie8-dom-define","./_to-primitive","./_descriptors",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_object-dp.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var anObject       = require('./_an-object')                                                                           // 1
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')                                                                      // 2
  , toPrimitive    = require('./_to-primitive')                                                                        // 3
  , dP             = Object.defineProperty;                                                                            // 4
                                                                                                                       // 5
exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){             // 6
  anObject(O);                                                                                                         // 7
  P = toPrimitive(P, true);                                                                                            // 8
  anObject(Attributes);                                                                                                // 9
  if(IE8_DOM_DEFINE)try {                                                                                              // 10
    return dP(O, P, Attributes);                                                                                       // 11
  } catch(e){ /* empty */ }                                                                                            // 12
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');                           // 13
  if('value' in Attributes)O[P] = Attributes.value;                                                                    // 14
  return O;                                                                                                            // 15
};                                                                                                                     // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_an-object.js":["./_is-object",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_an-object.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var isObject = require('./_is-object');                                                                                // 1
module.exports = function(it){                                                                                         // 2
  if(!isObject(it))throw TypeError(it + ' is not an object!');                                                         // 3
  return it;                                                                                                           // 4
};                                                                                                                     // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_is-object.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_is-object.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function(it){                                                                                         // 1
  return typeof it === 'object' ? it !== null : typeof it === 'function';                                              // 2
};                                                                                                                     // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_ie8-dom-define.js":["./_descriptors","./_fails","./_dom-create",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_ie8-dom-define.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = !require('./_descriptors') && !require('./_fails')(function(){                                        // 1
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;           // 2
});                                                                                                                    // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_descriptors.js":["./_fails",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_descriptors.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// Thank's IE8 for his funny defineProperty                                                                            // 1
module.exports = !require('./_fails')(function(){                                                                      // 2
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;                                        // 3
});                                                                                                                    // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_fails.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_fails.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function(exec){                                                                                       // 1
  try {                                                                                                                // 2
    return !!exec();                                                                                                   // 3
  } catch(e){                                                                                                          // 4
    return true;                                                                                                       // 5
  }                                                                                                                    // 6
};                                                                                                                     // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_dom-create.js":["./_is-object","./_global",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_dom-create.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var isObject = require('./_is-object')                                                                                 // 1
  , document = require('./_global').document                                                                           // 2
  // in old IE typeof document.createElement is 'object'                                                               // 3
  , is = isObject(document) && isObject(document.createElement);                                                       // 4
module.exports = function(it){                                                                                         // 5
  return is ? document.createElement(it) : {};                                                                         // 6
};                                                                                                                     // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_to-primitive.js":["./_is-object",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_to-primitive.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.1.1 ToPrimitive(input [, PreferredType])                                                                          // 1
var isObject = require('./_is-object');                                                                                // 2
// instead of the ES6 spec version, we didn't implement @@toPrimitive case                                             // 3
// and the second argument - flag - preferred type is a string                                                         // 4
module.exports = function(it, S){                                                                                      // 5
  if(!isObject(it))return it;                                                                                          // 6
  var fn, val;                                                                                                         // 7
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;                          // 8
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;                                // 9
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;                         // 10
  throw TypeError("Can't convert object to primitive value");                                                          // 11
};                                                                                                                     // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_property-desc.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_property-desc.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function(bitmap, value){                                                                              // 1
  return {                                                                                                             // 2
    enumerable  : !(bitmap & 1),                                                                                       // 3
    configurable: !(bitmap & 2),                                                                                       // 4
    writable    : !(bitmap & 4),                                                                                       // 5
    value       : value                                                                                                // 6
  };                                                                                                                   // 7
};                                                                                                                     // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_redefine.js":["./_hide",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_redefine.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require('./_hide');                                                                                   // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_has.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_has.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var hasOwnProperty = {}.hasOwnProperty;                                                                                // 1
module.exports = function(it, key){                                                                                    // 2
  return hasOwnProperty.call(it, key);                                                                                 // 3
};                                                                                                                     // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_iterators.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_iterators.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = {};                                                                                                   // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_iter-create.js":["./_object-create","./_property-desc","./_set-to-string-tag","./_hide","./_wks",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_iter-create.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';                                                                                                          // 1
var create         = require('./_object-create')                                                                       // 2
  , descriptor     = require('./_property-desc')                                                                       // 3
  , setToStringTag = require('./_set-to-string-tag')                                                                   // 4
  , IteratorPrototype = {};                                                                                            // 5
                                                                                                                       // 6
// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()                                                                        // 7
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });                      // 8
                                                                                                                       // 9
module.exports = function(Constructor, NAME, next){                                                                    // 10
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});                                      // 11
  setToStringTag(Constructor, NAME + ' Iterator');                                                                     // 12
};                                                                                                                     // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_object-create.js":["./_an-object","./_object-dps","./_enum-bug-keys","./_shared-key","./_dom-create","./_html",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_object-create.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])                                                                 // 1
var anObject    = require('./_an-object')                                                                              // 2
  , dPs         = require('./_object-dps')                                                                             // 3
  , enumBugKeys = require('./_enum-bug-keys')                                                                          // 4
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')                                                                 // 5
  , Empty       = function(){ /* empty */ }                                                                            // 6
  , PROTOTYPE   = 'prototype';                                                                                         // 7
                                                                                                                       // 8
// Create object with fake `null` prototype: use iframe Object with cleared prototype                                  // 9
var createDict = function(){                                                                                           // 10
  // Thrash, waste and sodomy: IE GC bug                                                                               // 11
  var iframe = require('./_dom-create')('iframe')                                                                      // 12
    , i      = enumBugKeys.length                                                                                      // 13
    , lt     = '<'                                                                                                     // 14
    , gt     = '>'                                                                                                     // 15
    , iframeDocument;                                                                                                  // 16
  iframe.style.display = 'none';                                                                                       // 17
  require('./_html').appendChild(iframe);                                                                              // 18
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url                                                     // 19
  // createDict = iframe.contentWindow.Object;                                                                         // 20
  // html.removeChild(iframe);                                                                                         // 21
  iframeDocument = iframe.contentWindow.document;                                                                      // 22
  iframeDocument.open();                                                                                               // 23
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);                                // 24
  iframeDocument.close();                                                                                              // 25
  createDict = iframeDocument.F;                                                                                       // 26
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];                                                              // 27
  return createDict();                                                                                                 // 28
};                                                                                                                     // 29
                                                                                                                       // 30
module.exports = Object.create || function create(O, Properties){                                                      // 31
  var result;                                                                                                          // 32
  if(O !== null){                                                                                                      // 33
    Empty[PROTOTYPE] = anObject(O);                                                                                    // 34
    result = new Empty;                                                                                                // 35
    Empty[PROTOTYPE] = null;                                                                                           // 36
    // add "__proto__" for Object.getPrototypeOf polyfill                                                              // 37
    result[IE_PROTO] = O;                                                                                              // 38
  } else result = createDict();                                                                                        // 39
  return Properties === undefined ? result : dPs(result, Properties);                                                  // 40
};                                                                                                                     // 41
                                                                                                                       // 42
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_object-dps.js":["./_object-dp","./_an-object","./_object-keys","./_descriptors",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_object-dps.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var dP       = require('./_object-dp')                                                                                 // 1
  , anObject = require('./_an-object')                                                                                 // 2
  , getKeys  = require('./_object-keys');                                                                              // 3
                                                                                                                       // 4
module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){       // 5
  anObject(O);                                                                                                         // 6
  var keys   = getKeys(Properties)                                                                                     // 7
    , length = keys.length                                                                                             // 8
    , i = 0                                                                                                            // 9
    , P;                                                                                                               // 10
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);                                                              // 11
  return O;                                                                                                            // 12
};                                                                                                                     // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_object-keys.js":["./_object-keys-internal","./_enum-bug-keys",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_object-keys.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.14 / 15.2.3.14 Object.keys(O)                                                                                // 1
var $keys       = require('./_object-keys-internal')                                                                   // 2
  , enumBugKeys = require('./_enum-bug-keys');                                                                         // 3
                                                                                                                       // 4
module.exports = Object.keys || function keys(O){                                                                      // 5
  return $keys(O, enumBugKeys);                                                                                        // 6
};                                                                                                                     // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_object-keys-internal.js":["./_has","./_to-iobject","./_array-includes","./_shared-key",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_object-keys-internal.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var has          = require('./_has')                                                                                   // 1
  , toIObject    = require('./_to-iobject')                                                                            // 2
  , arrayIndexOf = require('./_array-includes')(false)                                                                 // 3
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');                                                               // 4
                                                                                                                       // 5
module.exports = function(object, names){                                                                              // 6
  var O      = toIObject(object)                                                                                       // 7
    , i      = 0                                                                                                       // 8
    , result = []                                                                                                      // 9
    , key;                                                                                                             // 10
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);                                                     // 11
  // Don't enum bug & hidden keys                                                                                      // 12
  while(names.length > i)if(has(O, key = names[i++])){                                                                 // 13
    ~arrayIndexOf(result, key) || result.push(key);                                                                    // 14
  }                                                                                                                    // 15
  return result;                                                                                                       // 16
};                                                                                                                     // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_to-iobject.js":["./_iobject","./_defined",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_to-iobject.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// to indexed object, toObject with fallback for non-array-like ES3 strings                                            // 1
var IObject = require('./_iobject')                                                                                    // 2
  , defined = require('./_defined');                                                                                   // 3
module.exports = function(it){                                                                                         // 4
  return IObject(defined(it));                                                                                         // 5
};                                                                                                                     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_iobject.js":["./_cof",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_iobject.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// fallback for non-array-like ES3 and non-enumerable old V8 strings                                                   // 1
var cof = require('./_cof');                                                                                           // 2
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){                                          // 3
  return cof(it) == 'String' ? it.split('') : Object(it);                                                              // 4
};                                                                                                                     // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_cof.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_cof.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toString = {}.toString;                                                                                            // 1
                                                                                                                       // 2
module.exports = function(it){                                                                                         // 3
  return toString.call(it).slice(8, -1);                                                                               // 4
};                                                                                                                     // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_array-includes.js":["./_to-iobject","./_to-length","./_to-index",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_array-includes.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// false -> Array#indexOf                                                                                              // 1
// true  -> Array#includes                                                                                             // 2
var toIObject = require('./_to-iobject')                                                                               // 3
  , toLength  = require('./_to-length')                                                                                // 4
  , toIndex   = require('./_to-index');                                                                                // 5
module.exports = function(IS_INCLUDES){                                                                                // 6
  return function($this, el, fromIndex){                                                                               // 7
    var O      = toIObject($this)                                                                                      // 8
      , length = toLength(O.length)                                                                                    // 9
      , index  = toIndex(fromIndex, length)                                                                            // 10
      , value;                                                                                                         // 11
    // Array#includes uses SameValueZero equality algorithm                                                            // 12
    if(IS_INCLUDES && el != el)while(length > index){                                                                  // 13
      value = O[index++];                                                                                              // 14
      if(value != value)return true;                                                                                   // 15
    // Array#toIndex ignores holes, Array#includes - not                                                               // 16
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){                                                 // 17
      if(O[index] === el)return IS_INCLUDES || index || 0;                                                             // 18
    } return !IS_INCLUDES && -1;                                                                                       // 19
  };                                                                                                                   // 20
};                                                                                                                     // 21
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_to-length.js":["./_to-integer",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_to-length.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.1.15 ToLength                                                                                                     // 1
var toInteger = require('./_to-integer')                                                                               // 2
  , min       = Math.min;                                                                                              // 3
module.exports = function(it){                                                                                         // 4
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991                      // 5
};                                                                                                                     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_to-index.js":["./_to-integer",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_to-index.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var toInteger = require('./_to-integer')                                                                               // 1
  , max       = Math.max                                                                                               // 2
  , min       = Math.min;                                                                                              // 3
module.exports = function(index, length){                                                                              // 4
  index = toInteger(index);                                                                                            // 5
  return index < 0 ? max(index + length, 0) : min(index, length);                                                      // 6
};                                                                                                                     // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_shared-key.js":["./_shared","./_uid",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_shared-key.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var shared = require('./_shared')('keys')                                                                              // 1
  , uid    = require('./_uid');                                                                                        // 2
module.exports = function(key){                                                                                        // 3
  return shared[key] || (shared[key] = uid(key));                                                                      // 4
};                                                                                                                     // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_shared.js":["./_global",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_shared.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var global = require('./_global')                                                                                      // 1
  , SHARED = '__core-js_shared__'                                                                                      // 2
  , store  = global[SHARED] || (global[SHARED] = {});                                                                  // 3
module.exports = function(key){                                                                                        // 4
  return store[key] || (store[key] = {});                                                                              // 5
};                                                                                                                     // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_uid.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_uid.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var id = 0                                                                                                             // 1
  , px = Math.random();                                                                                                // 2
module.exports = function(key){                                                                                        // 3
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));                               // 4
};                                                                                                                     // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_enum-bug-keys.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_enum-bug-keys.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// IE 8- don't enum bug keys                                                                                           // 1
module.exports = (                                                                                                     // 2
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'                      // 3
).split(',');                                                                                                          // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_html.js":["./_global",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_html.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require('./_global').document && document.documentElement;                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_set-to-string-tag.js":["./_object-dp","./_has","./_wks",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_set-to-string-tag.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var def = require('./_object-dp').f                                                                                    // 1
  , has = require('./_has')                                                                                            // 2
  , TAG = require('./_wks')('toStringTag');                                                                            // 3
                                                                                                                       // 4
module.exports = function(it, tag, stat){                                                                              // 5
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});                    // 6
};                                                                                                                     // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_wks.js":["./_shared","./_uid","./_global",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_wks.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var store      = require('./_shared')('wks')                                                                           // 1
  , uid        = require('./_uid')                                                                                     // 2
  , Symbol     = require('./_global').Symbol                                                                           // 3
  , USE_SYMBOL = typeof Symbol == 'function';                                                                          // 4
                                                                                                                       // 5
var $exports = module.exports = function(name){                                                                        // 6
  return store[name] || (store[name] =                                                                                 // 7
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));                                      // 8
};                                                                                                                     // 9
                                                                                                                       // 10
$exports.store = store;                                                                                                // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_object-gpo.js":["./_has","./_to-object","./_shared-key",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_object-gpo.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)                                                                        // 1
var has         = require('./_has')                                                                                    // 2
  , toObject    = require('./_to-object')                                                                              // 3
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')                                                                 // 4
  , ObjectProto = Object.prototype;                                                                                    // 5
                                                                                                                       // 6
module.exports = Object.getPrototypeOf || function(O){                                                                 // 7
  O = toObject(O);                                                                                                     // 8
  if(has(O, IE_PROTO))return O[IE_PROTO];                                                                              // 9
  if(typeof O.constructor == 'function' && O instanceof O.constructor){                                                // 10
    return O.constructor.prototype;                                                                                    // 11
  } return O instanceof Object ? ObjectProto : null;                                                                   // 12
};                                                                                                                     // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_to-object.js":["./_defined",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_to-object.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.1.13 ToObject(argument)                                                                                           // 1
var defined = require('./_defined');                                                                                   // 2
module.exports = function(it){                                                                                         // 3
  return Object(defined(it));                                                                                          // 4
};                                                                                                                     // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"web.dom.iterable.js":["./es6.array.iterator","./_global","./_hide","./_iterators","./_wks",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/web.dom.iterable.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('./es6.array.iterator');                                                                                       // 1
var global        = require('./_global')                                                                               // 2
  , hide          = require('./_hide')                                                                                 // 3
  , Iterators     = require('./_iterators')                                                                            // 4
  , TO_STRING_TAG = require('./_wks')('toStringTag');                                                                  // 5
                                                                                                                       // 6
for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){  // 7
  var NAME       = collections[i]                                                                                      // 8
    , Collection = global[NAME]                                                                                        // 9
    , proto      = Collection && Collection.prototype;                                                                 // 10
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);                                                  // 11
  Iterators[NAME] = Iterators.Array;                                                                                   // 12
}                                                                                                                      // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"es6.array.iterator.js":["./_add-to-unscopables","./_iter-step","./_iterators","./_to-iobject","./_iter-define",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/es6.array.iterator.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';                                                                                                          // 1
var addToUnscopables = require('./_add-to-unscopables')                                                                // 2
  , step             = require('./_iter-step')                                                                         // 3
  , Iterators        = require('./_iterators')                                                                         // 4
  , toIObject        = require('./_to-iobject');                                                                       // 5
                                                                                                                       // 6
// 22.1.3.4 Array.prototype.entries()                                                                                  // 7
// 22.1.3.13 Array.prototype.keys()                                                                                    // 8
// 22.1.3.29 Array.prototype.values()                                                                                  // 9
// 22.1.3.30 Array.prototype[@@iterator]()                                                                             // 10
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){                                   // 11
  this._t = toIObject(iterated); // target                                                                             // 12
  this._i = 0;                   // next index                                                                         // 13
  this._k = kind;                // kind                                                                               // 14
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()                                                                          // 15
}, function(){                                                                                                         // 16
  var O     = this._t                                                                                                  // 17
    , kind  = this._k                                                                                                  // 18
    , index = this._i++;                                                                                               // 19
  if(!O || index >= O.length){                                                                                         // 20
    this._t = undefined;                                                                                               // 21
    return step(1);                                                                                                    // 22
  }                                                                                                                    // 23
  if(kind == 'keys'  )return step(0, index);                                                                           // 24
  if(kind == 'values')return step(0, O[index]);                                                                        // 25
  return step(0, [index, O[index]]);                                                                                   // 26
}, 'values');                                                                                                          // 27
                                                                                                                       // 28
// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)                                                 // 29
Iterators.Arguments = Iterators.Array;                                                                                 // 30
                                                                                                                       // 31
addToUnscopables('keys');                                                                                              // 32
addToUnscopables('values');                                                                                            // 33
addToUnscopables('entries');                                                                                           // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_add-to-unscopables.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_add-to-unscopables.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function(){ /* empty */ };                                                                            // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_iter-step.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_iter-step.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = function(done, value){                                                                                // 1
  return {value: value, done: !!done};                                                                                 // 2
};                                                                                                                     // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_wks-ext.js":["./_wks",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_wks-ext.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.f = require('./_wks');                                                                                         // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"es6.symbol.js":["./_global","./_has","./_descriptors","./_export","./_redefine","./_meta","./_fails","./_shared","./_set-to-string-tag","./_uid","./_wks","./_wks-ext","./_wks-define","./_keyof","./_enum-keys","./_is-array","./_an-object","./_to-iobject","./_to-primitive","./_property-desc","./_object-create","./_object-gopn-ext","./_object-gopd","./_object-dp","./_object-keys","./_object-gopn","./_object-pie","./_object-gops","./_library","./_hide",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/es6.symbol.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';                                                                                                          // 1
// ECMAScript 6 symbols shim                                                                                           // 2
var global         = require('./_global')                                                                              // 3
  , has            = require('./_has')                                                                                 // 4
  , DESCRIPTORS    = require('./_descriptors')                                                                         // 5
  , $export        = require('./_export')                                                                              // 6
  , redefine       = require('./_redefine')                                                                            // 7
  , META           = require('./_meta').KEY                                                                            // 8
  , $fails         = require('./_fails')                                                                               // 9
  , shared         = require('./_shared')                                                                              // 10
  , setToStringTag = require('./_set-to-string-tag')                                                                   // 11
  , uid            = require('./_uid')                                                                                 // 12
  , wks            = require('./_wks')                                                                                 // 13
  , wksExt         = require('./_wks-ext')                                                                             // 14
  , wksDefine      = require('./_wks-define')                                                                          // 15
  , keyOf          = require('./_keyof')                                                                               // 16
  , enumKeys       = require('./_enum-keys')                                                                           // 17
  , isArray        = require('./_is-array')                                                                            // 18
  , anObject       = require('./_an-object')                                                                           // 19
  , toIObject      = require('./_to-iobject')                                                                          // 20
  , toPrimitive    = require('./_to-primitive')                                                                        // 21
  , createDesc     = require('./_property-desc')                                                                       // 22
  , _create        = require('./_object-create')                                                                       // 23
  , gOPNExt        = require('./_object-gopn-ext')                                                                     // 24
  , $GOPD          = require('./_object-gopd')                                                                         // 25
  , $DP            = require('./_object-dp')                                                                           // 26
  , $keys          = require('./_object-keys')                                                                         // 27
  , gOPD           = $GOPD.f                                                                                           // 28
  , dP             = $DP.f                                                                                             // 29
  , gOPN           = gOPNExt.f                                                                                         // 30
  , $Symbol        = global.Symbol                                                                                     // 31
  , $JSON          = global.JSON                                                                                       // 32
  , _stringify     = $JSON && $JSON.stringify                                                                          // 33
  , PROTOTYPE      = 'prototype'                                                                                       // 34
  , HIDDEN         = wks('_hidden')                                                                                    // 35
  , TO_PRIMITIVE   = wks('toPrimitive')                                                                                // 36
  , isEnum         = {}.propertyIsEnumerable                                                                           // 37
  , SymbolRegistry = shared('symbol-registry')                                                                         // 38
  , AllSymbols     = shared('symbols')                                                                                 // 39
  , OPSymbols      = shared('op-symbols')                                                                              // 40
  , ObjectProto    = Object[PROTOTYPE]                                                                                 // 41
  , USE_NATIVE     = typeof $Symbol == 'function'                                                                      // 42
  , QObject        = global.QObject;                                                                                   // 43
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173                                      // 44
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;                                         // 45
                                                                                                                       // 46
// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687                                         // 47
var setSymbolDesc = DESCRIPTORS && $fails(function(){                                                                  // 48
  return _create(dP({}, 'a', {                                                                                         // 49
    get: function(){ return dP(this, 'a', {value: 7}).a; }                                                             // 50
  })).a != 7;                                                                                                          // 51
}) ? function(it, key, D){                                                                                             // 52
  var protoDesc = gOPD(ObjectProto, key);                                                                              // 53
  if(protoDesc)delete ObjectProto[key];                                                                                // 54
  dP(it, key, D);                                                                                                      // 55
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);                                                  // 56
} : dP;                                                                                                                // 57
                                                                                                                       // 58
var wrap = function(tag){                                                                                              // 59
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);                                                             // 60
  sym._k = tag;                                                                                                        // 61
  return sym;                                                                                                          // 62
};                                                                                                                     // 63
                                                                                                                       // 64
var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){                                       // 65
  return typeof it == 'symbol';                                                                                        // 66
} : function(it){                                                                                                      // 67
  return it instanceof $Symbol;                                                                                        // 68
};                                                                                                                     // 69
                                                                                                                       // 70
var $defineProperty = function defineProperty(it, key, D){                                                             // 71
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);                                                            // 72
  anObject(it);                                                                                                        // 73
  key = toPrimitive(key, true);                                                                                        // 74
  anObject(D);                                                                                                         // 75
  if(has(AllSymbols, key)){                                                                                            // 76
    if(!D.enumerable){                                                                                                 // 77
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));                                                           // 78
      it[HIDDEN][key] = true;                                                                                          // 79
    } else {                                                                                                           // 80
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;                                                   // 81
      D = _create(D, {enumerable: createDesc(0, false)});                                                              // 82
    } return setSymbolDesc(it, key, D);                                                                                // 83
  } return dP(it, key, D);                                                                                             // 84
};                                                                                                                     // 85
var $defineProperties = function defineProperties(it, P){                                                              // 86
  anObject(it);                                                                                                        // 87
  var keys = enumKeys(P = toIObject(P))                                                                                // 88
    , i    = 0                                                                                                         // 89
    , l = keys.length                                                                                                  // 90
    , key;                                                                                                             // 91
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);                                                            // 92
  return it;                                                                                                           // 93
};                                                                                                                     // 94
var $create = function create(it, P){                                                                                  // 95
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);                                            // 96
};                                                                                                                     // 97
var $propertyIsEnumerable = function propertyIsEnumerable(key){                                                        // 98
  var E = isEnum.call(this, key = toPrimitive(key, true));                                                             // 99
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;                                // 100
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;           // 101
};                                                                                                                     // 102
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){                                            // 103
  it  = toIObject(it);                                                                                                 // 104
  key = toPrimitive(key, true);                                                                                        // 105
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;                                        // 106
  var D = gOPD(it, key);                                                                                               // 107
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;                           // 108
  return D;                                                                                                            // 109
};                                                                                                                     // 110
var $getOwnPropertyNames = function getOwnPropertyNames(it){                                                           // 111
  var names  = gOPN(toIObject(it))                                                                                     // 112
    , result = []                                                                                                      // 113
    , i      = 0                                                                                                       // 114
    , key;                                                                                                             // 115
  while(names.length > i){                                                                                             // 116
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);                            // 117
  } return result;                                                                                                     // 118
};                                                                                                                     // 119
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){                                                       // 120
  var IS_OP  = it === ObjectProto                                                                                      // 121
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))                                                                 // 122
    , result = []                                                                                                      // 123
    , i      = 0                                                                                                       // 124
    , key;                                                                                                             // 125
  while(names.length > i){                                                                                             // 126
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);       // 127
  } return result;                                                                                                     // 128
};                                                                                                                     // 129
                                                                                                                       // 130
// 19.4.1.1 Symbol([description])                                                                                      // 131
if(!USE_NATIVE){                                                                                                       // 132
  $Symbol = function Symbol(){                                                                                         // 133
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');                                        // 134
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);                                                    // 135
    var $set = function(value){                                                                                        // 136
      if(this === ObjectProto)$set.call(OPSymbols, value);                                                             // 137
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;                                        // 138
      setSymbolDesc(this, tag, createDesc(1, value));                                                                  // 139
    };                                                                                                                 // 140
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});                         // 141
    return wrap(tag);                                                                                                  // 142
  };                                                                                                                   // 143
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){                                                        // 144
    return this._k;                                                                                                    // 145
  });                                                                                                                  // 146
                                                                                                                       // 147
  $GOPD.f = $getOwnPropertyDescriptor;                                                                                 // 148
  $DP.f   = $defineProperty;                                                                                           // 149
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;                                                      // 150
  require('./_object-pie').f  = $propertyIsEnumerable;                                                                 // 151
  require('./_object-gops').f = $getOwnPropertySymbols;                                                                // 152
                                                                                                                       // 153
  if(DESCRIPTORS && !require('./_library')){                                                                           // 154
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);                                        // 155
  }                                                                                                                    // 156
                                                                                                                       // 157
  wksExt.f = function(name){                                                                                           // 158
    return wrap(wks(name));                                                                                            // 159
  }                                                                                                                    // 160
}                                                                                                                      // 161
                                                                                                                       // 162
$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});                                           // 163
                                                                                                                       // 164
for(var symbols = (                                                                                                    // 165
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'     // 167
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);                                                           // 168
                                                                                                                       // 169
for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);                               // 170
                                                                                                                       // 171
$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {                                                               // 172
  // 19.4.2.1 Symbol.for(key)                                                                                          // 173
  'for': function(key){                                                                                                // 174
    return has(SymbolRegistry, key += '')                                                                              // 175
      ? SymbolRegistry[key]                                                                                            // 176
      : SymbolRegistry[key] = $Symbol(key);                                                                            // 177
  },                                                                                                                   // 178
  // 19.4.2.5 Symbol.keyFor(sym)                                                                                       // 179
  keyFor: function keyFor(key){                                                                                        // 180
    if(isSymbol(key))return keyOf(SymbolRegistry, key);                                                                // 181
    throw TypeError(key + ' is not a symbol!');                                                                        // 182
  },                                                                                                                   // 183
  useSetter: function(){ setter = true; },                                                                             // 184
  useSimple: function(){ setter = false; }                                                                             // 185
});                                                                                                                    // 186
                                                                                                                       // 187
$export($export.S + $export.F * !USE_NATIVE, 'Object', {                                                               // 188
  // 19.1.2.2 Object.create(O [, Properties])                                                                          // 189
  create: $create,                                                                                                     // 190
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)                                                                  // 191
  defineProperty: $defineProperty,                                                                                     // 192
  // 19.1.2.3 Object.defineProperties(O, Properties)                                                                   // 193
  defineProperties: $defineProperties,                                                                                 // 194
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)                                                                    // 195
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,                                                                 // 196
  // 19.1.2.7 Object.getOwnPropertyNames(O)                                                                            // 197
  getOwnPropertyNames: $getOwnPropertyNames,                                                                           // 198
  // 19.1.2.8 Object.getOwnPropertySymbols(O)                                                                          // 199
  getOwnPropertySymbols: $getOwnPropertySymbols                                                                        // 200
});                                                                                                                    // 201
                                                                                                                       // 202
// 24.3.2 JSON.stringify(value [, replacer [, space]])                                                                 // 203
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){                                            // 204
  var S = $Symbol();                                                                                                   // 205
  // MS Edge converts symbol values to JSON as {}                                                                      // 206
  // WebKit converts symbol values to JSON as null                                                                     // 207
  // V8 throws on boxed symbols                                                                                        // 208
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';                   // 209
})), 'JSON', {                                                                                                         // 210
  stringify: function stringify(it){                                                                                   // 211
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined                                     // 212
    var args = [it]                                                                                                    // 213
      , i    = 1                                                                                                       // 214
      , replacer, $replacer;                                                                                           // 215
    while(arguments.length > i)args.push(arguments[i++]);                                                              // 216
    replacer = args[1];                                                                                                // 217
    if(typeof replacer == 'function')$replacer = replacer;                                                             // 218
    if($replacer || !isArray(replacer))replacer = function(key, value){                                                // 219
      if($replacer)value = $replacer.call(this, key, value);                                                           // 220
      if(!isSymbol(value))return value;                                                                                // 221
    };                                                                                                                 // 222
    args[1] = replacer;                                                                                                // 223
    return _stringify.apply($JSON, args);                                                                              // 224
  }                                                                                                                    // 225
});                                                                                                                    // 226
                                                                                                                       // 227
// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)                                                                      // 228
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);  // 229
// 19.4.3.5 Symbol.prototype[@@toStringTag]                                                                            // 230
setToStringTag($Symbol, 'Symbol');                                                                                     // 231
// 20.2.1.9 Math[@@toStringTag]                                                                                        // 232
setToStringTag(Math, 'Math', true);                                                                                    // 233
// 24.3.3 JSON[@@toStringTag]                                                                                          // 234
setToStringTag(global.JSON, 'JSON', true);                                                                             // 235
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_meta.js":["./_uid","./_is-object","./_has","./_object-dp","./_fails",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_meta.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var META     = require('./_uid')('meta')                                                                               // 1
  , isObject = require('./_is-object')                                                                                 // 2
  , has      = require('./_has')                                                                                       // 3
  , setDesc  = require('./_object-dp').f                                                                               // 4
  , id       = 0;                                                                                                      // 5
var isExtensible = Object.isExtensible || function(){                                                                  // 6
  return true;                                                                                                         // 7
};                                                                                                                     // 8
var FREEZE = !require('./_fails')(function(){                                                                          // 9
  return isExtensible(Object.preventExtensions({}));                                                                   // 10
});                                                                                                                    // 11
var setMeta = function(it){                                                                                            // 12
  setDesc(it, META, {value: {                                                                                          // 13
    i: 'O' + ++id, // object ID                                                                                        // 14
    w: {}          // weak collections IDs                                                                             // 15
  }});                                                                                                                 // 16
};                                                                                                                     // 17
var fastKey = function(it, create){                                                                                    // 18
  // return primitive with prefix                                                                                      // 19
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;                       // 20
  if(!has(it, META)){                                                                                                  // 21
    // can't set metadata to uncaught frozen object                                                                    // 22
    if(!isExtensible(it))return 'F';                                                                                   // 23
    // not necessary to add metadata                                                                                   // 24
    if(!create)return 'E';                                                                                             // 25
    // add missing metadata                                                                                            // 26
    setMeta(it);                                                                                                       // 27
  // return object ID                                                                                                  // 28
  } return it[META].i;                                                                                                 // 29
};                                                                                                                     // 30
var getWeak = function(it, create){                                                                                    // 31
  if(!has(it, META)){                                                                                                  // 32
    // can't set metadata to uncaught frozen object                                                                    // 33
    if(!isExtensible(it))return true;                                                                                  // 34
    // not necessary to add metadata                                                                                   // 35
    if(!create)return false;                                                                                           // 36
    // add missing metadata                                                                                            // 37
    setMeta(it);                                                                                                       // 38
  // return hash weak collections IDs                                                                                  // 39
  } return it[META].w;                                                                                                 // 40
};                                                                                                                     // 41
// add metadata on freeze-family methods calling                                                                       // 42
var onFreeze = function(it){                                                                                           // 43
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);                                            // 44
  return it;                                                                                                           // 45
};                                                                                                                     // 46
var meta = module.exports = {                                                                                          // 47
  KEY:      META,                                                                                                      // 48
  NEED:     false,                                                                                                     // 49
  fastKey:  fastKey,                                                                                                   // 50
  getWeak:  getWeak,                                                                                                   // 51
  onFreeze: onFreeze                                                                                                   // 52
};                                                                                                                     // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_wks-define.js":["./_global","./_core","./_library","./_wks-ext","./_object-dp",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_wks-define.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var global         = require('./_global')                                                                              // 1
  , core           = require('./_core')                                                                                // 2
  , LIBRARY        = require('./_library')                                                                             // 3
  , wksExt         = require('./_wks-ext')                                                                             // 4
  , defineProperty = require('./_object-dp').f;                                                                        // 5
module.exports = function(name){                                                                                       // 6
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});                                     // 7
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});               // 8
};                                                                                                                     // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_keyof.js":["./_object-keys","./_to-iobject",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_keyof.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var getKeys   = require('./_object-keys')                                                                              // 1
  , toIObject = require('./_to-iobject');                                                                              // 2
module.exports = function(object, el){                                                                                 // 3
  var O      = toIObject(object)                                                                                       // 4
    , keys   = getKeys(O)                                                                                              // 5
    , length = keys.length                                                                                             // 6
    , index  = 0                                                                                                       // 7
    , key;                                                                                                             // 8
  while(length > index)if(O[key = keys[index++]] === el)return key;                                                    // 9
};                                                                                                                     // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_enum-keys.js":["./_object-keys","./_object-gops","./_object-pie",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_enum-keys.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// all enumerable object keys, includes symbols                                                                        // 1
var getKeys = require('./_object-keys')                                                                                // 2
  , gOPS    = require('./_object-gops')                                                                                // 3
  , pIE     = require('./_object-pie');                                                                                // 4
module.exports = function(it){                                                                                         // 5
  var result     = getKeys(it)                                                                                         // 6
    , getSymbols = gOPS.f;                                                                                             // 7
  if(getSymbols){                                                                                                      // 8
    var symbols = getSymbols(it)                                                                                       // 9
      , isEnum  = pIE.f                                                                                                // 10
      , i       = 0                                                                                                    // 11
      , key;                                                                                                           // 12
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);                                  // 13
  } return result;                                                                                                     // 14
};                                                                                                                     // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_object-gops.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_object-gops.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.f = Object.getOwnPropertySymbols;                                                                              // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_object-pie.js":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_object-pie.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.f = {}.propertyIsEnumerable;                                                                                   // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"_is-array.js":["./_cof",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_is-array.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 7.2.2 IsArray(argument)                                                                                             // 1
var cof = require('./_cof');                                                                                           // 2
module.exports = Array.isArray || function isArray(arg){                                                               // 3
  return cof(arg) == 'Array';                                                                                          // 4
};                                                                                                                     // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_object-gopn-ext.js":["./_to-iobject","./_object-gopn",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_object-gopn-ext.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window                                           // 1
var toIObject = require('./_to-iobject')                                                                               // 2
  , gOPN      = require('./_object-gopn').f                                                                            // 3
  , toString  = {}.toString;                                                                                           // 4
                                                                                                                       // 5
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames                                    // 6
  ? Object.getOwnPropertyNames(window) : [];                                                                           // 7
                                                                                                                       // 8
var getWindowNames = function(it){                                                                                     // 9
  try {                                                                                                                // 10
    return gOPN(it);                                                                                                   // 11
  } catch(e){                                                                                                          // 12
    return windowNames.slice();                                                                                        // 13
  }                                                                                                                    // 14
};                                                                                                                     // 15
                                                                                                                       // 16
module.exports.f = function getOwnPropertyNames(it){                                                                   // 17
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));             // 18
};                                                                                                                     // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_object-gopn.js":["./_object-keys-internal","./_enum-bug-keys",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_object-gopn.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)                                                                   // 1
var $keys      = require('./_object-keys-internal')                                                                    // 2
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');                                            // 3
                                                                                                                       // 4
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){                                             // 5
  return $keys(O, hiddenKeys);                                                                                         // 6
};                                                                                                                     // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"_object-gopd.js":["./_object-pie","./_property-desc","./_to-iobject","./_to-primitive","./_has","./_ie8-dom-define","./_descriptors",function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/_object-gopd.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var pIE            = require('./_object-pie')                                                                          // 1
  , createDesc     = require('./_property-desc')                                                                       // 2
  , toIObject      = require('./_to-iobject')                                                                          // 3
  , toPrimitive    = require('./_to-primitive')                                                                        // 4
  , has            = require('./_has')                                                                                 // 5
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')                                                                      // 6
  , gOPD           = Object.getOwnPropertyDescriptor;                                                                  // 7
                                                                                                                       // 8
exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){                                // 9
  O = toIObject(O);                                                                                                    // 10
  P = toPrimitive(P, true);                                                                                            // 11
  if(IE8_DOM_DEFINE)try {                                                                                              // 12
    return gOPD(O, P);                                                                                                 // 13
  } catch(e){ /* empty */ }                                                                                            // 14
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);                                                             // 15
};                                                                                                                     // 16
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"es6.object.to-string.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/es6.object.to-string.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"es7.symbol.async-iterator.js":["./_wks-define",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/es7.symbol.async-iterator.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('./_wks-define')('asyncIterator');                                                                             // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"es7.symbol.observable.js":["./_wks-define",function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/core-js/library/modules/es7.symbol.observable.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
require('./_wks-define')('observable');                                                                                // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},"dragdealer":{"package.json":function(require,exports){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/dragdealer/package.json                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "dragdealer";                                                                                           // 1
exports.version = "0.9.9";                                                                                             // 2
exports.main = "src/dragdealer.js";                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"src":{"dragdealer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/dragdealer/src/dragdealer.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * Dragdealer.js 0.9.8                                                                                                 // 2
 * http://github.com/skidding/dragdealer                                                                               // 3
 *                                                                                                                     // 4
 * (c) 2010+ Ovidiu Cherecheș                                                                                          // 5
 * http://skidding.mit-license.org                                                                                     // 6
 */                                                                                                                    // 7
                                                                                                                       // 8
(function (root, factory) {                                                                                            // 9
  if (typeof define === 'function' && define.amd) {                                                                    // 10
    // AMD. Register as an anonymous module.                                                                           // 11
    define(factory);                                                                                                   // 12
  } else if (typeof module === 'object' && module.exports) {                                                           // 13
    // Node. Does not work with strict CommonJS, but                                                                   // 14
    // only CommonJS-like enviroments that support module.exports,                                                     // 15
    // like Node.                                                                                                      // 16
    module.exports.Dragdealer = factory();                                                                             // 17
  } else {                                                                                                             // 18
    // Browser globals                                                                                                 // 19
    root.Dragdealer = factory();                                                                                       // 20
  }                                                                                                                    // 21
}(this, function () {                                                                                                  // 22
                                                                                                                       // 23
var Dragdealer = function(wrapper, options) {                                                                          // 24
  /**                                                                                                                  // 25
   * Drag-based component that works around two basic DOM elements.                                                    // 26
   *                                                                                                                   // 27
   *   - The wrapper: The top-level element with the .dragdealer class. We                                             // 28
   *                  create a Dragdealer instance with the wrapper as the                                             // 29
   *                  first constructor parameter (it can either receive the ID                                        // 30
   *                  of the wrapper, or the element itself.) The wrapper                                              // 31
   *                  establishes the dragging bounds.                                                                 // 32
   *                                                                                                                   // 33
   *   - The handle: A child of the wrapper element, div with a required                                               // 34
   *                 .handle class (may be overridden in options). This will be                                        // 35
   *                 the dragged element, constrained by the wrapper's bounds.                                         // 36
   *                                                                                                                   // 37
   *                                                                                                                   // 38
   * The handle can be both smaller or bigger than the wrapper.                                                        // 39
   *                                                                                                                   // 40
   *   - When the handle is smaller, Dragdealer will act as a regular slider,                                          // 41
   *     enabling the handle to be dragged from one side of the wrapper to                                             // 42
   *     another.                                                                                                      // 43
   *                                                                                                                   // 44
   *   - When the handle is bigger, Dragdealer will act a mask for a draggable                                         // 45
   *     surface, where the handle is the draggable surface contrained by the                                          // 46
   *     smaller bounds of the wrapper. The drag action in this case is used                                           // 47
   *     to reveal and "discover" partial content at a time.                                                           // 48
   *                                                                                                                   // 49
   *                                                                                                                   // 50
   * Simple usage:                                                                                                     // 51
   *                                                                                                                   // 52
   *   // JavaScript                                                                                                   // 53
   *   new Dragdealer('simple-slider');                                                                                // 54
   *                                                                                                                   // 55
   *   <!-- HTML -->                                                                                                   // 56
   *   <div id="simple-slider" class="dragdealer">                                                                     // 57
   *     <div class="handle">drag me</div>                                                                             // 58
   *   </div>                                                                                                          // 59
   *                                                                                                                   // 60
   *                                                                                                                   // 61
   * The second parameter of the Dragdealer constructor is an object used for                                          // 62
   * specifying any of the supported options. All of them are optional.                                                // 63
   *                                                                                                                   // 64
   *   - bool disabled=false: Init Dragdealer in a disabled state. The handle                                          // 65
   *                          will have a .disabled class.                                                             // 66
   *                                                                                                                   // 67
   *   - bool horizontal=true: Enable horizontal dragging.                                                             // 68
   *                                                                                                                   // 69
   *   - bool vertical=false: Enable vertical dragging.                                                                // 70
   *                                                                                                                   // 71
   *   - number x=0: Initial horizontal (left) position. Accepts a float number                                        // 72
   *                 value between 0 and 1. Read below about positioning in                                            // 73
   *                 Dragdealer.                                                                                       // 74
   *                                                                                                                   // 75
   *   - number y=0: Initial vertical (top) position. Accepts a float number                                           // 76
   *                 value between 0 and 1. Read below about positoning in                                             // 77
   *                 Dragdealer.                                                                                       // 78
   *                                                                                                                   // 79
   *   - number steps=0: Limit the positioning of the handle within the bounds                                         // 80
   *                     of the wrapper, by defining a virtual grid made out of                                        // 81
   *                     a number of equally-spaced steps. This restricts                                              // 82
   *                     placing the handle anywhere in-between these steps.                                           // 83
   *                     E.g. setting 3 steps to a regular slider will only                                            // 84
   *                     allow you to move it to the left, to the right or                                             // 85
   *                     exactly in the middle.                                                                        // 86
   *                                                                                                                   // 87
   *   - bool snap=false: When a number of steps is set, snap the position of                                          // 88
   *                      the handle to its closest step instantly, even when                                          // 89
   *                      dragging.                                                                                    // 90
   *                                                                                                                   // 91
   *   - number speed=0.1: Speed can be set between 0 and 1, with 1 being the                                          // 92
   *                       fastest. It represents how fast the handle will slide                                       // 93
   *                       to position after you mouse up.                                                             // 94
   *                                                                                                                   // 95
   *   - bool slide=true: Slide handle after releasing it, depending on the                                            // 96
   *                      movement speed before the mouse/touch release. The                                           // 97
   *                      formula for calculating how much will the handle                                             // 98
   *                      slide after releasing it is defined by simply                                                // 99
   *                      extending the movement of the handle in the current                                          // 100
   *                      direction, with the last movement unit times four (a                                         // 101
   *                      movement unit is considered the distance crossed                                             // 102
   *                      since the last animation loop, which is currently                                            // 103
   *                      25ms.) So if you were to drag the handle 50px in the                                         // 104
   *                      blink of an eye, it will slide another 200px in the                                          // 105
   *                      same direction. Steps interfere with this formula, as                                        // 106
   *                      the closest step is calculated before the sliding                                            // 107
   *                      distance.                                                                                    // 108
   *                                                                                                                   // 109
   *   - bool loose=false: Loosen-up wrapper boundaries when dragging. This                                            // 110
   *                       allows the handle to be *slightly* dragged outside                                          // 111
   *                       the bounds of the wrapper, but slides it back to the                                        // 112
   *                       margins of the wrapper upon release. The formula for                                        // 113
   *                       calculating how much the handle exceeds the wrapper                                         // 114
   *                       bounds is made out of the actual drag distance                                              // 115
   *                       divided by 4. E.g. Pulling a slider outside its                                             // 116
   *                       frame by 100px will only position it 25px outside                                           // 117
   *                       the frame.                                                                                  // 118
   *                                                                                                                   // 119
   *   - number top=0: Top padding between the wrapper and the handle.                                                 // 120
   *                                                                                                                   // 121
   *   - number bottom=0: Bottom padding between the wrapper and the handle.                                           // 122
   *                                                                                                                   // 123
   *   - number left=0: Left padding between the wrapper and the handle.                                               // 124
   *                                                                                                                   // 125
   *   - number right=0: Right padding between the wrapper and the handle.                                             // 126
   *                                                                                                                   // 127
   *   - fn callback(x, y): Called when releasing handle, with the projected                                           // 128
   *                        x, y position of the handle. Projected value means                                         // 129
   *                        the value the slider will have after finishing a                                           // 130
   *                        sliding animation, caused by either a step                                                 // 131
   *                        restriction or drag motion (see steps and slide                                            // 132
   *                        options.) This implies that the actual position of                                         // 133
   *                        the handle at the time this callback is called                                             // 134
   *                        might not yet reflect the x, y values received.                                            // 135
   *                                                                                                                   // 136
   *   - fn dragStopCallback(x,y): Same as callback(x,y) but only called after                                         // 137
   *                               a drag motion, not after setting the step                                           // 138
   *                               manually.                                                                           // 139
   *                                                                                                                   // 140
   *   - fn dragStartCallback(x,y): Same as dragStopCallback(x,y) but called at                                        // 141
   *                                the beginning of a drag motion and with the                                        // 142
   *                                sliders initial x, y values.                                                       // 143
   *                                                                                                                   // 144
   *   - fn animationCallback(x, y): Called every animation loop, as long as                                           // 145
   *                                 the handle is being dragged or in the                                             // 146
   *                                 process of a sliding animation. The x, y                                          // 147
   *                                 positional values received by this                                                // 148
   *                                 callback reflect the exact position of the                                        // 149
   *                                 handle DOM element, which includes                                                // 150
   *                                 exceeding values (even negative values)                                           // 151
   *                                 when the loose option is set true.                                                // 152
   *                                                                                                                   // 153
   *   - string handleClass='handle': Custom class of handle element.                                                  // 154
   *                                                                                                                   // 155
   *   - bool css3=true: Use css3 transform in modern browsers instead of                                              // 156
   *                     absolute positioning.                                                                         // 157
   *                                                                                                                   // 158
   *   - fn customRequestAnimationFrame: Provide custom requestAnimationFrame                                          // 159
   *                                     function (used in tests).                                                     // 160
   *   - fn customCancelAnimationFrame: Provide custom cancelAnimationFrame                                            // 161
   *                                    function (used in tests).                                                      // 162
   *                                                                                                                   // 163
   * Dragdealer also has a few methods to interact with, post-initialization.                                          // 164
   *                                                                                                                   // 165
   *   - disable: Disable dragging of a Dragdealer instance. Just as with the                                          // 166
   *              disabled option, the handle will receive a .disabled class                                           // 167
   *                                                                                                                   // 168
   *   - enable: Enable dragging of a Dragdealer instance. The .disabled class                                         // 169
   *             of the handle will be removed.                                                                        // 170
   *                                                                                                                   // 171
   *   - reflow: Recalculate the wrapper bounds of a Dragdealer instance, used                                         // 172
   *             when the wrapper is responsive and its parent container                                               // 173
   *             changed its size, or after changing the size of the wrapper                                           // 174
   *             directly.                                                                                             // 175
   *                                                                                                                   // 176
   *   - getValue: Get the value of a Dragdealer instance programatically. The                                         // 177
   *               value is returned as an [x, y] tuple and is the equivalent                                          // 178
   *               of the (projected) value returned by the regular callback,                                          // 179
   *               not animationCallback.                                                                              // 180
   *                                                                                                                   // 181
   *   - getStep: Same as getValue, but the value returned is in step                                                  // 182
   *              increments (see steps option)                                                                        // 183
   *                                                                                                                   // 184
   *   - setValue(x, y, snap=false): Set the value of a Dragdealer instance                                            // 185
   *                                 programatically. The 3rd parameter allows                                         // 186
   *                                 to snap the handle directly to the desired                                        // 187
   *                                 value, without any sliding transition.                                            // 188
   *                                                                                                                   // 189
   *   - setStep(x, y, snap=false): Same as setValue, but the value is received                                        // 190
   *                                in step increments (see steps option)                                              // 191
   *                                                                                                                   // 192
   *                                                                                                                   // 193
   * Positioning in Dragdealer:                                                                                        // 194
   *                                                                                                                   // 195
   *   Besides the top, bottom, left and right paddings, which represent a                                             // 196
   *   number of pixels, Dragdealer uses a [0, 1]-based positioning. Both                                              // 197
   *   horizontal and vertical positions are represented by ratios between 0                                           // 198
   *   and 1. This allows the Dragdealer wrapper to have a responsive size and                                         // 199
   *   not revolve around a specific number of pixels. This is how the x, y                                            // 200
   *   options are set, what the callback args contain and what values the                                             // 201
   *   setValue method expects. Once picked up, the ratios can be scaled and                                           // 202
   *   mapped to match any real-life system of coordinates or dimensions.                                              // 203
   */                                                                                                                  // 204
  this.options = this.applyDefaults(options || {});                                                                    // 205
  this.bindMethods();                                                                                                  // 206
  this.wrapper = this.getWrapperElement(wrapper);                                                                      // 207
  if (!this.wrapper) {                                                                                                 // 208
    return;                                                                                                            // 209
  }                                                                                                                    // 210
  this.handle = this.getHandleElement(this.wrapper, this.options.handleClass);                                         // 211
  if (!this.handle) {                                                                                                  // 212
    return;                                                                                                            // 213
  }                                                                                                                    // 214
  this.init();                                                                                                         // 215
  this.bindEventListeners();                                                                                           // 216
};                                                                                                                     // 217
                                                                                                                       // 218
                                                                                                                       // 219
Dragdealer.prototype = {                                                                                               // 220
  defaults: {                                                                                                          // 221
    disabled: false,                                                                                                   // 222
    horizontal: true,                                                                                                  // 223
    vertical: false,                                                                                                   // 224
    slide: true,                                                                                                       // 225
    steps: 0,                                                                                                          // 226
    snap: false,                                                                                                       // 227
    loose: false,                                                                                                      // 228
    speed: 0.1,                                                                                                        // 229
    xPrecision: 0,                                                                                                     // 230
    yPrecision: 0,                                                                                                     // 231
    handleClass: 'handle',                                                                                             // 232
    css3: true,                                                                                                        // 233
    activeClass: 'active',                                                                                             // 234
    tapping: true                                                                                                      // 235
  },                                                                                                                   // 236
  init: function() {                                                                                                   // 237
    if (this.options.css3) {                                                                                           // 238
      triggerWebkitHardwareAcceleration(this.handle);                                                                  // 239
    }                                                                                                                  // 240
    this.value = {                                                                                                     // 241
      prev: [-1, -1],                                                                                                  // 242
      current: [this.options.x || 0, this.options.y || 0],                                                             // 243
      target: [this.options.x || 0, this.options.y || 0]                                                               // 244
    };                                                                                                                 // 245
    this.offset = {                                                                                                    // 246
      wrapper: [0, 0],                                                                                                 // 247
      mouse: [0, 0],                                                                                                   // 248
      prev: [-999999, -999999],                                                                                        // 249
      current: [0, 0],                                                                                                 // 250
      target: [0, 0]                                                                                                   // 251
    };                                                                                                                 // 252
    this.dragStartPosition = {x: 0, y: 0};                                                                             // 253
    this.change = [0, 0];                                                                                              // 254
    this.stepRatios = this.calculateStepRatios();                                                                      // 255
                                                                                                                       // 256
    this.activity = false;                                                                                             // 257
    this.dragging = false;                                                                                             // 258
    this.tapping = false;                                                                                              // 259
                                                                                                                       // 260
    this.reflow();                                                                                                     // 261
    if (this.options.disabled) {                                                                                       // 262
      this.disable();                                                                                                  // 263
    }                                                                                                                  // 264
  },                                                                                                                   // 265
  applyDefaults: function(options) {                                                                                   // 266
    for (var k in this.defaults) {                                                                                     // 267
      if (!options.hasOwnProperty(k)) {                                                                                // 268
        options[k] = this.defaults[k];                                                                                 // 269
      }                                                                                                                // 270
    }                                                                                                                  // 271
    return options;                                                                                                    // 272
  },                                                                                                                   // 273
  getWrapperElement: function(wrapper) {                                                                               // 274
    if (typeof(wrapper) == 'string') {                                                                                 // 275
      return document.getElementById(wrapper);                                                                         // 276
    } else {                                                                                                           // 277
      return wrapper;                                                                                                  // 278
    }                                                                                                                  // 279
  },                                                                                                                   // 280
  getHandleElement: function(wrapper, handleClass) {                                                                   // 281
    var childElements,                                                                                                 // 282
        handleClassMatcher,                                                                                            // 283
        i;                                                                                                             // 284
    if (wrapper.getElementsByClassName) {                                                                              // 285
      childElements = wrapper.getElementsByClassName(handleClass);                                                     // 286
      if (childElements.length > 0) {                                                                                  // 287
        return childElements[0];                                                                                       // 288
      }                                                                                                                // 289
    } else {                                                                                                           // 290
      handleClassMatcher = new RegExp('(^|\\s)' + handleClass + '(\\s|$)');                                            // 291
      childElements = wrapper.getElementsByTagName('*');                                                               // 292
      for (i = 0; i < childElements.length; i++) {                                                                     // 293
        if (handleClassMatcher.test(childElements[i].className)) {                                                     // 294
          return childElements[i];                                                                                     // 295
        }                                                                                                              // 296
      }                                                                                                                // 297
    }                                                                                                                  // 298
  },                                                                                                                   // 299
  calculateStepRatios: function() {                                                                                    // 300
    var stepRatios = [];                                                                                               // 301
    if (this.options.steps >= 1) {                                                                                     // 302
      for (var i = 0; i <= this.options.steps - 1; i++) {                                                              // 303
        if (this.options.steps > 1) {                                                                                  // 304
          stepRatios[i] = i / (this.options.steps - 1);                                                                // 305
        } else {                                                                                                       // 306
          // A single step will always have a 0 value                                                                  // 307
          stepRatios[i] = 0;                                                                                           // 308
        }                                                                                                              // 309
      }                                                                                                                // 310
    }                                                                                                                  // 311
    return stepRatios;                                                                                                 // 312
  },                                                                                                                   // 313
  setWrapperOffset: function() {                                                                                       // 314
    this.offset.wrapper = Position.get(this.wrapper);                                                                  // 315
  },                                                                                                                   // 316
  calculateBounds: function() {                                                                                        // 317
    // Apply top/bottom/left and right padding options to wrapper extremities                                          // 318
    // when calculating its bounds                                                                                     // 319
    var bounds = {                                                                                                     // 320
      top: this.options.top || 0,                                                                                      // 321
      bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,                                                 // 322
      left: this.options.left || 0,                                                                                    // 323
      right: -(this.options.right || 0) + this.wrapper.offsetWidth                                                     // 324
    };                                                                                                                 // 325
    // The available width and height represents the horizontal and vertical                                           // 326
    // space the handle has for moving. It is determined by the width and                                              // 327
    // height of the wrapper, minus the width and height of the handle                                                 // 328
    bounds.availWidth = (bounds.right - bounds.left) - this.handle.offsetWidth;                                        // 329
    bounds.availHeight = (bounds.bottom - bounds.top) - this.handle.offsetHeight;                                      // 330
    return bounds;                                                                                                     // 331
  },                                                                                                                   // 332
  calculateValuePrecision: function() {                                                                                // 333
    // The sliding transition works by dividing itself until it reaches a min                                          // 334
    // value step; because Dragdealer works with [0-1] values, we need this                                            // 335
    // "min value step" to represent a pixel when applied to the real handle                                           // 336
    // position within the DOM. The xPrecision/yPrecision options can be                                               // 337
    // specified to increase the granularity when we're controlling larger                                             // 338
    // objects from one of the callbacks                                                                               // 339
    var xPrecision = this.options.xPrecision || Math.abs(this.bounds.availWidth),                                      // 340
        yPrecision = this.options.yPrecision || Math.abs(this.bounds.availHeight);                                     // 341
    return [                                                                                                           // 342
      xPrecision ? 1 / xPrecision : 0,                                                                                 // 343
      yPrecision ? 1 / yPrecision : 0                                                                                  // 344
    ];                                                                                                                 // 345
  },                                                                                                                   // 346
  bindMethods: function() {                                                                                            // 347
    if (typeof(this.options.customRequestAnimationFrame) === 'function') {                                             // 348
      this.requestAnimationFrame = bind(this.options.customRequestAnimationFrame, window);                             // 349
    } else {                                                                                                           // 350
      this.requestAnimationFrame = bind(requestAnimationFrame, window);                                                // 351
    }                                                                                                                  // 352
    if (typeof(this.options.customCancelAnimationFrame) === 'function') {                                              // 353
      this.cancelAnimationFrame = bind(this.options.customCancelAnimationFrame, window);                               // 354
    } else {                                                                                                           // 355
      this.cancelAnimationFrame = bind(cancelAnimationFrame, window);                                                  // 356
    }                                                                                                                  // 357
    this.animateWithRequestAnimationFrame = bind(this.animateWithRequestAnimationFrame, this);                         // 358
    this.animate = bind(this.animate, this);                                                                           // 359
    this.onHandleMouseDown = bind(this.onHandleMouseDown, this);                                                       // 360
    this.onHandleTouchStart = bind(this.onHandleTouchStart, this);                                                     // 361
    this.onDocumentMouseMove = bind(this.onDocumentMouseMove, this);                                                   // 362
    this.onWrapperTouchMove = bind(this.onWrapperTouchMove, this);                                                     // 363
    this.onWrapperMouseDown = bind(this.onWrapperMouseDown, this);                                                     // 364
    this.onWrapperTouchStart = bind(this.onWrapperTouchStart, this);                                                   // 365
    this.onDocumentMouseUp = bind(this.onDocumentMouseUp, this);                                                       // 366
    this.onDocumentTouchEnd = bind(this.onDocumentTouchEnd, this);                                                     // 367
    this.onHandleClick = bind(this.onHandleClick, this);                                                               // 368
    this.onWindowResize = bind(this.onWindowResize, this);                                                             // 369
  },                                                                                                                   // 370
  bindEventListeners: function() {                                                                                     // 371
    // Start dragging                                                                                                  // 372
    addEventListener(this.handle, 'mousedown', this.onHandleMouseDown);                                                // 373
    addEventListener(this.handle, 'touchstart', this.onHandleTouchStart);                                              // 374
    // While dragging                                                                                                  // 375
    addEventListener(document, 'mousemove', this.onDocumentMouseMove);                                                 // 376
    addEventListener(this.wrapper, 'touchmove', this.onWrapperTouchMove);                                              // 377
    // Start tapping                                                                                                   // 378
    addEventListener(this.wrapper, 'mousedown', this.onWrapperMouseDown);                                              // 379
    addEventListener(this.wrapper, 'touchstart', this.onWrapperTouchStart);                                            // 380
    // Stop dragging/tapping                                                                                           // 381
    addEventListener(document, 'mouseup', this.onDocumentMouseUp);                                                     // 382
    addEventListener(document, 'touchend', this.onDocumentTouchEnd);                                                   // 383
                                                                                                                       // 384
    addEventListener(this.handle, 'click', this.onHandleClick);                                                        // 385
    addEventListener(window, 'resize', this.onWindowResize);                                                           // 386
                                                                                                                       // 387
    this.animate(false, true);                                                                                         // 388
    this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame);                                 // 389
                                                                                                                       // 390
  },                                                                                                                   // 391
  unbindEventListeners: function() {                                                                                   // 392
    removeEventListener(this.handle, 'mousedown', this.onHandleMouseDown);                                             // 393
    removeEventListener(this.handle, 'touchstart', this.onHandleTouchStart);                                           // 394
    removeEventListener(document, 'mousemove', this.onDocumentMouseMove);                                              // 395
    removeEventListener(this.wrapper, 'touchmove', this.onWrapperTouchMove);                                           // 396
    removeEventListener(this.wrapper, 'mousedown', this.onWrapperMouseDown);                                           // 397
    removeEventListener(this.wrapper, 'touchstart', this.onWrapperTouchStart);                                         // 398
    removeEventListener(document, 'mouseup', this.onDocumentMouseUp);                                                  // 399
    removeEventListener(document, 'touchend', this.onDocumentTouchEnd);                                                // 400
    removeEventListener(this.handle, 'click', this.onHandleClick);                                                     // 401
    removeEventListener(window, 'resize', this.onWindowResize);                                                        // 402
    this.cancelAnimationFrame(this.interval);                                                                          // 403
  },                                                                                                                   // 404
  onHandleMouseDown: function(e) {                                                                                     // 405
    Cursor.refresh(e);                                                                                                 // 406
    preventEventDefaults(e);                                                                                           // 407
    stopEventPropagation(e);                                                                                           // 408
    this.activity = false;                                                                                             // 409
    this.startDrag();                                                                                                  // 410
  },                                                                                                                   // 411
  onHandleTouchStart: function(e) {                                                                                    // 412
    Cursor.refresh(e);                                                                                                 // 413
    // Unlike in the `mousedown` event handler, we don't prevent defaults here,                                        // 414
    // because this would disable the dragging altogether. Instead, we prevent                                         // 415
    // it in the `touchmove` handler. Read more about touch events                                                     // 416
    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Touch_events#Handling_clicks                          // 417
    stopEventPropagation(e);                                                                                           // 418
    this.activity = false;                                                                                             // 419
    this.startDrag();                                                                                                  // 420
  },                                                                                                                   // 421
  onDocumentMouseMove: function(e) {                                                                                   // 422
    if ((e.clientX - this.dragStartPosition.x) === 0 &&                                                                // 423
        (e.clientY - this.dragStartPosition.y) === 0) {                                                                // 424
      // This is required on some Windows8 machines that get mouse move events without actual mouse movement           // 425
      return;                                                                                                          // 426
    }                                                                                                                  // 427
                                                                                                                       // 428
    Cursor.refresh(e);                                                                                                 // 429
    if (this.dragging) {                                                                                               // 430
      this.activity = true;                                                                                            // 431
      preventEventDefaults(e);                                                                                         // 432
    }                                                                                                                  // 433
  },                                                                                                                   // 434
  onWrapperTouchMove: function(e) {                                                                                    // 435
    Cursor.refresh(e);                                                                                                 // 436
    // Dragging on a disabled axis (horizontal or vertical) shouldn't prevent                                          // 437
    // defaults on touch devices. !this.activity denotes this is the first move                                        // 438
    // inside a drag action; you can drag in any direction after this point if                                         // 439
    // the dragging wasn't stopped                                                                                     // 440
    if (!this.activity && this.draggingOnDisabledAxis()) {                                                             // 441
      if (this.dragging) {                                                                                             // 442
        this.stopDrag();                                                                                               // 443
      }                                                                                                                // 444
      return;                                                                                                          // 445
    }                                                                                                                  // 446
    // Read comment in `onHandleTouchStart` above, to understand why we're                                             // 447
    // preventing defaults here and not there                                                                          // 448
    preventEventDefaults(e);                                                                                           // 449
    this.activity = true;                                                                                              // 450
  },                                                                                                                   // 451
  onWrapperMouseDown: function(e) {                                                                                    // 452
    Cursor.refresh(e);                                                                                                 // 453
    preventEventDefaults(e);                                                                                           // 454
    this.startTap();                                                                                                   // 455
  },                                                                                                                   // 456
  onWrapperTouchStart: function(e) {                                                                                   // 457
    Cursor.refresh(e);                                                                                                 // 458
    preventEventDefaults(e);                                                                                           // 459
    this.startTap();                                                                                                   // 460
  },                                                                                                                   // 461
  onDocumentMouseUp: function(e) {                                                                                     // 462
    this.stopDrag();                                                                                                   // 463
    this.stopTap();                                                                                                    // 464
  },                                                                                                                   // 465
  onDocumentTouchEnd: function(e) {                                                                                    // 466
    this.stopDrag();                                                                                                   // 467
    this.stopTap();                                                                                                    // 468
  },                                                                                                                   // 469
  onHandleClick: function(e) {                                                                                         // 470
    // We keep track if any dragging activity has been made between the                                                // 471
    // mouse/touch down and up events; based on this we allow or cancel a click                                        // 472
    // event from inside the handle. i.e. Click events shouldn't be triggered                                          // 473
    // when dragging, but should be allowed when clicking still                                                        // 474
    if (this.activity) {                                                                                               // 475
      preventEventDefaults(e);                                                                                         // 476
      stopEventPropagation(e);                                                                                         // 477
    }                                                                                                                  // 478
  },                                                                                                                   // 479
  onWindowResize: function(e) {                                                                                        // 480
    this.reflow();                                                                                                     // 481
  },                                                                                                                   // 482
  enable: function() {                                                                                                 // 483
    this.disabled = false;                                                                                             // 484
    this.handle.className = this.handle.className.replace(/\s?disabled/g, '');                                         // 485
  },                                                                                                                   // 486
  disable: function() {                                                                                                // 487
    this.disabled = true;                                                                                              // 488
    this.handle.className += ' disabled';                                                                              // 489
  },                                                                                                                   // 490
  reflow: function() {                                                                                                 // 491
    this.setWrapperOffset();                                                                                           // 492
    this.bounds = this.calculateBounds();                                                                              // 493
    this.valuePrecision = this.calculateValuePrecision();                                                              // 494
    this.updateOffsetFromValue();                                                                                      // 495
  },                                                                                                                   // 496
  getStep: function() {                                                                                                // 497
    return [                                                                                                           // 498
      this.getStepNumber(this.value.target[0]),                                                                        // 499
      this.getStepNumber(this.value.target[1])                                                                         // 500
    ];                                                                                                                 // 501
  },                                                                                                                   // 502
  getStepWidth: function () {                                                                                          // 503
    return Math.abs(this.bounds.availWidth / this.options.steps);                                                      // 504
  },                                                                                                                   // 505
  getValue: function() {                                                                                               // 506
    return this.value.target;                                                                                          // 507
  },                                                                                                                   // 508
  setStep: function(x, y, snap) {                                                                                      // 509
    this.setValue(                                                                                                     // 510
      this.options.steps && x > 1 ? (x - 1) / (this.options.steps - 1) : 0,                                            // 511
      this.options.steps && y > 1 ? (y - 1) / (this.options.steps - 1) : 0,                                            // 512
      snap                                                                                                             // 513
    );                                                                                                                 // 514
  },                                                                                                                   // 515
  setValue: function(x, y, snap) {                                                                                     // 516
    this.setTargetValue([x, y || 0]);                                                                                  // 517
    if (snap) {                                                                                                        // 518
      this.groupCopy(this.value.current, this.value.target);                                                           // 519
      // Since the current value will be equal to the target one instantly, the                                        // 520
      // animate function won't get to run so we need to update the positions                                          // 521
      // and call the callbacks manually                                                                               // 522
      this.updateOffsetFromValue();                                                                                    // 523
      this.callAnimationCallback();                                                                                    // 524
    }                                                                                                                  // 525
  },                                                                                                                   // 526
  startTap: function() {                                                                                               // 527
    if (this.disabled || !this.options.tapping) {                                                                      // 528
      return;                                                                                                          // 529
    }                                                                                                                  // 530
                                                                                                                       // 531
    this.tapping = true;                                                                                               // 532
    this.setWrapperOffset();                                                                                           // 533
                                                                                                                       // 534
    this.setTargetValueByOffset([                                                                                      // 535
      Cursor.x - this.offset.wrapper[0] - (this.handle.offsetWidth / 2),                                               // 536
      Cursor.y - this.offset.wrapper[1] - (this.handle.offsetHeight / 2)                                               // 537
    ]);                                                                                                                // 538
  },                                                                                                                   // 539
  stopTap: function() {                                                                                                // 540
    if (this.disabled || !this.tapping) {                                                                              // 541
      return;                                                                                                          // 542
    }                                                                                                                  // 543
    this.tapping = false;                                                                                              // 544
                                                                                                                       // 545
    this.setTargetValue(this.value.current);                                                                           // 546
  },                                                                                                                   // 547
  startDrag: function() {                                                                                              // 548
    if (this.disabled) {                                                                                               // 549
      return;                                                                                                          // 550
    }                                                                                                                  // 551
    this.dragging = true;                                                                                              // 552
    this.setWrapperOffset();                                                                                           // 553
                                                                                                                       // 554
    this.dragStartPosition = {x: Cursor.x, y: Cursor.y};                                                               // 555
    this.offset.mouse = [                                                                                              // 556
      Cursor.x - Position.get(this.handle)[0],                                                                         // 557
      Cursor.y - Position.get(this.handle)[1]                                                                          // 558
    ];                                                                                                                 // 559
    if (!this.wrapper.className.match(this.options.activeClass)) {                                                     // 560
      this.wrapper.className += ' ' + this.options.activeClass;                                                        // 561
    }                                                                                                                  // 562
    this.callDragStartCallback();                                                                                      // 563
  },                                                                                                                   // 564
  stopDrag: function() {                                                                                               // 565
    if (this.disabled || !this.dragging) {                                                                             // 566
      return;                                                                                                          // 567
    }                                                                                                                  // 568
    this.dragging = false;                                                                                             // 569
    var deltaX = this.bounds.availWidth === 0 ? 0 :                                                                    // 570
          ((Cursor.x - this.dragStartPosition.x) / this.bounds.availWidth),                                            // 571
        deltaY = this.bounds.availHeight === 0 ? 0 :                                                                   // 572
          ((Cursor.y - this.dragStartPosition.y) / this.bounds.availHeight),                                           // 573
        delta = [deltaX, deltaY];                                                                                      // 574
                                                                                                                       // 575
    var target = this.groupClone(this.value.current);                                                                  // 576
    if (this.options.slide) {                                                                                          // 577
      var ratioChange = this.change;                                                                                   // 578
      target[0] += ratioChange[0] * 4;                                                                                 // 579
      target[1] += ratioChange[1] * 4;                                                                                 // 580
    }                                                                                                                  // 581
    this.setTargetValue(target);                                                                                       // 582
    this.wrapper.className = this.wrapper.className.replace(' ' + this.options.activeClass, '');                       // 583
    this.callDragStopCallback(delta);                                                                                  // 584
  },                                                                                                                   // 585
  callAnimationCallback: function() {                                                                                  // 586
    var value = this.value.current;                                                                                    // 587
    if (this.options.snap && this.options.steps > 1) {                                                                 // 588
      value = this.getClosestSteps(value);                                                                             // 589
    }                                                                                                                  // 590
    if (!this.groupCompare(value, this.value.prev)) {                                                                  // 591
      if (typeof(this.options.animationCallback) == 'function') {                                                      // 592
        this.options.animationCallback.call(this, value[0], value[1]);                                                 // 593
      }                                                                                                                // 594
      this.groupCopy(this.value.prev, value);                                                                          // 595
    }                                                                                                                  // 596
  },                                                                                                                   // 597
  callTargetCallback: function() {                                                                                     // 598
    if (typeof(this.options.callback) == 'function') {                                                                 // 599
      this.options.callback.call(this, this.value.target[0], this.value.target[1]);                                    // 600
    }                                                                                                                  // 601
  },                                                                                                                   // 602
  callDragStartCallback: function() {                                                                                  // 603
    if (typeof(this.options.dragStartCallback) == 'function') {                                                        // 604
      this.options.dragStartCallback.call(this, this.value.target[0], this.value.target[1]);                           // 605
    }                                                                                                                  // 606
  },                                                                                                                   // 607
  callDragStopCallback: function(delta) {                                                                              // 608
    if (typeof(this.options.dragStopCallback) == 'function') {                                                         // 609
      this.options.dragStopCallback.call(this, this.value.target[0], this.value.target[1], delta);                     // 610
    }                                                                                                                  // 611
  },                                                                                                                   // 612
  animateWithRequestAnimationFrame: function (time) {                                                                  // 613
    if (time) {                                                                                                        // 614
      // using requestAnimationFrame                                                                                   // 615
      this.timeOffset = this.timeStamp ? time - this.timeStamp : 0;                                                    // 616
      this.timeStamp = time;                                                                                           // 617
    } else {                                                                                                           // 618
      // using setTimeout(callback, 25) polyfill                                                                       // 619
      this.timeOffset = 25;                                                                                            // 620
    }                                                                                                                  // 621
    this.animate();                                                                                                    // 622
    this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame);                                 // 623
  },                                                                                                                   // 624
  animate: function(direct, first) {                                                                                   // 625
    if (direct && !this.dragging) {                                                                                    // 626
      return;                                                                                                          // 627
    }                                                                                                                  // 628
    if (this.dragging) {                                                                                               // 629
      var prevTarget = this.groupClone(this.value.target);                                                             // 630
                                                                                                                       // 631
      var offset = [                                                                                                   // 632
        Cursor.x - this.offset.wrapper[0] - this.offset.mouse[0],                                                      // 633
        Cursor.y - this.offset.wrapper[1] - this.offset.mouse[1]                                                       // 634
      ];                                                                                                               // 635
      this.setTargetValueByOffset(offset, this.options.loose);                                                         // 636
                                                                                                                       // 637
      this.change = [                                                                                                  // 638
        this.value.target[0] - prevTarget[0],                                                                          // 639
        this.value.target[1] - prevTarget[1]                                                                           // 640
      ];                                                                                                               // 641
    }                                                                                                                  // 642
    if (this.dragging || first) {                                                                                      // 643
      this.groupCopy(this.value.current, this.value.target);                                                           // 644
    }                                                                                                                  // 645
    if (this.dragging || this.glide() || first) {                                                                      // 646
      this.updateOffsetFromValue();                                                                                    // 647
      this.callAnimationCallback();                                                                                    // 648
    }                                                                                                                  // 649
  },                                                                                                                   // 650
  glide: function() {                                                                                                  // 651
    var diff = [                                                                                                       // 652
      this.value.target[0] - this.value.current[0],                                                                    // 653
      this.value.target[1] - this.value.current[1]                                                                     // 654
    ];                                                                                                                 // 655
    if (!diff[0] && !diff[1]) {                                                                                        // 656
      return false;                                                                                                    // 657
    }                                                                                                                  // 658
    if (Math.abs(diff[0]) > this.valuePrecision[0] ||                                                                  // 659
        Math.abs(diff[1]) > this.valuePrecision[1]) {                                                                  // 660
      this.value.current[0] += diff[0] * Math.min(this.options.speed * this.timeOffset / 25, 1);                       // 661
      this.value.current[1] += diff[1] * Math.min(this.options.speed * this.timeOffset / 25, 1);                       // 662
    } else {                                                                                                           // 663
      this.groupCopy(this.value.current, this.value.target);                                                           // 664
    }                                                                                                                  // 665
    return true;                                                                                                       // 666
  },                                                                                                                   // 667
  updateOffsetFromValue: function() {                                                                                  // 668
    if (!this.options.snap) {                                                                                          // 669
      this.offset.current = this.getOffsetsByRatios(this.value.current);                                               // 670
    } else {                                                                                                           // 671
      this.offset.current = this.getOffsetsByRatios(                                                                   // 672
        this.getClosestSteps(this.value.current)                                                                       // 673
      );                                                                                                               // 674
    }                                                                                                                  // 675
    if (!this.groupCompare(this.offset.current, this.offset.prev)) {                                                   // 676
      this.renderHandlePosition();                                                                                     // 677
      this.groupCopy(this.offset.prev, this.offset.current);                                                           // 678
    }                                                                                                                  // 679
  },                                                                                                                   // 680
  renderHandlePosition: function() {                                                                                   // 681
                                                                                                                       // 682
    var transform = '';                                                                                                // 683
    if (this.options.css3 && StylePrefix.transform) {                                                                  // 684
      if (this.options.horizontal) {                                                                                   // 685
        transform += 'translateX(' + this.offset.current[0] + 'px)';                                                   // 686
      }                                                                                                                // 687
      if (this.options.vertical) {                                                                                     // 688
        transform += ' translateY(' + this.offset.current[1] + 'px)';                                                  // 689
      }                                                                                                                // 690
      this.handle.style[StylePrefix.transform] = transform;                                                            // 691
      return;                                                                                                          // 692
    }                                                                                                                  // 693
                                                                                                                       // 694
    if (this.options.horizontal) {                                                                                     // 695
      this.handle.style.left = this.offset.current[0] + 'px';                                                          // 696
    }                                                                                                                  // 697
    if (this.options.vertical) {                                                                                       // 698
      this.handle.style.top = this.offset.current[1] + 'px';                                                           // 699
    }                                                                                                                  // 700
  },                                                                                                                   // 701
  setTargetValue: function(value, loose) {                                                                             // 702
    var target = loose ? this.getLooseValue(value) : this.getProperValue(value);                                       // 703
                                                                                                                       // 704
    this.groupCopy(this.value.target, target);                                                                         // 705
    this.offset.target = this.getOffsetsByRatios(target);                                                              // 706
                                                                                                                       // 707
    this.callTargetCallback();                                                                                         // 708
  },                                                                                                                   // 709
  setTargetValueByOffset: function(offset, loose) {                                                                    // 710
    var value = this.getRatiosByOffsets(offset);                                                                       // 711
    var target = loose ? this.getLooseValue(value) : this.getProperValue(value);                                       // 712
                                                                                                                       // 713
    this.groupCopy(this.value.target, target);                                                                         // 714
    this.offset.target = this.getOffsetsByRatios(target);                                                              // 715
  },                                                                                                                   // 716
  getLooseValue: function(value) {                                                                                     // 717
    var proper = this.getProperValue(value);                                                                           // 718
    return [                                                                                                           // 719
      proper[0] + ((value[0] - proper[0]) / 4),                                                                        // 720
      proper[1] + ((value[1] - proper[1]) / 4)                                                                         // 721
    ];                                                                                                                 // 722
  },                                                                                                                   // 723
  getProperValue: function(value) {                                                                                    // 724
    var proper = this.groupClone(value);                                                                               // 725
                                                                                                                       // 726
    proper[0] = Math.max(proper[0], 0);                                                                                // 727
    proper[1] = Math.max(proper[1], 0);                                                                                // 728
    proper[0] = Math.min(proper[0], 1);                                                                                // 729
    proper[1] = Math.min(proper[1], 1);                                                                                // 730
                                                                                                                       // 731
    if ((!this.dragging && !this.tapping) || this.options.snap) {                                                      // 732
      if (this.options.steps > 1) {                                                                                    // 733
        proper = this.getClosestSteps(proper);                                                                         // 734
      }                                                                                                                // 735
    }                                                                                                                  // 736
    return proper;                                                                                                     // 737
  },                                                                                                                   // 738
  getRatiosByOffsets: function(group) {                                                                                // 739
    return [                                                                                                           // 740
      this.getRatioByOffset(group[0], this.bounds.availWidth, this.bounds.left),                                       // 741
      this.getRatioByOffset(group[1], this.bounds.availHeight, this.bounds.top)                                        // 742
    ];                                                                                                                 // 743
  },                                                                                                                   // 744
  getRatioByOffset: function(offset, range, padding) {                                                                 // 745
    return range ? (offset - padding) / range : 0;                                                                     // 746
  },                                                                                                                   // 747
  getOffsetsByRatios: function(group) {                                                                                // 748
    return [                                                                                                           // 749
      this.getOffsetByRatio(group[0], this.bounds.availWidth, this.bounds.left),                                       // 750
      this.getOffsetByRatio(group[1], this.bounds.availHeight, this.bounds.top)                                        // 751
    ];                                                                                                                 // 752
  },                                                                                                                   // 753
  getOffsetByRatio: function(ratio, range, padding) {                                                                  // 754
    return Math.round(ratio * range) + padding;                                                                        // 755
  },                                                                                                                   // 756
  getStepNumber: function(value) {                                                                                     // 757
    // Translate a [0-1] value into a number from 1 to N steps (set using the                                          // 758
    // "steps" option)                                                                                                 // 759
    return this.getClosestStep(value) * (this.options.steps - 1) + 1;                                                  // 760
  },                                                                                                                   // 761
  getClosestSteps: function(group) {                                                                                   // 762
    return [                                                                                                           // 763
      this.getClosestStep(group[0]),                                                                                   // 764
      this.getClosestStep(group[1])                                                                                    // 765
    ];                                                                                                                 // 766
  },                                                                                                                   // 767
  getClosestStep: function(value) {                                                                                    // 768
    var k = 0;                                                                                                         // 769
    var min = 1;                                                                                                       // 770
    for (var i = 0; i <= this.options.steps - 1; i++) {                                                                // 771
      if (Math.abs(this.stepRatios[i] - value) < min) {                                                                // 772
        min = Math.abs(this.stepRatios[i] - value);                                                                    // 773
        k = i;                                                                                                         // 774
      }                                                                                                                // 775
    }                                                                                                                  // 776
    return this.stepRatios[k];                                                                                         // 777
  },                                                                                                                   // 778
  groupCompare: function(a, b) {                                                                                       // 779
    return a[0] == b[0] && a[1] == b[1];                                                                               // 780
  },                                                                                                                   // 781
  groupCopy: function(a, b) {                                                                                          // 782
    a[0] = b[0];                                                                                                       // 783
    a[1] = b[1];                                                                                                       // 784
  },                                                                                                                   // 785
  groupClone: function(a) {                                                                                            // 786
    return [a[0], a[1]];                                                                                               // 787
  },                                                                                                                   // 788
  draggingOnDisabledAxis: function() {                                                                                 // 789
    return (!this.options.horizontal && Cursor.xDiff > Cursor.yDiff) ||                                                // 790
           (!this.options.vertical && Cursor.yDiff > Cursor.xDiff);                                                    // 791
  }                                                                                                                    // 792
};                                                                                                                     // 793
                                                                                                                       // 794
                                                                                                                       // 795
var bind = function(fn, context) {                                                                                     // 796
  /**                                                                                                                  // 797
   * CoffeeScript-like function to bind the scope of a method to an instance,                                          // 798
   * the context of that method, regardless from where it is called                                                    // 799
   */                                                                                                                  // 800
  return function() {                                                                                                  // 801
    return fn.apply(context, arguments);                                                                               // 802
  };                                                                                                                   // 803
};                                                                                                                     // 804
                                                                                                                       // 805
// Cross-browser vanilla JS event handling                                                                             // 806
                                                                                                                       // 807
var addEventListener = function(element, type, callback) {                                                             // 808
  if (element.addEventListener) {                                                                                      // 809
    element.addEventListener(type, callback, false);                                                                   // 810
  } else if (element.attachEvent) {                                                                                    // 811
    element.attachEvent('on' + type, callback);                                                                        // 812
  }                                                                                                                    // 813
};                                                                                                                     // 814
                                                                                                                       // 815
var removeEventListener = function(element, type, callback) {                                                          // 816
  if (element.removeEventListener) {                                                                                   // 817
    element.removeEventListener(type, callback, false);                                                                // 818
  } else if (element.detachEvent) {                                                                                    // 819
    element.detachEvent('on' + type, callback);                                                                        // 820
  }                                                                                                                    // 821
};                                                                                                                     // 822
                                                                                                                       // 823
var preventEventDefaults = function(e) {                                                                               // 824
  if (!e) {                                                                                                            // 825
    e = window.event;                                                                                                  // 826
  }                                                                                                                    // 827
  if (e.preventDefault) {                                                                                              // 828
    e.preventDefault();                                                                                                // 829
  }                                                                                                                    // 830
  e.returnValue = false;                                                                                               // 831
};                                                                                                                     // 832
                                                                                                                       // 833
var stopEventPropagation = function(e) {                                                                               // 834
  if (!e) {                                                                                                            // 835
    e = window.event;                                                                                                  // 836
  }                                                                                                                    // 837
  if (e.stopPropagation) {                                                                                             // 838
    e.stopPropagation();                                                                                               // 839
  }                                                                                                                    // 840
  e.cancelBubble = true;                                                                                               // 841
};                                                                                                                     // 842
                                                                                                                       // 843
                                                                                                                       // 844
var Cursor = {                                                                                                         // 845
  /**                                                                                                                  // 846
   * Abstraction for making the combined mouse or touch position available at                                          // 847
   * any time.                                                                                                         // 848
   *                                                                                                                   // 849
   * It picks up the "move" events as an independent component and simply makes                                        // 850
   * the latest x and y mouse/touch position of the user available at any time,                                        // 851
   * which is requested with Cursor.x and Cursor.y respectively.                                                       // 852
   *                                                                                                                   // 853
   * It can receive both mouse and touch events consecutively, extracting the                                          // 854
   * relevant meta data from each type of event.                                                                       // 855
   *                                                                                                                   // 856
   * Cursor.refresh(e) is called to update the global x and y values, with a                                           // 857
   * genuine MouseEvent or a TouchEvent from an event listener, e.g.                                                   // 858
   * mousedown/up or touchstart/end                                                                                    // 859
   */                                                                                                                  // 860
  x: 0,                                                                                                                // 861
  y: 0,                                                                                                                // 862
  xDiff: 0,                                                                                                            // 863
  yDiff: 0,                                                                                                            // 864
  refresh: function(e) {                                                                                               // 865
    if (!e) {                                                                                                          // 866
      e = window.event;                                                                                                // 867
    }                                                                                                                  // 868
    if (e.type == 'mousemove') {                                                                                       // 869
      this.set(e);                                                                                                     // 870
    } else if (e.touches) {                                                                                            // 871
      this.set(e.touches[0]);                                                                                          // 872
    }                                                                                                                  // 873
  },                                                                                                                   // 874
  set: function(e) {                                                                                                   // 875
    var lastX = this.x,                                                                                                // 876
        lastY = this.y;                                                                                                // 877
    if (e.clientX || e.clientY) {                                                                                      // 878
      this.x = e.clientX;                                                                                              // 879
      this.y = e.clientY;                                                                                              // 880
    } else if (e.pageX || e.pageY) {                                                                                   // 881
      this.x = e.pageX - document.body.scrollLeft - document.documentElement.scrollLeft;                               // 882
      this.y = e.pageY - document.body.scrollTop - document.documentElement.scrollTop;                                 // 883
    }                                                                                                                  // 884
    this.xDiff = Math.abs(this.x - lastX);                                                                             // 885
    this.yDiff = Math.abs(this.y - lastY);                                                                             // 886
  }                                                                                                                    // 887
};                                                                                                                     // 888
                                                                                                                       // 889
                                                                                                                       // 890
var Position = {                                                                                                       // 891
  /**                                                                                                                  // 892
   * Helper for extracting position of a DOM element, relative to the viewport                                         // 893
   *                                                                                                                   // 894
   * The get(obj) method accepts a DOM element as the only parameter, and                                              // 895
   * returns the position under a (x, y) tuple, as an array with two elements.                                         // 896
   */                                                                                                                  // 897
  get: function(obj) {                                                                                                 // 898
    // Dragdealer relies on getBoundingClientRect to calculate element offsets,                                        // 899
    // but we want to be sure we don't throw any unhandled exceptions and break                                        // 900
    // other code from the page if running from in very old browser that doesn't                                       // 901
    // support this method                                                                                             // 902
    var rect = {left: 0, top: 0};                                                                                      // 903
    if (obj.getBoundingClientRect !== undefined) {                                                                     // 904
      rect = obj.getBoundingClientRect();                                                                              // 905
    }                                                                                                                  // 906
    return [rect.left, rect.top];                                                                                      // 907
  }                                                                                                                    // 908
};                                                                                                                     // 909
                                                                                                                       // 910
                                                                                                                       // 911
var StylePrefix = {                                                                                                    // 912
  transform: getPrefixedStylePropName('transform'),                                                                    // 913
  perspective: getPrefixedStylePropName('perspective'),                                                                // 914
  backfaceVisibility: getPrefixedStylePropName('backfaceVisibility')                                                   // 915
};                                                                                                                     // 916
                                                                                                                       // 917
function getPrefixedStylePropName(propName) {                                                                          // 918
  var domPrefixes = 'Webkit Moz ms O'.split(' '),                                                                      // 919
      elStyle = document.documentElement.style;                                                                        // 920
  if (elStyle[propName] !== undefined) return propName; // Is supported unprefixed                                     // 921
  propName = propName.charAt(0).toUpperCase() + propName.substr(1);                                                    // 922
  for (var i = 0; i < domPrefixes.length; i++) {                                                                       // 923
    if (elStyle[domPrefixes[i] + propName] !== undefined) {                                                            // 924
      return domPrefixes[i] + propName; // Is supported with prefix                                                    // 925
    }                                                                                                                  // 926
  }                                                                                                                    // 927
};                                                                                                                     // 928
                                                                                                                       // 929
function triggerWebkitHardwareAcceleration(element) {                                                                  // 930
  if (StylePrefix.backfaceVisibility && StylePrefix.perspective) {                                                     // 931
    element.style[StylePrefix.perspective] = '1000px';                                                                 // 932
    element.style[StylePrefix.backfaceVisibility] = 'hidden';                                                          // 933
  }                                                                                                                    // 934
};                                                                                                                     // 935
                                                                                                                       // 936
var vendors = ['webkit', 'moz'];                                                                                       // 937
var requestAnimationFrame = window.requestAnimationFrame;                                                              // 938
var cancelAnimationFrame = window.cancelAnimationFrame;                                                                // 939
                                                                                                                       // 940
for (var x = 0; x < vendors.length && !requestAnimationFrame; ++x) {                                                   // 941
  requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];                                                // 942
  cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||                                                // 943
                         window[vendors[x] + 'CancelRequestAnimationFrame'];                                           // 944
}                                                                                                                      // 945
                                                                                                                       // 946
if (!requestAnimationFrame) {                                                                                          // 947
  requestAnimationFrame = function (callback) {                                                                        // 948
    return setTimeout(callback, 25);                                                                                   // 949
  };                                                                                                                   // 950
  cancelAnimationFrame = clearTimeout;                                                                                 // 951
}                                                                                                                      // 952
                                                                                                                       // 953
return Dragdealer;                                                                                                     // 954
                                                                                                                       // 955
}));                                                                                                                   // 956
                                                                                                                       // 957
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"regenerator-runtime":{"package.json":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/regenerator-runtime/package.json                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
exports.name = "regenerator-runtime";                                                                                  // 1
exports.version = "0.9.6";                                                                                             // 2
exports.main = "runtime-module.js";                                                                                    // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"runtime-module.js":["./runtime",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/regenerator-runtime/runtime-module.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// This method of obtaining a reference to the global object needs to be                                               // 1
// kept identical to the way it is obtained in runtime.js                                                              // 2
var g =                                                                                                                // 3
  typeof global === "object" ? global :                                                                                // 4
  typeof window === "object" ? window :                                                                                // 5
  typeof self === "object" ? self : this;                                                                              // 6
                                                                                                                       // 7
// Use `getOwnPropertyNames` because not all browsers support calling                                                  // 8
// `hasOwnProperty` on the global `self` object in a worker. See #183.                                                 // 9
var hadRuntime = g.regeneratorRuntime &&                                                                               // 10
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;                                                    // 11
                                                                                                                       // 12
// Save the old regeneratorRuntime in case it needs to be restored later.                                              // 13
var oldRuntime = hadRuntime && g.regeneratorRuntime;                                                                   // 14
                                                                                                                       // 15
// Force reevalutation of runtime.js.                                                                                  // 16
g.regeneratorRuntime = undefined;                                                                                      // 17
                                                                                                                       // 18
module.exports = require("./runtime");                                                                                 // 19
                                                                                                                       // 20
if (hadRuntime) {                                                                                                      // 21
  // Restore the original runtime.                                                                                     // 22
  g.regeneratorRuntime = oldRuntime;                                                                                   // 23
} else {                                                                                                               // 24
  // Remove the global property added by runtime.js.                                                                   // 25
  try {                                                                                                                // 26
    delete g.regeneratorRuntime;                                                                                       // 27
  } catch(e) {                                                                                                         // 28
    g.regeneratorRuntime = undefined;                                                                                  // 29
  }                                                                                                                    // 30
}                                                                                                                      // 31
                                                                                                                       // 32
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"runtime.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// node_modules/regenerator-runtime/runtime.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/**                                                                                                                    // 1
 * Copyright (c) 2014, Facebook, Inc.                                                                                  // 2
 * All rights reserved.                                                                                                // 3
 *                                                                                                                     // 4
 * This source code is licensed under the BSD-style license found in the                                               // 5
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An                                                 // 6
 * additional grant of patent rights can be found in the PATENTS file in                                               // 7
 * the same directory.                                                                                                 // 8
 */                                                                                                                    // 9
                                                                                                                       // 10
!(function(global) {                                                                                                   // 11
  "use strict";                                                                                                        // 12
                                                                                                                       // 13
  var hasOwn = Object.prototype.hasOwnProperty;                                                                        // 14
  var undefined; // More compressible than void 0.                                                                     // 15
  var $Symbol = typeof Symbol === "function" ? Symbol : {};                                                            // 16
  var iteratorSymbol = $Symbol.iterator || "@@iterator";                                                               // 17
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";                                                      // 18
                                                                                                                       // 19
  var inModule = typeof module === "object";                                                                           // 20
  var runtime = global.regeneratorRuntime;                                                                             // 21
  if (runtime) {                                                                                                       // 22
    if (inModule) {                                                                                                    // 23
      // If regeneratorRuntime is defined globally and we're in a module,                                              // 24
      // make the exports object identical to regeneratorRuntime.                                                      // 25
      module.exports = runtime;                                                                                        // 26
    }                                                                                                                  // 27
    // Don't bother evaluating the rest of this file if the runtime was                                                // 28
    // already defined globally.                                                                                       // 29
    return;                                                                                                            // 30
  }                                                                                                                    // 31
                                                                                                                       // 32
  // Define the runtime globally (as expected by generated code) as either                                             // 33
  // module.exports (if we're in a module) or a new, empty object.                                                     // 34
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};                                                // 35
                                                                                                                       // 36
  function wrap(innerFn, outerFn, self, tryLocsList) {                                                                 // 37
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.          // 38
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;                      // 39
    var generator = Object.create(protoGenerator.prototype);                                                           // 40
    var context = new Context(tryLocsList || []);                                                                      // 41
                                                                                                                       // 42
    // The ._invoke method unifies the implementations of the .next,                                                   // 43
    // .throw, and .return methods.                                                                                    // 44
    generator._invoke = makeInvokeMethod(innerFn, self, context);                                                      // 45
                                                                                                                       // 46
    return generator;                                                                                                  // 47
  }                                                                                                                    // 48
  runtime.wrap = wrap;                                                                                                 // 49
                                                                                                                       // 50
  // Try/catch helper to minimize deoptimizations. Returns a completion                                                // 51
  // record like context.tryEntries[i].completion. This interface could                                                // 52
  // have been (and was previously) designed to take a closure to be                                                   // 53
  // invoked without arguments, but in all the cases we care about we                                                  // 54
  // already have an existing method we want to call, so there's no need                                               // 55
  // to create a new function object. We can even get away with assuming                                               // 56
  // the method takes exactly one argument, since that happens to be true                                              // 57
  // in every case, so we don't have to touch the arguments object. The                                                // 58
  // only additional allocation required is the completion record, which                                               // 59
  // has a stable shape and so hopefully should be cheap to allocate.                                                  // 60
  function tryCatch(fn, obj, arg) {                                                                                    // 61
    try {                                                                                                              // 62
      return { type: "normal", arg: fn.call(obj, arg) };                                                               // 63
    } catch (err) {                                                                                                    // 64
      return { type: "throw", arg: err };                                                                              // 65
    }                                                                                                                  // 66
  }                                                                                                                    // 67
                                                                                                                       // 68
  var GenStateSuspendedStart = "suspendedStart";                                                                       // 69
  var GenStateSuspendedYield = "suspendedYield";                                                                       // 70
  var GenStateExecuting = "executing";                                                                                 // 71
  var GenStateCompleted = "completed";                                                                                 // 72
                                                                                                                       // 73
  // Returning this object from the innerFn has the same effect as                                                     // 74
  // breaking out of the dispatch switch statement.                                                                    // 75
  var ContinueSentinel = {};                                                                                           // 76
                                                                                                                       // 77
  // Dummy constructor functions that we use as the .constructor and                                                   // 78
  // .constructor.prototype properties for functions that return Generator                                             // 79
  // objects. For full spec compliance, you may wish to configure your                                                 // 80
  // minifier not to mangle the names of these two functions.                                                          // 81
  function Generator() {}                                                                                              // 82
  function GeneratorFunction() {}                                                                                      // 83
  function GeneratorFunctionPrototype() {}                                                                             // 84
                                                                                                                       // 85
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;                                                 // 86
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;                                           // 87
  GeneratorFunctionPrototype.constructor = GeneratorFunction;                                                          // 88
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";                 // 89
                                                                                                                       // 90
  // Helper for defining the .next, .throw, and .return methods of the                                                 // 91
  // Iterator interface in terms of a single ._invoke method.                                                          // 92
  function defineIteratorMethods(prototype) {                                                                          // 93
    ["next", "throw", "return"].forEach(function(method) {                                                             // 94
      prototype[method] = function(arg) {                                                                              // 95
        return this._invoke(method, arg);                                                                              // 96
      };                                                                                                               // 97
    });                                                                                                                // 98
  }                                                                                                                    // 99
                                                                                                                       // 100
  runtime.isGeneratorFunction = function(genFun) {                                                                     // 101
    var ctor = typeof genFun === "function" && genFun.constructor;                                                     // 102
    return ctor                                                                                                        // 103
      ? ctor === GeneratorFunction ||                                                                                  // 104
        // For the native GeneratorFunction constructor, the best we can                                               // 105
        // do is to check its .name property.                                                                          // 106
        (ctor.displayName || ctor.name) === "GeneratorFunction"                                                        // 107
      : false;                                                                                                         // 108
  };                                                                                                                   // 109
                                                                                                                       // 110
  runtime.mark = function(genFun) {                                                                                    // 111
    if (Object.setPrototypeOf) {                                                                                       // 112
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);                                                       // 113
    } else {                                                                                                           // 114
      genFun.__proto__ = GeneratorFunctionPrototype;                                                                   // 115
      if (!(toStringTagSymbol in genFun)) {                                                                            // 116
        genFun[toStringTagSymbol] = "GeneratorFunction";                                                               // 117
      }                                                                                                                // 118
    }                                                                                                                  // 119
    genFun.prototype = Object.create(Gp);                                                                              // 120
    return genFun;                                                                                                     // 121
  };                                                                                                                   // 122
                                                                                                                       // 123
  // Within the body of any async function, `await x` is transformed to                                                // 124
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test                                                 // 125
  // `value instanceof AwaitArgument` to determine if the yielded value is                                             // 126
  // meant to be awaited. Some may consider the name of this method too                                                // 127
  // cutesy, but they are curmudgeons.                                                                                 // 128
  runtime.awrap = function(arg) {                                                                                      // 129
    return new AwaitArgument(arg);                                                                                     // 130
  };                                                                                                                   // 131
                                                                                                                       // 132
  function AwaitArgument(arg) {                                                                                        // 133
    this.arg = arg;                                                                                                    // 134
  }                                                                                                                    // 135
                                                                                                                       // 136
  function AsyncIterator(generator) {                                                                                  // 137
    function invoke(method, arg, resolve, reject) {                                                                    // 138
      var record = tryCatch(generator[method], generator, arg);                                                        // 139
      if (record.type === "throw") {                                                                                   // 140
        reject(record.arg);                                                                                            // 141
      } else {                                                                                                         // 142
        var result = record.arg;                                                                                       // 143
        var value = result.value;                                                                                      // 144
        if (value instanceof AwaitArgument) {                                                                          // 145
          return Promise.resolve(value.arg).then(function(value) {                                                     // 146
            invoke("next", value, resolve, reject);                                                                    // 147
          }, function(err) {                                                                                           // 148
            invoke("throw", err, resolve, reject);                                                                     // 149
          });                                                                                                          // 150
        }                                                                                                              // 151
                                                                                                                       // 152
        return Promise.resolve(value).then(function(unwrapped) {                                                       // 153
          // When a yielded Promise is resolved, its final value becomes                                               // 154
          // the .value of the Promise<{value,done}> result for the                                                    // 155
          // current iteration. If the Promise is rejected, however, the                                               // 156
          // result for this iteration will be rejected with the same                                                  // 157
          // reason. Note that rejections of yielded Promises are not                                                  // 158
          // thrown back into the generator function, as is the case                                                   // 159
          // when an awaited Promise is rejected. This difference in                                                   // 160
          // behavior between yield and await is important, because it                                                 // 161
          // allows the consumer to decide what to do with the yielded                                                 // 162
          // rejection (swallow it and continue, manually .throw it back                                               // 163
          // into the generator, abandon iteration, whatever). With                                                    // 164
          // await, by contrast, there is no opportunity to examine the                                                // 165
          // rejection reason outside the generator function, so the                                                   // 166
          // only option is to throw it from the await expression, and                                                 // 167
          // let the generator function handle the exception.                                                          // 168
          result.value = unwrapped;                                                                                    // 169
          resolve(result);                                                                                             // 170
        }, reject);                                                                                                    // 171
      }                                                                                                                // 172
    }                                                                                                                  // 173
                                                                                                                       // 174
    if (typeof process === "object" && process.domain) {                                                               // 175
      invoke = process.domain.bind(invoke);                                                                            // 176
    }                                                                                                                  // 177
                                                                                                                       // 178
    var previousPromise;                                                                                               // 179
                                                                                                                       // 180
    function enqueue(method, arg) {                                                                                    // 181
      function callInvokeWithMethodAndArg() {                                                                          // 182
        return new Promise(function(resolve, reject) {                                                                 // 183
          invoke(method, arg, resolve, reject);                                                                        // 184
        });                                                                                                            // 185
      }                                                                                                                // 186
                                                                                                                       // 187
      return previousPromise =                                                                                         // 188
        // If enqueue has been called before, then we want to wait until                                               // 189
        // all previous Promises have been resolved before calling invoke,                                             // 190
        // so that results are always delivered in the correct order. If                                               // 191
        // enqueue has not been called before, then it is important to                                                 // 192
        // call invoke immediately, without waiting on a callback to fire,                                             // 193
        // so that the async generator function has the opportunity to do                                              // 194
        // any necessary setup in a predictable way. This predictability                                               // 195
        // is why the Promise constructor synchronously invokes its                                                    // 196
        // executor callback, and why async functions synchronously                                                    // 197
        // execute code before the first await. Since we implement simple                                              // 198
        // async functions in terms of async generators, it is especially                                              // 199
        // important to get this right, even though it requires care.                                                  // 200
        previousPromise ? previousPromise.then(                                                                        // 201
          callInvokeWithMethodAndArg,                                                                                  // 202
          // Avoid propagating failures to Promises returned by later                                                  // 203
          // invocations of the iterator.                                                                              // 204
          callInvokeWithMethodAndArg                                                                                   // 205
        ) : callInvokeWithMethodAndArg();                                                                              // 206
    }                                                                                                                  // 207
                                                                                                                       // 208
    // Define the unified helper method that is used to implement .next,                                               // 209
    // .throw, and .return (see defineIteratorMethods).                                                                // 210
    this._invoke = enqueue;                                                                                            // 211
  }                                                                                                                    // 212
                                                                                                                       // 213
  defineIteratorMethods(AsyncIterator.prototype);                                                                      // 214
                                                                                                                       // 215
  // Note that simple async functions are implemented on top of                                                        // 216
  // AsyncIterator objects; they just return a Promise for the value of                                                // 217
  // the final result produced by the iterator.                                                                        // 218
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {                                                      // 219
    var iter = new AsyncIterator(                                                                                      // 220
      wrap(innerFn, outerFn, self, tryLocsList)                                                                        // 221
    );                                                                                                                 // 222
                                                                                                                       // 223
    return runtime.isGeneratorFunction(outerFn)                                                                        // 224
      ? iter // If outerFn is a generator, return the full iterator.                                                   // 225
      : iter.next().then(function(result) {                                                                            // 226
          return result.done ? result.value : iter.next();                                                             // 227
        });                                                                                                            // 228
  };                                                                                                                   // 229
                                                                                                                       // 230
  function makeInvokeMethod(innerFn, self, context) {                                                                  // 231
    var state = GenStateSuspendedStart;                                                                                // 232
                                                                                                                       // 233
    return function invoke(method, arg) {                                                                              // 234
      if (state === GenStateExecuting) {                                                                               // 235
        throw new Error("Generator is already running");                                                               // 236
      }                                                                                                                // 237
                                                                                                                       // 238
      if (state === GenStateCompleted) {                                                                               // 239
        if (method === "throw") {                                                                                      // 240
          throw arg;                                                                                                   // 241
        }                                                                                                              // 242
                                                                                                                       // 243
        // Be forgiving, per 25.3.3.3.3 of the spec:                                                                   // 244
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume                                   // 245
        return doneResult();                                                                                           // 246
      }                                                                                                                // 247
                                                                                                                       // 248
      while (true) {                                                                                                   // 249
        var delegate = context.delegate;                                                                               // 250
        if (delegate) {                                                                                                // 251
          if (method === "return" ||                                                                                   // 252
              (method === "throw" && delegate.iterator[method] === undefined)) {                                       // 253
            // A return or throw (when the delegate iterator has no throw                                              // 254
            // method) always terminates the yield* loop.                                                              // 255
            context.delegate = null;                                                                                   // 256
                                                                                                                       // 257
            // If the delegate iterator has a return method, give it a                                                 // 258
            // chance to clean up.                                                                                     // 259
            var returnMethod = delegate.iterator["return"];                                                            // 260
            if (returnMethod) {                                                                                        // 261
              var record = tryCatch(returnMethod, delegate.iterator, arg);                                             // 262
              if (record.type === "throw") {                                                                           // 263
                // If the return method threw an exception, let that                                                   // 264
                // exception prevail over the original return or throw.                                                // 265
                method = "throw";                                                                                      // 266
                arg = record.arg;                                                                                      // 267
                continue;                                                                                              // 268
              }                                                                                                        // 269
            }                                                                                                          // 270
                                                                                                                       // 271
            if (method === "return") {                                                                                 // 272
              // Continue with the outer return, now that the delegate                                                 // 273
              // iterator has been terminated.                                                                         // 274
              continue;                                                                                                // 275
            }                                                                                                          // 276
          }                                                                                                            // 277
                                                                                                                       // 278
          var record = tryCatch(                                                                                       // 279
            delegate.iterator[method],                                                                                 // 280
            delegate.iterator,                                                                                         // 281
            arg                                                                                                        // 282
          );                                                                                                           // 283
                                                                                                                       // 284
          if (record.type === "throw") {                                                                               // 285
            context.delegate = null;                                                                                   // 286
                                                                                                                       // 287
            // Like returning generator.throw(uncaught), but without the                                               // 288
            // overhead of an extra function call.                                                                     // 289
            method = "throw";                                                                                          // 290
            arg = record.arg;                                                                                          // 291
            continue;                                                                                                  // 292
          }                                                                                                            // 293
                                                                                                                       // 294
          // Delegate generator ran and handled its own exceptions so                                                  // 295
          // regardless of what the method was, we continue as if it is                                                // 296
          // "next" with an undefined arg.                                                                             // 297
          method = "next";                                                                                             // 298
          arg = undefined;                                                                                             // 299
                                                                                                                       // 300
          var info = record.arg;                                                                                       // 301
          if (info.done) {                                                                                             // 302
            context[delegate.resultName] = info.value;                                                                 // 303
            context.next = delegate.nextLoc;                                                                           // 304
          } else {                                                                                                     // 305
            state = GenStateSuspendedYield;                                                                            // 306
            return info;                                                                                               // 307
          }                                                                                                            // 308
                                                                                                                       // 309
          context.delegate = null;                                                                                     // 310
        }                                                                                                              // 311
                                                                                                                       // 312
        if (method === "next") {                                                                                       // 313
          // Setting context._sent for legacy support of Babel's                                                       // 314
          // function.sent implementation.                                                                             // 315
          context.sent = context._sent = arg;                                                                          // 316
                                                                                                                       // 317
        } else if (method === "throw") {                                                                               // 318
          if (state === GenStateSuspendedStart) {                                                                      // 319
            state = GenStateCompleted;                                                                                 // 320
            throw arg;                                                                                                 // 321
          }                                                                                                            // 322
                                                                                                                       // 323
          if (context.dispatchException(arg)) {                                                                        // 324
            // If the dispatched exception was caught by a catch block,                                                // 325
            // then let that catch block handle the exception normally.                                                // 326
            method = "next";                                                                                           // 327
            arg = undefined;                                                                                           // 328
          }                                                                                                            // 329
                                                                                                                       // 330
        } else if (method === "return") {                                                                              // 331
          context.abrupt("return", arg);                                                                               // 332
        }                                                                                                              // 333
                                                                                                                       // 334
        state = GenStateExecuting;                                                                                     // 335
                                                                                                                       // 336
        var record = tryCatch(innerFn, self, context);                                                                 // 337
        if (record.type === "normal") {                                                                                // 338
          // If an exception is thrown from innerFn, we leave state ===                                                // 339
          // GenStateExecuting and loop back for another invocation.                                                   // 340
          state = context.done                                                                                         // 341
            ? GenStateCompleted                                                                                        // 342
            : GenStateSuspendedYield;                                                                                  // 343
                                                                                                                       // 344
          var info = {                                                                                                 // 345
            value: record.arg,                                                                                         // 346
            done: context.done                                                                                         // 347
          };                                                                                                           // 348
                                                                                                                       // 349
          if (record.arg === ContinueSentinel) {                                                                       // 350
            if (context.delegate && method === "next") {                                                               // 351
              // Deliberately forget the last sent value so that we don't                                              // 352
              // accidentally pass it on to the delegate.                                                              // 353
              arg = undefined;                                                                                         // 354
            }                                                                                                          // 355
          } else {                                                                                                     // 356
            return info;                                                                                               // 357
          }                                                                                                            // 358
                                                                                                                       // 359
        } else if (record.type === "throw") {                                                                          // 360
          state = GenStateCompleted;                                                                                   // 361
          // Dispatch the exception by looping back around to the                                                      // 362
          // context.dispatchException(arg) call above.                                                                // 363
          method = "throw";                                                                                            // 364
          arg = record.arg;                                                                                            // 365
        }                                                                                                              // 366
      }                                                                                                                // 367
    };                                                                                                                 // 368
  }                                                                                                                    // 369
                                                                                                                       // 370
  // Define Generator.prototype.{next,throw,return} in terms of the                                                    // 371
  // unified ._invoke helper method.                                                                                   // 372
  defineIteratorMethods(Gp);                                                                                           // 373
                                                                                                                       // 374
  Gp[iteratorSymbol] = function() {                                                                                    // 375
    return this;                                                                                                       // 376
  };                                                                                                                   // 377
                                                                                                                       // 378
  Gp[toStringTagSymbol] = "Generator";                                                                                 // 379
                                                                                                                       // 380
  Gp.toString = function() {                                                                                           // 381
    return "[object Generator]";                                                                                       // 382
  };                                                                                                                   // 383
                                                                                                                       // 384
  function pushTryEntry(locs) {                                                                                        // 385
    var entry = { tryLoc: locs[0] };                                                                                   // 386
                                                                                                                       // 387
    if (1 in locs) {                                                                                                   // 388
      entry.catchLoc = locs[1];                                                                                        // 389
    }                                                                                                                  // 390
                                                                                                                       // 391
    if (2 in locs) {                                                                                                   // 392
      entry.finallyLoc = locs[2];                                                                                      // 393
      entry.afterLoc = locs[3];                                                                                        // 394
    }                                                                                                                  // 395
                                                                                                                       // 396
    this.tryEntries.push(entry);                                                                                       // 397
  }                                                                                                                    // 398
                                                                                                                       // 399
  function resetTryEntry(entry) {                                                                                      // 400
    var record = entry.completion || {};                                                                               // 401
    record.type = "normal";                                                                                            // 402
    delete record.arg;                                                                                                 // 403
    entry.completion = record;                                                                                         // 404
  }                                                                                                                    // 405
                                                                                                                       // 406
  function Context(tryLocsList) {                                                                                      // 407
    // The root entry object (effectively a try statement without a catch                                              // 408
    // or a finally block) gives us a place to store values thrown from                                                // 409
    // locations where there is no enclosing try statement.                                                            // 410
    this.tryEntries = [{ tryLoc: "root" }];                                                                            // 411
    tryLocsList.forEach(pushTryEntry, this);                                                                           // 412
    this.reset(true);                                                                                                  // 413
  }                                                                                                                    // 414
                                                                                                                       // 415
  runtime.keys = function(object) {                                                                                    // 416
    var keys = [];                                                                                                     // 417
    for (var key in object) {                                                                                          // 418
      keys.push(key);                                                                                                  // 419
    }                                                                                                                  // 420
    keys.reverse();                                                                                                    // 421
                                                                                                                       // 422
    // Rather than returning an object with a next method, we keep                                                     // 423
    // things simple and return the next function itself.                                                              // 424
    return function next() {                                                                                           // 425
      while (keys.length) {                                                                                            // 426
        var key = keys.pop();                                                                                          // 427
        if (key in object) {                                                                                           // 428
          next.value = key;                                                                                            // 429
          next.done = false;                                                                                           // 430
          return next;                                                                                                 // 431
        }                                                                                                              // 432
      }                                                                                                                // 433
                                                                                                                       // 434
      // To avoid creating an additional object, we just hang the .value                                               // 435
      // and .done properties off the next function object itself. This                                                // 436
      // also ensures that the minifier will not anonymize the function.                                               // 437
      next.done = true;                                                                                                // 438
      return next;                                                                                                     // 439
    };                                                                                                                 // 440
  };                                                                                                                   // 441
                                                                                                                       // 442
  function values(iterable) {                                                                                          // 443
    if (iterable) {                                                                                                    // 444
      var iteratorMethod = iterable[iteratorSymbol];                                                                   // 445
      if (iteratorMethod) {                                                                                            // 446
        return iteratorMethod.call(iterable);                                                                          // 447
      }                                                                                                                // 448
                                                                                                                       // 449
      if (typeof iterable.next === "function") {                                                                       // 450
        return iterable;                                                                                               // 451
      }                                                                                                                // 452
                                                                                                                       // 453
      if (!isNaN(iterable.length)) {                                                                                   // 454
        var i = -1, next = function next() {                                                                           // 455
          while (++i < iterable.length) {                                                                              // 456
            if (hasOwn.call(iterable, i)) {                                                                            // 457
              next.value = iterable[i];                                                                                // 458
              next.done = false;                                                                                       // 459
              return next;                                                                                             // 460
            }                                                                                                          // 461
          }                                                                                                            // 462
                                                                                                                       // 463
          next.value = undefined;                                                                                      // 464
          next.done = true;                                                                                            // 465
                                                                                                                       // 466
          return next;                                                                                                 // 467
        };                                                                                                             // 468
                                                                                                                       // 469
        return next.next = next;                                                                                       // 470
      }                                                                                                                // 471
    }                                                                                                                  // 472
                                                                                                                       // 473
    // Return an iterator with no values.                                                                              // 474
    return { next: doneResult };                                                                                       // 475
  }                                                                                                                    // 476
  runtime.values = values;                                                                                             // 477
                                                                                                                       // 478
  function doneResult() {                                                                                              // 479
    return { value: undefined, done: true };                                                                           // 480
  }                                                                                                                    // 481
                                                                                                                       // 482
  Context.prototype = {                                                                                                // 483
    constructor: Context,                                                                                              // 484
                                                                                                                       // 485
    reset: function(skipTempReset) {                                                                                   // 486
      this.prev = 0;                                                                                                   // 487
      this.next = 0;                                                                                                   // 488
      // Resetting context._sent for legacy support of Babel's                                                         // 489
      // function.sent implementation.                                                                                 // 490
      this.sent = this._sent = undefined;                                                                              // 491
      this.done = false;                                                                                               // 492
      this.delegate = null;                                                                                            // 493
                                                                                                                       // 494
      this.tryEntries.forEach(resetTryEntry);                                                                          // 495
                                                                                                                       // 496
      if (!skipTempReset) {                                                                                            // 497
        for (var name in this) {                                                                                       // 498
          // Not sure about the optimal order of these conditions:                                                     // 499
          if (name.charAt(0) === "t" &&                                                                                // 500
              hasOwn.call(this, name) &&                                                                               // 501
              !isNaN(+name.slice(1))) {                                                                                // 502
            this[name] = undefined;                                                                                    // 503
          }                                                                                                            // 504
        }                                                                                                              // 505
      }                                                                                                                // 506
    },                                                                                                                 // 507
                                                                                                                       // 508
    stop: function() {                                                                                                 // 509
      this.done = true;                                                                                                // 510
                                                                                                                       // 511
      var rootEntry = this.tryEntries[0];                                                                              // 512
      var rootRecord = rootEntry.completion;                                                                           // 513
      if (rootRecord.type === "throw") {                                                                               // 514
        throw rootRecord.arg;                                                                                          // 515
      }                                                                                                                // 516
                                                                                                                       // 517
      return this.rval;                                                                                                // 518
    },                                                                                                                 // 519
                                                                                                                       // 520
    dispatchException: function(exception) {                                                                           // 521
      if (this.done) {                                                                                                 // 522
        throw exception;                                                                                               // 523
      }                                                                                                                // 524
                                                                                                                       // 525
      var context = this;                                                                                              // 526
      function handle(loc, caught) {                                                                                   // 527
        record.type = "throw";                                                                                         // 528
        record.arg = exception;                                                                                        // 529
        context.next = loc;                                                                                            // 530
        return !!caught;                                                                                               // 531
      }                                                                                                                // 532
                                                                                                                       // 533
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {                                                          // 534
        var entry = this.tryEntries[i];                                                                                // 535
        var record = entry.completion;                                                                                 // 536
                                                                                                                       // 537
        if (entry.tryLoc === "root") {                                                                                 // 538
          // Exception thrown outside of any try block that could handle                                               // 539
          // it, so set the completion value of the entire function to                                                 // 540
          // throw the exception.                                                                                      // 541
          return handle("end");                                                                                        // 542
        }                                                                                                              // 543
                                                                                                                       // 544
        if (entry.tryLoc <= this.prev) {                                                                               // 545
          var hasCatch = hasOwn.call(entry, "catchLoc");                                                               // 546
          var hasFinally = hasOwn.call(entry, "finallyLoc");                                                           // 547
                                                                                                                       // 548
          if (hasCatch && hasFinally) {                                                                                // 549
            if (this.prev < entry.catchLoc) {                                                                          // 550
              return handle(entry.catchLoc, true);                                                                     // 551
            } else if (this.prev < entry.finallyLoc) {                                                                 // 552
              return handle(entry.finallyLoc);                                                                         // 553
            }                                                                                                          // 554
                                                                                                                       // 555
          } else if (hasCatch) {                                                                                       // 556
            if (this.prev < entry.catchLoc) {                                                                          // 557
              return handle(entry.catchLoc, true);                                                                     // 558
            }                                                                                                          // 559
                                                                                                                       // 560
          } else if (hasFinally) {                                                                                     // 561
            if (this.prev < entry.finallyLoc) {                                                                        // 562
              return handle(entry.finallyLoc);                                                                         // 563
            }                                                                                                          // 564
                                                                                                                       // 565
          } else {                                                                                                     // 566
            throw new Error("try statement without catch or finally");                                                 // 567
          }                                                                                                            // 568
        }                                                                                                              // 569
      }                                                                                                                // 570
    },                                                                                                                 // 571
                                                                                                                       // 572
    abrupt: function(type, arg) {                                                                                      // 573
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {                                                          // 574
        var entry = this.tryEntries[i];                                                                                // 575
        if (entry.tryLoc <= this.prev &&                                                                               // 576
            hasOwn.call(entry, "finallyLoc") &&                                                                        // 577
            this.prev < entry.finallyLoc) {                                                                            // 578
          var finallyEntry = entry;                                                                                    // 579
          break;                                                                                                       // 580
        }                                                                                                              // 581
      }                                                                                                                // 582
                                                                                                                       // 583
      if (finallyEntry &&                                                                                              // 584
          (type === "break" ||                                                                                         // 585
           type === "continue") &&                                                                                     // 586
          finallyEntry.tryLoc <= arg &&                                                                                // 587
          arg <= finallyEntry.finallyLoc) {                                                                            // 588
        // Ignore the finally entry if control is not jumping to a                                                     // 589
        // location outside the try/catch block.                                                                       // 590
        finallyEntry = null;                                                                                           // 591
      }                                                                                                                // 592
                                                                                                                       // 593
      var record = finallyEntry ? finallyEntry.completion : {};                                                        // 594
      record.type = type;                                                                                              // 595
      record.arg = arg;                                                                                                // 596
                                                                                                                       // 597
      if (finallyEntry) {                                                                                              // 598
        this.next = finallyEntry.finallyLoc;                                                                           // 599
      } else {                                                                                                         // 600
        this.complete(record);                                                                                         // 601
      }                                                                                                                // 602
                                                                                                                       // 603
      return ContinueSentinel;                                                                                         // 604
    },                                                                                                                 // 605
                                                                                                                       // 606
    complete: function(record, afterLoc) {                                                                             // 607
      if (record.type === "throw") {                                                                                   // 608
        throw record.arg;                                                                                              // 609
      }                                                                                                                // 610
                                                                                                                       // 611
      if (record.type === "break" ||                                                                                   // 612
          record.type === "continue") {                                                                                // 613
        this.next = record.arg;                                                                                        // 614
      } else if (record.type === "return") {                                                                           // 615
        this.rval = record.arg;                                                                                        // 616
        this.next = "end";                                                                                             // 617
      } else if (record.type === "normal" && afterLoc) {                                                               // 618
        this.next = afterLoc;                                                                                          // 619
      }                                                                                                                // 620
    },                                                                                                                 // 621
                                                                                                                       // 622
    finish: function(finallyLoc) {                                                                                     // 623
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {                                                          // 624
        var entry = this.tryEntries[i];                                                                                // 625
        if (entry.finallyLoc === finallyLoc) {                                                                         // 626
          this.complete(entry.completion, entry.afterLoc);                                                             // 627
          resetTryEntry(entry);                                                                                        // 628
          return ContinueSentinel;                                                                                     // 629
        }                                                                                                              // 630
      }                                                                                                                // 631
    },                                                                                                                 // 632
                                                                                                                       // 633
    "catch": function(tryLoc) {                                                                                        // 634
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {                                                          // 635
        var entry = this.tryEntries[i];                                                                                // 636
        if (entry.tryLoc === tryLoc) {                                                                                 // 637
          var record = entry.completion;                                                                               // 638
          if (record.type === "throw") {                                                                               // 639
            var thrown = record.arg;                                                                                   // 640
            resetTryEntry(entry);                                                                                      // 641
          }                                                                                                            // 642
          return thrown;                                                                                               // 643
        }                                                                                                              // 644
      }                                                                                                                // 645
                                                                                                                       // 646
      // The context.catch method must only be called with a location                                                  // 647
      // argument that corresponds to a known catch block.                                                             // 648
      throw new Error("illegal catch attempt");                                                                        // 649
    },                                                                                                                 // 650
                                                                                                                       // 651
    delegateYield: function(iterable, resultName, nextLoc) {                                                           // 652
      this.delegate = {                                                                                                // 653
        iterator: values(iterable),                                                                                    // 654
        resultName: resultName,                                                                                        // 655
        nextLoc: nextLoc                                                                                               // 656
      };                                                                                                               // 657
                                                                                                                       // 658
      return ContinueSentinel;                                                                                         // 659
    }                                                                                                                  // 660
  };                                                                                                                   // 661
})(                                                                                                                    // 662
  // Among the various tricks for obtaining a reference to the global                                                  // 663
  // object, this seems to be the most reliable technique that does not                                                // 664
  // use indirect eval (which violates Content Security Policy).                                                       // 665
  typeof global === "object" ? global :                                                                                // 666
  typeof window === "object" ? window :                                                                                // 667
  typeof self === "object" ? self : this                                                                               // 668
);                                                                                                                     // 669
                                                                                                                       // 670
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/modules/client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package.modules = exports, {
  meteorInstall: meteorInstall,
  Buffer: Buffer,
  process: process
});

})();
