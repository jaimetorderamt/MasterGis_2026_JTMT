const ImageryTileLayer = await $arcgis.import("@arcgis/core/layers/ImageryTileLayer.js");

const ndviRasterFunction = {
  functionName: "NDVI",
  functionArguments: {
  VisibleBandID: 3,
  InfraredBandID: 7,
  ScientificOutput: false,
  },
};

const colormapRasterFunction = {
  functionName: "Colormap",
  functionArguments: {
    colormapName: "NDVI3",
    raster: ndviRasterFunction
  },
};
// Crear la capa
const bandasITL = new ImageryTileLayer({
  url: 'https://tiledimageservices1.arcgis.com/MPSkeshhtFz9vjCL/arcgis/rest/services/Imagen_Incendio_Canarias___Sentinel_2/ImageServer',
  effect: 'contrast(100%)',
  rasterFunction: colormapRasterFunction
})

// Añadir el mapa
const arcgisMap = document.querySelector('arcgis-map');
// Añadir la capa al mapa
arcgisMap.addEventListener('arcgisViewReadyChange', () => {
  arcgisMap.map.add(bandasITL)
});