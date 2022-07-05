import axios from 'axios';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import YouTubeIcon from '@mui/icons-material/YouTube';



const API_KEY = 'a6325de08416b368b47a70cd06ebf05e'


function ModalCurtidos({id}) {
  const [movie ,setMovie] = useState();
  const [video, setVideo] = useState()
  
  const handleClose = () =>  {
    setMovie(false)
    window.location.reload()
    }  
  const navigate = useNavigate()


  const Remover = () => {
    const obj = {
      idFilme: id,
      idUser: localStorage.getItem("idUser")

    }

    axios.delete(`http://localhost:3002/deletaCurtidos/${obj.idFilme}/${obj.idUser}`)
      .then(function (response)  {
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

export default ModalCurtidos