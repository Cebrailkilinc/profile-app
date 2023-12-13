"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic'

import { MdAccountBox } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";
import General from "./General";
import Social from "./Social";
import Loading from "../Loading"
const AreasOfExpertise = dynamic(() => import('./AreasOfExpertise'), {
    loading: () => <Loading />,
});
const Certificates = dynamic(() => import('./Certificates'), {
    loading: () => <Loading />,
});
const Education = dynamic(() => import('./Education'), {
    loading: () => <Loading />,
});
const Evaluations = dynamic(() => import('./Evaluations'), {
    loading: () => <Loading />,
})
const Resume = dynamic(() => import('./Resume'), {
    loading: () => <Loading />,
})

const Detail = () => {
    const [detailControl, setDetailControl] = useState("education")
    return (
        <div>
            <div className='flex items-start  justify-between  text-textBoldBlue pt-[2px] w-full' >
                <div onClick={() => { setDetailControl("education") }} className='w-full ' >
                    <div className={`flex items-center justify-center w-full pb-1 ${detailControl === "education" ? "border-textBoldBlue border-b-[3px] " : "border-b pb-[5px]"}  gap-2 cursor-pointer`}>
                        <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/student-male.png" alt="student-male" />
                        <h1 className='text-sm font-semibold '>Eğitim</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl("resume") }} className='w-full  '>
                    <div className={`flex items-center justify-center  w-full pb-1 border-b ${detailControl === "resume" ? "border-tertiaryBlue border-b-[3px]" : "border-b pb-[5px]"}  gap-2 cursor-pointer`}>
                        <img width="20" height="20" src="https://img.icons8.com/carbon-copy/100/resume.png" alt="resume" />
                        <h1 className='text-sm font-semibold '>Özgeçmiş</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl("expertise") }} className=' w-full '>
                    <div className={`flex items-center justify-center  w-full pb-1 border-b ${detailControl === "expertise" ? "border-tertiaryBlue border-b-[3px]" : "border-b pb-[5px]"}  gap-2 cursor-pointer`}>
                        <img width="20" height="20" src="https://img.icons8.com/external-others-phat-plus/64/external-expertise-medical-and-healthcare-outline-others-phat-plus-17.png" alt="external-expertise-medical-and-healthcare-outline-others-phat-plus-17" />
                        <h1 className='text-sm font-semibold '>Uzmanlık</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl("certificate") }} className='w-full  '>
                    <div className={`flex items-center justify-center  w-full pb-1 border-b ${detailControl === "certificate" ? "border-tertiaryBlue border-b-[3px]" : "border-b pb-[5px]"}  gap-2 cursor-pointer`}>
                        <PiCertificateBold className='' size={20} />
                        <h1 className='text-sm font-semibold '>Sertifikalar</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl("evaluation") }} className='w-full'>
                    <div className={`flex items-center justify-center  w-full pb-1 border-b ${detailControl === "evaluation" ? "border-tertiaryBlue border-b-[3px]" : "border-b pb-[5px]"}  gap-2 cursor-pointer`}>
                        <img width="20" height="20" src="https://img.icons8.com/ios/50/test--v1.png" alt="test--v1" />
                        <h1 className='text-sm font-semibold '>Değerlendirme</h1>
                    </div>
                </div>
            </div>
            <div>
                {
                    detailControl === "education" ?
                        <Education />
                        :
                        detailControl === "evaluation" ?
                            <Evaluations />
                            :
                            detailControl === "certificate" ?
                                <Certificates />
                                :
                                detailControl === "expertise" ?
                                    <AreasOfExpertise />
                                    :
                                    detailControl === "resume" ?
                                        <Resume />
                                        :
                                        null


                }

            </div>
        </div>
    )
}

export default Detail