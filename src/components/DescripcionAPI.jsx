import React, { useState } from 'react'
import '../hojas_de_estilo/fonts.css'
import '../hojas_de_estilo/descriptionAPI.css'
import ga from '../imagenes/ga.jpg'
import gsen from '../imagenes/ga.jpg'
import gs from '../imagenes/gs.jpg'
import go from '../imagenes/go.jpg'
import so from '../imagenes/so.jpg'

function DescripcionAPI() {

  return (
    <div className = 'container-description'>
        
        <h2 className='texto_d'>
           Descripción de la API
        </h2>

        <p className='texto_d'>
               Para establecer una forma única en la que los datos son introducidos a la
            plataforma, se ha implementado una API a la que se puede publicar información y a través de la cual se pueden obtener datos 
            acerca de los flujos. Toda la información está en formato JSON.
        </p>

        <p className='texto_d'>
                  Las respuestas a las solicitudes contienen la propiedad status. Si la solicitud fue procesada con éxito, status es igual a OK y el objeto contiene una propiedad llamada data, la cual contiene la respuesta. En caso contrario, status
          será igual a FAIL y el objeto contendrá una propiedad llamada cause, que es un
          mensaje con la causa del fallo en la petición.
        </p>

        <p className='texto_d'>
            A continuación se describen algunos de los métodos POST:
        </p>

        <ul className='lista_d'> 
            <li> <span> /api/addtopic </span> Agrega un asunto al sistema. El asunto debe seguir un
            formato como el que se aprecia en la figura 15. Si la solicitud es exitosa, el
            método devuelve como respuesta el objeto recibido.</li>

            <img src = {ga} alt = "gato" class = "bordes-redondeados"></img>

            <li> <span> /api/addsensor </span> Agrega un sensor al sistema. El sensor debe seguir un
                formato como el que se aprecia en la figura 16. Si el identificador del asunto especificado en el sensor no pertenece a un asunto en el sistema, 
                la solicitud falla. Si la solicitud es exitosa, el método devuelve como respuesta
                el objeto recibido.</li>
            
            <img src = {gsen} alt = "gato" class = "bordes-redondeados"></img>

            <li> <span> /api/addstream </span> Agrega un stream al sistema. El stream debe seguir un
            formato como el que se aprecia en la figura 17. Si la solicitud es exitosa, el método devuelve como respuesta el objeto recibido.</li>
           
            <img src = {gs} alt = "gato" class = "bordes-redondeados"></img>

            <li> <span> /api/addobservation </span> Agrega una observación al sistema. La observación debe seguir un formato como el que se aprecia en la figura 18. 
              Si la solicitud es exitosa, el método devuelve como respuesta el objeto recibido.</li>

            <img src = {go} alt = "gato" class = "bordes-redondeados"></img>


        </ul>

        <p className='texto_d'>A continuación se describen algunos de los métodos GET:</p>

        <ul className='lista_d'>
          <li> <span> /api/topicSensors/topicId </span> Devuelve todos los sensores que pertenecen a un asunto cuyo identificador es topicId. 
          Un ejemplo de la solucitud se muestra en la figura 19.</li>
          <img src = {so} alt = "gato" class = "bordes-redondeados"></img>
        </ul>

        

        <p className='texto_d'>A medida que se implementen los demás componentes de la plataforma,
        deben agregarse más endpoints a la API. Por ejemplo, para pedir desplegar servicios de analı́ticas y 
        para iniciar la comunicación con el bróker de mensajerı́a.</p>

    </div>
  )
}

export default DescripcionAPI;