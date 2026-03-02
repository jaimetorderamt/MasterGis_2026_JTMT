const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const SimpleRenderer = await $arcgis.import("@arcgis/core/renderers/SimpleRenderer.js");
const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");

const arcgisMap = document.querySelector('arcgis-map');

// Se puede hacer de la siguiente forma o con autocasting poniendo: const hospitalesRenderer ={y meter la simbologia} y no haria falta importar nada
const hospitalesRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    angle: 180,
    color: [0, 194, 39, 1],
    outline: {
      cap: "round",
      color: [194, 0, 48, 1],
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
})

const hospitalesFl = new FeatureLayer({
  url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0',
  renderer: hospitalesRenderer
});

arcgisMap.addEventListener('arcgisViewReadyChange', () => {
  arcgisMap.map.add(hospitalesFl)
});
