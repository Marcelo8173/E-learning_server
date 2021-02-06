import Courser from '../model/CourserModel';
import { getRepository } from 'typeorm';
import {Request,Response} from 'express';


class CourserController {
    public async index(request: Request, response: Response ): Promise<Response>{
        
        try {
            const ormRepo = getRepository(Courser);
            const course = await ormRepo.query(`SELECT * FROM courses`)
            const count = await ormRepo.query(`select count (id) as coursesQtd from courses;`);

            return response.json({
                coursesData: course,
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

    public async listCouseById(request: Request, response: Response): Promise<Response>{
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

export default CourserController;