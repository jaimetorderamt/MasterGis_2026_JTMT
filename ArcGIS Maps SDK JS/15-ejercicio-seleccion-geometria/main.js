// 1 Importar librerias (según vayamos viendo la necesidad)
const Polygon = await $arcgis.import("@arcgis/core/geometry/Polygon.js");
const SimpleFillSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleFillSymbol.js");
const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
const GraphicsLayer = await $arcgis.import("@arcgis/core/layers/GraphicsLayer.js");
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const Query = await $arcgis.import("@arcgis/core/rest/support/Query.js");
const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");

// 2 Llamar al mapa
const arcgisMap = document.querySelector('arcgis-map')

// 3 Crear capa hospitales 
const hospitalesFl = new FeatureLayer({
    url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Hospitales/FeatureServer/0'
})

// arcgisMap.map.add(hospitalesFl)

// 4 Crear el polígono 
// Geometria
const geometriaPoligono = new Polygon({
    rings: [
        [
            [-4.82, 40.56],
            [-4.82, 41.65],
            [-3.13, 41.65],
            [-3.13, 40.56],
        ],
    ],
})

// Simbologia
const simbologiaPoligono = new SimpleFillSymbol({
    color: [191, 0, 194, 1],
    outline: {
        cap: "round",
        color: [0, 122, 194, 1],
        join: "round",
        miterLimit: 1,
        style: "long-dash",
        width: 1
    },
    style: 'solid'
});

// Esto es una simbologia de punto creada a posteriori para la capa de hospitales
const simbologiaPunto = new SimpleMarkerSymbol({
    angle: 180,
    color: [0, 194, 39, 1],
    outline: {
        cap: "round",
        color: [194, 0, 48, 1],
        join: "round",
        miterLimit: 1,
        style: "dash",
        width: 1
    },
    path: "undefined",
    size: 14,
    style: "x",
    xoffset: 0,
    yoffset: 0
});

// Geometria + Simbologia
const graficoPoligono = new Graphic({
    geometry: geometriaPoligono,
    symbol: simbologiaPoligono
})

// Crear capa gráfica
const capaGraficaPoligono = new GraphicsLayer()
capaGraficaPoligono.add(graficoPoligono)


// 5 Hacer la query (crearla)

const peticionHospitales = new Query({
    geometry: geometriaPoligono,
    returnGeometry: true,
    outFields: ['*'],
    spatialRelationship: 'intersects'
})

// 5.1 Mandar la query

// 7 Añadir la capa al mapa

arcgisMap.addEventListener('arcgisViewReadyChange', () => {
    arcgisMap.map.add(capaGraficaPoligono)

    const resultadoQueryHospitales = hospitalesFl.queryFeatures(peticionHospitales)

    resultadoQuery.then((resultadosFeatureSet) => {

        const entidades = resultadosFeatureSet.features

        // Esto genera un array con todo lo que recoge de la capa. ahora hay que aplicar un iterador .map, for of, while, for each... 

        const entidadesConSimbologia = entidades.map((entidadGrafico) => {
            entidadGrafico.symbol = simbologiaPunto
            return entidadGrafico
        })

        const capaGraficaResultado = new GraphicsLayer({
            graphics: [entidadesConSimbologia],
            title: 'HospitalesConCruz'
        })

        capaGraficaResultado.addMany(entidadesConSimbologia)

        arcgisMap.map.add(capaGraficaResultado)

    })

})
