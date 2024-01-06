import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import IntroIOT from './IOTModal/IntroIOT';
import Security from './IOTModal/Security';
import SoftSkill from './IOTModal/SoftSkill';
import Microcontrollers from './IOTModal/Microcontroller';
import Microprocessor from './IOTModal/Microprocessor';
import Protocol from './IOTModal/Protocol';
import Things from './IOTModal/Things';
import Sensor from './IOTModal/Sensors';
import Servercom from './IOTModal/Servercom';
import Build from './IOTModal/Build';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function IOT() {
  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{backgroundColor:'#FFFCD1'}}>
          <Typography>Introduction to IoT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <IntroIOT/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{backgroundColor:'white'}}>
          <Typography> Things and Connections</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Things/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style={{backgroundColor:'white'}}>
          <Typography>Sensors and Actuators  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Sensor/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" style={{backgroundColor:'white'}}>
          <Typography>Building IoT Applications </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <Build/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" style={{backgroundColor:'white'}}>
          <Typography>Security and Ecosystem </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <Security/>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" style={{backgroundColor:'white'}}>
          <Typography>Soft skills </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <SoftSkill/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header" style={{backgroundColor:'white'}}>
          <Typography>Application of Microcontrollers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
    <Microcontrollers/>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header" style={{backgroundColor:'white'}}>
          <Typography>MicroProcessors  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Microprocessor/>
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header" style={{backgroundColor:'white'}}>
          <Typography>Server communication of IOT </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Servercom/>
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header" style={{backgroundColor:'white'}}>
          <Typography>Protocols of IOT  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Protocol/>
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}