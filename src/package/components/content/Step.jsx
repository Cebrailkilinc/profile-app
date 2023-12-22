import React from 'react'

const Step = ({ selectStep, setSelectStep }) => {    
    return (
        <div className="flex items-center w-full max-w-xs mx-auto justify-between px-10 miniTelefon:px-10 py-5 ">
            <span onClick={()=>setSelectStep(1)} className={`flex items-center justify-center w-8 h-8 border  rounded-full cursor-pointer  ${selectStep === 1 ? "bg-blue-600 text-white" : ""}`}>
                1
            </span>
            <span onClick={()=>setSelectStep(2)}  className={`flex items-center justify-center w-8 h-8 border rounded-full cursor-pointer ${selectStep === 2 ? "bg-blue-600 text-white" : ""}`}  >
                2
            </span>
            <span onClick={()=>setSelectStep(3)}  className={`flex items-center justify-center w-8 h-8 border rounded-full cursor-pointer ${selectStep === 3 ? "bg-blue-600 text-white" : ""} `} >
                3
            </span>
            <span onClick={()=>setSelectStep(4)}  className={`flex items-center justify-center w-8 h-8 border rounded-full cursor-pointer ${selectStep === 4 ? "bg-blue-600 text-white" : ""} `} >
                4
            </span>
        </div>
    )
}

export default Step