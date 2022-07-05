import axios from 'axios'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import toast from 'react-hot-toast';
import YouTubeIcon from '@mui/icons-material/YouTube';
const API_KEY = 'a6325de08416b368b47a70cd06ebf05e'


function ModalFavoritos({id}) {
  require("./ModalCF.css")
  const [movie ,setMovie] = useState();
  const [video, setVideo] = useState()
  const handleClose = () => {
    setMovie(false)
    window.location.reload()
  } 

 

  const Remover = () => {
    const obj = {
      idFilme: id,
      idUser: localStorage.getItem("idUser")
    }
    axios.delete(`http://localhost:3002/deletaFavoritos/${obj.idFilme}/${obj.idUser}`)
        .then(function (results) {

            window.location.reload()
            toast.success("Removido")

          window.location.reload()
          toast.success("Removido")

    })
        .catch(function (error) {
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

  const fetchVideo = async() => {
    if (id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`)
      .then((res) => {
        setVideo(res.data.results[0].key)
        
      })
      .catch((error) => {
        
      })
    }
  }

  

  

  React.useEffect(() => {
    fetchData();
    fetchVideo();
    
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
                        <p className='relevanceCF'>{movie.vote_average} pontos</p> 
                        <p className='releaseCF'>{movie.release_date}</p>                              
                  </div>
                        <p className='overviewCF'>{movie.overview}</p>
                  
                  <div className='remove--CF'>
                      <a className='featured--watchbutton' target='_blank' href={`https://www.youtube.com/watch?v=${video}`} ><YouTubeIcon className='icon--trailer'/>Trailer</a>
                      <button className='featured--mylistbutton' onClick={() => Remover()}>Remover</button>
                  </div>
                  
                      
          </div>
       </div>
      
    )}
      
    </>
  )
}

export default ModalFavoritos