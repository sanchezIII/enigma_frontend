import React, { useState } from 'react'
import '../hojas_de_estilo/fonts.css'
import '../hojas_de_estilo/descriptionAPI.css'

function DescripcionAPI() {

  return (
    <div className = 'container-description'>
        
        <h2 className='texto_d'>
           Descripción de la API
        </h2>

        <p className='texto_d'>
               Para establecer una forma única en la que los datos son introducidos a la
            plataforma, se ha implementado una API a la que se puede publicar información y a través de la cual se pueden obtener datos acerca de los flujos. Toda la
            información está en formato JSON.
        </p>

    </div>
  )
}

export default DescripcionAPI;