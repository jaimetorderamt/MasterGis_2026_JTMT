// Seleccionar elementos de mi documento HTML

const subtitulo = document.getElementById('subtitulo')
console.log(subtitulo)

const parrafos = document.querySelectorAll('p')
console.log(parrafos)

const parrafosPares = document.querySelectorAll('.parrafo-par')
console.log(parrafosPares)

// Crear un elemento

const parrafoNuevo = document.createElement('p')
const nodoTexto = document.createTextNode('Este parrafo esta creado dinamicamente a traves de JS')

parrafoNuevo.appendChild(nodoTexto)

const divVacio = document.getElementById('div-vacio')

divVacio.appendChild(parrafoNuevo)