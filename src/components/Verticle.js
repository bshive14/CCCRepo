import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Verticle() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
        style={{'borderRadius':'120px'}}
      sx={{ flexGrow: 1, bgcolor: 'white',color:'teal', display: 'flex', height: 224 ,}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, bgcolor:'#f5deb3',color:'green',borderColor: 'green' }
        
    }
      >
        <Tab label="Nielet Notifications" {...a11yProps(0)} style={{'color':'teal','borderRadius':'120px'}} />
        <Tab label="Project Development" {...a11yProps(1)} style={{'color':'teal','borderRadius':'120px'}} />
        <Tab label="Exam Dates" {...a11yProps(2)} style={{'color':'teal','borderRadius':'120px'}}/>
        <Tab label="Practical Date" {...a11yProps(3)}style={{'color':'teal','borderRadius':'120px'}} />
        <Tab label="Affiliated Centred" {...a11yProps(4)} style={{'color':'teal','borderRadius':'120px'}} />
        <Tab label="Govt Requirements" {...a11yProps(5)} style={{'color':'teal','borderRadius':'120px'}} />
        <Tab label="Gallery" {...a11yProps(6)} style={{'color':'white','borderRadius':'120px'}} />
      </Tabs>
      <TabPanel value={value} index={0}>
       <img src="qAI.gif" alt="qAi" width="1200" height="300"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}