import Footer from "./signUp/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { SERVER_URL } from "../config";

const Signin = () => {
  const [loginMail, setLoginMail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let history = useHistory()
  const handleMailChange = (e) => setLoginMail(e.target.value);
  const handlePasswordChange = (e) => setLoginPassword(e.target.value);
  const handleLoginButton = () => {};

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const response = await fetch(`${SERVER_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify({ email: loginMail, password: loginPassword }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (json.message) {
      alert(json.message);
    } else {
      localStorage.setItem("token", json.token);
      history.push("/")
    }
  };

  return (
    <div>
      <a href="####">
        <img
          src="./Assets/linkedinlogo.svg"
          alt=""
          className="w-24 mt-8 ml-14 mb-8"
        ></img>
      </a>
      <div className="flex flex-col items-center mt-14">
        <div className="shadow-xl max-w-sm">
          <div className="p-8 flex flex-col mt-2 ">
            <span className="text-black text-4xl font-medium">Sign in</span>
            <span className="mt-2">
              Stay updated on your professional world
            </span>
            <form onSubmit={handleLoginForm}>
              <div className=" my-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black"
                  id="Email"
                  type="text"
                  placeholder="Email or Phone"
                  value={loginMail}
                  onChange={handleMailChange}
                ></input>
              </div>
              <div className="my-2">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black"
                  type="password"
                  placeholder="Password"
                  value={loginPassword}
                  onChange={handlePasswordChange}
                ></input>
              </div>
              <a href="###" className="mt-2 font-medium text-blue-400">
                Forgot password?
              </a>
              <button
                className="bg-blue-500 mt-2 text-white w-full h-12 rounded-full"
                onClick={handleLoginButton}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-8">
        <span>
          New to LinkedIn?{" "}
          <Link to="/signup" className="text-blue-400">
            Join now
          </Link>
        </span>
      </div>
      <div className="flex justify-center mb-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Signin;
