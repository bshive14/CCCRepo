import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import BasicModal from './PyArch';
import AlgoMod from './PythonModal/AlgoMod.js';
import PythonProgMod from './PythonModal/PythonProgMod.js';
import PythonIntroMod from './PythonModal/pythonIntroMod.js';
import OperatorMod from './PythonModal/OperatorMod.js';
import DatatypeMod from './PythonModal/DatatypeMod.js';
import FunctionMod from './PythonModal/FunctionMod.js';
import FileProMod from './PythonModal/FileProMod.js.js';
import ModuleMod from './PythonModal/ModuleMod.js';
import NumPyMod from './PythonModal/NumPyMod.js';
import Generators from './PythonModal/GeneratorMod.js';
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

export default function PythonMod() {
  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style={{backgroundColor:'Aquamarine'}}>
          <Typography>Introduction to Programming</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <PythonProgMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style={{backgroundColor:'white'}}>
          <Typography>Algorithm and Flowchart</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <AlgoMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style={{backgroundColor:'white'}}>
          <Typography>Introduction to Python</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <PythonIntroMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" style={{backgroundColor:'white'}}>
          <Typography>Operators,Expressions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <OperatorMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" style={{backgroundColor:'white'}}>
          <Typography>Sequence data types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <DatatypeMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" style={{backgroundColor:'white'}}>
          <Typography>Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FunctionMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>




      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header" style={{backgroundColor:'white'}}>
          <Typography>File Processing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <FileProMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header" style={{backgroundColor:'white'}}>
          <Typography>Modules</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
            <ModuleMod/>
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header" style={{backgroundColor:'white'}}>
          <Typography>NumPy Basics</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <NumPyMod/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10sd-content" id="panel10d-header" style={{backgroundColor:'white'}}>
          <Typography>Generators and Iterators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Generators/>
          </Typography>
        </AccordionDetails>
      </Accordion>


    </div>
  );
}