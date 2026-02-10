
const botonprobar = document.getElementById('botonprobar')
const inputnumber = document.getElementById('inputnumber')
const numerosecreto = 50

// Creo los eventos (boton con capacidad de escuchar)

botonprobar.addEventListener('click',botonprobarHandler)

function botonprobarHandler (eventoClick){
    console.log(eventoClick)
    const numeros = inputnumber.value
    console.log(numeros)

    if (numeros < numerosecreto){
        console.log('Número demasiado bajo')
    }

    if (numeros > numerosecreto){
        console.log('Número demasiado alto')
    }
    if (numeros === numerosecreto){
        console.log('Has acertado el número')
    }

}

function inputnumberHandler (eventoChange){

}