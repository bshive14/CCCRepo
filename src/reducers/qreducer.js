// import React from 'react'
// import { CreateSliceOptions, createSlice } from '@reduxjs/toolkit';
// import * as actionTypes from '../actions/actionTypes';
import { SENDQ } from '../actions/actionTypes';


const initialState ={
    data:"Full form of MICR",

}    
const qreducer=(state=initialState,action)=>{

    switch(action.type){
        case SENDQ:return {
            ...state,
            data:state.data,
        }
        default:return state
    }
    
}
    


export default  qreducer;