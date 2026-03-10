import { Context } from "hono";
import { books } from "../../model/foods";

export const deleteBooks = async (c: Context) => {
  const id = c.req.param("id");

  const filtedBook = books.filter((book) => String(book.id) !== id);

  return c.json({ filtedBook });
};
