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
export default function Sensor() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Sensor</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sensor
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Sensor:-<br/>
            1:- It is device that produced output signal for the
             purpose of sensing the physical phenomenon<br/>
             2:- There are using touch sensitive elevator button
             and many day to day activity.<br/>
             3:- Analog sensor such as potentiometers are widely used. <br/>
             4:- Sensor sensivity indicates how much its output changes 
             when input quantity it measure changes.<br/>
             5:-Most snsor have linear transform function.<br/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}