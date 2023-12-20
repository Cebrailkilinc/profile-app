"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
//Components
import Loading from "../../../../package/components/content/Loading";
//Icons
import { PiCertificateBold } from "react-icons/pi";
import { MdAccountBox } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";

// Dynamic Components
const General = dynamic(() => import('./General'), {
    loading: () => <Loading />,
});
const Evaluations = dynamic(() => import('./Evaluations'), {
    loading: () => <Loading />,
})
const Social = dynamic(() => import('./Social'), {
    loading: () => <Loading />,
})

const Detail = ({detailControl, setDetailControl,setIsCommented,isCommented}) => {

    const handleEvaluationComment = ()=>{
        setIsCommented(true)
        setDetailControl("evaluation") 
    }
    
    return (
        <div className='w-full' >
            <div className='flex items-start justify-between w-full  pt-[2px] px-2'>
                <div onClick={() => { setDetailControl("general") }} className='w-24 miniTelefon:w-full '>
                    <div className={`flex items-center justify-start miniTelefon:justify-center  border-b py-3 ${detailControl === "general" ? "border-tertiaryBlue  " : ""}  gap-1 cursor-pointer`}>
                        <MdAccountBox />
                        <h1 className='text-xs font-semibold '>Genel</h1>
                    </div>
                </div>
                <div onClick={() => { setDetailControl("social") }} className='w-24 miniTelefon:w-full '>
                    <div className={`flex items-center justify-start miniTelefon:justify-center border-b py-3 ${detailControl === "social" ? "border-tertiaryBlue " : ""}  gap-1 cursor-pointer`}>
                        <FaCamera />
                        <h1 className='text-xs font-semibold '>Sosyal</h1>
                    </div>
                </div>
                <div onClick={handleEvaluationComment} className='w-24 miniTelefon:w-full '>
                    <div className={`flex items-center justify-start miniTelefon:justify-center  border-b py-3 ${detailControl === "evaluation" ? "border-tertiaryBlue " : ""}  gap-1 cursor-pointer`}>
                        <LuListTodo  />
                        <h1 className='text-xs font-semibold '>Değerlendirme</h1>
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
                            detailControl === "evaluation" && isCommented ?
                                <Evaluations />
                                :
                                null
                }

            </div>
        </div>
    )
}

export default Detail