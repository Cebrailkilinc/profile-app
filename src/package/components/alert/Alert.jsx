"use client"
import React, { useEffect } from 'react'
import { PiWarning } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";

const Alert = ({ alertType, alertVisible, alertMessage }) => {
    return (
        <div>
            {alertVisible && (
                <div className={`z-50 fixed top-28 left-10  mx-auto ${alertType === "warning"
                    ?
                    "px-4 py-1 bg-secondaryRed  border border-tertiaryRed text-primaryRed"
                    : alertType === "success"
                        ?
                        "bg-green-100 border opacity-70 border-gabiGreen text-primaryGreen"
                        :
                        ""}  
                  px-4 py-1 rounded` }

                >
                    <div className='flex items-center gap-2'>
                        {alertType === "warning" ? <PiWarning /> : alertType === "success" ? <FaCheck /> : null}
                        <span className="block text-xs">{alertMessage ? alertMessage : "welcome gabi-alert"}</span>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Alert