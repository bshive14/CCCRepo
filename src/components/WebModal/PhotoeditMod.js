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
export default function PhotoeditMod() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Introduction to Photo Editor</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Introduction to Photo Editor
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Photo editing is an exciting journey of transforming ordinary images into masterpieces. 
          It's about enhancing, correcting, and manipulating photos to bring out their true 
          potential and tell a compelling story.<br/>

Whether you're a seasoned photographer or just starting out with your smartphone camera,
 photo editing can unlock a new level of creativity in your images. So, let's dive into 
 the basics and get you started!<br/>

1. Essential Tools:<br/>

Photo Editing Software: Popular choices include:<br/>
Freeware: GIMP, Paint.NET<br/>
Paid professional software: Adobe Photoshop, Lightroom, Affinity Photo<br/>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}