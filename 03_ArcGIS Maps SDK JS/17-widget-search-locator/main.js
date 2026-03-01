// Importar librerias
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const search = document.querySelector("arcgis-search");
await search.componentOnReady();

// Importamos directamente el mapa de esta forma: 
const arcgisMap = document.querySelector('arcgis-map')

// Ahora creamos el evento (capacidad al objeto de que me diga cosas)
arcgisMap.addEventListener('arcgisViewReadyChange', (eventoViewReadyChange) => {

  // Este evento se ejecuta cuando se carga la vista del mapa

  // Creamos la capa (ya en memoria)
  const hospitalesFl = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer'
  })

  // Añadimos la capa al mapa
  arcgisMap.map.add(hospitalesFl)

  // Configuramos el buscador para que use la capa de hospitales
  search.sources = [
    {
      layer: hospitalesFl,
      searchFields: ['Nombre'],
      displayField: 'Nombre',
      exactMatch: false,
      outFields: ["*"],
      suggestionTemplate: '{Nombre}, {Municipio}',
      name: "Hospitales de España",
      placeholder: "Buscar hospital...",
    }
  ];
})
