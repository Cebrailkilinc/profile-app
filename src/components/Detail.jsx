"use client"
import React, { useState } from 'react'
import { MdAccountBox } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import General from "../components/General";
import Social from "../components/Social"
const Detail = () => {
    const [detailControl, setDetailControl] = useState(true)
    return (
        <div>
            <div className='flex item-start text-textBoldBlue pt-[2px]' >
                <div onClick={() => { setDetailControl(true) }} className='w-full ' >
                    <div className={`flex items-center justify-center w-full pb-1 ${detailControl ? "border-textBoldBlue border-b-[3px] " : "border-b pb-[5px]"}  gap-2 cursor-pointer`}>
                        <MdAccountBox size={30} />
                        <h1 className='text-2xl font-semibold '>Genel</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl(false) }} className='w-full '>
                    <div className={`flex items-center justify-center  w-full pb-1 border-b ${!detailControl ? "border-tertiaryBlue border-b-[3px]" : "border-b pb-[5px]"}  gap-2 cursor-pointer`}>
                        <FaCamera size={30} />
                        <h1 className='text-2xl font-semibold'>Sosyal</h1>
                    </div>
                </div>
            </div>
            <div>
                {detailControl ? <General /> : <Social />}
            </div>
        </div>
    )
}

export default Detail