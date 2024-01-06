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
export default function FileProMod() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>File Processing</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            File processing
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           Files is a collection of characters or words(strings) <br/>
           1. We can use File.open()  function to open a file<br/>
           2. Here we use File.write() method to write into file<br/>
           3. Here we use File.read() method to read a file<br/>
           4.Here we use File.close() method to close file<br/>
           5. Here we use File.append() method to append into file<br/>


          </Typography>
        </Box>
      </Modal>
    </div>
  );
}