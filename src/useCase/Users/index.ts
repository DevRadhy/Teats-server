import { CreateUserUseCase } from "./createUserUseCase";
import { UserController } from "../Controllers/userController";
import { UserRepository } from "../../repositories/database/userRepository";
import { DeleteUserUseCase } from "./deleteUserUseCase";

const userRepository = new UserRepository();

const createUserUseCase = new CreateUserUseCase(
  userRepository,
);

const deleteUserUseCase = new DeleteUserUseCase(
  userRepository,
);

const userController = new UserController(
  createUserUseCase,
  deleteUserUseCase
);

export { userController };