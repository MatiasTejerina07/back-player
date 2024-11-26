import { User } from "./User.js";

export interface IUser {
  create(email: string, password: string): Promise<User>;
}
