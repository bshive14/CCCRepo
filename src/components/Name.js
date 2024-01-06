import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

export default function Name() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}></Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        {/* <Fade in={open}> */}
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Enter you details to start your exam.
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <table border={0} align="left"/>
        <tr>
            <th>Name</th>
            <th><input type="text"/></th>
        </tr>
        <tr>
            <th>Contact No</th>
            <th><input type="text"/></th>
        </tr>
        <button type="button" class="btn btn-primary">Submit</button>
            </Typography>
          </Box>
        {/* </Fade> */}
      </Modal>
    </div>
  );
}
