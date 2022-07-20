/* Maneira de se fazer a aplicação com TS */
import {database} from '../database';
import {Response, Request} from 'express';

export class UsersController {
    listarUsuarios(request: Request, response: Response): Response {
        return response.status(200).json(database);
    }

    criarUsuario(request: Request, response: Response): Response {
        const { name } = request.body; 

        if(name.length < 1){
            return response.status(403).json({Mensagem: `Não é possível adicionar usuários sem um nome`});
        }

        database.push(name); 
        return response.status(201).json({Mensagem: `Usuário ${name} foi adicionado`});
    }
};




/*Maneira de se fazer a aplicação com JS
import { database } from "../database.js";

//O controller será responsavel pelas funcionalidades da aplicação 
const usersController = {
    listarUsuarios(request, response) {
        return response.status(200).json(database);
    },

    criarUsuario(request, response) {
        //const body = request.body; //Pega o objeto inteiro
        //const body = request.body.name; //Pega apenas a variavel name
        const { name } = request.body; //Outra forma de pegar apenas a variavel name

        //verificando se a variavel name não está vazia
        if(name.length < 1){
            return response.status(403).json({Mensagem: `Não é possível adicionar usuários sem um nome`});
        }

        database.push(name); //Inserindo o nome no array database
        return response.status(201).json({Mensagem: `Usuário ${name} foi adicionado`});
    }
};

export { usersController };*/