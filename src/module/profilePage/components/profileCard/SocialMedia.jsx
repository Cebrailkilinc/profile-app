import React, { useRef } from 'react';
import { IoCopy } from 'react-icons/io5';
import Image from 'next/image';
import useAlert from '../../../../package/hooks/useAlert';
import Alert from '../../../../package/components/alert/Alert';

const socialMediaItems = [
    {
        icon: 'https://img.icons8.com/3d-fluency/94/instagram-new.png',
        alt: 'instagram-new',
        nickname: '@gabriel02',
        isUrl: false,
    },
    {
        icon: 'https://img.icons8.com/ios-filled/50/twitterx--v1.png',
        alt: 'twitter',
        nickname: '@gabriel02',
        isUrl: false,
    },
    {
        icon: 'https://img.icons8.com/color/48/facebook.png',
        alt: 'facebook',
        nickname: '@gabriel02face',
        isUrl: false,
    },
    {
        icon: 'https://img.icons8.com/ios-filled/50/link--v1.png',
        alt: 'link',
        nickname: 'Profil Link',
        isUrl: true,
    },
];

const SocialMedia = ({ isFollow }) => {
    const textRef = useRef();
    const { alertMessage, showAlert, alertVisible, alertType } = useAlert();

    // Click and copy text
    const handleCopySocialMediaNickMame = () => {
        textRef.current
            ? navigator.clipboard.writeText(textRef.current.innerText)
            : null;

        showAlert('Kopyalandı!', 'success');
    };

    // Click and copy text
    const handleCopySocialMediaUrlAddress = () => {
        textRef.current
            ? navigator.clipboard.writeText('www.example.com')
            : null;

        showAlert('Kopyalandı!', 'success');
    };

    return (
        <div
            className={`${isFollow
                ? 'flex flex-col items-center justify-center shadow-lg p-3 w-full transition-all duration-300 ease-in-out bg-white text-black rounded-lg z-50 mt-3'
                : 'overflow-hidden transition-all h-0 duration-300 ease-in-out'
                }`}
        >
            <Alert
                alertVisible={alertVisible}
                alertMessage={alertMessage}
                alertType={alertType}
            />
            <div
                className={`flex items-center justify-around overflow-x-auto gap-1 w-full ${isFollow ? 'h-20' : 'overflow-hidden transition h-0'}`}

            >
                {socialMediaItems && socialMediaItems.map((item, index) => (
                    <div
                        key={index}
                        className='group relative flex flex-col items-center gap-1 hover:scale-105 duration-300 cursor-pointer p-1'
                    >
                        <div className='relative'>
                            <Image
                                src={item.icon}
                                alt={item.alt}
                                width={20}
                                height={20}
                            />
                            <IoCopy
                                size={13}
                                onClick={
                                    item.isUrl
                                        ? handleCopySocialMediaUrlAddress
                                        : handleCopySocialMediaNickMame
                                }
                                className='absolute left-9 top-0 hidden hover:opacity-80 group-hover:block duration-300 transition-all'
                            />
                        </div>
                        <h1
                            ref={textRef}
                            className='text-[8px] miniTelefon:text-xs font-semibold hover:scale-100'
                        >
                            {item.nickname}
                        </h1>

                    </div>
                ))}
            </div>
        </div>
    );
};



export default SocialMedia;
