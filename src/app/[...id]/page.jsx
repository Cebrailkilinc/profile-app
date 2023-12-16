"use client"
import React, { useState, useRef, useEffect } from 'react'
import { PiStethoscopeFill } from "react-icons/pi";
import { IoCaretDown } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { BsBoxArrowUp } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import Meeting from "../../components/Meeting"
import SidebarMenu from '../../components/Sidebar';
import Detail from "../../components/detail/Detail";
import Modal from "../../components/Modal";
import Rating from "../../components/Rating"
import { BiComment } from "react-icons/bi";
import { FaMessage } from "react-icons/fa6";
import { HiVideoCamera } from "react-icons/hi2";

const PropfilePage = () => {
    const [isHearted, setIsHearted] = useState(false);
    const [isModal, setIsModal] = useState(false);

    return (
        <div className='bg-bgGray w-full  mx-auto  z-0 pt-20 tablet:pt-32 pb-10'>
            <div className=' max-w-[584px] w-full  miniTablet:max-w-[768px] mx-auto flex  flex-col items-center telefon:items-start tablet:flex-row  gap-5 text-center px-5 laptop:px-10'>
                <div className=' bg-white w-full tablet:w-2/5 laptop:max-w-[600px] ps-5 pe-5 py-5 border shadow-lg rounded-3xl'>
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
                                <div>
                                    <Rating />
                                </div>
                                <div className='flex items-center gap-1 ' >
                                    <h1 className='text-xs'>12</h1>
                                    <BiComment className='hover:opacity-60' />
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
                                <HiVideoCamera  size={20} />
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
                <div className='col-span-15 tablet:w-3/5  pt-3 text-tertiaryBlue'>
                    <Detail />
                </div>
            </div>
        </div>

    )
}

export default PropfilePage;