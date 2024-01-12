import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CropPortrait } from '@mui/icons-material';
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
    let cr=localStorage.getItem("crop");
    let incr=localStorage.getItem("incrop")
    let resul=localStorage.getItem("resl");
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
const [g,setg]=React.useState(0);
const [g2,setg2]=React.useState(0);
const [g3,setg3]=React.useState(0);
const [g4,setg4]=React.useState(0);
const [g5,setg5]=React.useState(0);
const [g6,setg6]=React.useState(0);
const [g7,setg7]=React.useState(0);
const [g8,setg8]=React.useState(0);
const [g9,setg9]=React.useState(0);
    React.useEffect(()=>{
        setg7(cr);
        setg8(incr)
        setg9(resul);
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
      <Grid container spacing={2} columns={10} style={{background:'white', width:1340,height:980,marginTop:-20}}>
        <Grid xs={2} style={{'borderColor':"teal"}}>
 
        <Card style={{"borderRadius":"0px","height":950,"width":1340}} >
        <table border="0" align="center" style={{width:800,marginLeft:30}}>
      <tr>
<th colspan="4" style={{fontFamily:'Times New Roman',color:'teal',fontSize:'18pt', textAlign:'center'}}>
Course on Computer Concepts (CCC)<br/> Result: {g9}
</th>
</tr>
      <tr style={{fontFamily:'Times New Roman',color:'teal',fontSize:'18pt', textAlign:'center'}}>
        <th>Attempted questions</th>
            <th>Your choices</th> 
            <th>Correct Answer</th>
            <th>Incorrect Answer</th>
        </tr>
        <tr>
           <th>
            {g},{g3},{g5}
            </th>
            <th>
           {g2},{g4},{g6}
            </th>
            <th>

            </th>
            <th>
      {g7}
            </th>
            <th>
{g8}
            </th>
        </tr>
        <tr>
          <th>
            
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