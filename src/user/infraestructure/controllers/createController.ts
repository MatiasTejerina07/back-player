import { CreateUser } from "../../usecases/create.js";

export class CreateUserController {
  constructor(private createUser: CreateUser) {}

  async run({ body }: any) {
    try {
      const user = await this.createUser.run(body.email, body.password);
      return {
        code: 201,
        data: user,
      };
    } catch (e) {
      const error = e as Error;
      if (error.message.includes("Ya existe una cuenta asociada")) {
        return {
          status: 400,
          message: error.message,
        };
      }
      return {
        status: 500,
        message: error.message,
      };
    }
  }
}
