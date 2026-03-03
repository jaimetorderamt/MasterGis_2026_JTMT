// Elemento 1. Botón para subir arriba de la página 

// Paso 1. Obtener la variable de botón
var boton = document.getElementById("botonSubir");

// Paso 2. Mostrar el botón cuando se haga scroll hacia abajo 20px desde el inicio

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        boton.style.display = "block";
    } else {
        boton.style.display = "none";
    }
}

// Paso 3. Activar la función de subir arriba cuando se clicka el botón
function subirArriba() {
    document.documentElement.scrollTop = 0;
}

// Elemento 2. Fecha actual de forma automática en el footer para que denote actualización del CV
document.getElementById("anioActual").innerText = new Date().toLocaleDateString();
