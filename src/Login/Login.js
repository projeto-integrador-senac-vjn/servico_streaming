import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-hot-toast'

 


function Login() {
    
    require("./Login.css")
    const navigate = useNavigate();

    const logar = (e) => {
        e.preventDefault();  
            const gmail = document.querySelector("input[name='gmail']").value
            const password = document.querySelector("input[name='password']").value
        
    
        const obj = {
            gmail: gmail,
            password: password
        }       
        
       
        axios.post('http://localhost:3002/login', obj)
        .then(function (response) {
            
             if(response.data != 0){
                toast.success('Logado com sucesso');     
                const user = (response.data[0].id_usuario)
                navigate("/home")
                localStorage.setItem("idUser", user)
                

            }else{
                toast.error('Email ou senha incorretos')
            }
        })
          
    }
  return (
          
      <>
        <div>
            <img className='loginImg' src='https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/0c61fb9a-2dc0-44d5-a207-240a00f5f39c/BR-pt-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg'  />
        </div>
        <div className='header'>
            <img src='https://pobreflix.me/uploads/system_logo/logo_61e7fc761242d.png' alt='Pobreflix/logo'/>
        <div className='login'>
            <h2> Entrar </h2>
            <form onSubmit={(e) => logar(e)}>
                
                <div className='input'>
                    <input name="gmail" type="email" placeholder='Email'/>
                </div>
                <div className='input'>
                    <input name="password" type="password" placeholder='Senha'/>
                </div> 
                <button>Entrar</button>
            </form>
            
            <p className='sign_up'> Novo por aqui? <Link to="/cadastro">Assine agora </Link> </p>
        </div>
        </div>
        
        
      </>
  )
}

export default Login