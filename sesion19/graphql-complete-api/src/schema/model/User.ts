const { gql } = require("apollo-server");

export const User = gql`
  type User {
    id: Int
    name: String
    lastName: String
    email: String
    password: String
    isAdmin: Boolean
  }
`;
