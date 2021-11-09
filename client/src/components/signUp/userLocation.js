import React from "react";
import { useSelector } from "react-redux";
import { useState,useContext } from "react";
import { useHistory } from "react-router-dom";
import { SERVER_URL } from "../../config";
import { LoginContext } from "../../contexts/LoginContext";



function UserLocation() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const email = useSelector((state) => state.userMail.value);
  const password = useSelector((state) => state.userPassword.value);
  const history = useHistory()
  const {userName} = useContext(LoginContext)

  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);

  const handleCreateUser = async (e) => {
    e.preventDefault();

    const response = await fetch(`${SERVER_URL}/users`, {
      method: 'POST',
      body : JSON.stringify({userName,email,country,city,password}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();
    console.log(json);
    if (json.message) {
      alert(json.message);
    } else {
      localStorage.setItem("token", json.token);
      const keys = Object.keys(json.user)
      keys.forEach(key => localStorage.setItem(key, json.user[key]))
      history.push("/")
    }
    
  };

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
            <form className="flex flex-col" onSubmit={handleCreateUser}>
              <label for="country" className="mb-1 text-sec opacity-60">
                Country/Region
              </label>
              <input
                class="px-3 shadow appearance-none w-80 border rounded py-0.5  text-grey-darker border-black"
                name="country"
                id="country"
                type="text"
                value={country}
                onChange={handleCountryChange}
              />
              <label for="city" className="mt-4 mb-1 text-sec opacity-60">
                City/District
              </label>
              <input
                class="px-3 shadow appearance-none w-80 border rounded py-0.5  text-grey-darker border-black"
                id="city"
                name="city"
                type="text"
                value={city}
                onChange={handleCityChange}
              />
              <button className="mt-6 bg-blue-500 text-white bold h-12 rounded-full">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLocation;
