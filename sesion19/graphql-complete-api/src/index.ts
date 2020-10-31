import { typeDefs } from "./schema";
import { resolvers } from "./resolver";

const { ApolloServer } = require("apollo-server");

new ApolloServer({ typeDefs, resolvers })
  .listen(3003).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
