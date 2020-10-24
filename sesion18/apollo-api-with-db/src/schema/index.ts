const { gql } = require("apollo-server");
import { Book } from "./model/Book";
import { Mutation } from "./operation/Mutation";
import { Query } from "./operation/query";

export const typeDefs = gql`
  ${Book}
  ${Query}
  ${Mutation}
`;
