import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import DescripcionAPI from './DescripcionAPI'
import IAsunto from './IAsunto.jsx'
import UsarPlataforma from '../components/UsarPlataforma'
import '../hojas_de_estilo/fonts.css'

function Navbar() {

  const [clicked, setClicked] = useState(false)

  const [clicked1, setClicked1] = useState(false)

  const [clicked2, setClicked2] = useState(false)

  const [clicked3, setClicked3] = useState(false)

  const [clicked4, setClicked4] = useState(false)

  const [clicked5, setClicked5] = useState(false)

  const testf = () =>{

  }

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
    setClicked3 (true);
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
        <div className='encabezado'>
        <h2><span>Plataforma</span> Enigma</h2></div>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <div className='link-container' onClick={manejarClick1}>
            <a  href="#h" className={`link ${clicked ? 'active' : ''}`}><p className='test'>Crear Asunto</p></a>
          </div>

          <div className='link-container' onClick={manejarClick2}>
            <a  href="#h" className={`link ${clicked ? 'active' : ''}`}><p className='test'>Descripcion de la API</p></a>
          </div>

          <div className='link-container' onClick={manejarClick3}>
            <a  href="#h" className={`link ${clicked ? 'active' : ''}`}><p className='test'>Como usar la Plataforma</p></a>
          </div>

          <div className='link-container' onClick={manejarClick4}>
            <a  href="#h" className={`link ${clicked ? 'active' : ''}`}><p className='test'>Contactenos</p></a>
          </div>

          <div className='link-container' onClick={manejarClick5}>
            <a  href="#h" className={`link ${clicked ? 'active' : ''}`}><p className='test'>Acceder</p></a>
          </div>
        </div>




        { /*<BurguerButton clicked={clicked} handleClick={handleClick} />*/ }



        {/*<BgDiv onClick={handleClick} className={`initial ${clicked ? ' active' : ''}`}></BgDiv>*/}
        <BgDiv onClick={manejarClick1GD} className={`initial ${clicked ? ' active' : ''}`}>
        <div className={`forms ${!clicked1 ? 'active' : ''}`}>
              <IAsunto/>

        </div>

        <div className={`descripcion ${!clicked2 ? 'active' : ''}`}>
              <DescripcionAPI/>
        </div>

        <div className={`usar ${!clicked3 ? 'active' : ''}`}>
              <UsarPlataforma/>
        </div>

        </BgDiv>


      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  .encabezado{ 
    width: 20%;
    height: 80px;
    margin-left: 10px;
    h2{
      color: #EEEEEE;
      font-weight: 400;
      margin: 27%;
      span{
        font-weight: bold;
      }
    }
  }
  background-color: #222831;
  display: flex;
  justify-content: space-between;
  
  
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    
    
    .link{
      color: #EEEEEE;
      font-size: 1rem;
      margin-top: 100px;
      align-items: center;
      text-decoration: none;
      font-family: NotoSans;

    }

    .test{
      margin: 30px;
    }

    .link-container:hover{
      .link{
        color: #00ADB5;
      }
      cursor: pointer;
    }

    .link-container{
      display: inline-block;
      height: 80px;
      align-items: center;
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
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .forms{
    
    width: 100%;
    margin-top: 10%;
    justify-content: left;
    
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

  }

  .descripcion,.usar{
    
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 4%;
    left: 0;
    right: 0;
    text-align: center;
		}    
  }
  .descripcion.active,.usar.active{
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
  background-color: #393E46;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  display: flex;
  align-items: flex-start;
  
  &.active{
    border-radius: 0 0 20% 0;
    top: 7%;
    left: 0;
    width: 100%;
    height: 300%;
  }
  `