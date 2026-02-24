const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const arcgisMap = document.querySelector('arcgis-map');
const PopupTemplate = await $arcgis.import("@arcgis/core/PopupTemplate.js");

const plantillaPopup = new PopupTemplate({
    title: '{Nombre}', 
    content: [
        {
            type: 'fields',
            fieldInfos: [
                {
                    fieldName: 'Direccion',
                    label: 'Dirección'
                },
                {
                    fieldName: 'Telefono',
                    label: 'Teléfono'
                },
                {
                    fieldName: 'NCAMAS',
                    label: 'Número de camas'
                }
            ]

        }
    ]
})

const hospitalesFl = new FeatureLayer({
  url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/Hospitales/FeatureServer/0',
  popupTemplate: plantillaPopup
});

arcgisMap.addEventListener('arcgisViewReadyChange', () => {
  arcgisMap.map.add(hospitalesFl)
});
