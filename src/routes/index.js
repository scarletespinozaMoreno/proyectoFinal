const axios = require("axios");
const express = require ( 'express' );
const router=express.Router();

router.get('/', (req, res)=>{

    res.render('index.html',{title: 'Primera página' });
});


router.get('/servicios', (req, res)=>{

    res.render('servicios.html',{title: 'Página servicios' });
});

router.get('/tienda', (req, res)=>{

    res.render('tienda.html',{title: 'Página tienda' });
});

router.get('/Motivacion', (req, res)=>{

    res.render('Motivacion.html',{title: 'Página Motivacion' });
});

router.get('/quienesSomos', (req, res)=>{

    res.render('quienesSomos.html',{title: 'Página quienes somos' });
});

router.get('/Videos', (req, res)=>{

    res.render('Videos.html',{title: 'Página videos' });
});

router.get('/Playlist', (req, res)=>{

    res.render('Playlist.html',{title: 'Página playlist' });
});

router.get('/Testimonios', (req, res)=>{

    res.render('Testimonios.html',{title: 'Página playlist' });
});


router.get('/contacto', (req, res)=>{

    res.render('contacto.html',{title: 'Página quienes somos' });
});

router.get('/registrate', (req, res)=>{

    res.render('registrate.html',{title: 'Página de registro' });
});

if (typeof (document) !== "undefined") {
    document.getElementById("submit").addEventListener("click",function(){
        let strCorreo=document.getElementById("correo").nodeValue;
        let strNombre= document.getElementById("nombres").nodeValue;
        let strApellido= document.getElementById("apellidos").nodeValue;
        let strMensaje= document.getElementById("mensaje").nodeValue;
        if(strCorreo !="" && strNombre !="" && strApellido != ""){
               let datos ={
                   c: strCorreo,
                   n: strNombre,
                   a:strcApellido,
                   m: strMensaje
   
               };
               axios.post('/api/contacto',dato).then(function(response){
                   document.getElementById("correo").nodeValue=" ";
                   document.getElementById("nombres").nodeValue=" ";
                   document.getElementById("apellidos").nodeValue=" ";
                   document.getElementById("mensaje").nodeValue=" ";
                   alert("gracias por escribirnos en breve nos contactaremos contigo");
               }).catch(function(error){
                   console.log(error);
               });
        }else{
            alert("Por favor llenar");
        }
   
   });
 }

module.exports=router;