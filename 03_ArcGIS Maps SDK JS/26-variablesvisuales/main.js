const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const SimpleRenderer = await $arcgis.import("@arcgis/core/renderers/SimpleRenderer.js");
const SizeVariable = await $arcgis.import("@arcgis/core/renderers/visualVariables/SizeVariable.js");
const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");

const poblacionRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    color: [0, 120, 255, 0.5],
    outline: {
      color: [255, 255, 255, 0.7],
      width: 1
    }
  }),
  visualVariables: [
    new SizeVariable({
      field: "Poblacion",
      minDataValue: 63000,
      maxDataValue: 9000000,
      minSize: 8,
      maxSize: 60,
    })
  ]
});

const poblacionFl = new FeatureLayer({
  url: 'https://services1.arcgis.com/YFraetVkEAF1lMag/arcgis/rest/services/Nivel_estudios_y_poblaci%C3%B3n_por_CCAA_2021/FeatureServer/1',
  renderer: poblacionRenderer
});

const arcgisMap = document.querySelector('arcgis-map');

arcgisMap.addEventListener('arcgisViewReadyChange', () => {
  arcgisMap.map.add(poblacionFl)
});

