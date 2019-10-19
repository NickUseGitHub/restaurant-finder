const routes = require('next-routes');

const appRoute = routes();
appRoute.add('home', '/', 'index');
appRoute.add('restaurants', '/restaurants', 'restaurants');
appRoute.add('stringMatcher', '/stringMatcher', 'stringMatcher');

module.exports = appRoute;
