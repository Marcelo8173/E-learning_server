import { Router } from 'express';
import CouserController from '../controller/CourserController';

const routes = Router();
const couserController = new CouserController();

routes.get('/courses',couserController.index);

export default routes;