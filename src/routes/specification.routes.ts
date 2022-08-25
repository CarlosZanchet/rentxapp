import { Router } from 'express'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';

const specificationRoutes = Router();
const createCategoryController = new CreateCategoryController();
specificationRoutes.post('/', createCategoryController.handle)

export { specificationRoutes }