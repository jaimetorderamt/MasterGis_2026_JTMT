import './AppArcGIS.css'

interface AppArcGISProps {
    titulo: string 
    descripcion: string 
    enlace: string 
    direccionEnlace: string
}

// Para hacer una plantilla de este componente
function AppArcGIS(props:AppArcGISProps) {
  return (
    <div className='aplicacion-arcgis'>
      <img src="https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS_Experience_Builder_220.png" alt="Logo"></img>
      <div className='texto-aplicacion'>
        <h1>{props.titulo}</h1>
        <p>{props.descripcion}</p>
        <a href={props.direccionEnlace}>{props.enlace}</a>
      </div>
    </div>
  )
}

// Para exportarlo y poder usarlo desde fuera
export default AppArcGIS