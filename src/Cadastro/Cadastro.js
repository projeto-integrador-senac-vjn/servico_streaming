import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Cadastro() {
    require("../Login/Login.css")
    const navigate = useNavigate();
    
    

    const verificaDados = (obj) => {
            if(obj.nome == '' || obj.email == '' || obj.senha == ''){
                alert("Algum campo está incorreto")
            }else{
                axios.post('http://localhost:3001/usuarios', obj)
                .then(function (response) {
                    alert("Cadastrado com sucesso")
                    navigate("/login")
                    
                }).catch(function (response) {
                    alert("Verifique os campos tente novamente")
                })
            }
    }
    

   

    const registrar = (e) => {
        e.preventDefault();

            const nome = document.querySelector("input[name='nome']").value
            const email = document.querySelector("input[name='email']").value
            const senha = document.querySelector("input[name='senha']").value
        
    
        const obj = {

            nome: nome,
            email: email,
            senha: senha
        }       
        
       
       verificaDados(obj)
          
    }

    

  return (
    <>
         <div>
         <img className='loginImg' src='https://assets.nflxext.com/ffe/siteui/vlv3/8ee18735-ada3-45be-b383-a94701054bb9/0c61fb9a-2dc0-44d5-a207-240a00f5f39c/BR-pt-20220613-popsignuptwoweeks-perspective_alpha_website_medium.jpg'  />
         </div>
        <div className='header'>
            <img src='https://pobreflix.me/uploads/system_logo/logo_61e7fc761242d.png' alt='Pobreflix/logo'/>
        <div className='login'>
            <h2> Cadastrar </h2>
            <form onSubmit={(e) => registrar(e)}>
            <div className='input'>
                    <input  name="nome" type="text" placeholder='Nome...'/>
                </div>
                <div className='input'>
                    <input  name="email" type="email" placeholder='Email...'/>
                </div>
                <div className='input'>
                    <input name="senha" type="password" placeholder='Senha...'/>
                </div> 
               
              <button >cadastrar</button>
            </form>
             <p className='sign_up'>Já possui uma conta? <Link to="/login">Logar </Link></p>

        </div>
        </div>
        
    </>
  )
}

export default Cadastro