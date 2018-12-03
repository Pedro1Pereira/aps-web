/** @format */
//simples sign_in do comitê nacional

const Database = require('@database');
const config = require('@config');
const bcrypt = require('bcrypt-nodejs');
const sender = require('@sender');
const jwt = require('jsonwebtoken');
const env = require('@env');

module.exports = (req, res) => {

    const db = new Database(config);

    // Query que verifica se o email está cadastrado no sistema
    db.query(`SELECT e-mail FROM funcionario WHERE email = '${req.body.email}'`)
        .then(result => {
            if (result[0]) {
                //Query traz os dados do funcioanrio
                db.query(
                    `SELECT password, e-mail, nome
                     FROM funcionario 
                     WHERE e-mail = '${result[0].email}'`
                ).then(result => {
                    const pass_from_user = req.body.password;
                    const pass = result[0].encrypted_password;
                    //faz a verificação da senha com a senha cryptografada no banco
                    bcrypt.compare(pass_from_user, pass, (err, ans) => {
                        // pass correto
                        if (ans) {
                            const user = {
                                name: result[0].name,
                                email: result[0].email,
                            };

                            //token de autenticação do delegado
                            const token = jwt.sign(user, env.authSecret, {
                                expiresIn: '1d',
                            });

                            user.token = token;

                            sender.finale(res, 200, user, db);
                        } else {
                            sender.finale(
                                res,
                                401,
                                'E-mail ou senha inválido',
                                db
                            );
                        }
                    });
                });
            } else {
                sender.finale(res, 401, 'E-mail não cadastrado', db);
            }
        })
        .catch(() => {
            sender.finale(res, 500, 'Erro ao tentar logar.', db);
        });
};
