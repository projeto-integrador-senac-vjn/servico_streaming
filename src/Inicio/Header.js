import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    require("./Header.css")
  return (
    <>
        <div className="container">
                <div className="menu">
                    <div className="logoNetflix">
                    <img className="imagemPobre" src="https://pobreflix.me/uploads/system_logo/logo_61e7fc761242d.png" alt='Pobreflix'/>
                    </div>
                        <Link to="/login"><button className="botaoEntrar">
                                ENTRAR
                            </button>
                        </Link>
                    </div>
                    <div className="filmes">
                        <h1> Filmes, séries e muito  <br/>   mais. Sem limites.</h1>
                        <p> Assista onde quiser. Cancele quando quiser</p>
                        <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                        <input placeholder="Email"/><button className='btnComecar'> Começar  </button>
                        <hr className="hrHeader"/>
                </div>
            </div>
    </>
  )
}

export default Header