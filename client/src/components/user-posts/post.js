import { FcAddImage } from "react-icons/fc";
import { FcVideoCall } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcDiploma2 } from "react-icons/fc";
import { useState } from "react";
import React from "react";
import { BsCardImage } from "react-icons/bs";
const Post = () => {
  const addHashtag = () => {
    var text = document.getElementById("text");
    text.value += "#";
  };
  const imageChoosefuntion = () => {
    setimageChoose(true);
    setcreatePost(false);
    setUrl("");
    setselectImagetoshare(false);
    setselectImage(false);
  };
  const closeCreatepost = () => {
    setcreatePost(false);
    setimageChoose(false);
  };
  const createPostfuntion = () => {
    setcreatePost(true);
    setUrl("");
    setselectImagetoshare(true);
    setselectImage(true);
  };
  const Addphoto = (e) => {
    setUrl(URL.createObjectURL(e.target.files[0]));
    setselectImagetoshare(true);
    setselectImage(true);
  };
  const addphotoTopost = () => {
    setcreatePost(true);
    setselectImage(false);
  };
  const [url, setUrl] = useState("");
  const [createPost, setcreatePost] = useState(false);
  const [imageChoose, setimageChoose] = useState(false);
  const [selectImagetoshare, setselectImagetoshare] = useState(false);
  const [selectImage, setselectImage] = useState(false);
  return (
    <div>
      {!createPost && !imageChoose ? (
        <div>
          <div className="p-4 w-99 h-29 border rounded-xl">
            <div className="flex">
              <img
                src="./Assets/profilepic.jpg"
                alt="profile pic"
                className="h-12 rounded-full w-12 mr-4"
              ></img>
              <div className="w-full py-2.5 border px-4 my-1 h-12 text-left rounded-full hover:bg-gray-100 flex justify-center items-center">
                {" "}
                <button onClick={() => createPostfuntion()}>
                  Start a post
                </button>
              </div>
            </div>
            <div className="items-center justify-between flex">
              <div className="w-18 h-10  hover:bg-gray-100 flex justify-center items-center">
                <button
                  className="flex justify-center items-center  text-xs"
                  onClick={imageChoosefuntion}
                >
                  <FcAddImage className="w-6 h-10 mr-4 " />
                  Photo
                </button>
              </div>
              <div className="w-18 h-10  hover:bg-gray-100 flex justify-center items-center">
                <button className="flex justify-center items-center  text-xs">
                  <FcVideoCall className="w-6 h-10 mr-4 " />
                  Video
                </button>
              </div>
              <div className="w-18 h-10  hover:bg-gray-100 flex justify-center items-center">
                <button className="flex justify-center items-center  text-xs">
                  <FcCalendar className="w-6 h-10 mr-4 " />
                  Event
                </button>
              </div>
              <div className="w-25 h-10  hover:bg-gray-100 flex justify-center items-center">
                <button className="flex justify-center items-center  text-xs">
                  <FcDiploma2 className="w-6 h-10 mr-4 " />
                  Write article
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {createPost ? (
        <div>
          <div className="flex justify-between items-center p-4 w-99 h-27">
            <p className="text-xl">Create a post</p>
            <button onClick={() => closeCreatepost()} className="w-4">
              <img
                src="./Assets/cross bar.svg"
                alt="cross-bar"
                className="w-12 "
              ></img>
            </button>
          </div>
          <hr className=" w-99" />
          <div className="p-4 w-99">
            <div className="flex flex-col w-99">
              {!url ? (
                <div className="w-99">
                  <div className="flex">
                    <img
                      src="./Assets/profilepic.jpg"
                      alt="profile pic"
                      className="h-14 rounded-full h-35 w-16"
                    ></img>
                    <div>
                      <label>Arjun c Ramesh</label>
                      <div className="border justify-evenly border-black opacity-75 rounded-full flex w-full items-center">
                        <button className="flex items-center ">
                          <img
                            src="./Assets/earth.svg"
                            alt="profile pic"
                            className="w-3.5 "
                          ></img>
                          Anyone
                          <img
                            src="./Assets/downarrow.svg"
                            alt="profile pic"
                            className="w-3.5"
                          ></img>
                        </button>
                      </div>
                    </div>
                  </div>
                  <input
                    className="pb-24 pt-5 max-w-md w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
                    type="text"
                    placeholder="What do u want to talk  about?"
                    id="text"
                  />
                </div>
              ) : null}
              {url ? (
                <div className="w-99 h-60 overflow-scroll border-none p-4">
                  <div className="flex">
                    <img
                      src="./Assets/profilepic.jpg"
                      alt="profile pic"
                      className="h-14 rounded-full h-35 w-16"
                    ></img>
                    <div>
                      <label>Arjun c Ramesh</label>
                      <div className="border justify-evenly border-black opacity-75 rounded-full flex w-full items-center">
                        <button className="flex items-center ">
                          <img
                            src="./Assets/earth.svg"
                            alt="profile pic"
                            className="w-3.5 "
                          ></img>
                          Anyone
                          <img
                            src="./Assets/downarrow.svg"
                            alt="profile pic"
                            className="w-3.5"
                          ></img>
                        </button>
                      </div>
                    </div>
                  </div>
                  <input
                    className="py-5  max-w-md w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent"
                    type="text"
                    placeholder="What do u want to talk  about?"
                    id="text"
                  />
                  <div>
                    <img src={url} />
                  </div>
                </div>
              ) : null}
              {/* <input className='h-auto max-w-md w-full border border-transparent focus:outline-none focus:ring-2 focus:ring-transparent focus:border-transparent' type="image" id="text" />  */}
              <button
                className=" w-24 mt-12 text-blue-300"
                onClick={addHashtag}
              >
                Add hashtag
              </button>
            </div>
          </div>
          <div className="items-center justify-start pl-4 flex opacity-70">
            <div className="items-center justify-between flex h-10 w-66">
              <div className="hover:bg-gray-300  rounded-full w-10 h-10 flex items-center justify-center">
                <button
                  className="flex justify-center items-center  text-xs"
                  onClick={() => imageChoosefuntion()}
                  className="flex justify-center items-center  text-xs"
                >
                  <BsCardImage className="w-6 h-10" />
                </button>
              </div>
              <div className="hover:bg-gray-300  rounded-full w-10 h-10 flex items-center justify-center">
                <button className="flex justify-center items-center  text-xs">
                  <i className="fab fa-youtube  text-xl"></i>
                </button>
              </div>
              <div className="hover:bg-gray-300  rounded-full w-10 h-10 flex items-center justify-center">
                <button className="flex justify-center items-center  text-xs">
                  <i className="fas fa-file-alt text-xl"></i>
                </button>
              </div>
              <div className="hover:bg-gray-300  rounded-full w-10 h-10 flex items-center justify-center">
                <button className="flex justify-center items-center  text-xs">
                  <i className="fas fa-briefcase text-xl"></i>
                </button>
              </div>
              <div className="hover:bg-gray-300  rounded-full w-10 h-10 flex items-center justify-center">
                <button className="flex justify-center items-center  text-xs">
                  <i className="fas fa-certificate text-xl"></i>
                </button>
              </div>
              <div className="hover:bg-gray-300  rounded-full w-10 h-10 flex items-center justify-center">
                <button className="flex justify-center items-center  text-xs">
                  <i className="fas fa-poll text-xl"></i>
                </button>
              </div>
              <div className="hover:bg-gray-300  rounded-full w-10 h-10 flex items-center justify-center">
                <button className="flex justify-center items-center  text-xs">
                  <i className="fas fa-ellipsis-h text-xl"></i>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center border-l-2">
              <div className="hover:bg-gray-300  w-17 h-5 rounded-full flex items-center justify-center mr-13">
                <button className="flex justify-center items-center  text-xs">
                  <i className="far fa-comment-dots  text-xl"></i>Anyone
                </button>
              </div>
              <div className="bg-gray-300 w-16 h-8 flex justify-center rounded-full items-center">
                <button>post</button>
              </div>
            </div>
          </div>
        </div>
      ) : imageChoose ? (
        <div className="w-98 max-h-2 py-4">
          <div className="flex justify-between items-center px-6">
            <label className="h-7">Edit your photo</label>
            <button onClick={closeCreatepost}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <hr className="h-px" />
          <div className="h-14">
            {!selectImagetoshare ? (
              <div>
                {" "}
                <input
                  type="file"
                  id="img"
                  onChange={(e) => Addphoto(e)}
                  className=" justify-center items-center hidden text-xs"
                />
                <label
                  className="text-blue-500 h-24 flex justify-center items-center"
                  for="img"
                >
                  Select images to share
                </label>
                <hr className="h-px" />
                <div className="flex justify-end py-2 px-4">
                  <button
                    onClick={createPostfuntion}
                    className=" rounded-full py-px px-2 border border-blue-400 text-blue-400 "
                  >
                    Back
                  </button>
                </div>
              </div>
            ) : null}
            {selectImage ? (
              <div>
                {url ? (
                  <div className="w-99 px-6 h-60 overflow-scroll border-none">
                    <img className="w-99" src={url} />
                  </div>
                ) : null}
                <hr />
                <div className="h-11 w-98 flex justify-start">
                  <button className="w-20  px-3 py-5 flex text-center items-center justify-center  hover:bg-gray-200">
                    Edit
                  </button>
                  <button className="w-20 px-3 py-5  flex text-center items-center justify-center  hover:bg-gray-200">
                    Tag
                  </button>
                  <button className="w-20  px-3 py-5  flex text-center items-center justify-center  hover:bg-gray-200">
                    Alt.Text
                  </button>
                </div>
                <hr className="h-px w-px" />
                <div className="py-3 px-6 flex justify-end items-center">
                  <button
                    onClick={addphotoTopost}
                    className="w-16 bg-blue-500 rounded-full text-white"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Post;
