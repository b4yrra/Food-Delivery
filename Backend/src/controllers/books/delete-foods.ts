import { Context } from "hono";
import { foods } from "../../model/foods";

export const deleteFoods = async (c: Context) => {
  const id = c.req.param("id");

  const filtedBook = foods.filter((food) => String(food.id) !== id);

  return c.json({ filtedBook });
};
