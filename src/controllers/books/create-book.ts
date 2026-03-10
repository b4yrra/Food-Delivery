import { Context } from "hono";
import { books } from "../../model/foods";

export const createBook = async (c: Context) => {
  const { title, author } = await c.req.json(); //// body
  const newBookId = books.length + 1;

  const newBook = {
    id: newBookId,
    title,
    author,
  };

  books.push(newBook);

  c.status(200);
  return c.json({ books });
};
