/* Maneira de se fazer a aplicação com TS */
import { Router } from 'express';
import { UsersController } from './controller/usersController';

const routes = Router();
const usersController = new UsersController();

routes.get('/users', usersController.listarUsuarios);

routes.post('/users', usersController.criarUsuario);

export { routes };



/* ----- Maneira de se fazer a aplicação com JS -----
import { Router } from 'express'; //usado para construir as rotas
import { usersController } from './controller/usersController';

//instanciando o router
const routes = Router();

//A função get possui dois parametros: o primeiro é uma string que será o nome da nossa rota e o segundo é uma arrow function que recebe dois valores, o request e o response
//rota para ler os dados
routes.get('/users', usersController.listarUsuarios);

//Toda vez que temos uma rota do tipo post ela irá cadastrar algo, recebendo as informações da request
//rota para cadastrar
routes.post('/users', usersController.criarUsuario);

//STATUS CODE - controla qual o status da requisição
    //200 - sucesso
    //201 - conseguimos criar um dado
    //403 - não autorizado
    //404 - pagina nao encontrada


//GET- ler os dados
//POST - criar os dados
//PUT/PATCH - editar os dados
//DELETE - deletar os dados

export { routes }; */