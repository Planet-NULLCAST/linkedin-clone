import React from 'react';
import { MdBookmark } from "react-icons/md";
import {useState} from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeUrl } from '../../Redux/profilePic/profilePic';

function UserCard() {
    const userName = useSelector (state => state.userName.value);
    const [modal,setModal] = useState(false);
    const [cropmodal,setCropModal] = useState(false);
    const [url,setUrl] = useState('');
    const [image, setImage] = useState('');
    const [popup, setPopup] = useState(false)
    const profilePicUrl = useSelector(state => state.profilePicUrl.value);
    const dispatch = useDispatch();
    const [crop,setCrop] = useState({
        'aspect': 1/1
    })
    const addPhoto = (e) => {
        setUrl(URL.createObjectURL(e.target.files[0]));
        setCropModal(true);
        setModal(false)
    }

    const getCroppedImg = () => {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
          );

          const base64Image = canvas.toDataURL("image/jpeg");
          
          (function() {
               dispatch(changeUrl(base64Image));
          })();

          setTimeout(() => {
            alert('Successfully Updated');
          }, 100);
          setCropModal(false);
          setModal(false); 
        }
      
    return (
        <div id = 'div' className='flex'>
            <div className='w-auto  md:w-60 border border-primary rounded-lg'>
                <div className='relative '>
                    <img src='./Assets/LinkedIn-Bg.png' alt='cover pic' className='rounded-t-lg' />
                    <img src={profilePicUrl} alt='profile pic' className='cursor-pointer absolute left-44 top-78 md:left-20 md:top-50 h-14 rounded-full  w-29' />
                </div>

                <div className='text-center mt-12 border-b border-primary pb-4'>
                    <h1 className='cursor-pointer text-base hover:underline'>Welcome, {userName}</h1>
                    <span onClick={() => setModal(true)}><span className='cursor-pointer text-primary text-xs hover:underline'>Add a photo</span></span>
                </div>
            
                <div className="mt-3 md:pb-3 border-b border-primary">
                    <h3 className='cursor-pointer pl-3.5 text-xs text-sec text-opacity-60 font-semibold leading-4 hover:bg-primary'>Who viewed your profile</h3>
                    <h3 className='pl-3.5 text-xs cursor-pointer text-sec text-opacity-60 font-semibold leading-7 hover:bg-primary'>Connections</h3>
                </div>
                <div className='p-3 cursor-pointer relative border-b border-primary hover:bg-primary'><>
                    <h3 className='text-xs text-sec text-opacity-60'>Access Exclusive tools & insights</h3>
                    <img src='./Assets/premium_icon.png' className='absolute h-3.5 w-3.5 top-10 left-0'/>
                    <h3 className='text-xs font-semibold ml-5'>Try Premium for free</h3></>
                </div>
                <div className='relative p-3 hover:bg-primary'>
    
                <MdBookmark className='absolute cursor-pointer left-0' />
                <h3 className='text-xs font-semibold ml-6'>My items</h3>
                </div>
            </div>
            { modal && <div className='absolute flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-10'> 
            <div className='shadow-lg sm:w-744  rounded-lg border border-primary bg-white'>
                <header className='flex justify-between py-4 px-6 border-b border-primary'>
                    <h1 className='text-xl font-normal'>Add Photo</h1>
                    <h1 onClick={() => setModal(false)} className='cursor-pointer rounded-full hover:bg-gray-300 p-2 text-base'>X</h1>
                </header>
                <div className='py-8 sm:pt-10 sm:pb-12 px-4 border-b border-primary flex flex-col items-center'>
                    <p className='font-normal text-2xl'>No professional headshot needed!</p>
                    <p className='font-normal text-2xl'>Just something that represents you.</p>
                    <img src ='./Assets/linkedin-photoes.JPG' className='mt-6 w-496'></img>
                    <h3 className='text-sec text-opacity-60'>Take or upload a photo. Then crop, filter and adjust it to perfection.</h3>
                </div>
                <footer>
                    <div className='relative py-4 px-6 flex justify-end'>
                    <button className='w-auto mr-1 right-40 hover:bg-blue-100 text-blueclr py-1.5 px-4 font-semibold border border-blue-600 text-base rounded-b-2xl rounded-t-2xl'>Use camera</button>
                    <input type='file' id='photo' className='hidden' onChange={addPhoto} />
                    <label for='photo' className='w-auto hover:bg-blue-900 cursor-pointer bg-blue-600 py-1.5 px-4 rounded-b-2xl rounded-t-2xl text-white sm:font-semibold'>Upload photo</label>           
                    </div>
                </footer>
            </div> </div>}
            {cropmodal && <div className='absolute flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-10'>
                <div className='h-auto shadow-lg border border-primary m-6 w-680 rounded-lg'>
                <header className='flex justify-between py-4 px-6 bg-white'>
                    <h1 className='text-xl font-normal'>Edit photo</h1>
                    <h1 onClick={() => setPopup(true)} className='cursor-pointer rounded-full hover:bg-gray-300 p-2 text-base'>X</h1>
                </header>
                <div className='flex items-center bg-black justify-center py-4 h-auto'>
                    <ReactCrop className='h-400'  src={url} onImageLoaded={setImage} crop={crop} onChange={(newCrop) => setCrop(newCrop)} />
                </div>
                <footer className='flex justify-end py-4 px-6 bg-white'>
                    <input type='file' id='changephoto' className='hidden' onChange={addPhoto}/>
                    <label for='changephoto' className='mr-4 hover:border-8 cursor-pointer hover:bg-gray-100 py-1.5 px-4 rounded-b-2xl rounded-t-2xl text-gray-500 border border-gray font-semibold'>Change photo</label>
                    <button type='button' className='hover:bg-blue-900 bg-blue-600 py-1.5 px-4 rounded-b-2xl rounded-t-2xl text-white font-semibold' onClick={getCroppedImg}>Save photo</button>
                </footer>
            </div></div>}
            {popup && <div className='absolute w-full h-full flex justify-center items-center'>
                <div className='sm:w-81 bg-white rounded-lg'>
                <header className='flex justify-between px-4 pt-4 border-b border-primary'>
                    <h1>Discard Changes</h1>
                    <h1 className='cursor-pointer rounded-full hover:bg-gray-300 pb-2 pt-0.5 text-base' onClick={()=> setPopup(false)}>X</h1>
                </header>
                <div className='p-4 border-b border-primary'>
                    <p className='text-sec text-opacity-90 text-base'>Are you sure you want to discard changes you made?</p>
                </div>
                <footer className='flex justify-end py-3 px-4'>
                    <button type='button' onClick={()=> setPopup(false)} className='mr-4 hover:border-4 hover:bg-blue-100 py-1.5 px-4 rounded-b-2xl rounded-t-2xl text-blue-700 border-2 border-blue-700 font-semibold'>Cancel</button>
                    <button type='button' onClick={()=>{setPopup(false); setCropModal(false); setModal(true)}} className='hover:bg-blue-900 bg-blue-600 py-1.5 px-4 rounded-b-2xl rounded-t-2xl text-white font-semibold'>Discard</button>
                </footer>
            </div></div>}
        </div>
    )
}

export default UserCard;