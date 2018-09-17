const  hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');

    palabras.forEach((palabra, idx) => {
    // console.log('palabra',palabra,idx);

        // palabras[idx] = palabra.charAt(0).toUpperCase()// + palabra.slice(1).toLowerCase();
        // console.log(palabra.charAt(0).toUpperCase())
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
})