// Llamar al mapa del html
const arcgisMap = document.querySelector('arcgis-map')
// Poner un evento porque lo anterior tarda en cargar (evento en rojo y la funcion sale en gris)
arcgisMap.addEventListener('arcgisViewReadyChange', (eventoViewReadyChange)=>{
// Hay que buscar en la consola en allLayers - items - y ahi estan las capas

// Forma 2:
const capas = arcgisMap.map.allLayers.items

for (let capa of capas) {
    console.log(capa.title)
}
})

// El consolelog sirve para encontrar la propiedad que queria y poder crear la constante (arcgisMap.map.allLayers.items)
// Se puede hacer de esta forma y te salen los nombres o creando una constante y un for (mas apropiado)
// Forma 1: 
console.log (arcgisMap.map.allLayers.items[0].title)
console.log (arcgisMap.map.allLayers.items[1].title)
console.log (arcgisMap.map.allLayers.items[2].title)