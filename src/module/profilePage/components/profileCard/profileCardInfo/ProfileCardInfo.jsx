import React, { useCallback, useState, useRef, useEffect } from 'react'
//Components
import Rating from "../../../../../package/components/content/Rating"
// Icons
import { BiComment } from "react-icons/bi";
import { FaBullseye, FaMessage } from "react-icons/fa6";
import { HiVideoCamera } from "react-icons/hi2";
import { BsBoxArrowUp } from "react-icons/bs";
import { BiSolidComment } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { BsCheck } from "react-icons/bs";
import { IoMdWallet } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
//This props came from <ProfilePageLayout/>  component
const ProfileCardHeader = (
    {
        isHearted,
        setIsHearted,
        detailControl,
        setDetailControl,
        setIsCommented,
        isCommented,
        isFollow,
        setIsFollow,
        socialRef
    }) => {
    //Cebrail
    //cebrail salak mısımn ne kadar konuşuyosun şuan ne saçma bir şey yapıyoruz salak mıyız yazıyom devamlı birşeyler ne yazasam neyse zeki görüneyim hadi by :)

    const optionsRef = useRef()

    const [wideScreenImg, setWideScreenImg] = useState(false)
    const [showOptions, setShowOptions] = useState(true)

    //This function updates the icon and opens <Evaluation/> in the profile detail field.
    const handleOpenCommentDetailPage = useCallback((event) => {
        event.stopPropagation();
        if (!isCommented && detailControl !== "evaluation") {
            setIsCommented(true)
            setDetailControl("evaluation")
        } else if (isCommented && detailControl !== "evaluation") {
            setIsCommented(true)
            setDetailControl("evaluation")
        } else if (isCommented && detailControl === "evaluation") {
            setDetailControl("general")
        } else {
            return
        }
    })

    useEffect(() => {
        const checkIfClickedOutside = e => {        
          if (showOptions && optionsRef.current && !optionsRef.current.contains(e.target)) {
            setShowOptions(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [showOptions])

    return (
        <>
            <div className='relative max-w-full flex flex-col miniTelefon:flex-row items-center  miniTelefon:items-start gap-3'>
                <div className="relative imageArea min-w-[115px] flex flex-col items-center justify-center">
                    <span
                        className={`absolute h-5 w-5 ${1 === 1 ? "bg-blueOne" : "bg-redOne"
                            } rounded-full top-4 point right-0 border-white border-4`}
                    ></span>
                    <img
                        onClick={() => setWideScreenImg(true)}
                        src="/profileImage.jpg"
                        className={`cursor-pointer w-28 h-28 rounded-full ${1 !== undefined
                            ? `border-2 ${1 === 1 ? "border-blueOne" : "border-redOne"
                            }`
                            : ""
                            }`}
                        alt=""
                    />
                    {1 !== undefined && (
                        <span
                            className={`status bg-lightBlue bg-white ${1 === 1 ? "text-blueOne" : "text-redOne"
                                } px-3 py-1 rounded-2xl text-sm border-${1 === 1 ? "blueOne" : "redOne"
                                } border relative bottom-3.5`}
                        >
                            {1 === 1 ? "Çevrim içi" : "Meşgul"}
                        </span>
                    )}
                </div>
                <div className='relative w-full flex flex-col gap-5 justify-between '>
                    <div className='flex flex-col items-start gap-1' >
                        <h1 className='text-start text-[20px] telefon:text-[22px]' >Seda <br /> Odabaşı Dinç</h1>
                        <h3 className='text-textGray text-xs'>Uzman, Klinik Psikoloji</h3>
                        <div className=' flex items-center gap-2 miniTelefon:mt-4 telefon:mt-3 text-xs cursor-pointer' >
                            <button className='bg-primaryGreen w-20  hover:opacity-80 text-white  rounded-md  transition duration-300 ease-in-out flex items-center justify-center py-1  gap-1'>
                                <FaMessage className='text-gray-100 hover:opacity-90 ' />
                                <h1 className='hover:opacity-90 text-[10px]' >Mesaj</h1>
                            </button>
                            {isHearted ? (
                                <div onClick={() => setIsHearted(!isHearted)} className='hidden miniTelefon:flex items-center justify-center w-20 gap-1 bg-primaryBlue text-white border rounded-md py-1 ' >
                                    <BsCheck
                                        size={16}
                                        className={`heart-icon ${isHearted ? 'hearted text-white  animate-heart ' : ''}`}
                                    />
                                    <h1 className='text-[11px]' >Takip</h1>
                                </div>
                            ) : (
                                <div onClick={() => setIsHearted(!isHearted)} className='hidden miniTelefon:flex items-center justify-center  gap-1 w-20 bg-primaryBlue text-white  border rounded-md py-1' >
                                    <FiPlus
                                        size={14}
                                        className={`heart-icon ${isHearted ? 'heartedmb-1 animate-heart' : ''}`}
                                    />
                                    <h1 className='text-[11px] ' >Takip Et</h1>
                                </div>
                            )}
                        </div>
                    </div>
                    <div ref={socialRef} className=' absolute top-0 w-full flex gap-3  items-center justify-end cursor-pointer'>
                        {isHearted ? (
                            <div onClick={() => setIsHearted(!isHearted)} className='w-20 flex miniTelefon:hidden  items-center justify-center py-1 gap-1 bg-primaryBlue text-white border rounded-md  ' >
                                <BsCheck
                                    size={18}
                                    className={`heart-icon ${isHearted ? 'hearted text-white  animate-heart ' : ''}`}
                                />
                                <h1 className='text-[11px]' >Takip</h1>
                            </div>
                        ) : (
                            <div onClick={() => setIsHearted(!isHearted)} className='w-20 flex miniTelefon:hidden  items-center justify-center py-1  border rounded-md 
                        text-white bg-primaryBlue' >
                                <FiPlus
                                    size={14}
                                    className={`heart-icon ${isHearted ? 'heartedmb-1 animate-heart' : ''}`}
                                />
                                <h1 className='text-[11px] miniTelefon:hidden telefon:block ' >Takip Et</h1>
                            </div>
                        )}
                        <BsBoxArrowUp onClick={() => { setIsFollow(!isFollow) }} className={`${isFollow ? "text-primaryBlue" : ""} hover:opacity-60`} />
                        <div className='relative group z-50 '>
                            <SlOptionsVertical onClick={() => setShowOptions(!showOptions)} className='group-hover:opacity-60 ' />
                            <div ref={optionsRef} className={`absolute top-4 right-0 ${showOptions ? "flex" : "hidden"} flex-col w-32 pt-2`} >
                                <div className='py-2  w-full p-3 border rounded-lg text-[10px] bg-lighBlue  text-black' >
                                    <div className='flex items-center gap-2 text-xs'>
                                        <img width="18" height="18" src="https://img.icons8.com/color/48/spam.png" alt="spam" />
                                        <h1 className='hover:opacity-75' >Spam</h1>
                                    </div>
                                    <div className='flex items-center gap-2 text-xs'>
                                        <img width="18" height="18" src="https://img.icons8.com/color/48/complaint.png" alt="complaint" />
                                        <h1 className='hover:opacity-75'>Şikayet Et</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=' w-full flex gap-3 items-center justify-end cursor-pointer'>
                        <div className='flex items-center gap-1 mb-1 ' onClick={handleOpenCommentDetailPage} >
                            <Rating size={14} color="secondaryBlue" /> {/*Is a Component */}
                            <p className="text-xs mt-1">4.95</p>
                        </div>
                        <div className='flex items-center gap-1 ' >
                            <h1 className='text-xs font-semibold'>12</h1>
                            {isCommented && detailControl === "evaluation"
                                ?
                                <BiSolidComment onClick={handleOpenCommentDetailPage} />
                                :
                                <BiComment onClick={handleOpenCommentDetailPage} className='hover:opacity-60' />
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div className='grid grid-cols-12 content-start w-full  gap-[2px] mt-5 text-textBoldBlue font-semibold' >
                <div className='col-span-4 flex flex-col items-center justify-start w-full gap-1 py-5 px- bg-lighBlue rounded-s-xl ' >
                    <h1 className='text-[14px]' >Görüşme</h1>
                    <div className='flex items-center gap-2' >
                        <HiVideoCamera size={20} />
                        <h6 className='text-[12px]' >28</h6>
                    </div>
                </div>
                <div className='col-span-4 flex flex-col w-full gap-1 py-5 px- bg-lighBlue ' >
                    <h1 className='text-[14px] ' >Diller</h1>
                    <div className='flex items-center justify-center gap-2' >
                        <GrLanguage />
                        <h6 className='text-[12px] ' >Tr</h6>
                    </div>
                </div>
                <div className='col-span-4 flex flex-col w-full gap-1 py-5 px- bg-lighBlue rounded-e-xl' >
                    <h1 className='text-[14px] ' >Ücret</h1>
                    <div className='flex items-center justify-center gap-2' >
                        <IoMdWallet />
                        <h6 className='text-[12px] ' >8₺/dk</h6>
                    </div>
                </div>
            </div>
            {wideScreenImg && (
                <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>

                    <IoIosCloseCircleOutline onClick={() => setWideScreenImg(false)} size={35} className='absolute top-20 tablet:top-28 right-4 text-white hover:opacity-80 cursor-pointer' />
                    <img
                        src="/profileImage.jpg"
                        className={`rounded-full w-4/5 p-2 telefon:w-3/5 miniTablet:w-2/5 tablet:w-auto tablet:h-2/3`}
                        alt=""
                    />

                </div>
            )}



        </>
    )
}

export default ProfileCardHeader