import { D1Database } from "@cloudflare/workers-types";
import { drizzle } from "drizzle-orm/d1";
import * as foodsSchema from "./schema";

export function getDrizzlesDb(d1: D1Database) {
  return drizzle(d1, { schema: foodsSchema });
}
