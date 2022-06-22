import * as React from 'react';
import "./ModalDetalhes.css"
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import  ReactDOM  from 'react-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import YouTubeIcon from '@mui/icons-material/YouTube';



const API_KEY = 'a6325de08416b368b47a70cd06ebf05e'
const modal = document.getElementById('modal')


export default function ModalDetalhes({id}) { 
  const [movie, setMovie] = React.useState();
  const [video, setVideo] = React.useState();
  const handleClose = () => setMovie(false);
  const [date, setDate] = React.useState([]);

  const fetchData = async() => {
    if (id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
      .then((res) => {
        setMovie(res.data)
        
      })
      .catch((error) => {
        alert(error.message)
      })
    }
  }

  const fetchVideo = async() => {
    if (id) {
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=pt-BR`)
      .then((res) => {
        setVideo(res.data.results[0]?.key)
        
      })
      .catch((error) => {
        alert(error.message)
      })
    }
  }

  React.useEffect(() => {
    fetchData();
    fetchVideo();
  }, [id]); 


  return ReactDOM.createPortal(
    <>
    {(movie) && (  
       <div className="modal" >
          <div className='modal--content'>
              <div>
                  <CloseIcon className='iconX' onClick={handleClose}/> 
              </div>
                
              <img className='poster' src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.original_title} /> 
              <p className='movieTitle'>{movie.title}</p>
              <div className='flex'>   
                    <p className='relevance'>{movie.vote_average} de pontos</p> 
                    <p className='release'>{movie.release_date}</p>
                    <StarBorderIcon/>
                    <FavoriteBorderIcon/>                                
              </div>
                    <p className='overview'>{movie.overview}</p>
              <a className='trailer' target="_blank" href={`https://www.youtube.com/watch?v=${video}`}><YouTubeIcon className="youtubeIcon"/> Trailer </a>      
            </div>
       </div>
    )}
   
    </>,
    modal,
  );
}