import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const API_KEY = 'a6325de08416b368b47a70cd06ebf05e'

function Painel() {
  require("./Painel.css")
  const [fav, setFav] = useState([])
  const [movie, setMovie] = useState()

  

  
  return (
    <div>
        <NavBar/>
        <img className='painel' src='https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/misc/home-bg.jpg' alt='/painel'/>

        <h1 className='shows'>Meus Filmes</h1>
        <br/>
        <h2  className='curtidos'>Curtidos</h2>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>

        <h2  className='favoritos'>Favoritos</h2>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        <img className="rowImg" src='https://i.pinimg.com/originals/80/b0/c5/80b0c5191a07687dabc6d5e863d2bf52.jpg'/>
        

        
        <br/>
        
    </div>
  )
}

export default Painel