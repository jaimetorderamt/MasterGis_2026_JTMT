const ImageryTileLayer = await $arcgis.import("@arcgis/core/layers/ImageryTileLayer.js");


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

const arcgisSwipe = document.querySelector("arcgis-swipe");
const viewElement = document.querySelector("arcgis-map");

function addLayersToMap() {
  viewElement.map?.addMany([bandasITL1, bandasITL2]);
  arcgisSwipe.startLayers.add(bandasITL1);
  arcgisSwipe.endLayers.add(bandasITL2);
}
if (viewElement.ready) {
  addLayersToMap();
}
await viewElement.viewOnReady();
addLayersToMap();

// Funcionalidad del botón: 
const botonCalcite = document.querySelector('calcite-button')

let estadoBoton = 'geo'

botonCalcite.addEventListener('click', ()=>{
    if (bandasITL2. bandIds == [11, 10, 1]){
        bandasITL2. bandIds == [10, 17, 1]
        botonCalcite.innerHTML = 'Geológico'

    } else {

    }

})

// const arcgisMap = document.querySelector('arcgis-map');

// arcgisMap.addEventListener('arcgisViewReadyChange', () => {
// arcgisMap.map.addMany(bandasITL1, bandasITL2)
// arcgisSwipe.startLayers.add(bandasITL1)
// arcgisSwipe.endLayers.add(bandasITL2)
// });