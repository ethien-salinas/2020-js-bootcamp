const { gql } = require("apollo-server");

export const Query = gql`
  type Query {
    users: [User]
    user(id:Int!): User
  }
`;
