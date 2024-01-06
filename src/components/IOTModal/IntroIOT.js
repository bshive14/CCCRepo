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
export default function IntroIOT() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Introduction to IOT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Introduction to IOT
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Internet of things:<br/>
            1:- A combination of sensor and other devices that sends<br/>
                to a server constitutes IOT. <br/>
                2.:- Communication between devices and servers is firstly done.<br/>
                3:- Generally they works with microcontroller and servers.<br/>
                4:- Internet is mandetory to send information<br/>
                5:- Generally the size for IOT and microcontroller is very less.<br/>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}