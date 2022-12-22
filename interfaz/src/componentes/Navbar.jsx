import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import DescripcionAPI from './DescripcionAPI'
import IAsunto from './IAsunto.jsx'

function Navbar() {

  const [clicked, setClicked] = useState(false)
  
  const [clicked1, setClicked1] = useState(false)

  const [clicked2, setClicked2] = useState(false)

  const [clicked3, setClicked3] = useState(false)

  const [clicked4, setClicked4] = useState(false)

  const [clicked5, setClicked5] = useState(false)
  
  const manejarClick1 = () => {
    setClicked (true);
    setClicked1 (true);
  }

  const manejarClick1GD = () => {
    setClicked(false);
    setClicked1(false);
    setClicked2(false);
    setClicked3(false);
    setClicked4(false);
    setClicked5(false);
  }

  const manejarClick2 = () => {
    setClicked (true);
    setClicked2 (true);
  }

  const manejarClick3 = () => {
    setClicked (true);
    setClicked1 (true);
  }

  const manejarClick4 = () => {
    setClicked (true);
    setClicked1 (true);
  }

  const manejarClick5 = () => {
    setClicked (true);
    setClicked1 (true);
  }

  

  return (
    <>
      <NavContainer>
        <h2><span>Plataforma</span> Enigma</h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={manejarClick1} href="#h" className={`link ${clicked ? 'active' : ''}`}>Crear Asunto</a>
          <a onClick={manejarClick2} href="#h" className={`link ${clicked ? 'active' : ''}`}>Descripcion de la API</a>
          <a onClick={manejarClick3} href="#h" className={`link ${clicked ? 'active' : ''}`}>Como usar la Plataforma</a>
          <a onClick={manejarClick4} href="#h" className={`link ${clicked ? 'active' : ''}`}>Contactenos</a>
          <a onClick={manejarClick5} href="#h" className={`link ${clicked ? 'active' : ''}`}>Acceder</a>
        </div>
        
        <div className={`forms ${!clicked1 ? 'active' : ''}`}>  
            <div>
              <IAsunto/>
            </div>
        </div>

        <div className={`descripcion ${!clicked2 ? 'active' : ''}`}>
           <DescripcionAPI/>
        </div>
        
        
        { /*<BurguerButton clicked={clicked} handleClick={handleClick} />*/ }

        

        {/*<BgDiv onClick={handleClick} className={`initial ${clicked ? ' active' : ''}`}></BgDiv>*/}
        <BgDiv onClick={manejarClick1GD} className={`initial ${clicked ? ' active' : ''}`}></BgDiv>


      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    margin-right: 27%;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 2rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: end;
    
    .link{
      color: white;
      font-size: 1rem;
      
    }

    .link.active{
      visibility: hidden;
      color: white;
      font-size: 2rem;
      display: block;

    }


    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }

  .links.active{
    
    visibility: hidden;
    width: 100%;
    width: 0px;
    height: 0px;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .forms{
    
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
		}    
  }
  .forms.active{
    visibility: hidden;
    position: absolute;
    width: 0px;
    height: 0px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

  }

  .descripcion{
    
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
		}    
  }
  .descripcion.active{
    visibility: hidden;
    position: absolute;
    width: 0px;
    height: 0px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;

  }

  

`

const BgDiv = styled.div`
  background-color: #333;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 0 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }`