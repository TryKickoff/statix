/**
 * The
 */
module.exports.register = function (Handlebars, options) {
  'use strict';
	Handlebars.registerHelper('exists', function(variable, options) {
		if (typeof variable !== 'undefined') {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});
}
