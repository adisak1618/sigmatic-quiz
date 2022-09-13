const withTM = require("next-transpile-modules")(["ui"]);
const withImages = require("next-images");

module.exports = withImages(withTM({
  reactStrictMode: true,
}));
