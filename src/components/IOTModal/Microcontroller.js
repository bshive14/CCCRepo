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
export default function Microcontrollers() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Microcontrollers</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Microcontroller
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Microcontroller:<br/>
           1:- It is a compact integrated circuit designed to perform
           operation in embedded  System.<br/>
           2:- It includes processor, memory and input output<br/>
              peripherals on a single chip<br/>
           3:- It is also known as MCU.<br/>
           4:- It is embedded inside a System to perform single function.<br/>
           5:- Modern car uses ABS Anti lock Breaking System which is a microcontroller.<br/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}