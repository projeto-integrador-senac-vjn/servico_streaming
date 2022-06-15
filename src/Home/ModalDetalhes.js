import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "./ModalDetalhes.css"
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';



const API_KEY = 'a6325de08416b368b47a70cd06ebf05e'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: '#141414',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: '90vh',
};

export default function ModalDetalhes({children, id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  
  const [movie, setMovie] = React.useState();
  const handleClose = () => setMovie(false);

  
  

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

  React.useEffect(() => {
    fetchData();
  }, [id]); 

  
  console.log(movie);
  

  return (
    <>
    {(movie) && (
      
       <div  className='modal'>
          
          <div className='containermodal'>
            <img className='poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
            <p>{movie.title}</p>
                <p>{movie.overview}</p>
                <p>{movie.vote_average} de relevancia</p>
                <CloseIcon onClick={handleClose}/>      
          </div>
       </div>
    )}
   
    </>
  );
}