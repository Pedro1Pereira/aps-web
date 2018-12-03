/** @format */

const express = require('express');
const app = express();

// todas as rotas do desafio devem ser requeridas aqui.
// estará dentro da pasta challenges
// para cada funcionalidade

app.post('/insert_venda', auth, require('./insert_venda'));
app.post('/insert_cliente', auth, require('./insert_cliente'));

module.exports = app;
