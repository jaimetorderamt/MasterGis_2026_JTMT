
import './App.css'
import AppArcGIS from './components/AppArcGIS/AppArcGIS'

function App() {

  return (
    <>
      <h1>Hola mundo</h1>
      <AppArcGIS titulo={'Experience Builder'} descripcion={'App de Experience Builder'} enlace={undefined}></AppArcGIS>
      <AppArcGIS titulo={'Story Maps'} descripcion={'App de Story Maps'} enlace={undefined}></AppArcGIS>
    </>
  )
}

export default App
