import { Router } from 'express';
import CouserController from '../controller/CourserController';

const routes = Router();
const couserController = new CouserController();

routes.get('/list/course',couserController.index);

export default routes;