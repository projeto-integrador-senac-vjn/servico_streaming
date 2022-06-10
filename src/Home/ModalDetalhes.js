import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "./ModalDetalhes.css"
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import API_KEY from './Tmdb'




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

export default function ModalDetalhes({children}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = React.useState();
  

  const fetchData = async() => {
    const {data} = await axios.get(`
    https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=pt-BR`)

    setContent(data)
  }

  React.useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <div>
      <Button onClick={handleOpen} className="movieRow--listarea"> { children } </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CloseIcon className='iconX' onClick={handleClose}/>
          <button className='MyList'>Minha Lista</button>
        </Box>
      </Modal>
    </div>
  );
}