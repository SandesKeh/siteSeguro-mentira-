import con from "./connection.js";

export async function cadastrarUsuario(nome, senha) {
    let comando = `insert into tb_usuario (nm_usuario, ds_senha)
            values (?,?)
    `;
    let resposta = await con.query(comando, [nome, senha]);
    let int = resposta[0]

    return int.insertId;
    
}


export async function Login(nome, senha) {
    let comando = ` select id_usuario,
                            nm_usuario
                    from tb_usuario
                    where nm_usuario = ?
                    and ds_senha = ?
                `;
    let resposta = await con.query(comando, [nome, senha]);
    

    return resposta[0][0];
}
