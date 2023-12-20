"use client"
import React, { useState } from 'react';

// Components
import Detail from "../profilePage/components/detail/Detail";
import Modal from "../profilePage/components/Modal";
import Rating from "../../package/components/content/Rating";
import Meeting from "../../package/components/content/Meeting";

// Icons
import { BiComment } from "react-icons/bi";
import { FaBullseye, FaMessage } from "react-icons/fa6";
import { HiVideoCamera } from "react-icons/hi2";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { BsBoxArrowUp } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import { BiSolidComment } from "react-icons/bi";
const ProfilePageLayout = () => {

    const [isHearted, setIsHearted] = useState(false); //Hert button control in profile
    const [isCommented, setIsCommented] = useState(false);
    const [isModal, setIsModal] = useState(false); //Social media field opening control
    const [detailControl, setDetailControl] = useState("general")

    const handleOpenCommentDetailPage = () => {
        if (!isCommented && detailControl !== "evaluation") {
            setIsCommented(true)
            setDetailControl("evaluation")
        }else if (isCommented && detailControl !== "evaluation"){
            setIsCommented(true)
            setDetailControl("evaluation")
        }else if(isCommented && detailControl === "evaluation"){
            setIsCommented(FaBullseye)
            setDetailControl("general")
        }
    }
    console.log(isCommented)
    return (
        <div className='tablet:fixed bg-bgGray w-full  mx-auto  z-0 pt-20 tablet:pt-28 pb-10'>
            <div className=' max-w-[584px] w-full  miniTablet:max-w-[768px] tablet:max-w-[1920px] mx-auto flex  flex-col items-center telefon:items-start tablet:flex-row  gap-5 text-center px-5 laptop:px-10'>
                <div id='fake-window' className='overflow-y-auto tablet:h-[calc(100vh_-_140px)] bg-white w-full tablet:w-2/5 laptop:max-w-[600px] p-3 border shadow-lg rounded-3xl'>
                    <div className='relative max-w-full flex flex-col miniTelefon:flex-row items-start gap-3'>
                        <img className='h-auto rounded-lg border-4 w-full miniTelefon:w-[150px]' src='https://www.livemedy.com/tr/files/download/950624a9-dd4b-406d-b34e-d52799db33ee' />
                        <div className='w-full flex flex-col justify-between '>
                            <div className='flex flex-col justify-start items-start gap-1'>
                                <h1 className='text-start text-[18px]' >Seda <br /> Odabaşı Dinç</h1>
                                <h3 className='text-textGray text-xs'>Uzman, Klinik Psikoloji</h3>
                            </div>
                            <div className='absolute bottom-24 miniTelefon:top-0 left-0 w-full flex gap-3 items-start justify-end cursor-pointer'>
                                {isHearted ? (
                                    <IoMdHeart
                                        size={18}
                                        onClick={() => setIsHearted(!isHearted)}
                                        className={`heart-icon ${isHearted ? 'hearted text-red-700 animate-heart' : ''}`}
                                    />
                                ) : (
                                    <IoMdHeartEmpty
                                        onClick={() => setIsHearted(!isHearted)}
                                        className={`heart-icon ${isHearted ? 'hearted text-red-700 mb-1 animate-heart' : ''}`}
                                    />
                                )}
                                <BsBoxArrowUp onClick={() => { setIsModal(!isModal) }} className={`${isModal ? "text-primaryBlue" : ""} hover:opacity-60`} />
                            </div>
                            <div className='miniTelefon:absolute py-5 miniTelefon:py-0 miniTelefon:bottom-0 left-0 w-full flex gap-3 items-center justify-end cursor-pointer'>
                                <div className='flex items-center gap-1 mb-1 ' onClick={handleOpenCommentDetailPage} >
                                    <Rating size={14} color="secondaryBlue" /> {/*Is a Component */}
                                    <p className="text-xs mt-1">4.95</p>
                                </div>
                                <div className='flex items-center gap-1 ' >
                                    <h1 className='text-xs font-semibold'>12</h1>
                                    {isCommented && detailControl === "evaluation"
                                        ?
                                        <BiSolidComment onClick={handleOpenCommentDetailPage} />
                                        :
                                        <BiComment onClick={handleOpenCommentDetailPage} className='hover:opacity-60' />
                                    }
                                </div>
                            </div>
                            <div className='absolute bottom-4 miniTelefon:bottom-8 telefon:bottom-0 tablet:bottom-10 flex items-center gap-2 text-xs cursor-pointer' >
                                <button className='bg-primaryGreen hover:opacity-80 text-white  rounded-md  transition duration-300 ease-in-out flex items-center px-3 py-1 gap-1'>
                                    <FaMessage className='text-gray-100 hover:opacity-90 ' />
                                    <h1 className='hover:opacity-90 text-[10px]' >Mesaj</h1>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Modal isModal={isModal} />
                    <div className=' flex items-center w-full justify-between gap-[2px] mt-5 text-textBoldBlue font-semibold' >
                        <div className='flex flex-col items-center justify-center w-full gap-1 p-5 bg-lighBlue rounded-s-xl ' >
                            <h1 className='text-[14px]' >Görüşme</h1>
                            <div className='flex items-center gap-2' >
                                <HiVideoCamera size={20} />
                                <h6 className='text-[12px]' >28</h6>
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-1 p-5 bg-lighBlue ' >
                            <h1 className='text-[14px]' >Diller</h1>
                            <div className='flex items-center justify-center gap-2' >
                                <FaEarthAmericas />
                                <h6 className='text-[12px]' >TR</h6>
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-1 p-5 bg-lighBlue rounded-e-xl' >
                            <h1 className='text-[14px] ' >Ücret</h1>
                            <div className='flex items-center justify-center gap-2' >
                                <IoMdWallet />
                                <h6 className='text-[12px] ' >8₺/dk</h6>
                            </div>
                        </div>
                    </div>
                    <Meeting />
                </div>

                <div className='w-full tablet:w-3/5 flex items-center justify-center pt-3 text-tertiaryBlue'>
                    <Detail detailControl={detailControl} setDetailControl={setDetailControl} setIsCommented={setIsCommented} isCommented={isCommented} />
                </div>
            </div>
        </div>
    )
}

export default ProfilePageLayout