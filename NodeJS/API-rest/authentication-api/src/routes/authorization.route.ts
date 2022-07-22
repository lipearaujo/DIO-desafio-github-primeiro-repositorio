import { NextFunction, Request, Response, Router } from "express";
import JWT from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import basicAuthenticationMiddleware from "../middlewares/basic-authentication.middleware";
import ForbiddenError from "../models/errors/forbidden.error.model";
import jwtAuthenticationMiddleware from "../middlewares/jwt-authentication.middleware";

//Padrões de informações do jsonwebtoken 
// "iss" Dominio da aplicação geradora do token
// "sub" Assunto do token, mas muito utilizado para guardar o ID do usuário
// "aud" Define quem pode usar o token
// "exp" Data para expiração do token
// "nbf" Defina uma data para qual o token não pode ser aceito antes dela
// "iat" Data de criação do token
// "jti" O id do token

const authorizationRoute = Router();

authorizationRoute.post('/token', basicAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = req.user;

        if(!user){
            throw new ForbiddenError('Usuário não informado');
        }

        const jwtPayload = {username: user.username};
        const jwtOptions = {subject: user?.uuid};
        const secretKey = 'my_secret_key';

        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);
        console.log(jwt);

        res.status(StatusCodes.OK).json({ token: jwt});
    } catch (error) {
        next(error);
    }
});

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
});

export default authorizationRoute;