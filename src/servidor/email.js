const nodemailer = require("nodemailer");

class Email{
     constructor(oConfig){
         this.createTransport = nodemailer.createTransport(oConfig);

     }

    enviarCorreo(oEmail){
        try{
             this.createTransport.sendMail(oEmail,function(error,info){
                 if(error){
                     console.log("error al enviar el mail");
                 }else{
                     console.log("Correo enviado exitosamente");
                 }
                 this.createTransport.close();
             })
        }catch(x){
             console.log("Email.enviarCorreo -- Error-- " + x);
            }        
    }
}
module.exports= Email;