const axios = require('axios');
const repositorioGithub = require('../db/repositoriosGithub');

module.exports = {
    async salvarPerfilGithub(request, response) {
        const { name } = request.params;
        await axios.get('https://api.github.com/users/' + name).then(async function (resposta) {

            await repositorioGithub.create(resposta.data).then(() => {

                return response.json({
                    mensagem: "Repositorio cadastrado com sucesso!"
                });
            }).catch(() => {
                console.log('erro:');

                return response.status(400).json({
                    erro: true,
                    mensagem: "Erro: usuario não cadastrado"
                });
            });
        }).catch((err) => {
            response.json({ msg: "Perfil não encontrado" });
        });
    }
}
