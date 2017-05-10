/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/Users/ashley.nolan/_projects/_setup/trykickoff/statix/assets/dist/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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


/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lite_ready__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lite_ready___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lite_ready__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_double_dollar__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_double_dollar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_double_dollar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_copy_js_src_copy_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_copy_js_src_copy_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_copy_js_src_copy_js__);




__WEBPACK_IMPORTED_MODULE_0_lite_ready___default()(function () {

	__WEBPACK_IMPORTED_MODULE_1_double_dollar___default()('.sg-swatch').forEach(function (item) {
		item.addEventListener('click', function (e) {
			var swatchVar = e.currentTarget.querySelector('.sg-swatch-var').innerText;
			var target = e.currentTarget;
			target.classList.add('is-active');

			__WEBPACK_IMPORTED_MODULE_2_copy_js_src_copy_js___default()(swatchVar, function () {
				console.log('copied ', swatchVar);

				setTimeout(function () {
					target.classList.remove('is-active');
				}, 500);
			});
		}, false);
	});
});

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

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

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);
//# sourceMappingURL=styleguide.js.map