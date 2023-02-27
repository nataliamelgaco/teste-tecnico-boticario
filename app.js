const express = require('express');
const app = express();
const router = require('./src/router/repositorioGithubRouter');

app.use(router);

app.listen(8080, function(req,res) {
    console.log("servidor rodando na porta 8080");
});