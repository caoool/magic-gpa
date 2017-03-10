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

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steeve_jquery-qrcode/packages/steeve_jquery-qrcode.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
                                                                                                                       // 2
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3
//                                                                                                               //    // 4
// packages/steeve:jquery-qrcode/lib/jquery.qrcode-0.2.js                                                        //    // 5
//                                                                                                               //    // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 7
                                                                                                                 //    // 8
/*! jQuery.qrcode 0.2 - //larsjung.de/qrcode - MIT License */                                                    // 1  // 9
                                                                                                                 // 2  // 10
// Uses [QR Code Generator](http://www.d-project.com/qrcode/index.html) (MIT), appended to the end of this file. // 3  // 11
// Kudos to [jquery.qrcode.js](http://github.com/jeromeetienne/jquery-qrcode) (MIT).                             // 4  // 12
                                                                                                                 // 5  // 13
(function ($) {                                                                                                  // 6  // 14
	'use strict';                                                                                                   // 7  // 15
                                                                                                                 // 8  // 16
		// Wrapper for the original QR code generator.                                                                 // 9  // 17
	var createQr = function (typeNumber, correctLevel, text) {                                                      // 10
                                                                                                                 // 11
			// qrcode is the single public function that will be defined by the `QR Code Generator`                       // 12
			// at the end of the file.                                                                                    // 13
			var qr = qrcode(typeNumber, correctLevel);                                                                    // 14
			qr.addData(text);                                                                                             // 15
			qr.make();                                                                                                    // 16
                                                                                                                 // 17
			return qr;                                                                                                    // 18
		},                                                                                                             // 19
                                                                                                                 // 20
		// Returns a minimal QR code for the given text. Returns `null` if `text`                                      // 21
		// is to long to be encoded. At the moment it should work with up to 271 characters.                           // 22
		createBestQr = function (text) {                                                                               // 23
                                                                                                                 // 24
			for (var type = 2; type <= 40; type += 1) {                                                                   // 25
				try {                                                                                                        // 26
					return createQr(type, 'L', text);                                                                           // 27
				} catch (err) {}                                                                                             // 28
			}                                                                                                             // 29
                                                                                                                 // 30
			return null;                                                                                                  // 31
		},                                                                                                             // 32
                                                                                                                 // 33
		// Returns a `canvas` element representing the QR code for the given settings.                                 // 34
		createCanvas = function (settings) {                                                                           // 35
                                                                                                                 // 36
			var qr = createBestQr(settings.text),                                                                         // 37
				$canvas = $('<canvas/>').attr('width', settings.width).attr('height', settings.height),                      // 38
				ctx = $canvas[0].getContext('2d');                                                                           // 39
                                                                                                                 // 40
			if (settings.bgColor) {                                                                                       // 41
				ctx.fillStyle = settings.bgColor;                                                                            // 42
				ctx.fillRect(0, 0, settings.width, settings.height);                                                         // 43
			}                                                                                                             // 44
                                                                                                                 // 45
			if (qr) {                                                                                                     // 46
				var moduleCount = qr.getModuleCount(),                                                                       // 47
					moduleWidth = settings.width / moduleCount,                                                                 // 48
					moduleHeight = settings.height / moduleCount,                                                               // 49
					row, col;                                                                                                   // 50
                                                                                                                 // 51
				ctx.beginPath();                                                                                             // 52
				for (row = 0; row < moduleCount; row += 1) {                                                                 // 53
					for (col = 0; col < moduleCount; col += 1) {                                                                // 54
						if (qr.isDark(row, col)) {                                                                                 // 55
							ctx.rect(col * moduleWidth, row * moduleHeight, moduleWidth, moduleHeight);                               // 56
						}                                                                                                          // 57
					}                                                                                                           // 58
				}                                                                                                            // 59
				ctx.fillStyle = settings.color;                                                                              // 60
				ctx.fill();                                                                                                  // 61
			}                                                                                                             // 62
                                                                                                                 // 63
			return $canvas;                                                                                               // 64
		},                                                                                                             // 65
                                                                                                                 // 66
		// Returns a `div` element representing the QR code for the given settings.                                    // 67
		createDiv = function (settings) {                                                                              // 68
                                                                                                                 // 69
			var qr = createBestQr(settings.text),                                                                         // 70
				$div = $('<div/>').css({                                                                                     // 71
										position: 'relative',                                                                                  // 72
										left: 0,                                                                                               // 73
										top: 0,                                                                                                // 74
										padding: 0,                                                                                            // 75
										margin: 0,                                                                                             // 76
										width: settings.width,                                                                                 // 77
										height: settings.height                                                                                // 78
									});                                                                                                     // 79
                                                                                                                 // 80
			if (settings.bgColor) {                                                                                       // 81
				$div.css('background-color', settings.bgColor);                                                              // 82
			}                                                                                                             // 83
                                                                                                                 // 84
			if (qr) {                                                                                                     // 85
				var moduleCount = qr.getModuleCount(),                                                                       // 86
					moduleWidth = Math.floor(settings.width / moduleCount),                                                     // 87
					moduleHeight = Math.floor(settings.height / moduleCount),                                                   // 88
					offsetLeft = Math.floor(0.5 * (settings.width - moduleWidth * moduleCount)),                                // 89
					offsetTop = Math.floor(0.5 * (settings.height - moduleHeight * moduleCount)),                               // 90
					row, col;                                                                                                   // 91
                                                                                                                 // 92
				for (row = 0; row < moduleCount; row += 1) {                                                                 // 93
					for (col = 0; col < moduleCount; col += 1) {                                                                // 94
						if (qr.isDark(row, col)) {                                                                                 // 95
							$('<div/>')                                                                                               // 96
								.css({                                                                                                   // 97
									left: offsetLeft + col * moduleWidth,                                                                   // 98
									top: offsetTop + row * moduleHeight                                                                     // 99
								})                                                                                                       // 100
								.appendTo($div);                                                                                         // 101
						}                                                                                                          // 102
					}                                                                                                           // 103
				}                                                                                                            // 104
                                                                                                                 // 105
				$div.children()                                                                                              // 106
							.css({                                                                                                    // 107
								position: 'absolute',                                                                                    // 108
								padding: 0,                                                                                              // 109
								margin: 0,                                                                                               // 110
								width: moduleWidth,                                                                                      // 111
								height: moduleHeight,                                                                                    // 112
								'background-color': settings.color                                                                       // 113
							});                                                                                                       // 114
			}                                                                                                             // 115
                                                                                                                 // 116
			return $div;                                                                                                  // 117
		},                                                                                                             // 118
                                                                                                                 // 119
		// Plugin                                                                                                      // 120
		// ======                                                                                                      // 121
                                                                                                                 // 122
		// Default settings                                                                                            // 123
		// ----------------                                                                                            // 124
		defaults = {                                                                                                   // 125
                                                                                                                 // 126
			// render method: `'canvas'` or `'div'`                                                                       // 127
			render: 'canvas',                                                                                             // 128
                                                                                                                 // 129
			// width and height in pixel                                                                                  // 130
			width: 256,                                                                                                   // 131
			height: 256,                                                                                                  // 132
                                                                                                                 // 133
			// code color                                                                                                 // 134
			color: '#000',                                                                                                // 135
                                                                                                                 // 136
			// background color, `null` for transparent background                                                        // 137
			bgColor: null,                                                                                                // 138
                                                                                                                 // 139
			// the encoded text                                                                                           // 140
			text: 'no text'                                                                                               // 141
		};                                                                                                             // 142
                                                                                                                 // 143
	// Register the plugin                                                                                          // 144
	// -------------------                                                                                          // 145
	$.fn.qrcode = function(options) {                                                                               // 146
                                                                                                                 // 147
		var settings = $.extend({}, defaults, options);                                                                // 148
                                                                                                                 // 149
		return this.each(function () {                                                                                 // 150
                                                                                                                 // 151
			$(this).append(settings.render === 'canvas' ? createCanvas(settings) : createDiv(settings));                  // 152
		});                                                                                                            // 153
	};                                                                                                              // 154
                                                                                                                 // 155
	// jQuery.qrcode plug in code ends here                                                                         // 156
                                                                                                                 // 157
	// QR Code Generator                                                                                            // 158
	// =================                                                                                            // 159
	//---------------------------------------------------------------------                                               // 168
                                        // 160                                                                         // 169
	//                                                                                                                    // 170
                                                                                                             // 161    // 171
	// QR Code Generator for JavaScript                                                                                   // 172
                                                                            // 162                                     // 173
	//                                                                                                                    // 174
                                                                                                             // 163    // 175
	// Copyright (c) 2009 Kazuhiko Arase                                                                                  // 176
                                                                           // 164                                      // 177
	//                                                                                                                    // 178
                                                                                                             // 165    // 179
	// URL: http://www.d-project.com/                                                                                     // 180
                                                                              // 166                                   // 181
	//                                                                                                                    // 182
                                                                                                             // 167    // 183
	// Licensed under the MIT license:                                                                                    // 184
                                                                             // 168                                    // 185
	//	http://www.opensource.org/licenses/mit-license.php                                                                 // 186
                                                          // 169                                                       // 187
	//                                                                                                                    // 188
                                                                                                             // 170    // 189
	// The word 'QR Code' is registered trademark of                                                                      // 190
                                                               // 171                                                  // 191
	// DENSO WAVE INCORPORATED                                                                                            // 192
                                                                                     // 172                            // 193
	//	http://www.denso-wave.com/qrcode/faqpatent-e.html                                                                  // 194
                                                           // 173                                                      // 195
	//                                                                                                                    // 196
                                                                                                             // 174    // 197
	//---------------------------------------------------------------------                                               // 198
                                        // 175                                                                         // 199
	var qrcode = function() {                                                                                             // 200
                                                                                      // 176                           // 201
		//---------------------------------------------------------------------                                              // 202
                                       // 177                                                                          // 203
		// qrcode                                                                                                            // 204
                                                                                                     // 178            // 205
		//---------------------------------------------------------------------                                              // 206
                                       // 179                                                                          // 207
		/**                                                                                                                  // 208
                                                                                                           // 180      // 209
		 * qrcode                                                                                                            // 210
                                                                                                     // 181            // 211
		 * @param typeNumber 1 to 10                                                                                         // 212
                                                                                  // 182                               // 213
		 * @param errorCorrectLevel 'L','M','Q','H'                                                                          // 214
                                                                   // 183                                              // 215
		 */                                                                                                                  // 216
                                                                                                           // 184      // 217
		var qrcode = function(typeNumber, errorCorrectLevel) {                                                               // 218
                                                        // 185                                                         // 219
			var PAD0 = 0xEC;                                                                                                    // 220
                                                                                             // 186                    // 221
			var PAD1 = 0x11;                                                                                                    // 222
                                                                                             // 187                    // 223
			var _typeNumber = typeNumber;                                                                                       // 224
                                                                                // 188                                 // 225
			var _errorCorrectLevel = QRErrorCorrectLevel[errorCorrectLevel];                                                    // 226
                                             // 189                                                                    // 227
			var _modules = null;                                                                                                // 228
                                                                                         // 190                        // 229
			var _moduleCount = 0;                                                                                               // 230
                                                                                        // 191                         // 231
			var _dataCache = null;                                                                                              // 232
                                                                                       // 192                          // 233
			var _dataList = new Array();                                                                                        // 234
                                                                                 // 193                                // 235
			var _this = {};                                                                                                     // 236
                                                                                              // 194                   // 237
			var makeImpl = function(test, maskPattern) {                                                                        // 238
                                                                 // 195                                                // 239
				_moduleCount = _typeNumber * 4 + 17;                                                                               // 240
                                                                        // 196                                         // 241
				_modules = function(moduleCount) {                                                                                 // 242
                                                                          // 197                                       // 243
					var modules = new Array(moduleCount);                                                                             // 244
                                                                      // 198                                           // 245
					for (var row = 0; row < moduleCount; row += 1) {                                                                  // 246
                                                           // 199                                                      // 247
						modules[row] = new Array(moduleCount);                                                                           // 248
                                                                    // 200                                             // 249
						for (var col = 0; col < moduleCount; col += 1) {                                                                 // 250
                                                          // 201                                                       // 251
							modules[row][col] = null;                                                                                       // 252
                                                                                // 202                                 // 253
						}                                                                                                                // 254
                                                                                                         // 203        // 255
					}                                                                                                                 // 256
                                                                                                          // 204       // 257
					return modules;                                                                                                   // 258
                                                                                            // 205                     // 259
				}(_moduleCount);                                                                                                   // 260
                                                                                            // 206                     // 261
				setupPositionProbePattern(0, 0);                                                                                   // 262
                                                                            // 207                                     // 263
				setupPositionProbePattern(_moduleCount - 7, 0);                                                                    // 264
                                                             // 208                                                    // 265
				setupPositionProbePattern(0, _moduleCount - 7);                                                                    // 266
                                                             // 209                                                    // 267
				setupPositionAdjustPattern();                                                                                      // 268
                                                                               // 210                                  // 269
				setupTimingPattern();                                                                                              // 270
                                                                                       // 211                          // 271
				setupTypeInfo(test, maskPattern);                                                                                  // 272
                                                                           // 212                                      // 273
				if (_typeNumber >= 7) {                                                                                            // 274
                                                                                     // 213                            // 275
					setupTypeNumber(test);                                                                                            // 276
                                                                                     // 214                            // 277
				}                                                                                                                  // 278
                                                                                                           // 215      // 279
				if (_dataCache == null) {                                                                                          // 280
                                                                                   // 216                              // 281
					_dataCache = createData(_typeNumber, _errorCorrectLevel, _dataList);                                              // 282
                                       // 217                                                                          // 283
				}                                                                                                                  // 284
                                                                                                           // 218      // 285
				mapData(_dataCache, maskPattern);                                                                                  // 286
                                                                           // 219                                      // 287
			};                                                                                                                  // 288
                                                                                                           // 220      // 289
			var setupPositionProbePattern = function(row, col) {                                                                // 290
                                                         // 221                                                        // 291
				for (var r = -1; r <= 7; r += 1) {                                                                                 // 292
                                                                          // 222                                       // 293
					if (row + r <= -1 || _moduleCount <= row + r) continue;                                                           // 294
                                                    // 223                                                             // 295
					for (var c = -1; c <= 7; c += 1) {                                                                                // 296
                                                                         // 224                                        // 297
						if (col + c <= -1 || _moduleCount <= col + c) continue;                                                          // 298
                                                   // 225                                                              // 299
						if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )                                                                   // 300
                                                            // 226                                                     // 301
								|| (0 <= c && c <= 6 && (r == 0 || r == 6) )                                                                   // 302
                                                            // 227                                                     // 303
								|| (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {                                                                  // 304
                                                           // 228                                                      // 305
							_modules[row + r][col + c] = true;                                                                              // 306
                                                                       // 229                                          // 307
						} else {                                                                                                         // 308
                                                                                                  // 230               // 309
							_modules[row + r][col + c] = false;                                                                             // 310
                                                                      // 231                                           // 311
						}                                                                                                                // 312
                                                                                                         // 232        // 313
					}                                                                                                                 // 314
                                                                                                          // 233       // 315
				}                                                                                                                  // 316
                                                                                                           // 234      // 317
			};                                                                                                                  // 318
                                                                                                           // 235      // 319
			var getBestMaskPattern = function() {                                                                               // 320
                                                                        // 236                                         // 321
				var minLostPoint = 0;                                                                                              // 322
                                                                                       // 237                          // 323
				var pattern = 0;                                                                                                   // 324
                                                                                            // 238                     // 325
				for (var i = 0; i < 8; i += 1) {                                                                                   // 326
                                                                            // 239                                     // 327
					makeImpl(true, i);                                                                                                // 328
                                                                                         // 240                        // 329
					var lostPoint = QRUtil.getLostPoint(_this);                                                                       // 330
                                                                // 241                                                 // 331
					if (i == 0 || minLostPoint > lostPoint) {                                                                         // 332
                                                                  // 242                                               // 333
						minLostPoint = lostPoint;                                                                                        // 334
                                                                                 // 243                                // 335
						pattern = i;                                                                                                     // 336
                                                                                              // 244                   // 337
					}                                                                                                                 // 338
                                                                                                          // 245       // 339
				}                                                                                                                  // 340
                                                                                                           // 246      // 341
				return pattern;                                                                                                    // 342
                                                                                             // 247                    // 343
			};                                                                                                                  // 344
                                                                                                           // 248      // 345
			var setupTimingPattern = function() {                                                                               // 346
                                                                        // 249                                         // 347
				for (var r = 8; r < _moduleCount - 8; r += 1) {                                                                    // 348
                                                             // 250                                                    // 349
					if (_modules[r][6] != null) {                                                                                     // 350
                                                                              // 251                                   // 351
						continue;                                                                                                        // 352
                                                                                                 // 252                // 353
					}                                                                                                                 // 354
                                                                                                          // 253       // 355
					_modules[r][6] = (r % 2 == 0);                                                                                    // 356
                                                                             // 254                                    // 357
				}                                                                                                                  // 358
                                                                                                           // 255      // 359
				for (var c = 8; c < _moduleCount - 8; c += 1) {                                                                    // 360
                                                             // 256                                                    // 361
					if (_modules[6][c] != null) {                                                                                     // 362
                                                                              // 257                                   // 363
						continue;                                                                                                        // 364
                                                                                                 // 258                // 365
					}                                                                                                                 // 366
                                                                                                          // 259       // 367
					_modules[6][c] = (c % 2 == 0);                                                                                    // 368
                                                                             // 260                                    // 369
				}                                                                                                                  // 370
                                                                                                           // 261      // 371
			};                                                                                                                  // 372
                                                                                                           // 262      // 373
			var setupPositionAdjustPattern = function() {                                                                       // 374
                                                                // 263                                                 // 375
				var pos = QRUtil.getPatternPosition(_typeNumber);                                                                  // 376
                                                           // 264                                                      // 377
				for (var i = 0; i < pos.length; i += 1) {                                                                          // 378
                                                                   // 265                                              // 379
					for (var j = 0; j < pos.length; j += 1) {                                                                         // 380
                                                                  // 266                                               // 381
						var row = pos[i];                                                                                                // 382
                                                                                         // 267                        // 383
						var col = pos[j];                                                                                                // 384
                                                                                         // 268                        // 385
						if (_modules[row][col] != null) {                                                                                // 386
                                                                         // 269                                        // 387
							continue;                                                                                                       // 388
                                                                                                // 270                 // 389
						}                                                                                                                // 390
                                                                                                         // 271        // 391
						for (var r = -2; r <= 2; r += 1) {                                                                               // 392
                                                                        // 272                                         // 393
							for (var c = -2; c <= 2; c += 1) {                                                                              // 394
                                                                       // 273                                          // 395
								if (r == -2 || r == 2 || c == -2 || c == 2                                                                     // 396
                                                              // 274                                                   // 397
										|| (r == 0 && c == 0) ) {                                                                                    // 398
                                                                             // 275                                    // 399
									_modules[row + r][col + c] = true;                                                                            // 400
                                                                     // 276                                            // 401
								} else {                                                                                                       // 402
                                                                                                // 277                 // 403
									_modules[row + r][col + c] = false;                                                                           // 404
                                                                    // 278                                             // 405
								}                                                                                                              // 406
                                                                                                       // 279          // 407
							}                                                                                                               // 408
                                                                                                        // 280         // 409
						}                                                                                                                // 410
                                                                                                         // 281        // 411
					}                                                                                                                 // 412
                                                                                                          // 282       // 413
				}                                                                                                                  // 414
                                                                                                           // 283      // 415
			};                                                                                                                  // 416
                                                                                                           // 284      // 417
			var setupTypeNumber = function(test) {                                                                              // 418
                                                                       // 285                                          // 419
				var bits = QRUtil.getBCHTypeNumber(_typeNumber);                                                                   // 420
                                                            // 286                                                     // 421
				for (var i = 0; i < 18; i += 1) {                                                                                  // 422
                                                                           // 287                                      // 423
					var mod = (!test && ( (bits >> i) & 1) == 1);                                                                     // 424
                                                              // 288                                                   // 425
					_modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;                                                  // 426
                                           // 289                                                                      // 427
				}                                                                                                                  // 428
                                                                                                           // 290      // 429
				for (var i = 0; i < 18; i += 1) {                                                                                  // 430
                                                                           // 291                                      // 431
					var mod = (!test && ( (bits >> i) & 1) == 1);                                                                     // 432
                                                              // 292                                                   // 433
					_modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;                                                  // 434
                                           // 293                                                                      // 435
				}                                                                                                                  // 436
                                                                                                           // 294      // 437
			};                                                                                                                  // 438
                                                                                                           // 295      // 439
			var setupTypeInfo = function(test, maskPattern) {                                                                   // 440
                                                            // 296                                                     // 441
				var data = (_errorCorrectLevel << 3) | maskPattern;                                                                // 442
                                                         // 297                                                        // 443
				var bits = QRUtil.getBCHTypeInfo(data);                                                                            // 444
                                                                     // 298                                            // 445
				// vertical                                                                                                        // 446
                                                                                                 // 299                // 447
				for (var i = 0; i < 15; i += 1) {                                                                                  // 448
                                                                           // 300                                      // 449
					var mod = (!test && ( (bits >> i) & 1) == 1);                                                                     // 450
                                                              // 301                                                   // 451
					if (i < 6) {                                                                                                      // 452
                                                                                               // 302                  // 453
						_modules[i][8] = mod;                                                                                            // 454
                                                                                     // 303                            // 455
					} else if (i < 8) {                                                                                               // 456
                                                                                        // 304                         // 457
						_modules[i + 1][8] = mod;                                                                                        // 458
                                                                                 // 305                                // 459
					} else {                                                                                                          // 460
                                                                                                   // 306              // 461
						_modules[_moduleCount - 15 + i][8] = mod;                                                                        // 462
                                                                 // 307                                                // 463
					}                                                                                                                 // 464
                                                                                                          // 308       // 465
				}                                                                                                                  // 466
                                                                                                           // 309      // 467
				// horizontal                                                                                                      // 468
                                                                                               // 310                  // 469
				for (var i = 0; i < 15; i += 1) {                                                                                  // 470
                                                                           // 311                                      // 471
					var mod = (!test && ( (bits >> i) & 1) == 1);                                                                     // 472
                                                              // 312                                                   // 473
					if (i < 8) {                                                                                                      // 474
                                                                                               // 313                  // 475
						_modules[8][_moduleCount - i - 1] = mod;                                                                         // 476
                                                                  // 314                                               // 477
					} else if (i < 9) {                                                                                               // 478
                                                                                        // 315                         // 479
						_modules[8][15 - i - 1 + 1] = mod;                                                                               // 480
                                                                        // 316                                         // 481
					} else {                                                                                                          // 482
                                                                                                   // 317              // 483
						_modules[8][15 - i - 1] = mod;                                                                                   // 484
                                                                            // 318                                     // 485
					}                                                                                                                 // 486
                                                                                                          // 319       // 487
				}                                                                                                                  // 488
                                                                                                           // 320      // 489
				// fixed module                                                                                                    // 490
                                                                                             // 321                    // 491
				_modules[_moduleCount - 8][8] = (!test);                                                                           // 492
                                                                    // 322                                             // 493
			};                                                                                                                  // 494
                                                                                                           // 323      // 495
			var mapData = function(data, maskPattern) {                                                                         // 496
                                                                  // 324                                               // 497
				var inc = -1;                                                                                                      // 498
                                                                                               // 325                  // 499
				var row = _moduleCount - 1;                                                                                        // 500
                                                                                 // 326                                // 501
				var bitIndex = 7;                                                                                                  // 502
                                                                                           // 327                      // 503
				var byteIndex = 0;                                                                                                 // 504
                                                                                          // 328                       // 505
				var maskFunc = QRUtil.getMaskFunction(maskPattern);                                                                // 506
                                                         // 329                                                        // 507
				for (var col = _moduleCount - 1; col > 0; col -= 2) {                                                              // 508
                                                       // 330                                                          // 509
					if (col == 6) col -= 1;                                                                                           // 510
                                                                                    // 331                             // 511
					while (true) {                                                                                                    // 512
                                                                                             // 332                    // 513
						for (var c = 0; c < 2; c += 1) {                                                                                 // 514
                                                                          // 333                                       // 515
							if (_modules[row][col - c] == null) {                                                                           // 516
                                                                    // 334                                             // 517
								var dark = false;                                                                                              // 518
                                                                                       // 335                          // 519
								if (byteIndex < data.length) {                                                                                 // 520
                                                                          // 336                                       // 521
									dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);                                                         // 522
                                                  // 337                                                               // 523
								}                                                                                                              // 524
                                                                                                       // 338          // 525
								var mask = maskFunc(row, col - c);                                                                             // 526
                                                                      // 339                                           // 527
								if (mask) {                                                                                                    // 528
                                                                                             // 340                    // 529
									dark = !dark;                                                                                                 // 530
                                                                                          // 341                       // 531
								}                                                                                                              // 532
                                                                                                       // 342          // 533
								_modules[row][col - c] = dark;                                                                                 // 534
                                                                          // 343                                       // 535
								bitIndex -= 1;                                                                                                 // 536
                                                                                          // 344                       // 537
								if (bitIndex == -1) {                                                                                          // 538
                                                                                   // 345                              // 539
									byteIndex += 1;                                                                                               // 540
                                                                                        // 346                         // 541
									bitIndex = 7;                                                                                                 // 542
                                                                                          // 347                       // 543
								}                                                                                                              // 544
                                                                                                       // 348          // 545
							}                                                                                                               // 546
                                                                                                        // 349         // 547
						}                                                                                                                // 548
                                                                                                         // 350        // 549
						row += inc;                                                                                                      // 550
                                                                                               // 351                  // 551
						if (row < 0 || _moduleCount <= row) {                                                                            // 552
                                                                     // 352                                            // 553
							row -= inc;                                                                                                     // 554
                                                                                              // 353                   // 555
							inc = -inc;                                                                                                     // 556
                                                                                              // 354                   // 557
							break;                                                                                                          // 558
                                                                                                   // 355              // 559
						}                                                                                                                // 560
                                                                                                         // 356        // 561
					}                                                                                                                 // 562
                                                                                                          // 357       // 563
				}                                                                                                                  // 564
                                                                                                           // 358      // 565
			};                                                                                                                  // 566
                                                                                                           // 359      // 567
			var createBytes = function(buffer, rsBlocks) {                                                                      // 568
                                                               // 360                                                  // 569
				var offset = 0;                                                                                                    // 570
                                                                                             // 361                    // 571
				var maxDcCount = 0;                                                                                                // 572
                                                                                         // 362                        // 573
				var maxEcCount = 0;                                                                                                // 574
                                                                                         // 363                        // 575
				var dcdata = new Array(rsBlocks.length);                                                                           // 576
                                                                    // 364                                             // 577
				var ecdata = new Array(rsBlocks.length);                                                                           // 578
                                                                    // 365                                             // 579
				for (var r = 0; r < rsBlocks.length; r += 1) {                                                                     // 580
                                                              // 366                                                   // 581
					var dcCount = rsBlocks[r].dataCount;                                                                              // 582
                                                                       // 367                                          // 583
					var ecCount = rsBlocks[r].totalCount - dcCount;                                                                   // 584
                                                            // 368                                                     // 585
					maxDcCount = Math.max(maxDcCount, dcCount);                                                                       // 586
                                                                // 369                                                 // 587
					maxEcCount = Math.max(maxEcCount, ecCount);                                                                       // 588
                                                                // 370                                                 // 589
					dcdata[r] = new Array(dcCount);                                                                                   // 590
                                                                            // 371                                     // 591
					for (var i = 0; i < dcdata[r].length; i += 1) {                                                                   // 592
                                                            // 372                                                     // 593
						dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];                                                            // 594
                                                     // 373                                                            // 595
					}                                                                                                                 // 596
                                                                                                          // 374       // 597
					offset += dcCount;                                                                                                // 598
                                                                                         // 375                        // 599
					var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);                                                           // 600
                                                    // 376                                                             // 601
					var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);                                                    // 602
                                             // 377                                                                    // 603
					var modPoly = rawPoly.mod(rsPoly);                                                                                // 604
                                                                         // 378                                        // 605
					ecdata[r] = new Array(rsPoly.getLength() - 1);                                                                    // 606
                                                             // 379                                                    // 607
					for (var i = 0; i < ecdata[r].length; i += 1) {                                                                   // 608
                                                            // 380                                                     // 609
						var modIndex = i + modPoly.getLength() - ecdata[r].length;                                                       // 610
                                                // 381                                                                 // 611
						ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;                                                       // 612
                                                // 382                                                                 // 613
					}                                                                                                                 // 614
                                                                                                          // 383       // 615
				}                                                                                                                  // 616
                                                                                                           // 384      // 617
				var totalCodeCount = 0;                                                                                            // 618
                                                                                     // 385                            // 619
				for (var i = 0; i < rsBlocks.length; i += 1) {                                                                     // 620
                                                              // 386                                                   // 621
					totalCodeCount += rsBlocks[i].totalCount;                                                                         // 622
                                                                  // 387                                               // 623
				}                                                                                                                  // 624
                                                                                                           // 388      // 625
				var data = new Array(totalCodeCount);                                                                              // 626
                                                                       // 389                                          // 627
				var index = 0;                                                                                                     // 628
                                                                                              // 390                   // 629
				for (var i = 0; i < maxDcCount; i += 1) {                                                                          // 630
                                                                   // 391                                              // 631
					for (var r = 0; r < rsBlocks.length; r += 1) {                                                                    // 632
                                                             // 392                                                    // 633
						if (i < dcdata[r].length) {                                                                                      // 634
                                                                               // 393                                  // 635
							data[index] = dcdata[r][i];                                                                                     // 636
                                                                              // 394                                   // 637
							index += 1;                                                                                                     // 638
                                                                                              // 395                   // 639
						}                                                                                                                // 640
                                                                                                         // 396        // 641
					}                                                                                                                 // 642
                                                                                                          // 397       // 643
				}                                                                                                                  // 644
                                                                                                           // 398      // 645
				for (var i = 0; i < maxEcCount; i += 1) {                                                                          // 646
                                                                   // 399                                              // 647
					for (var r = 0; r < rsBlocks.length; r += 1) {                                                                    // 648
                                                             // 400                                                    // 649
						if (i < ecdata[r].length) {                                                                                      // 650
                                                                               // 401                                  // 651
							data[index] = ecdata[r][i];                                                                                     // 652
                                                                              // 402                                   // 653
							index += 1;                                                                                                     // 654
                                                                                              // 403                   // 655
						}                                                                                                                // 656
                                                                                                         // 404        // 657
					}                                                                                                                 // 658
                                                                                                          // 405       // 659
				}                                                                                                                  // 660
                                                                                                           // 406      // 661
				return data;                                                                                                       // 662
                                                                                                // 407                 // 663
			};                                                                                                                  // 664
                                                                                                           // 408      // 665
			var createData = function(typeNumber, errorCorrectLevel, dataList) {                                                // 666
                                         // 409                                                                        // 667
				var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);                                               // 668
                                        // 410                                                                         // 669
				var buffer = qrBitBuffer();                                                                                        // 670
                                                                                 // 411                                // 671
				for (var i = 0; i < dataList.length; i += 1) {                                                                     // 672
                                                              // 412                                                   // 673
					var data = dataList[i];                                                                                           // 674
                                                                                    // 413                             // 675
					buffer.put(data.getMode(), 4);                                                                                    // 676
                                                                             // 414                                    // 677
					buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );                                // 678
                         // 415                                                                                        // 679
					data.write(buffer);                                                                                               // 680
                                                                                        // 416                         // 681
				}                                                                                                                  // 682
                                                                                                           // 417      // 683
				// calc num max data.                                                                                              // 684
                                                                                       // 418                          // 685
				var totalDataCount = 0;                                                                                            // 686
                                                                                     // 419                            // 687
				for (var i = 0; i < rsBlocks.length; i += 1) {                                                                     // 688
                                                              // 420                                                   // 689
					totalDataCount += rsBlocks[i].dataCount;                                                                          // 690
                                                                   // 421                                              // 691
				}                                                                                                                  // 692
                                                                                                           // 422      // 693
				if (buffer.getLengthInBits() > totalDataCount * 8) {                                                               // 694
                                                        // 423                                                         // 695
					throw new Error('code length overflow. ('                                                                         // 696
                                                                  // 424                                               // 697
						+ buffer.getLengthInBits()                                                                                       // 698
                                                                                // 425                                 // 699
						+ '>'                                                                                                            // 700
                                                                                                     // 426            // 701
						+ totalDataCount * 8                                                                                             // 702
                                                                                      // 427                           // 703
						+ ')');                                                                                                          // 704
                                                                                                   // 428              // 705
				}                                                                                                                  // 706
                                                                                                           // 429      // 707
				// end code                                                                                                        // 708
                                                                                                 // 430                // 709
				if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {                                                          // 710
                                                   // 431                                                              // 711
					buffer.put(0, 4);                                                                                                 // 712
                                                                                          // 432                       // 713
				}                                                                                                                  // 714
                                                                                                           // 433      // 715
				// padding                                                                                                         // 716
                                                                                                  // 434               // 717
				while (buffer.getLengthInBits() % 8 != 0) {                                                                        // 718
                                                                 // 435                                                // 719
					buffer.putBit(false);                                                                                             // 720
                                                                                      // 436                           // 721
				}                                                                                                                  // 722
                                                                                                           // 437      // 723
				// padding                                                                                                         // 724
                                                                                                  // 438               // 725
				while (true) {                                                                                                     // 726
                                                                                              // 439                   // 727
					if (buffer.getLengthInBits() >= totalDataCount * 8) {                                                             // 728
                                                      // 440                                                           // 729
						break;                                                                                                           // 730
                                                                                                    // 441             // 731
					}                                                                                                                 // 732
                                                                                                          // 442       // 733
					buffer.put(PAD0, 8);                                                                                              // 734
                                                                                       // 443                          // 735
					if (buffer.getLengthInBits() >= totalDataCount * 8) {                                                             // 736
                                                      // 444                                                           // 737
						break;                                                                                                           // 738
                                                                                                    // 445             // 739
					}                                                                                                                 // 740
                                                                                                          // 446       // 741
					buffer.put(PAD1, 8);                                                                                              // 742
                                                                                       // 447                          // 743
				}                                                                                                                  // 744
                                                                                                           // 448      // 745
				return createBytes(buffer, rsBlocks);                                                                              // 746
                                                                       // 449                                          // 747
			};                                                                                                                  // 748
                                                                                                           // 450      // 749
			_this.addData = function(data) {                                                                                    // 750
                                                                             // 451                                    // 751
				var newData = qr8BitByte(data);                                                                                    // 752
                                                                             // 452                                    // 753
				_dataList.push(newData);                                                                                           // 754
                                                                                    // 453                             // 755
				_dataCache = null;                                                                                                 // 756
                                                                                          // 454                       // 757
			};                                                                                                                  // 758
                                                                                                           // 455      // 759
			_this.isDark = function(row, col) {                                                                                 // 760
                                                                          // 456                                       // 761
				if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {                                            // 762
                                     // 457                                                                            // 763
					throw new Error(row + ',' + col);                                                                                 // 764
                                                                          // 458                                       // 765
				}                                                                                                                  // 766
                                                                                                           // 459      // 767
				return _modules[row][col];                                                                                         // 768
                                                                                  // 460                               // 769
			};                                                                                                                  // 770
                                                                                                           // 461      // 771
			_this.getModuleCount = function() {                                                                                 // 772
                                                                          // 462                                       // 773
				return _moduleCount;                                                                                               // 774
                                                                                        // 463                         // 775
			};                                                                                                                  // 776
                                                                                                           // 464      // 777
			_this.make = function() {                                                                                           // 778
                                                                                    // 465                             // 779
				makeImpl(false, getBestMaskPattern() );                                                                            // 780
                                                                     // 466                                            // 781
			};                                                                                                                  // 782
                                                                                                           // 467      // 783
			_this.createTableTag = function(cellSize, margin) {                                                                 // 784
                                                          // 468                                                       // 785
				cellSize = cellSize || 2;                                                                                          // 786
                                                                                   // 469                              // 787
				margin = (typeof margin == 'undefined')? cellSize * 4 : margin;                                                    // 788
                                             // 470                                                                    // 789
				var qrHtml = '';                                                                                                   // 790
                                                                                            // 471                     // 791
				qrHtml += '<table style="';                                                                                        // 792
                                                                                 // 472                                // 793
				qrHtml += ' border-width: 0px; border-style: none;';                                                               // 794
                                                        // 473                                                         // 795
				qrHtml += ' border-collapse: collapse;';                                                                           // 796
                                                                    // 474                                             // 797
				qrHtml += ' padding: 0px; margin: ' + margin + 'px;';                                                              // 798
                                                       // 475                                                          // 799
				qrHtml += '">';                                                                                                    // 800
                                                                                             // 476                    // 801
				qrHtml += '<tbody>';                                                                                               // 802
                                                                                        // 477                         // 803
				for (var r = 0; r < _this.getModuleCount(); r += 1) {                                                              // 804
                                                       // 478                                                          // 805
					qrHtml += '<tr>';                                                                                                 // 806
                                                                                          // 479                       // 807
					for (var c = 0; c < _this.getModuleCount(); c += 1) {                                                             // 808
                                                      // 480                                                           // 809
						qrHtml += '<td style="';                                                                                         // 810
                                                                                  // 481                               // 811
						qrHtml += ' border-width: 0px; border-style: none;';                                                             // 812
                                                      // 482                                                           // 813
						qrHtml += ' border-collapse: collapse;';                                                                         // 814
                                                                  // 483                                               // 815
						qrHtml += ' padding: 0px; margin: 0px;';                                                                         // 816
                                                                  // 484                                               // 817
						qrHtml += ' width: ' + cellSize + 'px;';                                                                         // 818
                                                                  // 485                                               // 819
						qrHtml += ' height: ' + cellSize + 'px;';                                                                        // 820
                                                                 // 486                                                // 821
						qrHtml += ' background-color: ';                                                                                 // 822
                                                                          // 487                                       // 823
						qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';                                                             // 824
                                                      // 488                                                           // 825
						qrHtml += ';';                                                                                                   // 826
                                                                                            // 489                     // 827
						qrHtml += '"/>';                                                                                                 // 828
                                                                                          // 490                       // 829
					}                                                                                                                 // 830
                                                                                                          // 491       // 831
					qrHtml += '</tr>';                                                                                                // 832
                                                                                         // 492                        // 833
				}                                                                                                                  // 834
                                                                                                           // 493      // 835
				qrHtml += '</tbody>';                                                                                              // 836
                                                                                       // 494                          // 837
				qrHtml += '</table>';                                                                                              // 838
                                                                                       // 495                          // 839
				return qrHtml;                                                                                                     // 840
                                                                                              // 496                   // 841
			};                                                                                                                  // 842
                                                                                                           // 497      // 843
			_this.createImgTag = function(cellSize, margin) {                                                                   // 844
                                                            // 498                                                     // 845
				cellSize = cellSize || 2;                                                                                          // 846
                                                                                   // 499                              // 847
				margin = (typeof margin == 'undefined')? cellSize * 4 : margin;                                                    // 848
                                             // 500                                                                    // 849
				var size = _this.getModuleCount() * cellSize + margin * 2;                                                         // 850
                                                  // 501                                                               // 851
				var min = margin;                                                                                                  // 852
                                                                                           // 502                      // 853
				var max = size - margin;                                                                                           // 854
                                                                                    // 503                             // 855
				return createImgTag(size, size, function(x, y) {                                                                   // 856
                                                            // 504                                                     // 857
					if (min <= x && x < max && min <= y && y < max) {                                                                 // 858
                                                          // 505                                                       // 859
						var c = Math.floor( (x - min) / cellSize);                                                                       // 860
                                                                // 506                                                 // 861
						var r = Math.floor( (y - min) / cellSize);                                                                       // 862
                                                                // 507                                                 // 863
						return _this.isDark(r, c)? 0 : 1;                                                                                // 864
                                                                         // 508                                        // 865
					} else {                                                                                                          // 866
                                                                                                   // 509              // 867
						return 1;                                                                                                        // 868
                                                                                                 // 510                // 869
					}                                                                                                                 // 870
                                                                                                          // 511       // 871
				} );                                                                                                               // 872
                                                                                                        // 512         // 873
			};                                                                                                                  // 874
                                                                                                           // 513      // 875
			return _this;                                                                                                       // 876
                                                                                                // 514                 // 877
		};                                                                                                                   // 878
                                                                                                            // 515     // 879
		//---------------------------------------------------------------------                                              // 880
                                       // 516                                                                          // 881
		// qrcode.stringToBytes                                                                                              // 882
                                                                                       // 517                          // 883
		//---------------------------------------------------------------------                                              // 884
                                       // 518                                                                          // 885
		qrcode.stringToBytes = function(s) {                                                                                 // 886
                                                                          // 519                                       // 887
			var bytes = new Array();                                                                                            // 888
                                                                                     // 520                            // 889
			for (var i = 0; i < s.length; i += 1) {                                                                             // 890
                                                                      // 521                                           // 891
				var c = s.charCodeAt(i);                                                                                           // 892
                                                                                    // 522                             // 893
				bytes.push(c & 0xff);                                                                                              // 894
                                                                                       // 523                          // 895
			}                                                                                                                   // 896
                                                                                                            // 524     // 897
			return bytes;                                                                                                       // 898
                                                                                                // 525                 // 899
		};                                                                                                                   // 900
                                                                                                            // 526     // 901
		//---------------------------------------------------------------------                                              // 902
                                       // 527                                                                          // 903
		// qrcode.createStringToBytes                                                                                        // 904
                                                                                 // 528                                // 905
		//---------------------------------------------------------------------                                              // 906
                                       // 529                                                                          // 907
		/**                                                                                                                  // 908
                                                                                                           // 530      // 909
		 * @param unicodeData base64 string of byte array.                                                                   // 910
                                                            // 531                                                     // 911
		 * [16bit Unicode],[16bit Bytes], ...                                                                                // 912
                                                                         // 532                                        // 913
		 * @param numChars                                                                                                   // 914
                                                                                            // 533                     // 915
		 */                                                                                                                  // 916
                                                                                                           // 534      // 917
		qrcode.createStringToBytes = function(unicodeData, numChars) {                                                       // 918
                                                // 535                                                                 // 919
			// create conversion map.                                                                                           // 920
                                                                                    // 536                             // 921
			var unicodeMap = function() {                                                                                       // 922
                                                                                // 537                                 // 923
				var bin = base64DecodeInputStream(unicodeData);                                                                    // 924
                                                             // 538                                                    // 925
				var read = function() {                                                                                            // 926
                                                                                     // 539                            // 927
					var b = bin.read();                                                                                               // 928
                                                                                        // 540                         // 929
					if (b == -1) throw new Error();                                                                                   // 930
                                                                            // 541                                     // 931
					return b;                                                                                                         // 932
                                                                                                  // 542               // 933
				};                                                                                                                 // 934
                                                                                                          // 543       // 935
				var count = 0;                                                                                                     // 936
                                                                                              // 544                   // 937
				var unicodeMap = {};                                                                                               // 938
                                                                                        // 545                         // 939
				while (true) {                                                                                                     // 940
                                                                                              // 546                   // 941
					var b0 = bin.read();                                                                                              // 942
                                                                                       // 547                          // 943
					if (b0 == -1) break;                                                                                              // 944
                                                                                       // 548                          // 945
					var b1 = read();                                                                                                  // 946
                                                                                           // 549                      // 947
					var b2 = read();                                                                                                  // 948
                                                                                           // 550                      // 949
					var b3 = read();                                                                                                  // 950
                                                                                           // 551                      // 951
					var k = String.fromCharCode( (b0 << 8) | b1);                                                                     // 952
                                                              // 552                                                   // 953
					var v = (b2 << 8) | b3;                                                                                           // 954
                                                                                    // 553                             // 955
					unicodeMap[k] = v;                                                                                                // 956
                                                                                         // 554                        // 957
					count += 1;                                                                                                       // 958
                                                                                                // 555                 // 959
				}                                                                                                                  // 960
                                                                                                           // 556      // 961
				if (count != numChars) {                                                                                           // 962
                                                                                    // 557                             // 963
					throw new Error(count + ' != ' + numChars);                                                                       // 964
                                                                // 558                                                 // 965
				}                                                                                                                  // 966
                                                                                                           // 559      // 967
				return unicodeMap;                                                                                                 // 968
                                                                                          // 560                       // 969
			}();                                                                                                                // 970
                                                                                                         // 561        // 971
			var unknownChar = '?'.charCodeAt(0);                                                                                // 972
                                                                         // 562                                        // 973
			return function(s) {                                                                                                // 974
                                                                                         // 563                        // 975
				var bytes = new Array();                                                                                           // 976
                                                                                    // 564                             // 977
				for (var i = 0; i < s.length; i += 1) {                                                                            // 978
                                                                     // 565                                            // 979
					var c = s.charCodeAt(i);                                                                                          // 980
                                                                                   // 566                              // 981
					if (c < 128) {                                                                                                    // 982
                                                                                             // 567                    // 983
						bytes.push(c);                                                                                                   // 984
                                                                                            // 568                     // 985
					} else {                                                                                                          // 986
                                                                                                   // 569              // 987
						var b = unicodeMap[s.charAt(i)];                                                                                 // 988
                                                                          // 570                                       // 989
						if (typeof b == 'number') {                                                                                      // 990
                                                                               // 571                                  // 991
							if ( (b & 0xff) == b) {                                                                                         // 992
                                                                                  // 572                               // 993
								// 1byte                                                                                                       // 994
                                                                                                // 573                 // 995
								bytes.push(b);                                                                                                 // 996
                                                                                          // 574                       // 997
							} else {                                                                                                        // 998
                                                                                                 // 575                // 999
								// 2bytes                                                                                                      // 1000
                                                                                               // 576                  // 1001
								bytes.push(b >>> 8);                                                                                           // 1002
                                                                                    // 577                             // 1003
								bytes.push(b & 0xff);                                                                                          // 1004
                                                                                   // 578                              // 1005
							}                                                                                                               // 1006
                                                                                                        // 579         // 1007
						} else {                                                                                                         // 1008
                                                                                                  // 580               // 1009
							bytes.push(unknownChar);                                                                                        // 1010
                                                                                 // 581                                // 1011
						}                                                                                                                // 1012
                                                                                                         // 582        // 1013
					}                                                                                                                 // 1014
                                                                                                          // 583       // 1015
				}                                                                                                                  // 1016
                                                                                                           // 584      // 1017
				return bytes;                                                                                                      // 1018
                                                                                               // 585                  // 1019
			};                                                                                                                  // 1020
                                                                                                           // 586      // 1021
		};                                                                                                                   // 1022
                                                                                                            // 587     // 1023
		//---------------------------------------------------------------------                                              // 1024
                                       // 588                                                                          // 1025
		// QRMode                                                                                                            // 1026
                                                                                                     // 589            // 1027
		//---------------------------------------------------------------------                                              // 1028
                                       // 590                                                                          // 1029
		var QRMode = {                                                                                                       // 1030
                                                                                                // 591                 // 1031
			MODE_NUMBER :		1 << 0,                                                                                              // 1032
                                                                                       // 592                          // 1033
			MODE_ALPHA_NUM : 	1 << 1,                                                                                           // 1034
                                                                                    // 593                             // 1035
			MODE_8BIT_BYTE : 	1 << 2,                                                                                           // 1036
                                                                                    // 594                             // 1037
			MODE_KANJI :		1 << 3                                                                                                // 1038
                                                                                         // 595                        // 1039
		};                                                                                                                   // 1040
                                                                                                            // 596     // 1041
		//---------------------------------------------------------------------                                              // 1042
                                       // 597                                                                          // 1043
		// QRErrorCorrectLevel                                                                                               // 1044
                                                                                        // 598                         // 1045
		//---------------------------------------------------------------------                                              // 1046
                                       // 599                                                                          // 1047
		var QRErrorCorrectLevel = {                                                                                          // 1048
                                                                                   // 600                              // 1049
			L : 1,                                                                                                              // 1050
                                                                                                       // 601          // 1051
			M : 0,                                                                                                              // 1052
                                                                                                       // 602          // 1053
			Q : 3,                                                                                                              // 1054
                                                                                                       // 603          // 1055
			H : 2                                                                                                               // 1056
                                                                                                        // 604         // 1057
		};                                                                                                                   // 1058
                                                                                                            // 605     // 1059
		//---------------------------------------------------------------------                                              // 1060
                                       // 606                                                                          // 1061
		// QRMaskPattern                                                                                                     // 1062
                                                                                              // 607                   // 1063
		//---------------------------------------------------------------------                                              // 1064
                                       // 608                                                                          // 1065
		var QRMaskPattern = {                                                                                                // 1066
                                                                                         // 609                        // 1067
			PATTERN000 : 0,                                                                                                     // 1068
                                                                                              // 610                   // 1069
			PATTERN001 : 1,                                                                                                     // 1070
                                                                                              // 611                   // 1071
			PATTERN010 : 2,                                                                                                     // 1072
                                                                                              // 612                   // 1073
			PATTERN011 : 3,                                                                                                     // 1074
                                                                                              // 613                   // 1075
			PATTERN100 : 4,                                                                                                     // 1076
                                                                                              // 614                   // 1077
			PATTERN101 : 5,                                                                                                     // 1078
                                                                                              // 615                   // 1079
			PATTERN110 : 6,                                                                                                     // 1080
                                                                                              // 616                   // 1081
			PATTERN111 : 7                                                                                                      // 1082
                                                                                               // 617                  // 1083
		};                                                                                                                   // 1084
                                                                                                            // 618     // 1085
		//---------------------------------------------------------------------                                              // 1086
                                       // 619                                                                          // 1087
		// QRUtil                                                                                                            // 1088
                                                                                                     // 620            // 1089
		//---------------------------------------------------------------------                                              // 1090
                                       // 621                                                                          // 1091
		var QRUtil = function() {                                                                                            // 1092
                                                                                     // 622                            // 1093
			var PATTERN_POSITION_TABLE = [                                                                                      // 1094
                                                                               // 623                                  // 1095
				[],                                                                                                                // 1096
                                                                                                         // 624        // 1097
				[6, 18],                                                                                                           // 1098
                                                                                                    // 625             // 1099
				[6, 22],                                                                                                           // 1100
                                                                                                    // 626             // 1101
				[6, 26],                                                                                                           // 1102
                                                                                                    // 627             // 1103
				[6, 30],                                                                                                           // 1104
                                                                                                    // 628             // 1105
				[6, 34],                                                                                                           // 1106
                                                                                                    // 629             // 1107
				[6, 22, 38],                                                                                                       // 1108
                                                                                                // 630                 // 1109
				[6, 24, 42],                                                                                                       // 1110
                                                                                                // 631                 // 1111
				[6, 26, 46],                                                                                                       // 1112
                                                                                                // 632                 // 1113
				[6, 28, 50],                                                                                                       // 1114
                                                                                                // 633                 // 1115
				[6, 30, 54],                                                                                                       // 1116
                                                                                                // 634                 // 1117
				[6, 32, 58],                                                                                                       // 1118
                                                                                                // 635                 // 1119
				[6, 34, 62],                                                                                                       // 1120
                                                                                                // 636                 // 1121
				[6, 26, 46, 66],                                                                                                   // 1122
                                                                                            // 637                     // 1123
				[6, 26, 48, 70],                                                                                                   // 1124
                                                                                            // 638                     // 1125
				[6, 26, 50, 74],                                                                                                   // 1126
                                                                                            // 639                     // 1127
				[6, 30, 54, 78],                                                                                                   // 1128
                                                                                            // 640                     // 1129
				[6, 30, 56, 82],                                                                                                   // 1130
                                                                                            // 641                     // 1131
				[6, 30, 58, 86],                                                                                                   // 1132
                                                                                            // 642                     // 1133
				[6, 34, 62, 90],                                                                                                   // 1134
                                                                                            // 643                     // 1135
				[6, 28, 50, 72, 94],                                                                                               // 1136
                                                                                        // 644                         // 1137
				[6, 26, 50, 74, 98],                                                                                               // 1138
                                                                                        // 645                         // 1139
				[6, 30, 54, 78, 102],                                                                                              // 1140
                                                                                       // 646                          // 1141
				[6, 28, 54, 80, 106],                                                                                              // 1142
                                                                                       // 647                          // 1143
				[6, 32, 58, 84, 110],                                                                                              // 1144
                                                                                       // 648                          // 1145
				[6, 30, 58, 86, 114],                                                                                              // 1146
                                                                                       // 649                          // 1147
				[6, 34, 62, 90, 118],                                                                                              // 1148
                                                                                       // 650                          // 1149
				[6, 26, 50, 74, 98, 122],                                                                                          // 1150
                                                                                   // 651                              // 1151
				[6, 30, 54, 78, 102, 126],                                                                                         // 1152
                                                                                  // 652                               // 1153
				[6, 26, 52, 78, 104, 130],                                                                                         // 1154
                                                                                  // 653                               // 1155
				[6, 30, 56, 82, 108, 134],                                                                                         // 1156
                                                                                  // 654                               // 1157
				[6, 34, 60, 86, 112, 138],                                                                                         // 1158
                                                                                  // 655                               // 1159
				[6, 30, 58, 86, 114, 142],                                                                                         // 1160
                                                                                  // 656                               // 1161
				[6, 34, 62, 90, 118, 146],                                                                                         // 1162
                                                                                  // 657                               // 1163
				[6, 30, 54, 78, 102, 126, 150],                                                                                    // 1164
                                                                             // 658                                    // 1165
				[6, 24, 50, 76, 102, 128, 154],                                                                                    // 1166
                                                                             // 659                                    // 1167
				[6, 28, 54, 80, 106, 132, 158],                                                                                    // 1168
                                                                             // 660                                    // 1169
				[6, 32, 58, 84, 110, 136, 162],                                                                                    // 1170
                                                                             // 661                                    // 1171
				[6, 26, 54, 82, 110, 138, 166],                                                                                    // 1172
                                                                             // 662                                    // 1173
				[6, 30, 58, 86, 114, 142, 170]                                                                                     // 1174
                                                                              // 663                                   // 1175
			];                                                                                                                  // 1176
                                                                                                           // 664      // 1177
			var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);                              // 1178
                       // 665                                                                                          // 1179
			var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);                 // 1180
          // 666                                                                                                       // 1181
			var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);                                             // 1182
                                      // 667                                                                           // 1183
			var _this = {};                                                                                                     // 1184
                                                                                              // 668                   // 1185
			var getBCHDigit = function(data) {                                                                                  // 1186
                                                                           // 669                                      // 1187
				var digit = 0;                                                                                                     // 1188
                                                                                              // 670                   // 1189
				while (data != 0) {                                                                                                // 1190
                                                                                         // 671                        // 1191
					digit += 1;                                                                                                       // 1192
                                                                                                // 672                 // 1193
					data >>>= 1;                                                                                                      // 1194
                                                                                               // 673                  // 1195
				}                                                                                                                  // 1196
                                                                                                           // 674      // 1197
				return digit;                                                                                                      // 1198
                                                                                               // 675                  // 1199
			};                                                                                                                  // 1200
                                                                                                           // 676      // 1201
			_this.getBCHTypeInfo = function(data) {                                                                             // 1202
                                                                      // 677                                           // 1203
				var d = data << 10;                                                                                                // 1204
                                                                                         // 678                        // 1205
				while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {                                                                   // 1206
                                                            // 679                                                     // 1207
					d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );                                                              // 1208
                                                       // 680                                                          // 1209
				}                                                                                                                  // 1210
                                                                                                           // 681      // 1211
				return ( (data << 10) | d) ^ G15_MASK;                                                                             // 1212
                                                                      // 682                                           // 1213
			};                                                                                                                  // 1214
                                                                                                           // 683      // 1215
			_this.getBCHTypeNumber = function(data) {                                                                           // 1216
                                                                    // 684                                             // 1217
				var d = data << 12;                                                                                                // 1218
                                                                                         // 685                        // 1219
				while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {                                                                   // 1220
                                                            // 686                                                     // 1221
					d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );                                                              // 1222
                                                       // 687                                                          // 1223
				}                                                                                                                  // 1224
                                                                                                           // 688      // 1225
				return (data << 12) | d;                                                                                           // 1226
                                                                                    // 689                             // 1227
			};                                                                                                                  // 1228
                                                                                                           // 690      // 1229
			_this.getPatternPosition = function(typeNumber) {                                                                   // 1230
                                                            // 691                                                     // 1231
				return PATTERN_POSITION_TABLE[typeNumber - 1];                                                                     // 1232
                                                              // 692                                                   // 1233
			};                                                                                                                  // 1234
                                                                                                           // 693      // 1235
			_this.getMaskFunction = function(maskPattern) {                                                                     // 1236
                                                              // 694                                                   // 1237
				switch (maskPattern) {                                                                                             // 1238
                                                                                      // 695                           // 1239
				case QRMaskPattern.PATTERN000 :                                                                                    // 1240
                                                                             // 696                                    // 1241
					return function(i, j) { return (i + j) % 2 == 0; };                                                               // 1242
                                                        // 697                                                         // 1243
				case QRMaskPattern.PATTERN001 :                                                                                    // 1244
                                                                             // 698                                    // 1245
					return function(i, j) { return i % 2 == 0; };                                                                     // 1246
                                                              // 699                                                   // 1247
				case QRMaskPattern.PATTERN010 :                                                                                    // 1248
                                                                             // 700                                    // 1249
					return function(i, j) { return j % 3 == 0; };                                                                     // 1250
                                                              // 701                                                   // 1251
				case QRMaskPattern.PATTERN011 :                                                                                    // 1252
                                                                             // 702                                    // 1253
					return function(i, j) { return (i + j) % 3 == 0; };                                                               // 1254
                                                        // 703                                                         // 1255
				case QRMaskPattern.PATTERN100 :                                                                                    // 1256
                                                                             // 704                                    // 1257
					return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };                              // 1258
                       // 705                                                                                          // 1259
				case QRMaskPattern.PATTERN101 :                                                                                    // 1260
                                                                             // 706                                    // 1261
					return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };                                                 // 1262
                                          // 707                                                                       // 1263
				case QRMaskPattern.PATTERN110 :                                                                                    // 1264
                                                                             // 708                                    // 1265
					return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };                                          // 1266
                                   // 709                                                                              // 1267
				case QRMaskPattern.PATTERN111 :                                                                                    // 1268
                                                                             // 710                                    // 1269
					return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };                                          // 1270
                                   // 711                                                                              // 1271
				default :                                                                                                          // 1272
                                                                                                   // 712              // 1273
					throw new Error('bad maskPattern:' + maskPattern);                                                                // 1274
                                                         // 713                                                        // 1275
				}                                                                                                                  // 1276
                                                                                                           // 714      // 1277
			};                                                                                                                  // 1278
                                                                                                           // 715      // 1279
			_this.getErrorCorrectPolynomial = function(errorCorrectLength) {                                                    // 1280
                                             // 716                                                                    // 1281
				var a = qrPolynomial([1], 0);                                                                                      // 1282
                                                                               // 717                                  // 1283
				for (var i = 0; i < errorCorrectLength; i += 1) {                                                                  // 1284
                                                           // 718                                                      // 1285
					a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );                                                            // 1286
                                                     // 719                                                            // 1287
				}                                                                                                                  // 1288
                                                                                                           // 720      // 1289
				return a;                                                                                                          // 1290
                                                                                                   // 721              // 1291
			};                                                                                                                  // 1292
                                                                                                           // 722      // 1293
			_this.getLengthInBits = function(mode, type) {                                                                      // 1294
                                                               // 723                                                  // 1295
				if (1 <= type && type < 10) {                                                                                      // 1296
                                                                               // 724                                  // 1297
					// 1 - 9                                                                                                          // 1298
                                                                                                   // 725              // 1299
					switch(mode) {                                                                                                    // 1300
                                                                                             // 726                    // 1301
					case QRMode.MODE_NUMBER 	: return 10;                                                                             // 1302
                                                                      // 727                                           // 1303
					case QRMode.MODE_ALPHA_NUM 	: return 9;                                                                           // 1304
                                                                    // 728                                             // 1305
					case QRMode.MODE_8BIT_BYTE	: return 8;                                                                            // 1306
                                                                     // 729                                            // 1307
					case QRMode.MODE_KANJI		: return 8;                                                                               // 1308
                                                                        // 730                                         // 1309
					default :                                                                                                         // 1310
                                                                                                  // 731               // 1311
						throw new Error('mode:' + mode);                                                                                 // 1312
                                                                          // 732                                       // 1313
					}                                                                                                                 // 1314
                                                                                                          // 733       // 1315
				} else if (type < 27) {                                                                                            // 1316
                                                                                     // 734                            // 1317
					// 10 - 26                                                                                                        // 1318
                                                                                                 // 735                // 1319
					switch(mode) {                                                                                                    // 1320
                                                                                             // 736                    // 1321
					case QRMode.MODE_NUMBER 	: return 12;                                                                             // 1322
                                                                      // 737                                           // 1323
					case QRMode.MODE_ALPHA_NUM 	: return 11;                                                                          // 1324
                                                                   // 738                                              // 1325
					case QRMode.MODE_8BIT_BYTE	: return 16;                                                                           // 1326
                                                                    // 739                                             // 1327
					case QRMode.MODE_KANJI		: return 10;                                                                              // 1328
                                                                       // 740                                          // 1329
					default :                                                                                                         // 1330
                                                                                                  // 741               // 1331
						throw new Error('mode:' + mode);                                                                                 // 1332
                                                                          // 742                                       // 1333
					}                                                                                                                 // 1334
                                                                                                          // 743       // 1335
				} else if (type < 41) {                                                                                            // 1336
                                                                                     // 744                            // 1337
					// 27 - 40                                                                                                        // 1338
                                                                                                 // 745                // 1339
					switch(mode) {                                                                                                    // 1340
                                                                                             // 746                    // 1341
					case QRMode.MODE_NUMBER 	: return 14;                                                                             // 1342
                                                                      // 747                                           // 1343
					case QRMode.MODE_ALPHA_NUM	: return 13;                                                                           // 1344
                                                                    // 748                                             // 1345
					case QRMode.MODE_8BIT_BYTE	: return 16;                                                                           // 1346
                                                                    // 749                                             // 1347
					case QRMode.MODE_KANJI		: return 12;                                                                              // 1348
                                                                       // 750                                          // 1349
					default :                                                                                                         // 1350
                                                                                                  // 751               // 1351
						throw new Error('mode:' + mode);                                                                                 // 1352
                                                                          // 752                                       // 1353
					}                                                                                                                 // 1354
                                                                                                          // 753       // 1355
				} else {                                                                                                           // 1356
                                                                                                    // 754             // 1357
					throw new Error('type:' + type);                                                                                  // 1358
                                                                           // 755                                      // 1359
				}                                                                                                                  // 1360
                                                                                                           // 756      // 1361
			};                                                                                                                  // 1362
                                                                                                           // 757      // 1363
			_this.getLostPoint = function(qrcode) {                                                                             // 1364
                                                                      // 758                                           // 1365
				var moduleCount = qrcode.getModuleCount();                                                                         // 1366
                                                                  // 759                                               // 1367
				var lostPoint = 0;                                                                                                 // 1368
                                                                                          // 760                       // 1369
				// LEVEL1                                                                                                          // 1370
                                                                                                   // 761              // 1371
				for (var row = 0; row < moduleCount; row += 1) {                                                                   // 1372
                                                            // 762                                                     // 1373
					for (var col = 0; col < moduleCount; col += 1) {                                                                  // 1374
                                                           // 763                                                      // 1375
						var sameCount = 0;                                                                                               // 1376
                                                                                        // 764                         // 1377
						var dark = qrcode.isDark(row, col);                                                                              // 1378
                                                                       // 765                                          // 1379
						for (var r = -1; r <= 1; r += 1) {                                                                               // 1380
                                                                        // 766                                         // 1381
							if (row + r < 0 || moduleCount <= row + r) {                                                                    // 1382
                                                             // 767                                                    // 1383
								continue;                                                                                                      // 1384
                                                                                               // 768                  // 1385
							}                                                                                                               // 1386
                                                                                                        // 769         // 1387
							for (var c = -1; c <= 1; c += 1) {                                                                              // 1388
                                                                       // 770                                          // 1389
								if (col + c < 0 || moduleCount <= col + c) {                                                                   // 1390
                                                            // 771                                                     // 1391
									continue;                                                                                                     // 1392
                                                                                              // 772                   // 1393
								}                                                                                                              // 1394
                                                                                                       // 773          // 1395
								if (r == 0 && c == 0) {                                                                                        // 1396
                                                                                 // 774                                // 1397
									continue;                                                                                                     // 1398
                                                                                              // 775                   // 1399
								}                                                                                                              // 1400
                                                                                                       // 776          // 1401
								if (dark == qrcode.isDark(row + r, col + c) ) {                                                                // 1402
                                                         // 777                                                        // 1403
									sameCount += 1;                                                                                               // 1404
                                                                                        // 778                         // 1405
								}                                                                                                              // 1406
                                                                                                       // 779          // 1407
							}                                                                                                               // 1408
                                                                                                        // 780         // 1409
						}                                                                                                                // 1410
                                                                                                         // 781        // 1411
						if (sameCount > 5) {                                                                                             // 1412
                                                                                      // 782                           // 1413
							lostPoint += (3 + sameCount - 5);                                                                               // 1414
                                                                        // 783                                         // 1415
						}                                                                                                                // 1416
                                                                                                         // 784        // 1417
					}                                                                                                                 // 1418
                                                                                                          // 785       // 1419
				};                                                                                                                 // 1420
                                                                                                          // 786       // 1421
				// LEVEL2                                                                                                          // 1422
                                                                                                   // 787              // 1423
				for (var row = 0; row < moduleCount - 1; row += 1) {                                                               // 1424
                                                        // 788                                                         // 1425
					for (var col = 0; col < moduleCount - 1; col += 1) {                                                              // 1426
                                                       // 789                                                          // 1427
						var count = 0;                                                                                                   // 1428
                                                                                            // 790                     // 1429
						if (qrcode.isDark(row, col) ) count += 1;                                                                        // 1430
                                                                 // 791                                                // 1431
						if (qrcode.isDark(row + 1, col) ) count += 1;                                                                    // 1432
                                                             // 792                                                    // 1433
						if (qrcode.isDark(row, col + 1) ) count += 1;                                                                    // 1434
                                                             // 793                                                    // 1435
						if (qrcode.isDark(row + 1, col + 1) ) count += 1;                                                                // 1436
                                                         // 794                                                        // 1437
						if (count == 0 || count == 4) {                                                                                  // 1438
                                                                           // 795                                      // 1439
							lostPoint += 3;                                                                                                 // 1440
                                                                                          // 796                       // 1441
						}                                                                                                                // 1442
                                                                                                         // 797        // 1443
					}                                                                                                                 // 1444
                                                                                                          // 798       // 1445
				}                                                                                                                  // 1446
                                                                                                           // 799      // 1447
				// LEVEL3                                                                                                          // 1448
                                                                                                   // 800              // 1449
				for (var row = 0; row < moduleCount; row += 1) {                                                                   // 1450
                                                            // 801                                                     // 1451
					for (var col = 0; col < moduleCount - 6; col += 1) {                                                              // 1452
                                                       // 802                                                          // 1453
						if (qrcode.isDark(row, col)                                                                                      // 1454
                                                                               // 803                                  // 1455
								&& !qrcode.isDark(row, col + 1)                                                                                // 1456
                                                                         // 804                                        // 1457
								&&  qrcode.isDark(row, col + 2)                                                                                // 1458
                                                                         // 805                                        // 1459
								&&  qrcode.isDark(row, col + 3)                                                                                // 1460
                                                                         // 806                                        // 1461
								&&  qrcode.isDark(row, col + 4)                                                                                // 1462
                                                                         // 807                                        // 1463
								&& !qrcode.isDark(row, col + 5)                                                                                // 1464
                                                                         // 808                                        // 1465
								&&  qrcode.isDark(row, col + 6) ) {                                                                            // 1466
                                                                     // 809                                            // 1467
							lostPoint += 40;                                                                                                // 1468
                                                                                         // 810                        // 1469
						}                                                                                                                // 1470
                                                                                                         // 811        // 1471
					}                                                                                                                 // 1472
                                                                                                          // 812       // 1473
				}                                                                                                                  // 1474
                                                                                                           // 813      // 1475
				for (var col = 0; col < moduleCount; col += 1) {                                                                   // 1476
                                                            // 814                                                     // 1477
					for (var row = 0; row < moduleCount - 6; row += 1) {                                                              // 1478
                                                       // 815                                                          // 1479
						if (qrcode.isDark(row, col)                                                                                      // 1480
                                                                               // 816                                  // 1481
								&& !qrcode.isDark(row + 1, col)                                                                                // 1482
                                                                         // 817                                        // 1483
								&&  qrcode.isDark(row + 2, col)                                                                                // 1484
                                                                         // 818                                        // 1485
								&&  qrcode.isDark(row + 3, col)                                                                                // 1486
                                                                         // 819                                        // 1487
								&&  qrcode.isDark(row + 4, col)                                                                                // 1488
                                                                         // 820                                        // 1489
								&& !qrcode.isDark(row + 5, col)                                                                                // 1490
                                                                         // 821                                        // 1491
								&&  qrcode.isDark(row + 6, col) ) {                                                                            // 1492
                                                                     // 822                                            // 1493
							lostPoint += 40;                                                                                                // 1494
                                                                                         // 823                        // 1495
						}                                                                                                                // 1496
                                                                                                         // 824        // 1497
					}                                                                                                                 // 1498
                                                                                                          // 825       // 1499
				}                                                                                                                  // 1500
                                                                                                           // 826      // 1501
				// LEVEL4                                                                                                          // 1502
                                                                                                   // 827              // 1503
				var darkCount = 0;                                                                                                 // 1504
                                                                                          // 828                       // 1505
				for (var col = 0; col < moduleCount; col += 1) {                                                                   // 1506
                                                            // 829                                                     // 1507
					for (var row = 0; row < moduleCount; row += 1) {                                                                  // 1508
                                                           // 830                                                      // 1509
						if (qrcode.isDark(row, col) ) {                                                                                  // 1510
                                                                           // 831                                      // 1511
							darkCount += 1;                                                                                                 // 1512
                                                                                          // 832                       // 1513
						}                                                                                                                // 1514
                                                                                                         // 833        // 1515
					}                                                                                                                 // 1516
                                                                                                          // 834       // 1517
				}                                                                                                                  // 1518
                                                                                                           // 835      // 1519
				var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;                                        // 1520
                                 // 836                                                                                // 1521
				lostPoint += ratio * 10;                                                                                           // 1522
                                                                                    // 837                             // 1523
				return lostPoint;                                                                                                  // 1524
                                                                                           // 838                      // 1525
			};                                                                                                                  // 1526
                                                                                                           // 839      // 1527
			return _this;                                                                                                       // 1528
                                                                                                // 840                 // 1529
		}();                                                                                                                 // 1530
                                                                                                          // 841       // 1531
		//---------------------------------------------------------------------                                              // 1532
                                       // 842                                                                          // 1533
		// QRMath                                                                                                            // 1534
                                                                                                     // 843            // 1535
		//---------------------------------------------------------------------                                              // 1536
                                       // 844                                                                          // 1537
		var QRMath = function() {                                                                                            // 1538
                                                                                     // 845                            // 1539
			var EXP_TABLE = new Array(256);                                                                                     // 1540
                                                                              // 846                                   // 1541
			var LOG_TABLE = new Array(256);                                                                                     // 1542
                                                                              // 847                                   // 1543
			// initialize tables                                                                                                // 1544
                                                                                         // 848                        // 1545
			for (var i = 0; i < 8; i += 1) {                                                                                    // 1546
                                                                             // 849                                    // 1547
				EXP_TABLE[i] = 1 << i;                                                                                             // 1548
                                                                                      // 850                           // 1549
			}                                                                                                                   // 1550
                                                                                                            // 851     // 1551
			for (var i = 8; i < 256; i += 1) {                                                                                  // 1552
                                                                           // 852                                      // 1553
				EXP_TABLE[i] = EXP_TABLE[i - 4]                                                                                    // 1554
                                                                             // 853                                    // 1555
					^ EXP_TABLE[i - 5]                                                                                                // 1556
                                                                                         // 854                        // 1557
					^ EXP_TABLE[i - 6]                                                                                                // 1558
                                                                                         // 855                        // 1559
					^ EXP_TABLE[i - 8];                                                                                               // 1560
                                                                                        // 856                         // 1561
			}                                                                                                                   // 1562
                                                                                                            // 857     // 1563
			for (var i = 0; i < 255; i += 1) {                                                                                  // 1564
                                                                           // 858                                      // 1565
				LOG_TABLE[EXP_TABLE[i] ] = i;                                                                                      // 1566
                                                                               // 859                                  // 1567
			}                                                                                                                   // 1568
                                                                                                            // 860     // 1569
			var _this = {};                                                                                                     // 1570
                                                                                              // 861                   // 1571
			_this.glog = function(n) {                                                                                          // 1572
                                                                                   // 862                              // 1573
				if (n < 1) {                                                                                                       // 1574
                                                                                                // 863                 // 1575
					throw new Error('glog(' + n + ')');                                                                               // 1576
                                                                        // 864                                         // 1577
				}                                                                                                                  // 1578
                                                                                                           // 865      // 1579
				return LOG_TABLE[n];                                                                                               // 1580
                                                                                        // 866                         // 1581
			};                                                                                                                  // 1582
                                                                                                           // 867      // 1583
			_this.gexp = function(n) {                                                                                          // 1584
                                                                                   // 868                              // 1585
				while (n < 0) {                                                                                                    // 1586
                                                                                             // 869                    // 1587
					n += 255;                                                                                                         // 1588
                                                                                                  // 870               // 1589
				}                                                                                                                  // 1590
                                                                                                           // 871      // 1591
				while (n >= 256) {                                                                                                 // 1592
                                                                                          // 872                       // 1593
					n -= 255;                                                                                                         // 1594
                                                                                                  // 873               // 1595
				}                                                                                                                  // 1596
                                                                                                           // 874      // 1597
				return EXP_TABLE[n];                                                                                               // 1598
                                                                                        // 875                         // 1599
			};                                                                                                                  // 1600
                                                                                                           // 876      // 1601
			return _this;                                                                                                       // 1602
                                                                                                // 877                 // 1603
		}();                                                                                                                 // 1604
                                                                                                          // 878       // 1605
		//---------------------------------------------------------------------                                              // 1606
                                       // 879                                                                          // 1607
		// qrPolynomial                                                                                                      // 1608
                                                                                               // 880                  // 1609
		//---------------------------------------------------------------------                                              // 1610
                                       // 881                                                                          // 1611
		function qrPolynomial(num, shift) {                                                                                  // 1612
                                                                           // 882                                      // 1613
			if (typeof num.length == 'undefined') {                                                                             // 1614
                                                                      // 883                                           // 1615
				throw new Error(num.length + '/' + shift);                                                                         // 1616
                                                                  // 884                                               // 1617
			}                                                                                                                   // 1618
                                                                                                            // 885     // 1619
			var _num = function() {                                                                                             // 1620
                                                                                      // 886                           // 1621
				var offset = 0;                                                                                                    // 1622
                                                                                             // 887                    // 1623
				while (offset < num.length && num[offset] == 0) {                                                                  // 1624
                                                           // 888                                                      // 1625
					offset += 1;                                                                                                      // 1626
                                                                                               // 889                  // 1627
				}                                                                                                                  // 1628
                                                                                                           // 890      // 1629
				var _num = new Array(num.length - offset + shift);                                                                 // 1630
                                                          // 891                                                       // 1631
				for (var i = 0; i < num.length - offset; i += 1) {                                                                 // 1632
                                                          // 892                                                       // 1633
					_num[i] = num[i + offset];                                                                                        // 1634
                                                                                 // 893                                // 1635
				}                                                                                                                  // 1636
                                                                                                           // 894      // 1637
				return _num;                                                                                                       // 1638
                                                                                                // 895                 // 1639
			}();                                                                                                                // 1640
                                                                                                         // 896        // 1641
			var _this = {};                                                                                                     // 1642
                                                                                              // 897                   // 1643
			_this.get = function(index) {                                                                                       // 1644
                                                                                // 898                                 // 1645
				return _num[index];                                                                                                // 1646
                                                                                         // 899                        // 1647
			};                                                                                                                  // 1648
                                                                                                           // 900      // 1649
			_this.getLength = function() {                                                                                      // 1650
                                                                               // 901                                  // 1651
				return _num.length;                                                                                                // 1652
                                                                                         // 902                        // 1653
			};                                                                                                                  // 1654
                                                                                                           // 903      // 1655
			_this.multiply = function(e) {                                                                                      // 1656
                                                                               // 904                                  // 1657
				var num = new Array(_this.getLength() + e.getLength() - 1);                                                        // 1658
                                                 // 905                                                                // 1659
				for (var i = 0; i < _this.getLength(); i += 1) {                                                                   // 1660
                                                            // 906                                                     // 1661
					for (var j = 0; j < e.getLength(); j += 1) {                                                                      // 1662
                                                               // 907                                                  // 1663
						num[i + j] ^= QRMath.gexp(QRMath.glog(_this.get(i) ) + QRMath.glog(e.get(j) ) );                                 // 1664
                          // 908                                                                                       // 1665
					}                                                                                                                 // 1666
                                                                                                          // 909       // 1667
				}                                                                                                                  // 1668
                                                                                                           // 910      // 1669
				return qrPolynomial(num, 0);                                                                                       // 1670
                                                                                // 911                                 // 1671
			};                                                                                                                  // 1672
                                                                                                           // 912      // 1673
			_this.mod = function(e) {                                                                                           // 1674
                                                                                    // 913                             // 1675
				if (_this.getLength() - e.getLength() < 0) {                                                                       // 1676
                                                                // 914                                                 // 1677
					return _this;                                                                                                     // 1678
                                                                                              // 915                   // 1679
				}                                                                                                                  // 1680
                                                                                                           // 916      // 1681
				var ratio = QRMath.glog(_this.get(0) ) - QRMath.glog(e.get(0) );                                                   // 1682
                                            // 917                                                                     // 1683
				var num = new Array(_this.getLength() );                                                                           // 1684
                                                                    // 918                                             // 1685
				for (var i = 0; i < _this.getLength(); i += 1) {                                                                   // 1686
                                                            // 919                                                     // 1687
					num[i] = _this.get(i);                                                                                            // 1688
                                                                                     // 920                            // 1689
				}                                                                                                                  // 1690
                                                                                                           // 921      // 1691
				for (var i = 0; i < e.getLength(); i += 1) {                                                                       // 1692
                                                                // 922                                                 // 1693
					num[i] ^= QRMath.gexp(QRMath.glog(e.get(i) ) + ratio);                                                            // 1694
                                                     // 923                                                            // 1695
				}                                                                                                                  // 1696
                                                                                                           // 924      // 1697
				// recursive call                                                                                                  // 1698
                                                                                           // 925                      // 1699
				return qrPolynomial(num, 0).mod(e);                                                                                // 1700
                                                                         // 926                                        // 1701
			};                                                                                                                  // 1702
                                                                                                           // 927      // 1703
			return _this;                                                                                                       // 1704
                                                                                                // 928                 // 1705
		};                                                                                                                   // 1706
                                                                                                            // 929     // 1707
		//---------------------------------------------------------------------                                              // 1708
                                       // 930                                                                          // 1709
		// QRRSBlock                                                                                                         // 1710
                                                                                                  // 931               // 1711
		//---------------------------------------------------------------------                                              // 1712
                                       // 932                                                                          // 1713
		var QRRSBlock = function() {                                                                                         // 1714
                                                                                  // 933                               // 1715
			var RS_BLOCK_TABLE = [                                                                                              // 1716
                                                                                       // 934                          // 1717
				// L                                                                                                               // 1718
                                                                                                        // 935         // 1719
				// M                                                                                                               // 1720
                                                                                                        // 936         // 1721
				// Q                                                                                                               // 1722
                                                                                                        // 937         // 1723
				// H                                                                                                               // 1724
                                                                                                        // 938         // 1725
				// 1                                                                                                               // 1726
                                                                                                        // 939         // 1727
				[1, 26, 19],                                                                                                       // 1728
                                                                                                // 940                 // 1729
				[1, 26, 16],                                                                                                       // 1730
                                                                                                // 941                 // 1731
				[1, 26, 13],                                                                                                       // 1732
                                                                                                // 942                 // 1733
				[1, 26, 9],                                                                                                        // 1734
                                                                                                 // 943                // 1735
				// 2                                                                                                               // 1736
                                                                                                        // 944         // 1737
				[1, 44, 34],                                                                                                       // 1738
                                                                                                // 945                 // 1739
				[1, 44, 28],                                                                                                       // 1740
                                                                                                // 946                 // 1741
				[1, 44, 22],                                                                                                       // 1742
                                                                                                // 947                 // 1743
				[1, 44, 16],                                                                                                       // 1744
                                                                                                // 948                 // 1745
				// 3                                                                                                               // 1746
                                                                                                        // 949         // 1747
				[1, 70, 55],                                                                                                       // 1748
                                                                                                // 950                 // 1749
				[1, 70, 44],                                                                                                       // 1750
                                                                                                // 951                 // 1751
				[2, 35, 17],                                                                                                       // 1752
                                                                                                // 952                 // 1753
				[2, 35, 13],                                                                                                       // 1754
                                                                                                // 953                 // 1755
				// 4                                                                                                               // 1756
                                                                                                        // 954         // 1757
				[1, 100, 80],                                                                                                      // 1758
                                                                                               // 955                  // 1759
				[2, 50, 32],                                                                                                       // 1760
                                                                                                // 956                 // 1761
				[2, 50, 24],                                                                                                       // 1762
                                                                                                // 957                 // 1763
				[4, 25, 9],                                                                                                        // 1764
                                                                                                 // 958                // 1765
				// 5                                                                                                               // 1766
                                                                                                        // 959         // 1767
				[1, 134, 108],                                                                                                     // 1768
                                                                                              // 960                   // 1769
				[2, 67, 43],                                                                                                       // 1770
                                                                                                // 961                 // 1771
				[2, 33, 15, 2, 34, 16],                                                                                            // 1772
                                                                                     // 962                            // 1773
				[2, 33, 11, 2, 34, 12],                                                                                            // 1774
                                                                                     // 963                            // 1775
				// 6                                                                                                               // 1776
                                                                                                        // 964         // 1777
				[2, 86, 68],                                                                                                       // 1778
                                                                                                // 965                 // 1779
				[4, 43, 27],                                                                                                       // 1780
                                                                                                // 966                 // 1781
				[4, 43, 19],                                                                                                       // 1782
                                                                                                // 967                 // 1783
				[4, 43, 15],                                                                                                       // 1784
                                                                                                // 968                 // 1785
				// 7                                                                                                               // 1786
                                                                                                        // 969         // 1787
				[2, 98, 78],                                                                                                       // 1788
                                                                                                // 970                 // 1789
				[4, 49, 31],                                                                                                       // 1790
                                                                                                // 971                 // 1791
				[2, 32, 14, 4, 33, 15],                                                                                            // 1792
                                                                                     // 972                            // 1793
				[4, 39, 13, 1, 40, 14],                                                                                            // 1794
                                                                                     // 973                            // 1795
				// 8                                                                                                               // 1796
                                                                                                        // 974         // 1797
				[2, 121, 97],                                                                                                      // 1798
                                                                                               // 975                  // 1799
				[2, 60, 38, 2, 61, 39],                                                                                            // 1800
                                                                                     // 976                            // 1801
				[4, 40, 18, 2, 41, 19],                                                                                            // 1802
                                                                                     // 977                            // 1803
				[4, 40, 14, 2, 41, 15],                                                                                            // 1804
                                                                                     // 978                            // 1805
				// 9                                                                                                               // 1806
                                                                                                        // 979         // 1807
				[2, 146, 116],                                                                                                     // 1808
                                                                                              // 980                   // 1809
				[3, 58, 36, 2, 59, 37],                                                                                            // 1810
                                                                                     // 981                            // 1811
				[4, 36, 16, 4, 37, 17],                                                                                            // 1812
                                                                                     // 982                            // 1813
				[4, 36, 12, 4, 37, 13],                                                                                            // 1814
                                                                                     // 983                            // 1815
				// 10                                                                                                              // 1816
                                                                                                       // 984          // 1817
				[2, 86, 68, 2, 87, 69],                                                                                            // 1818
                                                                                     // 985                            // 1819
				[4, 69, 43, 1, 70, 44],                                                                                            // 1820
                                                                                     // 986                            // 1821
				[6, 43, 19, 2, 44, 20],                                                                                            // 1822
                                                                                     // 987                            // 1823
				[6, 43, 15, 2, 44, 16],                                                                                            // 1824
                                                                                     // 988                            // 1825
				// 11                                                                                                              // 1826
                                                                                                       // 989          // 1827
				[4, 101, 81],                                                                                                      // 1828
                                                                                               // 990                  // 1829
				[1, 80, 50, 4, 81, 51],                                                                                            // 1830
                                                                                     // 991                            // 1831
				[4, 50, 22, 4, 51, 23],                                                                                            // 1832
                                                                                     // 992                            // 1833
				[3, 36, 12, 8, 37, 13],                                                                                            // 1834
                                                                                     // 993                            // 1835
				// 12                                                                                                              // 1836
                                                                                                       // 994          // 1837
				[2, 116, 92, 2, 117, 93],                                                                                          // 1838
                                                                                   // 995                              // 1839
				[6, 58, 36, 2, 59, 37],                                                                                            // 1840
                                                                                     // 996                            // 1841
				[4, 46, 20, 6, 47, 21],                                                                                            // 1842
                                                                                     // 997                            // 1843
				[7, 42, 14, 4, 43, 15],                                                                                            // 1844
                                                                                     // 998                            // 1845
				// 13                                                                                                              // 1846
                                                                                                       // 999          // 1847
				[4, 133, 107],                                                                                                     // 1848
                                                                                              // 1000                  // 1849
				[8, 59, 37, 1, 60, 38],                                                                                            // 1850
                                                                                     // 1001                           // 1851
				[8, 44, 20, 4, 45, 21],                                                                                            // 1852
                                                                                     // 1002                           // 1853
				[12, 33, 11, 4, 34, 12],                                                                                           // 1854
                                                                                    // 1003                            // 1855
				// 14                                                                                                              // 1856
                                                                                                       // 1004         // 1857
				[3, 145, 115, 1, 146, 116],                                                                                        // 1858
                                                                                 // 1005                               // 1859
				[4, 64, 40, 5, 65, 41],                                                                                            // 1860
                                                                                     // 1006                           // 1861
				[11, 36, 16, 5, 37, 17],                                                                                           // 1862
                                                                                    // 1007                            // 1863
				[11, 36, 12, 5, 37, 13],                                                                                           // 1864
                                                                                    // 1008                            // 1865
				// 15                                                                                                              // 1866
                                                                                                       // 1009         // 1867
				[5, 109, 87, 1, 110, 88],                                                                                          // 1868
                                                                                   // 1010                             // 1869
				[5, 65, 41, 5, 66, 42],                                                                                            // 1870
                                                                                     // 1011                           // 1871
				[5, 54, 24, 7, 55, 25],                                                                                            // 1872
                                                                                     // 1012                           // 1873
				[11, 36, 12],                                                                                                      // 1874
                                                                                               // 1013                 // 1875
				// 16                                                                                                              // 1876
                                                                                                       // 1014         // 1877
				[5, 122, 98, 1, 123, 99],                                                                                          // 1878
                                                                                   // 1015                             // 1879
				[7, 73, 45, 3, 74, 46],                                                                                            // 1880
                                                                                     // 1016                           // 1881
				[15, 43, 19, 2, 44, 20],                                                                                           // 1882
                                                                                    // 1017                            // 1883
				[3, 45, 15, 13, 46, 16],                                                                                           // 1884
                                                                                    // 1018                            // 1885
				// 17                                                                                                              // 1886
                                                                                                       // 1019         // 1887
				[1, 135, 107, 5, 136, 108],                                                                                        // 1888
                                                                                 // 1020                               // 1889
				[10, 74, 46, 1, 75, 47],                                                                                           // 1890
                                                                                    // 1021                            // 1891
				[1, 50, 22, 15, 51, 23],                                                                                           // 1892
                                                                                    // 1022                            // 1893
				[2, 42, 14, 17, 43, 15],                                                                                           // 1894
                                                                                    // 1023                            // 1895
				// 18                                                                                                              // 1896
                                                                                                       // 1024         // 1897
				[5, 150, 120, 1, 151, 121],                                                                                        // 1898
                                                                                 // 1025                               // 1899
				[9, 69, 43, 4, 70, 44],                                                                                            // 1900
                                                                                     // 1026                           // 1901
				[17, 50, 22, 1, 51, 23],                                                                                           // 1902
                                                                                    // 1027                            // 1903
				[2, 42, 14, 19, 43, 15],                                                                                           // 1904
                                                                                    // 1028                            // 1905
				// 19                                                                                                              // 1906
                                                                                                       // 1029         // 1907
				[3, 141, 113, 4, 142, 114],                                                                                        // 1908
                                                                                 // 1030                               // 1909
				[3, 70, 44, 11, 71, 45],                                                                                           // 1910
                                                                                    // 1031                            // 1911
				[17, 47, 21, 4, 48, 22],                                                                                           // 1912
                                                                                    // 1032                            // 1913
				[9, 39, 13, 16, 40, 14],                                                                                           // 1914
                                                                                    // 1033                            // 1915
				// 20                                                                                                              // 1916
                                                                                                       // 1034         // 1917
				[3, 135, 107, 5, 136, 108],                                                                                        // 1918
                                                                                 // 1035                               // 1919
				[3, 67, 41, 13, 68, 42],                                                                                           // 1920
                                                                                    // 1036                            // 1921
				[15, 54, 24, 5, 55, 25],                                                                                           // 1922
                                                                                    // 1037                            // 1923
				[15, 43, 15, 10, 44, 16],                                                                                          // 1924
                                                                                   // 1038                             // 1925
				// 21                                                                                                              // 1926
                                                                                                       // 1039         // 1927
				[4, 144, 116, 4, 145, 117],                                                                                        // 1928
                                                                                 // 1040                               // 1929
				[17, 68, 42],                                                                                                      // 1930
                                                                                               // 1041                 // 1931
				[17, 50, 22, 6, 51, 23],                                                                                           // 1932
                                                                                    // 1042                            // 1933
				[19, 46, 16, 6, 47, 17],                                                                                           // 1934
                                                                                    // 1043                            // 1935
				// 22                                                                                                              // 1936
                                                                                                       // 1044         // 1937
				[2, 139, 111, 7, 140, 112],                                                                                        // 1938
                                                                                 // 1045                               // 1939
				[17, 74, 46],                                                                                                      // 1940
                                                                                               // 1046                 // 1941
				[7, 54, 24, 16, 55, 25],                                                                                           // 1942
                                                                                    // 1047                            // 1943
				[34, 37, 13],                                                                                                      // 1944
                                                                                               // 1048                 // 1945
				// 23                                                                                                              // 1946
                                                                                                       // 1049         // 1947
				[4, 151, 121, 5, 152, 122],                                                                                        // 1948
                                                                                 // 1050                               // 1949
				[4, 75, 47, 14, 76, 48],                                                                                           // 1950
                                                                                    // 1051                            // 1951
				[11, 54, 24, 14, 55, 25],                                                                                          // 1952
                                                                                   // 1052                             // 1953
				[16, 45, 15, 14, 46, 16],                                                                                          // 1954
                                                                                   // 1053                             // 1955
				// 24                                                                                                              // 1956
                                                                                                       // 1054         // 1957
				[6, 147, 117, 4, 148, 118],                                                                                        // 1958
                                                                                 // 1055                               // 1959
				[6, 73, 45, 14, 74, 46],                                                                                           // 1960
                                                                                    // 1056                            // 1961
				[11, 54, 24, 16, 55, 25],                                                                                          // 1962
                                                                                   // 1057                             // 1963
				[30, 46, 16, 2, 47, 17],                                                                                           // 1964
                                                                                    // 1058                            // 1965
				// 25                                                                                                              // 1966
                                                                                                       // 1059         // 1967
				[8, 132, 106, 4, 133, 107],                                                                                        // 1968
                                                                                 // 1060                               // 1969
				[8, 75, 47, 13, 76, 48],                                                                                           // 1970
                                                                                    // 1061                            // 1971
				[7, 54, 24, 22, 55, 25],                                                                                           // 1972
                                                                                    // 1062                            // 1973
				[22, 45, 15, 13, 46, 16],                                                                                          // 1974
                                                                                   // 1063                             // 1975
				// 26                                                                                                              // 1976
                                                                                                       // 1064         // 1977
				[10, 142, 114, 2, 143, 115],                                                                                       // 1978
                                                                                // 1065                                // 1979
				[19, 74, 46, 4, 75, 47],                                                                                           // 1980
                                                                                    // 1066                            // 1981
				[28, 50, 22, 6, 51, 23],                                                                                           // 1982
                                                                                    // 1067                            // 1983
				[33, 46, 16, 4, 47, 17],                                                                                           // 1984
                                                                                    // 1068                            // 1985
				// 27                                                                                                              // 1986
                                                                                                       // 1069         // 1987
				[8, 152, 122, 4, 153, 123],                                                                                        // 1988
                                                                                 // 1070                               // 1989
				[22, 73, 45, 3, 74, 46],                                                                                           // 1990
                                                                                    // 1071                            // 1991
				[8, 53, 23, 26, 54, 24],                                                                                           // 1992
                                                                                    // 1072                            // 1993
				[12, 45, 15, 28, 46, 16],                                                                                          // 1994
                                                                                   // 1073                             // 1995
				// 28                                                                                                              // 1996
                                                                                                       // 1074         // 1997
				[3, 147, 117, 10, 148, 118],                                                                                       // 1998
                                                                                // 1075                                // 1999
				[3, 73, 45, 23, 74, 46],                                                                                           // 2000
                                                                                    // 1076                            // 2001
				[4, 54, 24, 31, 55, 25],                                                                                           // 2002
                                                                                    // 1077                            // 2003
				[11, 45, 15, 31, 46, 16],                                                                                          // 2004
                                                                                   // 1078                             // 2005
				// 29                                                                                                              // 2006
                                                                                                       // 1079         // 2007
				[7, 146, 116, 7, 147, 117],                                                                                        // 2008
                                                                                 // 1080                               // 2009
				[21, 73, 45, 7, 74, 46],                                                                                           // 2010
                                                                                    // 1081                            // 2011
				[1, 53, 23, 37, 54, 24],                                                                                           // 2012
                                                                                    // 1082                            // 2013
				[19, 45, 15, 26, 46, 16],                                                                                          // 2014
                                                                                   // 1083                             // 2015
				// 30                                                                                                              // 2016
                                                                                                       // 1084         // 2017
				[5, 145, 115, 10, 146, 116],                                                                                       // 2018
                                                                                // 1085                                // 2019
				[19, 75, 47, 10, 76, 48],                                                                                          // 2020
                                                                                   // 1086                             // 2021
				[15, 54, 24, 25, 55, 25],                                                                                          // 2022
                                                                                   // 1087                             // 2023
				[23, 45, 15, 25, 46, 16],                                                                                          // 2024
                                                                                   // 1088                             // 2025
				// 31                                                                                                              // 2026
                                                                                                       // 1089         // 2027
				[13, 145, 115, 3, 146, 116],                                                                                       // 2028
                                                                                // 1090                                // 2029
				[2, 74, 46, 29, 75, 47],                                                                                           // 2030
                                                                                    // 1091                            // 2031
				[42, 54, 24, 1, 55, 25],                                                                                           // 2032
                                                                                    // 1092                            // 2033
				[23, 45, 15, 28, 46, 16],                                                                                          // 2034
                                                                                   // 1093                             // 2035
				// 32                                                                                                              // 2036
                                                                                                       // 1094         // 2037
				[17, 145, 115],                                                                                                    // 2038
                                                                                             // 1095                   // 2039
				[10, 74, 46, 23, 75, 47],                                                                                          // 2040
                                                                                   // 1096                             // 2041
				[10, 54, 24, 35, 55, 25],                                                                                          // 2042
                                                                                   // 1097                             // 2043
				[19, 45, 15, 35, 46, 16],                                                                                          // 2044
                                                                                   // 1098                             // 2045
				// 33                                                                                                              // 2046
                                                                                                       // 1099         // 2047
				[17, 145, 115, 1, 146, 116],                                                                                       // 2048
                                                                                // 1100                                // 2049
				[14, 74, 46, 21, 75, 47],                                                                                          // 2050
                                                                                   // 1101                             // 2051
				[29, 54, 24, 19, 55, 25],                                                                                          // 2052
                                                                                   // 1102                             // 2053
				[11, 45, 15, 46, 46, 16],                                                                                          // 2054
                                                                                   // 1103                             // 2055
				// 34                                                                                                              // 2056
                                                                                                       // 1104         // 2057
				[13, 145, 115, 6, 146, 116],                                                                                       // 2058
                                                                                // 1105                                // 2059
				[14, 74, 46, 23, 75, 47],                                                                                          // 2060
                                                                                   // 1106                             // 2061
				[44, 54, 24, 7, 55, 25],                                                                                           // 2062
                                                                                    // 1107                            // 2063
				[59, 46, 16, 1, 47, 17],                                                                                           // 2064
                                                                                    // 1108                            // 2065
				// 35                                                                                                              // 2066
                                                                                                       // 1109         // 2067
				[12, 151, 121, 7, 152, 122],                                                                                       // 2068
                                                                                // 1110                                // 2069
				[12, 75, 47, 26, 76, 48],                                                                                          // 2070
                                                                                   // 1111                             // 2071
				[39, 54, 24, 14, 55, 25],                                                                                          // 2072
                                                                                   // 1112                             // 2073
				[22, 45, 15, 41, 46, 16],                                                                                          // 2074
                                                                                   // 1113                             // 2075
				// 36                                                                                                              // 2076
                                                                                                       // 1114         // 2077
				[6, 151, 121, 14, 152, 122],                                                                                       // 2078
                                                                                // 1115                                // 2079
				[6, 75, 47, 34, 76, 48],                                                                                           // 2080
                                                                                    // 1116                            // 2081
				[46, 54, 24, 10, 55, 25],                                                                                          // 2082
                                                                                   // 1117                             // 2083
				[2, 45, 15, 64, 46, 16],                                                                                           // 2084
                                                                                    // 1118                            // 2085
				// 37                                                                                                              // 2086
                                                                                                       // 1119         // 2087
				[17, 152, 122, 4, 153, 123],                                                                                       // 2088
                                                                                // 1120                                // 2089
				[29, 74, 46, 14, 75, 47],                                                                                          // 2090
                                                                                   // 1121                             // 2091
				[49, 54, 24, 10, 55, 25],                                                                                          // 2092
                                                                                   // 1122                             // 2093
				[24, 45, 15, 46, 46, 16],                                                                                          // 2094
                                                                                   // 1123                             // 2095
				// 38                                                                                                              // 2096
                                                                                                       // 1124         // 2097
				[4, 152, 122, 18, 153, 123],                                                                                       // 2098
                                                                                // 1125                                // 2099
				[13, 74, 46, 32, 75, 47],                                                                                          // 2100
                                                                                   // 1126                             // 2101
				[48, 54, 24, 14, 55, 25],                                                                                          // 2102
                                                                                   // 1127                             // 2103
				[42, 45, 15, 32, 46, 16],                                                                                          // 2104
                                                                                   // 1128                             // 2105
				// 39                                                                                                              // 2106
                                                                                                       // 1129         // 2107
				[20, 147, 117, 4, 148, 118],                                                                                       // 2108
                                                                                // 1130                                // 2109
				[40, 75, 47, 7, 76, 48],                                                                                           // 2110
                                                                                    // 1131                            // 2111
				[43, 54, 24, 22, 55, 25],                                                                                          // 2112
                                                                                   // 1132                             // 2113
				[10, 45, 15, 67, 46, 16],                                                                                          // 2114
                                                                                   // 1133                             // 2115
				// 40                                                                                                              // 2116
                                                                                                       // 1134         // 2117
				[19, 148, 118, 6, 149, 119],                                                                                       // 2118
                                                                                // 1135                                // 2119
				[18, 75, 47, 31, 76, 48],                                                                                          // 2120
                                                                                   // 1136                             // 2121
				[34, 54, 24, 34, 55, 25],                                                                                          // 2122
                                                                                   // 1137                             // 2123
				[20, 45, 15, 61, 46, 16]                                                                                           // 2124
                                                                                    // 1138                            // 2125
			];                                                                                                                  // 2126
                                                                                                           // 1139     // 2127
			var qrRSBlock = function(totalCount, dataCount) {                                                                   // 2128
                                                            // 1140                                                    // 2129
				var _this = {};                                                                                                    // 2130
                                                                                             // 1141                   // 2131
				_this.totalCount = totalCount;                                                                                     // 2132
                                                                              // 1142                                  // 2133
				_this.dataCount = dataCount;                                                                                       // 2134
                                                                                // 1143                                // 2135
				return _this;                                                                                                      // 2136
                                                                                               // 1144                 // 2137
			};                                                                                                                  // 2138
                                                                                                           // 1145     // 2139
			var _this = {};                                                                                                     // 2140
                                                                                              // 1146                  // 2141
			var getRsBlockTable = function(typeNumber, errorCorrectLevel) {                                                     // 2142
                                              // 1147                                                                  // 2143
				switch(errorCorrectLevel) {                                                                                        // 2144
                                                                                 // 1148                               // 2145
				case QRErrorCorrectLevel.L :                                                                                       // 2146
                                                                                // 1149                                // 2147
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];                                                                  // 2148
                                                           // 1150                                                     // 2149
				case QRErrorCorrectLevel.M :                                                                                       // 2150
                                                                                // 1151                                // 2151
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];                                                                  // 2152
                                                           // 1152                                                     // 2153
				case QRErrorCorrectLevel.Q :                                                                                       // 2154
                                                                                // 1153                                // 2155
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];                                                                  // 2156
                                                           // 1154                                                     // 2157
				case QRErrorCorrectLevel.H :                                                                                       // 2158
                                                                                // 1155                                // 2159
					return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];                                                                  // 2160
                                                           // 1156                                                     // 2161
				default :                                                                                                          // 2162
                                                                                                   // 1157             // 2163
					return undefined;                                                                                                 // 2164
                                                                                          // 1158                      // 2165
				}                                                                                                                  // 2166
                                                                                                           // 1159     // 2167
			};                                                                                                                  // 2168
                                                                                                           // 1160     // 2169
			_this.getRSBlocks = function(typeNumber, errorCorrectLevel) {                                                       // 2170
                                                // 1161                                                                // 2171
				var rsBlock = getRsBlockTable(typeNumber, errorCorrectLevel);                                                      // 2172
                                               // 1162                                                                 // 2173
				if (typeof rsBlock == 'undefined') {                                                                               // 2174
                                                                        // 1163                                        // 2175
					throw new Error('bad rs block @ typeNumber:' + typeNumber +                                                       // 2176
                                                // 1164                                                                // 2177
							'/errorCorrectLevel:' + errorCorrectLevel);                                                                     // 2178
                                                              // 1165                                                  // 2179
				}                                                                                                                  // 2180
                                                                                                           // 1166     // 2181
				var length = rsBlock.length / 3;                                                                                   // 2182
                                                                            // 1167                                    // 2183
				var list = new Array();                                                                                            // 2184
                                                                                     // 1168                           // 2185
				for (var i = 0; i < length; i += 1) {                                                                              // 2186
                                                                       // 1169                                         // 2187
					var count = rsBlock[i * 3 + 0];                                                                                   // 2188
                                                                            // 1170                                    // 2189
					var totalCount = rsBlock[i * 3 + 1];                                                                              // 2190
                                                                       // 1171                                         // 2191
					var dataCount = rsBlock[i * 3 + 2];                                                                               // 2192
                                                                        // 1172                                        // 2193
					for (var j = 0; j < count; j += 1) {                                                                              // 2194
                                                                       // 1173                                         // 2195
						list.push(qrRSBlock(totalCount, dataCount) );                                                                    // 2196
                                                             // 1174                                                   // 2197
					}                                                                                                                 // 2198
                                                                                                          // 1175      // 2199
				}                                                                                                                  // 2200
                                                                                                           // 1176     // 2201
				return list;                                                                                                       // 2202
                                                                                                // 1177                // 2203
			};                                                                                                                  // 2204
                                                                                                           // 1178     // 2205
			return _this;                                                                                                       // 2206
                                                                                                // 1179                // 2207
		}();                                                                                                                 // 2208
                                                                                                          // 1180      // 2209
		//---------------------------------------------------------------------                                              // 2210
                                       // 1181                                                                         // 2211
		// qrBitBuffer                                                                                                       // 2212
                                                                                                // 1182                // 2213
		//---------------------------------------------------------------------                                              // 2214
                                       // 1183                                                                         // 2215
		var qrBitBuffer = function() {                                                                                       // 2216
                                                                                // 1184                                // 2217
			var _buffer = new Array();                                                                                          // 2218
                                                                                   // 1185                             // 2219
			var _length = 0;                                                                                                    // 2220
                                                                                             // 1186                   // 2221
			var _this = {};                                                                                                     // 2222
                                                                                              // 1187                  // 2223
			_this.getBuffer = function() {                                                                                      // 2224
                                                                               // 1188                                 // 2225
				return _buffer;                                                                                                    // 2226
                                                                                             // 1189                   // 2227
			};                                                                                                                  // 2228
                                                                                                           // 1190     // 2229
			_this.get = function(index) {                                                                                       // 2230
                                                                                // 1191                                // 2231
				var bufIndex = Math.floor(index / 8);                                                                              // 2232
                                                                       // 1192                                         // 2233
				return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;                                                       // 2234
                                                // 1193                                                                // 2235
			};                                                                                                                  // 2236
                                                                                                           // 1194     // 2237
			_this.put = function(num, length) {                                                                                 // 2238
                                                                          // 1195                                      // 2239
				for (var i = 0; i < length; i += 1) {                                                                              // 2240
                                                                       // 1196                                         // 2241
					_this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);                                                           // 2242
                                                    // 1197                                                            // 2243
				}                                                                                                                  // 2244
                                                                                                           // 1198     // 2245
			};                                                                                                                  // 2246
                                                                                                           // 1199     // 2247
			_this.getLengthInBits = function() {                                                                                // 2248
                                                                         // 1200                                       // 2249
				return _length;                                                                                                    // 2250
                                                                                             // 1201                   // 2251
			};                                                                                                                  // 2252
                                                                                                           // 1202     // 2253
			_this.putBit = function(bit) {                                                                                      // 2254
                                                                               // 1203                                 // 2255
				var bufIndex = Math.floor(_length / 8);                                                                            // 2256
                                                                     // 1204                                           // 2257
				if (_buffer.length <= bufIndex) {                                                                                  // 2258
                                                                           // 1205                                     // 2259
					_buffer.push(0);                                                                                                  // 2260
                                                                                           // 1206                     // 2261
				}                                                                                                                  // 2262
                                                                                                           // 1207     // 2263
				if (bit) {                                                                                                         // 2264
                                                                                                  // 1208              // 2265
					_buffer[bufIndex] |= (0x80 >>> (_length % 8) );                                                                   // 2266
                                                            // 1209                                                    // 2267
				}                                                                                                                  // 2268
                                                                                                           // 1210     // 2269
				_length += 1;                                                                                                      // 2270
                                                                                               // 1211                 // 2271
			};                                                                                                                  // 2272
                                                                                                           // 1212     // 2273
			return _this;                                                                                                       // 2274
                                                                                                // 1213                // 2275
		};                                                                                                                   // 2276
                                                                                                            // 1214    // 2277
		//---------------------------------------------------------------------                                              // 2278
                                       // 1215                                                                         // 2279
		// qr8BitByte                                                                                                        // 2280
                                                                                                 // 1216               // 2281
		//---------------------------------------------------------------------                                              // 2282
                                       // 1217                                                                         // 2283
		var qr8BitByte = function(data) {                                                                                    // 2284
                                                                             // 1218                                   // 2285
			var _mode = QRMode.MODE_8BIT_BYTE;                                                                                  // 2286
                                                                           // 1219                                     // 2287
			var _data = data;                                                                                                   // 2288
                                                                                            // 1220                    // 2289
			var _bytes = qrcode.stringToBytes(data);                                                                            // 2290
                                                                     // 1221                                           // 2291
			var _this = {};                                                                                                     // 2292
                                                                                              // 1222                  // 2293
			_this.getMode = function() {                                                                                        // 2294
                                                                                 // 1223                               // 2295
				return _mode;                                                                                                      // 2296
                                                                                               // 1224                 // 2297
			};                                                                                                                  // 2298
                                                                                                           // 1225     // 2299
			_this.getLength = function(buffer) {                                                                                // 2300
                                                                         // 1226                                       // 2301
				return _bytes.length;                                                                                              // 2302
                                                                                       // 1227                         // 2303
			};                                                                                                                  // 2304
                                                                                                           // 1228     // 2305
			_this.write = function(buffer) {                                                                                    // 2306
                                                                             // 1229                                   // 2307
				for (var i = 0; i < _bytes.length; i += 1) {                                                                       // 2308
                                                                // 1230                                                // 2309
					buffer.put(_bytes[i], 8);                                                                                         // 2310
                                                                                  // 1231                              // 2311
				}                                                                                                                  // 2312
                                                                                                           // 1232     // 2313
			};                                                                                                                  // 2314
                                                                                                           // 1233     // 2315
			return _this;                                                                                                       // 2316
                                                                                                // 1234                // 2317
		};                                                                                                                   // 2318
                                                                                                            // 1235    // 2319
		//=====================================================================                                              // 2320
                                       // 1236                                                                         // 2321
		// GIF Support etc.                                                                                                  // 2322
                                                                                           // 1237                     // 2323
		//                                                                                                                   // 2324
                                                                                                            // 1238    // 2325
		//---------------------------------------------------------------------                                              // 2326
                                       // 1239                                                                         // 2327
		// byteArrayOutputStream                                                                                             // 2328
                                                                                      // 1240                          // 2329
		//---------------------------------------------------------------------                                              // 2330
                                       // 1241                                                                         // 2331
		var byteArrayOutputStream = function() {                                                                             // 2332
                                                                      // 1242                                          // 2333
			var _bytes = new Array();                                                                                           // 2334
                                                                                    // 1243                            // 2335
			var _this = {};                                                                                                     // 2336
                                                                                              // 1244                  // 2337
			_this.writeByte = function(b) {                                                                                     // 2338
                                                                              // 1245                                  // 2339
				_bytes.push(b & 0xff);                                                                                             // 2340
                                                                                      // 1246                          // 2341
			};                                                                                                                  // 2342
                                                                                                           // 1247     // 2343
			_this.writeShort = function(i) {                                                                                    // 2344
                                                                             // 1248                                   // 2345
				_this.writeByte(i);                                                                                                // 2346
                                                                                         // 1249                       // 2347
				_this.writeByte(i >>> 8);                                                                                          // 2348
                                                                                   // 1250                             // 2349
			};                                                                                                                  // 2350
                                                                                                           // 1251     // 2351
			_this.writeBytes = function(b, off, len) {                                                                          // 2352
                                                                   // 1252                                             // 2353
				off = off || 0;                                                                                                    // 2354
                                                                                             // 1253                   // 2355
				len = len || b.length;                                                                                             // 2356
                                                                                      // 1254                          // 2357
				for (var i = 0; i < len; i += 1) {                                                                                 // 2358
                                                                          // 1255                                      // 2359
					_this.writeByte(b[i + off]);                                                                                      // 2360
                                                                               // 1256                                 // 2361
				}                                                                                                                  // 2362
                                                                                                           // 1257     // 2363
			};                                                                                                                  // 2364
                                                                                                           // 1258     // 2365
			_this.writeString = function(s) {                                                                                   // 2366
                                                                            // 1259                                    // 2367
				for (var i = 0; i < s.length; i += 1) {                                                                            // 2368
                                                                     // 1260                                           // 2369
					_this.writeByte(s.charCodeAt(i) );                                                                                // 2370
                                                                         // 1261                                       // 2371
				}                                                                                                                  // 2372
                                                                                                           // 1262     // 2373
			};                                                                                                                  // 2374
                                                                                                           // 1263     // 2375
			_this.toByteArray = function() {                                                                                    // 2376
                                                                             // 1264                                   // 2377
				return _bytes;                                                                                                     // 2378
                                                                                              // 1265                  // 2379
			};                                                                                                                  // 2380
                                                                                                           // 1266     // 2381
			_this.toString = function() {                                                                                       // 2382
                                                                                // 1267                                // 2383
				var s = '';                                                                                                        // 2384
                                                                                                 // 1268               // 2385
				s += '[';                                                                                                          // 2386
                                                                                                   // 1269             // 2387
				for (var i = 0; i < _bytes.length; i += 1) {                                                                       // 2388
                                                                // 1270                                                // 2389
					if (i > 0) {                                                                                                      // 2390
                                                                                               // 1271                 // 2391
						s += ',';                                                                                                        // 2392
                                                                                                 // 1272               // 2393
					}                                                                                                                 // 2394
                                                                                                          // 1273      // 2395
					s += _bytes[i];                                                                                                   // 2396
                                                                                            // 1274                    // 2397
				}                                                                                                                  // 2398
                                                                                                           // 1275     // 2399
				s += ']';                                                                                                          // 2400
                                                                                                   // 1276             // 2401
				return s;                                                                                                          // 2402
                                                                                                   // 1277             // 2403
			};                                                                                                                  // 2404
                                                                                                           // 1278     // 2405
			return _this;                                                                                                       // 2406
                                                                                                // 1279                // 2407
		};                                                                                                                   // 2408
                                                                                                            // 1280    // 2409
		//---------------------------------------------------------------------                                              // 2410
                                       // 1281                                                                         // 2411
		// base64EncodeOutputStream                                                                                          // 2412
                                                                                   // 1282                             // 2413
		//---------------------------------------------------------------------                                              // 2414
                                       // 1283                                                                         // 2415
		var base64EncodeOutputStream = function() {                                                                          // 2416
                                                                   // 1284                                             // 2417
			var _buffer = 0;                                                                                                    // 2418
                                                                                             // 1285                   // 2419
			var _buflen = 0;                                                                                                    // 2420
                                                                                             // 1286                   // 2421
			var _length = 0;                                                                                                    // 2422
                                                                                             // 1287                   // 2423
			var _base64 = '';                                                                                                   // 2424
                                                                                            // 1288                    // 2425
			var _this = {};                                                                                                     // 2426
                                                                                              // 1289                  // 2427
			var writeEncoded = function(b) {                                                                                    // 2428
                                                                             // 1290                                   // 2429
				_base64 += String.fromCharCode(encode(b & 0x3f) );                                                                 // 2430
                                                          // 1291                                                      // 2431
			};                                                                                                                  // 2432
                                                                                                           // 1292     // 2433
			var encode = function(n) {                                                                                          // 2434
                                                                                   // 1293                             // 2435
				if (n < 0) {                                                                                                       // 2436
                                                                                                // 1294                // 2437
					// error.                                                                                                         // 2438
                                                                                                  // 1295              // 2439
				} else if (n < 26) {                                                                                               // 2440
                                                                                        // 1296                        // 2441
					return 0x41 + n;                                                                                                  // 2442
                                                                                           // 1297                     // 2443
				} else if (n < 52) {                                                                                               // 2444
                                                                                        // 1298                        // 2445
					return 0x61 + (n - 26);                                                                                           // 2446
                                                                                    // 1299                            // 2447
				} else if (n < 62) {                                                                                               // 2448
                                                                                        // 1300                        // 2449
					return 0x30 + (n - 52);                                                                                           // 2450
                                                                                    // 1301                            // 2451
				} else if (n == 62) {                                                                                              // 2452
                                                                                       // 1302                         // 2453
					return 0x2b;                                                                                                      // 2454
                                                                                               // 1303                 // 2455
				} else if (n == 63) {                                                                                              // 2456
                                                                                       // 1304                         // 2457
					return 0x2f;                                                                                                      // 2458
                                                                                               // 1305                 // 2459
				}                                                                                                                  // 2460
                                                                                                           // 1306     // 2461
				throw new Error('n:' + n);                                                                                         // 2462
                                                                                  // 1307                              // 2463
			};                                                                                                                  // 2464
                                                                                                           // 1308     // 2465
			_this.writeByte = function(n) {                                                                                     // 2466
                                                                              // 1309                                  // 2467
				_buffer = (_buffer << 8) | (n & 0xff);                                                                             // 2468
                                                                      // 1310                                          // 2469
				_buflen += 8;                                                                                                      // 2470
                                                                                               // 1311                 // 2471
				_length += 1;                                                                                                      // 2472
                                                                                               // 1312                 // 2473
				while (_buflen >= 6) {                                                                                             // 2474
                                                                                      // 1313                          // 2475
					writeEncoded(_buffer >>> (_buflen - 6) );                                                                         // 2476
                                                                  // 1314                                              // 2477
					_buflen -= 6;                                                                                                     // 2478
                                                                                              // 1315                  // 2479
				}                                                                                                                  // 2480
                                                                                                           // 1316     // 2481
			};                                                                                                                  // 2482
                                                                                                           // 1317     // 2483
			_this.flush = function() {                                                                                          // 2484
                                                                                   // 1318                             // 2485
				if (_buflen > 0) {                                                                                                 // 2486
                                                                                          // 1319                      // 2487
					writeEncoded(_buffer << (6 - _buflen) );                                                                          // 2488
                                                                   // 1320                                             // 2489
					_buffer = 0;                                                                                                      // 2490
                                                                                               // 1321                 // 2491
					_buflen = 0;                                                                                                      // 2492
                                                                                               // 1322                 // 2493
				}                                                                                                                  // 2494
                                                                                                           // 1323     // 2495
				if (_length % 3 != 0) {                                                                                            // 2496
                                                                                     // 1324                           // 2497
					// padding                                                                                                        // 2498
                                                                                                 // 1325               // 2499
					var padlen = 3 - _length % 3;                                                                                     // 2500
                                                                              // 1326                                  // 2501
					for (var i = 0; i < padlen; i += 1) {                                                                             // 2502
                                                                      // 1327                                          // 2503
						_base64 += '=';                                                                                                  // 2504
                                                                                           // 1328                     // 2505
					}                                                                                                                 // 2506
                                                                                                          // 1329      // 2507
				}                                                                                                                  // 2508
                                                                                                           // 1330     // 2509
			};                                                                                                                  // 2510
                                                                                                           // 1331     // 2511
			_this.toString = function() {                                                                                       // 2512
                                                                                // 1332                                // 2513
				return _base64;                                                                                                    // 2514
                                                                                             // 1333                   // 2515
			};                                                                                                                  // 2516
                                                                                                           // 1334     // 2517
			return _this;                                                                                                       // 2518
                                                                                                // 1335                // 2519
		};                                                                                                                   // 2520
                                                                                                            // 1336    // 2521
		//---------------------------------------------------------------------                                              // 2522
                                       // 1337                                                                         // 2523
		// base64DecodeInputStream                                                                                           // 2524
                                                                                    // 1338                            // 2525
		//---------------------------------------------------------------------                                              // 2526
                                       // 1339                                                                         // 2527
		var base64DecodeInputStream = function(str) {                                                                        // 2528
                                                                 // 1340                                               // 2529
			var _str = str;                                                                                                     // 2530
                                                                                              // 1341                  // 2531
			var _pos = 0;                                                                                                       // 2532
                                                                                                // 1342                // 2533
			var _buffer = 0;                                                                                                    // 2534
                                                                                             // 1343                   // 2535
			var _buflen = 0;                                                                                                    // 2536
                                                                                             // 1344                   // 2537
			var _this = {};                                                                                                     // 2538
                                                                                              // 1345                  // 2539
			_this.read = function() {                                                                                           // 2540
                                                                                    // 1346                            // 2541
				while (_buflen < 8) {                                                                                              // 2542
                                                                                       // 1347                         // 2543
					if (_pos >= _str.length) {                                                                                        // 2544
                                                                                 // 1348                               // 2545
						if (_buflen == 0) {                                                                                              // 2546
                                                                                       // 1349                         // 2547
							return -1;                                                                                                      // 2548
                                                                                               // 1350                 // 2549
						}                                                                                                                // 2550
                                                                                                         // 1351       // 2551
						throw new Error('unexpected end of file./' + _buflen);                                                           // 2552
                                                    // 1352                                                            // 2553
					}                                                                                                                 // 2554
                                                                                                          // 1353      // 2555
					var c = _str.charAt(_pos);                                                                                        // 2556
                                                                                 // 1354                               // 2557
					_pos += 1;                                                                                                        // 2558
                                                                                                 // 1355               // 2559
					if (c == '=') {                                                                                                   // 2560
                                                                                            // 1356                    // 2561
						_buflen = 0;                                                                                                     // 2562
                                                                                              // 1357                  // 2563
						return -1;                                                                                                       // 2564
                                                                                                // 1358                // 2565
					} else if (c.match(/^\s$/) ) {                                                                                    // 2566
                                                                             // 1359                                   // 2567
						// ignore if whitespace.                                                                                         // 2568
                                                                                  // 1360                              // 2569
						continue;                                                                                                        // 2570
                                                                                                 // 1361               // 2571
					}                                                                                                                 // 2572
                                                                                                          // 1362      // 2573
					_buffer = (_buffer << 6) | decode(c.charCodeAt(0) );                                                              // 2574
                                                       // 1363                                                         // 2575
					_buflen += 6;                                                                                                     // 2576
                                                                                              // 1364                  // 2577
				}                                                                                                                  // 2578
                                                                                                           // 1365     // 2579
				var n = (_buffer >>> (_buflen - 8) ) & 0xff;                                                                       // 2580
                                                                // 1366                                                // 2581
				_buflen -= 8;                                                                                                      // 2582
                                                                                               // 1367                 // 2583
				return n;                                                                                                          // 2584
                                                                                                   // 1368             // 2585
			};                                                                                                                  // 2586
                                                                                                           // 1369     // 2587
			var decode = function(c) {                                                                                          // 2588
                                                                                   // 1370                             // 2589
				if (0x41 <= c && c <= 0x5a) {                                                                                      // 2590
                                                                               // 1371                                 // 2591
					return c - 0x41;                                                                                                  // 2592
                                                                                           // 1372                     // 2593
				} else if (0x61 <= c && c <= 0x7a) {                                                                               // 2594
                                                                        // 1373                                        // 2595
					return c - 0x61 + 26;                                                                                             // 2596
                                                                                      // 1374                          // 2597
				} else if (0x30 <= c && c <= 0x39) {                                                                               // 2598
                                                                        // 1375                                        // 2599
					return c - 0x30 + 52;                                                                                             // 2600
                                                                                      // 1376                          // 2601
				} else if (c == 0x2b) {                                                                                            // 2602
                                                                                     // 1377                           // 2603
					return 62;                                                                                                        // 2604
                                                                                                 // 1378               // 2605
				} else if (c == 0x2f) {                                                                                            // 2606
                                                                                     // 1379                           // 2607
					return 63;                                                                                                        // 2608
                                                                                                 // 1380               // 2609
				} else {                                                                                                           // 2610
                                                                                                    // 1381            // 2611
					throw new Error('c:' + c);                                                                                        // 2612
                                                                                 // 1382                               // 2613
				}                                                                                                                  // 2614
                                                                                                           // 1383     // 2615
			};                                                                                                                  // 2616
                                                                                                           // 1384     // 2617
			return _this;                                                                                                       // 2618
                                                                                                // 1385                // 2619
		};                                                                                                                   // 2620
                                                                                                            // 1386    // 2621
		//---------------------------------------------------------------------                                              // 2622
                                       // 1387                                                                         // 2623
		// gifImage (B/W)                                                                                                    // 2624
                                                                                             // 1388                   // 2625
		//---------------------------------------------------------------------                                              // 2626
                                       // 1389                                                                         // 2627
		var gifImage = function(width, height) {                                                                             // 2628
                                                                      // 1390                                          // 2629
			var _width = width;                                                                                                 // 2630
                                                                                          // 1391                      // 2631
			var _height = height;                                                                                               // 2632
                                                                                        // 1392                        // 2633
			var _data = new Array(width * height);                                                                              // 2634
                                                                       // 1393                                         // 2635
			var _this = {};                                                                                                     // 2636
                                                                                              // 1394                  // 2637
			_this.setPixel = function(x, y, pixel) {                                                                            // 2638
                                                                     // 1395                                           // 2639
				_data[y * _width + x] = pixel;                                                                                     // 2640
                                                                              // 1396                                  // 2641
			};                                                                                                                  // 2642
                                                                                                           // 1397     // 2643
			_this.write = function(out) {                                                                                       // 2644
                                                                                // 1398                                // 2645
				//---------------------------------                                                                                // 2646
                                                                         // 1399                                       // 2647
				// GIF Signature                                                                                                   // 2648
                                                                                            // 1400                    // 2649
				out.writeString('GIF87a');                                                                                         // 2650
                                                                                  // 1401                              // 2651
				//---------------------------------                                                                                // 2652
                                                                         // 1402                                       // 2653
				// Screen Descriptor                                                                                               // 2654
                                                                                        // 1403                        // 2655
				out.writeShort(_width);                                                                                            // 2656
                                                                                     // 1404                           // 2657
				out.writeShort(_height);                                                                                           // 2658
                                                                                    // 1405                            // 2659
				out.writeByte(0x80); // 2bit                                                                                       // 2660
                                                                                // 1406                                // 2661
				out.writeByte(0);                                                                                                  // 2662
                                                                                           // 1407                     // 2663
				out.writeByte(0);                                                                                                  // 2664
                                                                                           // 1408                     // 2665
				//---------------------------------                                                                                // 2666
                                                                         // 1409                                       // 2667
				// Global Color Map                                                                                                // 2668
                                                                                         // 1410                       // 2669
				// black                                                                                                           // 2670
                                                                                                    // 1411            // 2671
				out.writeByte(0x00);                                                                                               // 2672
                                                                                        // 1412                        // 2673
				out.writeByte(0x00);                                                                                               // 2674
                                                                                        // 1413                        // 2675
				out.writeByte(0x00);                                                                                               // 2676
                                                                                        // 1414                        // 2677
				// white                                                                                                           // 2678
                                                                                                    // 1415            // 2679
				out.writeByte(0xff);                                                                                               // 2680
                                                                                        // 1416                        // 2681
				out.writeByte(0xff);                                                                                               // 2682
                                                                                        // 1417                        // 2683
				out.writeByte(0xff);                                                                                               // 2684
                                                                                        // 1418                        // 2685
				//---------------------------------                                                                                // 2686
                                                                         // 1419                                       // 2687
				// Image Descriptor                                                                                                // 2688
                                                                                         // 1420                       // 2689
				out.writeString(',');                                                                                              // 2690
                                                                                       // 1421                         // 2691
				out.writeShort(0);                                                                                                 // 2692
                                                                                          // 1422                      // 2693
				out.writeShort(0);                                                                                                 // 2694
                                                                                          // 1423                      // 2695
				out.writeShort(_width);                                                                                            // 2696
                                                                                     // 1424                           // 2697
				out.writeShort(_height);                                                                                           // 2698
                                                                                    // 1425                            // 2699
				out.writeByte(0);                                                                                                  // 2700
                                                                                           // 1426                     // 2701
				//---------------------------------                                                                                // 2702
                                                                         // 1427                                       // 2703
				// Local Color Map                                                                                                 // 2704
                                                                                          // 1428                      // 2705
				//---------------------------------                                                                                // 2706
                                                                         // 1429                                       // 2707
				// Raster Data                                                                                                     // 2708
                                                                                              // 1430                  // 2709
				var lzwMinCodeSize = 2;                                                                                            // 2710
                                                                                     // 1431                           // 2711
				var raster = getLZWRaster(lzwMinCodeSize);                                                                         // 2712
                                                                  // 1432                                              // 2713
				out.writeByte(lzwMinCodeSize);                                                                                     // 2714
                                                                              // 1433                                  // 2715
				var offset = 0;                                                                                                    // 2716
                                                                                             // 1434                   // 2717
				while (raster.length - offset > 255) {                                                                             // 2718
                                                                      // 1435                                          // 2719
					out.writeByte(255);                                                                                               // 2720
                                                                                        // 1436                        // 2721
					out.writeBytes(raster, offset, 255);                                                                              // 2722
                                                                       // 1437                                         // 2723
					offset += 255;                                                                                                    // 2724
                                                                                             // 1438                   // 2725
				}                                                                                                                  // 2726
                                                                                                           // 1439     // 2727
				out.writeByte(raster.length - offset);                                                                             // 2728
                                                                      // 1440                                          // 2729
				out.writeBytes(raster, offset, raster.length - offset);                                                            // 2730
                                                     // 1441                                                           // 2731
				out.writeByte(0x00);                                                                                               // 2732
                                                                                        // 1442                        // 2733
				//---------------------------------                                                                                // 2734
                                                                         // 1443                                       // 2735
				// GIF Terminator                                                                                                  // 2736
                                                                                           // 1444                     // 2737
				out.writeString(';');                                                                                              // 2738
                                                                                       // 1445                         // 2739
			};                                                                                                                  // 2740
                                                                                                           // 1446     // 2741
			var bitOutputStream = function(out) {                                                                               // 2742
                                                                        // 1447                                        // 2743
				var _out = out;                                                                                                    // 2744
                                                                                             // 1448                   // 2745
				var _bitLength = 0;                                                                                                // 2746
                                                                                         // 1449                       // 2747
				var _bitBuffer = 0;                                                                                                // 2748
                                                                                         // 1450                       // 2749
				var _this = {};                                                                                                    // 2750
                                                                                             // 1451                   // 2751
				_this.write = function(data, length) {                                                                             // 2752
                                                                      // 1452                                          // 2753
					if ( (data >>> length) != 0) {                                                                                    // 2754
                                                                             // 1453                                   // 2755
						throw new Error('length over');                                                                                  // 2756
                                                                           // 1454                                     // 2757
					}                                                                                                                 // 2758
                                                                                                          // 1455      // 2759
					while (_bitLength + length >= 8) {                                                                                // 2760
                                                                         // 1456                                       // 2761
						_out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );                                                    // 2762
                                             // 1457                                                                   // 2763
						length -= (8 - _bitLength);                                                                                      // 2764
                                                                               // 1458                                 // 2765
						data >>>= (8 - _bitLength);                                                                                      // 2766
                                                                               // 1459                                 // 2767
						_bitBuffer = 0;                                                                                                  // 2768
                                                                                           // 1460                     // 2769
						_bitLength = 0;                                                                                                  // 2770
                                                                                           // 1461                     // 2771
					}                                                                                                                 // 2772
                                                                                                          // 1462      // 2773
					_bitBuffer = (data << _bitLength) | _bitBuffer;                                                                   // 2774
                                                            // 1463                                                    // 2775
					_bitLength = _bitLength + length;                                                                                 // 2776
                                                                          // 1464                                      // 2777
				};                                                                                                                 // 2778
                                                                                                          // 1465      // 2779
				_this.flush = function() {                                                                                         // 2780
                                                                                  // 1466                              // 2781
					if (_bitLength > 0) {                                                                                             // 2782
                                                                                      // 1467                          // 2783
						_out.writeByte(_bitBuffer);                                                                                      // 2784
                                                                               // 1468                                 // 2785
					}                                                                                                                 // 2786
                                                                                                          // 1469      // 2787
				};                                                                                                                 // 2788
                                                                                                          // 1470      // 2789
				return _this;                                                                                                      // 2790
                                                                                               // 1471                 // 2791
			};                                                                                                                  // 2792
                                                                                                           // 1472     // 2793
			var getLZWRaster = function(lzwMinCodeSize) {                                                                       // 2794
                                                                // 1473                                                // 2795
				var clearCode = 1 << lzwMinCodeSize;                                                                               // 2796
                                                                        // 1474                                        // 2797
				var endCode = (1 << lzwMinCodeSize) + 1;                                                                           // 2798
                                                                    // 1475                                            // 2799
				var bitLength = lzwMinCodeSize + 1;                                                                                // 2800
                                                                         // 1476                                       // 2801
				// Setup LZWTable                                                                                                  // 2802
                                                                                           // 1477                     // 2803
				var table = lzwTable();                                                                                            // 2804
                                                                                     // 1478                           // 2805
				for (var i = 0; i < clearCode; i += 1) {                                                                           // 2806
                                                                    // 1479                                            // 2807
					table.add(String.fromCharCode(i) );                                                                               // 2808
                                                                        // 1480                                        // 2809
				}                                                                                                                  // 2810
                                                                                                           // 1481     // 2811
				table.add(String.fromCharCode(clearCode) );                                                                        // 2812
                                                                 // 1482                                               // 2813
				table.add(String.fromCharCode(endCode) );                                                                          // 2814
                                                                   // 1483                                             // 2815
				var byteOut = byteArrayOutputStream();                                                                             // 2816
                                                                      // 1484                                          // 2817
				var bitOut = bitOutputStream(byteOut);                                                                             // 2818
                                                                      // 1485                                          // 2819
				// clear code                                                                                                      // 2820
                                                                                               // 1486                 // 2821
				bitOut.write(clearCode, bitLength);                                                                                // 2822
                                                                         // 1487                                       // 2823
				var dataIndex = 0;                                                                                                 // 2824
                                                                                          // 1488                      // 2825
				var s = String.fromCharCode(_data[dataIndex]);                                                                     // 2826
                                                              // 1489                                                  // 2827
				dataIndex += 1;                                                                                                    // 2828
                                                                                             // 1490                   // 2829
				while (dataIndex < _data.length) {                                                                                 // 2830
                                                                          // 1491                                      // 2831
					var c = String.fromCharCode(_data[dataIndex]);                                                                    // 2832
                                                             // 1492                                                   // 2833
					dataIndex += 1;                                                                                                   // 2834
                                                                                            // 1493                    // 2835
					if (table.contains(s + c) ) {                                                                                     // 2836
                                                                              // 1494                                  // 2837
						s = s + c;                                                                                                       // 2838
                                                                                                // 1495                // 2839
					} else {                                                                                                          // 2840
                                                                                                   // 1496             // 2841
						bitOut.write(table.indexOf(s), bitLength);                                                                       // 2842
                                                                // 1497                                                // 2843
						if (table.size() < 0xfff) {                                                                                      // 2844
                                                                               // 1498                                 // 2845
							if (table.size() == (1 << bitLength) ) {                                                                        // 2846
                                                                 // 1499                                               // 2847
								bitLength += 1;                                                                                                // 2848
                                                                                         // 1500                       // 2849
							}                                                                                                               // 2850
                                                                                                        // 1501        // 2851
							table.add(s + c);                                                                                               // 2852
                                                                                        // 1502                        // 2853
						}                                                                                                                // 2854
                                                                                                         // 1503       // 2855
						s = c;                                                                                                           // 2856
                                                                                                    // 1504            // 2857
					}                                                                                                                 // 2858
                                                                                                          // 1505      // 2859
				}                                                                                                                  // 2860
                                                                                                           // 1506     // 2861
				bitOut.write(table.indexOf(s), bitLength);                                                                         // 2862
                                                                  // 1507                                              // 2863
				// end code                                                                                                        // 2864
                                                                                                 // 1508               // 2865
				bitOut.write(endCode, bitLength);                                                                                  // 2866
                                                                           // 1509                                     // 2867
				bitOut.flush();                                                                                                    // 2868
                                                                                             // 1510                   // 2869
				return byteOut.toByteArray();                                                                                      // 2870
                                                                               // 1511                                 // 2871
			};                                                                                                                  // 2872
                                                                                                           // 1512     // 2873
			var lzwTable = function() {                                                                                         // 2874
                                                                                  // 1513                              // 2875
				var _map = {};                                                                                                     // 2876
                                                                                              // 1514                  // 2877
				var _size = 0;                                                                                                     // 2878
                                                                                              // 1515                  // 2879
				var _this = {};                                                                                                    // 2880
                                                                                             // 1516                   // 2881
				_this.add = function(key) {                                                                                        // 2882
                                                                                 // 1517                               // 2883
					if (_this.contains(key) ) {                                                                                       // 2884
                                                                                // 1518                                // 2885
						throw new Error('dup key:' + key);                                                                               // 2886
                                                                        // 1519                                        // 2887
					}                                                                                                                 // 2888
                                                                                                          // 1520      // 2889
					_map[key] = _size;                                                                                                // 2890
                                                                                         // 1521                       // 2891
					_size += 1;                                                                                                       // 2892
                                                                                                // 1522                // 2893
				};                                                                                                                 // 2894
                                                                                                          // 1523      // 2895
				_this.size = function() {                                                                                          // 2896
                                                                                   // 1524                             // 2897
					return _size;                                                                                                     // 2898
                                                                                              // 1525                  // 2899
				};                                                                                                                 // 2900
                                                                                                          // 1526      // 2901
				_this.indexOf = function(key) {                                                                                    // 2902
                                                                             // 1527                                   // 2903
					return _map[key];                                                                                                 // 2904
                                                                                          // 1528                      // 2905
				};                                                                                                                 // 2906
                                                                                                          // 1529      // 2907
				_this.contains = function(key) {                                                                                   // 2908
                                                                            // 1530                                    // 2909
					return typeof _map[key] != 'undefined';                                                                           // 2910
                                                                    // 1531                                            // 2911
				};                                                                                                                 // 2912
                                                                                                          // 1532      // 2913
				return _this;                                                                                                      // 2914
                                                                                               // 1533                 // 2915
			};                                                                                                                  // 2916
                                                                                                           // 1534     // 2917
			return _this;                                                                                                       // 2918
                                                                                                // 1535                // 2919
		};                                                                                                                   // 2920
                                                                                                            // 1536    // 2921
		var createImgTag = function(width, height, getPixel, alt) {                                                          // 2922
                                                   // 1537                                                             // 2923
			var gif = gifImage(width, height);                                                                                  // 2924
                                                                           // 1538                                     // 2925
			for (var y = 0; y < height; y += 1) {                                                                               // 2926
                                                                        // 1539                                        // 2927
				for (var x = 0; x < width; x += 1) {                                                                               // 2928
                                                                        // 1540                                        // 2929
					gif.setPixel(x, y, getPixel(x, y) );                                                                              // 2930
                                                                       // 1541                                         // 2931
				}                                                                                                                  // 2932
                                                                                                           // 1542     // 2933
			}                                                                                                                   // 2934
                                                                                                            // 1543    // 2935
			var b = byteArrayOutputStream();                                                                                    // 2936
                                                                             // 1544                                   // 2937
			gif.write(b);                                                                                                       // 2938
                                                                                                // 1545                // 2939
			var base64 = base64EncodeOutputStream();                                                                            // 2940
                                                                     // 1546                                           // 2941
			var bytes = b.toByteArray();                                                                                        // 2942
                                                                                 // 1547                               // 2943
			for (var i = 0; i < bytes.length; i += 1) {                                                                         // 2944
                                                                  // 1548                                              // 2945
				base64.writeByte(bytes[i]);                                                                                        // 2946
                                                                                 // 1549                               // 2947
			}                                                                                                                   // 2948
                                                                                                            // 1550    // 2949
			base64.flush();                                                                                                     // 2950
                                                                                              // 1551                  // 2951
			var img = '';                                                                                                       // 2952
                                                                                                // 1552                // 2953
			img += '<img';                                                                                                      // 2954
                                                                                               // 1553                 // 2955
			img += '\u0020src="';                                                                                               // 2956
                                                                                        // 1554                        // 2957
			img += 'data:image/gif;base64,';                                                                                    // 2958
                                                                             // 1555                                   // 2959
			img += base64;                                                                                                      // 2960
                                                                                               // 1556                 // 2961
			img += '"';                                                                                                         // 2962
                                                                                                  // 1557              // 2963
			img += '\u0020width="';                                                                                             // 2964
                                                                                      // 1558                          // 2965
			img += width;                                                                                                       // 2966
                                                                                                // 1559                // 2967
			img += '"';                                                                                                         // 2968
                                                                                                  // 1560              // 2969
			img += '\u0020height="';                                                                                            // 2970
                                                                                     // 1561                           // 2971
			img += height;                                                                                                      // 2972
                                                                                               // 1562                 // 2973
			img += '"';                                                                                                         // 2974
                                                                                                  // 1563              // 2975
			if (alt) {                                                                                                          // 2976
                                                                                                   // 1564             // 2977
				img += '\u0020alt="';                                                                                              // 2978
                                                                                       // 1565                         // 2979
				img += alt;                                                                                                        // 2980
                                                                                                 // 1566               // 2981
				img += '"';                                                                                                        // 2982
                                                                                                 // 1567               // 2983
			}                                                                                                                   // 2984
                                                                                                            // 1568    // 2985
			img += '/>';                                                                                                        // 2986
                                                                                                 // 1569               // 2987
			return img;                                                                                                         // 2988
                                                                                                  // 1570              // 2989
		};                                                                                                                   // 2990
                                                                                                            // 1571    // 2991
		//---------------------------------------------------------------------                                              // 2992
                                       // 1572                                                                         // 2993
		// returns qrcode function.                                                                                          // 2994
                                                                                   // 1573                             // 2995
		return qrcode;                                                                                                       // 2996
                                                                                                // 1574                // 2997
	}();                                                                                                                  // 2998
                                                                                                           // 1575     // 2999
                                                                                                                 // 1576
}(jQuery));                                                                                                      // 1577
                                                                                                                 // 1578
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////    // 3003
                                                                                                                       // 3004
}).call(this);                                                                                                         // 3005
                                                                                                                       // 3006
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['steeve:jquery-qrcode'] = {};

})();
