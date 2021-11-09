import { createSlice } from "@reduxjs/toolkit";

export const userPassword = createSlice({
    name : "password",
    initialState : {
        value : '',
    },
    reducers : {
        updatePassword :(state,action) => {
            state.value = action.payload 
        }
    }
})

export const {updatePassword} = userPassword.actions;
export default userPassword.reducer;
