// import React from 'react'
// import { CreateSliceOptions, createSlice } from '@reduxjs/toolkit';
// import * as actionTypes from '../actions/actionTypes';
import { INCREMENT } from '../actions/actionTypes';


const initialState ={
    data:10,

}



const landingreducer=(state=initialState,action)=>{

    switch(action.type){
        case INCREMENT:return {
            ...state,
            data:state.data*5,
        }
        default:return state
    }
    
}
    

    


export default  landingreducer;