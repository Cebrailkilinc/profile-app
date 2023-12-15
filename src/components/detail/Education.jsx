import React from 'react'
import { PiStethoscopeFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { LiaHospital } from "react-icons/lia";

const Education = () => {
  const educations = [{
    name: "Cambridge",
    date: "2019"
  },
  {
    name: "Koç Üniversitesi",
    date: "2019"
  },
  {
    name: "Okan Üniversitesi",
    date: "2018"
  }]
  return (
    <div className='flex flex-col gap-3 pt-5'>      
      <div className='flex items-center gap-2 mt-5' >
        <FaUserGraduate size={25} />
        <h1 className='text-[18px] font-medium' >Eğitim Bilgileri</h1>
      </div>
      <div className='bg-white p-5 rounded-md shadow-lg ' >
        <ul className='w-full flex flex-col gap-3 items-start text-xs' >
        {
            educations && educations.map((education, i) => (
              <li key={i} className={`w-full flex items-center justify-between ${i !== educations.length-1 ? "border-b" : ""}  pb-3`}>
                <h1>{education.name}</h1>
                <h1>{education.date}</h1>                
              </li>
            ))
          }      
        </ul>
      </div>   
    </div>
  )
}

export default Education