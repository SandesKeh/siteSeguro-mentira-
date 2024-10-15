import con from "./connection.js";


export async function cadastrarDiario(dia, conteudo, usuario) {
    let comando = `insert into tb_diario(dt_dia, ds_conteudo, id_usuario)
        values (?,?,?)
    `;

    let resposta = await con.query(comando, [ dia, conteudo, usuario ]);

    let into = resposta[0];

    return into.insertId;
}

export async function consultarDiario() {
    let comando = ` select d.id_diario,
                        d.dt_dia,
                        d.ds_conteudo,
                        u.nm_usuario
                    from tb_diario d
                    inner join tb_usuario u on u.id_usuario = d.id_usuario
    `;

    let resposta = await con.query(comando);
    let into = resposta[0];

    return into
    
}

export async function alterarDiario(diarioObj, id) {
    let comando = ` update tb_diario
                        set dt_dia = ?,
                        ds_conteudo = ?, 
                        id_usuario = ?
                    where id_diario = ?

    `

    let resposta = await con.query(comando, [diarioObj.dia, diarioObj.conteudo, diarioObj.usuario, id]);

    let into = resposta[0];

    return into.affectedRows;
    
}

export async function deletarDiario(id) {
    let comando = `delete from tb_diario
                where id_diario =?
    `;
    let resposta = await con.query(comando, [id]);

    let into = resposta[0];

    return into.affectedRows;
    
}