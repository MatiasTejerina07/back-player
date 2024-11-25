import { Elysia } from "elysia";

export class Server {
  private app: Elysia;
  constructor() {
    this.app = new Elysia();
  }
  public start() {
    const PORT: string = process.env.PORT ?? "8000";
    this.app.listen(PORT, () => {
      console.log(`Server is running on port, ${PORT}`);
    });
  }
}
