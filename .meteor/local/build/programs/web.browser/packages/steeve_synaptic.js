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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

/* Package-scope variables */
var correct, i, success, distractorsCorrect, Architect, level, Neuron, Layer, Network, Trainer;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/steeve_synaptic/packages/steeve_synaptic.js              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steeve:synaptic/synaptic.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
                                                                                                                       // 2
The MIT License (MIT)                                                                                                  // 3
                                                                                                                       // 4
Copyright (c) 2014 Juan Cazala - juancazala.com                                                                        // 5
                                                                                                                       // 6
Permission is hereby granted, free of charge, to any person obtaining a copy                                           // 7
of this software and associated documentation files (the "Software"), to deal                                          // 8
in the Software without restriction, including without limitation the rights                                           // 9
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell                                              // 10
copies of the Software, and to permit persons to whom the Software is                                                  // 11
furnished to do so, subject to the following conditions:                                                               // 12
                                                                                                                       // 13
The above copyright notice and this permission notice shall be included in                                             // 14
all copies or substantial portions of the Software.                                                                    // 15
                                                                                                                       // 16
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR                                             // 17
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,                                               // 18
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE                                            // 19
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER                                                 // 20
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,                                          // 21
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN                                              // 22
THE SOFTWARE                                                                                                           // 23
                                                                                                                       // 24
                                                                                                                       // 25
                                                                                                                       // 26
********************************************************************************************                           // 27
                                         SYNAPTIC                                                                      // 28
********************************************************************************************                           // 29
                                                                                                                       // 30
Synaptic is a javascript neural network library for node.js and the browser, its generalized                           // 31
algorythm is architecture-free, so you can build and train basically any type of first order                           // 32
or even second order neural network architectures.                                                                     // 33
                                                                                                                       // 34
http://en.wikipedia.org/wiki/Recurrent_neural_network#Second_Order_Recurrent_Neural_Network                            // 35
                                                                                                                       // 36
The library includes a few built-in architectures like multilayer perceptrons, multilayer                              // 37
long-short term memory networks (LSTM) or liquid state machines, and a trainer capable of                              // 38
training any given network, and includes built-in training tasks/tests like solving an XOR,                            // 39
passing a Distracted Sequence Recall test or an Embeded Reber Grammar test.                                            // 40
                                                                                                                       // 41
The algorythm implemented by this library has been taken from Derek D. Monner's paper:                                 // 42
                                                                                                                       // 43
A generalized LSTM-like training algorithm for second-order recurrent neural networks                                  // 44
http://www.overcomplete.net/papers/nn2012.pdf                                                                          // 45
                                                                                                                       // 46
There are references to the equations in that paper commented through the source code.                                 // 47
                                                                                                                       // 48
                                                                                                                       // 49
                                                                                                                       // 50
********************************************************************************************                           // 51
                                         NEURON                                                                        // 52
*******************************************************************************************/                           // 53
                                                                                                                       // 54
function Neuron() {                                                                                                    // 55
  this.ID = Neuron.uid();                                                                                              // 56
  this.label = null;                                                                                                   // 57
  this.connections = {                                                                                                 // 58
    inputs: {},                                                                                                        // 59
    projected: {},                                                                                                     // 60
    gated: {}                                                                                                          // 61
  };                                                                                                                   // 62
  this.error = {                                                                                                       // 63
    responsibility: 0,                                                                                                 // 64
    projected: 0,                                                                                                      // 65
    gated: 0                                                                                                           // 66
  };                                                                                                                   // 67
  this.trace = {                                                                                                       // 68
    elegibility: {},                                                                                                   // 69
    extended: {},                                                                                                      // 70
    influences: {}                                                                                                     // 71
  };                                                                                                                   // 72
  this.state = 0;                                                                                                      // 73
  this.old = 0;                                                                                                        // 74
  this.activation = 0;                                                                                                 // 75
  this.selfconnection = new Neuron.connection(this, this, 0); // weight = 0 -> not connected                           // 76
  this.squash = Neuron.squash.LOGISTIC;                                                                                // 77
  this.neighboors = {};                                                                                                // 78
  this.bias = Math.random() * .2 - .1;                                                                                 // 79
}                                                                                                                      // 80
                                                                                                                       // 81
Neuron.prototype = {                                                                                                   // 82
                                                                                                                       // 83
  // activate the neuron                                                                                               // 84
  activate: function(input) {                                                                                          // 85
    // activation from enviroment (for input neurons)                                                                  // 86
    if (typeof input != 'undefined') {                                                                                 // 87
      this.activation = input;                                                                                         // 88
      this.derivative = 0;                                                                                             // 89
      this.bias = 0;                                                                                                   // 90
      return this.activation;                                                                                          // 91
    }                                                                                                                  // 92
                                                                                                                       // 93
    // old state                                                                                                       // 94
    this.old = this.state;                                                                                             // 95
                                                                                                                       // 96
    // eq. 15                                                                                                          // 97
    this.state = this.selfconnection.gain * this.selfconnection.weight *                                               // 98
      this.state + this.bias;                                                                                          // 99
                                                                                                                       // 100
    for (var i in this.connections.inputs) {                                                                           // 101
      var input = this.connections.inputs[i];                                                                          // 102
      this.state += input.from.activation * input.weight * input.gain;                                                 // 103
    }                                                                                                                  // 104
                                                                                                                       // 105
    // eq. 16                                                                                                          // 106
    this.activation = this.squash(this.state);                                                                         // 107
                                                                                                                       // 108
    // f'(s)                                                                                                           // 109
    this.derivative = this.squash(this.state, true);                                                                   // 110
                                                                                                                       // 111
    // update traces                                                                                                   // 112
    for (var i in this.connections.inputs) {                                                                           // 113
      var input = this.connections.inputs[i];                                                                          // 114
                                                                                                                       // 115
      // elegibility trace - Eq. 17                                                                                    // 116
      this.trace.elegibility[input.ID] = this.selfconnection.gain * this.selfconnection                                // 117
        .weight * this.trace.elegibility[input.ID] + input.gain * input.from                                           // 118
        .activation;                                                                                                   // 119
                                                                                                                       // 120
      for (var id in this.trace.extended) {                                                                            // 121
        // extended elegibility trace                                                                                  // 122
        var xtrace = this.trace.extended[id];                                                                          // 123
        var neuron = this.neighboors[id];                                                                              // 124
                                                                                                                       // 125
        // if gated neuron's selfconnection is gated by this unit, the influence keeps track of the neuron's old state // 126
        var influence = neuron.selfconnection.gater == this ? neuron.old :                                             // 127
          0;                                                                                                           // 128
                                                                                                                       // 129
        // index runs over all the incoming connections to the gated neuron that are gated by this unit                // 130
        for (var incoming in this.trace.influences[neuron.ID]) { // captures the effect that has an input connection to this unit, on a neuron that is gated by this unit
          influence += this.trace.influences[neuron.ID][incoming].weight *                                             // 132
            this.trace.influences[neuron.ID][incoming].from.activation;                                                // 133
        }                                                                                                              // 134
                                                                                                                       // 135
        // eq. 18                                                                                                      // 136
        xtrace[input.ID] = neuron.selfconnection.gain * neuron.selfconnection                                          // 137
          .weight * xtrace[input.ID] + this.derivative * this.trace.elegibility[                                       // 138
            input.ID] * influence;                                                                                     // 139
      }                                                                                                                // 140
    }                                                                                                                  // 141
                                                                                                                       // 142
    //  update gated connection's gains                                                                                // 143
    for (var connection in this.connections.gated) {                                                                   // 144
      this.connections.gated[connection].gain = this.activation;                                                       // 145
    }                                                                                                                  // 146
                                                                                                                       // 147
    return this.activation;                                                                                            // 148
  },                                                                                                                   // 149
                                                                                                                       // 150
  // back-propagate the error                                                                                          // 151
  propagate: function(rate, target) {                                                                                  // 152
    // error accumulator                                                                                               // 153
    var error = 0;                                                                                                     // 154
                                                                                                                       // 155
    // output neurons get their error from the enviroment                                                              // 156
    if (typeof target != 'undefined')                                                                                  // 157
      error = target - this.activation;                                                                                // 158
                                                                                                                       // 159
    // error responsibilities from all the connections projected from this neuron                                      // 160
    for (var id in this.connections.projected) {                                                                       // 161
      var connection = this.connections.projected[id];                                                                 // 162
      var neuron = connection.to;                                                                                      // 163
      // Eq. 21                                                                                                        // 164
      error += neuron.error.responsibility * connection.gain * connection.weight;                                      // 165
    }                                                                                                                  // 166
                                                                                                                       // 167
    // projected error responsibility                                                                                  // 168
    this.error.projected = this.derivative * error;                                                                    // 169
                                                                                                                       // 170
    error = 0;                                                                                                         // 171
    // error responsibilities from all the connections gated by this neuron                                            // 172
    for (var id in this.trace.extended) {                                                                              // 173
      var neuron = this.neighboors[id]; // gated neuron                                                                // 174
      var influence = neuron.selfconnection.gater == this ? neuron.old : 0; // if gated neuron's selfconnection is gated by this neuron
                                                                                                                       // 176
      // index runs over all the connections to the gated neuron that are gated by this neuron                         // 177
      for (var input in this.trace.influences[id]) { // captures the effect that the input connection of this neuron have, on a neuron which its input/s is/are gated by this neuron
        influence += this.trace.influences[id][input].weight * this.trace.influences[                                  // 179
          neuron.ID][input].from.activation;                                                                           // 180
      }                                                                                                                // 181
      // eq. 22                                                                                                        // 182
      error += neuron.error.responsibility * influence;                                                                // 183
    }                                                                                                                  // 184
                                                                                                                       // 185
    // gated error responsibility                                                                                      // 186
    this.error.gated = this.derivative * error;                                                                        // 187
                                                                                                                       // 188
    // error responsibility - Eq. 23                                                                                   // 189
    this.error.responsibility = this.error.projected + this.error.gated;                                               // 190
                                                                                                                       // 191
    // learning rate                                                                                                   // 192
    rate = rate || .1;                                                                                                 // 193
                                                                                                                       // 194
    // adjust all the neuron's incoming connections                                                                    // 195
    for (var id in this.connections.inputs) {                                                                          // 196
      var input = this.connections.inputs[id];                                                                         // 197
                                                                                                                       // 198
      // Eq. 24                                                                                                        // 199
      var gradient = this.error.projected * this.trace.elegibility[input.ID];                                          // 200
      for (var id in this.trace.extended) {                                                                            // 201
        var neuron = this.neighboors[id];                                                                              // 202
        gradient += neuron.error.responsibility * this.trace.extended[                                                 // 203
          neuron.ID][input.ID];                                                                                        // 204
      }                                                                                                                // 205
      input.weight += rate * gradient; // adjust weights - aka learn                                                   // 206
    }                                                                                                                  // 207
                                                                                                                       // 208
    // adjust bias                                                                                                     // 209
    this.bias += rate * this.error.responsibility;                                                                     // 210
  },                                                                                                                   // 211
                                                                                                                       // 212
  project: function(neuron, weight) {                                                                                  // 213
    // self-connection                                                                                                 // 214
    if (neuron == this) {                                                                                              // 215
      this.selfconnection.weight = 1;                                                                                  // 216
      return this.selfconnection;                                                                                      // 217
    }                                                                                                                  // 218
                                                                                                                       // 219
    // check if connection already exists                                                                              // 220
    var connected = this.connected(neuron);                                                                            // 221
    if (connected) {                                                                                                   // 222
      // update connection                                                                                             // 223
      if (typeof weight != 'undefined')                                                                                // 224
        connected.connection.weight = weight;                                                                          // 225
      // return existing connection                                                                                    // 226
      return connected.connection;                                                                                     // 227
    } else {                                                                                                           // 228
      // create a new connection                                                                                       // 229
      var connection = new Neuron.connection(this, neuron, weight);                                                    // 230
    }                                                                                                                  // 231
                                                                                                                       // 232
    // reference all the connections and traces                                                                        // 233
    this.connections.projected[connection.ID] = connection;                                                            // 234
    this.neighboors[neuron.ID] = neuron;                                                                               // 235
    neuron.connections.inputs[connection.ID] = connection;                                                             // 236
    neuron.trace.elegibility[connection.ID] = 0;                                                                       // 237
                                                                                                                       // 238
    for (var id in neuron.trace.extended) {                                                                            // 239
      var trace = neuron.trace.extended[id];                                                                           // 240
      trace[connection.ID] = 0;                                                                                        // 241
    }                                                                                                                  // 242
                                                                                                                       // 243
    return connection;                                                                                                 // 244
  },                                                                                                                   // 245
                                                                                                                       // 246
  gate: function(connection) {                                                                                         // 247
    // add connection to gated list                                                                                    // 248
    this.connections.gated[connection.ID] = connection;                                                                // 249
                                                                                                                       // 250
    var neuron = connection.to;                                                                                        // 251
    if (!(neuron.ID in this.trace.extended)) {                                                                         // 252
      // extended trace                                                                                                // 253
      this.neighboors[neuron.ID] = neuron;                                                                             // 254
      var xtrace = this.trace.extended[neuron.ID] = {};                                                                // 255
      for (var id in this.connections.inputs) {                                                                        // 256
        var input = this.connections.inputs[id];                                                                       // 257
        xtrace[input.ID] = 0;                                                                                          // 258
      }                                                                                                                // 259
    }                                                                                                                  // 260
                                                                                                                       // 261
    // keep track                                                                                                      // 262
    if (neuron.ID in this.trace.influences)                                                                            // 263
      this.trace.influences[neuron.ID].push(connection);                                                               // 264
    else                                                                                                               // 265
      this.trace.influences[neuron.ID] = [connection];                                                                 // 266
                                                                                                                       // 267
    // set gater                                                                                                       // 268
    connection.gater = this;                                                                                           // 269
  },                                                                                                                   // 270
                                                                                                                       // 271
  // returns true or false whether the neuron is self-connected or not                                                 // 272
  selfconnected: function() {                                                                                          // 273
    return this.selfconnection.weight !== 0;                                                                           // 274
  },                                                                                                                   // 275
                                                                                                                       // 276
  // returns true or false whether the neuron is connected to another neuron (parameter)                               // 277
  connected: function(neuron) {                                                                                        // 278
    var result = {                                                                                                     // 279
      type: null,                                                                                                      // 280
      connection: false                                                                                                // 281
    };                                                                                                                 // 282
                                                                                                                       // 283
    if (this == neuron) {                                                                                              // 284
      if (this.selfconnected()) {                                                                                      // 285
        result.type = 'selfconnection';                                                                                // 286
        result.connection = this.selfconnection;                                                                       // 287
        return result;                                                                                                 // 288
      } else                                                                                                           // 289
        return false;                                                                                                  // 290
    }                                                                                                                  // 291
                                                                                                                       // 292
    for (var type in this.connections) {                                                                               // 293
      for (var connection in this.connections[type]) {                                                                 // 294
        var connection = this.connections[type][connection];                                                           // 295
        if (connection.to == neuron) {                                                                                 // 296
          result.type = type;                                                                                          // 297
          result.connection = connection;                                                                              // 298
          return result;                                                                                               // 299
        } else if (connection.from == neuron) {                                                                        // 300
          result.type = type;                                                                                          // 301
          result.connection = connection;                                                                              // 302
          return result;                                                                                               // 303
        }                                                                                                              // 304
      }                                                                                                                // 305
    }                                                                                                                  // 306
                                                                                                                       // 307
    return false;                                                                                                      // 308
  },                                                                                                                   // 309
                                                                                                                       // 310
  // clears all the traces (the neuron forgets it's context, but the connections remain intact)                        // 311
  clear: function() {                                                                                                  // 312
                                                                                                                       // 313
    for (var trace in this.trace.elegibility)                                                                          // 314
      this.trace.elegibility[trace] = 0;                                                                               // 315
                                                                                                                       // 316
    for (var trace in this.trace.extended)                                                                             // 317
      for (var extended in this.trace.extended[trace])                                                                 // 318
        this.trace.extended[trace][extended] = 0;                                                                      // 319
                                                                                                                       // 320
    this.error.responsibility = this.error.projected = this.error.gated = 0;                                           // 321
  },                                                                                                                   // 322
                                                                                                                       // 323
  // all the connections are randomized and the traces are cleared                                                     // 324
  reset: function() {                                                                                                  // 325
    this.clear();                                                                                                      // 326
                                                                                                                       // 327
    for (var type in this.connection)                                                                                  // 328
      for (var connection in this.connection[type])                                                                    // 329
        this.connection[type][connection].weight = Math.random() * .2 - .1;                                            // 330
    this.bias = Math.random() * .2 - .1;                                                                               // 331
                                                                                                                       // 332
    this.old = this.state = this.activation = 0;                                                                       // 333
  },                                                                                                                   // 334
                                                                                                                       // 335
  // hardcodes the behaviour of the neuron into an optimized function                                                  // 336
  optimize: function(optimized) {                                                                                      // 337
                                                                                                                       // 338
    optimized = optimized || {};                                                                                       // 339
    var that = this;                                                                                                   // 340
    var store_activation = [];                                                                                         // 341
    var store_trace = [];                                                                                              // 342
    var store_propagation = [];                                                                                        // 343
    var varID = optimized.memory | 0;                                                                                  // 344
    var inputs = optimized.inputs || [];                                                                               // 345
    var targets = optimized.targets || [];                                                                             // 346
    var outputs = optimized.outputs || [];                                                                             // 347
    var variables = optimized.variables || {};                                                                         // 348
    var activation_sentences = optimized.activation_sentences || [];                                                   // 349
    var trace_sentences = optimized.trace_sentences || [];                                                             // 350
    var propagation_sentences = optimized.propagation_sentences || [];                                                 // 351
                                                                                                                       // 352
    // get/reserve space in memory by creating a unique ID for a variablel                                             // 353
    var getVar = function() {                                                                                          // 354
      var args = Array.prototype.slice.call(arguments);                                                                // 355
                                                                                                                       // 356
      if (args.length == 1) {                                                                                          // 357
        if (args[0] == 'target') {                                                                                     // 358
          var id = 'target_' + targets.length;                                                                         // 359
          targets.push(varID);                                                                                         // 360
        } else                                                                                                         // 361
          var id = args[0];                                                                                            // 362
        if (id in variables)                                                                                           // 363
          return variables[id];                                                                                        // 364
        return variables[id] = {                                                                                       // 365
          value: 0,                                                                                                    // 366
          id: varID++                                                                                                  // 367
        };                                                                                                             // 368
      } else {                                                                                                         // 369
        var extended = args.length > 2;                                                                                // 370
        if (extended)                                                                                                  // 371
          var value = args.pop();                                                                                      // 372
                                                                                                                       // 373
        var unit = args.shift();                                                                                       // 374
        var prop = args.pop();                                                                                         // 375
                                                                                                                       // 376
        if (!extended)                                                                                                 // 377
          var value = unit[prop];                                                                                      // 378
                                                                                                                       // 379
        var id = prop + '_';                                                                                           // 380
        for (var property in args)                                                                                     // 381
          id += args[property] + '_';                                                                                  // 382
        id += unit.ID;                                                                                                 // 383
        if (id in variables)                                                                                           // 384
          return variables[id];                                                                                        // 385
                                                                                                                       // 386
        return variables[id] = {                                                                                       // 387
          value: value,                                                                                                // 388
          id: varID++                                                                                                  // 389
        };                                                                                                             // 390
      }                                                                                                                // 391
    };                                                                                                                 // 392
                                                                                                                       // 393
    // build sentence                                                                                                  // 394
    var buildSentence = function() {                                                                                   // 395
      var args = Array.prototype.slice.call(arguments);                                                                // 396
      var store = args.pop();                                                                                          // 397
      var sentence = "";                                                                                               // 398
      for (var i in args)                                                                                              // 399
        if (typeof args[i] == 'string')                                                                                // 400
          sentence += args[i];                                                                                         // 401
        else                                                                                                           // 402
          sentence += 'F[' + args[i].id + ']';                                                                         // 403
      store.push(sentence + ';');                                                                                      // 404
    }                                                                                                                  // 405
                                                                                                                       // 406
    // helper to check if an object is empty                                                                           // 407
    var isEmpty = function(obj) {                                                                                      // 408
      for (var prop in obj) {                                                                                          // 409
        if (obj.hasOwnProperty(prop))                                                                                  // 410
          return false;                                                                                                // 411
      }                                                                                                                // 412
      return true;                                                                                                     // 413
    };                                                                                                                 // 414
                                                                                                                       // 415
    // characteristics of the neuron                                                                                   // 416
    var noProjections = isEmpty(this.connections.projected);                                                           // 417
    var noGates = isEmpty(this.connections.gated);                                                                     // 418
    var isInput = isEmpty(this.connections.inputs);                                                                    // 419
    var isOutput = noProjections && noGates;                                                                           // 420
                                                                                                                       // 421
    // optimize neuron's behaviour                                                                                     // 422
    var rate = getVar('rate');                                                                                         // 423
    var activation = getVar(this, 'activation');                                                                       // 424
    if (isInput)                                                                                                       // 425
      inputs.push(activation.id);                                                                                      // 426
    else {                                                                                                             // 427
      activation_sentences.push(store_activation);                                                                     // 428
      trace_sentences.push(store_trace);                                                                               // 429
      propagation_sentences.push(store_propagation);                                                                   // 430
      var old = getVar(this, 'old');                                                                                   // 431
      var state = getVar(this, 'state');                                                                               // 432
      var bias = getVar(this, 'bias');                                                                                 // 433
      if (this.selfconnection.gater)                                                                                   // 434
        var self_gain = getVar(this.selfconnection, 'gain');                                                           // 435
      if (this.selfconnected())                                                                                        // 436
        var self_weight = getVar(this.selfconnection, 'weight');                                                       // 437
      buildSentence(old, ' = ', state, store_activation);                                                              // 438
      if (this.selfconnected())                                                                                        // 439
        if (this.selfconnection.gater)                                                                                 // 440
          buildSentence(state, ' = ', self_gain, ' * ', self_weight, ' * ',                                            // 441
            state, ' + ', bias, store_activation);                                                                     // 442
        else                                                                                                           // 443
          buildSentence(state, ' = ', self_weight, ' * ', state, ' + ',                                                // 444
            bias, store_activation);                                                                                   // 445
      else                                                                                                             // 446
        buildSentence(state, ' = ', bias, store_activation);                                                           // 447
      for (var i in this.connections.inputs) {                                                                         // 448
        var input = this.connections.inputs[i];                                                                        // 449
        var input_activation = getVar(input.from, 'activation');                                                       // 450
        var input_weight = getVar(input, 'weight');                                                                    // 451
        if (input.gater)                                                                                               // 452
          var input_gain = getVar(input, 'gain');                                                                      // 453
        if (this.connections.inputs[i].gater)                                                                          // 454
          buildSentence(state, ' += ', input_activation, ' * ',                                                        // 455
            input_weight, ' * ', input_gain, store_activation);                                                        // 456
        else                                                                                                           // 457
          buildSentence(state, ' += ', input_activation, ' * ',                                                        // 458
            input_weight, store_activation);                                                                           // 459
      }                                                                                                                // 460
      var derivative = getVar(this, 'derivative');                                                                     // 461
      switch (this.squash) {                                                                                           // 462
        case Neuron.squash.LOGISTIC:                                                                                   // 463
          buildSentence(activation, ' = (1 / (1 + Math.exp(-', state, ')))',                                           // 464
            store_activation);                                                                                         // 465
          buildSentence(derivative, ' = ', activation, ' * (1 - ',                                                     // 466
            activation, ')', store_activation);                                                                        // 467
          break;                                                                                                       // 468
        case Neuron.squash.TANH:                                                                                       // 469
          var eP = getVar('aux');                                                                                      // 470
          var eN = getVar('aux_2');                                                                                    // 471
          buildSentence(eP, ' = Math.exp(', state, ')', store_activation);                                             // 472
          buildSentence(eN, ' = 1 / ', eP);                                                                            // 473
          buildSentence(activation, ' = (', eP, ' - ', eN, ') / (', eP,                                                // 474
            ' + ', eN, store_activation);                                                                              // 475
          buildSentence(derivative, ' = 1 - (', activation, ' * ',                                                     // 476
            activation, ')', store_activation);                                                                        // 477
          break;                                                                                                       // 478
        case Neuron.squash.IDENTITY:                                                                                   // 479
          buildSentence(activation, ' = ', state, store_activation);                                                   // 480
          buildSentence(derivative, ' = 1', store_activation);                                                         // 481
          break;                                                                                                       // 482
        case Neuron.squash.HLIM:                                                                                       // 483
          buildSentence(activation, ' = +(', state, ' > 0)',                                                           // 484
            store_activation);                                                                                         // 485
          buildSentence(derivative, ' = 1', store_activation);                                                         // 486
          break;                                                                                                       // 487
      }                                                                                                                // 488
                                                                                                                       // 489
      for (var i in this.connections.inputs) {                                                                         // 490
        var input = this.connections.inputs[i];                                                                        // 491
        if (input.gater)                                                                                               // 492
          var input_gain = getVar(input, 'gain');                                                                      // 493
        var input_activation = getVar(input.from, 'activation');                                                       // 494
        var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace                                          // 495
          .elegibility[input.ID]);                                                                                     // 496
        if (this.selfconnected()) {                                                                                    // 497
          if (this.selfconnection.gater) {                                                                             // 498
            if (input.gater)                                                                                           // 499
              buildSentence(trace, ' = ', self_gain, ' * ', self_weight,                                               // 500
                ' * ', trace, ' + ', input_gain, ' * ', input_activation,                                              // 501
                store_trace);                                                                                          // 502
            else                                                                                                       // 503
              buildSentence(trace, ' = ', self_gain, ' * ', self_weight,                                               // 504
                ' * ', trace, ' + ', input_activation, store_trace);                                                   // 505
          } else {                                                                                                     // 506
            if (input.gater)                                                                                           // 507
              buildSentence(trace, ' = ', self_weight, ' * ', trace, ' + ',                                            // 508
                input_gain, ' * ', input_activation, store_trace);                                                     // 509
            else                                                                                                       // 510
              buildSentence(trace, ' = ', self_weight, ' * ', trace, ' + ',                                            // 511
                input_activation, store_trace);                                                                        // 512
          }                                                                                                            // 513
        } else {                                                                                                       // 514
          if (input.gater)                                                                                             // 515
            buildSentence(trace, ' = ', input_gain, ' * ', input_activation,                                           // 516
              store_trace);                                                                                            // 517
          else                                                                                                         // 518
            buildSentence(trace, ' = ', input_activation, store_trace);                                                // 519
        }                                                                                                              // 520
        for (var id in this.trace.extended) {                                                                          // 521
          // extended elegibility trace                                                                                // 522
          var xtrace = this.trace.extended[id];                                                                        // 523
          var neuron = this.neighboors[id];                                                                            // 524
          var influence = getVar('aux');                                                                               // 525
          var neuron_old = getVar(neuron, 'old');                                                                      // 526
          if (neuron.selfconnection.gater == this)                                                                     // 527
            buildSentence(influence, ' = ', neuron_old, store_trace);                                                  // 528
          else                                                                                                         // 529
            buildSentence(influence, ' = 0', store_trace);                                                             // 530
          for (var incoming in this.trace.influences[neuron.ID]) {                                                     // 531
            var incoming_weight = getVar(this.trace.influences[neuron.ID][                                             // 532
              incoming                                                                                                 // 533
            ], 'weight');                                                                                              // 534
            var incoming_activation = getVar(this.trace.influences[neuron.ID]                                          // 535
              [incoming].from, 'activation');                                                                          // 536
                                                                                                                       // 537
            buildSentence(influence, ' += ', incoming_weight, ' * ',                                                   // 538
              incoming_activation, store_trace);                                                                       // 539
          }                                                                                                            // 540
          var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace                                        // 541
            .elegibility[input.ID]);                                                                                   // 542
          var xtrace = getVar(this, 'trace', 'extended', neuron.ID, input.ID,                                          // 543
            this.trace.extended[neuron.ID][input.ID]);                                                                 // 544
          if (neuron.selfconnected())                                                                                  // 545
            var neuron_self_weight = getVar(neuron.selfconnection, 'weight');                                          // 546
          if (neuron.selfconnection.gater)                                                                             // 547
            var neuron_self_gain = getVar(neuron.selfconnection, 'gain');                                              // 548
          if (neuron.selfconnected())                                                                                  // 549
            if (neuron.selfconnection.gater)                                                                           // 550
              buildSentence(xtrace, ' = ', neuron_self_gain, ' * ',                                                    // 551
                neuron_self_weight, ' * ', xtrace, ' + ', derivative, ' * ',                                           // 552
                trace, ' * ', influence, store_trace);                                                                 // 553
            else                                                                                                       // 554
              buildSentence(xtrace, ' = ', neuron_self_weight, ' * ',                                                  // 555
                xtrace, ' + ', derivative, ' * ', trace, ' * ', influence,                                             // 556
                store_trace);                                                                                          // 557
          else                                                                                                         // 558
            buildSentence(xtrace, ' = ', derivative, ' * ', trace, ' * ',                                              // 559
              influence, store_trace);                                                                                 // 560
        }                                                                                                              // 561
      }                                                                                                                // 562
      for (var connection in this.connections.gated) {                                                                 // 563
        var gated_gain = getVar(this.connections.gated[connection], 'gain');                                           // 564
        buildSentence(gated_gain, ' = ', activation, store_activation);                                                // 565
      }                                                                                                                // 566
    }                                                                                                                  // 567
    if (!isInput) {                                                                                                    // 568
      var responsibility = getVar(this, 'error', 'responsibility', this.error                                          // 569
        .responsibility);                                                                                              // 570
      if (isOutput) {                                                                                                  // 571
        var target = getVar('target');                                                                                 // 572
        buildSentence(responsibility, ' = ', target, ' - ', activation,                                                // 573
          store_propagation);                                                                                          // 574
        buildSentence(responsibility, ' *= ', derivative, store_propagation);                                          // 575
        for (var id in this.connections.inputs) {                                                                      // 576
          var input = this.connections.inputs[id];                                                                     // 577
          var trace = getVar(this, 'trace', 'elegibility', input.ID, this.trace                                        // 578
            .elegibility[input.ID]);                                                                                   // 579
          var input_weight = getVar(input, 'weight');                                                                  // 580
          buildSentence(input_weight, ' += ', rate, ' * (', responsibility,                                            // 581
            ' * ', trace, ')', store_propagation);                                                                     // 582
        }                                                                                                              // 583
        outputs.push(activation.id);                                                                                   // 584
      } else {                                                                                                         // 585
        if (!noProjections && !noGates) {                                                                              // 586
          var error = getVar('aux');                                                                                   // 587
          for (var id in this.connections.projected) {                                                                 // 588
            var connection = this.connections.projected[id];                                                           // 589
            var neuron = connection.to;                                                                                // 590
            var connection_weight = getVar(connection, 'weight');                                                      // 591
            var neuron_responsibility = getVar(neuron, 'error',                                                        // 592
              'responsibility', neuron.error.responsibility);                                                          // 593
            if (connection.gater) {                                                                                    // 594
              var connection_gain = getVar(connection, 'gain');                                                        // 595
              buildSentence(error, ' += ', neuron_responsibility, ' * ',                                               // 596
                connection_gain, ' * ', connection_weight,                                                             // 597
                store_propagation);                                                                                    // 598
            } else                                                                                                     // 599
              buildSentence(error, ' += ', neuron_responsibility, ' * ',                                               // 600
                connection_weight, store_propagation);                                                                 // 601
          }                                                                                                            // 602
          var projected = getVar(this, 'error', 'projected', this.error.projected);                                    // 603
          buildSentence(projected, ' = ', derivative, ' * ', error,                                                    // 604
            store_propagation);                                                                                        // 605
          buildSentence(error, ' = 0', store_propagation);                                                             // 606
          for (var id in this.trace.extended) {                                                                        // 607
            var neuron = this.neighboors[id];                                                                          // 608
            var influence = getVar('aux_2');                                                                           // 609
            var neuron_old = getVar(neuron, 'old');                                                                    // 610
            if (neuron.selfconnection.gater == this)                                                                   // 611
              buildSentence(influence, ' = ', neuron_old, store_propagation);                                          // 612
            else                                                                                                       // 613
              buildSentence(influence, ' = 0', store_propagation);                                                     // 614
            for (var input in this.trace.influences[neuron.ID]) {                                                      // 615
              var connection = this.trace.influences[neuron.ID][input];                                                // 616
              var connection_weight = getVar(connection, 'weight');                                                    // 617
              var neuron_activation = getVar(connection.from, 'activation');                                           // 618
              buildSentence(influence, ' += ', connection_weight, ' * ',                                               // 619
                neuron_activation, store_propagation);                                                                 // 620
            }                                                                                                          // 621
            var neuron_responsibility = getVar(neuron, 'error',                                                        // 622
              'responsibility', neuron.error.responsibility);                                                          // 623
            buildSentence(error, ' += ', neuron_responsibility, ' * ',                                                 // 624
              influence, store_propagation);                                                                           // 625
          }                                                                                                            // 626
          var gated = getVar(this, 'error', 'gated', this.error.gated);                                                // 627
          buildSentence(gated, ' = ', derivative, ' * ', error,                                                        // 628
            store_propagation);                                                                                        // 629
          buildSentence(responsibility, ' = ', projected, ' + ', gated,                                                // 630
            store_propagation);                                                                                        // 631
          for (var id in this.connections.inputs) {                                                                    // 632
            var input = this.connections.inputs[id];                                                                   // 633
            var gradient = getVar('aux');                                                                              // 634
            var trace = getVar(this, 'trace', 'elegibility', input.ID, this                                            // 635
              .trace.elegibility[input.ID]);                                                                           // 636
            buildSentence(gradient, ' = ', projected, ' * ', trace,                                                    // 637
              store_propagation);                                                                                      // 638
            for (var id in this.trace.extended) {                                                                      // 639
              var neuron = this.neighboors[id];                                                                        // 640
              var neuron_responsibility = getVar(neuron, 'error',                                                      // 641
                'responsibility', neuron.error.responsibility);                                                        // 642
              var xtrace = getVar(this, 'trace', 'extended', neuron.ID,                                                // 643
                input.ID, this.trace.extended[neuron.ID][input.ID]);                                                   // 644
              buildSentence(gradient, ' += ', neuron_responsibility, ' * ',                                            // 645
                xtrace, store_propagation);                                                                            // 646
            }                                                                                                          // 647
            var input_weight = getVar(input, 'weight');                                                                // 648
            buildSentence(input_weight, ' += ', rate, ' * ', gradient,                                                 // 649
              store_propagation);                                                                                      // 650
          }                                                                                                            // 651
                                                                                                                       // 652
        } else if (noGates) {                                                                                          // 653
          buildSentence(responsibility, ' = 0', store_propagation);                                                    // 654
          for (var id in this.connections.projected) {                                                                 // 655
            var connection = this.connections.projected[id];                                                           // 656
            var neuron = connection.to;                                                                                // 657
            var connection_weight = getVar(connection, 'weight');                                                      // 658
            var neuron_responsibility = getVar(neuron, 'error',                                                        // 659
              'responsibility', neuron.error.responsibility);                                                          // 660
            if (connection.gater) {                                                                                    // 661
              var connection_gain = getVar(connection, 'gain');                                                        // 662
              buildSentence(responsibility, ' += ', neuron_responsibility,                                             // 663
                ' * ', connection_gain, ' * ', connection_weight,                                                      // 664
                store_propagation);                                                                                    // 665
            } else                                                                                                     // 666
              buildSentence(responsibility, ' += ', neuron_responsibility,                                             // 667
                ' * ', connection_weight, store_propagation);                                                          // 668
          }                                                                                                            // 669
          buildSentence(responsibility, ' *= ', derivative,                                                            // 670
            store_propagation);                                                                                        // 671
          for (var id in this.connections.inputs) {                                                                    // 672
            var input = this.connections.inputs[id];                                                                   // 673
            var trace = getVar(this, 'trace', 'elegibility', input.ID, this                                            // 674
              .trace.elegibility[input.ID]);                                                                           // 675
            var input_weight = getVar(input, 'weight');                                                                // 676
            buildSentence(input_weight, ' += ', rate, ' * (',                                                          // 677
              responsibility, ' * ', trace, ')', store_propagation);                                                   // 678
          }                                                                                                            // 679
        } else if (noProjections) {                                                                                    // 680
          buildSentence(responsibility, ' = 0', store_propagation);                                                    // 681
          for (var id in this.trace.extended) {                                                                        // 682
            var neuron = this.neighboors[id];                                                                          // 683
            var influence = getVar('aux');                                                                             // 684
            var neuron_old = getVar(neuron, 'old');                                                                    // 685
            if (neuron.selfconnection.gater == this)                                                                   // 686
              buildSentence(influence, ' = ', neuron_old, store_propagation);                                          // 687
            else                                                                                                       // 688
              buildSentence(influence, ' = 0', store_propagation);                                                     // 689
            for (var input in this.trace.influences[neuron.ID]) {                                                      // 690
              var connection = this.trace.influences[neuron.ID][input];                                                // 691
              var connection_weight = getVar(connection, 'weight');                                                    // 692
              var neuron_activation = getVar(connection.from, 'activation');                                           // 693
              buildSentence(influence, ' += ', connection_weight, ' * ',                                               // 694
                neuron_activation, store_propagation);                                                                 // 695
            }                                                                                                          // 696
            var neuron_responsibility = getVar(neuron, 'error',                                                        // 697
              'responsibility', neuron.error.responsibility);                                                          // 698
            buildSentence(responsibility, ' += ', neuron_responsibility,                                               // 699
              ' * ', influence, store_propagation);                                                                    // 700
          }                                                                                                            // 701
          buildSentence(responsibility, ' *= ', derivative,                                                            // 702
            store_propagation);                                                                                        // 703
          for (var id in this.connections.inputs) {                                                                    // 704
            var input = this.connections.inputs[id];                                                                   // 705
            var gradient = getVar('aux');                                                                              // 706
            buildSentence(gradient, ' = 0', store_propagation);                                                        // 707
            for (var id in this.trace.extended) {                                                                      // 708
              var neuron = this.neighboors[id];                                                                        // 709
              var neuron_responsibility = getVar(neuron, 'error',                                                      // 710
                'responsibility', neuron.error.responsibility);                                                        // 711
              var xtrace = getVar(this, 'trace', 'extended', neuron.ID,                                                // 712
                input.ID, this.trace.extended[neuron.ID][input.ID]);                                                   // 713
              buildSentence(gradient, ' += ', neuron_responsibility, ' * ',                                            // 714
                xtrace, store_propagation);                                                                            // 715
            }                                                                                                          // 716
            var input_weight = getVar(input, 'weight');                                                                // 717
            buildSentence(input_weight, ' += ', rate, ' * ', gradient,                                                 // 718
              store_propagation);                                                                                      // 719
          }                                                                                                            // 720
        }                                                                                                              // 721
      }                                                                                                                // 722
      buildSentence(bias, ' += ', rate, ' * ', responsibility,                                                         // 723
        store_propagation);                                                                                            // 724
    }                                                                                                                  // 725
    return {                                                                                                           // 726
      memory: varID,                                                                                                   // 727
      inputs: inputs,                                                                                                  // 728
      outputs: outputs,                                                                                                // 729
      targets: targets,                                                                                                // 730
      variables: variables,                                                                                            // 731
      activation_sentences: activation_sentences,                                                                      // 732
      trace_sentences: trace_sentences,                                                                                // 733
      propagation_sentences: propagation_sentences                                                                     // 734
    }                                                                                                                  // 735
  }                                                                                                                    // 736
}                                                                                                                      // 737
                                                                                                                       // 738
                                                                                                                       // 739
// represents a connection between two neurons                                                                         // 740
Neuron.connection = function Connection(from, to, weight) {                                                            // 741
                                                                                                                       // 742
  if (!from || !to)                                                                                                    // 743
    throw "Connection Error: Invalid neurons";                                                                         // 744
                                                                                                                       // 745
  this.ID = Neuron.connection.uid();                                                                                   // 746
  this.from = from;                                                                                                    // 747
  this.to = to;                                                                                                        // 748
  this.weight = typeof weight == 'undefined' ? Math.random() * .2 - .1 :                                               // 749
    weight;                                                                                                            // 750
  this.gain = 1;                                                                                                       // 751
  this.gater = null;                                                                                                   // 752
}                                                                                                                      // 753
                                                                                                                       // 754
                                                                                                                       // 755
// squashing functions                                                                                                 // 756
Neuron.squash = {};                                                                                                    // 757
                                                                                                                       // 758
// eq. 5 & 5'                                                                                                          // 759
Neuron.squash.LOGISTIC = function(x, derivate) {                                                                       // 760
  if (!derivate)                                                                                                       // 761
    return 1 / (1 + Math.exp(-x));                                                                                     // 762
  var fx = Neuron.squash.LOGISTIC(x);                                                                                  // 763
  return fx * (1 - fx);                                                                                                // 764
};                                                                                                                     // 765
Neuron.squash.TANH = function(x, derivate) {                                                                           // 766
  if (derivate)                                                                                                        // 767
    return 1 - Math.pow(Neuron.squash.TANH(x), 2);                                                                     // 768
  var eP = Math.exp(x);                                                                                                // 769
  var eN = 1 / eP;                                                                                                     // 770
  return (eP - eN) / (eP + eN);                                                                                        // 771
};                                                                                                                     // 772
Neuron.squash.IDENTITY = function(x, derivate) {                                                                       // 773
  return derivate ? 1 : x;                                                                                             // 774
};                                                                                                                     // 775
Neuron.squash.HLIM = function(x, derivate) {                                                                           // 776
  return derivate ? 1 : +(x > 0);                                                                                      // 777
};                                                                                                                     // 778
                                                                                                                       // 779
// unique ID's                                                                                                         // 780
(function() {                                                                                                          // 781
  var neurons = 0;                                                                                                     // 782
  var connections = 0;                                                                                                 // 783
  Neuron.uid = function() {                                                                                            // 784
    return neurons++;                                                                                                  // 785
  }                                                                                                                    // 786
  Neuron.connection.uid = function() {                                                                                 // 787
    return connections++;                                                                                              // 788
  }                                                                                                                    // 789
  Neuron.quantity = function() {                                                                                       // 790
    return {                                                                                                           // 791
      neurons: neurons,                                                                                                // 792
      connections: connections                                                                                         // 793
    }                                                                                                                  // 794
  }                                                                                                                    // 795
})();                                                                                                                  // 796
                                                                                                                       // 797
                                                                                                                       // 798
/*******************************************************************************************                           // 799
                                            LAYER                                                                      // 800
*******************************************************************************************/                           // 801
                                                                                                                       // 802
function Layer(size, label) {                                                                                          // 803
  this.size = size | 0;                                                                                                // 804
  this.list = [];                                                                                                      // 805
  this.label = label || null;                                                                                          // 806
                                                                                                                       // 807
  while (size--) {                                                                                                     // 808
    var neuron = new Neuron();                                                                                         // 809
    this.list.push(neuron);                                                                                            // 810
  }                                                                                                                    // 811
}                                                                                                                      // 812
Layer.prototype = {                                                                                                    // 813
                                                                                                                       // 814
  // activates all the neurons in the layer                                                                            // 815
  activate: function(input) {                                                                                          // 816
                                                                                                                       // 817
    var activations = [];                                                                                              // 818
                                                                                                                       // 819
    if (typeof input != 'undefined') {                                                                                 // 820
      if (input.length != this.size)                                                                                   // 821
        throw "INPUT size and LAYER size must be the same to activate!";                                               // 822
                                                                                                                       // 823
      for (var id in this.list) {                                                                                      // 824
        var neuron = this.list[id];                                                                                    // 825
        var activation = neuron.activate(input[id]);                                                                   // 826
        activations.push(activation);                                                                                  // 827
      }                                                                                                                // 828
    } else {                                                                                                           // 829
      for (var id in this.list) {                                                                                      // 830
        var neuron = this.list[id];                                                                                    // 831
        var activation = neuron.activate();                                                                            // 832
        activations.push(activation);                                                                                  // 833
      }                                                                                                                // 834
    }                                                                                                                  // 835
    return activations;                                                                                                // 836
  },                                                                                                                   // 837
                                                                                                                       // 838
  // propagates the error on all the neurons of the layer                                                              // 839
  propagate: function(rate, target) {                                                                                  // 840
                                                                                                                       // 841
    if (typeof target != 'undefined') {                                                                                // 842
      if (target.length != this.size)                                                                                  // 843
        throw "TARGET size and LAYER size must be the same to propagate!";                                             // 844
                                                                                                                       // 845
      for (var id = this.list.length - 1; id >= 0; id--) {                                                             // 846
        var neuron = this.list[id];                                                                                    // 847
        neuron.propagate(rate, target[id]);                                                                            // 848
      }                                                                                                                // 849
    } else {                                                                                                           // 850
      for (var id = this.list.length - 1; id >= 0; id--) {                                                             // 851
        var neuron = this.list[id];                                                                                    // 852
        neuron.propagate(rate);                                                                                        // 853
      }                                                                                                                // 854
    }                                                                                                                  // 855
  },                                                                                                                   // 856
                                                                                                                       // 857
  // projects a connection from this layer to another one                                                              // 858
  project: function(layer, type, weights) {                                                                            // 859
                                                                                                                       // 860
    if (layer instanceof Network)                                                                                      // 861
      layer = layer.layers.input;                                                                                      // 862
                                                                                                                       // 863
    if (layer instanceof Layer) {                                                                                      // 864
      if (!this.connected(layer))                                                                                      // 865
        return new Layer.connection(this, layer, type, weights);                                                       // 866
    } else                                                                                                             // 867
      throw "Invalid argument, you can only project connections to LAYERS and NETWORKS!";                              // 868
                                                                                                                       // 869
                                                                                                                       // 870
  },                                                                                                                   // 871
                                                                                                                       // 872
  // gates a connection betwenn two layers                                                                             // 873
  gate: function(connection, type) {                                                                                   // 874
                                                                                                                       // 875
    if (type == Layer.gateType.INPUT) {                                                                                // 876
      if (connection.to.size != this.size)                                                                             // 877
        throw "GATER layer and CONNECTION.TO layer must be the same size in order to gate!";                           // 878
                                                                                                                       // 879
      for (var id in connection.to.list) {                                                                             // 880
        var neuron = connection.to.list[id];                                                                           // 881
        var gater = this.list[id];                                                                                     // 882
        for (var input in neuron.connections.inputs) {                                                                 // 883
          var gated = neuron.connections.inputs[input];                                                                // 884
          if (gated.ID in connection.connections)                                                                      // 885
            gater.gate(gated);                                                                                         // 886
        }                                                                                                              // 887
      }                                                                                                                // 888
    } else if (type == Layer.gateType.OUTPUT) {                                                                        // 889
      if (connection.from.size != this.size)                                                                           // 890
        throw "GATER layer and CONNECTION.FROM layer must be the same size in order to gate!";                         // 891
                                                                                                                       // 892
      for (var id in connection.from.list) {                                                                           // 893
        var neuron = connection.from.list[id];                                                                         // 894
        var gater = this.list[id];                                                                                     // 895
        for (var projected in neuron.connections.projected) {                                                          // 896
          var gated = neuron.connections.projected[projected];                                                         // 897
          if (gated.ID in connection.connections)                                                                      // 898
            gater.gate(gated);                                                                                         // 899
        }                                                                                                              // 900
      }                                                                                                                // 901
    } else if (type == Layer.gateType.ONE_TO_ONE) {                                                                    // 902
      if (connection.size != this.size)                                                                                // 903
        throw "The number of GATER UNITS must be the same as the number of CONNECTIONS to gate!";                      // 904
                                                                                                                       // 905
      for (var id in connection.list) {                                                                                // 906
        var gater = this.list[id];                                                                                     // 907
        var gated = connection.list[id];                                                                               // 908
        gater.gate(gated);                                                                                             // 909
      }                                                                                                                // 910
    }                                                                                                                  // 911
  },                                                                                                                   // 912
                                                                                                                       // 913
  // true or false whether the whole layer is self-connected or not                                                    // 914
  selfconnected: function() {                                                                                          // 915
                                                                                                                       // 916
    for (var id in this.list) {                                                                                        // 917
      var neuron = this.list[id];                                                                                      // 918
      if (!neuron.selfconnected())                                                                                     // 919
        return false;                                                                                                  // 920
    }                                                                                                                  // 921
    return true;                                                                                                       // 922
  },                                                                                                                   // 923
                                                                                                                       // 924
  // true of false whether the layer is connected to another layer (parameter) or not                                  // 925
  connected: function(layer) {                                                                                         // 926
    // Check if ALL to ALL connection                                                                                  // 927
    var connections = 0;                                                                                               // 928
    for (var here in this.list) {                                                                                      // 929
      for (var there in layer.list) {                                                                                  // 930
        var from = this.list[here];                                                                                    // 931
        var to = layer.list[there];                                                                                    // 932
        var connected = from.connected(to);                                                                            // 933
        if (connected.type == 'projected')                                                                             // 934
          connections++;                                                                                               // 935
      }                                                                                                                // 936
    }                                                                                                                  // 937
    if (connections == this.size * layer.size)                                                                         // 938
      return Layer.connectionType.ALL_TO_ALL;                                                                          // 939
                                                                                                                       // 940
    // Check if ONE to ONE connection                                                                                  // 941
    connections = 0;                                                                                                   // 942
    for (var neuron in this.list) {                                                                                    // 943
      var from = this.list[neuron];                                                                                    // 944
      var to = layer.list[neuron];                                                                                     // 945
      var connected = from.connected(to);                                                                              // 946
      if (connected == 'projected')                                                                                    // 947
        connections++;                                                                                                 // 948
    }                                                                                                                  // 949
    if (connections == this.size)                                                                                      // 950
      return Layer.connectionType.ONE_TO_ONE;                                                                          // 951
  },                                                                                                                   // 952
                                                                                                                       // 953
  // clears all the neuorns in the layer                                                                               // 954
  clear: function() {                                                                                                  // 955
    for (var id in this.list) {                                                                                        // 956
      var neuron = this.list[id];                                                                                      // 957
      neuron.clear();                                                                                                  // 958
    }                                                                                                                  // 959
  },                                                                                                                   // 960
                                                                                                                       // 961
  // resets all the neurons in the layer                                                                               // 962
  reset: function() {                                                                                                  // 963
    for (var id in this.list) {                                                                                        // 964
      var neuron = this.list[id];                                                                                      // 965
      neuron.reset();                                                                                                  // 966
    }                                                                                                                  // 967
  },                                                                                                                   // 968
                                                                                                                       // 969
  // returns all the neurons in the layer (array)                                                                      // 970
  neurons: function() {                                                                                                // 971
    return this.list;                                                                                                  // 972
  },                                                                                                                   // 973
                                                                                                                       // 974
  // adds a neuron to the layer                                                                                        // 975
  add: function(neuron) {                                                                                              // 976
    this.neurons[neuron.ID] = neuron || new Neuron();                                                                  // 977
    this.list.push(neuron);                                                                                            // 978
    this.size++;                                                                                                       // 979
  },                                                                                                                   // 980
                                                                                                                       // 981
  set: function(options) {                                                                                             // 982
    options = options || {};                                                                                           // 983
                                                                                                                       // 984
    for (var i in this.list) {                                                                                         // 985
      var neuron = this.list[i];                                                                                       // 986
      if (options.label)                                                                                               // 987
        neuron.label = options.label + '_' + neuron.ID;                                                                // 988
      if (options.squash)                                                                                              // 989
        neuron.squash = options.squash;                                                                                // 990
      if (options.bias)                                                                                                // 991
        neuron.bias = options.bias;                                                                                    // 992
    }                                                                                                                  // 993
    return this;                                                                                                       // 994
  }                                                                                                                    // 995
}                                                                                                                      // 996
                                                                                                                       // 997
// represents a connection from one layer to another, and keeps track of its weight and gain                           // 998
Layer.connection = function LayerConnection(fromLayer, toLayer, type, weights) {                                       // 999
  this.ID = Layer.connection.uid();                                                                                    // 1000
  this.from = fromLayer;                                                                                               // 1001
  this.to = toLayer;                                                                                                   // 1002
  this.selfconnection = toLayer == fromLayer;                                                                          // 1003
  this.type = type || Layer.connectionType.ALL_TO_ALL;                                                                 // 1004
  this.connections = {};                                                                                               // 1005
  this.list = [];                                                                                                      // 1006
  this.size = 0;                                                                                                       // 1007
                                                                                                                       // 1008
  if (this.type == Layer.connectionType.ALL_TO_ALL) {                                                                  // 1009
    for (var here in this.from.list) {                                                                                 // 1010
      for (var there in this.to.list) {                                                                                // 1011
        var from = this.from.list[here];                                                                               // 1012
        var to = this.to.list[there];                                                                                  // 1013
        var connection = from.project(to, weights);                                                                    // 1014
                                                                                                                       // 1015
        this.connections[connection.ID] = connection;                                                                  // 1016
        this.size = this.list.push(connection);                                                                        // 1017
      }                                                                                                                // 1018
    }                                                                                                                  // 1019
  } else if (this.type == Layer.connectionType.ONE_TO_ONE) {                                                           // 1020
                                                                                                                       // 1021
    for (var neuron in this.from.list) {                                                                               // 1022
      var from = this.from.list[neuron];                                                                               // 1023
      var to = this.to.list[neuron];                                                                                   // 1024
      var connection = from.project(to, weights);                                                                      // 1025
                                                                                                                       // 1026
      this.connections[connection.ID] = connection;                                                                    // 1027
      this.size = this.list.push(connection);                                                                          // 1028
    }                                                                                                                  // 1029
  }                                                                                                                    // 1030
}                                                                                                                      // 1031
                                                                                                                       // 1032
// types of connections                                                                                                // 1033
Layer.connectionType = {};                                                                                             // 1034
Layer.connectionType.ALL_TO_ALL = "ALL TO ALL";                                                                        // 1035
Layer.connectionType.ONE_TO_ONE = "ONE TO ONE";                                                                        // 1036
                                                                                                                       // 1037
// types of gates                                                                                                      // 1038
Layer.gateType = {};                                                                                                   // 1039
Layer.gateType.INPUT = "INPUT";                                                                                        // 1040
Layer.gateType.OUTPUT = "OUTPUT";                                                                                      // 1041
Layer.gateType.ONE_TO_ONE = "ONE TO ONE";                                                                              // 1042
                                                                                                                       // 1043
(function() {                                                                                                          // 1044
  var netoworks = 0;                                                                                                   // 1045
  var connections = 0;                                                                                                 // 1046
  Network.uid = function() {                                                                                           // 1047
    return netoworks++;                                                                                                // 1048
  }                                                                                                                    // 1049
  Layer.connection.uid = function() {                                                                                  // 1050
    return connections++;                                                                                              // 1051
  }                                                                                                                    // 1052
})();                                                                                                                  // 1053
                                                                                                                       // 1054
                                                                                                                       // 1055
/*******************************************************************************************                           // 1056
                                         NETWORK                                                                       // 1057
*******************************************************************************************/                           // 1058
                                                                                                                       // 1059
function Network(layers) {                                                                                             // 1060
  if (typeof layers != 'undefined') {                                                                                  // 1061
    this.layers = layers || {                                                                                          // 1062
      input: null,                                                                                                     // 1063
      hidden: {},                                                                                                      // 1064
      output: null                                                                                                     // 1065
    };                                                                                                                 // 1066
    this.optimized = null;                                                                                             // 1067
  }                                                                                                                    // 1068
}                                                                                                                      // 1069
Network.prototype = {                                                                                                  // 1070
                                                                                                                       // 1071
  // feed-forward activation of all the layers to produce an ouput                                                     // 1072
  activate: function(input) {                                                                                          // 1073
                                                                                                                       // 1074
    if (!this.optimized)                                                                                               // 1075
      this.optimize();                                                                                                 // 1076
                                                                                                                       // 1077
    return this.optimized.activate(input);                                                                             // 1078
  },                                                                                                                   // 1079
                                                                                                                       // 1080
  // back-propagate the error thru the network                                                                         // 1081
  propagate: function(rate, target) {                                                                                  // 1082
                                                                                                                       // 1083
    if (!this.optimized)                                                                                               // 1084
      this.optimize();                                                                                                 // 1085
                                                                                                                       // 1086
    return this.optimized.propagate(rate, target);                                                                     // 1087
  },                                                                                                                   // 1088
                                                                                                                       // 1089
  // project a connection to another unit (either a network or a layer)                                                // 1090
  project: function(unit, type, weights) {                                                                             // 1091
                                                                                                                       // 1092
    if (this.optimized)                                                                                                // 1093
      this.optimized.reset();                                                                                          // 1094
                                                                                                                       // 1095
    if (unit instanceof Network)                                                                                       // 1096
      return this.layers.output.project(unit.layers.input, type, weights);                                             // 1097
                                                                                                                       // 1098
    if (unit instanceof Layer)                                                                                         // 1099
      return this.layers.output.project(unit, type, weights);                                                          // 1100
                                                                                                                       // 1101
    throw "Invalid argument, you can only project connections to LAYERS and NETWORKS!";                                // 1102
  },                                                                                                                   // 1103
                                                                                                                       // 1104
  // let this network gate a connection                                                                                // 1105
  gate: function(connection, type) {                                                                                   // 1106
    if (this.optimized)                                                                                                // 1107
      this.optimized.reset();                                                                                          // 1108
    this.layers.output.gate(connection, type);                                                                         // 1109
  },                                                                                                                   // 1110
                                                                                                                       // 1111
  // clear all elegibility traces and extended elegibility traces (the network forgets its context, but not what was trained)
  clear: function() {                                                                                                  // 1113
                                                                                                                       // 1114
    this.restore();                                                                                                    // 1115
                                                                                                                       // 1116
    var inputLayer = this.layers.input,                                                                                // 1117
      outputLayer = this.layers.output;                                                                                // 1118
                                                                                                                       // 1119
    inputLayer.clear();                                                                                                // 1120
    for (var layer in this.layers.hidden) {                                                                            // 1121
      var hiddenLayer = this.layers.hidden[layer];                                                                     // 1122
      hiddenLayer.clear();                                                                                             // 1123
    }                                                                                                                  // 1124
    outputLayer.clear();                                                                                               // 1125
                                                                                                                       // 1126
    if (this.optimized)                                                                                                // 1127
      this.optimized.reset();                                                                                          // 1128
  },                                                                                                                   // 1129
                                                                                                                       // 1130
  // reset all weights and clear all traces (ends up like a new network)                                               // 1131
  reset: function() {                                                                                                  // 1132
                                                                                                                       // 1133
    this.restore();                                                                                                    // 1134
                                                                                                                       // 1135
    var inputLayer = this.layers.input,                                                                                // 1136
      outputLayer = this.layers.output;                                                                                // 1137
                                                                                                                       // 1138
    inputLayer.reset();                                                                                                // 1139
    for (var layer in this.layers.hidden) {                                                                            // 1140
      var hiddenLayer = this.layers.hidden[layer];                                                                     // 1141
      hiddenLayer.reset();                                                                                             // 1142
    }                                                                                                                  // 1143
    outputLayer.reset();                                                                                               // 1144
                                                                                                                       // 1145
    if (this.optimized)                                                                                                // 1146
      this.optimized.reset();                                                                                          // 1147
  },                                                                                                                   // 1148
                                                                                                                       // 1149
  // hardcodes the behaviour of the whole network into a single optimized function                                     // 1150
  optimize: function() {                                                                                               // 1151
                                                                                                                       // 1152
    var optimized = {};                                                                                                // 1153
    var neurons = this.neurons();                                                                                      // 1154
                                                                                                                       // 1155
    for (var i in neurons) {                                                                                           // 1156
      var neuron = neurons[i].neuron;                                                                                  // 1157
      while (neuron.neuron)                                                                                            // 1158
        neuron = neuron.neuron;                                                                                        // 1159
      optimized = neuron.optimize(optimized);                                                                          // 1160
    }                                                                                                                  // 1161
    optimized.propagation_sentences.reverse();                                                                         // 1162
                                                                                                                       // 1163
    var hardcode = "";                                                                                                 // 1164
    hardcode += "var F = Float64Array ? new Float64Array(" + optimized.memory +                                        // 1165
      ") : []; ";                                                                                                      // 1166
    for (var i in optimized.variables)                                                                                 // 1167
      hardcode += "F[" + optimized.variables[i].id + "] = " + (optimized.variables[                                    // 1168
        i].value || 0) + "; ";                                                                                         // 1169
    hardcode += "var activate = function(input){\n";                                                                   // 1170
    for (var i in optimized.inputs)                                                                                    // 1171
      hardcode += "F[" + optimized.inputs[i] + "] = input[" + i + "]; ";                                               // 1172
    for (var i in optimized.activation_sentences) {                                                                    // 1173
      hardcode += optimized.activation_sentences[i].join(" ");                                                         // 1174
      hardcode += optimized.trace_sentences[i].join(" ");                                                              // 1175
    }                                                                                                                  // 1176
    hardcode += " var output = []; "                                                                                   // 1177
    for (var i in optimized.outputs)                                                                                   // 1178
      hardcode += "output[" + i + "] = F[" + optimized.outputs[i] + "]; ";                                             // 1179
    hardcode += "return output; }; "                                                                                   // 1180
    hardcode += "var propagate = function(rate, target){\n";                                                           // 1181
    hardcode += "F[" + optimized.variables.rate.id + "] = rate; ";                                                     // 1182
    for (var i in optimized.targets)                                                                                   // 1183
      hardcode += "F[" + optimized.targets[i] + "] = target[" + i + "]; ";                                             // 1184
    for (var i in optimized.propagation_sentences)                                                                     // 1185
      hardcode += optimized.propagation_sentences[i].join(" ") + " ";                                                  // 1186
    hardcode += " };\n";                                                                                               // 1187
    hardcode +=                                                                                                        // 1188
      "var ownership = function(memoryBuffer){\nF = memoryBuffer;\nthis.memory = F;\n};\n";                            // 1189
    hardcode +=                                                                                                        // 1190
      "return {\nmemory: F,\nactivate: activate,\npropagate: propagate,\nownership: ownership\n};";                    // 1191
    hardcode = hardcode.split(";").join(";\n");                                                                        // 1192
                                                                                                                       // 1193
    var constructor = new Function(hardcode);                                                                          // 1194
                                                                                                                       // 1195
    var network = constructor();                                                                                       // 1196
    network.data = {                                                                                                   // 1197
      variables: optimized.variables,                                                                                  // 1198
      activate: optimized.activation_sentences,                                                                        // 1199
      propagate: optimized.propagation_sentences,                                                                      // 1200
      trace: optimized.trace_sentences,                                                                                // 1201
      inputs: optimized.inputs,                                                                                        // 1202
      outputs: optimized.outputs,                                                                                      // 1203
      check_activation: this.activate,                                                                                 // 1204
      check_propagation: this.propagate                                                                                // 1205
    }                                                                                                                  // 1206
    network.reset = function() {                                                                                       // 1207
      if (this.optimized) {                                                                                            // 1208
        this.optimized = null;                                                                                         // 1209
        this.activate = network.data.check_activation;                                                                 // 1210
        this.propagate = network.data.check_propagation;                                                               // 1211
      }                                                                                                                // 1212
    }                                                                                                                  // 1213
                                                                                                                       // 1214
    this.optimized = network;                                                                                          // 1215
    this.activate = network.activate;                                                                                  // 1216
    this.propagate = network.propagate;                                                                                // 1217
  },                                                                                                                   // 1218
                                                                                                                       // 1219
  // restores all the values from the optimized network the their respective objects in order to manipulate the network
  restore: function() {                                                                                                // 1221
    if (!this.optimized)                                                                                               // 1222
      return;                                                                                                          // 1223
                                                                                                                       // 1224
    var optimized = this.optimized;                                                                                    // 1225
                                                                                                                       // 1226
    var getValue = function() {                                                                                        // 1227
      var args = Array.prototype.slice.call(arguments);                                                                // 1228
                                                                                                                       // 1229
      var unit = args.shift();                                                                                         // 1230
      var prop = args.pop();                                                                                           // 1231
                                                                                                                       // 1232
      var id = prop + '_';                                                                                             // 1233
      for (var property in args)                                                                                       // 1234
        id += args[property] + '_';                                                                                    // 1235
      id += unit.ID;                                                                                                   // 1236
                                                                                                                       // 1237
      var memory = optimized.memory;                                                                                   // 1238
      var variables = optimized.data.variables;                                                                        // 1239
                                                                                                                       // 1240
      if (id in variables)                                                                                             // 1241
        return memory[variables[id].id];                                                                               // 1242
      return 0;                                                                                                        // 1243
    }                                                                                                                  // 1244
                                                                                                                       // 1245
    var list = this.neurons();                                                                                         // 1246
                                                                                                                       // 1247
    // link id's to positions in the array                                                                             // 1248
    var ids = {};                                                                                                      // 1249
    for (var i in list) {                                                                                              // 1250
      var neuron = list[i].neuron;                                                                                     // 1251
      while (neuron.neuron)                                                                                            // 1252
        neuron = neuron.neuron;                                                                                        // 1253
                                                                                                                       // 1254
      neuron.state = getValue(neuron, 'state');                                                                        // 1255
      neuron.old = getValue(neuron, 'old');                                                                            // 1256
      neuron.activation = getValue(neuron, 'activation');                                                              // 1257
      neuron.bias = getValue(neuron, 'bias');                                                                          // 1258
                                                                                                                       // 1259
      for (var input in neuron.trace.elegibility)                                                                      // 1260
        neuron.trace.elegibility[input] = getValue(neuron, 'trace',                                                    // 1261
          'elegibility', input);                                                                                       // 1262
                                                                                                                       // 1263
      for (var gated in neuron.trace.extended)                                                                         // 1264
        for (var input in neuron.trace.extended[gated])                                                                // 1265
          neuron.trace.extended[gated][input] = getValue(neuron, 'trace',                                              // 1266
            'extended', gated, input);                                                                                 // 1267
    }                                                                                                                  // 1268
                                                                                                                       // 1269
    // get connections                                                                                                 // 1270
    for (var i in list) {                                                                                              // 1271
      var neuron = list[i].neuron;                                                                                     // 1272
      while (neuron.neuron)                                                                                            // 1273
        neuron = neuron.neuron;                                                                                        // 1274
                                                                                                                       // 1275
      for (var j in neuron.connections.projected) {                                                                    // 1276
        var connection = neuron.connections.projected[j];                                                              // 1277
        connection.weight = getValue(connection, 'weight');                                                            // 1278
        connection.gain = getValue(connection, 'gain');                                                                // 1279
      }                                                                                                                // 1280
    }                                                                                                                  // 1281
  },                                                                                                                   // 1282
                                                                                                                       // 1283
  // returns all the neurons in the network                                                                            // 1284
  neurons: function() {                                                                                                // 1285
                                                                                                                       // 1286
    var neurons = [];                                                                                                  // 1287
                                                                                                                       // 1288
    var inputLayer = this.layers.input.neurons(),                                                                      // 1289
      outputLayer = this.layers.output.neurons();                                                                      // 1290
                                                                                                                       // 1291
    for (var neuron in inputLayer)                                                                                     // 1292
      neurons.push({                                                                                                   // 1293
        neuron: inputLayer[neuron],                                                                                    // 1294
        layer: 'input'                                                                                                 // 1295
      });                                                                                                              // 1296
                                                                                                                       // 1297
    for (var layer in this.layers.hidden) {                                                                            // 1298
      var hiddenLayer = this.layers.hidden[layer].neurons();                                                           // 1299
      for (var neuron in hiddenLayer)                                                                                  // 1300
        neurons.push({                                                                                                 // 1301
          neuron: hiddenLayer[neuron],                                                                                 // 1302
          layer: layer                                                                                                 // 1303
        });                                                                                                            // 1304
    }                                                                                                                  // 1305
    for (var neuron in outputLayer)                                                                                    // 1306
      neurons.push({                                                                                                   // 1307
        neuron: outputLayer[neuron],                                                                                   // 1308
        layer: 'output'                                                                                                // 1309
      });                                                                                                              // 1310
                                                                                                                       // 1311
    return neurons;                                                                                                    // 1312
  },                                                                                                                   // 1313
                                                                                                                       // 1314
  // returns number of inputs of the network                                                                           // 1315
  inputs: function() {                                                                                                 // 1316
    return this.layers.input.size;                                                                                     // 1317
  },                                                                                                                   // 1318
                                                                                                                       // 1319
  // returns number of outputs of hte network                                                                          // 1320
  outputs: function() {                                                                                                // 1321
    return this.layers.output.size;                                                                                    // 1322
  },                                                                                                                   // 1323
                                                                                                                       // 1324
  // sets the layers of the network                                                                                    // 1325
  set: function(layers) {                                                                                              // 1326
                                                                                                                       // 1327
    this.layers = layers;                                                                                              // 1328
    if (this.optimized)                                                                                                // 1329
      this.optimized.reset();                                                                                          // 1330
  },                                                                                                                   // 1331
                                                                                                                       // 1332
  // returns a json that represents all the neurons and connections of the network                                     // 1333
  toJSON: function(ignoreTraces) {                                                                                     // 1334
                                                                                                                       // 1335
    this.restore();                                                                                                    // 1336
                                                                                                                       // 1337
    var list = this.neurons();                                                                                         // 1338
    var neurons = [];                                                                                                  // 1339
    var connections = [];                                                                                              // 1340
                                                                                                                       // 1341
    // link id's to positions in the array                                                                             // 1342
    var ids = {};                                                                                                      // 1343
    for (var i in list) {                                                                                              // 1344
      var neuron = list[i].neuron;                                                                                     // 1345
      while (neuron.neuron)                                                                                            // 1346
        neuron = neuron.neuron;                                                                                        // 1347
      ids[neuron.ID] = i;                                                                                              // 1348
                                                                                                                       // 1349
      var copy = {                                                                                                     // 1350
        trace: {                                                                                                       // 1351
          elegibility: {},                                                                                             // 1352
          extended: {}                                                                                                 // 1353
        },                                                                                                             // 1354
        state: neuron.state,                                                                                           // 1355
        old: neuron.old,                                                                                               // 1356
        activation: neuron.activation,                                                                                 // 1357
        bias: neuron.bias,                                                                                             // 1358
        layer: list[i].layer                                                                                           // 1359
      };                                                                                                               // 1360
                                                                                                                       // 1361
      copy.squash = neuron.squash == Neuron.squash.LOGISTIC ? "LOGISTIC" :                                             // 1362
        neuron.squash == Neuron.squash.TANH ? "TANH" :                                                                 // 1363
        neuron.squash == Neuron.squash.IDENTITY ? "IDENTITY" :                                                         // 1364
        neuron.squash == Neuron.squash.HLIM ? "HLIM" :                                                                 // 1365
        null;                                                                                                          // 1366
                                                                                                                       // 1367
      neurons.push(copy);                                                                                              // 1368
    }                                                                                                                  // 1369
                                                                                                                       // 1370
    if (!ignoreTraces)                                                                                                 // 1371
      for (var i in neurons) {                                                                                         // 1372
        var copy = neurons[i];                                                                                         // 1373
                                                                                                                       // 1374
        for (var input in neuron.trace.elegibility)                                                                    // 1375
          copy.trace.elegibility[input] = neuron.trace.elegibility[input];                                             // 1376
                                                                                                                       // 1377
        for (var gated in neuron.trace.extended) {                                                                     // 1378
          copy.trace.extended[gated] = {};                                                                             // 1379
          for (var input in neuron.trace.extended[gated])                                                              // 1380
            copy.trace.extended[ids[gated]][input] = neuron.trace.extended[                                            // 1381
              gated][input];                                                                                           // 1382
        }                                                                                                              // 1383
      }                                                                                                                // 1384
                                                                                                                       // 1385
    // get connections                                                                                                 // 1386
    for (var i in list) {                                                                                              // 1387
      var neuron = list[i].neuron;                                                                                     // 1388
      while (neuron.neuron)                                                                                            // 1389
        neuron = neuron.neuron;                                                                                        // 1390
                                                                                                                       // 1391
      for (var j in neuron.connections.projected) {                                                                    // 1392
        var connection = neuron.connections.projected[j];                                                              // 1393
        connections.push({                                                                                             // 1394
          from: ids[connection.from.ID],                                                                               // 1395
          to: ids[connection.to.ID],                                                                                   // 1396
          weight: connection.weight,                                                                                   // 1397
          gater: connection.gater ? ids[connection.gater.ID] : null,                                                   // 1398
        });                                                                                                            // 1399
      }                                                                                                                // 1400
      if (neuron.selfconnected())                                                                                      // 1401
        connections.push({                                                                                             // 1402
          from: ids[neuron.ID],                                                                                        // 1403
          to: ids[neuron.ID],                                                                                          // 1404
          weight: neuron.selfconnection.weight,                                                                        // 1405
          gater: neuron.selfconnection.gater ? ids[neuron.selfconnection.gater                                         // 1406
            .ID] : null,                                                                                               // 1407
        });                                                                                                            // 1408
    }                                                                                                                  // 1409
                                                                                                                       // 1410
    return {                                                                                                           // 1411
      neurons: neurons,                                                                                                // 1412
      connections: connections                                                                                         // 1413
    }                                                                                                                  // 1414
  },                                                                                                                   // 1415
                                                                                                                       // 1416
  // returns a function that works as the activation of the network and can be used without depending on the library   // 1417
  standalone: function() {                                                                                             // 1418
    if (!this.optimized)                                                                                               // 1419
      this.optimize();                                                                                                 // 1420
                                                                                                                       // 1421
    var data = this.optimized.data;                                                                                    // 1422
                                                                                                                       // 1423
    // build activation function                                                                                       // 1424
    var activation = "function (input) {\n";                                                                           // 1425
                                                                                                                       // 1426
    // build inputs                                                                                                    // 1427
    for (var i in data.inputs)                                                                                         // 1428
      activation += "F[" + data.inputs[i] + "] = input[" + i + "];\n";                                                 // 1429
                                                                                                                       // 1430
    // build network activation                                                                                        // 1431
    for (var neuron in data.activate)                                                                                  // 1432
      for (var sentence in data.activate[neuron])                                                                      // 1433
        activation += data.activate[neuron][sentence] + "\n";                                                          // 1434
                                                                                                                       // 1435
    // build outputs                                                                                                   // 1436
    activation += "var output = [];\n";                                                                                // 1437
    for (var i in data.outputs)                                                                                        // 1438
      activation += "output[" + i + "] = F[" + data.outputs[i] + "];\n";                                               // 1439
    activation += "return output;\n}";                                                                                 // 1440
                                                                                                                       // 1441
    // reference all the positions in memory                                                                           // 1442
    var memory = activation.match(/F\[(\d+)\]/g);                                                                      // 1443
    var dimension = 0;                                                                                                 // 1444
    var ids = {};                                                                                                      // 1445
    for (var address in memory) {                                                                                      // 1446
      var tmp = memory[address].match(/\d+/)[0];                                                                       // 1447
      if (!(tmp in ids)) {                                                                                             // 1448
        ids[tmp] = dimension++;                                                                                        // 1449
      }                                                                                                                // 1450
    }                                                                                                                  // 1451
    var hardcode = "F = {\n";                                                                                          // 1452
    for (var i in ids)                                                                                                 // 1453
      hardcode += ids[i] + ": " + this.optimized.memory[i] + ",\n";                                                    // 1454
    hardcode = hardcode.substring(0, hardcode.length - 2) + "\n};\n";                                                  // 1455
    hardcode = "var run = " + activation.replace(/F\[(\d+)]/g, function(                                               // 1456
      index) {                                                                                                         // 1457
      return 'F[' + ids[index.match(/\d+/)[0]] + ']'                                                                   // 1458
    }).replace("{\n", "{\n" + hardcode + "") + ";\n";                                                                  // 1459
    hardcode += "return run";                                                                                          // 1460
                                                                                                                       // 1461
    // return standalone function                                                                                      // 1462
    return new Function(hardcode)();                                                                                   // 1463
  },                                                                                                                   // 1464
                                                                                                                       // 1465
  worker: function() {                                                                                                 // 1466
    if (!this.optimized)                                                                                               // 1467
      this.optimize();                                                                                                 // 1468
                                                                                                                       // 1469
    var hardcode = "var inputs = " + this.optimized.data.inputs.length +                                               // 1470
      ";\n";                                                                                                           // 1471
    hardcode += "var outputs = " + this.optimized.data.outputs.length +                                                // 1472
      ";\n";                                                                                                           // 1473
    hardcode += "var F = null;\n";                                                                                     // 1474
    hardcode += "var activate = " + this.optimized.activate.toString() +                                               // 1475
      ";\n";                                                                                                           // 1476
    hardcode += "var propagate = " + this.optimized.propagate.toString() +                                             // 1477
      ";\n";                                                                                                           // 1478
    hardcode += "onmessage = function(e){\n";                                                                          // 1479
    hardcode += "F = e.data.memoryBuffer;\n";                                                                          // 1480
    hardcode += "if (e.data.action == 'activate'){\n";                                                                 // 1481
    hardcode += "if (e.data.input.length == inputs){\n";                                                               // 1482
    hardcode +=                                                                                                        // 1483
      "postMessage( { action: 'activate', output: activate(e.data.input), memoryBuffer: F }, [F.buffer]);\n";          // 1484
    hardcode += "}\n}\nelse if (e.data.action == 'propagate'){\n";                                                     // 1485
    hardcode += "propagate(e.data.rate, e.data.target);\n";                                                            // 1486
    hardcode +=                                                                                                        // 1487
      "postMessage({ action: 'propagate', memoryBuffer: F }, [F.buffer]);\n";                                          // 1488
    hardcode += "}\n}\n";                                                                                              // 1489
                                                                                                                       // 1490
    var blob = new Blob([hardcode]);                                                                                   // 1491
    var blobURL = window.URL.createObjectURL(blob);                                                                    // 1492
                                                                                                                       // 1493
    return new Worker(blobURL);                                                                                        // 1494
  },                                                                                                                   // 1495
                                                                                                                       // 1496
  // returns a copy of the network                                                                                     // 1497
  clone: function(ignoreTraces) {                                                                                      // 1498
    return Network.fromJSON(this.toJSON(ignoreTraces));                                                                // 1499
  }                                                                                                                    // 1500
}                                                                                                                      // 1501
                                                                                                                       // 1502
// rebuild a network that has been stored in a json using the method toJson()                                          // 1503
Network.fromJSON = function(json) {                                                                                    // 1504
                                                                                                                       // 1505
  var neurons = [];                                                                                                    // 1506
                                                                                                                       // 1507
  var layers = {                                                                                                       // 1508
    input: new Layer(),                                                                                                // 1509
    hidden: [],                                                                                                        // 1510
    output: new Layer()                                                                                                // 1511
  }                                                                                                                    // 1512
                                                                                                                       // 1513
  for (var i in json.neurons) {                                                                                        // 1514
    var config = json.neurons[i];                                                                                      // 1515
                                                                                                                       // 1516
    var neuron = new Neuron();                                                                                         // 1517
    neuron.trace.elegibility = config.trace.elegibility;                                                               // 1518
    neuron.trace.extended = config.trace.extended;                                                                     // 1519
    neuron.state = config.state;                                                                                       // 1520
    neuron.old = config.old;                                                                                           // 1521
    neuron.activation = config.activation;                                                                             // 1522
    neuron.bias = config.bias;                                                                                         // 1523
    neuron.squash = config.squash in Neuron.squash ? Neuron.squash[config.squash] :                                    // 1524
      Neuron.squash.LOGISTIC;                                                                                          // 1525
    neurons.push(neuron);                                                                                              // 1526
                                                                                                                       // 1527
    if (config.layer == 'input')                                                                                       // 1528
      layers.input.add(neuron);                                                                                        // 1529
    else if (config.layer == 'output')                                                                                 // 1530
      layers.output.add(neuron);                                                                                       // 1531
    else {                                                                                                             // 1532
      if (typeof layers.hidden[config.layer] == 'undefined')                                                           // 1533
        layers.hidden[config.layer] = new Layer();                                                                     // 1534
      layers.hidden[config.layer].add(neuron);                                                                         // 1535
    }                                                                                                                  // 1536
  }                                                                                                                    // 1537
                                                                                                                       // 1538
  for (var i in json.connections) {                                                                                    // 1539
    var config = json.connections[i];                                                                                  // 1540
    var from = neurons[config.from];                                                                                   // 1541
    var to = neurons[config.to];                                                                                       // 1542
    var weight = config.weight                                                                                         // 1543
    var gater = neurons[config.gater];                                                                                 // 1544
                                                                                                                       // 1545
    var connection = from.project(to, weight);                                                                         // 1546
    if (gater)                                                                                                         // 1547
      gater.gate(connection);                                                                                          // 1548
  }                                                                                                                    // 1549
                                                                                                                       // 1550
  return new Network(layers);                                                                                          // 1551
}                                                                                                                      // 1552
                                                                                                                       // 1553
                                                                                                                       // 1554
/*******************************************************************************************                           // 1555
                                        TRAINER                                                                        // 1556
*******************************************************************************************/                           // 1557
                                                                                                                       // 1558
function Trainer(network, options) {                                                                                   // 1559
  options = options || {};                                                                                             // 1560
  this.network = network;                                                                                              // 1561
  this.rate = options.rate || .1;                                                                                      // 1562
  this.iterations = options.iterations || 100000;                                                                      // 1563
  this.error = options.error || .005                                                                                   // 1564
}                                                                                                                      // 1565
Trainer.prototype = {                                                                                                  // 1566
                                                                                                                       // 1567
  // trains any given set to a network                                                                                 // 1568
  train: function(set, options) {                                                                                      // 1569
                                                                                                                       // 1570
    var error = 1;                                                                                                     // 1571
    var iterations = 0;                                                                                                // 1572
    var input, output, target;                                                                                         // 1573
                                                                                                                       // 1574
    var start = Date.now();                                                                                            // 1575
                                                                                                                       // 1576
    if (options) {                                                                                                     // 1577
      if (options.shuffle) {                                                                                           // 1578
        //+ Jonas Raoni Soares Silva                                                                                   // 1579
        //@ http://jsfromhell.com/array/shuffle [v1.0]                                                                 // 1580
        function shuffle(o) { //v1.0                                                                                   // 1581
          for (var j, x, i = o.length; i; j = Math.floor(Math.random() *                                               // 1582
              i), x = o[--i], o[i] = o[j], o[j] = x);                                                                  // 1583
          return o;                                                                                                    // 1584
        };                                                                                                             // 1585
      }                                                                                                                // 1586
      if (options.iterations)                                                                                          // 1587
        this.iterations = options.iterations;                                                                          // 1588
      if (options.error)                                                                                               // 1589
        this.error = options.error;                                                                                    // 1590
      if (options.rate)                                                                                                // 1591
        this.rate = options.rate;                                                                                      // 1592
    }                                                                                                                  // 1593
                                                                                                                       // 1594
    while (iterations < this.iterations && error > this.error) {                                                       // 1595
      error = 0;                                                                                                       // 1596
                                                                                                                       // 1597
      for (var train in set) {                                                                                         // 1598
        input = set[train].input;                                                                                      // 1599
        target = set[train].output;                                                                                    // 1600
                                                                                                                       // 1601
        output = this.network.activate(input);                                                                         // 1602
        this.network.propagate(this.rate, target);                                                                     // 1603
                                                                                                                       // 1604
        var delta = 0;                                                                                                 // 1605
        for (var i in output)                                                                                          // 1606
          delta += Math.pow(target[i] - output[i], 2);                                                                 // 1607
                                                                                                                       // 1608
        error += delta / output.length;                                                                                // 1609
      }                                                                                                                // 1610
                                                                                                                       // 1611
      // check error                                                                                                   // 1612
      iterations++;                                                                                                    // 1613
      error /= set.length;                                                                                             // 1614
                                                                                                                       // 1615
      if (options) {                                                                                                   // 1616
        if (options.customLog && options.customLog.every && iterations %                                               // 1617
          options.customLog.every == 0)                                                                                // 1618
          options.customLog.do({                                                                                       // 1619
            error: error,                                                                                              // 1620
            iterations: iterations                                                                                     // 1621
          });                                                                                                          // 1622
        else if (options.log && iterations % options.log == 0) {                                                       // 1623
          console.log('iterations', iterations, 'error', error);                                                       // 1624
        };                                                                                                             // 1625
        if (options.shuffle)                                                                                           // 1626
          shuffle(set);                                                                                                // 1627
      }                                                                                                                // 1628
    }                                                                                                                  // 1629
                                                                                                                       // 1630
    var results = {                                                                                                    // 1631
      error: error,                                                                                                    // 1632
      iterations: iterations,                                                                                          // 1633
      time: Date.now() - start                                                                                         // 1634
    }                                                                                                                  // 1635
                                                                                                                       // 1636
    return results;                                                                                                    // 1637
  },                                                                                                                   // 1638
                                                                                                                       // 1639
  // trains an XOR to the network                                                                                      // 1640
  XOR: function(options) {                                                                                             // 1641
                                                                                                                       // 1642
    if (this.network.inputs() != 2 || this.network.outputs() != 1)                                                     // 1643
      throw "Error: Incompatible network (2 inputs, 1 output)";                                                        // 1644
                                                                                                                       // 1645
    var defaults = {                                                                                                   // 1646
      iterations: 100000,                                                                                              // 1647
      log: false,                                                                                                      // 1648
      shuffle: true                                                                                                    // 1649
    }                                                                                                                  // 1650
                                                                                                                       // 1651
    if (options)                                                                                                       // 1652
      for (var i in options)                                                                                           // 1653
        defaults[i] = options[i];                                                                                      // 1654
                                                                                                                       // 1655
    return this.train([{                                                                                               // 1656
      input: [0, 0],                                                                                                   // 1657
      output: [0]                                                                                                      // 1658
    }, {                                                                                                               // 1659
      input: [1, 0],                                                                                                   // 1660
      output: [1]                                                                                                      // 1661
    }, {                                                                                                               // 1662
      input: [0, 1],                                                                                                   // 1663
      output: [1]                                                                                                      // 1664
    }, {                                                                                                               // 1665
      input: [1, 1],                                                                                                   // 1666
      output: [0]                                                                                                      // 1667
    }], defaults);                                                                                                     // 1668
  },                                                                                                                   // 1669
                                                                                                                       // 1670
  // trains the network to pass a Distracted Sequence Recall test                                                      // 1671
  DSR: function(options) {                                                                                             // 1672
    options = options || {};                                                                                           // 1673
                                                                                                                       // 1674
    var targets = options.targets || [2, 4, 7, 8];                                                                     // 1675
    var distractors = options.distractors || [3, 5, 6, 9];                                                             // 1676
    var prompts = options.prompts || [0, 1];                                                                           // 1677
    var length = options.length || 24;                                                                                 // 1678
    var criterion = options.success || 0.95;                                                                           // 1679
    var iterations = options.iterations || 100000;                                                                     // 1680
    var rate = options.rate || .1;                                                                                     // 1681
    var log = options.log || 0;                                                                                        // 1682
    var customLog = options.customLog || {};                                                                           // 1683
                                                                                                                       // 1684
    var trial = correct = i = j = success = 0,                                                                         // 1685
      error = 1,                                                                                                       // 1686
      symbols = targets.length + distractors.length + prompts.length;                                                  // 1687
                                                                                                                       // 1688
    var noRepeat = function(range, avoid) {                                                                            // 1689
      var number = Math.random() * range | 0;                                                                          // 1690
      var used = false;                                                                                                // 1691
      for (var i in avoid)                                                                                             // 1692
        if (number == avoid[i])                                                                                        // 1693
          used = true;                                                                                                 // 1694
      return used ? noRepeat(range, avoid) : number;                                                                   // 1695
    }                                                                                                                  // 1696
                                                                                                                       // 1697
    var equal = function(prediction, output) {                                                                         // 1698
      for (var i in prediction)                                                                                        // 1699
        if (Math.round(prediction[i]) != output[i])                                                                    // 1700
          return false;                                                                                                // 1701
      return true;                                                                                                     // 1702
    }                                                                                                                  // 1703
                                                                                                                       // 1704
    var start = Date.now();                                                                                            // 1705
                                                                                                                       // 1706
    while (trial < iterations && (success < criterion || trial % 1000 != 0)) {                                         // 1707
      // generate sequence                                                                                             // 1708
      var sequence = [],                                                                                               // 1709
        sequenceLength = length - prompts.length;                                                                      // 1710
      for (i = 0; i < sequenceLength; i++) {                                                                           // 1711
        var any = Math.random() * distractors.length | 0;                                                              // 1712
        sequence.push(distractors[any]);                                                                               // 1713
      }                                                                                                                // 1714
      var indexes = [],                                                                                                // 1715
        positions = [];                                                                                                // 1716
      for (i = 0; i < prompts.length; i++) {                                                                           // 1717
        indexes.push(Math.random() * targets.length | 0);                                                              // 1718
        positions.push(noRepeat(sequenceLength, positions));                                                           // 1719
      }                                                                                                                // 1720
      positions = positions.sort();                                                                                    // 1721
      for (i = 0; i < prompts.length; i++) {                                                                           // 1722
        sequence[positions[i]] = targets[indexes[i]];                                                                  // 1723
        sequence.push(prompts[i]);                                                                                     // 1724
      }                                                                                                                // 1725
                                                                                                                       // 1726
      //train sequence                                                                                                 // 1727
      var targetsCorrect = distractorsCorrect = 0;                                                                     // 1728
      error = 0;                                                                                                       // 1729
      for (i = 0; i < length; i++) {                                                                                   // 1730
        // generate input from sequence                                                                                // 1731
        var input = [];                                                                                                // 1732
        for (j = 0; j < symbols; j++)                                                                                  // 1733
          input[j] = 0;                                                                                                // 1734
        input[sequence[i]] = 1;                                                                                        // 1735
                                                                                                                       // 1736
        // generate target output                                                                                      // 1737
        var output = [];                                                                                               // 1738
        for (j = 0; j < targets.length; j++)                                                                           // 1739
          output[j] = 0;                                                                                               // 1740
                                                                                                                       // 1741
        if (i >= sequenceLength) {                                                                                     // 1742
          var index = i - sequenceLength;                                                                              // 1743
          output[indexes[index]] = 1;                                                                                  // 1744
        }                                                                                                              // 1745
                                                                                                                       // 1746
        // check result                                                                                                // 1747
        var prediction = this.network.activate(input);                                                                 // 1748
                                                                                                                       // 1749
        if (equal(prediction, output))                                                                                 // 1750
          if (i < sequenceLength)                                                                                      // 1751
            distractorsCorrect++;                                                                                      // 1752
          else                                                                                                         // 1753
            targetsCorrect++;                                                                                          // 1754
        else {                                                                                                         // 1755
          this.network.propagate(rate, output);                                                                        // 1756
        }                                                                                                              // 1757
                                                                                                                       // 1758
        var delta = 0;                                                                                                 // 1759
        for (var j in prediction)                                                                                      // 1760
          delta += Math.pow(output[j] - prediction[j], 2);                                                             // 1761
        error += delta / this.network.outputs();                                                                       // 1762
                                                                                                                       // 1763
        if (distractorsCorrect + targetsCorrect == length)                                                             // 1764
          correct++;                                                                                                   // 1765
      }                                                                                                                // 1766
                                                                                                                       // 1767
      // calculate error                                                                                               // 1768
      if (trial % 1000 == 0)                                                                                           // 1769
        correct = 0;                                                                                                   // 1770
      trial++;                                                                                                         // 1771
      var divideError = trial % 1000;                                                                                  // 1772
      divideError = divideError == 0 ? 1000 : divideError;                                                             // 1773
      success = correct / divideError;                                                                                 // 1774
      error /= length;                                                                                                 // 1775
                                                                                                                       // 1776
      // log                                                                                                           // 1777
      if (log && trial % log == 0)                                                                                     // 1778
        console.log("iterations:", trial, " success:", success, " correct:",                                           // 1779
          correct, " time:", Date.now() - start, " error:", error);                                                    // 1780
      if (customLog.do && customLog.every && trial % customLog.every == 0)                                             // 1781
        customLog.do({                                                                                                 // 1782
          iterations: trial,                                                                                           // 1783
          success: success,                                                                                            // 1784
          error: error,                                                                                                // 1785
          time: Date.now() - start,                                                                                    // 1786
          correct: correct                                                                                             // 1787
        });                                                                                                            // 1788
    }                                                                                                                  // 1789
                                                                                                                       // 1790
    return {                                                                                                           // 1791
      iterations: trial,                                                                                               // 1792
      success: success,                                                                                                // 1793
      error: error,                                                                                                    // 1794
      time: Date.now() - start                                                                                         // 1795
    }                                                                                                                  // 1796
  },                                                                                                                   // 1797
                                                                                                                       // 1798
  // train the network to learn an Embeded Reber Grammar                                                               // 1799
  ERG: function(options) {                                                                                             // 1800
                                                                                                                       // 1801
    options = options || {};                                                                                           // 1802
    var iterations = options.iterations || 150000;                                                                     // 1803
    var criterion = options.error || .05;                                                                              // 1804
    var rate = options.rate || .1;                                                                                     // 1805
    var log = options.log || 500;                                                                                      // 1806
                                                                                                                       // 1807
    // gramar node                                                                                                     // 1808
    var Node = function() {                                                                                            // 1809
      this.paths = [];                                                                                                 // 1810
    }                                                                                                                  // 1811
    Node.prototype = {                                                                                                 // 1812
      connect: function(node, value) {                                                                                 // 1813
        this.paths.push({                                                                                              // 1814
          node: node,                                                                                                  // 1815
          value: value                                                                                                 // 1816
        });                                                                                                            // 1817
        return this;                                                                                                   // 1818
      },                                                                                                               // 1819
      any: function() {                                                                                                // 1820
        if (this.paths.length == 0)                                                                                    // 1821
          return false;                                                                                                // 1822
        var index = Math.random() * this.paths.length | 0;                                                             // 1823
        return this.paths[index];                                                                                      // 1824
      },                                                                                                               // 1825
      test: function(value) {                                                                                          // 1826
        for (var i in this.paths)                                                                                      // 1827
          if (this.paths[i].value == value)                                                                            // 1828
            return this.paths[i];                                                                                      // 1829
        return false;                                                                                                  // 1830
      }                                                                                                                // 1831
    }                                                                                                                  // 1832
                                                                                                                       // 1833
    var reberGrammar = function() {                                                                                    // 1834
                                                                                                                       // 1835
      // build a reber grammar                                                                                         // 1836
      var output = new Node();                                                                                         // 1837
      var n1 = (new Node()).connect(output, "E");                                                                      // 1838
      var n2 = (new Node()).connect(n1, "S");                                                                          // 1839
      var n3 = (new Node()).connect(n1, "V").connect(n2, "P");                                                         // 1840
      var n4 = (new Node()).connect(n2, "X")                                                                           // 1841
      n4.connect(n4, "S");                                                                                             // 1842
      var n5 = (new Node()).connect(n3, "V")                                                                           // 1843
      n5.connect(n5, "T");                                                                                             // 1844
      n2.connect(n5, "X")                                                                                              // 1845
      var n6 = (new Node()).connect(n4, "T").connect(n5, "P");                                                         // 1846
      var input = (new Node()).connect(n6, "B")                                                                        // 1847
                                                                                                                       // 1848
      return {                                                                                                         // 1849
        input: input,                                                                                                  // 1850
        output: output                                                                                                 // 1851
      }                                                                                                                // 1852
    }                                                                                                                  // 1853
                                                                                                                       // 1854
    // build an embeded reber grammar                                                                                  // 1855
    var embededReberGrammar = function() {                                                                             // 1856
      var reber1 = reberGrammar();                                                                                     // 1857
      var reber2 = reberGrammar();                                                                                     // 1858
                                                                                                                       // 1859
      var output = new Node();                                                                                         // 1860
      var n1 = (new Node).connect(output, "E");                                                                        // 1861
      reber1.output.connect(n1, "T");                                                                                  // 1862
      reber2.output.connect(n1, "P");                                                                                  // 1863
      var n2 = (new Node).connect(reber1.input, "P").connect(reber2.input,                                             // 1864
        "T");                                                                                                          // 1865
      var input = (new Node).connect(n2, "B");                                                                         // 1866
                                                                                                                       // 1867
      return {                                                                                                         // 1868
        input: input,                                                                                                  // 1869
        output: output                                                                                                 // 1870
      }                                                                                                                // 1871
                                                                                                                       // 1872
    }                                                                                                                  // 1873
                                                                                                                       // 1874
    // generate an ERG sequence                                                                                        // 1875
    var generate = function() {                                                                                        // 1876
      var node = embededReberGrammar().input;                                                                          // 1877
      var next = node.any();                                                                                           // 1878
      var str = "";                                                                                                    // 1879
      while (next) {                                                                                                   // 1880
        str += next.value;                                                                                             // 1881
        next = next.node.any();                                                                                        // 1882
      }                                                                                                                // 1883
      return str;                                                                                                      // 1884
    }                                                                                                                  // 1885
                                                                                                                       // 1886
    // test if a string matches an embeded reber grammar                                                               // 1887
    var test = function(str) {                                                                                         // 1888
      var node = embededReberGrammar().input;                                                                          // 1889
      var i = 0;                                                                                                       // 1890
      var ch = str.charAt(i);                                                                                          // 1891
      while (i < str.length) {                                                                                         // 1892
        var next = node.test(ch);                                                                                      // 1893
        if (!next)                                                                                                     // 1894
          return false;                                                                                                // 1895
        node = next.node;                                                                                              // 1896
        ch = str.charAt(++i);                                                                                          // 1897
      }                                                                                                                // 1898
      return true;                                                                                                     // 1899
    }                                                                                                                  // 1900
                                                                                                                       // 1901
    // helper to check if the output and the target vectors match                                                      // 1902
    var different = function(array1, array2) {                                                                         // 1903
      var max1 = 0;                                                                                                    // 1904
      var i1 = -1;                                                                                                     // 1905
      var max2 = 0;                                                                                                    // 1906
      var i2 = -1;                                                                                                     // 1907
      for (var i in array1) {                                                                                          // 1908
        if (array1[i] > max1) {                                                                                        // 1909
          max1 = array1[i];                                                                                            // 1910
          i1 = i;                                                                                                      // 1911
        }                                                                                                              // 1912
        if (array2[i] > max2) {                                                                                        // 1913
          max2 = array2[i];                                                                                            // 1914
          i2 = i;                                                                                                      // 1915
        }                                                                                                              // 1916
      }                                                                                                                // 1917
                                                                                                                       // 1918
      return i1 != i2;                                                                                                 // 1919
    }                                                                                                                  // 1920
                                                                                                                       // 1921
    var iteration = 0;                                                                                                 // 1922
    var error = 1;                                                                                                     // 1923
    var table = {                                                                                                      // 1924
      "B": 0,                                                                                                          // 1925
      "P": 1,                                                                                                          // 1926
      "T": 2,                                                                                                          // 1927
      "X": 3,                                                                                                          // 1928
      "S": 4,                                                                                                          // 1929
      "E": 5                                                                                                           // 1930
    }                                                                                                                  // 1931
                                                                                                                       // 1932
    var start = Date.now();                                                                                            // 1933
    while (iteration < iterations && error > criterion) {                                                              // 1934
      var i = 0;                                                                                                       // 1935
      error = 0;                                                                                                       // 1936
                                                                                                                       // 1937
      // ERG sequence to learn                                                                                         // 1938
      var sequence = generate();                                                                                       // 1939
                                                                                                                       // 1940
      // input                                                                                                         // 1941
      var read = sequence.charAt(i);                                                                                   // 1942
      // target                                                                                                        // 1943
      var predict = sequence.charAt(i + 1);                                                                            // 1944
                                                                                                                       // 1945
      // train                                                                                                         // 1946
      while (i < sequence.length - 1) {                                                                                // 1947
        var input = [];                                                                                                // 1948
        var target = [];                                                                                               // 1949
        for (var j = 0; j < 6; j++) {                                                                                  // 1950
          input[j] = 0;                                                                                                // 1951
          target[j] = 0;                                                                                               // 1952
        }                                                                                                              // 1953
        input[table[read]] = 1;                                                                                        // 1954
        target[table[predict]] = 1;                                                                                    // 1955
                                                                                                                       // 1956
        var output = this.network.activate(input);                                                                     // 1957
                                                                                                                       // 1958
        if (different(output, target))                                                                                 // 1959
          this.network.propagate(rate, target);                                                                        // 1960
                                                                                                                       // 1961
        read = sequence.charAt(++i);                                                                                   // 1962
        predict = sequence.charAt(i + 1);                                                                              // 1963
                                                                                                                       // 1964
        var delta = 0;                                                                                                 // 1965
        for (var k in output)                                                                                          // 1966
          delta += Math.pow(target[k] - output[k], 2)                                                                  // 1967
        delta /= output.length;                                                                                        // 1968
                                                                                                                       // 1969
        error += delta;                                                                                                // 1970
      }                                                                                                                // 1971
      error /= sequence.length;                                                                                        // 1972
      iteration++;                                                                                                     // 1973
      if (iteration % log == 0) {                                                                                      // 1974
        console.log("iterations:", iteration, " time:", Date.now() - start,                                            // 1975
          " error:", error);                                                                                           // 1976
      }                                                                                                                // 1977
    }                                                                                                                  // 1978
                                                                                                                       // 1979
    return {                                                                                                           // 1980
      iterations: iteration,                                                                                           // 1981
      error: error,                                                                                                    // 1982
      time: Date.now() - start,                                                                                        // 1983
      test: test,                                                                                                      // 1984
      generate: generate                                                                                               // 1985
    }                                                                                                                  // 1986
  }                                                                                                                    // 1987
};                                                                                                                     // 1988
                                                                                                                       // 1989
/*******************************************************************************************                           // 1990
                                        ARCHITECT                                                                      // 1991
*******************************************************************************************/                           // 1992
                                                                                                                       // 1993
// Colection of useful built-in architectures                                                                          // 1994
Architect = {                                                                                                          // 1995
                                                                                                                       // 1996
  // Multilayer Perceptron                                                                                             // 1997
  Perceptron: function Perceptron() {                                                                                  // 1998
                                                                                                                       // 1999
    var args = Array.prototype.slice.call(arguments); // convert arguments to Array                                    // 2000
    if (args.length < 3)                                                                                               // 2001
      throw "Error: not enough layers (minimum 3) !!";                                                                 // 2002
                                                                                                                       // 2003
    var inputs = args.shift(); // first argument                                                                       // 2004
    var outputs = args.pop(); // last argument                                                                         // 2005
    var layers = args; // all the arguments in the middle                                                              // 2006
                                                                                                                       // 2007
    var input = new Layer(inputs);                                                                                     // 2008
    var hidden = [];                                                                                                   // 2009
    var output = new Layer(outputs);                                                                                   // 2010
                                                                                                                       // 2011
    var previous = input;                                                                                              // 2012
                                                                                                                       // 2013
    // generate hidden layers                                                                                          // 2014
    for (level in layers) {                                                                                            // 2015
      var size = layers[level];                                                                                        // 2016
      var layer = new Layer(size);                                                                                     // 2017
      hidden.push(layer);                                                                                              // 2018
      previous.project(layer);                                                                                         // 2019
      previous = layer;                                                                                                // 2020
    }                                                                                                                  // 2021
    previous.project(output);                                                                                          // 2022
                                                                                                                       // 2023
    // set layers of the neural network                                                                                // 2024
    this.set({                                                                                                         // 2025
      input: input,                                                                                                    // 2026
      hidden: hidden,                                                                                                  // 2027
      output: output                                                                                                   // 2028
    });                                                                                                                // 2029
                                                                                                                       // 2030
    // trainer for the network                                                                                         // 2031
    this.trainer = new Trainer(this);                                                                                  // 2032
  },                                                                                                                   // 2033
                                                                                                                       // 2034
  // Multilayer Long Short-Term Memory                                                                                 // 2035
  LSTM: function LSTM() {                                                                                              // 2036
                                                                                                                       // 2037
    var args = Array.prototype.slice.call(arguments); // convert arguments to array                                    // 2038
    if (args.length < 3)                                                                                               // 2039
      throw "Error: not enough layers (minimum 3) !!";                                                                 // 2040
                                                                                                                       // 2041
    var inputs = args.shift();                                                                                         // 2042
    var outputs = args.pop();                                                                                          // 2043
    var layers = args;                                                                                                 // 2044
                                                                                                                       // 2045
    var inputLayer = new Layer(inputs);                                                                                // 2046
    var hiddenLayers = [];                                                                                             // 2047
    var outputLayer = new Layer(outputs);                                                                              // 2048
                                                                                                                       // 2049
    var previous = null;                                                                                               // 2050
                                                                                                                       // 2051
    // generate layers                                                                                                 // 2052
    for (var layer in layers) {                                                                                        // 2053
      // generate memory blocks (memory cell and respective gates)                                                     // 2054
      var size = layers[layer];                                                                                        // 2055
                                                                                                                       // 2056
      var inputGate = new Layer(size).set({                                                                            // 2057
        bias: 1                                                                                                        // 2058
      });                                                                                                              // 2059
      var forgetGate = new Layer(size).set({                                                                           // 2060
        bias: 1                                                                                                        // 2061
      });                                                                                                              // 2062
      var memoryCell = new Layer(size);                                                                                // 2063
      var outputGate = new Layer(size).set({                                                                           // 2064
        bias: 1                                                                                                        // 2065
      });                                                                                                              // 2066
                                                                                                                       // 2067
      hiddenLayers.push(inputGate);                                                                                    // 2068
      hiddenLayers.push(forgetGate);                                                                                   // 2069
      hiddenLayers.push(memoryCell);                                                                                   // 2070
      hiddenLayers.push(outputGate);                                                                                   // 2071
                                                                                                                       // 2072
      // connections from input layer                                                                                  // 2073
      var input = inputLayer.project(memoryCell);                                                                      // 2074
      inputLayer.project(inputGate);                                                                                   // 2075
      inputLayer.project(forgetGate);                                                                                  // 2076
      inputLayer.project(outputGate);                                                                                  // 2077
                                                                                                                       // 2078
      // connections from previous memory-block layer to this one                                                      // 2079
      if (previous != null) {                                                                                          // 2080
        var cell = previous.project(memoryCell);                                                                       // 2081
        previous.project(inputGate);                                                                                   // 2082
        previous.project(forgetGate);                                                                                  // 2083
        previous.project(outputGate);                                                                                  // 2084
      }                                                                                                                // 2085
                                                                                                                       // 2086
      // connections from memory cell                                                                                  // 2087
      var output = memoryCell.project(outputLayer);                                                                    // 2088
                                                                                                                       // 2089
      // self-connection                                                                                               // 2090
      var self = memoryCell.project(memoryCell, Layer.connectionType.ONE_TO_ONE);                                      // 2091
                                                                                                                       // 2092
      // peepholes                                                                                                     // 2093
      memoryCell.project(inputGate, Layer.connectionType.ONE_TO_ONE);                                                  // 2094
      memoryCell.project(forgetGate, Layer.connectionType.ONE_TO_ONE);                                                 // 2095
      memoryCell.project(outputGate, Layer.connectionType.ONE_TO_ONE);                                                 // 2096
                                                                                                                       // 2097
      // gates                                                                                                         // 2098
      inputGate.gate(input, Layer.gateType.INPUT);                                                                     // 2099
      forgetGate.gate(self, Layer.gateType.ONE_TO_ONE);                                                                // 2100
      outputGate.gate(output, Layer.gateType.OUTPUT);                                                                  // 2101
      if (previous != null)                                                                                            // 2102
        inputGate.gate(cell, Layer.gateType.INPUT);                                                                    // 2103
                                                                                                                       // 2104
      previous = memoryCell;                                                                                           // 2105
    }                                                                                                                  // 2106
                                                                                                                       // 2107
    // input to output direct connection                                                                               // 2108
    inputLayer.project(outputLayer);                                                                                   // 2109
                                                                                                                       // 2110
    // set the layers of the neural network                                                                            // 2111
    this.set({                                                                                                         // 2112
      input: inputLayer,                                                                                               // 2113
      hidden: hiddenLayers,                                                                                            // 2114
      output: outputLayer                                                                                              // 2115
    });                                                                                                                // 2116
                                                                                                                       // 2117
    // trainer                                                                                                         // 2118
    this.trainer = new Trainer(this);                                                                                  // 2119
  },                                                                                                                   // 2120
                                                                                                                       // 2121
  // Liquid State Machine                                                                                              // 2122
  Liquid: function Liquid(inputs, hidden, outputs, connections, gates) {                                               // 2123
                                                                                                                       // 2124
    // create layers                                                                                                   // 2125
    var inputLayer = new Layer(inputs);                                                                                // 2126
    var hiddenLayer = new Layer(hidden);                                                                               // 2127
    var outputLayer = new Layer(outputs);                                                                              // 2128
                                                                                                                       // 2129
    // make connections and gates randomly among the neurons                                                           // 2130
    var neurons = hiddenLayer.neurons();                                                                               // 2131
    var connectionList = [];                                                                                           // 2132
                                                                                                                       // 2133
    for (var i = 0; i < connections; i++) {                                                                            // 2134
      // connect two random neurons                                                                                    // 2135
      var from = Math.random() * neurons.length | 0;                                                                   // 2136
      var to = Math.random() * neurons.length | 0;                                                                     // 2137
      var connection = neurons[from].project(neurons[to]);                                                             // 2138
      connectionList.push(connection);                                                                                 // 2139
    }                                                                                                                  // 2140
                                                                                                                       // 2141
    for (var j = 0; j < gates; j++) {                                                                                  // 2142
      // pick a random gater neuron                                                                                    // 2143
      var gater = Math.random() * neurons.length | 0;                                                                  // 2144
      // pick a random connection to gate                                                                              // 2145
      var connection = Math.random() * connectionList.length | 0;                                                      // 2146
      // let the gater gate the connection                                                                             // 2147
      neurons[gater].gate(connectionList[connection]);                                                                 // 2148
    }                                                                                                                  // 2149
                                                                                                                       // 2150
    // connect the layers                                                                                              // 2151
    inputLayer.project(hiddenLayer);                                                                                   // 2152
    hiddenLayer.project(outputLayer);                                                                                  // 2153
                                                                                                                       // 2154
    // set the layers of the network                                                                                   // 2155
    this.set({                                                                                                         // 2156
      input: inputLayer,                                                                                               // 2157
      hidden: [hiddenLayer],                                                                                           // 2158
      output: outputLayer                                                                                              // 2159
    });                                                                                                                // 2160
                                                                                                                       // 2161
    // trainer                                                                                                         // 2162
    this.trainer = new Trainer(this);                                                                                  // 2163
  }                                                                                                                    // 2164
}                                                                                                                      // 2165
                                                                                                                       // 2166
// Extend prototype chain (so every architectures is an instance of Network)                                           // 2167
for (var architecture in Architect) {                                                                                  // 2168
  Architect[architecture].prototype = new Network();                                                                   // 2169
  Architect[architecture].prototype.constructor = Architect[architecture];                                             // 2170
}                                                                                                                      // 2171
                                                                                                                       // 2172
                                                                                                                       // 2173
/*******************************************************************************************                           // 2174
                                         EXPORT                                                                        // 2175
*******************************************************************************************/                           // 2176
                                                                                                                       // 2177
(function(global) {                                                                                                    // 2178
  var API = {                                                                                                          // 2179
    Neuron: Neuron,                                                                                                    // 2180
    Layer: Layer,                                                                                                      // 2181
    Network: Network,                                                                                                  // 2182
    Trainer: Trainer,                                                                                                  // 2183
    Architect: Architect                                                                                               // 2184
  }                                                                                                                    // 2185
  if (global.define && global.define.amd) {                                                                            // 2186
    define([], API);                                                                                                   // 2187
  } else if (typeof exports !== "undefined") {                                                                         // 2188
    module.exports = API;                                                                                              // 2189
  } else {                                                                                                             // 2190
    global.Synaptic = API;                                                                                             // 2191
    Synaptic.ninja = function() {                                                                                      // 2192
      delete global.Synaptic;                                                                                          // 2193
    }                                                                                                                  // 2194
  }                                                                                                                    // 2195
})(this);                                                                                                              // 2196
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 2206
}).call(this);                                                       // 2207
                                                                     // 2208
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['steeve:synaptic'] = {}, {
  Neuron: Neuron,
  Layer: Layer,
  Network: Network,
  Trainer: Trainer,
  Architect: Architect
});

})();
