import Courser from '../model/CourserModel';
import { getRepository } from 'typeorm';
import {Request,Response} from 'express';


class CourserController {
    public async index(request: Request, response: Response ): Promise<Response>{
        
        try {
            const ormRepo = getRepository(Courser);
            const course = await ormRepo.query(`SELECT * FROM courses`)

            return response.json(course);
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
}

export default CourserController;