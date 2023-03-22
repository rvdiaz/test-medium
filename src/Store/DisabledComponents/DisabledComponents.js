import {createSlice} from '@reduxjs/toolkit'

const disabledComponents=createSlice({
    name:'disabledComponents',
    initialState:{
        disabled:true
    },
    reducers:{
        changeState(state,value){
            state.disabled=value.payload;
        }
    }
})

export const disabledActions=disabledComponents.actions;
export default disabledComponents;