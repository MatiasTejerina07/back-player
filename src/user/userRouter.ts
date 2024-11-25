import { Elysia } from "elysia";
import { createUserController } from "../server/depenndecies";

export const userRouter = new Elysia({ prefix: "/users" })
  .post("/", createUserController.run.bind(createUserController))
  .get("/", () => "all users");
