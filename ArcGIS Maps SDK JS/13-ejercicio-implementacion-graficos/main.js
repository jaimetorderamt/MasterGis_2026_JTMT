// Importar librerias necesarias
const Point = await $arcgis.import("@arcgis/core/geometry/Point.js");
const Polyline = await $arcgis.import("@arcgis/core/geometry/Polyline.js");
const Polygon = await $arcgis.import("@arcgis/core/geometry/Polygon.js");
const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");
const SimpleLineSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleLineSymbol.js");
const SimpleFillSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleFillSymbol.js");
const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
const GraphicsLayer = await $arcgis.import("@arcgis/core/layers/GraphicsLayer.js");

// Geometria
const geometriaPunto = new Point({
    latitude: 39.8,
    longitude: -4
})

const geometriaLinea = new Polyline({
    paths:[
    [-4, 40],
    [40, -2]
  ]
})
const geometriaPoligono = new Polygon({
    rings:[
    [50, -6],
    [40, -2],
    [45, -8]
    ]
})

// Simbología
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

const simbologiaLinea = new SimpleLineSymbol({
  cap: "round",
  color: [231,226,54,1],
  join: "round",
  marker: {
    color: [194,0,0,1],
    placement: "begin-end",
    style: "circle",
  },
  miterLimit: 1,
  style: "solid",
  width: 1
});

const simbologiaPoligono = new SimpleFillSymbol({
  color: [191,0,194,1],
  outline: {
    cap: "round",
    color: [0,122,194,1],
    join: "round",
    miterLimit: 1,
    style: "long-dash",
    width: 1
  },
  style: "solid"
});

// Unir geometria y simbologia 
const graficoPunto = new Graphic ({
    geometry: geometriaPunto,
    symbol: simbologiaPunto
})

const graficoLinea = new Graphic ({
    geometry: geometriaLinea,
    symbol: simbologiaLinea
})

const graficoPoligono = new Graphic ({
    geometry: geometriaPoligono,
    symbol: simbologiaPoligono
})

// Creo una capa gráfica para los gráficos que vaya a a crear

const capaGraficaGL = new GraphicsLayer ()
capaGraficaGL.add(graficoPunto)
capaGraficaGL.add(graficoLinea)
capaGraficaGL.add(graficoPoligono)

// Llamar al mapa

const arcgisMap = document.querySelector('arcgis-map')

// Añadir la capa al mapa

arcgisMap.addEventListener('arcgisViewReadyChange', ()=>{
arcgisMap.map.add(capaGraficaGL)
})

