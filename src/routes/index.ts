import { Router } from 'express';
import CouserController from '../controller/CourserController';
import LessonController from '../controller/LessonController';

const routes = Router();
const couserController = new CouserController();
const lessonController = new LessonController();

routes.get('/courses',couserController.index);
routes.get(`/courses/:id`, couserController.listCouseById);
// por enquanto é necessario passar o url da imagem
routes.post('/courses', couserController.create);
// create a new lesson
routes.post('/lesson/:id', lessonController.createLesson);


export default routes;