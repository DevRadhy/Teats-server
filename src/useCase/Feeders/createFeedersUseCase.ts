import { IFeederRepository } from "../../repositories/DatabaseDTO/IFeederRopository";
import { ICreateFeederDTO, IFoodProps } from "./feedersDTO";
import { Feeder } from "../../entities/Feeder";
import { Foods } from "../../entities/Foods";

export class CreateFeedersUseCase {
  constructor (
    private feederRepository: IFeederRepository
  ){}

  async create({ foods, ...data }: ICreateFeederDTO): Promise<void> {
    const feederAlreadyExist = await this.feederRepository.findByID(data.user_id);

    if(feederAlreadyExist) {
      throw new Error('You already an Feeder');
    }
    
    const feeder = await new Feeder(data);

    const product = foods.map((foods: IFoodProps) => {
      const food = {
        feeder_id: feeder.id,
        name: foods.name,
        description: foods.description,
        category: foods.category,
        price: foods.price
      };
       
      return new Foods(food);
    });
    
    return this.feederRepository.create(feeder, product);
  }
}