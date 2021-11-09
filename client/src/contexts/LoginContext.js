import { useState, createContext } from "react";

export const LoginContext = createContext();

const LoginProvider = (props) => {
  const [userName, setUserName] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("./Assets/profilepic.jpg");
  const [id, setId] = useState('')
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const value = { userName, setUserName, profilePicUrl, setProfilePicUrl,id,setId,city,setCity,country,setCountry};
  return (
    <LoginContext.Provider value={value}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
