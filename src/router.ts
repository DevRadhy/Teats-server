import { Router } from 'express';
import { feedersController } from './useCase/Feeders';
import { userController } from './useCase/Users';
// import { authController } from './useCase/Auth';

const router = Router();

// rota de criação de usuário
router.post('/user', (request, response) => {
  return userController.create(request, response);
});

// roda de exclusão de usuário
router.delete('/delete', (request, response) => {
  return userController.delete(request, response);
});

// // rota de autenticação de usuário
// router.post('/authenticate', (request, response) => {
//   return authController.authenticate(request, response);
// });

// rota de criação de feeder
router.post('/feeder', (request, response) => {
  return feedersController.create(request, response);
});

// rota de listagem de foods
router.get('/foods', (request, response) => {
  return feedersController.index(request, response);
});

export default router;