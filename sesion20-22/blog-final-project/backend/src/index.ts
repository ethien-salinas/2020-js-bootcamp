require('dotenv').config()
import { ApolloServer } from "apollo-server"
import { typeDefs } from "./schema"
import { resolvers } from "./resolver";

new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      token: req.headers.authorization || ''
    }
  }
}).listen().then(({ url }) => {
  console.log(`😎🤟🏻 Server ready at ${url}`);
})