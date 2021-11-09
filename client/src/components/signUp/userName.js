import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { nextPage } from "../../Redux/userDetailsPage/userNamePage";
import { useState,useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";



function UserName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameWarning, setFirstNameWarning] = useState(false);
  const [lastNameWarning, setLastNameWarning] = useState(false);
  const userNamePage = useSelector((state) => state.userNamePage.value);
  const {setUserName} = useContext(LoginContext)
  const dispatch = useDispatch();

  const handleContinueButton = () => {
    if(firstName.length === 0){
      setFirstNameWarning(true)
    }
    else{
      setFirstNameWarning(false)
    }
    if(lastName.length === 0){
      setLastNameWarning(true)
    }
    else{
      setLastNameWarning(false)
    }
    
    setUserName(firstName + " " + lastName)
    
  };

  const handleNameSubmit = (e) => {
    e.preventDefault()
    dispatch(nextPage("hidden"));
    
  };

  const handleLastName = (e) => setLastName(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  return (
    <div className={`w-96 ${userNamePage}`}>
      <form className="flex flex-col" onSubmit={handleNameSubmit}>
        <label for="firstName" className="mb-1 text-sec opacity-60">
          First Name
        </label>
        <input
          class="px-3 w-full shadow appearance-none w-80 border rounded py-0.5  text-grey-darker border-black"
          name="firstName"
          type="text"
          value={firstName}
          onChange={handleFirstName}
          required
        />
        {firstNameWarning && (
          <small className="text-red-600">
            Please enter a valid name
          </small>
        )}
        <label for="lastName" className="mt-4 mb-1 text-sec opacity-60">
          Last Name
        </label>
        <input
          class="px-3 shadow w-full appearance-none w-80 border rounded py-0.5  text-grey-darker border-black"
          name="lastName"
          type="text"
          value={lastName}
          onChange={handleLastName}
          required
        />
        {lastNameWarning && (
          <small className="text-red-600">
            Please enter a valid name
          </small>
        )}
        <Link to='/location'>
          <button
            className="mt-6 w-full bg-blue-500 text-white font-bold h-12 rounded-full"
            onClick={handleContinueButton}
          >
            Continue
          </button></Link>
      </form>
    </div>
  );
}

export default UserName;
