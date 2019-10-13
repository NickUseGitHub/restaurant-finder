const next = require('next')
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const routes = require('./routes')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const graphServer = new ApolloServer({ typeDefs, resolvers });

const port = 3000
const app = next({dev: process.env.NODE_ENV !== 'production'})
const expressApp = express()
const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
  graphServer.applyMiddleware({ app: expressApp, path: '/api' });

  expressApp.use(handler).listen(port, function(err) {
    if (err) {
      console.error(err)
      return
    }
    console.log(`> Ready on http://localhost:${port}`)
  })
})