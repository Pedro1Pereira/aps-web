/** @format */
// TODO migrar para functions

// método para enviar respostas com finalização da instância do banco de dados
const finale = (res, status, message, db) => {
    res.status(status);
    if (message instanceof String) {
        res.send(message);
    } else {
        res.json(message);
    }

    db.close();
};

// método para enviar respostas sem finalização da instância do banco de dados
const send = (res, status, message) => {
    res.status(status);
    if (message instanceof String) {
        res.send(message);
    } else {
        res.json(message);
    }
};

module.exports = {
    finale,
    send,
};
