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
export default function Servercom() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Server Communication</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Server Communication
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Server Communication:-<br/>
          1:- The Communication between sensing device and server <br/>
          takes place in IOT to store data.<br/>
          2:- There are two types of server involve in the communication.<br/>
          3:- Generally request is made using cloud services such as AWS.<br/>
          4:-Before sending the information it is delivered into chunks.<br/>
        using message Queue.<br/>
        5:- Where is protocol such as MQTP,CUA etc. are used for communication.<br/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}