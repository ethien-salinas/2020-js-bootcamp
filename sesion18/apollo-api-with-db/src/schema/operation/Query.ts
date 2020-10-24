const { gql } = require("apollo-server");

export const Query = gql`
  type Query {
    books: [Book]
    book(id:Int!): Book
  }
`;
