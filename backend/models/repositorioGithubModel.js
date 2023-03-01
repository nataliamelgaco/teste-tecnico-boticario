const conexao = require('../infraestrutura/conexao')
const axios = require('axios');


class RepositorioGithubModel {
  async salvarRepositorio (nome, res) {
    await axios.get('https://api.github.com/users/' + nome).then(async function (resposta) {
            const sql = 'INSERT INTO repositorio_github SET ?';
            conexao.query(sql, resposta.data, (erro, resultados) => {
                if(erro){
                    res.status(400).json(erro);
                } else {
                    res.status(201).json({
                        mensagem: "Repositório salvo com sucesso!",
                        data: resposta.data
                    });
                }
            });
        }).catch((err) => {
            res.json({ msg: "Perfil não encontrado" });
        });
  }

  listar (res) {
    const sql = 'SELECT * FROM repositorio_github'

    conexao.query(sql, (erro, resultados) => {
      if (erro) {
        res.status(400).json(erro)
      } else {
        res.status(200).json(resultados)
      }
    })
  }

  async buscarPorNome (nome, res) {
    await axios.get('https://api.github.com/users/' + nome)
    .then(function(resposta){
            console.log(resposta.data);
            return res.status(200).json(resposta.data);
      }).catch((err)=>{
            res.json({msg:"Perfil não encontrado", erro: err});
    });
  }
}

module.exports = new RepositorioGithubModel();
