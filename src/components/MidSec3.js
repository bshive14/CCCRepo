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
// import MidCard from './PythonMod';
// import MidCard2 from './ITTOOL';
import ITTOOL from './ITTOOL';
import WebDesign from './WebDesign';
import PythonMod from './PythonMod';
import IOT from './IOT';


export default function MidSec3() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12} style={{background:'#D5F0C0'}}>
        <Grid xs={3} style={{'borderColor':"teal"}}>
           
        <Card style={{'borderColor':"teal",'borderBlockEndColor':"teal" }}>
        <img src="Tool.png" height={140} width={"100%"} alt="Py" borderRadius="360px"/>
        <CardContent>
        
        <Typography variant="body2" color="text.secondary">
         <ITTOOL/>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    {/* <MidCard/> */}
        </Grid>
        
        <Grid xs={3}>
            
        <Card >
        <img src="Web.png" height={140} width={"100%"} alt="Tool"/><CardContent>
        
        <Typography variant="body2" color="text.secondary">
          <WebDesign/>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    {/* <MidCard2/> */}
        </Grid>
         <Grid xs={3}>
         <Card >
      <img src="py.png" height={140} width={"100%"} alt="Web"/>
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
        <PythonMod/>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
        </Grid>


        <Grid xs={3}>
         <Card >
      <img src="IOT.png" height={140} width={"100%"} alt="IOT" />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary">
          <IOT/>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
        </Grid>
        

       
       
        
      </Grid>
    </Box>
  );
}