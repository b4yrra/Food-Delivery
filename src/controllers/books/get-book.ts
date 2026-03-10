import { Context } from "hono";
import { books } from "../../model/foods";

export const getBook = (c: Context) => {
  return c.json({ books: books });
};
