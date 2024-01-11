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
export default function FinalMod() {
    let s= localStorage.getItem("q");
    let s2= localStorage.getItem("q2");
    let s3= localStorage.getItem("a3");
    let s4= localStorage.getItem("a4");
    let s5= localStorage.getItem("a5");
    let s6= localStorage.getItem("a6");
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
const [g,setg]=React.useState(0);
const [g2,setg2]=React.useState(0);
const [g3,setg3]=React.useState(0);
const [g4,setg4]=React.useState(0);
const [g5,setg5]=React.useState(0);
const [g6,setg6]=React.useState(0);
    React.useEffect(()=>{
        
    for(let i=0;i<s.length-1;i++)
    {
        setg(s);
        setg2(s2);
       
    }
    for(let i=0;i<s3.length-1;i++)
    {
        setg3(s3);
        setg4(s4);
       
    }
    for(let i=0;i<s5.length-1;i++)
    {
        setg5(s5);
        setg6(s6);
       
    } 
    })
  return (
    <div >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={10} style={{background:'white', width:1340,height:900,marginTop:-30}}>
        <Grid xs={2} style={{'borderColor':"teal"}}>
 
        <Card style={{"borderRadius":"0px","height":900,"width":1340}} >
        <table border={2} style={{align:'right',width:300}}>
        <tr>
        <th>Attempted questions</th>
            <th>Your choices</th> 
        </tr>
        <tr>
           <th>
            {g},{g3},{g5}
            </th>
            <th>
           {g2},{g4},{g6}
            </th>
        </tr>
        <tr>
        <th>
                console.console.log(v);
            </th>
        <th>
            console.log(s2);
            </th>
            <th>
            console.log(fm2);
            </th>
        </tr>
        <tr>
        <th>
                console.console.log(w);
            </th>
        <th>
            console.log(s3);
            </th>
            <th>
            console.log(fm3);
            </th>
        </tr>
        </table>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={900} style={{'background':'#15f4ee',width:1370}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
    
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      
          </Typography>
        </Box>
      </Modal>
      
    </Card>
        </Grid> 
      </Grid>
    </Box>
    </div>
  );
}