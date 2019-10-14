/* global __dirname */
require('dotenv').config();
const path = require('path');
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  dir: path.resolve(__dirname, './src'),
  env: {
    PORT: process.env.PORT,
    API_URL: process.env.API_URL,
    GRAPH_URL: process.env.GRAPH_URL,
    GRAPH_PORT: process.env.GRAPH_PORT,
  },
});
