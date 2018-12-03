/** @format */

const express = require('express');
const app = express();
const sender = require('@sender');

// todas as rotas do desafio devem ser requeridas aqui.
// estará dentro da pasta challenges
// para cada funcionalidade

app.use('/cadastro', validate_fields_login, require('./cadastro'));
app.use('/lista', require('./lista'));
app.post('/entrar', require('./entrar'));


// função para verificar os campos enviados do cliente
const validate_fields_login = (req, res, next) => {
    if (req.body.email && req.body.password) {
        next();
        return;
    } else {
        sender.send(res, 401, 'Campos vazios.');
    }
};

module.exports = app;
