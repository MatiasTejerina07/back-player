import { IJWT } from "./interfaces/IJWT";
import jwt from "jsonwebtoken";

export class JWT implements IJWT {
  private secret: string;
  constructor() {
    if (!process.env.SECRET) {
      throw new Error("Ha ocurrido un error COD74A");
    }
    this.secret = process.env.SECRET;
  }
  async signin(payload: string): Promise<string> {
    return jwt.sign({ data: payload }, this.secret, { expiresIn: "1h" });
  }
  verify(token: string): string {
    return jwt.verify(token, this.secret) as string;
  }
}
