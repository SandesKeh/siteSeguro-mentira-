import { gerarToken } from "../utils/jwtUtils.js";

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
   try {
    let {nome , senha} = req.params;

    let id = await Login(nome, senha);

    

    if(id == null) {
        resp.send({ error:"senha errada compadre"});
    } else {
        let token = gerarToken(id)
        resp.send({
            "token" : token 
        })
    }
   } 
   
   catch (err) {
    resp.status(400).send({
        erro:err.message
    })
   }
})

export default endpoint;