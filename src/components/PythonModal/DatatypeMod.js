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
export default function DatatypeMod() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Data Type</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300}style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Data Types
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         Data types in python are of two types:<br/>
         1: Sequential Data Type <br/>
         2:-Non Sequential types<br/>
         3:-List :- It is a collection of homogeneous and hetrogeneous Data<br/>
         4:-Tuple:- It is a collection of data which is unordered<br/>
         5:- Set:- It stores unique values  of collection of data<br/>
         6:- Dictionary:- It stores key pair values of data.<br/>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}