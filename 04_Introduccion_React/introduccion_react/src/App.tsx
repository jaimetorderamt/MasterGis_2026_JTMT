
import './App.css'
import AppArcGIS from './components/AppArcGIS/AppArcGIS'
import CardEjemplo from './components/AppArcGIS/CardEjemplo/CardEjemplo'

function App() {

  return (
    <>
      <AppArcGIS titulo={'Experience Builder'} descripcion={'App de Experience Builder'} direccionEnlace={''} enlace={'Enlace'}></AppArcGIS>
      <AppArcGIS titulo={'Story Maps'} descripcion={'App de Story Maps'} direccionEnlace={''} enlace={'Enlace'}></AppArcGIS>
      <CardEjemplo urlImagen={''} titulo={''} descripcion={''} enlace={''}></CardEjemplo>
    </>
  )
}

export default App
