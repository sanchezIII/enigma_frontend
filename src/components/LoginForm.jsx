import React, {useState} from 'react'
import '../hojas_de_estilo/LoginForm.css'

function LoginForm() {

    return (
        <>
            <form className='LoguinForm'>
                <p>Nombre de Usuario</p>
                <input type="text" className="FieldLogin"></input> <br/>

                <p>Contrasenna:</p>
                <input type="password" className="FieldLogin"></input> <br/>

                <div className="center-content">
                    <input type="submit" className="btn btn-green" value="Enviar Datos"></input>
                </div>
            </form>
        </>
    )
}

export default LoginForm;