// Importar librerias necesarias 
const Point = await $arcgis.import("@arcgis/core/geometry/Point.js");
const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
const GraphicsLayer = await $arcgis.import("@arcgis/core/layers/GraphicsLayer.js");

// Añadir puntos al mapa

// 1. Geometria
const geometriaPunto = new Point({
    latitude: -4,
    longitude: 41.4
})

// 2. Simbología

const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");

const simbologiaPunto = new SimpleMarkerSymbol({
  angle: 0,
  color: [102,169,240,1],
  outline: {
    cap: "round",
    color: [107,0,194,1],
    join: "round",
    miterLimit: 2,
    style: "none",
    width: 1
  },
  path: "undefined",
  size: 15,
  style: "triangle",
  xoffset: 0,
  yoffset: 0
});

// 3. Unimos geometria y simblogia (Reference-CoreApi-Graphic (al final del todo)) (importamos libreria 2)

const graficoPunto = new Graphic ({
    geometry: geometriaPunto,
    Symbol: simbologiaPunto,

})

// Creo una capa gráfica para los gráficos que vaya a a crear (importamos libreria 3)

const capaGraficaGL = new GraphicsLayer ()
capaGraficaGL.add(graficoPunto)

// Nos ha faltado acceder al mapa... accedemos a el llamandole: 
const arcgisMap = document.querySelector('arcgis-map')

// cogemos el evento (cuando se cargue el mapa, que se añada el grafico al mapa)
arcgisMap.addEventListener('arcgisViewReadyChange', ()=>{
arcgisMap.map.add(capaGraficaGL)
})