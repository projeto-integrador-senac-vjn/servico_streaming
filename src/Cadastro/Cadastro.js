import React from 'react'
import { Link } from 'react-router-dom'

function Cadastro() {
    require("../Login/Login.css")
  return (
    <>
         <div>
         <img className='loginImg' src='https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/0c61fb9a-2dc0-44d5-a207-240a00f5f39c/BR-pt-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg'  />
         </div>
        <div className='header'>
            <img src='https://pobreflix.me/uploads/system_logo/logo_61e7fc761242d.png' alt='Pobreflix/logo'/>
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
             <Link to="/login"><button type='submit'>Cadastrar</button> </Link> 
             <p className='sign_up'>Já possui uma conta? <Link to="/login">Logar </Link></p>

        </div>
        </div>
        
    </>
  )
}

export default Cadastro