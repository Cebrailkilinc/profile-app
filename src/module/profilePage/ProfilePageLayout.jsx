"use client"
import React, { useState, useRef } from 'react';

// Components
import ProfileDetail from "./components/profileDetail/ProfileDetail";
import SocialMedia from "./components/profileCard/SocialMedia";
import Meeting from "../../package/components/content/Meeting";
import ProfileCardInfo from "./components/profileCard/ProfileCardInfo";
import ProfileCardHeader from "./components/profileCard/ProfileCardHeader"


const ProfilePageLayout = () => {

    const [isHearted, setIsHearted] = useState(false); //Hert button control in profile
    const [isCommented, setIsCommented] = useState(false);//Comment icon opening and update control
    const [isFollow, setIsFollow] = useState(false); //Social media field opening control
    const [detailControl, setDetailControl] = useState("general");
    const socialRef = useRef();

    return (
        <div className=' tablet:fixed bg-bgGray w-full  mx-auto  z-0 pt-20 tablet:pt-28 pb-10'>
            <div className=' max-w-[584px] w-full  miniTablet:max-w-[768px] tablet:max-w-[1920px] mx-auto flex  flex-col items-center telefon:items-start tablet:flex-row  gap-5 text-center px-5 laptop:px-10'>
                <div id='fake-window' className='overflow-y-auto tablet:h-[calc(100vh_-_140px)] bg-white w-full tablet:w-2/5 laptop:max-w-[600px] p-3 border shadow-lg rounded-3xl'>
                    <ProfileCardHeader
                        isHearted={isHearted}
                        setIsHearted={setIsHearted}
                        detailControl={detailControl}
                        setDetailControl={setDetailControl}
                        setIsCommented={setIsCommented}
                        isCommented={isCommented}
                        isFollow={isFollow}
                        setIsFollow={setIsFollow}
                        socialRef={socialRef }
                    />
                    <SocialMedia
                        isFollow={isFollow}
                        setIsFollow={setIsFollow}
                        socialRef={socialRef }
                    />
                    <ProfileCardInfo />
                    <Meeting />
                </div>
                <div className='w-full tablet:w-3/5 flex items-center justify-center pt-3 text-tertiaryBlue'>
                    <ProfileDetail
                        detailControl={detailControl}
                        setDetailControl={setDetailControl}
                        setIsCommented={setIsCommented}
                        isCommented={isCommented} />
                </div>
            </div>
        </div>
    )
}

export default ProfilePageLayout