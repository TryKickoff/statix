/*	Author:
		TMW - (Author Name Here)
*/

// --------------------------------------------- //
// DEFINE GLOBAL LIBS                            //
// --------------------------------------------- //
// Uncomment the line below to expose jQuery as a global object to the usual places
// window.jQuery = window.$ = require('./libs/jquery/jquery-1.10.2.js');

// force compilation of global libs that don't return a value.
require("./helpers/log");
require("./helpers/shims");

//initialise KO object
var KO = {};

KO.Config = {
	variableX : '', // please don't keep me - only for example syntax!

	init : function () {
		console.debug('Kickoff is running');

		// Example module include
		KO.UI = require('./modules/UI');
		KO.UI.init();
	}
};


KO.Config.init();