import React from 'react'
// Icons
import { BiComment } from "react-icons/bi";
import { FaBullseye, FaMessage } from "react-icons/fa6";
import { HiVideoCamera } from "react-icons/hi2";
import { BsBoxArrowUp } from "react-icons/bs";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoMdWallet } from "react-icons/io";
import { BiSolidComment } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BsCheck } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const ProfileCardInfo = () => {

    return (
        <div className='grid grid-cols-12 content-start w-full  gap-[2px] mt-5 text-textBoldBlue font-semibold' >
            <div className='col-span-3 flex flex-col items-center justify-start w-full gap-1 py-5 px- bg-lighBlue rounded-s-xl ' >
                <h1 className='text-[14px]' >Görüşme</h1>
                <div className='flex items-center gap-2' >
                    <HiVideoCamera size={20} />
                    <h6 className='text-[12px]' >28</h6>
                </div>
            </div>
            <div className='col-span-6 flex flex-col items-center w-full gap-1 py-5  bg-lighBlue ' >
                <h1 className='text-[14px]' >Diller</h1>
                <div className='flex items-center justify-center gap-6 overflow-x-auto w-11/12' >
                    <div className='flex flex-col items-center justify-center gap-' >
                        <img width="20" height="20" src="https://img.icons8.com/color/48/turkey.png" alt="turkey" />
                        <h6 className='text-[12px]' >TR</h6>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-' >
                        <img width="20" height="20" src="https://img.icons8.com/color/48/england.png" alt="england" />
                        <h6 className='text-[12px]' >ENG</h6>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-' >
                        <img width="20" height="20" src="https://img.icons8.com/color/48/germany.png" alt="germany" />
                        <h6 className='text-[12px]' >DU</h6>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-' >
                        <img width="20" height="20" src="https://img.icons8.com/emoji/48/saudi-arabia-emoji.png" alt="saudi-arabia-emoji" />
                        <h6 className='text-[12px]' >ARB</h6>
                    </div>
                </div>
            </div>
            <div className='col-span-3 flex flex-col w-full gap-1 py-5 px- bg-lighBlue rounded-e-xl' >
                <h1 className='text-[14px] ' >Ücret</h1>
                <div className='flex items-center justify-center gap-2' >
                    <IoMdWallet />
                    <h6 className='text-[12px] ' >8₺/dk</h6>
                </div>
            </div>
        </div>
    )
}

export default ProfileCardInfo