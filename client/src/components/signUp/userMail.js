import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage } from "../../Redux/userDetailsPage/userNamePage";
import { useState } from "react";
import { Link } from "react-router-dom";

function UserMail() {
  const userNamePage = useSelector((state) => state.userNamePage.value);
  const [state, setstate] = useState("block");
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(nextPage("block"));
    setstate("hidden");
    console.log(userNamePage);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={`${state}`}>
      <form onSubmit={handleFormSubmit}>
        <label className="text-black opacity-80">Email or phone number</label>
        <div className=" mb-4 p">
          <input
            className="shadow appearance-none w-80 border w-full rounded py-0.5  text-grey-darker border-black"
            id="Email"
            type="text"
            placeholder=""
          ></input>
        </div>
        <div className="my-2 flex-col flex">
          <label className="text-black opacity-80">
            Password (6 or more characters)
          </label>
          <input
            className="shadow appearance-none border w-full rounded  p-0.5 text-grey-darker border-black"
            id="Email"
            type="text"
            placeholder=""
          ></input>
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
          onClick={handleSubmit}
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
