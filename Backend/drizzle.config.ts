import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: "40048515c21bb0fc4cfb8c58170aa639",
    databaseId: "ab0d45cb-6a17-4245-b33a-80ac6828f53c",
    token: "xN9xRUIBWFVXofP9msNxi9TaqcSgzwHsbO1ue-jq",
  },
});

// xN9xRUIBWFVXofP9msNxi9TaqcSgzwHsbO1ue-jq
