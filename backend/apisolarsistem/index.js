const express = require('express'); //Declaração do express 
const server = express();

server.get('/usuario', (req, res) => {
    return res.json({usuario: 'Marquin do Gás'})
})  // Mensagem de retorno do servidor

server.listen(3000, () => {
    console.log('Servidor está funcionando...')
}); //Saber se o servidor está funcionando