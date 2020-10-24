const { gql } = require("apollo-server");

export const Book = gql`
  type Book {
    id: Int
    title: String
    author: String
  }
`;
