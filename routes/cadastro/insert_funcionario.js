/** @format */
const sender = require('@sender');
const Database = require('@database');
const config = require('@config');
const bcrypt = require('bcrypt-nodejs');
//const randomatic = require('randomatic');
//const { questions_quantity } = require('@globals');

module.exports = (req, res) => {

    const db = new Database(config);

    req.body.password = bcrypt.hashSync(req.body.password);

    //db.insert("(nome, CPF)","cliente",`('${req.body.nome}', '${req.body.cpf}')`);

    //Query para adicionar cliente
    db.insert("(nome, CPF)","cliente",`('Pedro', '450')`)
    .then(() => {
        sender.finale(res, 200, 'Cliente cadastrado com sucesso.', db);
    })
    .catch(err => {
        console.log(err);
        sender.finale(res, 500, 'Erro ao cadastrar o cliente.', db);
    });
    

};

