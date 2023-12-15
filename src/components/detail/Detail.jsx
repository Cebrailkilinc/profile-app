"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PiCertificateBold } from "react-icons/pi";
import Loading from "../Loading";

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
            <div className='flex flex-wrap justify-between text-textBoldBlue pt-[2px]'>
                <div onClick={() => { setDetailControl("education") }} className=''>
                    <div className={`flex items-center justify-center w-full ${detailControl === "education" ? "border-tertiaryBlue border-b-[3px] pb-1" : "pb-6"}  gap-2 cursor-pointer`}>
                        <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/student-male.png" alt="student-male" />
                        <h1 className='text-sm font-semibold '>Eğitim</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl("resume") }} className=''>
                    <div className={`flex items-center justify-center w-full ${detailControl === "resume" ? "border-tertiaryBlue border-b-[3px] pb-1" : "pb-6"}  gap-2 cursor-pointer`}>
                        <img width="20" height="20" src="https://img.icons8.com/carbon-copy/100/resume.png" alt="resume" />
                        <h1 className='text-sm font-semibold '>Özgeçmiş</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl("expertise") }} className=''>
                    <div className={`flex items-center justify-center w-full ${detailControl === "expertise" ? "border-tertiaryBlue border-b-[3px] pb-1" : "pb-6"}  gap-2 cursor-pointer`}>
                        <img width="20" height="20" src="https://img.icons8.com/external-others-phat-plus/64/external-expertise-medical-and-healthcare-outline-others-phat-plus-17.png" alt="external-expertise-medical-and-healthcare-outline-others-phat-plus-17" />
                        <h1 className='text-sm font-semibold '>Uzmanlık</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl("certificate") }} className=''>
                    <div className={`flex items-center justify-center w-full ${detailControl === "certificate" ? "border-tertiaryBlue border-b-[3px] pb-1" : "pb-6"}  gap-2 cursor-pointer`}>
                        <PiCertificateBold className='' size={20} />
                        <h1 className='text-sm font-semibold '>Sertifikalar</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl("evaluation") }} className=''>
                    <div className={`flex items-center justify-center w-full ${detailControl === "evaluation" ? "border-tertiaryBlue border-b-[3px] pb-1" : "pb-6"}  gap-2 cursor-pointer`}>
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