import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const API_KEY = 'a6325de08416b368b47a70cd06ebf05e'



function Painel() {
  require("./Painel.css")
  const [curtido, setCurtido] = useState([])
  const [favorite, setFavorite] = useState([])
  const [like, setLike] = useState([])
  const [favorito, setFavorito] = useState([]) 
  const [filmes, setFilmes] = useState([])

  
  useEffect( () => {
    axios.get('http://localhost:3001/curtidos')
    .then( function (response) {
        /*setCurtido(response.data.id_filme);*/
        setCurtido([424])
    })
    .catch(function (error) {         
        console.log(error);
    })
  }, [])

  useEffect( () => {
    axios.get('http://localhost:3001/favoritos')
    .then( function (response) {
        setFavorito(response.data);
    })
    .catch(function (error) {         
        console.log(error);
    })
  }, [])

  const buscaCurtidos = () => {
    
    const filmes = []
    

    const loop = (index, length) => {

        if(index > length){
          console.log(filmes)
          setFilmes(filmes)
          return;
        }

        console.log(curtido[index])

        axios.get(`https://api.themoviedb.org/3/movie/${curtido[index]}?api_key=${API_KEY}&language=pt-BR`)
        .then( response => {
          filmes.push(response)
          loop(index + 1, curtido.length)
        })
        .catch( error => console.log(error) )

    }

    loop(0, curtido.length)

  }

  if(curtido != 0){
    buscaCurtidos()
  }

 

 /* useEffect( () => {
    axios.get(`https://api.themoviedb.org/3/movie/${curtido}?api_key=${API_KEY}&language=pt-BR`)
    .then( function (response) {
        setFavorite(response.data);
    })
    .catch(function (error) {         
        console.log(error);
    })
  }, [])*/

  console.log(favorito)

  

   
    
  
      

  return (
    <div>
        <NavBar/>
        <img className='painel' src='https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/misc/home-bg.jpg' alt='/painel'/>

        <h1 className='shows'>Meus Filmes</h1>
        <br/>
        <h2  className='curtidos'>Curtidos</h2>

        {
            curtido == 0 ? <p>Carregando</p>
            :
            <div>
                {curtido.map(u => {
                    return(
                        <>
                            <strong>Email: {u.id_filme}</strong>
                            <hr/>
                        </>
                    )
                })}
            </div>
        }
        
        

        
        <br/>
        
    </div>
  )
}

export default Painel