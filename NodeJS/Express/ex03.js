//Metodo USE

const express = require('express');
const server = express();
const port = 3000;

//o metodo use mapeia todos os metodos HTTP e define o inicio da url
//no metodo get precisamos passar exatamente a url que queremos acessar, ja no use precisamos apenas passar o inicio dela

//todas as url's que começarem com /api irão passar por esse middleware, não importando o que será passado depois.
//por exemplo, /api e /api/qualquercoisa irão passar pelo middleware, pois ambas url começam com /api
server.use('/api', (req, res, next) => {
    console.log('Inicio...')
    res.send('<h1>Método USE !</h1>')
    console.log('Fim...')
})

server.listen(port, () => {
    console.log(`Server on port ${port}`)
})