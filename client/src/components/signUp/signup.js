import UserName from "./userName";
import UserMail from "./userMail";
import Footer from "./Footer";
const Signup = () => {
  return (
    <div>
      <div className="pt-6 h-screen flex flex-col items-center bg-white lg:bg-gray-100">
        <div className="w-32">
          <img src="./Assets/linkedinlogo.svg" alt="linkedin logo" />
        </div>
        <div className="flex justify-between items-center">
          <h1 className="bold text-black flex  pt-6 px-4 text-3xl">
            Make the most of your professional life
          </h1>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <div className=" p-4 flex flex-col mt-2 bg-white rounded-lg">
            <UserMail />
            <UserName />
          </div>
          <div className="flex text-center justify-center mt-4">
            <span className="text-sm">
              Looking to create a page for a business?
              <a href="##" className=" text-blue-400" alt="link">
                Get help
              </a>
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
