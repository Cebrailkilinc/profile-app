import React from 'react'
import { PiStethoscopeFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { LiaHospital } from "react-icons/lia";

const Social = () => {
  return (
    <div className='flex flex-col gap-3 mt-3'>

      <div className='flex items-center gap-2 ' >
        <FaUserGraduate size={25} />
        <h1 className='text-[18px] font-medium' >Eğitim Bilgileri</h1>
      </div>
      <div className='bg-white p-5 rounded-md shadow-lg ' >
        <ul className='w-full flex flex-col gap-3 items-start text-xs' >
          <li className='w-full flex items-center justify-between border-b pb-3'>
            <h1>Okan Üniversitesi</h1>
            <h1>2018</h1>
          </li>
          <li className='w-full flex items-center justify-between'>
            <h1 className=''>İstanbul Bilgi Üniversitesi</h1>
            <h1>2019</h1>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Social