import Navbar from "../navbar";
import UserCard from "../user-card/user-card";
import Post from "../user-posts/post";
import PostDetails from "../post-details/postDetails";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useState } from "react";

const Home = () => {
  const [showUserCard, setShowUserCard] = useState(false);
  const [showMore, setShowMore] = useState(true)
  return (
    <div>
      <div className="md:flex hidden flex-col">
        <div className="w-full ">
          <Navbar></Navbar>
          <div className='bg-mainbg'><div className="flex justify-center pt-12 ">
          <div>
            <UserCard></UserCard>
          </div>
          <div className='justify-center flex  flex-col items-center'>
            <div className='w-full'>
              <Post></Post>
            </div>
            <button className='flex flex-row pt-4  justify-between items-center w-full px-4 '>
                <hr className=" w-full" />
                <span className='flex text-xs w-32'>Sort by:<select className='bg-mainbg'>
                    <option>Top</option>
                    <option>Recent</option>
                    </select></span>
            </button>
            <div className='w-full'>
              <PostDetails></PostDetails>
            </div>
          </div></div>
        </div>
        </div>
      </div>
      {/* .MOBILE VIEW....................................................... */}
      <div className="flex md:hidden flex-col">
        <div className="w-full">
          <Navbar></Navbar>
        </div>
        <div className='bg-mainbg xs:px-16'>
          <div className='w-full mt-2'>
            <UserCard showUserCard={showUserCard}></UserCard>
          </div>
          {showMore && <span className='flex justify-center mt-3 text-sec opacity-60 font-semibold' onClick={()=>{setShowUserCard(true); setShowMore(false)}}>
            <h3 className='text-sm'>Show more</h3>
            <RiArrowDropDownLine/>
          </span>}
          <div className='w-full z-0 mt-3'>
              <Post></Post>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
