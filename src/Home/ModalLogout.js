import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './NavBar.css'
import BasicModal from './ModalLogout';


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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Sair</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal">
        <h3 >Tem Certeza?</h3>
        <div className='contmodal'>
            <button>Sair</button>
            <button className='cancelar' onClick={handleClose}>Cancelar</button>
        </div>
        </Box>
      </Modal>
    </div>
  );
}