const FeatureLayer = await $arcgis.import("@arcgis/core/layers/FeatureLayer.js");
const arcgisMap = document.querySelector('arcgis-map');
const ClassBreaksRenderer = await $arcgis.import("@arcgis/core/renderers/ClassBreaksRenderer.js");
const SimpleFillSymbol = await $arcgis.import("@arcgis/core/symbols/SimpleFillSymbol.js");


const zonasBasicasSaludRenderer = new ClassBreaksRenderer({
  field: 'F_POBLACION__Población'
  
});
zonasBasicasSaludRenderer.addClassBreakInfo({
  minValue: 0,
  maxValue: 10000,
  symbol: new SimpleFillSymbol({
  color: [2,214,242,1],
  outline: {
    cap: "round",
    color: [0,122,194,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  },
  style: "solid"
})

// En lugar de hacer de esta forma la simbologia, tb se puede hacer asi con autocasting: (al haber quitado el symbol builder)
// symbol: {
//   type: 'simple-fill', 
//   color: 'red'
// }

});
zonasBasicasSaludRenderer.addClassBreakInfo({
  minValue: 10000,
  maxValue: 30000,
  symbol: new SimpleFillSymbol({
  color: [2,50,242,1],
  outline: {
    cap: "round",
    color: [0,122,194,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  },
  style: "solid"
})
});

zonasBasicasSaludRenderer.addClassBreakInfo({
  minValue: 30000,
  maxValue: 990000000, 
  symbol: new SimpleFillSymbol({
  color: [142,38,156,1],
  outline: {
    cap: "round",
    color: [0,122,194,1],
    join: "round",
    miterLimit: 1,
    style: "solid",
    width: 1
  },
  style: "solid"
})
});

const zonasBasicasSaludFl = new FeatureLayer({
  url: 'https://services1.arcgis.com/nCKYwcSONQTkPA4K/arcgis/rest/services/ZONAS_BASICAS_SALUD_MADRID/FeatureServer/0',
  renderer: zonasBasicasSaludRenderer
});

arcgisMap.addEventListener('arcgisViewReadyChange', () => {
  arcgisMap.map.add(zonasBasicasSaludFl)
});
