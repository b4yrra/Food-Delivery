import { Context } from "hono";
import { foods } from "../../model/foods";

export const updateFoods = async (c: Context) => {
  const { title, author } = await c.req.json();
  const id = c.req.param("id");

  const updatedBooks = foods.map((food) => {
    const bookAuthor = food.author;

    if (bookAuthor.includes("B")) {
      const newFoods = {
        ...food,
        id: food.id,
        title: title,
        author: "J.K Rowling",
      };

      return newFoods;
    } else {
      return food;
    }
  });

  const findFood = updatedBooks.find((food) => String(food.id) === id);

  c.status(200);
  return c.json({ findFood });
};
