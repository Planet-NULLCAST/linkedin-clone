import { useState } from "react";
import React from "react";
import { useHistory } from "react-router-dom";



const Navbar = () => {

  const [navSearchbar, setnavSearchbar] = useState(false);
  const [profileiconNavbar, setprofileiconNavbar] = useState(false);
  const [responsiveNavbarprofilepopup, setresponsiveNavbarprofilepopup] = useState(false);
  const [threeDotmenu, setthreeDotmenu] = useState(false);
  const [workPopup, setworkPopup] = useState(false);
  const history =useHistory()

  const naveSearchBarOpen = () => {
    setnavSearchbar(true);
  };
  const naveSearchbarClose = () => {
    setnavSearchbar(false);
  };
  const profileiconNavBarFuntion = () => {
    setprofileiconNavbar(!profileiconNavbar);
  };
  const threeDotMenuFuntion = () => {
    setthreeDotmenu(!threeDotmenu);
    setresponsiveNavbarprofilepopup(false);
  };
  const workPopupFuntion = () => {
    setworkPopup(!workPopup);
  };
  const threeDotMenuProfileFuntion = () => {
    setthreeDotmenu(false);
    setresponsiveNavbarprofilepopup(true);
  };
  const handleSignOut = () => {
    localStorage.clear()
    history.push("/signin")
  }
  
  return (
    <nav className="shadow-lg">
      {!navSearchbar ? (
        <div>
          <div className="h-14 flex  items-center px-0  justify-center  ">
            <div className="items-center justify-center flex">
              <div className="mr-2">
                <i className="fab fa-linkedin text-blue-500 text-4xl"></i>
              </div>
              <div className="lg:hidden flex">
                <button
                  onClick={naveSearchBarOpen}
                  className="w-12  lg:w-20 opacity-60 border-b-4 border-transparent text-xsopacity-60	focus:opacity-100	 focus:border-black flex flex-col justify-center items-center h-14"
                >
                  <i className="fas fa-search lg:text-base text-2xl"></i>
                  <p className="hidden lg:flex">Search</p>
                </button>
              </div>
              <div className=" hidden lg:flex w-425 ">
                <div className="hidden lg:flex   bg-gray-100 w-280 flex-row items-center h-9 rounded active:w-425 ">
                  <i className="fas fa-search opacity-60 px-2"></i>
                  <input
                    className="bg-gray-100 border-none "
                    type="text"
                    placeholder="Search"
                  ></input>
                </div>
              </div>
            </div>
            <ul className="items-center flex ">
              <li>
                <button className="w-12 lg:w-20  border-b-4 border-transparent text-xs opacity-60 hover:opacity-100	focus:opacity-100 focus:border-black flex flex-col justify-center items-center h-14">
                  <i className="fas fa-home lg:text-base text-2xl"></i>
                  <p className="hidden lg:flex">Home</p>
                </button>
              </li>
              <li>
                <button className="w-12 lg:w-20 border-b-4 border-transparent text-xs opacity-60 hover:opacity-100	focus:opacity-100	 focus:border-black flex flex-col justify-center items-center h-14">
                  <i class="fas fa-user-friends lg:text-base text-2xl"></i>
                  <p className="hidden lg:flex">My Network</p>
                </button>
              </li>
              <li>
                <button className="w-12 lg:w-20 border-b-4 border-transparent text-xs opacity-60 hover:opacity-100	focus:opacity-100	 focus:border-black flex flex-col justify-center items-center h-14">
                  <i className="fas fa-briefcase lg:text-base text-2xl"></i>
                  <p className="hidden lg:flex">Jobs</p>
                </button>
              </li>
              <li>
                <button className="w-12 lg:w-20 border-b-4 border-transparent text-xs opacity-60 hover:opacity-100	focus:opacity-100	 focus:border-black flex flex-col justify-center items-center h-14">
                  <i className="fas fa-comment-dots lg:text-base text-2xl"></i>
                  <p className="hidden lg:flex">Messaging</p>
                </button>
              </li>
              <li>
                <button className="w-12 lg:w-20 border-b-4 border-transparent text-xs opacity-60 hover:opacity-100	focus:opacity-100	 focus:border-black flex flex-col justify-center items-center h-14">
                  <i className="fas fa-bell lg:text-base text-2xl"></i>
                  <p className="hidden lg:flex">Notifications</p>
                </button>
              </li>

              <li className="lg:hidden flex">
                <div>
                  <button
                    onClick={threeDotMenuFuntion}
                    className="w-12 lg:w-20 border-b-4 border-transparent text-xs opacity-60 hover:opacity-100	focus:opacity-100	 focus:border-black flex flex-col justify-center items-center h-14"
                  >
                    <i className="fas fa-ellipsis-h lg:text-base text-2xl"></i>
                  </button>
                </div>
                {/* 3 dotted menu................................................................................................................ */}
                <div>
                  {threeDotmenu && !responsiveNavbarprofilepopup ? (
                    <div className="absolute shadow-lg z-10   bg-white w-48 h-14 mt-16 rounded-full -ml-48 flex justify-around items-center">
                      <button onClick={threeDotMenuProfileFuntion}>
                        {" "}
                        <img
                          className="w-6 h-6 rounded-full"
                          src="./Assets/profilepic.jpg"
                          alt="profile picture"
                        ></img>
                      </button>
                      <button>
                        <i className="fas fa-th text-base opacity-60"></i>
                      </button>
                      <button
                        onClick={workPopupFuntion}
                        className="w-12 lg:w-20 flex flex-col text-yellow-500 h-14 text-xs justify-center items-center"
                      >
                        Try Premium for free
                      </button>
                    </div>
                  ) : null}
                  {!threeDotmenu && responsiveNavbarprofilepopup ? (
                    <div className="h-369.400    p-2 w-264 shadow-lg  m-6 rounded-lg border border-primary bg-white z-30 absolute -ml-64 mt-16">
                      <div className="justify-between items-center bg-white">
                        <div className="flex flex-col justify-center z-30 bg-white ">
                          <div className="flex items-center bg-white">
                            <img
                              className="w-6 h-6 rounded-full"
                              src="./Assets/profilepic.jpg"
                              alt="profile picture"
                            ></img>
                            <div className="flex-col flex items-center justify-center ">
                              <label className="font-bold">name</label>
                              <label>college</label>
                            </div>
                          </div>
                          <button className="border my-2 border-blue-400 text-blue-400 rounded-full">
                            View Profile
                          </button>
                        </div>
                        <hr className=" w-full" />
                        <div className="flex-col flex">
                          <label className=" mt-2 font-bold mb-1">
                            Account
                          </label>
                          <a href="###" className="my-1">
                            Settings & privacy
                          </a>
                          <a href="###" className="my-1">
                            Help
                          </a>
                          <a href="###" className="my-1">
                            Language
                          </a>
                        </div>
                        <hr className=" w-full" />
                        <div className="flex-col flex">
                          <label className="font-bold mt-2 mb-1 ">Manage</label>
                          <a href="###" className="my-1">
                            Posts & activity
                          </a>
                          <a href="###" className="my-1">
                            {" "}
                            Job posting account
                          </a>
                        </div>
                        <hr className=" w-full" />
                      </div>
                      <a onClick={handleSignOut}>Sign out</a>
                    </div>
                  ) : null}
                </div>
              </li>
              <li className=" justify-center items-center hidden lg:flex">
                <div>
                  <button
                    onClick={profileiconNavBarFuntion}
                    className="w-12 lg:w-20 flex flex-col h-14  justify-center items-center"
                  >
                    <div>
                      <img
                        className="w-6 h-6 rounded-full"
                        src="./Assets/profilepic.jpg"
                        alt="profile picture"
                      ></img>
                    </div>
                    <span className="text-xs flex">
                      Me<i class="fas fa-sort-down"></i>
                    </span>
                  </button>
                  {profileiconNavbar ? (
                    <div className="h-369.400  z-30   p-2 w-264 shadow-lg  m-6 rounded-lg border border-primary bg-white absolute -ml-48 mt-4">
                      <div className="justify-between items-center">
                        <div className="flex flex-col justify-center ">
                          <div className="flex items-center">
                            <img
                              className="w-6 h-6 rounded-full"
                              src="./Assets/profilepic.jpg"
                              alt="profile picture"
                            ></img>
                            <div className="flex-col flex items-center justify-center ">
                              <label className="font-bold">name</label>
                              <label>college</label>
                            </div>
                          </div>
                          <button className="border my-2 border-blue-400 text-blue-400 rounded-full">
                            View Profile
                          </button>
                        </div>
                        <hr className=" w-full" />
                        <div className="flex-col flex">
                          <label className=" mt-2 font-bold mb-1">
                            Account
                          </label>
                          <a href="###" className="my-1">
                            Settings & privacy
                          </a>
                          <a href="###" className="my-1">
                            Help
                          </a>
                          <a href="###" className="my-1">
                            Language
                          </a>
                        </div>
                        <hr className=" w-full" />
                        <div className="flex-col flex">
                          <label className="font-bold mt-2 mb-1 ">Manage</label>
                          <a href="###" className="my-1">
                            Posts & activity
                          </a>
                          <a href="###" className="my-1">
                            {" "}
                            Job posting account
                          </a>
                        </div>
                        <hr class=" w-full" />
                      </div>
                      <a href='##' onClick={handleSignOut}>Sign out</a>
                    </div>
                  ) : null}
                </div>
                <button
                  onClick={workPopupFuntion}
                  className="w-12 lg:w-20 flex text-xs opacity-60 flex-col h-14 border-l justify-center  items-center"
                >
                  <i className="fas fa-th text-base"></i>
                  <span className="text-xs flex ">
                    work<i className="fas fa-sort-down text-xs  "></i>
                  </span>
                </button>
                <button className="w-12 lg:w-20 flex flex-col text-yellow-500 h-14 text-xs justify-center items-center">
                  Try Premium for free
                </button>
              </li>
            </ul>
          </div>
          {workPopup ? (
            <div className="absolute  -left-0  flex justify-end  w-full bg-black bg-opacity-40">
              <div className="w-96 rounded-l-2xl mt-px shadow-lg justify-start pb-4 items-center bg-white z-50 flex flex-col ">
                <div className="pr-6  w-full py-2.5 flex justify-end">
                  <button onClick={workPopupFuntion} className="opacity-70">
                    <i className="fas text-2xl fa-times "></i>
                  </button>
                </div>
                <div>
                  <div className="border flex py-2.5">
                    <label className="pl-5 opacity-80">
                      visit more linkedin products
                    </label>
                  </div>
                  <div className="border py-2.5">
                    <div className="flex opacity-80">
                      <div className="justify-center flex items-center w-20">
                        <button className="flex flex-col justify-center items-center text-xs">
                          <i className="fab border text-2xl rounded w-10 h-10 flex justify-center items-center fa-youtube  text-blue-500"></i>
                          Learning
                        </button>
                      </div>
                      <div className="justify-center flex items-center  w-20 h-16">
                        <button className="flex flex-col justify-center items-center text-xs">
                          <i class="far fa-chart-bar text-2xl border  rounded  flex justify-center items-center text-blue-500 w-10 h-10"></i>
                          Insights
                        </button>
                      </div>
                      <div className="justify-center flex items-center w-20 h-16">
                        <button className="flex flex-col justify-center items-center text-xs">
                          <i className="far fa-clipboard text-2xl border  rounded  flex justify-center items-center text-blue-500 w-10 h-10"></i>
                          Post a job
                        </button>
                      </div>
                      <div className="justify-center flex items-center w-20 h-16">
                        <button className="flex flex-col justify-center items-center text-xs">
                          <i class="fas fa-bullseye text-2xl border  rounded  flex justify-center items-center text-blue-500 w-10 h-10"></i>
                          Advertise
                        </button>
                      </div>
                    </div>
                    <div className="flex opacity-80">
                      <div className="justify-center flex items-center w-20 h-16">
                        <button className="flex flex-col justify-center items-center text-xs">
                          <i className="fas fa-compass text-2xl border  rounded  flex justify-center items-center text-blue-500 w-10 h-10"></i>
                          Find Leads
                        </button>
                      </div>
                      <div className="justify-center flex items-center w-20 h-16">
                        <button className="flex flex-col justify-center items-center text-xs">
                          <i className="fas fa-users text-2xl border  rounded  flex justify-center items-center text-blue-500 w-10 h-10"></i>
                          Groups
                        </button>
                      </div>
                      <div className="justify-center flex items-center w-20 h-16">
                        <button className="flex flex-col justify-center items-center text-xs mt-4">
                          <i className="far fa-check-square text-2xl border  rounded  flex justify-center items-center text-blue-500 w-10 h-10"></i>
                          Services Marketplace
                        </button>
                      </div>
                      <div className="justify-center flex items-center w-20 h-16">
                        <button className="flex flex-col justify-center items-center text-xs">
                          <i className="fas fa-money-bill-alt text-2xl border  rounded  flex justify-center items-center text-blue-500 w-10 h-10"></i>
                          Salary
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex-col opacity-80">
                    <div className="border flex py-2.5">
                      <label className="pl-5 font-bold opacity-80">
                        LinkedIn Business Services
                      </label>
                    </div>
                    <div className="border flex pb-4 flex-col">
                      <a href="##" className="pl-5  mt-2 font-bold">
                        Talent Solutions
                      </a>
                      <a href="##" className="pl-5  text-sm">
                        Find, attract and recruit talent
                      </a>
                      <a href="##" className="pl-5 mt-2 font-bold">
                        Sales Solutions
                      </a>
                      <a href="##" className="pl-5  text-sm">
                        Unlock sales opportunities
                      </a>
                      <a href="##" className="pl-5 mt-2 font-bold">
                        Post a job for free
                      </a>
                      <a href="##" className="pl-5  text-sm ">
                        Get your job in front of quality candidates
                      </a>
                      <a href="##" className="pl-5 mt-2 font-bold">
                        Marketing Solutions
                      </a>
                      <a href="##" className="pl-5  text-sm ">
                        Acquire customers and grow your business
                      </a>
                      <a href="##" className="pl-5 mt-2 font-bold">
                        Learning Solutions
                      </a>
                      <a href="##" className="pl-5 text-sm  ">
                        Develop talent across your organization
                      </a>
                    </div>
                    <div className="border flex py-2.5 items-center">
                      <a href="###" className="pl-5 font-bold">
                        {" "}
                        Create a Company Page <i className="fas fa-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      {navSearchbar ? (
        <div className="h-14 flex  items-center lg:px-60 ">
          <div className="items-center px-12 flex">
            <div className="mr-2">
              <i class="fab fa-linkedin text-4xl"></i>
            </div>
            <div className=" w-full">
              <div
                onBlur={naveSearchbarClose}
                className="flex  pr-12 bg-gray-100 w-full flex-row items-center h-9 rounded active:w-425 "
              >
                <button>
                  <i class="fas fa-search opacity-60 px-2"></i>
                </button>
                <input
                  className="bg-gray-100 w-full border-none  "
                  type="text"
                  placeholder="Search"
                ></input>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
