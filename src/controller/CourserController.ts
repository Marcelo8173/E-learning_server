import {Request,Response} from 'express';

class CourserController {
    public async index(request: Request, response:Response){
        try {
            return response.json({msg:'Olá'})
        } catch (error) {
            
        }
    }
}

export default CourserController;