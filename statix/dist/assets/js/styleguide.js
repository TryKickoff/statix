/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/ashley.nolan/_projects/_setup/trykickoff/statix/assets/dist/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(8);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = function (callback) {

		if (document.readyState === 'complete' || document.readyState === 'interactive') {
			// Already ready or interactive, execute callback
			callback.call();
		}
		else if (document.attachEvent) {
			// Old browsers
			document.attachEvent('onreadystatechange', function () {
				if (document.readyState === 'interactive')
					callback.call();
			});
		}
		else if (document.addEventListener) {
			// Modern browsers
			document.addEventListener('DOMContentLoaded', callback);
		}
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	/**
	 * $$
	 * @description Loop over DOM elements more easily
	 *
	 * @usage $$('.foo').forEach(function(item) { // do something });
	 */

	module.exports = function $$(selector, context) {
		context = context || document;
		var elements = context.querySelectorAll(selector); return Array.prototype.slice.call(elements);
	}


/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _liteReady = __webpack_require__(2);

	var _liteReady2 = _interopRequireDefault(_liteReady);

	var _doubleDollar = __webpack_require__(3);

	var _doubleDollar2 = _interopRequireDefault(_doubleDollar);

	var _copy = __webpack_require__(9);

	var _copy2 = _interopRequireDefault(_copy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _liteReady2.default)(function () {

		(0, _doubleDollar2.default)('.sg-swatch').forEach(function (item) {
			item.addEventListener('click', function (e) {
				var swatchVar = e.currentTarget.querySelector('.sg-swatch-var').innerText;
				var target = e.currentTarget;
				target.classList.add('is-active');

				(0, _copy2.default)(swatchVar, function () {
					console.log('copied ', swatchVar);

					setTimeout(function () {
						target.classList.remove('is-active');
					}, 500);
				});
			}, false);
		});
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	var copyJs = copyJs || function copyJs(text, callback) {
	    var fakeEle = document.createElement("textarea");

	    // Place in top-left corner of screen regardless of scroll position.
	    fakeEle.style.position = 'fixed';
	    fakeEle.style.top = 0;
	    fakeEle.style.left = 0;

	    // Ensure it has a small width and height. Setting to 1px / 1em
	    // doesn't work as this gives a negative w/h on some browsers.
	    fakeEle.style.width = '1px';
	    fakeEle.style.height = '1px';

	    // We don't need padding, reducing the size if it does flash render.
	    fakeEle.style.padding = 0;

	    // Clean up any borders.
	    fakeEle.style.border = 'none';
	    fakeEle.style.outline = 'none';
	    fakeEle.style.boxShadow = 'none';

	    // Avoid flash of white box if rendered for any reason.
	    fakeEle.style.background = 'transparent';

	    // Text to copy
	    fakeEle.value = text;

	    document.body.appendChild(fakeEle);

	    fakeEle.select();

	    var error = null;
	    try {
	        var successful = document.execCommand('copy');
	        error = successful ? false : true;
	    } catch (err) {
	        console.warn('Unable to copy.');
	        error = true;
	    }

	    // Clean up
	    document.body.removeChild(fakeEle);

	    if (callback) callback(error);
	    return !!error;
	}

	// export
	if (window) window.copy = copyJs;
	module.exports = copyJs;

/***/ }
/******/ ]);
//# sourceMappingURL=styleguide.js.map