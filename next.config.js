/* global __dirname */
require('dotenv').config();
const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  dir: path.resolve(__dirname, './src'),
});
