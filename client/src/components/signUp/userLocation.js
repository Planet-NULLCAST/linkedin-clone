import React from "react";
import { useSelector } from "react-redux";

function UserLocation() {
  const userName = useSelector((state) => state.userName.value);

  return (
    <div>
      <a href="#">
        <img src="./Assets/linkedinlogo.svg" class="w-24 mt-8 ml-14 mb-8" />
      </a>
      <div className="m-8">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center md:px-20 lg:px-72 mb-4">
            <h1 className="text-sec opacity-90 font-semibold text-2xl">
              Welcome {userName}!
            </h1>
            <h2 className="text-sec text-base opacity-60">
              Let’s start your profile, connect to people you know, and engage
              with them on topics you care about.
            </h2>
          </div>
          <div>
            <form className="flex flex-col">
              <label for="firstName" className="mb-1 text-sec opacity-60">
                Country/Region
              </label>
              <input
                class="px-3 shadow appearance-none w-80 border rounded py-0.5  text-grey-darker border-black"
                id="Email"
                type="text"
              />
              <label for="lastName" className="mt-4 mb-1 text-sec opacity-60">
                City/District
              </label>
              <input
                class="px-3 shadow appearance-none w-80 border rounded py-0.5  text-grey-darker border-black"
                id="Email"
                type="text"
              />
              <button className="mt-6 bg-blue-500 text-white bold h-12 rounded-full">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLocation;
