import { CreateFeedersUseCase } from "./createFeedersUseCase";
import { ListFeedersUseCase } from "./listFeedersUseCase";
import { FeedersController } from "../Controllers/feedersController";
import { FeederRepository } from "../../repositories/database/feederRepository";

const feederRepository = new FeederRepository();

const createFeedersUseCase = new CreateFeedersUseCase(
  feederRepository
);

const listFeedersUseCase = new ListFeedersUseCase(
  feederRepository
);

const feedersController = new FeedersController(
  createFeedersUseCase,
  listFeedersUseCase
);

export { feedersController };