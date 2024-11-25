import { Elysia } from "elysia";

export const userRouter = new Elysia({ prefix: "/users" })
  .post("/", () => {
    console.log("úser");
  })
  .get("/", () => "all users");
