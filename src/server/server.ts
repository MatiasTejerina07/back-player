import { Elysia } from "elysia";
import { userRouter } from "../user/userRouter.js";
import { swagger } from "@elysiajs/swagger";
import { PrismaClient } from "@prisma/client";

export class Server {
  private app: Elysia;
  private prisma: PrismaClient;

  constructor() {
    this.app = new Elysia();
    this.app.use(swagger());
    this.app.derive(({ headers }) => {
      const auth = headers["authorization"];
      return {
        token: auth?.startsWith("Bearer") ? auth.slice(7) : null,
      };
    });
    this.app.group("/api/v1", (app) => app.use(userRouter));
    this.prisma = new PrismaClient();
  }
  public start() {
    const PORT: string = process.env.PORT ?? "8000";
    this.app.listen(PORT, () => {
      console.log(`Server is running on port, ${PORT}`);
    });
  }
  public async mainConnect() {
    try {
      await this.prisma.$connect();
      console.log("Connect to the database successfully");
    } catch (error) {
      console.error("Failed to connect to the database", error);
    } finally {
      await this.prisma.$disconnect();
    }
  }
}
