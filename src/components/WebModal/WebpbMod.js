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
export default function WebpbMod() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Introduction to Web Publishing abd Browsing</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Introduction to Web Publishing and Browsing
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <strong>Web Publishing:</strong> <br/>
          Web publishing is the art and science of creating and sharing content on the internet. 
          It's like building your own corner in the digital library, filled with your unique thoughts, ideas, and creations.<br/>
           Whether you're a tech-savvy coder or a passionate blogger, 
          web publishing empowers you to reach a global audience and make your voice heard.<br/>
          <strong>Browsing:</strong><br/>
          Web browsing is the act of navigating and interacting with the vast ocean of information online.
          It's like being a curious explorer, 
          venturing through countless digital corridors and discovering hidden treasures at every turn.


          </Typography>
        </Box>
      </Modal>
    </div>
  );
}