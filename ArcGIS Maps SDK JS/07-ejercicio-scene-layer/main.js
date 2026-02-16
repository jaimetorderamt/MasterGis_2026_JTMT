// Importar la escena
const arcgisScene = document.querySelector('arcgis-scene')

// Importar la clase
const SceneLayer = await $arcgis.import("@arcgis/core/layers/SceneLayer.js");

// Importar libreria de nieve
const SnowyWeather = await $arcgis.import("@arcgis/core/views/3d/environment/SnowyWeather.js");

// Añadir el evento
arcgisScene.addEventListener('arcgisViewReadyChange', (eventoViewReadyChange) => {

    // Crear la capa 
    const edificios = new SceneLayer({
        portalItem: { id: 'c444b24b184c4523a5dc96248bfea4e1' }
    })

    // Añadir la capa al mapa
    arcgisScene.map.add(edificios)

    // Para hacer que nieve al cargar la escena 
    arcgisScene.view.environment.weather = new SnowyWeather


})

// Seleccionar boton 
const boton = document.querySelector('#boton')

// Añadir evento (click)
boton.addEventListener('click', () => {

    // Función del evento... Mover a otro sitio
    arcgisScene.view.goTo({
        center: [-126, 49]
    })

// Hacer que nieve


})
