<?php
session_start(); //Esto siempre tiene que ir para iniciar sesion

require ('conexionBaseDatos.php');

$user_check=$_SESSION['login_user'];
$ses_sql=$conn->query("SELECT cliente FROM NombreUsuarioCliente WHERE cliente='$user_check'");
$row=mysqli_fetch_array($ses_sql,MYSQLI_ASSOC);
$login_session=$row['cliente'];
	//Si el usuario no esta logeado se envia al login
	if(!isset($login_session)){
		header("Location: form_visitante.php");
	}
?> 