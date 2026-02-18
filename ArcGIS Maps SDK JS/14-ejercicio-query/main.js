// Imports
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const Query = await $arcgis.import("@arcgis/core/rest/support/Query.js");
const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");
const GraphicsLayer = await $arcgis.import("@arcgis/core/layers/GraphicsLayer.js");

// Seleccionar el mapa
const arcgisMap = document.querySelector('arcgis-map')

// Guardamos la capa en memoria
arcgisMap.addEventListener('arcgisViewReadyChange', (eventoViewReadyChange)=>{

    const hospitalesFl = new FeatureLayer({
    url:'https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Hospitales/FeatureServer/0'
})
// Añadir capa al mapa
// arcgisMap.map.add(hospitalesFl)

const peticionQuery = new Query({
    where:"Provincia = 'Segovia'",
    returnGeometry: true,
// Para que te de todos los campos de cada una de las consultas: 
    outFields: ['*']
})

// El siguiente resultado es una promesa!!!!!!
const resultadoQuery = hospitalesFl.queryFeatures(peticionQuery)

// La parte de que la petición de la promesa se cumple: (habria que hacer tb el catch por si hay algun error que aparezca en consola)

resultadoQuery.then((resultadoFeatureSet)=>{
    
    const entidades = resultadoFeatureSet.features 

    // Falta la simbologia (la geometria y el grafico ya está). Importamos la libreria (libreria 3) y la simbologia: 

const simbologiaPunto = new SimpleMarkerSymbol({
  angle: 180,
  color: [0,194,39,1],
  outline: {
    cap: "round",
    color: [194,0,48,1],
    join: "round",
    miterLimit: 1,
    style: "dash",
    width: 1
  },
  path: "undefined",
  size: 14,
  style: "x",
  xoffset: 0,
  yoffset: 0
})

// Aplicación de iterador .map. Podria ser tb el iterador for of...
const entidadesConSimbologia = entidades.map((grafico)=>{
    grafico.symbol = simbologiaPunto
    return grafico 
})

// Ahora importamos la libreria de graphics layer y adaptamos la simbologia creada. 

const capaGraficaGL = new GraphicsLayer()
capaGraficaGL.addMany (entidadesConSimbologia)
arcgisMap.map.add (capaGraficaGL)

})

})


