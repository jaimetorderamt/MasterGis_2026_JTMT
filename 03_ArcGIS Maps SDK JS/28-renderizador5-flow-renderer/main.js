const ImageryTileLayer = await $arcgis.import("@arcgis/core/layers/ImageryTileLayer.js");
const FlowRenderer = await $arcgis.import("@arcgis/core/renderers/FlowRenderer.js");

// Creamos la cosntante antes que la capa para que asi pueda aparecer 
const vientoRenderer = new FlowRenderer({
    flowSpeed: 35,
    trailWidth: '1px',
    trailLength: 250,
    density: 2,
    // Variables visuales son siempre un array
    visualVariables: [
        {
            type: 'color',
            field: 'Magnitude',
            stops: [
                { value: 0, color: 'darkblue' },
                { value: 6, color: 'orange' },
                { value: 25, color: 'red' }
            ]
        }
    ]

})

const vientoITL = new ImageryTileLayer({
    url: 'https://tiledimageservices.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/NLDAS_Hourly_8_30_2021/ImageServer',
    renderer: vientoRenderer,
    // Añadimos aqui los efectos porque es una propiedad de la capa: 
    effect: 'bloom (1.5, 0.5 px, 0)'
})

const arcgisMap = document.querySelector('arcgis-map');

arcgisMap.addEventListener('arcgisViewReadyChange', () => {
    arcgisMap.map.add(vientoITL)
});
