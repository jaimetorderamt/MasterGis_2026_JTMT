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
    spatialReference: { wkid: 4326 }
})

// Simbologia
const simbologiaPoligono = new SimpleFillSymbol({
    color: [191, 0, 194, 0.5],
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

// Simbologia para los hospitales encontrados
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
    size: 14,
    style: "x"
});

// Geometria + Simbologia
const graficoPoligono = new Graphic({
    geometry: geometriaPoligono,
    symbol: simbologiaPoligono
})

// Crear capa gráfica para el polígono
const capaGraficaPoligono = new GraphicsLayer()
capaGraficaPoligono.add(graficoPoligono)

// 5 Preparar la query
const peticionHospitales = new Query({
    geometry: geometriaPoligono,
    returnGeometry: true,
    outFields: ['*'],
    spatialRelationship: 'intersects'
})

// 7 Añadir la capa al mapa e inciar lógica

arcgisMap.addEventListener('arcgisViewReadyChange', () => {

    // Añadimos la capa base de hospitales (opcional, pero la pusiste)
    arcgisMap.map.add(hospitalesFl)

    // Añadir capa del polígono
    arcgisMap.map.add(capaGraficaPoligono);

    // Ejecutar la consulta
    const consultaHospitales = hospitalesFl.queryFeatures(peticionHospitales);

    consultaHospitales.then((resultadosFeatureSet) => {
        const entidades = resultadosFeatureSet.features;

        // Aplicar simbología a los resultados encontrados
        const entidadesConSimbologia = entidades.map((entidadGrafico) => {
            entidadGrafico.symbol = simbologiaPunto;
            return entidadGrafico;
        });

        // Crear y añadir capa con los resultados
        const capaGraficaResultado = new GraphicsLayer({
            title: 'HospitalesEncontrados'
        });

        capaGraficaResultado.addMany(entidadesConSimbologia);
        arcgisMap.map.add(capaGraficaResultado);
    });
});
