import { LoginUser } from "../../usecases/login.js";

interface Login {
  body: {
    email: string;
    password: string;
  };
}

export class LoginController {
  constructor(private loginUser: LoginUser) {}
  async run({ body }: Login) {
    try {
      const user = await this.loginUser.run(body.email, body.password);
      return {
        code: 200,
        user,
        message: "Inicio de sesión exitosa",
      };
    } catch (error) {
      const e = error as Error;
      console.log(e.message);
      return {
        code: 400,
        message: e.message,
      };
    }
  }
}
