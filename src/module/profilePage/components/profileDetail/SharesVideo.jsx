import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import ReactPlayer from 'react-player/lazy';
// Icons
import { FaHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineModeComment } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";


const SharesVideo = ({ closeModal, currentVideo }) => {

    const [isHearted, setIsHearted] = useState(false); //Hert button control in profile

    return (
        <div className='fixed tablet:top-20 inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm  tablet:bg-none z-50'>
            <div className='w-full max-w-xl bg-secondaryGray shadow-xl rounded-lg'>
                <span className='text-white absolute z-40 cursor-pointer top-3 right-3 tablet:top-10 tablet:right-5'>
                    <IoMdClose onClick={closeModal} size={25} className='hover:opacity-80' />
                </span>
                <div className='video-container'>
                    <ReactPlayer
                        loop={false}
                        playsInline
                        light={false}
                        controls={true}
                        url={[currentVideo.name]}
                        width='100%'
                        height='100%'
                        playing={true}
                        muted={true}
                        style={{ borderRadius: '20px' }}
                    />
                </div>
                <div className='flex flex-col items-start justify-between p-3'>
                    <div className='flex flex-col gap-2'>
                        <div className='w-full flex gap-3 items-start justify-between cursor-pointer text-white'>
                            <div className='flex items-center gap-2' >
                                <div>
                                    {isHearted ? (
                                        <IoMdHeart
                                            size={18}
                                            onClick={() => setIsHearted(!isHearted)}
                                            className={`heart-icon h-4 w-4  ${isHearted ? 'hearted text-red-700 animate-heart' : ''}`}
                                        />
                                    ) : (
                                        <FaHeart
                                            onClick={() => setIsHearted(!isHearted)}
                                            className={`heart-icon h-4 w-4  ${isHearted ? 'hearted text-red-700 mb-1 animate-heart' : ''}`}
                                        />
                                    )}
                                </div>                                
                                <MdOutlineModeComment className={`h-4 w-4 hover:opacity-60`} />
                                <BsShare className={`h-4 w-4 mb-1 hover:opacity-60`} />
                            </div>
                            < LuBookmark className={`h-4 w-4 mb-1 hover:opacity-60`} />
                        </div>
                        <h3 className='text-xs text-start text-white'>23 beğenme, 12 yorum</h3>
                        <div className='flex items-start gap-2 text-xs'>
                            <h3 className='text-white font-semibold'>cbrlKilinc</h3>
                            <p className='text-start text-white font-light'>
                                This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SharesVideo