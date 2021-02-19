import Courser from '../model/CourserModel';
import { getRepository } from 'typeorm';
import {Request,Response} from 'express';


class CourserController {
    public async index(request: Request, response: Response ): Promise<Response>{
        
        try {
            const {search} = request.query;

            const courseToSend = [];
            const ormRepo = getRepository(Courser);
            const course = await ormRepo.query(`SELECT * FROM courses WHERE name LIKE '%${search}%' `)
            const count = await ormRepo.query(`select count (id) as coursesQtd from courses;`);

            for (const key in course) {
                const countLesson = await ormRepo.query(`select count (id) as LessonQtd from lesson where course_id = '${course[key].id}'`);
                const data = {
                    id: course[key].id,
                    name: course[key].name,
                    image: course[key].image,
                    lessonQtd: countLesson[0].lessonqtd,
                    created_at: course[key].created_at,
                    updated_at: course[key].updated_at
                }
                courseToSend.push(data)
            }

            return response.json({
                coursesData: courseToSend,
                countCourses:count[0].coursesqtd,
            });
        } catch (error) {
            return response.json('erro')
        }
        
    };

    public async create(request: Request, response: Response ): Promise<Response>{
        
        try {
            const {name,image} = request.body;
           
            const ormRepo = getRepository(Courser);
            await ormRepo
            .query(`INSERT INTO courses (name,image)
            values('${name}','${image}')`);
            
            return response.json({msg:'Curso cadastro'});
        } catch (error) {
            return response.status(400).json({msg:'Erro ao cadastrar um novo curso'})
        }
        
    };

    public async listCourseByid(request: Request, response: Response): Promise<Response>{
        try {
            const {id} = request.params;
            const ormRepo = getRepository(Courser);
            const course = await ormRepo.query(`select * from courses where id = '${id}'`);
            const count = await ormRepo.query(`select count(id) as lessonsQtd from lesson where course_id='${id}'`)
            
            const dataToSend = {
                course: course,
                count: count
            }

            return response.json(dataToSend);
        } catch (error) {
            return response.json('error');
        }
    }
}

export default CourserController;