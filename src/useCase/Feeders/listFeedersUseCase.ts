import { IFeederRepository } from "../../repositories/DatabaseDTO/IFeederRopository";
import { IIndexProps } from "./feedersDTO";

export class ListFeedersUseCase {
  constructor (
    private feederRepository: IFeederRepository
  ){}

  async index(data: IIndexProps): Promise<void> {
    const ListFooders = await this.feederRepository.FoodIndex(data);  

    return ListFooders;
  }
}
  