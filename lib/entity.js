var merge = require("merge");
var chance = require("chance").Chance();
var cashtag = require("./cashtag");
var hashtag = require("./hashtag");
var screenname = require("./screenname");
var tco = require("./tco");

module.exports = {
  mention: mention,
  cashtag: text.bind(null, cashtag),
  hashtag: text.bind(null, hashtag),
  url: url
};

function mention(options) {
  options = merge({ start: 0, end: 7 }, options || {});
  var length = options.end - options.start;
  var id = options.id || chance.natural();
  var name = options.name || chance.name();
  var username = screenname({ name: name, length: length });
  return {
    screen_name: username,
    name: name,
    id: id,
    id_str: String(id),
    indices: [options.start, options.end]
  };
}

function text(generator, options) {
  options = merge({ start: 0, end: 7 }, options || {});
  var length = options.end - options.start;
  return {
    text: generator({ length: length }),
    indices: [options.start, options.end]
  };
}

function url(options) {
  options = merge({ start: 0, end: 16 }, options || {});
  var length = options.end - options.start;
  var newUrl = chance.domain();
  return {
    url: tco({ length: length }),
    expanded_url: "https://" + newUrl,
    display_url: newUrl,
    indices: [options.start, options.end]
  };
}
