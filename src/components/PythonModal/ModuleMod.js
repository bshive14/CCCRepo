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
export default function ModuleMod() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Modules</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Modules in Python
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Module is a set of functions to be used at an instance of given program<br/>
            1.Firstly we will define and save a function in .py  file<br/>
            2.It is done as<br/>
              def mymod():<br/>
              print("in My module")<br/>

              save it with mymod.py<br/>

            3. Now we can import it as <br/>
               import mymod<br/>
            4. We can call the mymod() method<br/>
            5. When we want to call functions to be called in various part of app<br/>
               we call the modules
             <br/>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}