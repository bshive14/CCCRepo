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
export default function Word() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>MSWord</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Word Processing
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Word Processing is done word editors like MS-Word, Libre Office

            Ms-Word:- It is a word processor software where we can type our 
                      documents.<br/>
            You Can Open Ms-Word if it is on you system with Following Command:-<br/>
            windows + r  opens run input dialoge box now type "windword" and process
            enter<br/>
            1:-Open New Doc:- Ctr+N<br/>
            2:-Select All document:- Ctrl+A  <br/>
            3:-Copy Document:- Ctrl+C <br/>
            4:-Paste Document:- Ctrl+V <br/>
            5:-Change to Capital Letter:- Shift+f3<br/>
            6:-Create New macro:- Alt+f8<br/>
            7:-Open File:- Alt+F<br/>
            8:-Undo Typed Document:- Ctrl+z<br/>
            9:-Redo Typed Document:- Ctrl+y<br/>
            10:Insert :- Alt+i<br/>
            






          </Typography>
        </Box>
      </Modal>
    </div>
  );
}