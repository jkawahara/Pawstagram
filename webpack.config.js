// Read environment specific variables (process.env)
var Dotenv = require("dotenv-webpack");

module.exports = {
  plugins: [new Dotenv()]
};
