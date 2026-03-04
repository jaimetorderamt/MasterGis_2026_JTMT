import './CardEjemplo.css'
// Para importar imagenes de la carpeta de public
// import Imagen from '../../../../public/vite.svg'

interface CardEjemploProps{
    urlImagen: string 
    titulo: string 
    descripcion: string 
    enlace: string 
}

function CardEjemplo(props: CardEjemploProps){
    return (
        <div className='cardEjemplo'>
            <img src={props.urlImagen} alt='Imagen de ejemplo' />
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
            <a href=''>{props.enlace}</a>
        </div>
    )
}

export default CardEjemplo