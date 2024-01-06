import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
  

export default function Pymod() {
    const [g,setg]=React.useState(false);
    const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    function Handler(){
        setg(true);
      setOpen(true);
    
    }

    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={10} style={{background:'#D5F0C0'}}>
        <Grid xs={2} style={{'borderColor':"teal"}}>
           
        <Card style={{"borderRadius":"360px","height":90,"width":90}} >
        <img src="py.png" height={90} width={90} alt="Tool" borderRadius="360px" onClick={Handler} />
        {g &&
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'#15f4ee'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Problem Solving through Python
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Instructions for Python exams<br/>
         1:- Read the question carefully.<br/>
         2:- There will be 100 questions.<br/>
         3:- There will be 60 minutes for 100 questions.<br/>
         4:- After 60 minutes paper will be submitted.<br/>
         Best of Luck!!
          </Typography>
        </Box>
      </Modal>}
      
    </Card>
        </Grid> 
      </Grid>
    </Box>
  );
}