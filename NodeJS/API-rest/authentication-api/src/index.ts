//express é um gerenciador de rotas. Permite trocar informaçoes sobre o protocolo HTTP
//é uma biblioteca para gerenciar rotas HTTP
import express, { Request, Response, NextFunction } from "express";

//Importando o arquivo que criamos para a rota users
import usersRoute from "./routes/users.route";
import statusRoute from "./routes/status.route";
import errorHanddler from "./middlewares/error-handdler.middleware";
import authorizationRoute from "./routes/authorization.route";
import jwtAuthenticationMiddleware from "./middlewares/jwt-authentication.middleware";

//criando um servidor http com express
const app = express();

//Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configuração de rotas
//No express a ordem das rotas importa
app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);

//Configuração dos handdlers de erro
app.use(errorHanddler);

//Inicialização do servidor
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000");
});


/* dependencias e bibliotecas usadas
  npm install -g typescript --> instalar typescript globalmente
  npm install --save-dev typescript --> instalar typescript apenas no projeto
  npm install --save-dev @types/node --> bibliotecas padrões do node
  npm install --save-dev ts-node-dev --> refresh automatico na pagina quando houver mudanças
  npm install --save http-status-codes --> facilitar o uso do status code
  npm install --save pg --> biblioteca banco de dados pg
  npm install --save-dev @types/pg --> typescript do pg
  npm install --save jsonwebtoken --> jwt para os tokens
  npm install --save-dev @types/jsonwebtoken --> typescript para jwt
  */