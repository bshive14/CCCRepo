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
export default function AlgoMod() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Algorithms</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Algorithm 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Steps wise excution of program is known as algorithm<br/>
          1:- Generally it starts with planning of execution<br/>
          2:- Then PseudoCode is written for plan<br/>
          3:-Flowchart is drawn from the plan<br/>
          4:- Flowchart is pictorial representation of execution of plan<br/>
          5:- Starter, processing box, input box, decision box and a stopper <br/>
              are there in alogorith<br/>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}