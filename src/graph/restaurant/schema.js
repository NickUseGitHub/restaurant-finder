module.exports = `
  extend type Query {
    restaurants: [Restaurant]
  }

  type Restaurant {
    name: String
  }
`;
