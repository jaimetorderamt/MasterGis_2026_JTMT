const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const UniqueValueRenderer = await $arcgis.import("@arcgis/core/renderers/UniqueValueRenderer.js");
const SimpleFillSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleFillSymbol.js");

const arcgisMap = document.querySelector('arcgis-map')

const redNatura2000Renderer = new UniqueValueRenderer({
  field: 'TIPO_NUEVO'
  
});
redNatura2000Renderer.addUniqueValueInfo({
  value: "ZEPA",
  symbol: new SimpleFillSymbol({
  color: [236,24,24,1],
  outline: {
    cap: "round",
    color: [250,0,0,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  },
  style: "forward-diagonal"
  })
});

redNatura2000Renderer.addUniqueValueInfo({
  value: "LIC",
  symbol: new SimpleFillSymbol({
  color: [92,217,84,1],
  outline: {
    cap: "round",
    color: [95,138,86,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 0
  },
  style: "solid"
  })
});

redNatura2000Renderer.addUniqueValueInfo({
  value: "LIC/ZEPA",
  symbol: new SimpleFillSymbol({
  color: [25,113,51,1],
  outline: {
    cap: "round",
    color: [95,138,86,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  },
  style: "solid"
  })
});

const redNatura2000Fl = new FeatureLayer({
  url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Red_Natura_2000/FeatureServer',
  renderer: redNatura2000Renderer
});

arcgisMap.addEventListener('arcgisViewReadyChange', () => {
  arcgisMap.map.add(redNatura2000Fl)
});
