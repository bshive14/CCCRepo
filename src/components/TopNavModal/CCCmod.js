import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import Quiz from '../Quiz';
// import CCCQuizMod from '../CCCQuiz';
import CCCQuiz from '../CCCQuiz';
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
  
export default function CCCmod() {
  // let textInput=React.createRef();
    const [g,setg]=React.useState(false);
    const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState(" ");
  // const [phone, setPhone] = React.useState("");
    function Handler(){
        setg(true);
      setOpen(true);
    
    }
    const [open1, setOpen1] = React.useState(false);
      // const handleClose1 = () => setOpen1(false);
    
    
        function Handler1(e){
            // setg(true);
          setOpen1(true);
        let t=document.getElementById("bt1");
        t.style.display='none';
        // let elm=document.getElementById("nm");
        console.log(name);
        localStorage.setItem("name",e.target.value);
        console.log("local",localStorage.getItem("name"));
        // let ph1=document.getElementById('ph');
        // setName(nm1);

        // setPhone(ph1);
        

        // localStorage.setItem('Name',nm1);
        // localStorage.setItem('Phone',ph1);
     
        }
    React.useEffect(()=>{
      localStorage.setItem("name",name);
      console.log("Name",localStorage.getItem("name"));
    })
  return (
    <div >
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={10} style={{background:'#D5F0C0'}}>
        <Grid xs={2} style={{'borderColor':"teal"}}>
           
        <Card style={{"borderRadius":"360px","height":90,"width":90}} >
        <img src="CCC.png" height={90} width={90} alt="Tool" borderRadius="360px" onClick={Handler} />
        {g &&
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={760} style={{'background':'#15f4ee',width:1370}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          CCC Exam <br/>
          {open1 && <CCCQuiz/>}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          
          Instructions for CCC exams<br/>
         1:- Read the question carefully.<br/>
         2:- There will be 100 questions.<br/>
         3:- There will be 60 minutes for 100 questions.<br/>
         4:- After 60 minutes paper will be submitted.<br/>
         Best of Luck!!<br/>
         <br/>
         <table border={0} style={{align:'right',width:300}}>
        <tr>
          
          <th colSpan={2}> Enter your detail to start your exam</th>
        </tr>
        
        <tr>
         
            <td align='right'>Name</td>
            <td><input placeholder="uname" id='nm' onChange={(e)=>setName(e.target.value)}/></td>
        </tr>
        <tr>
         
            <td align='right'>Contact No</td>
            <td><input placeholder="uname" id='ph' onChange={(e)=>localStorage.setItem("name",e.target.value)}/></td>
        </tr>
        <tr>
         <th>

         </th>
        <td><button type="button" class="btn btn-success" style={{height:30,width:90,borderRadius:'8px',borderColor:'teal', borderWidth:2,background:'teal', color:'white',align:'center'}} onClick={Handler1} id="bt1" >Start Exam</button>
        </td>
        </tr>
        </table>
         <br/>
         <br/>
        
          </Typography>
        </Box>
      </Modal>}
      
    </Card>
        </Grid> 
      </Grid>
    </Box>
    </div>
  );
}