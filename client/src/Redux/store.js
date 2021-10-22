import {configureStore} from '@reduxjs/toolkit';
import profilePicReducer from './profilePic/profilePic';
import userNameReducer from './userName/userName';

export default configureStore({
    reducer:{
        profilePicUrl : profilePicReducer,
        userName : userNameReducer

    }
})