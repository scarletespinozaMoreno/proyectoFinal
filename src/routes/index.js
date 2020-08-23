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


module.exports=router;