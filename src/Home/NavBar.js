import  Menu  from './Menu'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
    require("./NavBar.css")

    const [blackHeader, setBlackHeader] = useState(false)
    const [ativado, setAtivado] = useState(false)

    useEffect(()=> {
        const scrollListener = () => {
          if(window.scrollY > 10) {
            setBlackHeader(true);
          } else{
            setBlackHeader(false);
          }
        }
    
        window.addEventListener('scroll', scrollListener);
    
        return () => {
          window.removeEventListener('scroll', scrollListener);
        }
      }, [])
  return (
    <>
       <header className={blackHeader ? 'black' : ''}>
            <div className="header--logo">
                <Link to="/home">
                    <img  src='https://pobreflix.me/uploads/system_logo/logo_61e7fc761242d.png'/>
                </Link>
            </div>
            <Menu/>
        </header>
    </>
  )
}

export default NavBar