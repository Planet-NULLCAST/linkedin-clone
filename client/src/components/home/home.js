import Navbar from "../navbar";
import UserCard from "../user-card/user-card";
import Post from "../user-posts/post";
import PostDetails from "../post-details/postDetails";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { SERVER_URL } from "../../config";
import { LoginContext } from "../../contexts/LoginContext";

const Home = () => {
  const [showUserCard, setShowUserCard] = useState("hidden");
  const [showMore, setShowMore] = useState(true);
  const token = localStorage.getItem("token");
  const {
    userName,
    setUserName,
    profilePicUrl,
    setProfilePicUrl,
    setId,
    setCountry,
    setCity,
  } = useContext(LoginContext);
  const [postList, setPostList] = useState([]);

  const getAllPosts = () => {
    fetch(`${SERVER_URL}/posts`, {
      method: "GET",
      headers: {
        Authorization: "Bearer" + " " + token,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setPostList(json);
        console.log(postList);
      });
  };

  useEffect(async () => {
    if (!token) {
      return <Redirect to="/signin" />;
    }

    const response = await fetch(`${SERVER_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: "Bearer" + " " + token,
      },
    });
    const json = await response.json();
    if (json["error"]) {
      return <Redirect to="/signin" />;
    } else {
      setUserName(json.user.userName);
      setId(json.user._id);
      setCountry(json.user.country);
      setCity(json.user.city);
      if (json.user.profilePicPath) {
        setProfilePicUrl(`${SERVER_URL}/${json.user.profilePicPath}`);
      }
    }
    getAllPosts();
  }, []);

  // const fetchUser = async (userId) => {
  //   const response = await fetch(`${SERVER_URL}/users/${userId}`,{
  //     method : "GET",
  //     headers : {
  //       Authorization: "Bearer" + " " + token
  //     }
  //   })
  //   const json = await response.json()
  //   setAuthorName(json.userName)
  //   setAuthorCity(json.city)
  //   setAuthorCountry(json.country)
  // }

  return (
    <div>
      <div className="md:flex hidden flex-col">
        <div className="w-full ">
          <Navbar />
          <div className="bg-mainbg">
            <div className="flex justify-center pt-12 ">
              <div>
                <UserCard />
              </div>
              <div className="justify-center flex  flex-col items-center">
                <div className="w-full">
                  <Post />
                </div>
                <button className="flex flex-row pt-4  justify-between items-center w-full px-4 ">
                  <hr className=" w-full" />
                  <span className="flex text-xs w-32">
                    Sort by:
                    <select className="bg-mainbg">
                      <option>Top</option>
                      <option>Recent</option>
                    </select>
                  </span>
                </button>
                <div className="w-full">
                  <ul>
                    {postList.map((post, index) => {
                      return (
                        <li key={index}>
                          <PostDetails post={post} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .MOBILE VIEW....................................................... */}
      <div className="flex md:hidden flex-col">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="bg-mainbg sm:px-16">
          <div className="w-full mt-2">
            <UserCard showUserCard={showUserCard}></UserCard>
          </div>
          {showMore && (
            <span
              className="flex justify-center mt-3 text-sec opacity-60 font-semibold"
              onClick={() => {
                setShowUserCard("block");
                setShowMore(false);
              }}
            >
              <h3 className="text-sm">Show more</h3>
              <RiArrowDropDownLine />
            </span>
          )}
          <div className="w-full z-0 mt-3">
            <Post />
          </div>
          <button className="flex justify-between pt-2 items-center w-full">
            <hr className="sm:w-4/5 w-3/5" />
            <span className="inline text-xs w-auto">
              Sort by:
              <select className="bg-mainbg">
                <option>Top</option>
                <option>Recent</option>
              </select>
            </span>
          </button>
          <div className="w-full">
            <ul>
              {postList.map((post) => {
                return (
                  <li>
                    {/* <PostDetails {...post} /> */}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
