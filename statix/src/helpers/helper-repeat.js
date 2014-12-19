/**
 * Repeat the content inside a Handlebars block expression
 * @param  {Number} n     Number of times to duplicate content.
 * @param  {Object} opts  Options object
 * @return {String}       Content repeated n times
 *
 * @example:
 *    {{#repeat 10}}
 *      <div id="{{@index}}">
 *        foo
 *      </div>
 *    {{/repeat}}
 */
module.exports.register = function (Handlebars, options) {
	'use strict';
	options = options || {};

	Handlebars.registerHelper('repeat', function(n, options) {
		options = options || {};

		var _data = {};
		if (options._data) {
			_data = Handlebars.createFrame(options._data || {});
		}

		var content = '';
		var count = n - 1;
		for (var i = 0; i <= count; i++) {
			_data = {
				index: i
			};
			content += options.fn(this, {
				data: _data
			});
		}
		return new Handlebars.SafeString(content);
	});
};
