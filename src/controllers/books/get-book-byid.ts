import { Context } from "hono";
import { books } from "../../model/foods";

export const getBookById = (c: Context) => {
  const id = c.req.param("id");

  const book = books.find((book) => String(book.id) === id);

  return c.json({
    book: book,
  });
};
