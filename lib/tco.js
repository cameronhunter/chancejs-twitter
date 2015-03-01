var merge = require("merge");
var chance = require("chance").Chance();

var tco = "https://t.co/";

module.exports = function(options) {
  options = merge({ length: tco.length + 6 }, options || {});
  var hash = chance.string({
    pool: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    length: (options.length - tco.length) || 6
  });
  return tco + hash;
};
