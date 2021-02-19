import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../model/LessonModel';
import Courser from '../model/CourserModel';

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

    public async listLessonByCourse(request: Request, response: Response): Promise<Response>{
        try {
            const {id} = request.params;
            const ormRepository = getRepository(Courser);
            // const course = await ormRepository.query(`select * from courses where(id = '${id}')`);
            const course = await ormRepository.query(`select
                l.id,
                l.name as lessonName,
                l.duration,
                l.description,
                c.name as couseName,
                c.image
            from lesson l  inner join courses c on l.course_id = c.id where(c.id = '${id}')
            order by l.created_at;`)
            
            const count = await ormRepository.query(`select count (id) as lessonQtd from lesson;`)

            return response.json({
                courses: course,
                countLesson: count[0].lessonqtd
            })
        } catch (error) {
            return response.status(404).json({error:'Course id not found'});
        }
    }
}

export default LessonController;