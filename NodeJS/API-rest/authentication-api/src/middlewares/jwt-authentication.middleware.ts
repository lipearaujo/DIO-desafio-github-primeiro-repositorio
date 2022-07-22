import { Request, Response, NextFunction } from "express";
import JWT  from "jsonwebtoken";
import ForbiddenError from "../models/errors/forbidden.error.model";

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers['authorization'];

        if(!authorizationHeader){
            throw new ForbiddenError('Credenciais não informadas');       
        }

        const [authorizationType, token] = authorizationHeader.split(' ');

        if(authorizationType !== 'Bearer' || !token){
            throw new ForbiddenError('Tipo de autenticação inválida');  
        }

        try {
            const tokenPayload = JWT.verify(token, 'my_secret_key');

            if(typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError('Invalid token'); 
            }

            const user = {
                uuid: tokenPayload.sub,
                username: tokenPayload.username
            }
            
            req.user = user;

            next();
            
        } catch (error) {
            throw new ForbiddenError('Invalid token'); 
        }

    } catch (error) {
        next(error);
    }
}

export default jwtAuthenticationMiddleware;