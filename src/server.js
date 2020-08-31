const express = require ( 'express' );
const app = express();
const path= require('path');
const email= require("./servidor/email");
var badyParse = require("body-parser");

app.set('port',3000);
app.set('views',path.join(__dirname,'Views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

app.use(badyParse.json());
app.use(badyParse.urlencoded({extended:true}));



// routes

app.use(require('./routes/index'));

// static files

app.use(express.static(path.join(__dirname,'public' )));

const oEmail = new email({

    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'fiona.upton@ethereal.email',
        pass: 'Nr6t5NRMUGXx13arGy'
    }
});
app.listen(app.get('port'),()=>{
    console.log('server on port' , app.get('port'));

});

app.post('/api/contacto',function(req,res,next){
         let email ={
             from:"loseFat@MediaList.com",
             to:"scarletesponoza612@gmail.com",
             subject:" Nuevo mensaje de usuario",
             html:`
                    <div>
                      <p>correo: ${req.body.c}</p>  
                      <p>Nombres: ${req.body.n}</p>  
                      <p>Apellidos: ${req.body.a}</cp>  
                      <p>Mensaje: ${req.body.m}</p>  
                    </div>
                `
         };

         oEmail.enviarCorreo(email);
         res.send("ok");
});