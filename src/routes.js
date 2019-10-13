const routes = require('next-routes');

const appRoute = routes()
appRoute.add('home', '/', 'index');

module.exports = appRoute;