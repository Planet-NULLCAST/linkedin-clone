import { createSlice } from "@reduxjs/toolkit";

export const userNamePage = createSlice({
    name:'userNamePage',
    initialState:{
        value: 'hidden',
    },
    reducers:{
        nextPage:(state,action) => {
            state.value = action.payload;
        }
    }
})

export const {nextPage} = userNamePage.actions;
export default userNamePage.reducer;