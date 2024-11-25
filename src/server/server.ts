import { Elysia } from "elysia";
import { userRouter } from "../user/userRouter";

export class Server {
  private app: Elysia;

  constructor() {
    this.app = new Elysia();
    this.app.group("/api/v1", (app) => app.use(userRouter));
  }
  public start() {
    const PORT: string = process.env.PORT ?? "8000";
    this.app.listen(PORT, () => {
      console.log(`Server is running on port, ${PORT}`);
    });
  }
}
