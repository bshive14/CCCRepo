import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import Qp from './Qp';


export default function Quizcard() {
  let data1=true;
  let q=0;
  let op=[0][0];
  let op1=[0][0];
  let op2=[0][0];
  let op3=[0][0];
  return (
    <div>
        
    <Card sx={{ maxWidth:'150%'}} style={{height:628,textAlign:'center',background:'white',marginLeft:-25,marginRight:-25}}>
    
      <CardContent alignItems={'centre'}>
        <Typography gutterBottom variant="h5" component="div" alignItems={'centre'}>
          {/* Question:1 */}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        
{/* <Badge badgeContent={4} color="success"> */}
  {/* <label style={{fontSize:'22pt',color:'teal'}}><strong>What is the full form of SIM</strong> </label> */}
{/* </Badge> */}
        </Typography>
      </CardContent>
      <CardActions>
        <Qp data1 />
      
      </CardActions>
    </Card>
    </div>
  );
}



