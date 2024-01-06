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
export default function EditorMod() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Introduction to Editor</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Introduction to Editor
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Geared towards the technical side of web design, 
          dealing with the underlying code that makes websites function.<br/>
         1. Writing and editing HTML, CSS, and JavaScript code.<br/>
2. Implementing website features and functionalities.<br/>
3. Debugging and troubleshooting code errors.<br/>
4. Optimizing website performance and responsiveness<br/>
Tools used: Dedicated code editors like Visual Studio Code, 
Sublime Text, Atom, etc., offering features like syntax highlighting, 
code completion, and debugging tools.

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}