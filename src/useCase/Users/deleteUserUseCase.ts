import { IUserRepository } from "../../repositories/DatabaseDTO/IUserRepository";
import { IUserDTO } from "./userDTO";

export class DeleteUserUseCase {
  constructor (
    private userRepository: IUserRepository
  ){}

  async delete(user: IUserDTO): Promise<void> {
    const findUser = await this.userRepository.findByMail(user.id, user.external);

    if(!findUser) {
      throw new Error("User not exists.");
    }

    return this.userRepository.delete(user.email, user.external);
  }
}