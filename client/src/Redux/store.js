import { configureStore } from "@reduxjs/toolkit";
import profilePicReducer from "./profilePic/profilePic";
import userNameReducer from "./userName/userName";
import namePageReducer from "./userDetailsPage/userNamePage";

export default configureStore({
  reducer: {
    profilePicUrl: profilePicReducer,
    userName: userNameReducer,
    userNamePage: namePageReducer,
  },
});
