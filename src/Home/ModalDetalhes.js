import * as React from 'react';
import "./ModalDetalhes.css"
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import  ReactDOM  from 'react-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast } from 'react-hot-toast';
import YouTubeIcon from '@mui/icons-material/YouTube';

const API_KEY = 'a6325de08416b368b47a70cd06ebf05e'
const modal = document.getElementById('modal')


export default function ModalDetalhes({id, img}) { 
  const [movie, setMovie] = React.useState();
  const [video, setVideo] = React.useState();
  const handleClose = () => {
    setMovie(false)
    window.location.reload()
  };

  
  

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


  const avaliar = (curtida) => {
    
     const obj = {
       idAvaliar: id,
       idImg: img,
       idUser: localStorage.getItem('idUser')
       
     }


     if(curtida == true){
      axios.post(`http://localhost:3002/curtidos`, obj)
      .then(function (results) {
        toast.success("Salvo nos curtidos")
      }).catch(function (error) {
        toast.error("Já salvo nos curtidos ")
      })
     }else{
      axios.post(`http://localhost:3002/favoritos`, obj)
      .then(function (response) {
        toast.success("Salvo nos favoritos")
        
      }).catch(function (response) {
        toast.error("Já salvo nos favoritos")
      })
     }
     
    }

    
    
    

  return ReactDOM.createPortal(
    <>
    {(movie) && (  
       <div className="modal" >
          <div className='modal--content'>
              <div>
                  <CloseIcon className='iconX' onClick={handleClose} /> 
              </div>
                
              <img className='poster' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} /> 
              <p className='movieTitle'>{movie.title}</p>
              <div className='flex'>   
                    <p className='relevance'>{movie.vote_average} pontos</p> 
                    <p className='release'>{movie.release_date}</p>
                    <StarBorderIcon onClick={() => avaliar(false)} />
                    <FavoriteBorderIcon  onClick={() => avaliar(true)} />                                
              </div>
                    <p className='overview'>{movie.overview}</p>
                    <a className='featured--watchbutton' target='_blank' href={`https://www.youtube.com/watch?v=${video}`} ><YouTubeIcon className='icon--trailer'/>Trailer</a>
                    

            </div>
       </div>
    )}
   
    </>,
    modal,
  );
}