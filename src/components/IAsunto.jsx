import React, {useRef, useState} from 'react'
import '../hojas_de_estilo/IAsunto.css'

function IAsunto({obsTypes}) {
    const nameRef = useRef(null);
    const dbNameRef = useRef(null);
    const descRef = useRef(null);
    const authorRef = useRef(null);
    const typeRef = useRef(null);

    const [type, setType] = useState(obsTypes[0]);

    function postTopic() {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: nameRef.current.value,
                author: authorRef.current.value,
                description: descRef.current.value,
                databaseName: dbNameRef.current.value,
                observationDataClassName: type
            })
        };

        clearFrom();

        fetch('/api/postTopic', requestOptions);
            //.then(response => response.json())
            //.then(data => this.setState({postId: data.id}));
            // .then(json => {
            //
            // })
    }

    function clearFrom() {
        // console.log('clear')
        nameRef.current.value = "";
        authorRef.current.value = "";
        descRef.current.value = "";
        dbNameRef.current.value = "";
        setType(obsTypes[0]);
    }

    function handleSelectionChange(event) {
        setType(event.target.value);
    }

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
                            <input type="text" className="field" ref={nameRef}></input>
                        </div>

                        <div className="tag-input-pair">
                            <label className='etiquetasAsunto'>Autor:</label>
                            <input type="text" className="field" ref={authorRef}></input>
                        </div>
                    </div>

                    <div className="horizontal-panel">
                        <div className="tag-input-pair">
                            <label className='etiquetasAsunto'>Nombre de la Base de Datos:</label>
                            <input type="text" className="field" ref={dbNameRef}></input>
                        </div>

                        <div className="tag-input-pair">
                            <label className='etiquetasAsunto'>Tipo de Observacion:</label>
                            <select
                                className="field"
                                ref={descRef}
                                onChange={handleSelectionChange}
                            >
                                {obsTypes.map((obsType, i) => (
                                    <option
                                        value={obsType}
                                        key={i}
                                        selected={i === 0}
                                    >
                                        {obsType}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="form-row description-input-container">
                    <div className="tag-input-pair">
                        <label className='etiquetasAsunto'>Descripcion:</label>
                        <textarea className="description-input" ref={descRef}></textarea>
                    </div>
                </div>

                <div className="form-row">
                    <div className="center-content">
                        <input
                            type="submit"
                            className="btn btn-green"
                            onClick={postTopic}
                            value="Enviar Datos"
                        >
                        </input>
                    </div>
                </div>
            </form>

        </>
    )
}

export default IAsunto;