/** @format */

const express = require('express');
const app = express();

// todas as rotas do desafio devem ser requeridas aqui.
// estará dentro da pasta challenges
// para cada funcionalidade

app.use('/cadastro', require('./cadastro'));
app.use('/lsita', require('./lista'));

module.exports = app;
