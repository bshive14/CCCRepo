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
export default function Protocol() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Protocols</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Protocols of IOT
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          There are four main Protocols of IOT.
          1:- AMQP Advance Message Queuing Protocol creates inter operatibility <br/>
              between messaging middleware and server.<br/>
         2:- COAP:- COnstraints Application proctocol is used to determine boundaries for<br/>
              Application
          3:- DDS data distribution Service is a protocol used for distributing  data among<br/>
              various devices<br/>

          4:-MQTT:- Message Queue Telemetery protocol is used for making messages in queue for<br/>
              data distribution 
              
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}