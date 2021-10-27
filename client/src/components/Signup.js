import google from "../assets/google.svg";
import linkedinlogo from "../assets/linkedinlogo.svg";
import linkedinfooter from "../assets/linkedinfooter.svg";
import { useState } from "react";
 

 let Signup = () =>{
  
  let  signUpFuntion =async() =>{

    
    let item={password ,email}
    console.warn(item);

   let result=  await fetch("http://localhost:8000/signupapi",{
      method:'POST',
      body: JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    .catch(e =>console.log(e))
    result=  result.json()
    console.warn(result);
    }
  const [password,SetName]=useState("")
  const [email,SetEmail]=useState("")

  return (
    <div>
      <div class="pt-6 h-screen flex flex-col items-center  bg-white lg:bg-gray-100">
        <div class="w-32">
          <img src={linkedinlogo} alt="linkedin logo" />
        </div>
        <div class='flex justify-between items-center'>
          <h1 class="bold text-black flex  pt-6 px-4 text-3xl">
            Make the most of your professional life
          </h1>
        </div>
        <div class="flex-1 flex flex-col justify-center">
          <div class=" p-4 flex flex-col mt-2 bg-white rounded-lg">
            <label class="text-black opacity-80">Email or phone number</label>
            <div class=" mb-4 p">
              <input
                class="shadow appearance-none w-80 border w- rounded py-0.5  text-grey-darker border-black"
                id="Email"
                type="text"
                placeholder=""
                value={email}
                onChange={(e)=>SetEmail(e.target.value)}
              ></input>
            </div>
            <div class="my-2 flex-col flex">
              <label class="text-black opacity-80">
                Password (6 or more characters)
              </label>
              <input
                class="shadow appearance-none border w-full rounded  p-0.5 text-grey-darker border-black"
                id="Email"
                type="text"
                placeholder=""
                onChange={(e)=>SetName(e.target.value)}
                value={password}
              ></input>
              <div class="flex text-center justify-center text-xs my-4">
                <span class="opacity-70">
                  By clicking Agree & Join, you agree to the LinkedIn
                  <a href="##" class=" text-blue-400 opacity-100" alt="link">
                    User <br />
                    Agreement
                  </a>
                  ,
                  <a href="##" class=" text-blue-400 opacity-100" alt="link">
                    Privacy Policy
                  </a>
                  ,and
                  <a href="##" class=" text-blue-400 opacity-100" alt="link">
                    {" "}
                    Cookie Policy
                  </a>
                  .
                </span>
              </div>
            </div>
            <button onClick={signUpFuntion } class="bg-blue-500  text-white bold w-full h-12 rounded-full">
              Agree & Join
            </button>
            <div class="flex text-center flex-col relative justify-center items-center my-5">
              <label class="bg-white w-max z-10 px-6">or</label>
              <hr class=" w-full absolute " />
            </div>
            <div class="border border-blue-500 rounded-full flex h-12 items-center">
              <button class="flex flex-row w-full justify-center text-blue-500">
                <img src={google} class="w-6 mr-4"></img> Join with Google
              </button>
            </div>
            <div class="flex text-center justify-center mt-4">
              <span>
                Already on LinkedIn?
                <a href="##" class=" text-blue-400" alt="link">
                  Sign in
                </a>
              </span>
            </div>
          </div>
          <div class="flex text-center justify-center mt-4">
            <span class="text-sm">
              Looking to create a page for a business?
              <a href="##" class=" text-blue-400" alt="link">
                Get help
              </a>
            </span>
          </div>
        </div>
        <footer class="bg-white w-full justify-center items-center py-3  mb-auto lg:flex hidden">
          <ul class="md:flex flex-row text-xs hidden">
            <li class="flex flex-row">
              <img src={linkedinfooter} class="w-12" alt="image"></img>
              <span class="ml-1 opacity-60">© 2021</span>
            </li>
            <li>
              <a href="###" class="ml-2 opacity-60">
                About
              </a>
            </li>
            <li>
              <a href="###" class="ml-2 opacity-60">
                Accessibility
              </a>
            </li>
            <li>
              <a href="###" class="ml-2 opacity-60">
                User Agreement
              </a>
            </li>
            <li>
              <a href="###" class="ml-2 opacity-60">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="###" class="ml-2 opacity-60">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="###" class="ml-2 opacity-60">
                Copyright Policy
              </a>
            </li>
            <li>
              <a href="###" class="ml-2 opacity-60">
                Brand Policy
              </a>
            </li>
            <li>
              <a href="###" class="ml-2 opacity-60">
                Guest Controls
              </a>
            </li>
            <li>
              <a href="###" class="ml-2 opacity-60">
                Community Guidelines
              </a>
            </li>
            <li>
              <select class="bg-white ml-2 opacity-60">
                <option>Language</option>
                <option>Hindi</option>
                <option>Malayalam</option>
              </select>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
