import { PrismaClient } from "@prisma/client";

export class accountExist  {
  private db: PrismaClient;
  constructor() {
    this.db = new PrismaClient();
  }

  async userAccount(email: string): Promise<boolean> {
    const user = await this.db.user.findUnique({ where: { email } });
    return !!user;
  }
}
