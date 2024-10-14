import { cadastrarUsuario, Login } from "../repository/usuarioRepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.post('/inserir/:nome/:senha', async (req,resp) => {
    let { nome, senha } = req.params; 
    let id = await cadastrarUsuario(nome, senha);

    resp.send({
        id: id
    })

})

endpoint.post('/entrar/:nome/:senha', async (req,resp) => {
    let {nome , senha} = req.params;

    let id = await Login(nome, senha)

    resp.send(
        id
    )
})

export default endpoint;