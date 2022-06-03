import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
    require("./Login.css")
  return (
          
      <>
        <div className='header'>
            <img src='https://pobreflix.me/uploads/system_logo/logo_61e7fc761242d.png' alt='Pobreflix/logo'/>
        </div>
        <div className='login'>
            <h2> Entrar </h2>
            <form>
                <div className='input'>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className='input'>
                    <input type="password" placeholder='Senha'/>
                </div> 
            </form>
            <Link to="/filmes"><button>Entrar</button></Link>
            <p className='sign_up'> Novo por aqui? <Link to="/cadastro">Assine agora </Link> </p>
        </div>
        
        
      </>
  )
}

export default Login