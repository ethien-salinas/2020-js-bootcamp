import { BookController } from "../controller/BookController";

const bookController: BookController = new BookController();
export const resolvers = {
  Query: {
    books: () => bookController.getBooks(),
    book: (_, { id }) => bookController.getBook(id),
  },
  Mutation: {
    saveBook: (_, { title, author }) =>
      bookController.saveBook({ title, author }),
  },
};
