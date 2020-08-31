<?php
$nom_servidor ="localhost";
$nom_usuario ="root";
$password = "";
$nom_db ="desarrollo";

//Crear conexion con PHP Y MySQL
$conn = new mysqli ($nom_servidor, $nom_usuario, $password, $nom_db); //en esta variable conn se crea la conexion con la base de datos.

//Verifica la conexion
if ($conn-> connect_error) {
	die("Error de Conexion:". $conn-> connect_error);
}
 	//echo "Conexion Satisfactoria"."<br>";
?>