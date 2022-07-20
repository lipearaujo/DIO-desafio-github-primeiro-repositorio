import express from 'express';
import { routes } from './routes';

const server = express();
server.use(express.json()); //habilitar a leitura de arquivos json
server.use(routes); //Para podermos usar o arquivo routes.js

server.listen(5000, () => {
    console.log('Server rodando na porta 5000');
});