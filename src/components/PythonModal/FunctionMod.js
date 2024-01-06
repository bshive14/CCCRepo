import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import BasicModal from './WWW';
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
export default function FunctionMod() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
   function handlemod()
  {
    return(
      <div>

      </div>
    );
  }

  return (
    <div >
      <Button onClick={handleOpen} style={{color:'teal'}}>Functions</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Functions 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Functions are Reuseable components.<br/>
            1:- There are two types of function namely parameterized and Non-parameterized<br/>
            2:- We can also have function with return value and without return  values <br/>
            3: Functions are  declared with def keyword , def follwed by function name<br/>
            4:- They are called with function name follwed by paranthesis.<br/>
            5:- constructors are special functions which is declared with .__init__()<br/>
            
      
             <button className="success" style={{'background':'green',color:'white'}}onClick={()=>handlemod}>More Info</button>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}