// Importar librerias
const GraphicsLayer = await $arcgis.import('@arcgis/core/layers/GraphicsLayer.js');
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");

const sketch = document.querySelector('arcgis-sketch');
const arcgisMap = document.querySelector('arcgis-map');

const hospitalesFl = new FeatureLayer({
  url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer'
});

const capaGraficaResultados = new GraphicsLayer()

arcgisMap.addEventListener('arcgisViewReadyChange', () => {
  arcgisMap.map.add(capaGraficaResultados);
});

// Esperamos a que el componente esté listo para configurar sus propiedades
await sketch.componentOnReady();

// Definimos qué herramientas de creación están DISPONIBLES (solo punto)
sketch.availableCreateTools = ["point"];


sketch.addEventListener('arcgisCreate', async (customEvent) => {
  if (customEvent.detail.tool === 'point' && customEvent.detail.state === 'complete') {
    const geometriaPunto = customEvent.detail.graphic.geometry;

    // Realizamos la consulta espacial
    const query = hospitalesFl.createQuery();
    query.geometry = geometriaPunto;
    query.distance = 10;
    query.units = "kilometers";
    query.spatialRelationship = "intersects";
    query.outFields = ["*"];
    query.returnGeometry = true;

    try {
      // Promesa
      const results = await hospitalesFl.queryFeatures(query);
      console.log("Hospitales encontrados:", results.features.length);

      // Limpiamos resultados anteriores
      capaGraficaResultados.removeAll();

      // Añadimos los hospitales encontrados a la capa de resultados
      results.features.forEach(feature => {
        feature.symbol = {
          type: "simple-marker",
          color: "red",
          size: "8px",
          outline: {
            color: "white",
            width: 1
          }
        };
        capaGraficaResultados.add(feature);
      });
    } catch (error) {
      console.error("Error en la consulta:", error);
    }
  }
});

