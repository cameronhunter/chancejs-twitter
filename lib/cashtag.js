var merge = require("merge");
var chance = require("chance").Chance();

module.exports = function(options) {
  options = merge({ length: 7 }, options || {});
  return "$" + chance.word({ length: options.length - 1 });
};
