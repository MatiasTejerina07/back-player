import { UserRepository } from "../user/infraestructure/UserRepository.js";
import { CreateUser } from "../user/usecases/create.js";
import { CreateUserController } from "../user/infraestructure/controllers/createController.js";
import { Hash } from "../services/hash.js";
import { accountExist } from "../middlewares/user/accountExist.js";
import { LoginController } from "../user/infraestructure/controllers/login.js";
import { LoginUser } from "../user/usecases/login.js";
/* middlewar */
const account = new accountExist();

const userRepository = new UserRepository();
const hashServices = new Hash();
const createUser = new CreateUser(userRepository, hashServices, account);
export const createUserController = new CreateUserController(createUser);

const loginUser = new LoginUser(userRepository, hashServices);
export const loginController = new LoginController(loginUser);
