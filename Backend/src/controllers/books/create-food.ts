import { Context } from "hono";
import { foods } from "../../model/foods";

export const createFood = async (c: Context) => {
  const { title, author } = await c.req.json(); //// body
  const newFoodId = foods.length + 1;

  const newFood = {
    id: newFoodId,
    title,
    author,
  };

  foods.push(newFood);

  c.status(200);
  return c.json({ foods });
};
