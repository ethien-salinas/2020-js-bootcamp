const { gql } = require("apollo-server");

export const Mutation = gql`
  type Mutation {
    saveBook(title:String!, author:String!): Book
  }
`;
