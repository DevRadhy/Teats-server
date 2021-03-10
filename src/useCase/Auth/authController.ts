import { Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';
import { IAuthRepository } from '../../repositories/DatabaseDTO/IAuthRepository';

export class AuthController {
  constructor (
    private authRepository: IAuthRepository
  ){}

  async authenticate(request: Request, response: Response): Promise<Response> {
    const { email, external } = request.body;

    try {
      const auth = await this.authRepository.login(email, external);

      if(!auth) throw new Error('Verifique os dados e tente novamente.');

      const secret = String(process.env.SECRET_TOKEN);

      const token = jwt.sign({ id: auth.id }, secret, {
        expiresIn: '1d'
      });

      return response.status(201).json({
        id: auth.id,
        auth: true,
        token: token
      });
    }catch(err) {
      console.log(err);
      return response.status(400).json({
        error: err.message
      });
    }
  }

  async authorizate(request: Request, response: Response, next: NextFunction): Promise<any> {
    const { authorization } = request.headers;

    try {
      if(!authorization) throw new Error('Invalid authentication');

      const token = authorization.replace('Bearer', '').trim();
      
      const secret = String(process.env.SECRET_TOKEN);

      jwt.verify(token, secret, function(error) {
        if(error) throw new Error('Error ao autenticar usuário.');
      });
      
      next();
    }catch(err) {
      return response.status(400).json({
        error: err.message
      });
    }
  }
}
