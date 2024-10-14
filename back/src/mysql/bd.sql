create database db_diario;

use db_diario;

create table tb_usuario (
id_usuario int primary key auto_increment,
nm_usuario varchar(100),
ds_senha varchar(100)
);

select * from tb_usuario;

create table tb_diario (
id_diario int primary key auto_increment,
dt_dia date,
ds_conteudo varchar(400),
id_usuario int,
foreign key(id_usuario) references tb_usuario(id_usuario)
);


select * from tb_diario;

select d.id_diario,
		d.dt_dia,
		d.ds_conteudo,
		u.nm_usuario
from tb_diario d
inner join tb_usuario u on u.id_usuario = d.id_usuario;


delete from tb_diario
where id_diario =?;