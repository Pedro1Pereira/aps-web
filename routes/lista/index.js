/** @format */

const express = require('express');
const app = express();

// todas as rotas do desafio devem ser requeridas aqui.
// estará dentro da pasta challenges
// para cada funcionalidade

app.post('/get_produto', auth, require('./get_produto'));

module.exports = app;
