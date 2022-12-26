import React, { useState } from 'react'
import '../hojas_de_estilo/fonts.css'
import '../hojas_de_estilo/descriptionAPI.css'

function UsarPlataforma() {

  return (
    <div className = 'container-description'>
        
        <h2 className='texto_d'>
            Primeros pasos para el uso de la plataforma
        </h2>

        <p className='texto_d'>
              Para adaptar la plataforma a un caso de uso especifico, comenzamos por
            crear un asunto en el cual se define el tipo de datos de los resultados de las
            observaciones. Esto se logra mediante una petición a la API de la plataforma, o
            mediante una página web desarrollada como elemento consumidor.
        </p>

        <p className='texto_d'>
          Se sugiere programar un script o programa auxiliar que obtenga los datos
        de la fuente, los procese, los convierta al formato JSON requerido por la plata-
        forma y luego los publique a la API. En el repositorio de github del proyecto
        13 , se encuentra el script, escrito en Python, utilizado para obtener datos de los
        sensores de tráfico de la ciudad de Bruselas, usados por el sistema Traffic.
        </p>

        <p className='texto_d'>
            Este script debe primero procesar los datos de los sensores y streams, y luego
         hacer peticiones periódicas a la fuente para obtener las observaciones.
        </p>

        <p className='texto_d'>
             Una vez que los datos son publicados periódicamente a la plataforma, en dependencia de las necesidades del caso especı́fico, se puede programar un
            servicio de analı́ticas externo que se comunique con la plataforma a través de
            la API y que pueda entre otras cosas, publicar a esta los eventos que ocurran
            en los flujos de datos.</p>

    </div>
  )
}

export default UsarPlataforma;