// Funciones 

function holaMundo (){
    console.log('Hola Mundo')
    return 'Hola Mundo'
}

const salidaFuncion = holaMundo ()

console.log(salidaFuncion)

// Funcion sumar 2 numeros

function sumarNumeros(numero1, numero2){
    const suma = numero1 + numero2
    return suma
}

const resultado23 = sumarNumeros (2,3)

console.log(resultado23)

// Método .map

const arrayNumeros = [3, 4, 5, 6, 7, 8, 9]

const resultadoOperacion = arrayNumeros.map(function(numero,posicion){
    const multiplicacion = numero * 2
    return multiplicacion
})
console.log (resultadoOperacion)

// Funciones tipo flecha

// function sumaUno(parametro){
    // return parametro +1
// }

// const sumaDos = () =>{
    // return numero + 2
// }
// const suma3 = sumaDos(3)

// const resultadoFlecha = arrayNumeros.map(() => {})

// Ejercicio - Sin primera letra

function juntapalabras (palabra1, palabra2){
    const palabra1sinletra = palabra1.slice(1)
    const palabra2sinletra = palabra2.slice(1)

    const union = palabra1sinletra.concat(palabra2sinletra)

    return union
}

console.log(juntapalabras('Hola', 'Mundo'));

// Ejercicio - Invertir una palabra (el lo hace por otro método)

function invertirpalabra (palabra3){
    return palabra3.split("").reverse().join("");
}

console.log (invertirpalabra('hola'))

// Ejercicio - Contar vocales

function contarvocales (palabra4){
    let contador = 0
    let vocales = 'aeiou';

    for (let i=0; i<palabra4.length; i++){
        if (vocales.includes(palabra4[i])) {
      contador++;
    }
  }
  return contador;
}

console.log(contarvocales('holaholahola'))