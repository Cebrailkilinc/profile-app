import React from 'react'
import { PiStethoscopeFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { LiaHospital } from "react-icons/lia";
import { RiTodoLine } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";

import Rating from "../Rating"
const Evaluations = () => {
  return (
    <div>
      <section className=" antialiased tablet:h-[calc(100vh_-_200px)] tablet:overflow-y-auto ">
        <div className='flex items-center gap-2 pb-5 mt-3 ' >
          <RiTodoLine size={25} />
          <h1 className='text-[18px] font-medium' >Değerlendirmeler (20)</h1>
        </div>
        <div className="bg-white max-w-2xl mx-auto py-5 px-4 rounded-lg">
          <div></div>
          <form className="mb-2">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200  ">
              <label htmlFor="comment" className="sr-only">Your comment</label>
              <textarea id="comment" rows="6"
                className="px-0 w-full text-xs text-gray-900 border-0 focus:ring-0 focus:outline-none   "
                placeholder="Write a comment..." required></textarea>
            </div>
            <button className={`bg-primaryBlue hover:opacity-90 text-white w-1/4 py-2 rounded-md  transition duration-300 ease-in-out`} >
              Yorum Yap
            </button>
          </form>
          <article className="p-6 text-xs bg-white  border-b ">
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col justify-center items-center">
                <div className='flex items-start'>
                  <img
                    className="mr-2 w-6 h-6 rounded-md"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough" />
                  <div className='flex flex-col items-start gap-1 mt-1' >
                    <h1>M*** G*****</h1>
                    <div className="flex items-center gap-2  text-xs  ">
                      <FaCalendar className='text-primaryGreen' />
                      <h1 className='text-primaryGray' >Feb. 8, 2022</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2 mt-1' >
                <h1>Puan:</h1>
                <Rating color="green"/>
              </div>
            </div>
            <p className=" text-start pl-8">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
              instruments for the UX designers. The knowledge of the design tools are as important as the
              creation of the design strategy.</p>
          </article>
          <article className="p-6 text-xs bg-white  border-b ">
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col justify-center items-center">
                <div className='flex items-start'>
                  <img
                    className="mr-2 w-6 h-6 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough" />
                  <div>
                    <h1>M*** G*****</h1>
                    <p className="text-xs text-gray-600 ">
                      Feb. 8, 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2' >
                <h1>Puan:</h1>
                <Rating />
              </div>
            </div>
            <p className=" text-start pl-8">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
              instruments for the UX designers. The knowledge of the design tools are as important as the
              creation of the design strategy.</p>
          </article>


        </div>
      </section>
    </div>
  )
}

export default Evaluations