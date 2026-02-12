// Importamos las librerias 

// Map - https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html (cogemos el CDN)

// MapView - https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html (cogemos el CDN)

// FeatureLayer - (cogemos el CDN)

const Map = await $arcgis.import("@arcgis/core/Map.js");
const MapView = await $arcgis.import("@arcgis/core/views/MapView.js");
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");

// Poner las llaves ya indica que es un objeto 
const mapa = new Map ({
    basemap:'topo-vector'
})

// Creo la vista
const vistaMapa = new MapView ({
    container: 'viewDiv',
    map: mapa
})

// Creo la capa
const hospitalesFl = new FeatureLayer({
url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer",
      });

// Añadir la capa al mapa
mapa.add(hospitalesFl)
