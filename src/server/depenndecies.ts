import { UserRepository } from "../user/infraestructure/UserRepository.js";
import { CreateUser } from "../user/usecases/Create.js";
import { CreateUserController } from "../user/infraestructure/controllers/createController.js";
import { Hash } from "../services/hash.js";
import { accountExist } from "../middlewares/user/accountExist.js";

/* middlewar */
const accountUser = new accountExist();

const userRepository = new UserRepository();
const hashServices = new Hash();
const createUser = new CreateUser(userRepository, hashServices, accountUser);
export const createUserController = new CreateUserController(createUser);
