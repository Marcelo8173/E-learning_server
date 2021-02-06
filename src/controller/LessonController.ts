import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../model/LessonModel';

class LessonController{
    
    public async indexLesson(request: Request, response: Response):Promise<Response> {
        try {
            const {id} = request.params;

            const ormRepository = getRepository(Lesson);
            const lesson = await ormRepository.query(`select * from lesson where (course_id = '${id}')`);

            return response.json(lesson);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
    
    public async createLesson(request: Request, response: Response): Promise<Response> {
        try {
            const {id} = request.params;
            const { name, duration, description } = request.body;

            const ormRepository = getRepository(Lesson);
            const lesson = await ormRepository.query(`insert into lesson (name,duration,description,course_id)
                values ('${name}','${duration}','${description}','${id}')`);

            return response.json(lesson);
        } catch (error) {
            return response.status(400).json(error);
        }
    };
}

export default LessonController;