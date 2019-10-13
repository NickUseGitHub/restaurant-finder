const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const restaurants = require('./restaurant');

const typeModuleDefs = [restaurants.schema];
const moduleResolvers = [restaurants.resolvers];

// Construct a schema, using GraphQL schema language
const RootSchema = `
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const RootResolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

const schema = makeExecutableSchema({
  typeDefs: [RootSchema, ...typeModuleDefs],
  resolvers: [RootResolvers, ...moduleResolvers],
});

module.exports = function applyGraphQLmiddleware({ app }) {
  const graphServer = new ApolloServer({ schema });

  graphServer.applyMiddleware({ app, path: '/api' });
};
