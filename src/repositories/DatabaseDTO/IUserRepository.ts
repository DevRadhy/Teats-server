import { User } from "../../entities/User";

export interface IUserRepository {
  findByMail(email: string, external: string): Promise<boolean>
  create(user: User): Promise<string>
  delete(email: string, external: string): Promise<void>
}