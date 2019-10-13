const next = require('next');
const express = require('express');
const applyGraphQLmiddleware = require('./graph');

const routes = require('./routes');

const port = 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const expressApp = express();
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  applyGraphQLmiddleware({ app: expressApp });

  expressApp.use(handler).listen(port, function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
