import { Hono } from "hono";
import { registerFoodRoutes } from "./routes/food.routes";

const app = new Hono();

registerFoodRoutes(app);

export default app;
