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
export default function Build() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Build</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Building Iot App
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The basic method to build IOT Applications are:-<br/>
            1:-Draft a working plan for IOT subsystem <br/>
            2:-Arrange PCB with module of aurdino, raspberry etc. <br/>
            3:-Arrange a power source internet module or wifi module.<br/>
            4:-Wire you sensor and chips accordingly.  <br/>
            5:-Gather information from sensor and send it to server.  <br/>
            

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}