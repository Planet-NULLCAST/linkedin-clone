import Navbar from "../navbar";
import UserCard from "../user-card/user-card";
import Post from "../user-posts/post";
import PostDetails from "../post-details/postDetails";

const home = () => {
  return (
    <div>
      <div className="md:flex hidden flex-col">
        <div className="w-full ">
          <Navbar></Navbar>
          <div className="flex justify-center pt-12 ">
          <div>
            <UserCard></UserCard>
          </div>
          <div className='justify-center flex  flex-col items-center'>
            <div className='w-full  bg-white'>
              <Post></Post>
            </div>
            <button className='flex flex-row pt-4  justify-between items-center w-full px-4 '>
                <hr className=" w-full" />
                <span className='flex text-xs w-32'>Sort by:<select>
                    <option>Top</option>
                    <option>Recent</option>
                    </select></span>
            </button>
            <div className='w-full'>
              <PostDetails></PostDetails>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* .MOBILE VIEW....................................................... */}
      <div className="flex md:hidden flex-col">
        <div className="w-full">
          <Navbar></Navbar>
        </div>
        <div className='w-full'>
            <UserCard></UserCard>
          </div>
          <div className='w-full z-0'>
              <Post></Post>
          </div>
      </div>
    </div>
  );
};

export default home;
