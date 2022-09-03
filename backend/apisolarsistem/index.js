const express = require('express'); //Declaração do express 
const server = express();
const fs = require("fs");

server.get('/teste', (req, res) => {
    var imagem = fs.readFileSync('./assetsapi/1.png');
    var base64 = Buffer(imagem).toString('base64');

    return res.json({'usuario': base64})
})  // Mensagem de retorno do servidor

server.listen(3000, () => {
    console.log('Servidor está funcionando...')
}); //Saber se o servidor está funcionando