import { createSlice } from "@reduxjs/toolkit";

export const profilePic = createSlice({
    name:'profilePicUrl',
    initialState:{
        value:'./Assets/profilepic.jpg',
    },
    reducers:{
        changeUrl:(state,action) => {
            state.value = action.payload;
        }
    }
})

export const {changeUrl} = profilePic.actions;
export default profilePic.reducer;