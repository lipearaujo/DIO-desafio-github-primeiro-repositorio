//Cadeia de middlewares

const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res, next) => {
    console.log('Inicio...')
    next() //Passa para o proximo middleware da cadeia ( proxima requisiçao ) e quando terminar a execução de todos os middlewares volta de onde a funçao foi chamada
    console.log('Fim...')
})

server.get('/', (req, res, next) => {
    console.log('Resposta...')
    res.send('<h1>Olá Express !</h1>')
    
})

server.listen(port, () => {
    console.log(`Server on port ${port}`)
})