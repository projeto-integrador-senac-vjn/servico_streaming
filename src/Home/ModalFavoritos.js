import axios from 'axios'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const API_KEY = 'a6325de08416b368b47a70cd06ebf05e'


function ModalFavoritos({id}) {
  require("./ModalCF.css")
  const [movie ,setMovie] = useState();
  const [modal, setModal] = useState(false)
  const handleClose = () => setMovie(false) 

  const Comentários = () => {}
  

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
       <div className="modalCF" >
          <div className='modal--content--CF'>
              <div>
                  <CloseIcon className='iconFecha'  onClick={handleClose}/> 
              </div>
                
              <img className='posterCF' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} /> 
              <p className='movieTitleCF'>{movie.title}</p>
              <div className='flexCF'>   
                    <p className='relevanceCF'>{movie.vote_average} de pontos</p> 
                    <p className='releaseCF'>{movie.release_date}</p>                              
              </div>
                    <p className='overviewCF'>{movie.overview}</p>
              </div>
              <button className='remove--buttonCF'>Comentários</button>
       </div>
      
    )}
      
    </>
  )
}

export default ModalFavoritos