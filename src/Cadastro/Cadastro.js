import React from 'react'
import { Link } from 'react-router-dom'

function Cadastro() {
  return (
    <>
         
        <div className='header'>
            <img src='https://pobreflix.me/uploads/system_logo/logo_61e7fc761242d.png' alt='Pobreflix/logo'/>
        </div>
        <div className='login'>
            <h2> Cadastrar </h2>
            <form>
                <div className='input'>
                    <input type="email" placeholder='Email...'/>
                </div>
                <div className='input'>
                    <input type="password" placeholder='Senha...'/>
                </div> 
                <div className='input'>
                    <input type="password" placeholder='Confirmar Senha...'/>
                </div> 
            </form>
             <Link to="/login"><button>Cadastrar</button> </Link> 
        </div>
        
    </>
  )
}

export default Cadastro