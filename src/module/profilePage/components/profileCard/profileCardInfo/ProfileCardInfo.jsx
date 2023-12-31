import React, { useCallback } from 'react'
//Components
import Rating from "../../../../../package/components/content/Rating"
// Icons
import { BiComment } from "react-icons/bi";
import { FaBullseye, FaMessage } from "react-icons/fa6";
import { HiVideoCamera } from "react-icons/hi2";
import { BsBoxArrowUp } from "react-icons/bs";
import { BiSolidComment } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BsCheck } from "react-icons/bs";
import { IoMdWallet } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";

//This props came from <ProfilePageLayout/>  component
const ProfileCardHeader = (
    {
        isHearted,
        setIsHearted,
        detailControl,
        setDetailControl,
        setIsCommented,
        isCommented,
        isFollow,
        setIsFollow,
        socialRef
    }) => {
        //Cebrail

    //This function updates the icon and opens <Evaluation/> in the profile detail field.
    const handleOpenCommentDetailPage = useCallback((event) => {
        event.stopPropagation();
        if (!isCommented && detailControl !== "evaluation") {
            setIsCommented(true)
            setDetailControl("evaluation")
        } else if (isCommented && detailControl !== "evaluation") {
            setIsCommented(true)
            setDetailControl("evaluation")
        } else if (isCommented && detailControl === "evaluation") {
            setDetailControl("general")
        } else {
            return
        }
    })

    return (
        <>
            <div className='relative max-w-full flex flex-col miniTelefon:flex-row items-start gap-3'>
                <img
                    className='h-auto rounded-lg border-4 w-full miniTelefon:w-[150px]'
                    src='https://www.livemedy.com/tr/files/download/950624a9-dd4b-406d-b34e-d52799db33ee'
                />
                <div className='w-full flex flex-col justify-between '>
                    <div className='flex flex-col justify-start items-start gap-1'>
                        <h1 className='text-start text-[20px] telefon:text-[22px]' >Seda <br /> Odabaşı Dinç</h1>
                        <h3 className='text-textGray text-xs'>Uzman, Klinik Psikoloji</h3>
                    </div>
                    <div ref={socialRef} className='absolute bottom-28  miniTelefon:bottom-32 left-0 w-full flex gap-3  items-center justify-end cursor-pointer'>
                        {isHearted ? (
                            <div onClick={() => setIsHearted(!isHearted)} className='w-20 flex miniTelefon:hidden  items-center justify-center py-1 gap-1 bg-primaryBlue text-white border rounded-md  ' >
                                <BsCheck
                                    size={18}
                                    className={`heart-icon ${isHearted ? 'hearted text-white  animate-heart ' : ''}`}
                                />
                                <h1 className='text-[11px]' >Takip</h1>
                            </div>
                        ) : (
                            <div onClick={() => setIsHearted(!isHearted)} className='w-20 flex miniTelefon:hidden  items-center justify-center py-1  border rounded-md 
                        text-white bg-primaryBlue' >
                                <FiPlus
                                    size={14}
                                    className={`heart-icon ${isHearted ? 'heartedmb-1 animate-heart' : ''}`}
                                />
                                <h1 className='text-[11px] miniTelefon:hidden telefon:block ' >Takip Et</h1>
                            </div>
                        )}
                        <BsBoxArrowUp onClick={() => { setIsFollow(!isFollow) }} className={`${isFollow ? "text-primaryBlue" : ""} hover:opacity-60`} />
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
                    <div className='absolute bottom-6 miniTelefon:bottom-10 telefon:bottom-1 tablet:bottom-9 flex items-center gap-2 text-xs cursor-pointer' >
                        <button className='bg-primaryGreen w-20  hover:opacity-80 text-white  rounded-md  transition duration-300 ease-in-out flex items-center justify-center py-1  gap-1'>
                            <FaMessage className='text-gray-100 hover:opacity-90 ' />
                            <h1 className='hover:opacity-90 text-[10px]' >Mesaj</h1>
                        </button>
                        {isHearted ? (
                            <div onClick={() => setIsHearted(!isHearted)} className='hidden miniTelefon:flex items-center justify-center w-20 gap-1 bg-primaryBlue text-white border rounded-md py-1 ' >
                                <BsCheck
                                    size={16}
                                    className={`heart-icon ${isHearted ? 'hearted text-white  animate-heart ' : ''}`}
                                />
                                <h1 className='text-[11px]' >Takip</h1>
                            </div>
                        ) : (
                            <div onClick={() => setIsHearted(!isHearted)} className='hidden miniTelefon:flex items-center justify-center  gap-1 w-20 bg-primaryBlue text-white  border rounded-md py-1' >
                                <FiPlus
                                    size={14}
                                    className={`heart-icon ${isHearted ? 'heartedmb-1 animate-heart' : ''}`}
                                />
                                <h1 className='text-[11px] ' >Takip Et</h1>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-12 content-start w-full  gap-[2px] mt-5 text-textBoldBlue font-semibold' >
                <div className='col-span-4 flex flex-col items-center justify-start w-full gap-1 py-5 px- bg-lighBlue rounded-s-xl ' >
                    <h1 className='text-[14px]' >Görüşme</h1>
                    <div className='flex items-center gap-2' >
                        <HiVideoCamera size={20} />
                        <h6 className='text-[12px]' >28</h6>
                    </div>
                </div>
                <div className='col-span-4 flex flex-col w-full gap-1 py-5 px- bg-lighBlue rounded-e-xl' >
                    <h1 className='text-[14px] ' >Diller</h1>
                    <div className='flex items-center justify-center gap-2' >
                        <GrLanguage />
                        <h6 className='text-[12px] ' >Tr</h6>
                    </div>
                </div>
                <div className='col-span-4 flex flex-col w-full gap-1 py-5 px- bg-lighBlue rounded-e-xl' >
                    <h1 className='text-[14px] ' >Ücret</h1>
                    <div className='flex items-center justify-center gap-2' >
                        <IoMdWallet />
                        <h6 className='text-[12px] ' >8₺/dk</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCardHeader