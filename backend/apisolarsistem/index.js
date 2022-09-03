const express = require('express'); //Declaração do express 
const server = express();
const planetas = require('./src/data/planet.json');

server.get('/planetas', (req, res) => {
    

    return res.json(planetas)
})  // Mensagem de retorno do servidor

server.listen(3000, () => {
    console.log('Servidor está funcionando...')
}); //Saber se o servidor está funcionando