require('dotenv').config()
import { typeDefs } from "./schema";
import { resolvers } from "./resolver";
import { ApolloServer } from "apollo-server";

new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      token: req.headers.authorization || ''
    }
  }
}).listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
