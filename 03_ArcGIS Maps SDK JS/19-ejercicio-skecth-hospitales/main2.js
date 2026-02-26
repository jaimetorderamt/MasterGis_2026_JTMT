const sketch = document.querySelector('arcgis-sketch');
const GraphicsLayer = await $arcgis.import('@arcgis/core/layers/GraphicsLayer.js');
const arcgisMap = document.querySelector('arcgis-map');
 
const capaGraficaResultados = new GraphicsLayer()
 
sketch.addEventListener('arcgisReady', () => {
  sketch.layer = capaGraficaResultados
})
 
sketch.addEventListener('arcgisCreate', (customEvent) => {
  if (customEvent.detail.tool === 'polyline') {

  }
})
 