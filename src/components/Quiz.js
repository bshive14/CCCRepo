import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
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
export default function Quiz() {
    const [g,setg]=React.useState(false);
    const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    function Handler(){
        setg(true);
      setOpen(true);
    
    }
    const [open1, setOpen1] = React.useState(false);
      const handleClose1 = () => setOpen1(false);
    
    
        function Handler1(){
            // setg(true);
          setOpen1(true);
        
        }
    
  return (
    <div  >
    <Box sx={{ flexGrow: 1 }} style={{"height":700,"width":700}}>
      <Grid container spacing={2} columns={10} style={{background:'white'}}>
        <Grid xs={2} style={{'borderColor':"teal"}}>
           
        <Card style={{"height":400,"width":400}} >
        
          
      
         <button type="button" class="btn btn-success" style={{height:30,width:90,borderRadius:'8px',borderColor:'teal', borderWidth:2,background:'teal', color:'white'}} onClick={Handler1}>Next</button>
         <button type="button" class="btn btn-success" style={{height:30,width:90,borderRadius:'8px',borderColor:'teal', borderWidth:2,background:'teal', color:'white'}} onClick={Handler1}>Previous</button>
         {/* {open1 && <Quiz style={{width:1200,height:1200}}/>} */}
      
            
    </Card>
        </Grid> 
      </Grid>
    </Box>
    </div>
  );
}