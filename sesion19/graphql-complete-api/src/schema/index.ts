const { gql } = require("apollo-server");
import { User } from "./model/User";
import { Mutation } from "./operation/Mutation";
import { Query } from "./operation/query";

export const typeDefs = gql`
  ${User}
  ${Query}
  ${Mutation}
`;
