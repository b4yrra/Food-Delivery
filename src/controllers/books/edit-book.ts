import { Context } from "hono";
import { books } from "../../model/foods";

export const updateBooks = async (c: Context) => {
  const { title, author } = await c.req.json();
  const id = c.req.param("id");

  const updatedBooks = books.map((book) => {
    const bookAuthor = book.author;

    if (bookAuthor.includes("B")) {
      const newBooks = {
        ...book,
        id: book.id,
        title: title,
        author: "J.K Rowling",
      };

      return newBooks;
    } else {
      return book;
    }
  });

  const findBook = updatedBooks.find((book) => String(book.id) === id);

  c.status(200);
  return c.json({ findBook });
};
