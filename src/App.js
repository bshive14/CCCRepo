import './App.css';
import Footer from './components/Footer';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MidSec3 from './components/MidSec3';
import CCCmod from './components/TopNavModal/CCCmod';
import ITMod from './components/TopNavModal/ITMod';
import Webmod from './components/TopNavModal/Webmod';
import Pymod from './components/TopNavModal/Pymod';
import IOTmod from './components/TopNavModal/IOTmod';
import { RankMod } from './components/RankMod';



 export default function App(props) {
  return (
    <div className="App" style={{"backgroundColor":'HEX #6600ff'}} >
      <div>
     {/* <Navbar/> */}
     </div>
<div>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={10} style={{background:'#D5F0C0'}}>
      <Grid xs={2} style={{'borderColor':"teal"}}>
          <ITMod/>
         </Grid>  
         <Grid xs={2} style={{'borderColor':"teal"}}>
         <Webmod/>
         </Grid> 
         <Grid xs={2} style={{'borderColor':"teal"}}>
         <Pymod/>
         </Grid> 
         <Grid xs={2} style={{'borderColor':"teal"}}>
         <IOTmod/>
         </Grid> 
        <Grid xs={2} style={{'borderColor':"teal"}}>
          <CCCmod/>
         </Grid> 
        </Grid>
    </Box>
   
   {/* <CCCQuiz/> */}
  {/* <MidSec/> */}
</div>
<div>
<img src="es.gif" alt="qAi" width="35%" height="300"/>
<img src="ams.gif" alt="qAi" width="30%" height="300"/>
<img src="es.gif" alt="qAi" width="35%" height="300"/>
</div>
<div>
   <RankMod/>
</div>
<div>
{/* <Quotes/> */}

<MidSec3/>
</div>

<div>
{/* <CustomizedTables/> */}

  </div>

     <div>
<Footer/>
     </div>



     {/* <button className="success" onClick={props.increment}>Multiply</button>
     {props.data} */}
          </div>



  );
}


// const mapStateToProps = state=>{
//   return{
//     data:state.landing.data,
//   }
// }
// const mapDispatchToProps =dispatch => {
//   return{
//     increment:()=>dispatch(increment())
//   }
  
// };
// export default connect(mapStateToProps,mapDispatchToProps)(App)