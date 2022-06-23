import React from 'react'
import NavBar from './NavBar'
import axios from 'axios'


function Painel() {
  require("./Painel.css")
  
  return (
    <div>
        <NavBar/>
        <img className='painel' src='https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/misc/home-bg.jpg' alt='/painel'/>

        <h1 className='shows'>Meus Shows</h1>
        <br/>
        <h2  className='curtidos'>Curtidos</h2>
        <img className='rowImg' src='https://images3.alphacoders.com/105/1050135.jpg' alt='/painel'/>
        <h2  className='favoritos'>Favoritos</h2>
        <img className='rowImg' src='https://images3.alphacoders.com/105/1050135.jpg' alt='/painel'/>
    </div>
  )
}

export default Painel