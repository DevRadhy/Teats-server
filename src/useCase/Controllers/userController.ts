import { Request, Response } from 'express';
import { CreateUserUseCase } from '../Users/createUserUseCase';
import { DeleteUserUseCase } from '../Users/deleteUserUseCase';

export class UserController {
  constructor (
    private createUserUseCase: CreateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase
  ){}

  async create(request: Request, response: Response): Promise<Response> {
    const { name, external, email } = request.body;

    try {
      const user = await this.createUserUseCase.create({
        name,
        external,
        email,
      });

      return response.status(201).json({ id: user });
    }catch(err) {
      return response.status(400).json({
        error: err.message || 'Unexpected error.'
      });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id, email, external } = request.body;

    try {
      const userDelete = await this.deleteUserUseCase.delete({
        id,
        email,
        external
      });

      return response.status(201).json(userDelete);
    }catch(err) {
      return response.status(400).json({
        error: err.message || 'Unexpected error.'
      });
    }
  }
}