import { configureStore } from "@reduxjs/toolkit";
import profilePicReducer from "./profilePic/profilePic";
import namePageReducer from "./userDetailsPage/userNamePage";
import userMailReducer from "./userDetailsPage/userMail"
import userPasswordReducer from "./userDetailsPage/userPassword"



export default configureStore({
  reducer: {
    profilePicUrl: profilePicReducer,
    userNamePage: namePageReducer,
    userMail : userMailReducer,
    userPassword : userPasswordReducer

  },
});
