import { useEffect ,useState} from 'react';
import React from 'react';
export default function Myshow()
{




    let s= localStorage.getItem("q1");
    let s2= localStorage.getItem("q2");
    // let s3= localStorage.getItem("a3");
    // let s4= localStorage.getItem("a4");
    // let s5= localStorage.getItem("a5");
    // let s6= localStorage.getItem("a6");
    // let cr=localStorage.getItem("crop");
    // let incr=localStorage.getItem("incrop")
    // let resul=localStorage.getItem("resl");
    // const [open, setOpen] = React.useState(false);
   // const handleClose = () => setOpen(false);
const [g,setg]=React.useState(0);
 const [g2,setg2]=React.useState(0);
// const [g3,setg3]=React.useState(0);
// const [g4,setg4]=React.useState(0);
// const [g5,setg5]=React.useState(0);
// const [g6,setg6]=React.useState(0);
// const [g7,setg7]=React.useState(0);
// const [g8,setg8]=React.useState(0);
// const [g9,setg9]=React.useState(0);
    React.useEffect(()=>{






    //   for(let i=0;i<s.length-1;i++)
    // {
    //     setg(s);
    //     setg2(s2);
       
    // }
    // for(let i=0;i<s3.length-1;i++)
    // {
    //     setg3(s3);
    //     setg4(s4);
       
    // }
    // for(let i=0;i<s5.length-1;i++)
    // {
    //     setg5(s5);
    //     setg6(s6);
       
    // } 
    })


    function show()
{

    for (const[key,value] of s)
    {
        console.log("new data",key,value)
    }
    
}

    return(
        <div>
            
{console.log("......",s)}
{/* 
{s.map(data=>{
    return(<div>
        <li key={data.id}>{data}</li>
        </div>);
})} */}

            </div>
    );
}