import {Request,Response} from 'express';
import Courser from '../model/Courser/CourserModel';
import { getRepository } from 'typeorm';

class CourserController {
    public async index(request: Request, response:Response){
        try {
            const ormRepository = getRepository(Courser);
            return response.json({msg:'Olá'})
        } catch (error) {
            
        }
    }
}

export default CourserController;