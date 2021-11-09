import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage } from "../../Redux/userDetailsPage/userNamePage";
import { useState } from "react";
import { Link } from "react-router-dom";
import { updateMail } from "../../Redux/userDetailsPage/userMail";
import { updatePassword } from "../../Redux/userDetailsPage/userPassword";
import { isEmail } from "validator"

function UserMail() {
  const userNamePage = useSelector((state) => state.userNamePage.value);
  const [state, setstate] = useState("block");
  const [emailWarning,setEmailWarning] = useState(false)
  const [passswordWarning, setPassswordWarning] = useState(false)
  const email = useSelector(state => state.userMail.value)
  const password = useSelector(state => state.userPassword.value)
  const dispatch = useDispatch();

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if(!emailWarning && !passswordWarning){
      dispatch(nextPage("block"));
      setstate("hidden");
    }
  };

  const handleButtonClick = () => {
    if(!isEmail(email)){
      setEmailWarning(true)      
    }
    else{
      setEmailWarning(false)
    }
    if(password.length<6){
      setPassswordWarning(true)
    }
    else{
      setPassswordWarning(false)
    }
  }
  const handleEmailChange = (e) => dispatch(updateMail(e.target.value))
  const handlePasswordChange = (e) => dispatch(updatePassword(e.target.value))
  return (
    <div className={`${state}`}>
      <form onSubmit={handleNameSubmit}>
        <label className="text-black opacity-80">Email or phone number</label>
        <div className=" mb-4 p">
          <input
            className="shadow appearance-none w-80 border w-full rounded py-0.5  text-grey-darker border-black"
            id="Email"
            type="text"
            placeholder=""
            name="email"
            value={email}
            onChange={handleEmailChange}
          ></input>
          {emailWarning && <small className='text-red-600'>Please enter your email address</small>}
        </div>
        <div className="my-2 flex-col flex">
          <label className="text-black opacity-80">
            Password (6 or more characters)
          </label>
          <input
            className="shadow appearance-none border w-full rounded  p-0.5 text-grey-darker border-black"
            id="password"
            type="password"
            placeholder=""
            value={password}
            name="password"
            onChange={handlePasswordChange}
          ></input>
          {passswordWarning && <small className='text-red-600'>Please enter a valid password</small>}
          <div className="flex text-center justify-center text-xs my-4">
            <span className="opacity-70">
              By clicking Agree & Join, you agree to the LinkedIn
              <a href="##" className=" text-blue-400 opacity-100" alt="link">
                User <br />
                Agreement
              </a>
              ,
              <a href="##" className=" text-blue-400 opacity-100" alt="link">
                Privacy Policy
              </a>
              ,and
              <a href="##" className=" text-blue-400 opacity-100" alt="link">
                {" "}
                Cookie Policy
              </a>
              .
            </span>
          </div>
        </div>
        <button
          className="bg-blue-500  text-white bold w-full h-12 rounded-full"
          onClick={handleButtonClick}
        >
          Agree & Join
        </button>
      </form>
      <div className="flex text-center flex-col relative justify-center items-center my-5">
        <label className="bg-white w-max z-10 px-6">or</label>
        <hr className=" w-full absolute " />
      </div>
      <div className="border border-blue-500 rounded-full flex h-12 items-center">
        <button className="flex flex-row w-full justify-center text-blue-500">
          <img src="./Assets/google.svg" className="w-6 mr-4" alt=""></img> Join with
          Google
        </button>
      </div>
      <div className="flex text-center justify-center mt-4">
        <span>
          Already on LinkedIn?
          <Link to="/signin" className=" text-blue-400" alt="link">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
}

export default UserMail;
