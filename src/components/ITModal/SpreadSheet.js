import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

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
export default function SpreadSheet() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{color:'teal'}}>SpreadSheet</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style} height={300} width={300}style={{'background':'aquamarine'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            SpreadSheet
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            SpreadSheet consists of Workbooks,like Lotus, Excel
            Excel contains set of workbooks.<br/>
            Older books contains 65536<br/>
            The main features of Workbook <br/>
            1:- Data Analytics<br/>
            2:- Pivot Tables<br/>
            3:- Goals and Scenario<br/>
            4:- HLookUp and VLookUp<br/>
            5:- Filters<br/>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}