import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { BsFilePlayFill } from "react-icons/bs";
import ReactPlayer from 'react-player/lazy';
// Icons
import { FaHeart } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { BsBoxArrowUp } from "react-icons/bs";
import { MdOutlineModeComment } from "react-icons/md";
import { BsShare } from "react-icons/bs";



const SharesVideo = ({ closeModal,currentVideo }) => {
    
    const [isHearted, setIsHearted] = useState(false); //Hert button control in profile

    return (
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] rounded-lg bg-secondaryGray z-50'>
            <span  className='text-white absolute z-40 cursor-pointer top-2 right-2'>
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
                    style={{ marginRight: '20px', borderRadius: "20px" }}
                />
            </div>
            <div className='flex items-start justify-between p-3  '>
                <div className='flex flex-col gap-1'>
                    <div className=' w-full flex gap-3 items-start justify-start cursor-pointer text-white'>
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
                        <MdOutlineModeComment className={`h-4 w-4  hover:opacity-60`} />
                        <BsShare className={`h-4 w-4 mb-1 hover:opacity-60`} />
                    </div>
                    <h3 className='text-[11px] text-start text-white' >23 beğenme, 12 yorum</h3>
                    <div className='flex items-start gap-2 text-[11px] '>
                        <h3 className=' text-white font-semibold'>cbrlKilinc</h3>
                        <p className=' text-start text-white font-light'>
                            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </p>
                    </div>

                </div>
                <div className='text-white' >
                    <BsBoxArrowUp className={`h-4 w-4 cursor-pointer hover:opacity-60`} />
                </div>
            </div>
        </div>
    )
}

export default SharesVideo