import { Feeder } from "../../entities/Feeder";
import { Foods } from "../../entities/Foods";
import { IIndexProps } from "../../useCase/Feeders/feedersDTO";

export interface IFeederRepository {
  findByID(id: string): Promise<boolean>
  create(feeder: Feeder, products: Foods[]): Promise<void>
  foodIndex(data: IIndexProps): Promise<void>
}