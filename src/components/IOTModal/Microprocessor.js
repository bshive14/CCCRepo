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
export default function Microprocessor() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Microprocessor</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Microcoprocessor
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Microcoprocessor:-<br/>
            1:- It is computer processor for which logic and control.<br/>
                is included in a single integrated circuit.<br/>
            2:- It contains Airthmatic,Logic,control unit<br/>
            3:- it is multi purpose clock driven register base <br/>
            Digital Integrate Circuit.<br/>
            4:- it is a mian constituent of CPU.<br/>
            5:- They are produced by a large number of MOS.  


          </Typography>
        </Box>
      </Modal>
    </div>
  );
}