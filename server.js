const express = require('express');
const app = express();
const hbs = require('hbs');
require('./helpers/helpers');

const port = process.env.PORT || 3000; // process.env.PORT: Localmente no existe, sirve cuando se realiza una publicación, y toma el puerto asignado por el server...

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'ismael hurtado'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    })
})

app.listen(port, () => {
    console.log('   >>Inicio...')
    console.log(`   >>Escuchando peticiones en el puerto ${port}`);
})