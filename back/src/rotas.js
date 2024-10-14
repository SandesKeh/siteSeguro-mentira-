import usuarioController from './controller/usuarioController.js';
import diarioController from './controller/diarioController.js';


export default function addRotas(servidor) {
    servidor.use(usuarioController);
    servidor.use(diarioController);
}