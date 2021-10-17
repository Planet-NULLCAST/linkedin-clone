import {useState} from 'react';
import { BsThreeDots,BsBookmark,BsFillFlagFill,BsEmojiSmile,BsImageFill } from "react-icons/bs";
import { BiWorld} from "react-icons/bi";
import { GrLink,GrFormClose } from "react-icons/gr";
import { ImEmbed2,ImWondering } from "react-icons/im";
import { AiFillCloseCircle,AiFillEyeInvisible} from "react-icons/ai";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { MdVisibility,MdThumbUp} from "react-icons/md";
import { FaRegCommentDots,FaHandsWash,FaHandHoldingHeart,FaHeart  } from "react-icons/fa";
import { CgCornerUpRight } from "react-icons/cg";
import { RiSendPlaneFill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { useSelector } from 'react-redux';

function PostDetails() {
    const [dropdown,setDropdown] = useState(false);
    const [post,setPost] = useState('./Assets/nullcast.jpg');
    const [content,setContent] = useState('sample text');
    const [reactions, setReactions] = useState(false);
    const [like, setLike] = useState(true);
    const [clickedReaction, setClickedReaction] = useState(<MdThumbUp className='text-gray-700 h-8 w-8'/>);
    const [currentReaction, setCurrentReaction] = useState(<span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-sec opacity-60'>Like</span>)
    const [commentBox, setCommentBox] = useState(false);
    const [comment, setComment] = useState('');
    const [commentList, setCommentList] = useState([{'text':'','imageUrl':''}]);
    const [postComment, setPostComment] = useState(false);
    const [messagePopup, setMessagePopup] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [commentCount, setCommentCount] = useState(0);
    const profilePicUrl = useSelector(state => state.profilePicUrl.value);
    const userName = useSelector (state => state.userName.value);

    const reactionList = ()=> {
        setTimeout(() => {setReactions(false)}, 2000);
    }
    const onHandleLike = () => {
        setLike(!like);
        if (like){
             setClickedReaction(<MdThumbUp className='text-blue-700 h-8 w-8' />);
             setCurrentReaction(<span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-blue-700'>Like</span>);
        }
        else {
            setClickedReaction(<MdThumbUp className='text-gray-700 h-8 w-8'/>);
            setCurrentReaction(<span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-gray-700'>Like</span>);
        }
       
    }
    const clickedLike = ()=> {
        setLike(false);
        setClickedReaction(<MdThumbUp className='text-blue-700 h-8 w-8' />);
        setCurrentReaction(<span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-blue-700'>Like</span>);
    }
    const clickedCelebrate = () =>{
        setLike(false);
        setClickedReaction(<FaHandsWash className='text-green-700 h-8 w-8' />);
        setCurrentReaction(<span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-green-700'>Celebrate</span>);
    }
    const clickedSupport = () =>{
        setLike(false);
        setClickedReaction(<FaHandHoldingHeart className='text-purple-700 h-8 w-8' />);
        setCurrentReaction(<span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-purple-700'>Support</span>)
    }
    const clickedLove = () =>{
        setLike(false);
        setClickedReaction(<FaHeart className='text-red-700 h-8 w-8' />);
        setCurrentReaction(<span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-red-700'>Love</span>)
    }
    const clickedInsight = () =>{
        setLike(false);
        setClickedReaction(<HiLightBulb className='text-yellow-500 h-8 w-8' />);
        setCurrentReaction(<span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-yellow-700'>Insight</span>);
    }
    const clickedCurious = () =>{
        setLike(false);
        setClickedReaction(<ImWondering className='text-purple-700 h-8 w-8' />);
        setCurrentReaction(<span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-purple-700'>Curious</span>);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setComment('');
        setImageUrl();
    }
    const handleCommentChange = (e) =>{
        setPostComment(true);
        setComment(e.target.value);
    }
    const handleCommentSubmit = ()=>{
        setCommentList([...commentList,{text:comment,imageUrl}]);
        setCommentCount(commentList.length);
    }
    const handleCommentImage = (e) =>{
        setImageUrl(URL.createObjectURL(e.target.files[0]));
        setPostComment(true);
    }
    return (
        <div className='flex justify-center px-5'>
            <div className='mt-2 sm:w-540 h-auto border border-primary rounded-lg'>
                <header className='flex justify-between mx-4 pt-2 pb-1 border-b border-primary relative'>
                    <div className='text-xs font-normal'>Connections<span className='text-sec opacity-60'> likes this </span></div>
                    <BsThreeDots onClick={() => setDropdown(!dropdown)} className='cursor-pointer rounded-full h-6 w-6 hover:bg-gray-400' />
                    {dropdown && <aside className='absolute bg-white top-8 -right-2 py-2 border border-primary rounded-lg'>
                        <ul className='relative text-base font-normal'>
                            <li className='hover:bg-primary pl-10 cursor-pointer'><BsBookmark className='text-gray-700 absolute left-3 top-1.5'/>Save<br/><span className='text-xs font-normal text-sec opacity-60'>Save for later</span></li>
                            <li className='hover:bg-primary pl-10 cursor-pointer'><GrLink className='text-gray-700 absolute left-3 top-52'/>Copy link to Content</li>
                            <li className='hover:bg-primary pl-10 cursor-pointer'><ImEmbed2 className='text-gray-700 absolute left-3 top-77'/>Embed this post<br/><span className='text-xs font-normal text-sec opacity-60'>Copy and paste embed code on your post</span></li>
                            <li className='hover:bg-primary pl-10 cursor-pointer'><AiFillCloseCircle className='text-gray-700 absolute left-3 top-126'/>Unfollow connection<br/><span className='text-xs font-normal text-sec opacity-60'>Stay connected by stop seeing posts from connection</span></li>
                            <li className='hover:bg-primary pl-10 cursor-pointer'><IoVolumeMuteSharp className='text-gray-700 absolute left-3 top-173'/>Mute user<br/><span className='text-xs font-normal text-sec opacity-60'>Stop seeing posts from user in feed</span></li>
                            <li className='hover:bg-primary pl-10 cursor-pointer'><AiFillEyeInvisible className='text-gray-700 absolute left-3 top-220'/> I dont want to see this<br/><span className='text-xs font-normal text-sec opacity-60'>Let us know why you don't want to see this</span></li>
                            <li className='hover:bg-primary pl-10 cursor-pointer'><BsFillFlagFill className='text-gray-700 absolute left-3 top-271'/>Report this post<br/><span className='text-xs font-normal text-sec opacity-60'>This post is offensive or the account is hacked</span></li>
                            <li className='hover:bg-primary pl-10 cursor-pointer'><MdVisibility className='text-gray-700 absolute left-3 top-316'/>Who can see this post?</li>
                        </ul>
                    </aside>}
                </header>
                <div className='px-4 pt-3 mb-2'>
                    <div className='flex'>
                    <img src='./Assets/profilepic.jpg' alt='profile pic' className='cursor-pointer h-12 w-12 rounded-full' />
                    <div className='ml-2'>
                        <div>
                            <span className='text-sm font-semibold'>userName</span>
                        </div>
                        <div>
                            <h3 className='text-xs font-normal text-sec opacity-60'>Followers</h3>
                            <h4 className='text-xs font-normal text-sec opacity-60'>6h .<span className='relative'> <BiWorld className='absolute top-.3 left-0.5'/></span> </h4>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='mb-2'>
                    <p className='px-4'>{content}</p>
                    <article className='mt-2'>
                        <img src={post} />
                    </article>
                </div>
                <div className='flex justify-start'>
                    <span className='text-xs font-normal text-sec opacity-60'>reactionCount . </span>
                    <span className='text-xs font-normal text-sec opacity-60'>{commentCount} Comments</span>
                </div>
                <div className='relative flex justify-between mx-2 py-1 border-t border-primary'>
                {reactions && <div onMouseLeave={()=> setReactions(false)} onMouseEnter={()=> setReactions(true)}  className='absolute border border-primary flex justify-between w-60 -top-10 -left-7 rounded-full px-6 py-3 bg-white'>
                    <MdThumbUp className='text-blue-700 transform hover:scale-150 cursor-pointer' onClick={clickedLike}/>
                    <FaHandsWash className='text-green-700 cursor-pointer transform hover:scale-150' onClick={clickedCelebrate}/>
                    <FaHandHoldingHeart className='text-purple-700 cursor-pointer transform hover:scale-150'onClick={clickedSupport} />
                    <FaHeart className='text-red-700 cursor-pointer transform hover:scale-150' onClick={clickedLove} />
                    <HiLightBulb className='text-yellow-500 cursor-pointer transform hover:scale-150' onClick={clickedInsight} />
                    <ImWondering className='text-purple-700 cursor-pointer transform hover:scale-150' onClick={clickedCurious}/>
                </div>}
                    <div className='px-2 py-1 flex hover:bg-primary rounded-sm sm:px-5 sm:py-2 cursor-pointer' onMouseEnter={()=>setReactions(true)} onClick={onHandleLike}>{clickedReaction}{currentReaction}</div>
                    <div className='px-2 py-1 flex hover:bg-primary rounded-sm sm:px-5 sm:py-2 cursor-pointer' onClick={()=>setCommentBox(true)}><FaRegCommentDots className='text-gray-700 h-8 w-8'/><span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-sec opacity-60'>Comment</span></div>
                    <div className='px-2 py-1 flex hover:bg-primary rounded-sm sm:px-5 sm:py-2 cursor-pointer'><CgCornerUpRight className='text-gray-700 h-8 w-8'/><span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-sec opacity-60'>Share</span></div>
                    <div className='px-2 py-1 flex hover:bg-primary rounded-sm sm:px-5 sm:py-2 cursor-pointer' onClick={()=>setMessagePopup(true)}><RiSendPlaneFill className='text-gray-700 h-8 w-8'/><span className='hidden xs:block font-semibold text-base leading-7 pl-2 text-sec opacity-60'>Send</span></div>
                </div>
                {commentBox && <div className='flex pt-1 px-4 pb-2 w-full'>
                    <img src='./Assets/profilepic.jpg' className='mr-1 rounded-full h-10 w-10'/>
                    <form className='relative w-full' onSubmit={handleFormSubmit} >
                        <div className='pl-3 border border-primary rounded-full w-full'>
                            <textarea name='userComment' value={comment} onChange={handleCommentChange} placeholder='Add a comment...' className='w-full pt-1 outline-none h-8 overflow-hidden'/>
                            <BsEmojiSmile className='absolute text-gray-700 right-12 top-3 cursor-pointer'/>
                            <input type='file' className='hidden' id='commentImage' onChange={handleCommentImage}/>
                            <label for='commentImage'><BsImageFill className='absolute text-gray-700 right-5 top-3 cursor-pointer'/></label>
                        </div>
                    {postComment && <button onClick={handleCommentSubmit} className='mt-3 text-sm bg-blue-700 py-1 px-3 rounded-b-2xl rounded-t-2xl text-white font-semibold'>Post</button>}
                    </form>
                </div>}
                <div className='my-3'>
                {commentList.map((comment) =><section className='my-3'>
                    <div className='flex px-4'>
                        <img src={profilePicUrl} className='mr-1 rounded-full h-10 w-10'/>
                        <div className='bg-commentBg w-full px-3 rounded-lg'>
                            <h2 className='text-xs text-sec opacity-90 font-semibold'>{userName}</h2>
                            <p className='text-xs text-sec opacity-60 font-normal'>Description</p>
                            <div className='my-1 w-full break-words h-auto'>
                                <p>{comment.text}</p>
                                <img src={comment.imageUrl} />
                            </div>
                        </div>   
                    </div>
                </section>)}
                </div>
                {messagePopup && <div className='absolute right-48 bg-white w-97 h-81 border border-primary rounded-lg'>
                    <header className='flex justify-between border-b h-10 border-primary px-2 items-center'>
                        <h3 className='text-sm font-semibold text-sec opacity-90'>New message</h3>
                        <GrFormClose className='text-gray-700 cursor-pointer rounded-full hover:bg-gray-400' onClick={()=>setMessagePopup(false)}/>
                    </header>
                    <div className='shadow-md py-1'>
                    <input type='text' className='py-1 pl-2 pr-8 w-72 h-7 outline-none' placeholder='Type a name or multiple names'/>
                    </div>
                    <div className='p-2'>
                        <input className='text-sec opacity-60 outline-none' type='text' placeholder='Write a message...'></input>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default PostDetails
