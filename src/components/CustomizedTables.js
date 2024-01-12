import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name,
  calories,
  fat,
  carbs,
  protein
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomizedTables() {
  let s= localStorage.getItem("q");
    let s2= localStorage.getItem("q2");
    let s3= localStorage.getItem("a3");
    let s4= localStorage.getItem("a4");
    let s5= localStorage.getItem("a5");
    let s6= localStorage.getItem("a6");
    let cr=localStorage.getItem("crop");
    let incr=localStorage.getItem("incrop")
    let resul=localStorage.getItem("resl");
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
const [g,setg]=React.useState(0);
const [g2,setg2]=React.useState(0);
const [g3,setg3]=React.useState(0);
const [g4,setg4]=React.useState(0);
const [g5,setg5]=React.useState(0);
const [g6,setg6]=React.useState(0);
const [g7,setg7]=React.useState(0);
const [g8,setg8]=React.useState(0);
const [g9,setg9]=React.useState(0);
    React.useEffect(()=>{
        setg7(cr);
        setg8(incr)
        setg9(resul);
    for(let i=0;i<s.length-1;i++)
    {
        setg(s);
        setg2(s2);
       
    }
    for(let i=0;i<s3.length-1;i++)
    {
        setg3(s3);
        setg4(s4);
       
    }
    for(let i=0;i<s5.length-1;i++)
    {
        setg5(s5);
        setg6(s6);
       
    } 
    }) 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Questions</StyledTableCell>
            <StyledTableCell align="right">Your Answers</StyledTableCell>
            <StyledTableCell align="right">Correct Answers&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}