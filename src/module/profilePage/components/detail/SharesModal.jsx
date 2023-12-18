import React from 'react'
import { IoMdClose } from "react-icons/io";
const SharesModal = ({ onClose, videoRef,videoSource }) => {
    return (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-[700px] bg-black z-40'>
            <span onClick={onClose} className='text-white absolute z-40 cursor-pointer top-2 right-2'>
                <IoMdClose size={25} className='hover:opacity-80' /> 
            </span>
            <video ref={videoRef} width="100%" height="100%" controls>
                <source src="./video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default SharesModal