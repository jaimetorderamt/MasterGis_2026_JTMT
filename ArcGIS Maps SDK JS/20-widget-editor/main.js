const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const arcgisMap = document.querySelector('arcgis-map');

arcgisMap.addEventListener('arcgisViewReadyChange', (eventoViewReadyChange) => {

const capa = new FeatureLayer({
  url: 'https://services1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Capa_Editable_/FeatureServer'
});

  arcgisMap.map.add(capa)

})