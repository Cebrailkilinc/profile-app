"use client"
import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
//Components
import Loading from "../../../../package/components/content/Loading";
import MenuItems from "./MenuItems"
//Icons
import { MdAccountBox } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { RiTodoFill } from "react-icons/ri";

//The props here come from the <ProfilePageLayout/> component
const ProfileDetail = ({
    detailControl,
    setDetailControl,
    setIsCommented,
    isCommented
}) => {

    const handleEvaluationComment = useCallback(() => {
        setIsCommented(true);
        setDetailControl("evaluation");
    }, [isCommented, detailControl]);

    const handleOpenGeneralInProfileDetail = useCallback(() => {
        setDetailControl("general");
    }, [detailControl]);

    const handleOpenSocialInProfileDetail = useCallback(() => {
        setDetailControl("social");
    }, [detailControl]);

   
    return (
        <div className='w-full' >
            <div className='flex items-start justify-between w-full  pt-[2px] p'>
                <div onClick={handleOpenGeneralInProfileDetail} className='w-20 miniTelefon:w-full '>
                    <div className={`flex items-center justify-start miniTelefon:justify-center  border-b py-3 ${detailControl === "general" ? "border-tertiaryBlue  " : ""}  gap-1 cursor-pointer`}>
                        <MdAccountBox />
                        <h1 className='text-xs font-semibold '>Genel</h1>
                    </div>
                </div>
                <div onClick={handleOpenSocialInProfileDetail} className='w-20 miniTelefon:w-full '>
                    <div className={`flex items-center justify-start miniTelefon:justify-center border-b py-3 ${detailControl === "social" ? "border-tertiaryBlue " : ""}  gap-1 cursor-pointer`}>
                        <FaCamera />
                        <h1 className='text-xs font-semibold '>Sosyal</h1>
                    </div>
                </div>
                <div onClick={handleEvaluationComment} className='w-28 miniTelefon:w-full '>
                    <div className={`flex items-center justify-start miniTelefon:justify-center border-b py-3 ${detailControl === "evaluation" ? "border-tertiaryBlue " : ""}  gap-1 cursor-pointer`}>
                        <RiTodoFill />
                        <h1 className='text-xs font-semibold '>Değerlendirme</h1>
                    </div>
                </div>
            </div>
            <div>
                {
                    <MenuItems detailControl={detailControl} isCommented={isCommented}/>
                }
            </div>
        </div>
    )
}

export default ProfileDetail