import {Request, Response} from 'express';
import { UserService } from '../services/UserService';

const index = async (req: Request, res: Response) => {
    
    let users = await UserService.all();

    res.status(200).json({
        users: users
    });
};

export default {
    index,
}