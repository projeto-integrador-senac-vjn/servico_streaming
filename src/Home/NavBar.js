import React, { useEffect, useState } from 'react'

function NavBar() {
    require("./NavBar.css")

    const [blackHeader, setBlackHeader] = useState(false)

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
                <a href="/">
                    <img  src='https://pobreflix.me/uploads/system_logo/logo_61e7fc761242d.png'/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="Usúario" />
                </a>
            </div>
        </header>
    </>
  )
}

export default NavBar