import { Hono } from "hono";
import { getBook } from "../controllers/books/get-book";
import { getBookById } from "../controllers/books/get-book-byid";
import { createBook } from "../controllers/books/create-book";
import { deleteBooks } from "../controllers/books/delete-books";
import { updateBooks } from "../controllers/books/edit-book";

export const registerFoodRoutes = (app: Hono) => {
  app.get("/books", getBook);
  app.get("/books/:id", getBookById);
  app.post("/books", createBook);
  app.put("/books/:id", updateBooks);
  app.delete("/books", deleteBooks);
};
