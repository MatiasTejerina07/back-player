import { Elysia, t } from "elysia";
import {
  createUserController,
  loginController,
} from "../server/depenndecies.js";

export const userRouter = new Elysia({ prefix: "/users" })
  .post("/", createUserController.run.bind(createUserController), {
    body: t.Object({
      email: t.String(),
      password: t.String(),
    }),
  })
  .post("/login", loginController.run.bind(loginController), {
    body: t.Object({
      email: t.String(),
      password: t.String(),
    }),
  });
