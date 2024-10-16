import './index.scss';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'

export default function Login(){

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    async function Entrar(){
        let er = await axios.post(`http://localhost:5000/entrar/${nome}/${senha}`);
        
        if(er.data.erro != undefined){
            alert(er.data.erro);
        }
        else{
            storage('Usuario', er.data.token);
            navigate('/home');
        }

    }

    

    return (

        <div className="tela-login">

                <div className="lo">

                    <h1> Faça seu login!! </h1>

                    <div className="inputes">
                        <h1> Nome: </h1>
                        <input value={nome} onChange={e=>setNome(e.target.value)} type="text"  placeholder='Digite seu nome'/>
                    </div>

                    <div className="inputes">
                        <h1> Senha: </h1>
                        <input value={senha} onChange={e=>setSenha(e.target.value)} type="text" placeholder=' Digite sua senha'/>
                    </div>

                    <button onClick={Entrar}> Entrar </button>
                </div>    
                
        </div>
    )
}