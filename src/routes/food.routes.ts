import { Hono } from "hono";
import { getFood } from "../controllers/books/get-book";
import { getFoodById } from "../controllers/books/get-book-byid";
import { createFood } from "../controllers/books/create-food";
import { deleteFoods } from "../controllers/books/delete-books";
import { updateFoods } from "../controllers/books/edit-book";
import { App } from "../types";

export const registerFoodRoutes = (app: App) => {
  app.get("/foods", getFood);
  app.get("/foods/:id", getFoodById);
  app.post("/foods", createFood);
  app.put("/foods/:id", updateFoods);
  app.delete("/foods", deleteFoods);
};
