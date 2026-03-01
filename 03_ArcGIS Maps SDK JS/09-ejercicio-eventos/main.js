// Llamar al mapa (map y view)
const arcgisMap = document.querySelector('arcgis-map')

// Recoger la info del mapa cargado (evento y función)
arcgisMap.addEventListener('arcgisViewReadyChange', ()=>{

const vistaMapa = arcgisMap.view

// Creamos un evento. Ahora si que importa la función, porque depende donde clickes te dara un resultado u otro
const eventoClickMapa = vistaMapa.on ('click', (eventoClick)=>{

// Guardar la geometria en donde se haga click
const geometriaPunto = eventoClick.mapPoint 
console.log('Geometria', geometriaPunto)

// Para que te lleve a donde hagas click (el resultado del movimiento es una promesa (sabemos que lo es porque tarda en ejecutarse))
// goTo permite añadir geometrias (por eso se mueve)
const resultadoMovimiento = vistaMapa.goTo(geometriaPunto)
console.log(resultadoMovimiento)

// El movimiento sale bien
    resultadoMovimiento.then(()=>{
        vistaMapa.zoom = 8
    })

// El movimiento sale mal (buena práctica)
    resultadoMovimiento.catch((error)=>{
    console.log(error)
    })

    })
})