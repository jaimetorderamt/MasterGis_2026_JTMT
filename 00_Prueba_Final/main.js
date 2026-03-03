// Imports
const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const UniqueValueRenderer = await $arcgis.import("@arcgis/core/renderers/UniqueValueRenderer.js");
const SimpleMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleMarkerSymbol.js");
const PopupTemplate = await $arcgis.import("@arcgis/core/PopupTemplate.js");
const Query = await $arcgis.import("@arcgis/core/rest/support/Query.js");
const GraphicsLayer = await $arcgis.import("@arcgis/core/layers/GraphicsLayer.js");
const Graphic = await $arcgis.import("@arcgis/core/Graphic.js");
const Polyline = await $arcgis.import("@arcgis/core/geometry/Polyline.js");
const SimpleLineSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleLineSymbol.js");
const PictureMarkerSymbol = await $arcgis.import("@arcgis/core/symbols/PictureMarkerSymbol.js");
const SimpleRenderer = await $arcgis.import("@arcgis/core/renderers/SimpleRenderer.js");
const SimpleFillSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleFillSymbol.js");


// Importar el mapa del HTML 
const arcgisMap = document.querySelector('arcgis-map')

// Creamos el renderizador de tipo valores únicos para la capa de hipermercados
const hipermercadosRenderer = new UniqueValueRenderer({
    field: 'ETIQUETA'
});
hipermercadosRenderer.addUniqueValueInfo({
    value: 'Carrefour',
    symbol: new PictureMarkerSymbol({
        angle: 0,
        height: 20,
        url: "https://www.shutterstock.com/image-vector/c-icon-vector-logo-sign-600nw-2242697067.jpg",
        width: 20,
        xoffset: 0,
        yoffset: 0
    })
});
hipermercadosRenderer.addUniqueValueInfo({
    value: 'Alcampo',
    symbol: new PictureMarkerSymbol({
        angle: 0,
        height: 20,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwxE04ROXmWUiuRChBywePAjkQHn--XE2AbA&s",
        width: 20,
        xoffset: 0,
        yoffset: 0
    })
});
hipermercadosRenderer.addUniqueValueInfo({
    value: 'Hipercor',
    symbol: new PictureMarkerSymbol({
        angle: 0,
        height: 20,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOC97Ur7Jf_GEk45ivAm6eazDvMb6yTGtrRw&s",
        width: 20,
        xoffset: 0,
        yoffset: 0
    })
});
hipermercadosRenderer.addUniqueValueInfo({
    value: 'E-Leclerc',
    symbol: new PictureMarkerSymbol({
        angle: 0,
        height: 20,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyxl7plOJ4vJGT5ingLfxr7ZLpVc7P521lpQ&s",
        width: 20,
        xoffset: 0,
        yoffset: 0
    })
});
hipermercadosRenderer.addUniqueValueInfo({
    value: 'Costco',
    symbol: new PictureMarkerSymbol({
        angle: 0,
        height: 20,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrcKiquEgb_apHKgw4ZHeEbzXJ6Do2i1oPQ&s",
        width: 20,
        xoffset: 0,
        yoffset: 0
    })
});

// Añadimos el pop-up para la capa de mercados
const plantillaPopup = new PopupTemplate({
    title: '{BUSCA}',
    content: [
        {
            type: 'fields',
            fieldInfos: [
                {
                    fieldName: 'DIRECCION',
                    label: 'Dirección'
                },
                {
                    fieldName: 'MUNICIPIO',
                    label: 'Municipio'
                }
            ]
        }
    ]
})

// Capa para resultados de búsqueda al hacer click (líneas y puntos)
const capaResultadosClick = new GraphicsLayer({
    title: "Mercados a menos de 2km del punto seleccionado"
});

// Crear el evento general
arcgisMap.addEventListener('arcgisViewReadyChange', (eventoViewReadyChange) => {

    const vistaMapa = arcgisMap.view;
    arcgisMap.map.add(capaResultadosClick);

    // Añadimos la capa de hipermercados (/3)
    const hipermercadosFl = new FeatureLayer({
        url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Comercios_de_la_Comunidad_de_Madrid_WFL1/FeatureServer/3',
        renderer: hipermercadosRenderer,
        title: "Hipermercados",
        effect: "bloom(0.1, 0.2px, 0)"
    })
    // Añadimos la capa de mercados (/5)
    const mercadosFl = new FeatureLayer({
        url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Comercios_de_la_Comunidad_de_Madrid_WFL1/FeatureServer/5',
        title: "Mercados",
        popupTemplate: plantillaPopup
    })

    // Añadimos la capa de mercadillos (/4)
    const mercadillosFl = new FeatureLayer({
        url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/ArcGIS/rest/services/Comercios_de_la_Comunidad_de_Madrid_WFL1/FeatureServer/4'
    })
    // Query sobre la capa de mercadillos
    const peticionQuery = new Query({
        where: "Municipio = 'Madrid'",
        returnGeometry: true,
        outFields: ['*']
    })

    // Promesa
    const resultadoQuery = mercadillosFl.queryFeatures(peticionQuery)

    // La parte de que la petición de la promesa se cumple
    resultadoQuery.then((resultadoFeatureSet) => {

        const entidades = resultadoFeatureSet.features

        // Simbologia 
        const simbologiaPunto = new SimpleMarkerSymbol({
            angle: 0,
            color: [255, 255, 255, 0.25],
            outline: {
                cap: "round",
                color: [250, 75, 0, 1],
                join: "round",
                miterLimit: 1,
                style: "solid",
                width: 1.2
            },
            path: "undefined",
            size: 12,
            style: "circle",
            xoffset: 0,
            yoffset: 0
        })

        // Aplicación de iterador .map 
        const entidadesConSimbologia = entidades.map((grafico) => {
            grafico.symbol = simbologiaPunto
            return grafico
        })

        // Adaptamos la simbologia creada 
        const capaGraficaGL = new GraphicsLayer({
            title: "Mercadillos"
        })
        capaGraficaGL.addMany(entidadesConSimbologia)
        arcgisMap.map.add(capaGraficaGL)
    })

    // Capa límite de la Comunidad de Madrid para centrar la visión del ámbito de estudio
    const limiteCCAA = new FeatureLayer({
        url: "https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/CCAA_wgs1984_wm/FeatureServer",
        title: "Límite de la Comunidad de Madrid",
        definitionExpression: "NAMEUNIT = 'Comunidad de Madrid'",
        renderer: new SimpleRenderer({
            symbol: new SimpleFillSymbol({
                color: [0, 0, 0, 0], 
                outline: {
                    color: [0, 0, 0, 1], 
                    width: 1
                }
            })
        })
    });

    // Añadimos las capas al mapa
    arcgisMap.map.add(limiteCCAA);
    arcgisMap.map.add(hipermercadosFl);
    arcgisMap.map.add(mercadosFl);

    // Funcionalidad app web (parte 6): 
    vistaMapa.on('click', (eventoClick) => {

        const geometriaPunto = eventoClick.mapPoint;
        capaResultadosClick.removeAll();

        // Simbología para la línea que una el click con los mercados
        const simbologiaLinea = new SimpleLineSymbol({
            cap: "round",
            color: [8, 8, 8, 1],
            join: "round",
            marker: {
                color: [241, 9, 9, 1],
                placement: "begin",
                style: "circle",
            },
            miterLimit: 1,
            style: "dash",
            width: 1
        });

        // Query
        const parametrosQuery = new Query({
            geometry: geometriaPunto,
            distance: 2,
            units: "kilometers",
            spatialRelationship: "intersects",
            returnGeometry: true,
            outFields: ["*"]
        });

        // Query sobre la capa de mercados
        mercadosFl.queryFeatures(parametrosQuery).then((resultado) => {
            const mercadosEncontrados = resultado.features;

            mercadosEncontrados.forEach((mercado) => {
                // Crear la línea entre el click y el mercado
                const linea = new Polyline({
                    paths: [
                        [geometriaPunto.x, geometriaPunto.y],
                        [mercado.geometry.x, mercado.geometry.y]
                    ],
                    spatialReference: geometriaPunto.spatialReference
                });

                const graficoLinea = new Graphic({
                    geometry: linea,
                    symbol: simbologiaLinea
                });

                capaResultadosClick.add(graficoLinea);
            });
        });

        // Para centrar la vista en cada click 
        vistaMapa.goTo(geometriaPunto);
    });

})
