const express = require('express');
const router = express.Router();
const listarRepositorioController = require('../controller/listarRepositorioController');


router.get('/buscarPerfil/github/:name', listarRepositorioController.listarPerfilGithub);


module.exports = router;