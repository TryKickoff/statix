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
/******/ 	__webpack_require__.p = "/Users/ashley.nolan/_projects/_sites/the-adventure-begins/assets/dist/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/**
	 * Project Name: Kickoff
	 * @description The Kickoff boilerplate js file
	 * @author The Kickoff team
	 *
	 * Need help using JSDoc? Find out more at http://usejsdoc.org/
	 */

	'use-strict';

	// their code e.g. npm modules

	var _liteReady = __webpack_require__(2);

	var _liteReady2 = _interopRequireDefault(_liteReady);

	var _doubleDollar = __webpack_require__(3);

	var _doubleDollar2 = _interopRequireDefault(_doubleDollar);

	var _svg4everybody = __webpack_require__(4);

	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

	__webpack_require__(5);

	__webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// The Kickoff message in the js console. Remove it if you like :)

	// our code
	// this is a test, uncomment the line below to try it
	// import moduleTest from './modules/module-test';

	// https://github.com/jonathantneal/svg4everybody

	// Global libs that don't return a value
	// https://github.com/nicbell/liteready
	window.$$ = _doubleDollar2.default; // add double-dollar to global scope

	// DOM ready code goes in here
	// https://github.com/mrmartineau/double-dollar
	(0, _liteReady2.default)(function () {
	  // moduleTest(); // this is a test, uncomment this line to try it
	  (0, _svg4everybody2.default)();
	});

/***/ },
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
	     true ? // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return root.svg4everybody = factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof exports ? module.exports = factory() : root.svg4everybody = factory();
	}(this, function() {
	    /*! svg4everybody v2.1.0 | github.com/jonathantneal/svg4everybody */
	    function embed(svg, target) {
	        // if the target exists
	        if (target) {
	            // create a document fragment to hold the contents of the target
	            var fragment = document.createDocumentFragment(), viewBox = !svg.getAttribute("viewBox") && target.getAttribute("viewBox");
	            // conditionally set the viewBox on the svg
	            viewBox && svg.setAttribute("viewBox", viewBox);
	            // copy the contents of the clone into the fragment
	            for (// clone the target
	            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
	                fragment.appendChild(clone.firstChild);
	            }
	            // append the fragment into the svg
	            svg.appendChild(fragment);
	        }
	    }
	    function loadreadystatechange(xhr) {
	        // listen to changes in the request
	        xhr.onreadystatechange = function() {
	            // if the request is ready
	            if (4 === xhr.readyState) {
	                // get the cached html document
	                var cachedDocument = xhr._cachedDocument;
	                // ensure the cached html document based on the xhr response
	                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
	                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
	                xhr._embeds.splice(0).map(function(item) {
	                    // get the cached target
	                    var target = xhr._cachedTarget[item.id];
	                    // ensure the cached target
	                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
	                    // embed the target into the svg
	                    embed(item.svg, target);
	                });
	            }
	        }, // test the ready state change immediately
	        xhr.onreadystatechange();
	    }
	    function svg4everybody(rawopts) {
	        function oninterval() {
	            // while the index exists in the live <use> collection
	            for (// get the cached <use> index
	            var index = 0; index < uses.length; ) {
	                // get the current <use>
	                var use = uses[index], svg = use.parentNode;
	                if (svg && /svg/i.test(svg.nodeName)) {
	                    var src = use.getAttribute("xlink:href");
	                    if (polyfill && (!opts.validate || opts.validate(src, svg, use))) {
	                        // remove the <use> element
	                        svg.removeChild(use);
	                        // parse the src and get the url and id
	                        var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
	                        // if the link is external
	                        if (url.length) {
	                            // get the cached xhr request
	                            var xhr = requests[url];
	                            // ensure the xhr request exists
	                            xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
	                            xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
	                            xhr._embeds.push({
	                                svg: svg,
	                                id: id
	                            }), // prepare the xhr ready state change event
	                            loadreadystatechange(xhr);
	                        } else {
	                            // embed the local id into the svg
	                            embed(svg, document.getElementById(id));
	                        }
	                    }
	                } else {
	                    // increase the index when the previous value was not "valid"
	                    ++index;
	                }
	            }
	            // continue the interval
	            requestAnimationFrame(oninterval, 67);
	        }
	        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
	        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
	        // create xhr requests object
	        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use");
	        // conditionally start the interval if the polyfill is active
	        polyfill && oninterval();
	    }
	    return svg4everybody;
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {// Avoid `console` errors in environments that lack a console.
	var method;
	var noop = function () {};
	var methods = [
	    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
	    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
	    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
	    'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;

	while (length--) {
	  method = methods[length];

	  // Only stub undefined methods.
	  if (!console[method]) {
	    console[method] = noop;
	  }
	}

	if ((typeof module !== "undefined" && module !== null) && module.exports) {
	  exports = module.exports = console;
	} else {
	  window.console = console;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * kickoff-welcome.js
	 * @module Kickoff
	 * @description A JS console welcome message for the Kickoff framework
	 * @author Zander Martineau
	 */
	const colors = {
		'dark': 'color: #181830;',
		'orange': 'color: #FE7C08;',
		'link': 'color: #6699CC;',
	};

	module.exports = console.log(`

	   %c██╗  ██╗██╗ ██████╗██╗  ██╗ %c██████╗ ███████╗███████╗
	   %c██║ ██╔╝██║██╔════╝██║ ██╔╝%c██╔═══██╗██╔════╝██╔════╝
	   %c█████╔╝ ██║██║     █████╔╝ %c██║   ██║█████╗  █████╗
	   %c██╔═██╗ ██║██║     ██╔═██╗ %c██║   ██║██╔══╝  ██╔══╝
	   %c██║  ██╗██║╚██████╗██║  ██╗%c╚██████╔╝██║     ██║
	   %c╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝ %c╚═════╝ ╚═╝     ╚═╝

	   %cThis site was built with the Kickoff framework

	   For more information & documentation go to %chttp://trykickoff.com

	   `,
	   colors.dark,
	   colors.orange,
	   colors.dark,
	   colors.orange,
	   colors.dark,
	   colors.orange,
	   colors.dark,
	   colors.orange,
	   colors.dark,
	   colors.orange,
	   colors.dark,
	   colors.orange,
	   colors.dark,
	   colors.link
	);


/***/ }
/******/ ]);
//# sourceMappingURL=kickoff.js.map