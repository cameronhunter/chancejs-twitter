var merge = require("merge");
var chance = require("chance").Chance();

module.exports = function(options) {
  options = merge({ length: 7, name: chance.name() }, options || {});
  var screenname = "@" + options.name.replace(/\s/, '');
  var suffix = screenname.length > options.length ? '' : '_' + chance.word({ length: options.length - (screenname.length + 1) });
  return (screenname + suffix).toLowerCase().substring(0, options.length);
};
