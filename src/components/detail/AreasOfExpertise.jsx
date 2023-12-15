import React from 'react'
import { PiStethoscopeFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { LiaHospital } from "react-icons/lia";

const AreasOfExpertise = () => {
  return (
    <div className='flex flex-col gap-3 pt-5'>
      <div className='flex items-center gap-2' >
        <PiStethoscopeFill size={27} />
        <h1 className='text-[18px] font-medium' >Klinik İlgi Alanları</h1>
      </div>
      <div className='bg-white p-5 rounded-md shadow-xl' >
        <ul className='flex flex-col gap-[10px] items-start text-xs' >
          <li>Kaygi -Panik Atak</li>
          <li>Baglanma Sorunlari-Bas etme becerileri</li>
          <li className='text-start' >Fobiler-Sosyal kaygi -Özgüven problemleri-Saglik kaygisi-Uyku bozuklugu</li>
          <li>Depresyon,Bagimlilik -Stres-Öfke Kontrolü</li>
          <li>Obsesif Kompulsif Bozukluk-Ebeveynlik</li>
          <li>Iliski problemleri-Degersizlik-Kendini tanima</li>
        </ul>
      </div>
    </div>
  )
}

export default AreasOfExpertise