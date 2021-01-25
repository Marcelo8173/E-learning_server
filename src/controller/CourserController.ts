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
}

export default CourserController;