import './index.scss';
import axios from 'axios';
import { useState, useEffect} from 'react';


export default function Home(){
    const [array, setArray] = useState([]);
    const [nome, setNome] = useState([]);



    // async function Mostrartabela(){
    //     let tabela = await axios.get('http://localhost:5000/consultar/diario?insirir-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c3VhcmlvIjoyLCJubV91c3VhcmlvIjoiYSIsImlhdCI6MTcyODkxNTU1MH0.8ktRQqpWif85RCoxK1ih1KwKXkDPCgcT5F5FZYLj5cY');
    //     let x = tabela.data;
    //     setArray(x)
    // }

    // useEffect(() => {
    //     Mostrartabela()
    // }, [])



    return(
        <div className="home">
            <h1> Seja muito bem vindo </h1>

            <div className="cadastrar">
                <h1> Cadastra aqui seu diario </h1>

                <div className="sla">
                    <div className="inputes">
                        <h1> Dia </h1>
                        <input type="date"/>
                    </div>

                    <div className="inputes">
                        <h1> Conteudo </h1>
                        <input type="text" placeholder='coloque seu conteudo aqui' />
                    </div>
                </div>
        

            </div>

            <div className="table">
                <table className='tabela'>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Dia </th>
                        <th>Conteudo </th>
                        <th>Nome Usuario</th>
                        </tr>
                    </thead>

                    <tbody>
                        {array
                        .map(item => (
                            <tr key={item.id_diario}>
                            <td>{item.id_diario}</td>
                            <td>{item.dt_dia}</td>
                            <td>{item.ds_conteudo}</td>
                            <td>{item.nm_usuario}</td>
                          
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

                </div>
        </div>
    )
}