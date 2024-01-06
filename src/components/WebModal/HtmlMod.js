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
export default function HtmlMod() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>Introduction to HTML</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Introduction to HTML
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          HyperText Markup Language (HTML) is the foundation of web development. 
          It's the language used to create and structure web pages.
It defines the content and layout of a web page, including text, images, headings, links, 
and other elements.<br/>
Browsers read and interpret HTML code to render web pages visually on your screen.<br/>
Key Concepts:<br/>


          </Typography>
        </Box>
      </Modal>
    </div>
  );
}