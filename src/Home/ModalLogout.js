import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './NavBar.css'
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from 'react'






const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#141414',
  p: 4,
  height: 200,
  
};

export default function BasicModal() {
  require("./NavBar.css")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Sair = () => {
    localStorage.removeItem("idUser")
    useNavigate("/")
 
 }

  return (
    <div>
      <hr/>
      <Button className='button' onClick={handleOpen}>Sair</Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modalLogout">
        <CloseIcon className='iconx' onClick={handleClose}/>
        <h3 >Tem Certeza?</h3>
        <br/>
        <br/>
        <button onClick={Sair}>Sair</button>
      
            
        
        </Box>
      </Modal>
    </div>
  );
}