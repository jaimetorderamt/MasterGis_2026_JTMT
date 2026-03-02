const ImageryTileLayer = await $arcgis.import("@arcgis/core/layers/ImageryTileLayer.js");

const arcgisMap = document.querySelector('arcgis-map');
const arcgisSwipe = document.querySelector("arcgis-swipe");
const viewElement = document.querySelector("arcgis-map");


const bandasITL1 = new ImageryTileLayer({
  url: 'https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer',
  bandIds: [3, 2, 0],
  effect: 'brightness(5) contrast(200%)'
})

const bandasITL2 = new ImageryTileLayer({
  url: 'https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer',
  bandIds: [11, 10, 1],
  effect: 'brightness(5) contrast(200%)'
})

// Forma 1 de hacerlo: 
arcgisMap.addEventListener('arcgisViewReadyChange', () => {
arcgisMap.map.addMany([bandasITL1, bandasITL2])
arcgisSwipe.startLayers.add(bandasITL1)
arcgisSwipe.endLayers.add(bandasITL2)
});

// Forma 2 de hacerlo: 
// function addLayersToMap() {
//   viewElement.map?.addMany([bandasITL1, bandasITL2]);
//   arcgisSwipe.startLayers.add(bandasITL1);
//   arcgisSwipe.endLayers.add(bandasITL2);
// }
// if (viewElement.ready) {
//   addLayersToMap();
// }
// await viewElement.viewOnReady();
// addLayersToMap();


// Funcionalidad del botón: 
const botonCalcite = document.querySelector('calcite-button')

let estadoBoton = 'geo'

botonCalcite.addEventListener('click', () => {

  if (estadoBoton === 'geo') {
    bandasITL1.bandIds = [10, 7, 1]
    botonCalcite.innerHTML = 'Geológico'
    estadoBoton = 'agro'
  } else {
    bandasITL1.bandIds = [11, 10, 1]
    botonCalcite.innerHTML = 'Agricultura'
    estadoBoton = 'geo'
  }
})


