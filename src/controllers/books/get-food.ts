import { getDrizzlesDb } from "../../db";
import { foodsTable } from "../../db/schema";
import { foods } from "../../model/foods";
import { AppContext } from "../../types";

export const getFood = async (c: AppContext) => {
  const d1 = c.env.FOOD_DELIVERY;
  const db = getDrizzlesDb(d1);

  const foods = await db.select().from(foodsTable);

  return c.json({ foods: foods });
};
