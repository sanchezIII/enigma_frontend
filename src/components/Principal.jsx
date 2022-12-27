import IoT from '../imagenes/IoT.png'
import IoTusuario from '../imagenes/IoTusuario.png'
import diagrama from '../imagenes/diagrama.png'
import '../hojas_de_estilo/Principal.css'

function Principal() {

  return (
    <div className = 'container-principal'>

        
        <div className='container-IoT'>
          <img src = {IoT} alt = "foto-IoT" className = "foto-IoT"></img>

          <p>Desde el punto de vista técnico, el internet de las cosas es un conjunto y
          un ecosistema de artefactos, que puede ser visto como “una manera innovado-
          ra de alcanzar una mayor productividad al conectar dispositivos”. Pero desde una
          perspectiva sociotecnológica, se reconoce también el papel de las entidades
          que interactuan con el IoT. Se define a este como un sistema sociotecnológico que comprende la actividad humana, los espacios, las herramientas y las
          tecnologı́as </p>
        </div>
        
        <img src = {IoTusuario} alt = "foto-IoT" className = "foto-IoTusuario"></img>

        <img src = {diagrama} alt = "foto-IoT" className = "foto-IoTusuario"></img>

    </div>
  )
}

export default Principal;