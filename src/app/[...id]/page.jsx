"use client"
import React, { useState, useRef, useEffect } from 'react'
import { PiStethoscopeFill } from "react-icons/pi";
import { IoCaretDown } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsBoxArrowUp } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import Meeting from "../../components/Meeting"
import SidebarMenu from '../../components/Sidebar';
import Detail from "../../components/Detail";


const PropfilePage = () => {

    return (
        <div className='bg-bgGray w-full  mx-auto  z-0 pt-32 pb-10'>
            <div className=' max-w-[584px] miniTablet:max-w-[768px] tablet:max-w-[1400px] desktop:px-[117px]  mx-auto flex  flex-col tablet:flex-row  gap-10 text-center px-5 laptop:px-10 '>
                <div className=' bg-white w-full laptop:max-w-[393px] ps-7 pe-7 py-7 border shadow-lg rounded-3xl'>
                    <div className='relative max-w-full flex flex-col miniTelefon:flex-row items-start gap-5'>
                        <img className='h-auto rounded-lg border-4 w-full miniTelefon:w-[176px]' src='https://www.livemedy.com/tr/files/download/950624a9-dd4b-406d-b34e-d52799db33ee' />
                        <div className='w-full flex flex-col justify-between '>
                            <div className='flex flex-col justify-start items-start gap-1'>
                                <h1 className='text-start text-[20px]' >Seda <br /> Odabaşı Dinç</h1>
                                <h3 className='text-textGray text-xs'>Uzman, Klinik Psikoloji</h3>
                            </div>
                            <div className='miniTelefon:absolute miniTelefon:bottom-0 left-0 w-full flex gap-3 justify-end' >
                                <CiHeart />
                                <BsBoxArrowUp />
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-center w-full justify-between gap-[2px] mt-5 text-textBoldBlue font-semibold' >
                        <div className='flex flex-col items-center justify-center w-full gap-1 p-5 bg-lighBlue rounded-s-xl ' >
                            <h1 className='text-[14px]' >Şehir</h1>
                            <div className='flex items-center gap-2' >
                                <ImLocation />
                                <h6 className='text-[12px]' >İstanbul</h6>
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-1 p-5 bg-lighBlue ' >
                            <h1 className='text-[14px]' >Diiler</h1>
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
                    <Meeting  />
                </div>
                <div className='col-span-15 w-full pt-3 text-tertiaryBlue'>
                    <Detail />
                </div>
            </div>
        </div>

    )
}

export default PropfilePage;