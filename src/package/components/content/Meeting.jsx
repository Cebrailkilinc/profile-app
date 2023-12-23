"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import Loading from "./Loading"

const KindOfTherapyStep = dynamic(() => import("./KindOfTherapyStep"));
const DatePickerStep = dynamic(() => import("./DatePickerStep"), { loading: () => <Loading />, ssr: false });
const InformationForm = dynamic(() => import("./InformationForm"));
const MeetInformation = dynamic(() => import("./MeetInformation"));

import Step from "./Step";

const Meeting = () => {
    const [selectStep, setSelectStep] = useState(1)
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedDate, setSelectedDate] = useState("13.12.2023");
    const [informationSponsee, setInformationSponsee] = useState({ fullName: "", phoneNumber: 0, message: "" })
    const [kindOfTherapy, setKindOfTherapy] = useState("")

    const handleNextStep = (e) => {
        if (selectStep === 4) {
            return
        }
        setSelectStep(selectStep + 1)

        // Form bilgilerini kullanarak istediğiniz işlemleri yapabilirsiniz.
        console.log('Form Verileri:', "informationSponsee");
        // Örneğin, form veril

    }

    const meetingInformation = {
        date: selectedDate,
        time: selectedTime,
        kindOfTherapy: kindOfTherapy,
        name: informationSponsee.fullName,
        number: informationSponsee.phoneNumber,
        message: informationSponsee.message,
    }

    return (
        <div className='flex flex-col gap-2' >
            <h1 className='text-start pt-10 text-2xl text-textBlue font-semibold'>Randevu Al</h1>
            <Step selectStep={selectStep} setSelectStep={setSelectStep} />
            {
                selectStep === 1 && <DatePickerStep selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
            }
            {
                selectStep === 2 && <KindOfTherapyStep setKindOfTherapy={setKindOfTherapy} />
            }
            {
                selectStep === 3 && <InformationForm handleNextStep={handleNextStep} informationSponsee={informationSponsee} setInformationSponsee={setInformationSponsee} />
            }
            {
                selectStep === 4 && <MeetInformation meetingInformation={meetingInformation} />
            }
            <div className='flex items-center justify-end' >
                <button onClick={handleNextStep} className={`${selectStep === 4 ? "hidden " : ""}bg-primaryBlue hover:opacity-90 text-white w-1/2 py-2 rounded-md  transition duration-300 ease-in-out`} >
                    {
                        selectStep === 3 ? "Randevu" : "İlerle"
                    }
                </button>
            </div>
        </div>
    )
}

export default Meeting;