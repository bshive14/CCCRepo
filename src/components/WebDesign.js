import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import BasicModal from './PyArch';
import Webintro from './WebModal/Webintro';
import EditorMod from './WebModal/EditorMod';
import HtmlMod from './WebModal/HtmlMod';
import CssMod from './WebModal/CssMod';
import CssfrmMod from './WebModal/CssfrnMod';
import JavascriptMod from './WebModal/JavascriptMod';
import PhotoeditMod from './WebModal/PhotoeditMod';
import WebpbMod from './WebModal/WebpbMod';
import AngularMod from './WebModal/AngularMod';

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

export default function WebDesign() {
  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{backgroundColor:'#FFFCD1'}}>
          <Typography>Introduction to Internet</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Webintro/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{backgroundColor:'white'}}>
          <Typography> Introduction to Web.</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <Webintro/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style={{backgroundColor:'white'}}>
          <Typography>Editors </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         <EditorMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" style={{backgroundColor:'white'}}>
          <Typography>HTML Basics </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <HtmlMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" style={{backgroundColor:'white'}}>
          <Typography>Cascading Style Sheets (CSS) </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <CssMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" style={{backgroundColor:'white'}}>
          <Typography>CSS Framework</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
       <CssfrmMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header" style={{backgroundColor:'white'}}>
          <Typography>JavaScript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <JavascriptMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header" style={{backgroundColor:'white'}}>
          <Typography>Photo Editor</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <PhotoeditMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header" style={{backgroundColor:'white'}}>
          <Typography>Web Publishing and Browsing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <WebpbMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header" style={{backgroundColor:'white'}}>
          <Typography>Angular Js</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <AngularMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}