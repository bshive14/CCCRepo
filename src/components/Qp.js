import * as React from 'react';
import { sendq } from '../actions/sendquestion';
import { connect } from 'react-redux';
import qreducer from '../reducers/qreducer';
import { questions } from './q';
 import { options } from './opt';
import { useState } from 'react';
let d=0;

let q=[]
 function Qp(props) {
 let f=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
  51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,	100
 ];

  const [data, getdata]=useState(false)
  const [data1, getdata1]=useState(0)
  const [data2, getdata2]=useState(false)
  const [data3, getdata3]=useState(0)

  const [op, setop]=useState(0)
  const [op2, setop2]=useState(0)
  const [op3, setop3]=useState(0)
  const [op4, setop4]=useState(0)
  const [name, setname]=useState(" ")
  const [result,setresult]=useState(0); 

 
function getQ(){
   let e=0;
 
getdata(true);
getdata2(false);
getdata1(questions[d]);
getdata2(f[d]);
setop(options[d][0])
setop2(options[d][(e+1)])
setop3(options[d][(e+2)])
setop4(options[d][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
// console.log("d..",options[d][d+3])
 d=d+1;
 e=e+1;
}
function getP(){
  let e=0;
  d=d-1;
getdata(true);
getdata1(questions[d]);
// getdata2(f[d]);
setop(options[d][0])
setop2(options[d][1])
setop3(options[d][2])
setop4(options[d][3])
// e=e+1;
}


React.useEffect(()=>{
  let e=0;
  // getdata2(true);
  // getdata3(questions[d]);
  // // getdata2(f[d]);
  // setop11(options[0][0])
  // setop12(options[0][(e+1)])
  // setop13(options[0][(e+2)])
  // setop14(options[0][(e+3)])
get1();



  setname(localStorage.getItem("name"));
  setresult(1);
  localStorage.setItem("result",result);
  
},[1])

function get1(){
  let e=0;
  d=1;
getdata(true);
getdata2(false);
getdata1(questions[0]);
getdata2(f[1]);
setop(options[0][0])
setop2(options[0][(e+1)])
setop3(options[0][(e+2)])
setop4(options[0][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}

function get2(){
  let e=0;
  d=2;
getdata(true);
getdata1(questions[1]);
getdata2(f[2]);
setop(options[1][0])
setop2(options[1][(e+1)])
setop3(options[1][(e+2)])
setop4(options[1][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get3(){
  let e=0;
  d=3;
getdata(true);
getdata1(questions[2]);
getdata2(f[3]);
setop(options[2][0])
setop2(options[2][(e+1)])
setop3(options[2][(e+2)])
setop4(options[2][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get4(){
  let e=0;
  d=4;
getdata(true);
getdata1(questions[3]);
getdata2(f[4]);
setop(options[3][0])
setop2(options[3][(e+1)])
setop3(options[3][(e+2)])
setop4(options[3][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get5(){
  let e=0;
  d=5;
getdata(true);
getdata1(questions[4]);
getdata2(f[5]);
setop(options[(f[4])][0])
setop2(options[(f[4])][(e+1)])
setop3(options[(f[4])][(e+2)])
setop4(options[(f[4])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get6(){
  let e=0;
  d=6;
getdata(true);
getdata1(questions[5]);
getdata2(f[d]);
setop(options[(f[5])][0])
setop2(options[(f[5])][(e+1)])
setop3(options[(f[5])][(e+2)])
setop4(options[(f[5])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get7(){
  let e=0;
  d=7;
getdata(true);
getdata1(questions[6]);
getdata2(f[d]);
setop(options[(f[6])][0])
setop2(options[(f[6])][(e+1)])
setop3(options[(f[6])][(e+2)])
setop4(options[(f[6])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get8(){
  let e=0;
  d=8;
getdata(true);
getdata1(questions[7]);
getdata2(f[d]);
setop(options[(f[7])][0])
setop2(options[(f[7])][(e+1)])
setop3(options[(f[7])][(e+2)])
setop4(options[(f[7])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get9(){
  let e=0;
  d=9;
getdata(true);
getdata1(questions[8]);
getdata2(f[d]);
setop(options[(f[8])][0])
setop2(options[(f[8])][(e+1)])
setop3(options[(f[8])][(e+2)])
setop4(options[(f[8])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get10(){
  let e=0;
  d=10;
getdata(true);
getdata1(questions[9]);
getdata2(f[d]);
setop(options[(f[9])][0])
setop2(options[(f[9])][(e+1)])
setop3(options[(f[9])][(e+2)])
setop4(options[(f[9])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get11(){
  let e=0;
  d=11;
getdata(true);
getdata1(questions[10]);
getdata2(f[d]);
setop(options[(f[10])][0])
setop2(options[(f[10])][(e+1)])
setop3(options[(f[10])][(e+2)])
setop4(options[(f[10])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get12(){
  let e=0;
  d=12;
getdata(true);
getdata1(questions[11]);
getdata2(f[d]);
setop(options[(f[11])][0])
setop2(options[(f[11])][(e+1)])
setop3(options[(f[11])][(e+2)])
setop4(options[(f[11])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get13(){
  let e=0;
  d=13;
getdata(true);
getdata1(questions[12]);
getdata2(f[d]);
setop(options[(f[12])][0])
setop2(options[(f[12])][(e+1)])
setop3(options[(f[12])][(e+2)])
setop4(options[(f[12])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get14(){
  let e=0;
  d=14;
getdata(true);
getdata1(questions[13]);
getdata2(f[d]);
setop(options[(f[13])][0])
setop2(options[(f[13])][(e+1)])
setop3(options[(f[13])][(e+2)])
setop4(options[(f[13])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get15(){
  let e=0;
  d=15;
getdata(true);
getdata1(questions[14]);
getdata2(f[d]);
setop(options[(f[14])][0])
setop2(options[(f[14])][(e+1)])
setop3(options[(f[14])][(e+2)])
setop4(options[(f[14])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get16(){
  let e=0;
  d=16;
getdata(true);
getdata1(questions[15]);
getdata2(f[d]);
setop(options[(f[15])][0])
setop2(options[(f[15])][(e+1)])
setop3(options[(f[15])][(e+2)])
setop4(options[(f[15])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get17(){
  let e=0;
  d=17;
getdata(true);
getdata1(questions[16]);
getdata2(f[d]);
setop(options[(f[16])][0])
setop2(options[(f[16])][(e+1)])
setop3(options[(f[16])][(e+2)])
setop4(options[(f[16])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get18(){
  let e=0;
  d=18;
getdata(true);
getdata1(questions[17]);
getdata2(f[d]);
setop(options[(f[17])][0])
setop2(options[(f[17])][(e+1)])
setop3(options[(f[17])][(e+2)])
setop4(options[(f[17])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;
}
function get19(){
  let e=0;
  d=19;
getdata(true);
getdata1(questions[18]);
getdata2(f[d]);
setop(options[(f[18])][0])
setop2(options[(f[18])][(e+1)])
setop3(options[(f[18])][(e+2)])
setop4(options[(f[18])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get20(){
  let e=0;
  d=20;
getdata(true);
getdata1(questions[19]);
getdata2(f[d]);
setop(options[(f[19])][0])
setop2(options[(f[19])][(e+1)])
setop3(options[(f[19])][(e+2)])
setop4(options[(f[19])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get21(){
  let e=0;
  d=21;
getdata(true);
getdata1(questions[20]);
getdata2(f[d]);
setop(options[(f[20])][0])
setop2(options[(f[20])][(e+1)])
setop3(options[(f[20])][(e+2)])
setop4(options[(f[20])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get22(){
  let e=0;
  d=22;
getdata(true);
getdata1(questions[21]);
getdata2(f[d]);
setop(options[(f[21])][0])
setop2(options[(f[21])][(e+1)])
setop3(options[(f[21])][(e+2)])
setop4(options[(f[21])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get23(){
  let e=0;
  d=23;
getdata(true);
getdata1(questions[22]);
getdata2(f[d]);
setop(options[(f[22])][0])
setop2(options[(f[22])][(e+1)])
setop3(options[(f[22])][(e+2)])
setop4(options[(f[22])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get24(){
  let e=0;
  d=24;
getdata(true);
getdata1(questions[23]);
getdata2(f[d]);
setop(options[(f[23])][0])
setop2(options[(f[23])][(e+1)])
setop3(options[(f[23])][(e+2)])
setop4(options[(f[23])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get25(){
  let e=0;
  d=25;
getdata(true);
getdata1(questions[24]);
getdata2(f[d]);
setop(options[(f[24])][0])
setop2(options[(f[24])][(e+1)])
setop3(options[(f[24])][(e+2)])
setop4(options[(f[24])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get26(){
  let e=0;
  d=26;
getdata(true);
getdata1(questions[25]);
getdata2(f[d]);
setop(options[(f[25])][0])
setop2(options[(f[25])][(e+1)])
setop3(options[(f[25])][(e+2)])
setop4(options[(f[25])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get27(){
  let e=0;
  d=27;
getdata(true);
getdata1(questions[26]);
getdata2(f[d]);
setop(options[(f[26])][0])
setop2(options[(f[26])][(e+1)])
setop3(options[(f[26])][(e+2)])
setop4(options[(f[26])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get28(){
  let e=0;
  d=28;
getdata(true);
getdata1(questions[27]);
getdata2(f[d]);
setop(options[(f[27])][0])
setop2(options[(f[27])][(e+1)])
setop3(options[(f[27])][(e+2)])
setop4(options[(f[27])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get29(){
  let e=0;
  d=29;
getdata(true);
getdata1(questions[28]);
getdata2(f[d]);
setop(options[(f[28])][0])
setop2(options[(f[28])][(e+1)])
setop3(options[(f[28])][(e+2)])
setop4(options[(f[28])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get30(){
  let e=0;
  d=30;
getdata(true);
getdata1(questions[29]);
getdata2(f[d]);
setop(options[(f[29])][0])
setop2(options[(f[29])][(e+1)])
setop3(options[(f[29])][(e+2)])
setop4(options[(f[29])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get31(){
  let e=0;
  d=31;
getdata(true);
getdata1(questions[30]);
getdata2(f[d]);
setop(options[(f[30])][0])
setop2(options[(f[30])][(e+1)])
setop3(options[(f[30])][(e+2)])
setop4(options[(f[30])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get32(){
  let e=0;
  d=32;
getdata(true);
getdata1(questions[31]);
getdata2(f[d]);
setop(options[(f[31])][0])
setop2(options[(f[31])][(e+1)])
setop3(options[(f[31])][(e+2)])
setop4(options[(f[31])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get33(){
  let e=0;
  d=33;
getdata(true);
getdata1(questions[32]);
getdata2(f[d]);
setop(options[(f[32])][0])
setop2(options[(f[32])][(e+1)])
setop3(options[(f[32])][(e+2)])
setop4(options[(f[32])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get34(){
  let e=0;
  d=34;
getdata(true);
getdata1(questions[33]);
getdata2(f[d]);
setop(options[(f[33])][0])
setop2(options[(f[33])][(e+1)])
setop3(options[(f[33])][(e+2)])
setop4(options[(f[33])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get35(){
  let e=0;
  d=35;
getdata(true);
getdata1(questions[34]);
getdata2(f[d]);
setop(options[(f[34])][0])
setop2(options[(f[34])][(e+1)])
setop3(options[(f[34])][(e+2)])
setop4(options[(f[34])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get36(){
  let e=0;
  d=36;
getdata(true);
getdata1(questions[35]);
getdata2(f[d]);
setop(options[(f[35])][0])
setop2(options[(f[35])][(e+1)])
setop3(options[(f[35])][(e+2)])
setop4(options[(f[35])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get37(){
  let e=0;
  d=37;
getdata(true);
getdata1(questions[36]);
getdata2(f[d]);
setop(options[(f[36])][0])
setop2(options[(f[36])][(e+1)])
setop3(options[(f[36])][(e+2)])
setop4(options[(f[36])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get38(){
  let e=0;
  d=38;
getdata(true);
getdata1(questions[37]);
getdata2(f[d]);
setop(options[(f[37])][0])
setop2(options[(f[37])][(e+1)])
setop3(options[(f[37])][(e+2)])
setop4(options[(f[37])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get39(){
  let e=0;
  d=39;
getdata(true);
getdata1(questions[38]);
getdata2(f[d]);
setop(options[(f[38])][0])
setop2(options[(f[38])][(e+1)])
setop3(options[(f[38])][(e+2)])
setop4(options[(f[38])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;
}
function get40(){
  let e=0;
  d=40;
getdata(true);
getdata1(questions[39]);
getdata2(f[d]);
setop(options[(f[39])][0])
setop2(options[(f[39])][(e+1)])
setop3(options[(f[39])][(e+2)])
setop4(options[(f[39])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get41(){
  let e=0;
  d=41;
getdata(true);
getdata1(questions[40]);
getdata2(f[d]);
setop(options[(f[40])][0])
setop2(options[(f[40])][(e+1)])
setop3(options[(f[40])][(e+2)])
setop4(options[(f[40])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get42(){
  let e=0;
  d=42;
getdata(true);
getdata1(questions[41]);
getdata2(f[d]);
setop(options[(f[41])][0])
setop2(options[(f[41])][(e+1)])
setop3(options[(f[41])][(e+2)])
setop4(options[(f[41])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get43(){
  let e=0;
  d=43;
getdata(true);
getdata1(questions[42]);
getdata2(f[d]);
setop(options[(f[42])][0])
setop2(options[(f[42])][(e+1)])
setop3(options[(f[42])][(e+2)])
setop4(options[(f[42])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get44(){
  let e=0;
  d=44;
getdata(true);
getdata1(questions[43]);
getdata2(f[d]);
setop(options[(f[43])][0])
setop2(options[(f[43])][(e+1)])
setop3(options[(f[43])][(e+2)])
setop4(options[(f[43])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get45(){
  let e=0;
  d=45;
getdata(true);
getdata1(questions[44]);
getdata2(f[d]);
setop(options[(f[44])][0])
setop2(options[(f[44])][(e+1)])
setop3(options[(f[44])][(e+2)])
setop4(options[(f[44])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get46(){
  let e=0;
  d=46;
getdata(true);
getdata1(questions[45]);
getdata2(f[d]);
setop(options[(f[45])][0])
setop2(options[(f[45])][(e+1)])
setop3(options[(f[45])][(e+2)])
setop4(options[(f[45])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get47(){
  let e=0;
  d=47;
getdata(true);
getdata1(questions[46]);
getdata2(f[d]);
setop(options[(f[46])][0])
setop2(options[(f[46])][(e+1)])
setop3(options[(f[46])][(e+2)])
setop4(options[(f[46])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get48(){
  let e=0;
  d=48;
getdata(true);
getdata1(questions[47]);
getdata2(f[d]);
setop(options[(f[47])][0])
setop2(options[(f[47])][(e+1)])
setop3(options[(f[47])][(e+2)])
setop4(options[(f[47])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get49(){
  let e=0;
  d=49;
getdata(true);
getdata1(questions[48]);
getdata2(f[d]);
setop(options[(f[48])][0])
setop2(options[(f[48])][(e+1)])
setop3(options[(f[48])][(e+2)])
setop4(options[(f[48])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get50(){
  let e=0;
  d=50;
getdata(true);
getdata1(questions[49]);
getdata2(f[d]);
setop(options[(f[49])][0])
setop2(options[(f[49])][(e+1)])
setop3(options[(f[49])][(e+2)])
setop4(options[(f[49])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get51(){
  let e=0;
  d=51;
getdata(true);
getdata1(questions[50]);
getdata2(f[d]);
setop(options[(f[50])][0])
setop2(options[(f[50])][(e+1)])
setop3(options[(f[50])][(e+2)])
setop4(options[(f[50])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get52(){
  let e=0;
  d=52;
getdata(true);
getdata1(questions[51]);
getdata2(f[d]);
setop(options[(f[51])][0])
setop2(options[(f[51])][(e+1)])
setop3(options[(f[51])][(e+2)])
setop4(options[(f[51])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get53(){
  let e=0;
  d=53;
getdata(true);
getdata1(questions[52]);
getdata2(f[d]);
setop(options[(f[52])][0])
setop2(options[(f[52])][(e+1)])
setop3(options[(f[52])][(e+2)])
setop4(options[(f[52])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get54(){
  let e=0;
  d=54;
getdata(true);
getdata1(questions[53]);
getdata2(f[d]);
setop(options[(f[53])][0])
setop2(options[(f[53])][(e+1)])
setop3(options[(f[53])][(e+2)])
setop4(options[(f[53])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get55(){
  let e=0;
  d=55;
getdata(true);
getdata1(questions[54]);
getdata2(f[d]);
setop(options[(f[54])][0])
setop2(options[(f[54])][(e+1)])
setop3(options[(f[54])][(e+2)])
setop4(options[(f[54])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get56(){
  let e=0;
  d=56;
getdata(true);
getdata1(questions[55]);
getdata2(f[d]);
setop(options[(f[55])][0])
setop2(options[(f[55])][(e+1)])
setop3(options[(f[55])][(e+2)])
setop4(options[(f[55])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get57(){
  let e=0;
  d=57;
getdata(true);
getdata1(questions[56]);
getdata2(f[d]);
setop(options[(f[56])][0])
setop2(options[(f[56])][(e+1)])
setop3(options[(f[56])][(e+2)])
setop4(options[(f[56])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get58(){
  let e=0;
  d=58;
getdata(true);
getdata1(questions[57]);
getdata2(f[d]);
setop(options[(f[57])][0])
setop2(options[(f[57])][(e+1)])
setop3(options[(f[57])][(e+2)])
setop4(options[(f[57])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get59(){
  let e=0;
  d=59;
getdata(true);
getdata1(questions[58]);
getdata2(f[d]);
setop(options[(f[58])][0])
setop2(options[(f[58])][(e+1)])
setop3(options[(f[58])][(e+2)])
setop4(options[(f[58])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get60(){
  let e=0;
  d=60;
getdata(true);
getdata1(questions[59]);
getdata2(f[d]);
setop(options[(f[59])][0])
setop2(options[(f[59])][(e+1)])
setop3(options[(f[59])][(e+2)])
setop4(options[(f[59])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;
}
function get61(){
  let e=0;
  d=61;
getdata(true);
getdata1(questions[60]);
getdata2(f[d]);
setop(options[(f[60])][0])
setop2(options[(f[60])][(e+1)])
setop3(options[(f[60])][(e+2)])
setop4(options[(f[60])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get62(){
  let e=0;
  d=62;
getdata(true);
getdata1(questions[61]);
getdata2(f[d]);
setop(options[(f[61])][0])
setop2(options[(f[61])][(e+1)])
setop3(options[(f[61])][(e+2)])
setop4(options[(f[61])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get63(){
  let e=0;
  d=63;
getdata(true);
getdata1(questions[62]);
getdata2(f[d]);
setop(options[(f[62])][0])
setop2(options[(f[62])][(e+1)])
setop3(options[(f[62])][(e+2)])
setop4(options[(f[62])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get64(){
  let e=0;
  d=64;
getdata(true);
getdata1(questions[63]);
getdata2(f[d]);
setop(options[(f[63])][0])
setop2(options[(f[63])][(e+1)])
setop3(options[(f[63])][(e+2)])
setop4(options[(f[63])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get65(){
  let e=0;
  d=65;
getdata(true);
getdata1(questions[64]);
getdata2(f[d]);
setop(options[(f[64])][0])
setop2(options[(f[64])][(e+1)])
setop3(options[(f[64])][(e+2)])
setop4(options[(f[64])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get66(){
  let e=0;
  d=66;
getdata(true);
getdata1(questions[65]);
getdata2(f[d]);
setop(options[(f[65])][0])
setop2(options[(f[65])][(e+1)])
setop3(options[(f[65])][(e+2)])
setop4(options[(f[65])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get67(){
  let e=0;
  d=67;
getdata(true);
getdata1(questions[66]);
getdata2(f[d]);
setop(options[(f[66])][0])
setop2(options[(f[66])][(e+1)])
setop3(options[(f[66])][(e+2)])
setop4(options[(f[66])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get68(){
  let e=0;
  d=68;
getdata(true);
getdata1(questions[67]);
getdata2(f[d]);
setop(options[(f[67])][0])
setop2(options[(f[67])][(e+1)])
setop3(options[(f[67])][(e+2)])
setop4(options[(f[67])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get69(){
  let e=0;
  d=69;
getdata(true);
getdata1(questions[68]);
getdata2(f[d]);
setop(options[(f[68])][0])
setop2(options[(f[68])][(e+1)])
setop3(options[(f[68])][(e+2)])
setop4(options[(f[68])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get70(){
  let e=0;
  d=70;
getdata(true);
getdata1(questions[69]);
getdata2(f[d]);
setop(options[(f[69])][0])
setop2(options[(f[69])][(e+1)])
setop3(options[(f[69])][(e+2)])
setop4(options[(f[69])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get71(){
  let e=0;
  d=71;
getdata(true);
getdata1(questions[70]);
getdata2(f[d]);
setop(options[(f[70])][0])
setop2(options[(f[70])][(e+1)])
setop3(options[(f[70])][(e+2)])
setop4(options[(f[70])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get72(){
  let e=0;
  d=72;
getdata(true);
getdata1(questions[71]);
getdata2(f[d]);
setop(options[(f[71])][0])
setop2(options[(f[71])][(e+1)])
setop3(options[(f[71])][(e+2)])
setop4(options[(f[71])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get73(){
  let e=0;
  d=73;
getdata(true);
getdata1(questions[72]);
getdata2(f[d]);
setop(options[(f[72])][0])
setop2(options[(f[72])][(e+1)])
setop3(options[(f[72])][(e+2)])
setop4(options[(f[72])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get74(){
  let e=0;
  d=74;
getdata(true);
getdata1(questions[73]);
getdata2(f[d]);
setop(options[(f[73])][0])
setop2(options[(f[73])][(e+1)])
setop3(options[(f[73])][(e+2)])
setop4(options[(f[73])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get75(){
  let e=0;
  d=75;
getdata(true);
getdata1(questions[74]);
getdata2(f[d]);
setop(options[(f[74])][0])
setop2(options[(f[74])][(e+1)])
setop3(options[(f[74])][(e+2)])
setop4(options[(f[74])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get76(){
  let e=0;
  d=76;
getdata(true);
getdata1(questions[75]);
getdata2(f[d]);
setop(options[(f[75])][0])
setop2(options[(f[75])][(e+1)])
setop3(options[(f[75])][(e+2)])
setop4(options[(f[75])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get77(){
  let e=0;
  d=77;
getdata(true);
getdata1(questions[76]);
getdata2(f[d]);
setop(options[(f[76])][0])
setop2(options[(f[76])][(e+1)])
setop3(options[(f[76])][(e+2)])
setop4(options[(f[76])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get78(){
  let e=0;
  d=78;
getdata(true);
getdata1(questions[77]);
getdata2(f[d]);
setop(options[(f[77])][0])
setop2(options[(f[77])][(e+1)])
setop3(options[(f[77])][(e+2)])
setop4(options[(f[77])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get79(){
  let e=0;
  d=79;
getdata(true);
getdata1(questions[78]);
getdata2(f[d]);
setop(options[(f[78])][0])
setop2(options[(f[78])][(e+1)])
setop3(options[(f[78])][(e+2)])
setop4(options[(f[78])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get80(){
  let e=0;
  d=80;
getdata(true);
getdata1(questions[79]);
getdata2(f[d]);
setop(options[(f[79])][0])
setop2(options[(f[79])][(e+1)])
setop3(options[(f[79])][(e+2)])
setop4(options[(f[79])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get81(){
  let e=0;
  d=81;
getdata(true);
getdata1(questions[80]);
getdata2(f[d]);
setop(options[(f[80])][0])
setop2(options[(f[80])][(e+1)])
setop3(options[(f[80])][(e+2)])
setop4(options[(f[80])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;
}
function get82(){
  let e=0;
  d=82;
getdata(true);
getdata1(questions[81]);
getdata2(f[d]);
setop(options[(f[81])][0])
setop2(options[(f[81])][(e+1)])
setop3(options[(f[81])][(e+2)])
setop4(options[(f[81])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get83(){
  let e=0;
  d=83;
getdata(true);
getdata1(questions[82]);
getdata2(f[d]);
setop(options[(f[82])][0])
setop2(options[(f[82])][(e+1)])
setop3(options[(f[82])][(e+2)])
setop4(options[(f[82])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get84(){
  let e=0;
  d=84;
getdata(true);
getdata1(questions[83]);
getdata2(f[d]);
setop(options[(f[83])][0])
setop2(options[(f[83])][(e+1)])
setop3(options[(f[83])][(e+2)])
setop4(options[(f[83])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get85(){
  let e=0;
  d=85;
getdata(true);
getdata1(questions[84]);
getdata2(f[d]);
setop(options[(f[84])][0])
setop2(options[(f[84])][(e+1)])
setop3(options[(f[84])][(e+2)])
setop4(options[(f[84])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get86(){
  let e=0;
  d=86;
getdata(true);
getdata1(questions[85]);
getdata2(f[d]);
setop(options[(f[85])][0])
setop2(options[(f[85])][(e+1)])
setop3(options[(f[85])][(e+2)])
setop4(options[(f[85])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get87(){
  let e=0;
  d=87;
getdata(true);
getdata1(questions[86]);
getdata2(f[d]);
setop(options[(f[86])][0])
setop2(options[(f[86])][(e+1)])
setop3(options[(f[86])][(e+2)])
setop4(options[(f[86])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get88(){
  let e=0;
  d=88;
getdata(true);
getdata1(questions[87]);
getdata2(f[d]);
setop(options[(f[87])][0])
setop2(options[(f[87])][(e+1)])
setop3(options[(f[87])][(e+2)])
setop4(options[(f[87])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get89(){
  let e=0;
  d=89;
getdata(true);
getdata1(questions[88]);
getdata2(f[d]);
setop(options[(f[88])][0])
setop2(options[(f[88])][(e+1)])
setop3(options[(f[88])][(e+2)])
setop4(options[(f[88])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get90(){
  let e=0;
  d=90;
getdata(true);
getdata1(questions[89]);
getdata2(f[d]);
setop(options[(f[89])][0])
setop2(options[(f[89])][(e+1)])
setop3(options[(f[89])][(e+2)])
setop4(options[(f[89])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get91(){
  let e=0;
  d=91;
getdata(true);
getdata1(questions[90]);
getdata2(f[d]);
setop(options[(f[90])][0])
setop2(options[(f[90])][(e+1)])
setop3(options[(f[90])][(e+2)])
setop4(options[(f[90])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get92(){
  let e=0;
  d=92;
getdata(true);
getdata1(questions[91]);
getdata2(f[d]);
setop(options[(f[91])][0])
setop2(options[(f[91])][(e+1)])
setop3(options[(f[91])][(e+2)])
setop4(options[(f[91])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get93(){
  let e=0;
  d=93;
getdata(true);
getdata1(questions[92]);
getdata2(f[d]);
setop(options[(f[92])][0])
setop2(options[(f[92])][(e+1)])
setop3(options[(f[92])][(e+2)])
setop4(options[(f[92])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get94(){
  let e=0;
  d=94;
getdata(true);
getdata1(questions[93]);
getdata2(f[d]);
setop(options[(f[93])][0])
setop2(options[(f[93])][(e+1)])
setop3(options[(f[93])][(e+2)])
setop4(options[(f[93])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get95(){
  let e=0;
  d=95;
getdata(true);
getdata1(questions[94]);
getdata2(f[d]);
setop(options[(f[94])][0])
setop2(options[(f[94])][(e+1)])
setop3(options[(f[94])][(e+2)])
setop4(options[(f[94])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get96(){
  let e=0;
  d=96;
getdata(true);
getdata1(questions[95]);
getdata2(f[d]);
setop(options[(f[95])][0])
setop2(options[(f[95])][(e+1)])
setop3(options[(f[95])][(e+2)])
setop4(options[(f[95])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get97(){
  let e=0;
  d=97;
getdata(true);
getdata1(questions[96]);
getdata2(f[d]);
setop(options[(f[96])][0])
setop2(options[(f[96])][(e+1)])
setop3(options[(f[96])][(e+2)])
setop4(options[(f[96])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get98(){
  let e=0;
  d=98;
getdata(true);
getdata1(questions[97]);
getdata2(f[d]);
setop(options[(f[97])][0])
setop2(options[(f[97])][(e+1)])
setop3(options[(f[97])][(e+2)])
setop4(options[(f[97])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get99(){
  let e=0;
  d=99;
getdata(true);
getdata1(questions[98]);
getdata2(f[d]);
setop(options[(f[98])][0])
setop2(options[(f[98])][(e+1)])
setop3(options[(f[98])][(e+2)])
setop4(options[(f[98])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function get100(){
  let e=0;
  d=100;
getdata(true);
getdata1(questions[99]);
getdata2(f[d]);
setop(options[(f[99])][0])
setop2(options[(f[99])][(e+1)])
setop3(options[(f[99])][(e+2)])
setop4(options[(f[99])][(e+3)])
// console.log("d",d,data,op,op2,op3,op4);
console.log("d..",options[d][d+3]);
e=e+1;

}
function r1()
{
  setresult(1);
  console.log('clicked',result);
}
let date=new Date();
let dt=date.getDate();
let month=date.getMonth();
let year=date.getFullYear();
// React.useEffect(
//   {

//   }
// ,[2]);

  
  return (
   <div>
      <table width="1330" height="200" border="0" cellspacing="2" cellpadding="2" style={{marginTop:-35,position:'absolute',align:'center'}}>
<tr>
<th colspan="6" rowspan="2" style={{fontFamily:'Times New Roman',color:'teal',fontSize:'18pt'}}>
Name: {localStorage.getItem("name")}<br/>
Course on Computer Concepts (CCC) Exam
</th>
{/* <MyStop/> */}


</tr>
<tr>
  
<th colspan="14"><button style={{borderRadius:'8px 2px',height:40,width:300,background:'teal', color:'white',marginLeft:23}}>Hit the number to navigate the Question</button></th>
</tr>
<tr style={{fontSize:'12pt'}}>
{/* <th rowspan="12" colspan="5" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}}></th> */}
{/* <th colspan="2" align="left" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}} >{data2 &&  data3}</th> */}
  <th colspan="2" align="left" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}} >{data &&  data1}</th>
<th colspan="4"></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get1}>1</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get2}>2</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get3}>3</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get4}>4</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get5}>5</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get6}>6</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get7}>7</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} oonClick={get8}>8</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get9}>9</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get10}>10</button></th>
</tr>
<tr>
<th align="left" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}}> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault2"/>
{data && op}
</th>
<th align="left" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}}> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
  <label class="form-check-label" for="flexRadioDefault2"/>
  {data && op2}
</th>
<th colspan="4" rowspan="10"></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get11}>11</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get12}>12</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get13}>13</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get14}>14</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get15}>15</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get16}>16</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get17}>17</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get18}>18</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get19}>19</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get20}>20</button></th>
</tr>
<tr>
<th  align="left" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}}> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={r1} />
  <label class="form-check-label" for="flexRadioDefault2"/>
  {data && op3}
</th>
<th align="left" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}}> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
  <label class="form-check-label" for="flexRadioDefault2"/>
  {data && op4}
</th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get21}>21</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get22}>22</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get23}>23</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get24}>24</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get25}>25</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get26}>26</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get27}>27</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get28}>28</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get29}>29</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get30}>30</button></th>
</tr>

<tr>
  <th>

  </th>
  <th></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get31}>31</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get32}>32</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get33}>33</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get34}>34</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get35}>35</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get36}>36</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get37}>37</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get38}>38</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get39}>39</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get40}>40</button></th>

</tr>
<tr>
<th align='right'>
<button type="button" class="btn btn-success" style={{height:30,width:90,borderRadius:'8px',borderColor:'teal', borderWidth:2,background:'teal', color:'white'}} onClick={get1} onClick="">Save</button>      
        </th>
<th align='center'>
        
 </th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get41}>41</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get42}>42</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get43}>43</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get44}>44</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get45}>45</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get46}>46</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get47}>47</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get48}>48</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get49}>49</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get50}>50</button></th>
       
</tr>
<tr>
<th>

</th>
<th></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get51}>51</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get52}>52</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get53}>53</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get54}>54</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get55}>55</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get56}>56</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get57}>57</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get58}>58</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get59}>59</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get60}>60</button></th>
</tr>
<tr>
<th align='center'>
<button type="button" class="btn btn-success" style={{height:30,width:90,borderRadius:'8px',borderColor:'teal', borderWidth:2,background:'teal', color:'white'}}  onClick={getP}>Previous</button>      
        </th>
<th align='center'>
        <button type="button" class="btn btn-success" style={{height:30,width:90,borderRadius:'8px',borderColor:'teal', borderWidth:2,background:'teal', color:'white'}} onClick={getQ}>Next</button>      
 </th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get61}>61</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get62}>62</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get63}>63</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get64}>64</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get65}>65</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get66}>66</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get67}>67</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get68}>68</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get69}>69</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get70}>70</button></th>
</tr>
<tr>
<th colspan="2">
</th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get71}>71</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get72}>72</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get73}>73</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get74}>74</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get75}>75</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get76}>76</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get77}>77</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get78}>78</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get79}>79</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get80}>80</button></th>
</tr>
<tr>
  <th></th>
  <th></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get81}>81</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get82}>82</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get83}>83</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get84}>84</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get85}>85</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get86}>86</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get87}>87</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get88}>88</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get89}>89</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get90}>90</button></th>
</tr>
<tr>
<th colspan="2">
</th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get91}>91</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get92}>92</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get93}>93</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get94}>94</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get95}>95</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get96}>96</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get97}>97</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get98}>98</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get99}>99</button></th>
<th><button style={{borderRadius:'5px 3px',height:40,width:40,background:'teal', color:'white'}} onClick={get100}>100</button></th>

</tr>

<tr>
</tr>

</table>
   </div>

  );
}
const mapStateToProps = state=>{
  return{
    data:qreducer.state,
    }
}
const mapDispatchToProps =dispatch => {
  return{
    sendq:()=>dispatch(sendq())
  }
  
};
export default connect(mapStateToProps,mapDispatchToProps)(Qp)