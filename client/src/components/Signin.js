import linkedinlogo from '../assets/linkedinlogo.svg'
import Footer from './Footer';
const Signin = () => {
  return (
    <div>
        <a href='####'><img src={linkedinlogo} class="w-24 mt-8 ml-14 mb-8"></img></a>
      <div class="flex flex-col items-center mt-14">
        <div class="shadow-xl max-w-sm">
          <div class="p-8 flex flex-col mt-2 ">
            <span class="text-black text-4xl font-medium">Sign in</span>
            <span class="mt-2">Stay updated on your professional world</span>
            <div class=" my-4">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black"
                id="Email"
                type="text"
                placeholder="Email or Phone"
              ></input>
            </div>
            <div class="my-2">
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker border-black"
                id="Email"
                type="text"
                placeholder="Password"
              ></input>
            </div>
            <a href="###" class="mt-2 font-medium text-blue-400">
              Forgot password?
            </a>
            <button class="bg-blue-500 mt-2 text-white w-full h-12 rounded-full">
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center my-8">
        <span>
          New to LinkedIn?{" "}
          <a href="###" class="text-blue-400">
            Join now
          </a>
        </span>
      </div>
      <div class="flex justify-center mb-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Signin;
