import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import { CropPortrait } from '@mui/icons-material';
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
     let z1=localStorage.getItem("q");
     let z2=localStorage.getItem("q2");
     let z3=localStorage.getItem("a3");
     let z4=localStorage.getItem("a4");
let fz=[];
let fz2=[];
let fz3=[];
let fz4=[];
let item=0;
let k1=[];



    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);


    React.useEffect(()=>{

      console.log("q1",z1);
      console.log("a1",z2);
      console.log("q2",z3);
      console.log("a2",z4);

      let h=0;
      for(let i=0;i<=z1.length-1;i++)
      {
        if(z1[i]!=',')
        {
        console.log("d1",z1[i],z2[i]);
        fz[h]=z1[i];
        fz2[h]=z2[i];
        k1[h]=fz[h];
        // fz[h+1]=z2[i];
        h=h+1;
        }
      }
let s=0,t=1,m=0;
      for(let i=0;i<=z3.length-1;i++)
      {
        
        // console.log("d2",z3[i],z4[m]);
        fz3[item]=(z3[s]+z3[t]);
        
        fz4[item]=z4[m];
        
        
        item=item+1;
        s=s+3;
        t=t+3;
        m=m+2;
       
      }

for(let i=0;i<h;i++)
{
  console.log("fres",fz3[i],fz4[i])
}






let temp=0,temp2=0;
for(let i=0;i<=h;i++)
{
  for(let j=i+1;j<h;j++)
  {
    if(fz[i]>fz[j])
    {
      temp=fz[i];
      fz[i]=fz[j];
      fz[j]=temp;

      temp2=fz2[i];
      fz2[i]=fz2[j];
      fz2[j]=temp2;

    }
  }
}

for(let i=0;i<=h;i++)
{
  console.log("sorted",fz[i],fz2[i]);
}





let temp3=0,temp4=0;
for(let i=0;i<=h;i++)
{
  for(let j=i+1;j<h;j++)
  {
    if(fz3[i]>fz3[j])
    {
      temp3=fz3[i];
      fz3[i]=fz3[j];
      fz3[j]=temp3;

      temp4=fz4[i];
      fz4[i]=fz4[j];
      fz4[j]=temp4;

    }
  }
}

for(let i=0;i<=h;i++)
{
  console.log("sorted",fz3[i],fz4[i]);
}
 

localStorage.setItem("fz",fz);
localStorage.setItem("fz2",fz2);
localStorage.setItem("fz3",fz3);
localStorage.setItem("fz4",fz4);

// showresult();

    });


  
  



  return (
    <div >
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} columns={10} style={{background:'white', width:1340,height:980,marginTop:-20}}>
        <Grid xs={2} style={{'borderColor':"teal"}}>
 
        <Card style={{"borderRadius":"0px","height":950,"width":1340}} >
        <table border="0" align="center" style={{width:800,marginLeft:30}}>
      <tr>
<th colspan="4" style={{fontFamily:'Times New Roman',color:'teal',fontSize:'18pt', textAlign:'center'}}>
Course on Computer Concepts (CCC)<br/> Result:
</th>
</tr>
      <tr style={{fontFamily:'Times New Roman',color:'teal',fontSize:'18pt', textAlign:'center'}}>
        <th>Attempted questions</th>
            <th>Your Answer</th> 
            <th>Attempted questions</th>
            <th>Your Answer</th> 
        </tr>
        
<tr>
<th>{localStorage.getItem("fz")[0]}

</th>
<th>{localStorage.getItem("fz2")[0]}

</th>

<th>{localStorage.getItem("fz3")[0]}{localStorage.getItem("fz3")[1]}

</th>
<th>{localStorage.getItem("fz4")[0]}

</th>



</tr>
<tr>
<th>{localStorage.getItem("fz")[2]}

</th>
<th>{localStorage.getItem("fz2")[2]}

</th>
<th>{localStorage.getItem("fz3")[3]}{localStorage.getItem("fz3")[4]}

</th>
<th>{localStorage.getItem("fz4")[2]}

</th>

</tr>
<tr>
<th>{localStorage.getItem("fz")[4]}

</th>
<th>{localStorage.getItem("fz2")[4]}

</th>
<th>{localStorage.getItem("fz3")[6]}{localStorage.getItem("fz3")[7]}

</th>
<th>{localStorage.getItem("fz4")[4]}

</th>



</tr>
<tr>
<th>{localStorage.getItem("fz")[6]}

</th>
<th>{localStorage.getItem("fz2")[6]}

</th>
<th>{localStorage.getItem("fz3")[9]}{localStorage.getItem("fz3")[10]}

</th>
<th>{localStorage.getItem("fz4")[6]}

</th>

</tr>
<tr>
<th>{localStorage.getItem("fz")[8]}

</th>
<th>{localStorage.getItem("fz2")[8]}

</th>
<th>{localStorage.getItem("fz3")[12]}{localStorage.getItem("fz3")[13]}

</th>
<th>{localStorage.getItem("fz4")[8]}

</th>


</tr>
<tr>
<th>{localStorage.getItem("fz")[10]}

</th>
<th>{localStorage.getItem("fz2")[10]}

</th>
<th>{localStorage.getItem("fz3")[15]}{localStorage.getItem("fz3")[16]}

</th>
<th>{localStorage.getItem("fz4")[10]}

</th>

</tr>
<tr>
<th>{localStorage.getItem("fz")[12]}

</th>
<th>{localStorage.getItem("fz2")[12]}

</th>
<th>{localStorage.getItem("fz3")[18]}{localStorage.getItem("fz3")[19]}

</th>
<th>{localStorage.getItem("fz4")[12]}

</th>

</tr>
<tr>
<th>{localStorage.getItem("fz")[14]}

</th>
<th>{localStorage.getItem("fz2")[14]}

</th>
<th>{localStorage.getItem("fz3")[21]}{localStorage.getItem("fz3")[22]}

</th>
<th>{localStorage.getItem("fz4")[14]}

</th>

</tr>
<tr>
<th>{localStorage.getItem("fz")[16]}

</th>
<th>{localStorage.getItem("fz2")[16]}

</th>
<th>{localStorage.getItem("fz3")[24]}{localStorage.getItem("fz3")[25]}

</th>
<th>{localStorage.getItem("fz4")[16]}

</th>

</tr>
<tr>
<th>{localStorage.getItem("fz")[18]}

</th>
<th>{localStorage.getItem("fz2")[18]}

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