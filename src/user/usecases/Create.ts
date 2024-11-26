import type { IUser } from "../domain/IUser.js";
import type { IHash } from "../../services/interfaces/IHash.js";
import { accountExist } from "../../middlewares/user/accountExist.js";

export class CreateUser {
  private accountExist: accountExist;

  constructor(
    private useRepository: IUser,
    private hash: IHash,
    accountExist: accountExist
  ) {
    this.accountExist = accountExist;
    this.hash = hash;
    this.useRepository = useRepository;
  }

  async run(email: string, password: string) {
    const userExist = await this.accountExist.userAccount(email);
    if (userExist) {
      throw new Error("Ya existe una cuenta asociada a este email");
    }

    const hashedPassword = await this.hash.hash(password);
    return await this.useRepository.create(email, hashedPassword);
  }
}