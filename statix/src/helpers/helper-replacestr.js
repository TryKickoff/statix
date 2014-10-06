module.exports.register = function (Handlebars, options) {
  'use strict';

  Handlebars.registerHelper('replaceStr', function (haystack, needle, replacement) {
    return haystack.replace(needle, replacement);
  });
  //}
};