import { Router } from 'express';
import CouserController from '../controller/CourserController';

const routes = Router();
const couserController = new CouserController();

routes.get('/courses',couserController.index);

// por enquanto é necessario passar o url da imagem
routes.post('/courses',couserController.create);


export default routes;