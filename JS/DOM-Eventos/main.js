const boton = document.getElementById('boton')

// Genera la funcion debajo del boton porque primero se ejecuta todo y luego llama a lo que necesite. 
boton.addEventListener('click',botonHandler)

function botonHandler (eventoClick){
    console.log(eventoClick)

}

// Añadimos en html un input de tipo texto

const inputTexto = document.getElementById('inputTexto')

function inputTextoHandler(eventoChange){
    // Guardar la variable
    const textoUsuario = eventoChange.target.value
    // Crear un párrafo
    const parrafoNuevo = document.createElement('p')
    // Cambiamos propiedad del parrafo
    parrafoNuevo.innerHTML = textoUsuario
    // Vamos añadiendo lo que escribimos debajo del input
    document.body.appendChild(parrafoNuevo)
}

inputTexto.addEventListener('change', inputTextoHandler)

