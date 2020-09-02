DROP DATABASE losefat;

CREATE DATABASE IF NOT EXISTS losefat;

USE losefat;



CREATE TABLE Usuario(
    cedula VARCHAR(10) primary key not null,
    nombre varchar(30) not null,
    apellido varchar(30) not null,
    celular varchar(20) not null,
    correoElectronico VARCHAR(50) NOT NULL,
    usuario varchar(30) not null,
    pass VARCHAR(30) NOT NULL,
    fechaRegistro date,
    horaRegistro time,
    tipo varchar(15)
);
create table categoria(
	idCategoria varchar(10) primary key not null,
    detalle varchar(20) not null
);




Create table pagina(
	urlPagina varchar(150) primary key not null,
    nVisitar int not null
);

create table contactoForm(
contactoFormId varchar(10) primary key not null,
hora time not null,
fecha date not null,
nombres varchar(30) not null,
apellidos varchar(30)  not null,
correo varchar(50)  not null,
fechaNacimiento date  not null,
genero varchar(10) not null,
categoria varchar(20) not null,
mensaje varchar(500) not null
);

create table producto(
	idProducto varchar(30) primary key not null,
	categoria varchar(100) not null,
	costo float not null,
	cantidadStock varchar(10) not null,
	urlImagen varchar(500) not null,
	cantidadVentas varchar(10),
    foreign key (categoria) references categoria(idCategoria)
    );

CREATE TABLE Visita(
    idVisita varchar(10) primary key not null,
	contador varchar(5) not NULL,
    idUsuario varchar(10) NOT NULL,
	fechaVisita date  not null,
    horaInicial time  not null,
    horaFinal time  not null,
    form varchar(10) not null,
    pagina varchar(150) not null,
    foreign key(form) references contactoForm(contactoFormId),
    foreign key (pagina) references pagina (urlPagina)
    
);

create table sesion (
	idSesion varchar(50) primary key not null,
	usuario varchar(10) not null,
	horaInicio time not null,
	horaFin time not null,
	fechaFin date not null,
	foreign key (usuario) references usuario(cedula)
    );
    
    
create table compra (
	compraId varchar(10) primary key not null,
    cantidad varchar(30) not null,
    hora time not null,
    fecha date not null,
    total float not null,
    usuario varchar(10) not null,
    producto varchar(30) not null,
    foreign key (usuario) references  usuario(cedula),
    foreign key (producto) references  producto(idproducto)
    
    

);














