import { Request, Response } from 'express';
import { CreateFeedersUseCase } from '../Feeders/createFeedersUseCase';
import { ListFeedersUseCase } from '../Feeders/listFeedersUseCase';
import { IIndexProps } from '../Feeders/feedersDTO';

export class FeedersController {
  constructor (
    private createFeederUseCase: CreateFeedersUseCase,
    private listFeederUseCase: ListFeedersUseCase,
  ){}

  async index(request: Request, response: Response): Promise<Response> {
    const { category, payment }: IIndexProps = request.query;

    try {
      const filter = await this.listFeederUseCase.index({
        category,
        payment
      });
      
      return response.status(200).json(filter);
    }catch(err) {
      return response.status(400);
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { user_id, name, email, contact, description, avatar, payment, foods } = request.body;
    
    try {
      const feeder = await this.createFeederUseCase.create({
        user_id,
        name,
        email,
        contact,
        avatar,
        description,
        payment,
        foods
      });

      return response.status(201).json(feeder);
    }catch(err) {
      return response.status(400).json({
        error: err.message || 'Unexpected error.'
      });
    }
  }
}