/** @format */

require('module-alias/register');

const express = require('express');
const globals = require('./globals');
// TODO separar server de app
// instância do express
const app = express();
// http para a implementação do socket
const http = require('http').Server(app);

  app.use((req, res, next) => {
    req.startTime = new Date()
    next()
  })


// TODO separar em um middleware
// definição do cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'PUT, PATCH, POST, GET, DELETE, OPTIONS'
    );
    next();
});

// para utilizar JSON
app.use(express.json()); // to support JSON-encoded bodies
app.use(
    express.urlencoded({
        extended: true,
    })
);

// todas as rotas estão sendo importadas a partir do require routes
app.use(globals.base_url, require('./routes'));

// a partir daqui o servidor começa a escutar na porta especificada
http.listen(globals.port, () => {
    console.log(
        globals.port + ' ' + globals.address + ' ' + globals.fullAddress
    );
});
