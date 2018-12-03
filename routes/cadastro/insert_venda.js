/** @format */
const sender = require('@sender');
const Database = require('@database');
const config = require('@config');
//const bcrypt = require('bcrypt-nodejs');
//const randomatic = require('randomatic');
//const { questions_quantity } = require('@globals');

module.exports = (req, res) => {

    const db = new Database(config);

    //db.insert("(nome, CPF)","cliente",`('${req.body.nome}', '${req.body.cpf}')`);

    db.insert("(valor)", "venda", `(450)`)
        .then(result => {
            //Query para adicionar itens
            //array.forEach(element => {
            db.insert("(id_venda)", "venda_item", `(5)`)
            //});
        })
            .then(() => {
                sender.finale(res, 200, 'Venda cadastrado com sucesso.', db);
            })
                .catch(err => {
                    console.log(err);
                    sender.finale(res, 500, 'Erro ao cadastrar a venda.', db);
                });
};
