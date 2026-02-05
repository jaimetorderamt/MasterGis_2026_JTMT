const palabras = ['Dromedario', 'Murciélago', 'Elefante', 'Jirafa']

let palabramaslarga

for (const palabra of palabras){

    console.log(palabramaslarga)

    if(palabramaslarga){

        if (palabramaslarga.length < palabra.length){
            
            palabramaslarga = palabra
        }

    } else {
        palabramaslarga = palabra
    }
    
}