//Ex 01 - Configuração e mapeando uma rota

const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.send('<h1>Index !</h1>')
})

server.listen(port, () => {
    console.log(`Server on port ${port}`)
})