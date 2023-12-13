import React from 'react'

const Modal = ({ isModal }) => {

    return (
        <div className={` ${isModal ? "flex items-center justify-center  shadow-lg h-20 p-5 w-full transition-all duration-300 ease-in-out bg-white text-black rounded-lg  z-50  mt-3"
         :
          " overflow-hidden  transition-all h-0 duration-300 ease-in-out "}   `}>      
            <div className={`flex items-center gap-5 ${isModal ? "h-20" : " overflow-hidden transition h-0"}`}>
                <div className='flex items-center gap-1'>
                    <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/3d-fluency/94/instagram-new.png"
                        alt="instagram-new"
                    />
                    <h1 className='text-xs font-semibold'>@gabriel02</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
                        alt="twitterx--v1"
                    />
                    <h1 className='text-xs font-semibold'>@gabriel02</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <img
                        width="25"
                        height="25"
                        src="https://img.icons8.com/color/48/facebook.png"
                        alt="facebook"
                    />
                    <h1 className='text-xs font-semibold'>@gabriel02</h1>
                </div>
            </div>
        </div>

    )
}

export default Modal