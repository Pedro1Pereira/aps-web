/** @format */

const jwt = require('jsonwebtoken');
const sender = require('@sender');
const env = require('@env');

// função utilizada em todas as rotas que são necessárias validação de usuário
const validate_token = (req, res, next) => {
    if (req.headers.token) {
        jwt.verify(req.headers.token, env.authSecret, (err, decoded) => {
            if (!err) {
                req.headers.decoded = decoded;
                next();
            } else {
                sender.send(res, 401, 'Token inválido.');
            }
        });
    } else {
        sender.send(res, 401, 'Dados inválidos.');
    }
};

module.exports = validate_token;
