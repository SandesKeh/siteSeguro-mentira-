import { cadastrarDiario, consultarDiario, alterarDiario, deletarDiario } from "../repository/diarioRepository.js";
import { Router } from "express";

const endpoint = Router();

endpoint.post('/inserir/diario', async (req,resp) => {
    let diarioObj = req.body;

    let id = await cadastrarDiario(diarioObj);

    resp.send({
        id: id
    })
})

endpoint.get('/consultar/diario', async (req,resp) => {
    let id = await consultarDiario()

    resp.send(
        id
    )
})

endpoint.put('/alterar/diario/:id', async (req,resp) => {
    let id = req.params.id;

    let diarioObj= req.body;

    let res= await alterarDiario(diarioObj, id)

    resp.send()
})

endpoint.delete('/deeltar/usuario/:id', async (req,resp) => {
    let id = req.params.id;
    let resposta = await deletarDiario(id);

    resp.send();
})

export default endpoint;