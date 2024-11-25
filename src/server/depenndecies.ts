import { UserRepository } from "../user/infraestructure/UserRepository.js";
import { CreateUser } from "../user/usecases/Create.js";
import { CreateUserController } from "../user/infraestructure/controllers/createController.js";

const userRepository = new UserRepository();
const createUser = new CreateUser(userRepository);
export const createUserController = new CreateUserController(createUser);
