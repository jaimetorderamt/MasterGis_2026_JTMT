// Importar librerias necesarias 
const Point = await $arcgis.import("@arcgis/core/geometry/Point.js");
const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");
const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
const GraphicsLayer = await $arcgis.import("@arcgis/core/layers/GraphicsLayer.js");

// Añadir puntos al mapa

// 1. Geometria (importamos libreria 1)
const geometriaPunto = new Point({
    latitude: 39.8,
    longitude: -4
})

// 2. Simbología (importamos libreria 2)

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
});

// 3. Unimos geometria y simbologia (Reference-CoreApi-Graphic (al final del todo)) (importamos libreria 3)

const graficoPunto = new Graphic ({
    geometry: geometriaPunto,
    symbol: simbologiaPunto
})

// Creo una capa gráfica para los gráficos que vaya a a crear (importamos libreria 4)

const capaGraficaGL = new GraphicsLayer ()
capaGraficaGL.add(graficoPunto)

// Nos ha faltado acceder al mapa... accedemos a el llamandole: 
const arcgisMap = document.querySelector('arcgis-map')

// Cogemos el evento (cuando se cargue el mapa, que se añada el grafico al mapa)
arcgisMap.addEventListener('arcgisViewReadyChange', ()=>{
arcgisMap.map.add(capaGraficaGL)
})