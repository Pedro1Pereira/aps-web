/** @format */

const mysql = require('mysql');

// classe responsável para instânciar uma conexão válida com o banco de dados
module.exports = class Database {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if (err) return reject(err);
                resolve(rows);
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err) return reject(err);
                resolve();
            });
        });
    }

    select(parameter, table, where){
        
        let parameters = "*";
        parameters = parameter;

        return this.query(`SELECT ${parameters} FROM ${table} WHERE ${where};`)
    }

    update(parameter, table, where){
        
        return this.query(`UPDATE ${table} SET ${parameter} WHERE ${where};`)
    }

    delete(table, where){

        return this.query(`DELETE FROM ${table} WHERE ${where};`)

    }

    insert(parameter, table, values){

        return this.query(`INSERT INTO ${table} ${parameter} VALUES ${values};`)

    }

};
