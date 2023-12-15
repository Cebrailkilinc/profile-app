import React from 'react'
import { PiStethoscopeFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { LiaHospital } from "react-icons/lia";

const Certificates = () => {

  const certificates = [{
    name: "Pozitif Psikoloji Sertifika Programı",
    date: "2019"
  },
  {
    name: "Beslenme Psikolojisi Eğitimi Sertifika Programı",
    date: "2019"
  },
  {
    name: "Pozitif Psikoloji Sertifika Programı",
    date: "20118"
  }]

  return (
    <div className='flex flex-col gap-3 mt-3'>
      <div className='flex items-center gap-2 ' >
        <FaUserGraduate size={25} />
        <h1 className='text-[18px] font-medium' >Sertifikalar</h1>
      </div>
      <div className='bg-white p-5 rounded-md shadow-lg ' >
        <ul className='w-full flex flex-col gap-3 items-start text-xs' >
          {
            certificates && certificates.map((certificate, i) => (
              <li key={i} className={`w-full flex items-center justify-between ${i !== certificates.length-1 ? "border-b" : ""}  pb-3`}>
                <h1>{certificate.name}</h1>
                <h1>{certificate.name}</h1>                
              </li>
            ))
          }        
        </ul>
      </div>
    </div>
  )
}

export default Certificates