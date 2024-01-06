import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function Webintro() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Introduction to Internet</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Introduction to Web
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Internet as a project started in the year 1989 and 
        was launched in 1991
        Internet: It a collection of computers or a network of computer
        which can be accessed by anyone at any place.
        For intenet connection you need to have one of the following:<br/>
        1:-Broadband with Router with operator jio,airtel,etc.<br/>
        2:-Wirless Fiedelity wi-fi <br/>
        3:-HotSpot connection from any transmitting device<br/>
        4:-Transmitting device like dongle, minirouter.<br/>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}