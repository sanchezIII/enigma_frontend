import React, {useState} from 'react'
import '../hojas_de_estilo/LoginForm.css'

function LoginForm() {

    return (
        <>
            <form className='LoguinForm'>
                <p>Nombre de Usuario</p>
                <input type="text" className="field"></input> <br/>

                <p>Contrasenna:</p>
                <input type="password" className="field"></input> <br/>

                <div className="center-content">
                    <input type="submit" className="btn btn-green" value="Enviar Datos"></input>
                </div>
            </form>
        </>
    )
}

export default LoginForm;