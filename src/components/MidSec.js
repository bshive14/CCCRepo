import * as React from 'react';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import BasicModal from './ITModal/WWW';
// import PyArch from './PyArch';
import Modal from '@mui/material/Modal';
import Quiz from './Quiz';
import Qdrawer from './Qdrawer';
import CCCQuiz from './CCCQuiz';
import Name from './Name';
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
  

export default function MidSec() {
    const [g,setg]=React.useState(false);
    const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


    function Handler(){
        setg(true);
      setOpen(true);
    
    }

    const [open1, setOpen1] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  const handleClose1 = () => setOpen1(false);


    function Handler1(){
        setg(true);
      setOpen1(true);
    
    }



    const [open2, setOpen2] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  const handleClose2 = () => setOpen2(false);


    function Handler2(){
        setg(true);
      setOpen2(true);
    
    }




    const [open3, setOpen3] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  const handleClose3 = () => setOpen3(false);


    function Handler3(){
        setg(true);
      setOpen3(true);
    
    }
    const [open4, setOpen4] = React.useState(false);
    const handleClose4 = () => setOpen4(false);

    function Handler4(){
      setg(true);
    setOpen4(true);
  
  }
  const [open5, setOpen5] = React.useState(false);
    const handleClose5 = () => setOpen5(false);
    const handleClose6 = () => setOpen(false);
    function Handler5(){
      setg(true);
    setOpen5(true);
    // {()=>handleClose6}
  }
  
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={10} style={{background:'#D5F0C0'}}>
        <Grid xs={2} style={{'borderColor':"teal"}}>
           
        <Card style={{"borderRadius":"360px","height":180,"width":180}} >
        <img src="Tool.png" height={180} width={180} alt="Tool" borderRadius="360px" onClick={Handler1} />
        {g &&
        <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'#15f4ee'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            IT tools and Management 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
         Instructions for IT Tools exams<br/>
         1:- Read the question carefully.<br/>
         2:- There will be 100 questions.<br/>
         3:- There will be 60 minutes for 100 questions.<br/>
         4:- After 60 minutes paper will be submitted.<br/>
         Best of Luck!!
          </Typography>
        </Box>
      </Modal>}
        
        <CardContent>
        
        <Typography variant="body2" color="text.secondary">
        Information Technology Tools and Network Basics
          "M1-R5"
         
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small" style={{'alignItems':"centre"}}>Learn More</Button >
      </CardActions>
    </Card>
    {/* <MidCard/> */}
        </Grid>
        
        <Grid xs={2}>
            
        <Card style={{"borderRadius":"360px ","height":180,"width":180}}>
        <img src="Web.png" height={180} width={180} alt="Tool" borderRadius="360px" onClick={Handler2}/><CardContent>
        {g &&
        <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'#00FFCD'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            WebDesign
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Instructions for Web Design & Punlishing exams<br/>
         1:- Read the question carefully.<br/>
         2:- There will be 100 questions.<br/>
         3:- There will be 60 minutes for 100 questions.<br/>
         4:- After 60 minutes paper will be submitted.<br/>
         Best of Luck!!
          </Typography>
        </Box>
      </Modal>}
        
        <Typography variant="body2" color="text.secondary">
        Web Designing and Publisihing HTML CSS JAVASCRIPT
          "M2-R5"
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    {/* <MidCard2/> */}
        </Grid>
         <Grid xs={2}>
         <Card  style={{"borderRadius":"360px","height":180,"width":180}}>
      <img src="py.png" height={180} width={180} alt="Tool" borderRadius="360px" onClick={Handler3} />

      {g &&
        <Modal
        open={open3}
        onClose={handleClose3}
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
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
        Programing and Problem Solving through Python
          "M3-R5"
          
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>


        <Grid xs={2}>
         <Card style={{"borderRadius":"360px","height":180,"width":180}}>
      <img src="IOT.png" height={180} width={180} alt="Tool" borderRadius="360px" onClick={Handler4} />
      {g &&
        <Modal
        open={open4}
        onClose={handleClose4}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300} style={{'background':'#00FFCD'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Internet Of Things
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Instructions for IoT exams<br/>
         1:- Read the question carefully.<br/>
         2:- There will be 100 questions.<br/>
         3:- There will be 60 minutes for 100 questions.<br/>
         4:- After 60 minutes paper will be submitted.<br/>
         Best of Luck!!
          </Typography>
        </Box>
      </Modal>}

      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          Internet Of Things (IOT) and its Varied Applications
          "M4-R5"
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </Grid>
        
        <Grid xs={2}>
         <Card style={{"borderRadius":"360px","height":180,"width":180}} onClick={()=>Handler}>
      <img src="CCC.png" height={180} width={180} alt="Tool" borderRadius="360px" onClick={Handler}/>
      {g &&
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{width:'auto'}}
        
      >
        <Box sx={style} height={560} width={700} style={{'background':'#15f4ee'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          CCC
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <button onClick={Handler5}>Start CCC Exam</button>
          {open5 && <Name/>}
          Instructions for CCC exams<br/>
         1:- Read the question carefully.<br/>
         2:- There will be 100 questions.<br/>
         3:- There will be 60 minutes for 100 questions.<br/>
         4:- After 60 minutes paper will be submitted.<br/>
         Best of Luck!!<br/>
        
        
          </Typography>
        </Box>
      </Modal>
  }
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
      
      
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
        </Grid>
       
       
        
      </Grid>
    </Box>
  );
}