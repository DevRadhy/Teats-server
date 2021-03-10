import { IUserRepository } from "../../repositories/DatabaseDTO/IUserRepository";
import { ICreateUserDTO } from "./userDTO";
import { User } from "../../entities/User";

export class CreateUserUseCase {
  constructor (
    private userRepository: IUserRepository,
  ){}

  async create(data: ICreateUserDTO): Promise<string> {
    const userAlreadyExist = await this.userRepository.findByMail(data.email, data.external);

    if(userAlreadyExist) {
      throw new Error('You already an account');
    }

    const user = await new User(data);
    
    return this.userRepository.create(user);
  }
}