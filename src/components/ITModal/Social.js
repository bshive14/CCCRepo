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
export default function Social() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Social</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Social Networking Sites
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Facebook, Instagram,linkedin<br/>
           1. It consist of both  web application, mobile application<br/>
           2. Here we can tag, post, like, share, comment do lot of cool stuff<br/>
           3. People can protest on social netwworking sites<br/>
           4. People can unite, host event through social networ sites<br/>
           5. People can do virtual polling through social networ sites<br/>


          </Typography>
        </Box>
      </Modal>
    </div>
  );
}