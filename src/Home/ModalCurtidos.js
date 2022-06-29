import axios from 'axios';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';



const API_KEY = 'a6325de08416b368b47a70cd06ebf05e'


function ModalCurtidos({id}) {
  const [movie ,setMovie] = useState();
  const handleClose = () =>  setMovie(false)


  const Remover = () => {
    const obj = {
      id: id
    }
    axios.delete(`http://localhost:3002/deletaCurtidos/`+obj.id)
      .then(function (response)  {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
  }
 


  const fetchData = async() => {
    if (id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
      .then((res) => {
        setMovie(res.data)
        
      })
      .catch((error) => {
      })
    }
  }


  React.useEffect(() => {
    fetchData();
    
  }, [id]);
  
   
  return (
    <>
      {(movie) && (  
       <div className="modal" >
          <div className='modal--content'>
              <div>
                  <CloseIcon className='iconX'  onClick={handleClose}/> 
              </div>
                
              <img className='poster' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} /> 
              <p className='movieTitle'>{movie.title}</p>
              <div className='flex'>   
                    <p className='relevance'>{movie.vote_average} pontos</p> 
                    <p className='release'>{movie.release_date}</p>                              
              </div>
                    <p className='overview'>{movie.overview}</p>                
                      <button className='remove--buttonCF' onClick={() => Remover}>Remover dos Curtidos</button>                   
            </div>
       </div>
    )}
    </>
  )
  
}

export default ModalCurtidos