import {Request,Response} from 'express';

class LessonController{
    public async createLesson(request: Request, response: Response):Promise<Response> {
        try {
            return response.json();
        } catch (error) {
            return response.json();
        }
    }
}

export default LessonController;