const RepositorioGithub = require('../models/repositorioGithubModel')

module.exports = app => {
  app.get('/repositorio-github', (req, res) => {
    RepositorioGithub.listar(res)
  })

  app.get('/repositorio-github/:nome', async (req, res) => {
    const nome = parseInt(req.params.nome)

    RepositorioGithub.buscarPorNome(nome, res)
  })

  app.post('/repositorio-github/:nome', (req, res) => {
    const nome = req.params.nome

    RepositorioGithub.salvarRepositorio(nome, res)
  })

}
