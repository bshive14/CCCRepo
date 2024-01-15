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

function getResult(){
  
    
      {localStorage.getItem("fz")};
    
  
}
  
  



  return (
    <div >
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} columns={10} style={{background:'white', width:1340,height:980,marginTop:-20}}>
        <Grid xs={2} style={{'borderColor':"teal"}}>
 
        <Card style={{"borderRadius":"0px","height":950,"width":1340}} >
        <table border="2" align="center" style={{width:800,marginLeft:30}}>
      <tr>
<th colspan="24" style={{fontFamily:'Times New Roman',color:'teal',fontSize:'18pt', textAlign:'center'}}>
Course on Computer Concepts (CCC) Result:
</th>
</tr>
<tr style={{fontFamily:'Times New Roman',color:'teal',fontSize:'18pt', textAlign:'center'}}>
  <th>Q</th>
  <th>Ans</th> 
  <th>Q</th>
  <th>Ans</th>
  <th>Q</th>
  <th>Ans</th> 
  <th>Q</th>
  <th>Ans</th> 
  <th>Q</th>
  <th>Ans</th> 
  <th>Q</th>
  <th>Ans</th>
  <th>Q</th>
  <th>Ans</th> 
  <th>Q</th>
  <th>Ans</th>
  <th>Q</th>
  <th>Ans</th> 
  <th>Q</th>
  <th>Ans</th>
  </tr>
        
<tr>
<th>
  {
    localStorage.getItem("fz")[0]
  }
  <br/>
  {
    localStorage.getItem("fz")[2]
  }
  <br/>
  {
    localStorage.getItem("fz")[4]
  }
  <br/>
  {
    localStorage.getItem("fz")[6]
  }
  <br/>
  {
    localStorage.getItem("fz")[8]
  }
  <br/>
  {
    localStorage.getItem("fz")[10]
  }
  <br/>
  {
    localStorage.getItem("fz")[12]
  }
  <br/>
  {
    localStorage.getItem("fz")[14]
  }
  <br/>
  {
    localStorage.getItem("fz")[16]
  }
 <br/>
 
</th>

<th>
  
  {
    {NaN}?localStorage.getItem("fz2")[0]:"Left"
  }
  <br/>
  {
    {NaN}?localStorage.getItem("fz2")[2]:"Left"
  }
  <br/>
  {
    {NaN}?localStorage.getItem("fz2")[4]:"Left"
  }
  <br/>
  {
    {NaN}?localStorage.getItem("fz2")[6]:"Left"
  }
  <br/>
  {
    {NaN}?localStorage.getItem("fz2")[8]:"Left"
  }
  <br/>
  {
    {NaN}?localStorage.getItem("fz2")[10]:"Left"
  }
  <br/>
  {
    {NaN}?localStorage.getItem("fz2")[12]:"Left"
  }
  <br/>
  {
    {NaN}?localStorage.getItem("fz2")[14]:"Left"
  }
  <br/>
  {
    {NaN}?localStorage.getItem("fz2")[16]:"Left"
  }
 
</th>


<th>
  {localStorage.getItem("fz3")[0]} {localStorage.getItem("fz3")[1]}
  <br/>
  {localStorage.getItem("fz3")[3]} {localStorage.getItem("fz3")[4]}
  <br/>
  {localStorage.getItem("fz3")[6]} {localStorage.getItem("fz3")[7]}
  <br/>
  {localStorage.getItem("fz3")[9]} {localStorage.getItem("fz3")[10]}
  <br/>
  {localStorage.getItem("fz3")[12]} {localStorage.getItem("fz3")[13]}
  <br/>
  {localStorage.getItem("fz3")[15]} {localStorage.getItem("fz3")[16]}
  <br/>
  {localStorage.getItem("fz3")[18]} {localStorage.getItem("fz3")[19]}
  <br/>
  {localStorage.getItem("fz3")[21]} {localStorage.getItem("fz3")[22]}
  <br/>
  {localStorage.getItem("fz3")[24]} {localStorage.getItem("fz3")[25]}

</th>
<th>
{localStorage.getItem("fz4")[0]}
  <br/>
  {localStorage.getItem("fz4")[2]} 
  <br/>
  {localStorage.getItem("fz4")[4]} 
  <br/>
  {localStorage.getItem("fz4")[6]} 
  <br/>
  {localStorage.getItem("fz4")[8]}
  <br/>
  {localStorage.getItem("fz4")[10]} 
  <br/>
  {localStorage.getItem("fz4")[12]} 
  <br/>
  {localStorage.getItem("fz4")[14]} 
  <br/>
  {localStorage.getItem("fz4")[16]} 

</th>


<th>
  {localStorage.getItem("fz3")[27]} {localStorage.getItem("fz3")[28]}
  <br/>
  {localStorage.getItem("fz3")[30]} {localStorage.getItem("fz3")[31]}
  <br/>
  {localStorage.getItem("fz3")[33]} {localStorage.getItem("fz3")[34]}
  <br/>
  {localStorage.getItem("fz3")[36]} {localStorage.getItem("fz3")[37]}
  <br/>
  {localStorage.getItem("fz3")[39]} {localStorage.getItem("fz3")[40]}
  <br/>
  {localStorage.getItem("fz3")[42]} {localStorage.getItem("fz3")[43]}
  <br/>
  {localStorage.getItem("fz3")[45]} {localStorage.getItem("fz3")[46]}
  <br/>
  {localStorage.getItem("fz3")[48]} {localStorage.getItem("fz3")[49]}
  <br/>
  {localStorage.getItem("fz3")[51]} {localStorage.getItem("fz3")[52]}

</th>
<th>
{localStorage.getItem("fz4")[18]}
  <br/>
  {localStorage.getItem("fz4")[20]} 
  <br/>
  {localStorage.getItem("fz4")[22]} 
  <br/>
  {localStorage.getItem("fz4")[24]} 
  <br/>
  {localStorage.getItem("fz4")[26]}
  <br/>
  {localStorage.getItem("fz4")[28]} 
  <br/>
  {localStorage.getItem("fz4")[30]} 
  <br/>
  {localStorage.getItem("fz4")[32]} 
  <br/>
  {localStorage.getItem("fz4")[34]} 

</th>


<th>
  {localStorage.getItem("fz3")[54]} {localStorage.getItem("fz3")[55]}
  <br/>
  {localStorage.getItem("fz3")[57]} {localStorage.getItem("fz3")[58]}
  <br/>
  {localStorage.getItem("fz3")[60]} {localStorage.getItem("fz3")[61]}
  <br/>
  {localStorage.getItem("fz3")[63]} {localStorage.getItem("fz3")[64]}
  <br/>
  {localStorage.getItem("fz3")[66]} {localStorage.getItem("fz3")[67]}
  <br/>
  {localStorage.getItem("fz3")[69]} {localStorage.getItem("fz3")[70]}
  <br/>
  {localStorage.getItem("fz3")[72]} {localStorage.getItem("fz3")[73]}
  <br/>
  {localStorage.getItem("fz3")[75]} {localStorage.getItem("fz3")[76]}
  <br/>
  {localStorage.getItem("fz3")[78]} {localStorage.getItem("fz3")[79]}

</th>
<th>
{localStorage.getItem("fz4")[36]}
  <br/>
  {localStorage.getItem("fz4")[38]} 
  <br/>
  {localStorage.getItem("fz4")[40]} 
  <br/>
  {localStorage.getItem("fz4")[42]} 
  <br/>
  {localStorage.getItem("fz4")[44]}
  <br/>
  {localStorage.getItem("fz4")[46]} 
  <br/>
  {localStorage.getItem("fz4")[48]} 
  <br/>
  {localStorage.getItem("fz4")[50]} 
  <br/>
  {localStorage.getItem("fz4")[52]} 

</th>


<th>
  {localStorage.getItem("fz3")[81]} {localStorage.getItem("fz3")[82]}
  <br/>
  {localStorage.getItem("fz3")[84]} {localStorage.getItem("fz3")[85]}
  <br/>
  {localStorage.getItem("fz3")[87]} {localStorage.getItem("fz3")[88]}
  <br/>
  {localStorage.getItem("fz3")[90]} {localStorage.getItem("fz3")[91]}
  <br/>
  {localStorage.getItem("fz3")[93]} {localStorage.getItem("fz3")[94]}
  <br/>
  {localStorage.getItem("fz3")[96]} {localStorage.getItem("fz3")[97]}
  <br/>
  {localStorage.getItem("fz3")[99]} {localStorage.getItem("fz3")[100]}
  <br/>
  {localStorage.getItem("fz3")[102]} {localStorage.getItem("fz3")[103]}
  <br/>
  {localStorage.getItem("fz3")[105]} {localStorage.getItem("fz3")[106]}

</th>
<th>
{localStorage.getItem("fz4")[54]}
  <br/>
  {localStorage.getItem("fz4")[56]} 
  <br/>
  {localStorage.getItem("fz4")[58]} 
  <br/>
  {localStorage.getItem("fz4")[60]} 
  <br/>
  {localStorage.getItem("fz4")[62]}
  <br/>
  {localStorage.getItem("fz4")[64]} 
  <br/>
  {localStorage.getItem("fz4")[66]} 
  <br/>
  {localStorage.getItem("fz4")[68]} 
  <br/>
  {localStorage.getItem("fz4")[70]} 

</th>


<th>
  {localStorage.getItem("fz3")[108]} {localStorage.getItem("fz3")[109]}
  <br/>
  {localStorage.getItem("fz3")[111]} {localStorage.getItem("fz3")[112]}
  <br/>
  {localStorage.getItem("fz3")[114]} {localStorage.getItem("fz3")[115]}
  <br/>
  {localStorage.getItem("fz3")[117]} {localStorage.getItem("fz3")[118]}
  <br/>
  {localStorage.getItem("fz3")[120]} {localStorage.getItem("fz3")[121]}
  <br/>
  {localStorage.getItem("fz3")[123]} {localStorage.getItem("fz3")[124]}
  <br/>
  {localStorage.getItem("fz3")[126]} {localStorage.getItem("fz3")[127]}
  <br/>
  {localStorage.getItem("fz3")[129]} {localStorage.getItem("fz3")[130]}
  <br/>
  {localStorage.getItem("fz3")[132]} {localStorage.getItem("fz3")[133]}

</th>
<th>
{localStorage.getItem("fz4")[72]}
  <br/>
  {localStorage.getItem("fz4")[74]} 
  <br/>
  {localStorage.getItem("fz4")[76]} 
  <br/>
  {localStorage.getItem("fz4")[78]} 
  <br/>
  {localStorage.getItem("fz4")[80]}
  <br/>
  {localStorage.getItem("fz4")[82]} 
  <br/>
  {localStorage.getItem("fz4")[84]} 
  <br/>
  {localStorage.getItem("fz4")[86]} 
  <br/>
  {localStorage.getItem("fz4")[88]} 

</th>


<th>
  {localStorage.getItem("fz3")[135]} {localStorage.getItem("fz3")[136]}
  <br/>
  {localStorage.getItem("fz3")[138]} {localStorage.getItem("fz3")[139]}
  <br/>
  {localStorage.getItem("fz3")[141]} {localStorage.getItem("fz3")[142]}
  <br/>
  {localStorage.getItem("fz3")[144]} {localStorage.getItem("fz3")[145]}
  <br/>
  {localStorage.getItem("fz3")[147]} {localStorage.getItem("fz3")[148]}
  <br/>
  {localStorage.getItem("fz3")[150]} {localStorage.getItem("fz3")[151]}
  <br/>
  {localStorage.getItem("fz3")[153]} {localStorage.getItem("fz3")[154]}
  <br/>
  {localStorage.getItem("fz3")[156]} {localStorage.getItem("fz3")[157]}
  <br/>
  {localStorage.getItem("fz3")[159]} {localStorage.getItem("fz3")[160]}

</th>
<th>
{localStorage.getItem("fz4")[90]}
  <br/>
  {localStorage.getItem("fz4")[92]} 
  <br/>
  {localStorage.getItem("fz4")[94]} 
  <br/>
  {localStorage.getItem("fz4")[96]} 
  <br/>
  {localStorage.getItem("fz4")[98]}
  <br/>
  {localStorage.getItem("fz4")[100]} 
  <br/>
  {localStorage.getItem("fz4")[102]} 
  <br/>
  {localStorage.getItem("fz4")[104]} 
  <br/>
  {localStorage.getItem("fz4")[106]} 

</th>


<th>
  {localStorage.getItem("fz3")[162]} {localStorage.getItem("fz3")[163]}
  <br/>
  {localStorage.getItem("fz3")[165]} {localStorage.getItem("fz3")[166]}
  <br/>
  {localStorage.getItem("fz3")[168]} {localStorage.getItem("fz3")[169]}
  <br/>
  {localStorage.getItem("fz3")[171]} {localStorage.getItem("fz3")[172]}
  <br/>
  {localStorage.getItem("fz3")[174]} {localStorage.getItem("fz3")[175]}
  <br/>
  {localStorage.getItem("fz3")[177]} {localStorage.getItem("fz3")[178]}
  <br/>
  {localStorage.getItem("fz3")[180]} {localStorage.getItem("fz3")[181]}
  <br/>
  {localStorage.getItem("fz3")[183]} {localStorage.getItem("fz3")[184]}
  <br/>
  {localStorage.getItem("fz3")[186]} {localStorage.getItem("fz3")[187]}

</th>
<th>
{localStorage.getItem("fz4")[108]}
  <br/>
  {localStorage.getItem("fz4")[110]} 
  <br/>
  {localStorage.getItem("fz4")[112]} 
  <br/>
  {localStorage.getItem("fz4")[114]} 
  <br/>
  {localStorage.getItem("fz4")[116]}
  <br/>
  {localStorage.getItem("fz4")[118]} 
  <br/>
  {localStorage.getItem("fz4")[120]} 
  <br/>
  {localStorage.getItem("fz4")[122]} 
  <br/>
  {localStorage.getItem("fz4")[124]} 

</th>


<th>
  {localStorage.getItem("fz3")[189]} {localStorage.getItem("fz3")[190]}
  <br/>
  {localStorage.getItem("fz3")[192]} {localStorage.getItem("fz3")[193]}
  <br/>
  {localStorage.getItem("fz3")[195]} {localStorage.getItem("fz3")[196]}
  <br/>
  {localStorage.getItem("fz3")[198]} {localStorage.getItem("fz3")[199]}
  <br/>
  {localStorage.getItem("fz3")[201]} {localStorage.getItem("fz3")[202]}
  <br/>
  {localStorage.getItem("fz3")[204]} {localStorage.getItem("fz3")[205]}
  <br/>
  {localStorage.getItem("fz3")[207]} {localStorage.getItem("fz3")[208]}
  <br/>
  {localStorage.getItem("fz3")[210]} {localStorage.getItem("fz3")[211]}
  <br/>
  {localStorage.getItem("fz3")[213]} {localStorage.getItem("fz3")[214]}

</th>
<th>
{localStorage.getItem("fz4")[126]}
  <br/>
  {localStorage.getItem("fz4")[128]} 
  <br/>
  {localStorage.getItem("fz4")[130]} 
  <br/>
  {localStorage.getItem("fz4")[132]} 
  <br/>
  {localStorage.getItem("fz4")[134]}
  <br/>
  {localStorage.getItem("fz4")[136]} 
  <br/>
  {localStorage.getItem("fz4")[138]} 
  <br/>
  {localStorage.getItem("fz4")[140]} 
  <br/>
  {localStorage.getItem("fz4")[142]} 

</th>


<th>
  {localStorage.getItem("fz3")[216]} {localStorage.getItem("fz3")[217]}
  <br/>
  {localStorage.getItem("fz3")[219]} {localStorage.getItem("fz3")[220]}
  <br/>
  {localStorage.getItem("fz3")[222]} {localStorage.getItem("fz3")[223]}
  <br/>
  {localStorage.getItem("fz3")[225]} {localStorage.getItem("fz3")[226]}
  <br/>
  {localStorage.getItem("fz3")[228]} {localStorage.getItem("fz3")[229]}
  <br/>
  {localStorage.getItem("fz3")[231]} {localStorage.getItem("fz3")[232]}
  <br/>
  {localStorage.getItem("fz3")[234]} {localStorage.getItem("fz3")[235]}
  <br/>
  {localStorage.getItem("fz3")[237]} {localStorage.getItem("fz3")[238]}
  <br/>
  {localStorage.getItem("fz3")[240]} {localStorage.getItem("fz3")[241]}

</th>
<th>
{localStorage.getItem("fz4")[144]}
  <br/>
  {localStorage.getItem("fz4")[146]} 
  <br/>
  {localStorage.getItem("fz4")[148]} 
  <br/>
  {localStorage.getItem("fz4")[150]} 
  <br/>
  {localStorage.getItem("fz4")[152]}
  <br/>
  {localStorage.getItem("fz4")[154]} 
  <br/>
  {localStorage.getItem("fz4")[156]} 
  <br/>
  {localStorage.getItem("fz4")[158]} 
  <br/>
  {localStorage.getItem("fz4")[160]} 

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