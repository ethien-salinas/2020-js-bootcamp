import { connection } from "../db";
import { Book } from "../entity/Book";

export class BookController {
  books: Array<IBook>;

  constructor() {
    this.books = books;
  }

  async getBooks() {
    return await connection.manager.find(Book);
  }
  async getBook(id: number) {
    return await connection.manager.findOne(Book, {
      where: { id: id },
    });
  }
  async saveBook(book: IBook) {
    return await connection.manager.save(Book, book);
  }
  updateBook(id: number) {}
  deleteBook(id: number) {}
}

interface IBook {
  id?: number;
  title: string;
  author: string;
}

const books = [
  {
    id: 1,
    title:
      "Too Much and Never Enough: How My Family Created the World's Most Dangerous Man",
    author: "Mary L. Trump Ph.D.",
  },
  {
    id: 2,
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
  },
  {
    id: 3,
    title: "A time for mercy",
    author: "John Grisham",
  },
];
