const withTM = require("next-transpile-modules")(["ui"]);
const withImages = require("next-images");

module.exports = withImages(withTM({
  reactStrictMode: true,
  env: {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    GQL_URL: process.env.GQL_URL,
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    ADMIN_SECRET: process.env.ADMIN_SECRET
  }
}));
