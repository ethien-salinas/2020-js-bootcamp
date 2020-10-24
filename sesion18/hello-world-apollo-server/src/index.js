const { ApolloServer, gql } = require('apollo-server');

const books = [
  {
    id: 1,
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: 2,
    title: 'City of Glass',
    author: 'Paul Auster',
  },
  {
    id: 3,
    title: 'A time for mercy',
    author: 'John Grisham',
  },
];

const typeDefs = gql`
  type Book {
    id: Int
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

new ApolloServer({ typeDefs, resolvers })
  .listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });