import { UserRepository } from "../user/infraestructure/UserRepository.js";
import { CreateUser } from "../user/usecases/create.js";
import { CreateUserController } from "../user/infraestructure/controllers/createController.js";
import { Hash } from "../services/hash.js";
import { accountExist } from "../middlewares/user/accountExist.js";
import { LoginController } from "../user/infraestructure/controllers/login.js";
import { LoginUser } from "../user/usecases/login.js";
import { JWT } from "../services/jwt.js";
/* middlewar */
const account = new accountExist();

const hashServices = new Hash();
const jwtServices = new JWT();
const userRepository = new UserRepository();
const createUser = new CreateUser(userRepository, hashServices, account);
export const createUserController = new CreateUserController(createUser);

const loginUser = new LoginUser(userRepository, hashServices, jwtServices);
export const loginController = new LoginController(loginUser);
