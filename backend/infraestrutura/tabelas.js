class Tabelas {
  init (conexao) {
    this.conexao = conexao
    this.criarTabelaRepositorioGithub()
  }

  criarTabelaRepositorioGithub () {
    const sql = 'CREATE TABLE IF NOT EXISTS `repositorio_github` (`id` INTEGER NOT NULL , `login` VARCHAR(255) NOT NULL, `node_id` VARCHAR(255), `avatar_url` VARCHAR(255), `gravatar_id` VARCHAR(255), `url` VARCHAR(255), `html_url` VARCHAR(255), `followers_url` VARCHAR(255), `following_url` VARCHAR(255), `gists_url` VARCHAR(255), `starred_url` VARCHAR(255), `subscriptions_url` VARCHAR(255), `organizations_url` VARCHAR(255), `repos_url` VARCHAR(255), `events_url` VARCHAR(255), `received_events_url` VARCHAR(255), `type` VARCHAR(255), `site_admin` VARCHAR(255), `name` VARCHAR(255), `company` VARCHAR(255), `blog` VARCHAR(255), `location` VARCHAR(255), `email` VARCHAR(255), `hireable` VARCHAR(255), `bio` VARCHAR(255), `twitter_username` VARCHAR(255), `public_repos` INTEGER, `public_gists` INTEGER, `followers` VARCHAR(255), `following` VARCHAR(255), `created_at` DATETIME NOT NULL, `updated_at` DATETIME NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB'

    this.conexao.query(sql, erro => {
      if (erro) {
        console.log('Não foi possível criar a tabela repositorio_github. Motivo:')
        console.log(erro)
      } else {
        console.log('Tabela repositorio_github criada com sucesso')
      }
    })
  }
}

module.exports = new Tabelas()
