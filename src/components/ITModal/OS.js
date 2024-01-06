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
export default function OS() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>OS</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Operating Systems
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Software:- Set of programme which are interelated together to process 
                      data aand provide expected results.<br/>

                      Software are of two types:-<br/>
                      1. Application Software <br/>
                      2. System Software <br/>
           Operation System:- Operating System is a System Software which provides<br/>
                      the platform for processing of data from input device to output
                      devices
                        

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}