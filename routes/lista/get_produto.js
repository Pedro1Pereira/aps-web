/** @format */
const sender = require('@sender');
const Database = require('@database');
const config = require('@config');
//const randomatic = require('randomatic');
//const { questions_quantity } = require('@globals');

module.exports = (req, res) => {

    const db = new Database(config);


    const filtro = req.body.filtro;

    //Query para adicionar cliente
    db.select("*","produto","1=1")
    .then(result => {
        sender.finale(res, 200, result, db);
    })
    .catch(err => {
        console.log(err);
        sender.finale(res, 500, 'Erro ao retornar os produtos', db);
    });
    

};

