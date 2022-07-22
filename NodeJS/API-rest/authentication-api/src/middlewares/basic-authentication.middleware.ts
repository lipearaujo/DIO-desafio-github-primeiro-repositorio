import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import userRepository from "../repositories/user.repository";

async function basicAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers['authorization'];

        if(!authorizationHeader){
            throw new ForbiddenError('Credenciais não informadas');       
        }

        const [authorizationType, token] = authorizationHeader.split(' ');

        if(authorizationType !== 'Basic' || !token){
            throw new ForbiddenError('Tipo de autenticação inválida');  
        }

        const tokenContent = Buffer.from(token, 'base64').toString('utf-8');
        console.log(tokenContent);

        const [username, password] = tokenContent.split(':');
        console.log(username, password);
        if(!username || !password){
            throw new ForbiddenError('Credenciais não preenchidas'); 
        }

        const user = await userRepository.findByUserAndPassword(username, password);
        console.log(user);

        if(!user){
            throw new ForbiddenError('Usuário ou senha inválidos');
        }

        req.user = user;
    } catch (error) {
        next(error);
    }
}

export default basicAuthenticationMiddleware;