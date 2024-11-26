import { Elysia, t } from "elysia";
import { createUserController } from "../server/depenndecies.js";
import { accountExist } from "../middlewares/user/accountExist.js";

export const userRouter = new Elysia({ prefix: "/users" })
  .post("/",  createUserController.run.bind(createUserController), {
    body: t.Object({
      email: t.String(),
      password: t.String(),
    }),
  })
  .get("/", () => "all users");
