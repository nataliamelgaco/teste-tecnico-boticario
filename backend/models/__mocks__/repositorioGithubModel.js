class RepositorioGithubModel {
  async salvarRepositorio (nome, res) {
    res.status(201).json(nome)
  }

  async listar (res) {
    const resultados = []

    res.status(200).json(resultados)
  }

  async buscarPorNome (nome, res) {
    res.status(200).json({nome})
  }
}

module.exports = new RepositorioGithubModel()
