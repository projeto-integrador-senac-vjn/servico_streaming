import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'
import "../App.css"
import ModalFavoritos from "./ModalFavoritos"
import ModalCurtidos from "./ModalCurtidos"
import {useNavigate} from 'react-router-dom'

const API_KEY = 'a6325de08416b368b47a70cd06ebf05e'



function Painel() {
  require("./Painel.css")
  const navigate = useNavigate()
  const [curtido, setCurtido] = useState([])
  const [idFavorite, setIdFavorite] = useState([])
  const [favorito, setFavorito] = useState([]) 
  const [idLike, setIdLike] = useState()

  const onFavoriteSelected = (idFavorite) => {
    setIdFavorite(idFavorite)
  }

  const onLikeSelected = (idLike) => {
    setIdLike(idLike)
  }

  useEffect( () => {
    
    if(!localStorage.getItem("idUser")){
      navigate("/login")

    }

  }, [])
  
  useEffect( () => {
    const obj = {
      idUser: localStorage.getItem("idUser")
    }
    axios.get('http://localhost:3002/curtidos/'+obj.idUser)
    .then( function (response) {
        setCurtido(response.data)
    })
    .catch(function (error) {         
        console.log(error);
    })
  }, [])

  useEffect( () => {
    const obj = {
      idUser: localStorage.getItem("idUser")
    }
    axios.get('http://localhost:3002/favoritos/'+obj.idUser)
    .then( function (response) {
       setFavorito(response.data);
    })
    .catch(function (error) {         
        console.log(error);
    })
  }, []);

  return (
    <div>
        <NavBar/>
        <img className='painel' src='https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/misc/home-bg.jpg' alt='/painel'/>

        <h1 className='shows'>Meus Filmes</h1>
        <br/>
        <h2  className='favoritos'>Favoritos</h2>

        {
            favorito == 0 ? 
            <h2 className='adicione'>Nenhum filme adicionado</h2>
            :
            <div>
                {favorito.map((u, key) => {
                    return(
                      <div className="container--favoritos" onClick={() => {onFavoriteSelected(u.id_filme)}}>
                            <img key={key} className="imgFavoritos"  src={`https://image.tmdb.org/t/p/original${u.img}`}/>
                        </div>
                    )
                })}
            </div>
        }

        <h1 className="curtidos">Curtidos</h1>
        
        {
            curtido == 0 ? 
            <h2 className='adicione'>Nenhum filme adicionado</h2>
            :
            <div>
                {curtido.map((u, key) => {
                    return(
                        <div className='container--favoritos' onClick={() => { onLikeSelected(u.id_filme) }}>
                            <img key={key} className="imgFavoritos" src={`https://image.tmdb.org/t/p/original${u.img}`}/>
                        </div>
                    )
                })}
            </div>
        }
        

        
        <br/>

        <ModalFavoritos id={idFavorite}/>
        <ModalCurtidos id={idLike}/>
        
    </div>
  )
}

export default Painel