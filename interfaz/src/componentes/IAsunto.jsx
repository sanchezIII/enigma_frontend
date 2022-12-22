import React, { useState } from 'react'
import '../hojas_de_estilo/IAsunto.css'

function IAsunto() {

  return (
    <>
      <form action="">
                <p>Nombre</p>
                <input type="text" class="field"></input> <br/>

                <p>Correo electrónico:</p>
	              <input type="text" class="field"></input> <br/>

                <p>Asunto:</p>
	              <input type="text" class="field"></input> <br/>

                <p>Mensaje:</p>
	              <textarea class="field"></textarea> <br/>

                <p class="center-content">
                 <input type="submit" class="btn btn-green" value="Enviar Datos"></input>
                </p>

              </form>
      
    </>
  )
}

export default IAsunto;