const port = process.env.PORT || 3003;

const bodyParser = require('body-parser');

//Servidor WEB - Node
const express = require('express');

//Start do Servidor WEB
const server = express();
//Configurar o CORS... Middeware
const allowCors = require('./cors');

//Carregando algum middeware... do Express
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

//Registrar a porta do Servidor Web
server.listen(port, function () {
   console.log(`BACKEND (TODO) rodando na porta ${port}.`);
});

module.exports = server;