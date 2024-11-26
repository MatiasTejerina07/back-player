import { IJWT } from "./interfaces/IJWT";

export class JWT implements IJWT {
  signin(payload: string): string {
    return "jwt";
  }
  verify(token: string): string {
    return "jwt";
  }
}
