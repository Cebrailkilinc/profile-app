import React from 'react'
import { PiStethoscopeFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { LiaHospital } from "react-icons/lia";
const Resume = () => {
  return (
    <div className='flex flex-col gap-3 mt-3 '>
      <div className='flex items-center gap-2 ' >
        <LiaHospital className='' size={25} />
        <h1 className='text-[18px] font-medium' >İş Yeri ve Deneyim</h1>
      </div>
      <div className='bg-white p-5 rounded-md shadow-lg' >
        <ul className='w-full flex flex-col gap-3 items-start text-xs' >
          <li className='w-full flex items-center justify-between  '>
            <h1>Klinik Psikolog</h1>
            <h1>Home office</h1>
            <h1>Eylül 2021 - Halen</h1>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Resume