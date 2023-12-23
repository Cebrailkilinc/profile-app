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
    )
}

export default ProfileCardInfo