import React, {useState} from 'react'
import '../hojas_de_estilo/IAsunto.css'

function IAsunto({obsTypes}) {

    return (
        <>
            <form action="" className='formAsunto'>
                <h2 className="form-header">
                    Introducir un Asunto:
                </h2>
                <div className="form-row">
                    <div className="horizontal-panel">
                        <div className="tag-input-pair">
                            <label className='etiquetasAsunto'>Nombre</label>
                            <input type="text" className="field"></input>
                        </div>

                        <div className="tag-input-pair">
                            <label className='etiquetasAsunto'>Autor:</label>
                            <input type="text" className="field"></input>
                        </div>
                    </div>

                    <div className="horizontal-panel">
                        <div className="tag-input-pair">
                            <label className='etiquetasAsunto'>Nombre de la Base de Datos:</label>
                            <input type="text" className="field"></input>
                        </div>

                        <div className="tag-input-pair">
                            <label className='etiquetasAsunto'>Tipo de Observacion:</label>
                            <select
                                className="field">

                                {obsTypes.map((obsType) => <option value={obsType}>{obsType}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-row description-input-container">
                    <div className="tag-input-pair">
                        <label className='etiquetasAsunto'>Descripcion:</label>
                        <textarea className="description-input"></textarea>
                    </div>
                </div>

                <div className="form-row">
                    <div className="center-content">
                        <input type="submit" className="btn btn-green" value="Enviar Datos"></input>
                    </div>
                </div>
            </form>

        </>
    )
}

export default IAsunto;