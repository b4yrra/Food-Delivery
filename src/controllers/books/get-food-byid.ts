import { Context } from "hono";
import { foods } from "../../model/foods";

export const getFoodById = (c: Context) => {
  const id = c.req.param("id");

  const food = foods.find((food) => String(food.id) === id);

  return c.json({
    food: food,
  });
};
