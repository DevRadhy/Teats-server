import { IFeederRepository } from "../DatabaseDTO/IFeederRopository";
import { getConnection, getRepository } from "typeorm";
import { Feeder } from "../../entities/Feeder";
import { Foods } from "../../entities/Foods";
import { IIndexProps } from "../../useCase/Feeders/feedersDTO";

export class FeederRepository implements IFeederRepository {
  async findByID(id: string): Promise<boolean> {
    const feederAlreadyExist = await getRepository('feeders')
    .createQueryBuilder('feeder')
    .where("feeder.user_id = :id", { id })
    .getOne();

    return !!feederAlreadyExist;
  }

  async create(feeder: Feeder, products: Foods[]): Promise<void> {
    await getConnection()
    .createQueryBuilder()
    .insert()
    .into("feeders")
    .values(feeder)
    .execute();

    await getConnection()
    .createQueryBuilder()
    .insert()
    .into("foods")
    .values(products)
    .execute();

    return;
  }

  foodIndex(data: IIndexProps): Promise<void>{
    return;
  }
}