import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import BasicModal from './PyArch';
import Intro from './ITModal/Intro';
import OS from './ITModal/OS';
import Word from './ITModal/Word';
import SpreadSheet from './ITModal/SpreadSheet';
import Presentation from './ITModal/Presentation';
import WWW from './ITModal/WWW';
import Social from './ITModal/Social';
import Egov from './ITModal/Egov';
import Fintool from './ITModal/Fintool';
import Cyber from './ITModal/Cyber';

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

export default function ITTOOL() {
  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  return (
    <div>
       <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{backgroundColor:'Aquamarine'}}>
          <Typography>Introduction to Computer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Intro/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{backgroundColor:'white'}}>
          <Typography> Operating System</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <OS/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="paneld-header" style={{backgroundColor:'white'}}>
          <Typography>Word Processing </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Word/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" style={{backgroundColor:'white'}}>
          <Typography>SpreadSheet </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <SpreadSheet/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" style={{backgroundColor:'white'}}>
          <Typography>Presentation </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Presentation/>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" style={{backgroundColor:'white'}}>
          <Typography>Internet and WWW  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <WWW/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header" style={{backgroundColor:'white'}}>
          <Typography>Email and Social Networking</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Social/>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header" style={{backgroundColor:'white'}}>
          <Typography>E-Governance Services </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Egov/>
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header" style={{backgroundColor:'white'}}>
          <Typography>Digital Financial Tools </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Fintool/>
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header" style={{backgroundColor:'white'}}>
          <Typography>Cyber Security  </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Cyber/>
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}