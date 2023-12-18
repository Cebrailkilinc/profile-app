"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { PiCertificateBold } from "react-icons/pi";
import { MdAccountBox } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import Loading from "../Loading";


const AreasOfExpertise = dynamic(() => import('./AreasOfExpertise'), {
    loading: () => <Loading />,
});
const Certificates = dynamic(() => import('./Certificates'), {
    loading: () => <Loading />,
});
const General = dynamic(() => import('./General'), {
    loading: () => <Loading />,
});
const Evaluations = dynamic(() => import('./Evaluations'), {
    loading: () => <Loading />,
})
const Social = dynamic(() => import('./Social'), {
    loading: () => <Loading />,
})

const Detail = () => {
    const [detailControl, setDetailControl] = useState("general")
    return (
        <div className='' >
            <div className='flex items-start w-full   text-textBoldBlue pt-[2px] px-2 bg-white rounded-md'>
                <div onClick={() => { setDetailControl("general") }} className='w-full '>
                    <div className={`flex items-center justify-center  w-full border-b py-3 ${detailControl === "general" ? "border-tertiaryBlue  " : ""}  gap-1 cursor-pointer`}>
                        <MdAccountBox />
                        <h1 className='text-xs font-semibold '>Genel</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl("social") }} className='w-full '>
                    <div className={`flex items-center justify-center w-full  border-b py-3 ${detailControl === "social" ? "border-tertiaryBlue " : ""}  gap-1 cursor-pointer`}>
                        <FaCamera />
                        <h1 className='text-xs font-semibold '>Sosyal</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl("evaluation") }} className='w-full '>
                    <div className={`flex items-center justify-center w-full  border-b py-3 ${detailControl === "evaluation" ? "border-tertiaryBlue " : ""}  gap-1 cursor-pointer`}>
                        <FaCamera />
                        <h1 className='text-xs font-semibold '>Değerlendireme</h1>
                    </div>
                </div>
            </div>
            <div>
                {
                    detailControl === "general" ?
                        <General />
                        :
                        detailControl === "social" ?
                            <Social />
                            :
                            detailControl === "evaluation" ?
                                <Evaluations />
                                :
                                null

                }

            </div>
        </div>
    )
}

export default Detail