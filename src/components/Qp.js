import * as React from 'react';
import { sendq } from '../actions/sendquestion';
import { connect } from 'react-redux';
import qreducer from '../reducers/qreducer';
import { questions } from './setq1';
 import { options } from './setop1';
import { useState } from 'react';
let d=0;
// let fr=0;
// let setq1=[]
// let ans =1,ans1=1,ans2=1,ans3=1,ans4=1,ans5=1,ans6=1,ans7=1,ans8=1,ans9=1,ans10=1,ans11=1,ans12=1,ans13=1,ans14=1,ans15=1,ans16=1,ans17=1,ans18=1,ans19=1;
// let bns1=1,bns2=1,bns3=1,bns4=1,bns5=1,bns6=1,bns7=1,bns8=1,bns9=1,bns10=1,bns11=1,bns12=1,bns13=1,bns14=1,bns15=1,bns16=1,bns17=1,bns18=1,bns19=1,bns20=1,bns21=1;
// let cns1=1,cns2=1,cns3=1,cns4=1,cns5=1,cns6=1,cns7=1,cns8=1,cns9=1,cns10=1;
// let dns1=1,dns2=1,dns3=1,dns4=1,dns5=1,dns6=1,dns7=1,dns8=1,dns9=1,dns10=1,dns11=1,dns12=1,dns13=1,dns14=1,dns15=1,dns16=1,dns17=1,dns18=1,dns19=1,dns20=1,dns21=1,dns22=1,
// dns23=1,dns24=1,dns25=1,dns26=1,dns27=1,dns28=1,dns29=1,dns30=1,dns31=1,dns32=1,dns33=1,dns34=1,dns35=1,dns36=1,dns37=1,dns38=1,dns39=1,dns40=1,dns41=1,dns42=1,dns43=1,dns44=1,dns45=1,
// dns46=1,dns47=1,dns48=1;
// let ua={};
let q1=[],q2=[],q3=[],q4=[];
let a1=[],a2=[],a3=[],a4=[];
 function Qp(props) {
 let f=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,
  51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,	100
 ];

  const [data, getdata]=useState(false)
  const [data1, getdata1]=useState(0)
  const [data2, getdata2]=useState(false)
  // const [data3, getdata3]=useState(0)

  const [op, setop]=useState(0);
  const [op2, setop2]=useState(0);
  const [op3, setop3]=useState(0);
  const [op4, setop4]=useState(0);
  // const [name, setname]=useState(" ");
  // const [result,setresult]=useState(0); 
  
  const [c1, setc1]=useState(0);
  // const [c2, setc2]=useState(0);
  // const [c3, setc3]=useState(0);
  // const [c4, setc4]=useState(0) ;

  function r1()
{
  setc1(1);
  console.log("r1");

}
function r2()
{ 
  setc1(2);
   console.log("r2");
  
  
}
function r3()
{
  setc1(3);
   console.log("r3")
  
}
function r4()
{
  setc1(4);
 
   console.log("r4")
}

function getResult()
{
  console.log("q1",q1,"a1",a1);
  console.log("q2",q2,"a2",a2);
  console.log("q3",q3,"a3",a3);
  console.log("q4",q4,"a4",a4);
}

function getSave()
{
  
  // let g=parseInt(data1[1]);
  // let g1=parseInt(data1.substring(1,3));
  // let g2=parseInt(data1.substring(1,4));
  if(c1===1)
  {
    q1.push(data1);
    a1.push(1);
    console.log("q1",q1);
    console.log("a1",a1);
    
  }
  if(c1===2)
  {
    q2.push(data1);
    a2.push(2);
    console.log("q2",q2);
    console.log("a2",a2);
    
  }
  if(c1===3)
  {
    q3.push(data1);
    a3.push(3);
    console.log("q3",q3);
    console.log("a3",a3);
    
  }
  if(c1===4)
  {
    q4.push(data1);
    a4.push(4);
    console.log("q4",q4);
    console.log("a4",a4);
   
  }
  // console.log("q1",q1);
  // console.log("a1",a1);
  // console.log("q2",q2);
  // console.log("a2",a2);
  // console.log("q3",q3);
  // console.log("q4",q4);
  // console.log("a4",a4);
}


// function getSave()
// {let g=parseInt(data1[1]);
//   let g1=parseInt(data1.substring(1,3));
//   let g2=parseInt(data1.substring(1,4));
//   console.log("qno",data1[1]);
//   console.log("qnobada",g1);
//   if(c1==1)
//   {
//     if(g==1 && ans ==1)
//     {
//      fr=fr+1;
//      // console.log("s1",c1,data1[1],"...",data1);
//      // {result=result+1;}
//      setresult(fr);
//      console.log("s1",result);
//      ans=ans+1;
//      ua['1']=1;
    
//     }
   
//     if(g==4 && ans1 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans1=ans1+1;
//      ua['2']=2;
    
//     }
//     if(parseInt(g1)==38 && ans2 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans2=ans2+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==61 && ans3 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans3=ans3+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==63 && ans4 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans4=ans4+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==68 && ans5 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans5=ans5+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==69 && ans6 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans6=ans6+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==70 && ans7 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans7=ans7+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==71 && ans8 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans8=ans8+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==72 && ans9 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans9=ans9+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==75 && ans10 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans10=ans10+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==78 && ans11 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans11=ans11+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==82 && ans12 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans12=ans12+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==83 && ans13 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans13=ans13+1;
//      ua['3']=4;
    
//     }
//         if(parseInt(g1)==89 && ans14 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans14=ans14+1;
//      ua['3']=4;
    
//     }
//         if(parseInt(g1)==95 && ans15 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans15=ans15+1;
//      ua['3']=4;
    
//     }
//         if(parseInt(g1)==96 && ans16 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans16=ans16+1;
//      ua['3']=4;
    
//     }
//       if(parseInt(g1)==98 && ans17 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans17=ans17+1;
//      ua['3']=4;
    
//     }
//       if(parseInt(g1)==99 && ans17 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans17=ans17+1;
//      ua['3']=4;
    
//     }
//       if(parseInt(g2)==100 && ans18 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      ans18=ans18+1;
//      ua['3']=4;
    
//     }
//     console.log("s1",c1,data1);
//   }
   
//   if(c2==2)
//   {
//     if(parseInt(g)==2 && bns1 ==1)
//     {
//       console.log("in 2",g);
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns1=bns1+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g)==3 && bns2 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns2=bns2+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g)==6 && bns3 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns3=bns3+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==10 && bns4 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns4=bns4+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==32 && bns5 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns5=bns5+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==33 && bns6==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns6=bns6+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==66 && bns7 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns7=bns7+1;
//      ua['3']=4;
    
//     } 
   
//     if(parseInt(g1)==67 && bns8 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns8=bns8+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==77 && bns9 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns9=bns9+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==79 && bns10 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns10=bns10+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==81 && bns11 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns11=bns11+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==84 && bns12 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns12=bns12+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==87 && bns13 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns13=bns13+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==88 && bns14 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns14=bns14+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==90 && bns15 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns15=bns15+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==91 && bns16 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns16=bns16+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==92 && bns17 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns17=bns17+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g1)==93 && bns18 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns18=bns18+1;
//      ua['3']=4;
    
//     }  
//     if(parseInt(g1)==97 && bns19 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns19=bns19+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==13 && bns20 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns20=bns20+1;
//      ua['3']=4;
    
//     } 
//     if(parseInt(g1)==19 && bns21 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      bns21=bns21+1;
//      ua['3']=4;
    
//     } 
//     console.log("s1",c2,data1);
//   }
  
//   if(c3==3)
//   {
//     if(parseInt(g)==7 && cns1 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      cns1=cns1+1;
//      ua['3']=4;
    
//     }
//     if(parseInt(g)==9 && cns2 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      cns2=cns2+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==55 && cns3 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      cns3=cns3+1;
//      ua['3']=4;
//     } 
//     if(parseInt(g1)==73 && cns4 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      cns4=cns4+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==74 && cns5 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      cns5=cns5+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==76 && cns6 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      cns6=cns6+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==85 && cns7 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      cns7=cns7+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==86 && cns8 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      cns8=cns8+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==94 && cns9 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      cns9=cns9+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==17 && cns10 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      cns10=cns10+1;
//      ua['3']=4;
//     }
//     console.log("s1",c3,data1);
//   }
//   if(c4==4)
//   {
//     if(parseInt(g)==5 && dns1 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns1=dns1+1;
//      ua['3']=4;
//     }
//     if(parseInt(g)==8 && dns2 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns2=dns2+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==11 && dns3 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns3=dns3+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==12 && dns4 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns4=dns4+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==14 && dns5 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns5=dns5+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==16 && dns6 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns6=dns6+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==18 && dns7 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns7=dns7+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==20 && dns8 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns8=dns8+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==21 && dns9 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns9=dns9+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==22 && dns10 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns10=dns10+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==23 && dns11 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns11=dns11+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==24 && dns12 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns12=dns12+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==25 && dns13 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns13=dns13+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==26 && dns14 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns14=dns14+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==27 && dns15 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns15=dns15+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==28 && dns16 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns16=dns16+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==29 && dns18 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns18=dns18+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==30 && dns19 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns19=dns19+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==31 && dns20 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns20=dns20+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==34 && dns21 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns21=dns21+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==35 && dns22 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns22=dns22+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==36 && dns23 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns23=dns23+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==37 && dns24 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns24=dns24+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==39 && dns25 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns25=dns25+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==40 && dns26 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns26=dns26+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==41 && dns27 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns27=dns27+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==42 && dns28 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns28=dns28+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==43 && dns29 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns29=dns29+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==44 && dns30 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns30=dns30+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==45 && dns31 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns31=dns31+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==46 && dns32 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns32=dns32+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==47 && dns33 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns33=dns33+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==48 && dns34 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns34=dns34+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==49 && dns35 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns35=dns35+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==50 && dns36 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns36=dns36+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==51 && dns37 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns37=dns37+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==52 && dns38 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns38=dns38+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==53 && dns39==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns39=dns39+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==54 && dns40==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns40=dns40+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==56 && dns41==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns41=dns41+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==57 && dns42 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns42=dns42+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==58 && dns43 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns43=dns43+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==59 && dns44 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns44=dns44+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==60 && dns45 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns45=dns45+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==62 && dns46 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns46=dns46+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==64 && dns47 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns47=dns47+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==65 && dns48 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns48=dns48+1;
//      ua['3']=4;
//     }
//     if(parseInt(g1)==80 && dns17 ==1)
//     {
//      fr=fr+1;
   
//      setresult(fr);
//      console.log("s1",result);
//      dns17=dns17+1;
//      ua['3']=4;
//     }
// console.log("s1",c4,data1);
//   }
// }

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
console.log("q",d);
// console.log("d",d,data,op,op2,op3,op4);
// console.log("d..",options[d][d+3])
 d=d+1;
 e=e+1;
}
function getP(){
  // let e=0;
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
  // let e=0;

  
  // getdata2(true);
  // getdata3(questions[d]);
  // // getdata2(f[d]);
  // setop11(options[0][0])
  // setop12(options[0][(e+1)])
  // setop13(options[0][(e+2)])
  // setop14(options[0][(e+3)])
get1();

  // setname(localStorage.getItem("name"));
  // setresult(1);
  // localStorage.setItem("result",result);
  
},)

function get1(){
  let e=0;
  d=1;
getdata(true);
getdata2(true);
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
console.log("d..",options[d][d+3],data2);
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


// let date=new Date();
// let dt=date.getDate();
// let month=date.getMonth();
// let year=date.getFullYear();
// React.useEffect(
//   {

//   }
// ,[2]);

  
  return (
   <div>
      <div class="row">
  <div class="column">
    <table border="0" style={{width:800}}>
      <tr>
<th colspan="6" rowspan="2" style={{fontFamily:'Times New Roman',color:'teal',fontSize:'18pt', textAlign:'center'}}>
Course on Computer Concepts (CCC) Exam<br/>
{/* Name: {localStorage.getItem("name")} */}
{/* {result} */}
</th>
</tr>
<tr>
</tr>
<tr>
        <th colspan="2" rowspan="2" align="left" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}} >{data &&  data1}</th>
        
      </tr>
<tr>
</tr>
      <tr>
        <th align="left" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}}> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={r1}/>
  <label class="form-check-label" for="flexRadioDefault2"/>
{data && op}
</th>
<th align="left" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}}> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={r2}/>
  <label class="form-check-label" for="flexRadioDefault2"/>
  {data && op2}
</th>
      </tr>
      <tr>
        <th  align="left" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}}> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" onChange={r3} />
  <label class="form-check-label" for="flexRadioDefault2"/>
  {data && op3}
</th>
<th align="left" style={{fontFamily:'Times New Roman',color:'darkgreen',fontSize:'14pt'}}> <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" onChange={r4}/>
  <label class="form-check-label" for="flexRadioDefault2"/>
  {data && op4}
</th>

      </tr>
      <tr>
        <th rowspan="3">
          <br/>
        </th>
      </tr>
      <tr></tr>
      <tr>

      </tr>
      <tr></tr>
      <tr>
        <th rowspan="3">
          <br/>
          <br/>
          <br/>
        </th>
        
        <th>
<button type="button" class="btn btn-success"  style={{height:30,width:90,borderRadius:'8px',borderColor:'teal', borderWidth:2,background:'teal', color:'white',marginRight:40}} onClick={getSave} >Save</button>      
        </th>        
      </tr>
<tr rowspan="4">
  <th colspan="2"></th>
</tr>
<tr>
  <th>
  <button style={{height:30,width:90,borderRadius:'8px',borderColor:'teal', borderWidth:2,background:'teal', color:'white',marginRight:40}} onClick={getResult}>Submit</button>      
  </th>
</tr>
<tr>
<th colspan="2"></th>
</tr>
<tr>
</tr>
<tr>
  <center>
<th>
<button type="button" class="btn btn-success" style={{height:30,width:90,borderRadius:'8px',borderColor:'teal', borderWidth:2,background:'teal', color:'white'}}  onClick={getP}>Previous</button>      
        </th>
        </center>
<th>
  <center>
        <button type="button" class="btn btn-success" style={{height:30,width:90,borderRadius:'8px',borderColor:'teal', borderWidth:2,background:'teal', color:'white'}} onClick={getQ}>Next</button>      
        </center>
 </th>
</tr>
    </table>
  </div>

  <div class="column">
    <table border="0" style={{width:400,marginLeft:180}}>
      <tr>
        <th colspan="10"><button style={{borderRadius:'8px 2px',background:'teal', color:'white',marginLeft:0,width:440,height:40,fontSize:'12pt'}}>Hit the number to navigate the Question</button></th>
      </tr>
      <tr>
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


    </table>
  </div>
</div>
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
