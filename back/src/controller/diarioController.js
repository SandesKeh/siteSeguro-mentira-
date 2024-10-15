import { autenticar } from "../utils/jwtUtils.js";

import { cadastrarDiario, consultarDiario, alterarDiario, deletarDiario } from "../repository/diarioRepository.js";
import { Router } from "express";


const endpoint = Router();

endpoint.post('/inserir/diario/:dia/:conteudo/:usuario', autenticar, async (req,resp) => {
    let {dia, conteudo, usuario} = req.params;
        
    let id = await cadastrarDiario(dia, conteudo, usuario);

    resp.send({
        id: id
    })
})

endpoint.get('/consultar/diario', autenticar, async (req,resp) => {
    let id = await consultarDiario()

    resp.send(
        id
    )
})

endpoint.put('/alterar/diario/:id', autenticar, async (req,resp) => {
    let id = req.params.id;

    let diarioObj= req.body;

    let res= await alterarDiario(diarioObj, id)

    resp.send()
})

endpoint.delete('/deeltar/usuario/:id', autenticar, async (req,resp) => {
    let id = req.params.id;
    let resposta = await deletarDiario(id);

    resp.send();
})

export default endpoint;