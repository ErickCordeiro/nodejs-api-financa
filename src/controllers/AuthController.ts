import {Request, Response} from 'express';
import { UserService } from '../services/UserService';
import Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password){
        let email:string = req.body.email;
        let password:string = req.body.password;

        let user = await UserService.findOne(email, password);
        if(!user){
            res.status(400).json({
                error: true,
                status: false,
                message: 'Usuário ou senha incorretos, verifique!'
            });
        }

        const token = Jwt.sign(
            { id:user?.id, email:user?.email},
            process.env.JWT_SECRET_KEY as string,
            {
                expiresIn: 21600 //15 days
            }
        );

        res.status(201).json({
            status: true,
            token: token,
            user: user
        });
    }
};

const register = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password){
        let {name, email, password} = req.body; 

        let hasUser = await UserService.findByEmail(email);
        if(hasUser){
            res.status(404).json({
                error: true, 
                message: 'E-mail já cadastrado no banco de dados, verifique!'
            });
        }

        let newUser = await UserService.create(name, email, password);

        const token = Jwt.sign(
            { id:newUser?.id, email:newUser?.email },
            process.env.JWT_SECRET_KEY as string,
            { expiresIn: 21600 } //15 days
        );

        res.status(201).json({
            success: true, 
            message: 'Seu registro foi concluído com sucesso!', 
            token: token,
            user: newUser
        });
    }

    res.status(400).json({
        error:false, 
        message: 'Informações de cadastro não foram enviadas corretamente, verifique!'
    })
};

const forgot = async (req: Request, res: Response) => {

};

const reset = async (req: Request, res: Response) => {

};

const logout = async (req: Request, res: Response) => {

};


export default {
    login, 
    register, 
    forgot, 
    reset, 
    logout
}