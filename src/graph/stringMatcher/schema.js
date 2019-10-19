module.exports = `
  extend type Query {
    findString (stringInput: [String]): [MatchedString]
  }

  type MatchedString {
    input: String
    isMatch: Boolean
  }
`;
