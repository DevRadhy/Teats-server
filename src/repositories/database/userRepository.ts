import { User } from "../../entities/User";
import { IUserRepository } from "../DatabaseDTO/IUserRepository";

import { getConnection, getRepository } from 'typeorm';

export class UserRepository implements IUserRepository {
  async findByMail( email: string, external: string): Promise<boolean> {
    const findUser = await getRepository('users')
    .createQueryBuilder('user')
    .where("user.email = :email", { email })
    .andWhere("user.external = :external", { external })
    .getOne();

    return !!findUser;
  }

  async create({ id, name, email, external }: User): Promise<string> {

    try {
      await getConnection()
      .createQueryBuilder()
      .insert()
      .into('users')
      .values({ id, name, email, external })
      .execute();
  
      return id;
    }catch(err) {
      return err;
    }
  }

  async delete(email: string, external: string): Promise<void> {
    try {
      const deleteUser = await getConnection()
        .createQueryBuilder()
        .delete()
        .from("users")
        .where("users.email = :email", { email })
        .andWhere("users.external = :external", { external })
        .execute();

      return console.log(deleteUser);
    }catch(err) {
      return err;
    }
  }
}