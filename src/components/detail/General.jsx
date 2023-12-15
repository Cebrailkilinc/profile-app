import React from 'react'
import { PiStethoscopeFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { LiaHospital } from "react-icons/lia";
const General = () => {
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
            <div className='flex items-center gap-2 mt-5' >
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
            <div className='flex items-center gap-2 mt-4' >
                <LiaHospital size={25} />
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

export default General