
'use strict';

module.exports = function exists(variable, options) {
	if (typeof variable !== 'undefined') {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
};
