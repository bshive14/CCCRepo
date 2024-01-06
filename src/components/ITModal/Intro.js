import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicModal from './WWW';
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
export default function Intro() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   function handlemod()
  {
    return(
      <div>
<BasicModal/>
      </div>
    );
  }

  return (
    <div >
      <Button onClick={handleOpen} style={{color:'teal'}}>Introduction to Computer</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Introduction to It Tools 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Computer:- Computer is an electronic device that
            process raw data and gives desired result based on 
            given input data.<br/>
            C:-Commonly<br/>
            O:-Operated <br/>
            M:-Machine <br/>
            P:-Purposely<br/>
            U:-Used For<br/>
            E:-Education &<br/>
            R:-Research<br/>
      
             <button className="success" style={{'background':'green',color:'white'}}onClick={()=>handlemod}>More Info</button>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}