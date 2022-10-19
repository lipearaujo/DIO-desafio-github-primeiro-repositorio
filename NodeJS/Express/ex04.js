//Metodo Route

const express = require('express');
const server = express();
const port = 3000;

server.route('/clientes')
    .get((req, res) => res.send('Lista de clientes'))
    .post((req, res) => res.send('Novo cliente'))
    .put((req, res) => res.send('Altera cliente'))
    .delete((req, res) => res.send('Remvoe cliente'))

server.listen(port, () => {
    console.log(`Server on port ${port}`)
})