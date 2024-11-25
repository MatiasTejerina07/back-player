import { UserRepository } from "../user/infraestructure/UserRepository";
import { CreateUser } from "../user/usecases/Create";
import { CreateUserController } from "../user/infraestructure/controllers/createController";

const userRepository = new UserRepository();
const createUser = new CreateUser(userRepository);
export const createUserController = new CreateUserController(createUser);
