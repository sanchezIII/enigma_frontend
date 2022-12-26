import '../hojas_de_estilo/NavigationBar.css'

function NavigationBar({page, setPage}) {

    function manejarCrearAsunto() {

    }

    function manejarMostrarDescripcion() {

    }

    function manejarMostrarUso() {
        setPage('uso');
    }

    function manejarMostrarLogin() {
        setPage('login');
    }

    function manejarMostrarContactenos() {

    }

    function manejarClickEncabezado() {
        setPage('main');
    }

    return (
        <div className='navigation-bar-container'>
            <div className='encabezado' onClick={manejarClickEncabezado}>
                <h2>Plataforma ENIGMA</h2>
            </div>

            <div className="links-container">
                <div
                    className={'link-container crear-asunto' + (page === 'asunto' ? ' active' : '')}
                    onClick={manejarCrearAsunto}
                >
                    <a href="#h" className={`link ${page === 'asunto' ? 'active' : ''}`}>
                        <p className='test'>
                            Crear Asunto
                        </p>
                    </a>
                </div>

                <div
                    className={'link-container mostrar-descripcion' + (page === 'descripcion' ? ' active' : '')}
                    onClick={manejarMostrarDescripcion}
                >
                    <a href="#h" className={`link ${page === 'descripcion' ? 'active' : ''}`}>
                        <p className='test'>
                            Descripcion de la API
                        </p>
                    </a>
                </div>

                < div
                    className={'link-container mostrar-uso' + (page === 'uso' ? ' active' : '')}
                    onClick={manejarMostrarUso}
                >
                    <a href="#h" className={`link ${page === 'uso' ? 'active' : ''}`}>
                        <p className='test'>
                            Como usar la Plataforma
                        </p>
                    </a>
                </div>

                < div
                    className={'link-container mostrar-contactenos' + (page === 'contact' ? ' active' : '')}
                    onClick={manejarMostrarContactenos}
                >
                    <a href="#h" className={`link ${page === 'contact' ? 'active' : ''}`}>
                        <p className='test'>
                            Contactenos
                        </p>
                    </a>
                </div>

                < div
                    className={'link-container mostrar-login' + (page === 'login' ? ' active' : '')}
                    onClick={manejarMostrarLogin}
                >
                    <a href="#h" className={`link ${page === 'login' ? 'active' : ''}`}>
                        <p className='test'>
                            Acceder
                        </p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
