import { createSlice } from "@reduxjs/toolkit";

const userName = createSlice({
    name:'userName',
    initialState:{
        value:'User Name'
    },
    reducers:{
        changeUserName:(state,action) => {
            state.value = action.payload
        }
    }
})

export const {changeUserName} = userName.actions;

export default userName.reducer;

