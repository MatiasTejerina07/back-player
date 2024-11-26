import { IJWT } from "./interfaces/IJWT";
import jwt from "jsonwebtoken";

export class JWT implements IJWT {
  async signin(payload: string): Promise<string> {
    return jwt.sign({ data: payload }, "secret", { expiresIn: "1h" });
  }
  verify(token: string): string {
    return jwt.verify(token, "secret") as string;
  }
}
