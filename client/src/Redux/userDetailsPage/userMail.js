import { createSlice } from "@reduxjs/toolkit";

export const userMail = createSlice({
    name : "email",
    initialState : {
        value : '',
    },
    reducers : {
        updateMail :(state,action)=> {
            state.value = action.payload;
        }
    }
})

export const {updateMail} = userMail.actions;
export default userMail.reducer;