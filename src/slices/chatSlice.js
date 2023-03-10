import {  createSlice } from '@reduxjs/toolkit'
export const chatSlice = createSlice({
    name: 'chatUser',
    initialState:[],

    reducers: {
        onclick: (state, action) => {   
            if(state.length) state.pop();
            state.push(action.payload)     
        },
        removechat:(state,action)=>{
            state.pop();
            
        }
    },
})

//create action creator functions
export const { onclick,removechat } = chatSlice.actions

//export reducer
export default chatSlice.reducer