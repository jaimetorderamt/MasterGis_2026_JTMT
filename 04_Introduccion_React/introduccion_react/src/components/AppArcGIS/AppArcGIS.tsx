import { useState } from 'react'
import './AppArcGIS.css'
import CardEjemplo from './CardEjemplo/CardEjemplo'

interface AppArcGISProps {
  titulo: 'Experience Builder' | 'Story Maps'
  descripcion: string
  enlace: string
  direccionEnlace: string
}

// Para hacer una plantilla de este componente
function AppArcGIS(props: AppArcGISProps) {

  // Funciones de estado
  let [estadoBoton, setEstadoBoton] = useState(false)

  let ejemplosRenderizados

  // Aqui añadimos el condicional: (antes del renderizador)
  if (props.titulo === 'Experience Builder' && estadoBoton) {
    ejemplosRenderizados =
      <><CardEjemplo urlImagen={''} titulo={'EB 1'} descripcion={'Descripción'} enlace={''}></CardEjemplo><CardEjemplo urlImagen={''} titulo={'EB2'} descripcion={'Descripción'} enlace={''}></CardEjemplo><CardEjemplo urlImagen={''} titulo={'EB3'} descripcion={'Descripción'} enlace={''}></CardEjemplo></>
  }
  if (props.titulo === 'Story Maps' && estadoBoton) {
    ejemplosRenderizados =
      <><CardEjemplo urlImagen={''} titulo={'SM1'} descripcion={'Descripción'} enlace={''}></CardEjemplo><CardEjemplo urlImagen={''} titulo={'SM2'} descripcion={'Descripción'} enlace={''}></CardEjemplo><CardEjemplo urlImagen={''} titulo={'SM3'} descripcion={'Descripción'} enlace={''}></CardEjemplo></>
  }

  function buttonHandler(eventoClick: any) {
    if (estadoBoton) {
      setEstadoBoton(false)
    }
    if (estadoBoton == false) {
      setEstadoBoton(true)
    }
  }
  // la ! es para que haga lo contrario de lo puesto (de true a false)
  // estadoBoton = !estadoBoton


  // Para de renderizacion del componente: 
  return (
    <div className='aplicacion-arcgis'>
      <div className='informacion-aplicacion'>
        <img src="https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS_Experience_Builder_220.png" alt="Logo"></img>
        <div className='texto-aplicacion'>
          <h1>{props.titulo}</h1>
          <p>{props.descripcion}</p>
          <a href={props.direccionEnlace}>{props.enlace}</a>
          <button onClick={buttonHandler}>Ver ejemplos</button>
        </div>
      </div>
      <div className='ejemplos-aplicacion'>
        {ejemplosRenderizados}
        {/* Moveremos esto a dentro del condicional */}
        {/* <CardEjemplo urlImagen={''} titulo={'Ejemplo1'} descripcion={''} enlace={''}></CardEjemplo>
        <CardEjemplo urlImagen={''} titulo={'Ejemplo2'} descripcion={''} enlace={''}></CardEjemplo>
        <CardEjemplo urlImagen={''} titulo={'Ejemplo3'} descripcion={''} enlace={''}></CardEjemplo> */}

      </div>
    </div>
  )
}

// Para exportarlo y poder usarlo desde fuera
export default AppArcGIS