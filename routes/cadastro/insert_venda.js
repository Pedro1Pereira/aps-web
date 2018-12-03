/** @format */
const sender = require('@sender');
const Database = require('@database');
const config = require('@config');
//const bcrypt = require('bcrypt-nodejs');
//const randomatic = require('randomatic');
//const { questions_quantity } = require('@globals');

module.exports = (req, res) => {

    const db = new Database(config);

    const funcionario_id = req.headers.decoded.id;
    const itens = req.body.itens;
    let total = 0;


    //db.insert("(nome, CPF)","cliente",`('${req.body.nome}', '${req.body.cpf}')`);

    db.insert("(id_funcionario, id_cliente, id_pagamento)", "venda", `(${funcionario_id}, ${req.body.cliente_id}, ${req.body.pagamento.id})`)
        .then(result => {

            array.forEach(itens => {
            db.insert("(id_venda, id_produto, quantidade, preco_total)", "venda_item", `(${result.insertId}, ${itens.id}, ${itens.quantidade}), ${itens.preco}`)
            total += itens.preco;
            });

        }).then(() =>{

            db.update(`valor = ${total}`, 'venda', `id = ${result.insertId}`)

        }).then(() => {
                sender.finale(res, 200, 'Venda cadastrado com sucesso.', db);
            })
                .catch(err => {
                    console.log(err);
                    sender.finale(res, 500, 'Erro ao cadastrar a venda.', db);
                });
};
