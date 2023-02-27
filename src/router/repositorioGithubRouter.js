const express = require('express');
const router = express.Router();
const listarRepositorioController = require('../controller/listarRepositorioController');
const salvarRepositorioController = require('../controller/salvarRepositorioController');


router.get('/buscar/:name', listarRepositorioController.listarPerfilGithub);
router.post('/salvar/:name', salvarRepositorioController.salvarPerfilGithub);


module.exports = router;