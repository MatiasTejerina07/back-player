import type { IUser } from "../domain/IUser.js";

export class CreateUser {
  constructor(private useRepository: IUser) {}
  async run(email: string, password: string) {
    return await this.useRepository.create(email, password);
  }
}
