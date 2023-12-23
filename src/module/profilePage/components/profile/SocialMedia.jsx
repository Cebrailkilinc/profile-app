import React, { useRef } from 'react'
import { IoCopy } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import Image from 'next/image';
import useAlert from "../../../../package/hooks/useAlert"
import Alert from '../../../../package/components/alert/Alert';

const SocialMedia = ({ isModal }) => {
    const textRef = useRef();
    const { alertMessage, showAlert, alertVisible, alertType } = useAlert();

    //Click and copy text
    const handleCopySocialMediaNickMame = () => {
        textRef.current
            ?
            navigator.clipboard.writeText(textRef.current.innerText)
            :
            null

        showAlert('Kopyalandı!', "success")
    }

    //Click and copy text
    const handleCopySocialMediaUrlAddress = () => {
        textRef.current
            ?
            navigator.clipboard.writeText("www.example.com")
            :
            null

        showAlert('Kopyalandı!', "success")
    }
    return (
        <div className={` ${isModal ? "flex flex-col items-center justify-center  shadow-lg  p-2 w-full  transition-all duration-300 ease-in-out bg-white text-black rounded-lg  z-50  mt-3"
            :
            " overflow-hidden  transition-all h-0 duration-300 ease-in-out "}   `}>
            <Alert alertVisible={alertVisible} alertMessage={alertMessage} alertType={alertType} />
            <div className={`flex items-center  justify-between gap-2 ${isModal ? "h-20" : " overflow-hidden transition h-0"}`}>
                <div className='group relative flex flex-col items-center gap-1  hover:scale-105 duration-300 cursor-pointer p-1'>
                    <Image
                        src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                        alt="instagram-new"
                        width={20}
                        height={20}
                    />
                    <h1 ref={textRef} className='text-[8px] miniTelefon:text-xs font-semibold hover:scale-100 '>@gabriel02</h1>
                    <IoCopy onClick={handleCopySocialMediaNickMame} className='absolute right-0 top-0 hidden hover:opacity-80 group-hover:block duration-300 transition-all' />
                </div>
                <div className='group relative flex flex-col items-center gap-1  hover:scale-105 duration-300 cursor-pointer p-1'>
                    <Image
                        src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
                        alt="instagram-new"
                        width={20}
                        height={20}
                    />

                    <h1 ref={textRef} className='text-[8px] miniTelefon:text-xs font-semibold hover:scale-100 '>@gabriel02</h1>
                    <IoCopy onClick={handleCopySocialMediaNickMame} className='absolute right-0 top-0 hidden hover:opacity-80 group-hover:block duration-300 transition-all' />
                </div>
                <div className='group relative flex flex-col items-center gap-1  hover:scale-105 duration-300 cursor-pointer p-1'>
                    <Image
                        src="https://img.icons8.com/color/48/facebook.png"
                        alt="instagram-new"
                        width={20}
                        height={20}
                    />
                    <h1 ref={textRef} className='text-[8px] miniTelefon:text-xs font-semibold hover:scale-100 '>@gabriel02face</h1>
                    <IoCopy onClick={handleCopySocialMediaNickMame} className='absolute right-0 top-0 hidden hover:opacity-80 group-hover:block duration-300 transition-all' />
                </div>
                <div className='group relative flex flex-col  items-center gap-1  hover:scale-105 duration-300 cursor-pointer pe-5'>
                    <Image
                        src="https://img.icons8.com/ios-filled/50/link--v1.png"
                        alt="instagram-new"
                        width={20}
                        height={20}
                    />
                    <h1 ref={textRef} className='text-[8px] miniTelefon:text-xs font-semibold hover:scale-100 '>Profil Link</h1>
                    <IoCopy onClick={handleCopySocialMediaUrlAddress} className='absolute right-0 top-0 hidden hover:opacity-80 group-hover:block duration-300 transition-all' />
                </div>
            </div>

        </div>

    )
}

export default SocialMedia