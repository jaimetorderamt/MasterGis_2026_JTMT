// Seleccionar botones

// Al estar estas variables fuera de cualquier bloque de codigo, las podemos coger siempre que queramos

const botoncalcular = document.getElementById('botoncalcular')
const botonreiniciar = document.getElementById('botonreiniciar')
const inputtexto = document.getElementById('inputtexto')
const parrafocalculos = document.getElementById('parrafocalculos')

// Funcionalidad botón calcular

function botonCalcularHandler(eventoClick){

    // Paso 1. Recoger info del input (que lo que pongamos en el cajetin, salga en la consola)
    console.log(inputtexto.value)
    const textoNumeros = inputtexto.value

    // Paso 2. Transformar a Array de números
    const arrayTexto = textoNumeros.split ('')
    console.log(arrayTexto)
    // Funcion a aplicar en cada uno de los numeros que pasen por la caja: 
    const arrayNumeros = arrayTexto.map(function(numeroTexto){
        return Number(numeroTexto)
        
    })
console.log(arrayNumeros)

// Ahora ya hemos pasado los números de tipo texto a tipo número (arraynumeros ok)

// Paso 3. Realizar operaciones

// Suma

let suma = 0

arrayNumeros.map(function(numero){
    // Itero por todos los números del input y me los va sumando
    suma = suma + numero

})

// Media

const media = suma / arrayNumeros.length


// Añadir la info a la página web

parrafocalculos.innerHTML = `La suma de los números es ${suma}, y la media es ${media}`

}

botoncalcular.addEventListener('click', botonCalcularHandler)

function botonReiniciarHandler(eventoclick){

    inputtexto.value = ''
    parrafoNuevo.innerHTML = ''
}




botonreiniciar.addEventListener('click', botonReiniciarHandler)

