import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { nextPage } from "../../Redux/userDetailsPage/userNamePage";

function UserName() {
  const userNamePage = useSelector((state) => state.userNamePage.value);
  const dispatch = useDispatch()
  
  const handleNameSubmit = (e) => {
    // e.preventDefault();
    dispatch(nextPage('hidden'))
  };
  return (
    <div className={`w-96 ${userNamePage}`}>
      <form className="flex flex-col">
        <label for="firstName" className="mb-1 text-sec opacity-60">
          First Name
        </label>
        <input
          class="px-3 w-full shadow appearance-none w-80 border rounded py-0.5  text-grey-darker border-black"
          id="Email"
          type="text"
        />
        <label for="lastName" className="mt-4 mb-1 text-sec opacity-60">
          Last Name
        </label>
        <input
          class="px-3 shadow w-full appearance-none w-80 border rounded py-0.5  text-grey-darker border-black"
          id="Email"
          type="text"
        />
        <Link to="/location">
          <button
            className="mt-6 w-full bg-blue-500 text-white font-bold h-12 rounded-full"
            onClick={handleNameSubmit}
          >
            Continue
          </button>
        </Link>
      </form>
    </div>
  );
}

export default UserName;
