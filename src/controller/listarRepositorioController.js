const axios = require('axios');

module.exports = {
    async listarPerfilGithub(request,response){
        const { name } = request.params;
        await axios.get('https://api.github.com/users/' + name).then(function(resposta){
            console.log(resposta.data);
            return response.send(resposta.data);
        }).catch((err)=>{
            response.json({msg:  "Perfil não encontrado"});
        });
    }
}