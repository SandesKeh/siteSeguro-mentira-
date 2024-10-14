import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import addRotas from './rotas.js';


const servidor= express();
servidor.use(cors());
servidor.use(express.json());

addRotas(servidor);


servidor.listen( process.env.PORT , () => console.log(`API subiu na porta ${process.env.PORT}`));