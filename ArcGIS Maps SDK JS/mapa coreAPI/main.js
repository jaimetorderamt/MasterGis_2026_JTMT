// Importamos las librerias 

// Map - https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html (cogemos el CDN)

// MapView - https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html (cogemos el CDN)

const Map = await $arcgis.import("@arcgis/core/Map.js");
const MapView = await $arcgis.import("@arcgis/core/views/MapView.js");

// Poner las llaves ya indica que es un objeto 
const miMapa = new Map ({
    basemap:'topo-vector'
})

const vistaMapa = new MapView ({
    container: 'viewDiv',
    map: miMapa
})