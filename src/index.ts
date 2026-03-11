import { Hono } from "hono";
import { registerFoodRoutes } from "./routes/food.routes";
import { Bindings } from "./types";

const app = new Hono<{ Bindings: Bindings }>();

registerFoodRoutes(app);

export default app;
