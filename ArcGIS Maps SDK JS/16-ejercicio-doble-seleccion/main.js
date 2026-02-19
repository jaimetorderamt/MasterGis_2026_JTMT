// 1. Importar librerias según necesidad del ejercicio 
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const Query = await $arcgis.import("@arcgis/core/rest/support/Query.js");
const PictureMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/PictureMarkerSymbol.js");
const GraphicsLayer = await $arcgis.import("@arcgis/core/layers/GraphicsLayer.js");


// 2. Llamar al mapa 
const arcgisMap = document.querySelector('arcgis-map')

// 3. Crear las capas a partir de las url

arcgisMap.addEventListener('arcgisViewReadyChange', (eventoViewReadyChange) => {


    const paises = new FeatureLayer({
        url: 'https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Countries/FeatureServer/0'
    })
    const incendios = new FeatureLayer({
        url: 'https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/MODIS_Thermal_v1/FeatureServer/1'
    })

// Esta capa la hemos hecho al final, pero la ponemos aqui para que este fuera del bucle 
const capaIncendiosGL =new GraphicsLayer({
    title: 'Incendios'
})
const simbologiaIncendio = new PictureMarkerSymbol({
  angle: 0,
  height: 100,
  url: "https://sagewall.github.io/test-images/globie.png",
  width: 100,
  xoffset: 0,
  yoffset: 0
});
 

    // 4 Hacer query para filtrar España
    const peticionQuery1 = new Query({
        where: "ISO_CC = 'ESP'",
        returnGeometry: true,
    })

    // Promesa:
    const resultadoQuery1 = paises.queryFeatures(peticionQuery1)

    // La parte de que la petición de la promesa se cumple:

    resultadoQuery1.then((resultadoFeatureSet) => {

        const poligonosEspana = resultadoFeatureSet.features
        // Bucle: 
        poligonosEspana.map((poligono) => {

            // Para guardar la geometria (una vez por cada poligono)
            const geometriaPoligono = poligono.geometry
            // 5 Hacer 2ª query para filtrar los incendios en España (la hacemos aqui dentro porque aqui esta la geometria)

            const peticionQuery2 = new Query({
                geometry: geometriaPoligono,
                returnGeometry: true,
                spatialRelationship: 'intersects'
            })

            const resultadoQuery2 = incendios.queryFeatures(peticionQuery2)

            resultadoQuery2.then((resultadoFeatureSetIncendios) => {
                const incendios = resultadoFeatureSetIncendios.features

              const incendiosConSimbologia = incendios.map((incendioGrafico)=>{
                    incendioGrafico.symbol = simbologiaIncendio
                    return incendioGrafico
                })

                capaIncendiosGL.addMany (incendiosConSimbologia)
            })

        })

        arcgisMap.map.add(capaIncendiosGL)
    })




})