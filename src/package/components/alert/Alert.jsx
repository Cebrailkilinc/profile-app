"use client"
import React, { useEffect } from 'react'
import { PiWarning } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";

const Alert = ({ message, alertType, alertVisible, alertMessage }) => {
    return (
        <div>
            {alertVisible && (
                <div className={`z-50 absolute top-28 left-10 max-w-md mx-auto ${alertType === "warning"
                    ?
                    "bg-red-100 border border-red-400 text-red-700"
                    : alertType === "success"
                        ?
                        "bg-green-100 border border-green-400 text-green-700 "
                        :
                        ""}  
                  px-4 py-3 rounded`
                }
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