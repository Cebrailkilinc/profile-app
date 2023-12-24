import React from 'react';
//Components
import Rating from "../../../../package/components/content/Rating";
//Icons
import { RiTodoLine } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";

const TabsItemEvaluations = () => {
  return (
    <>
      <section className="tablet:h-[calc(100vh_-_200px)] tablet:overflow-y-auto pt-2 px-">
        <div className='flex items-center gap-2  pb-5 mt-3 ' >
          <RiTodoLine size={25} />
          <h1 className='text-[18px] font-medium ' >Değerlendirmeler (20)</h1>
        </div>
        <div className="bg-white max-w-3xl mx-auto py-5 px-3 rounded-lg">
          <article className="p-1 miniTelefon:p-6 text-xs bg-white  border-b ">
            <div className='flex items-center justify-start border-b gap-2 pb-10' >
              <div className='text-xl text-white bg-gabiGreen p-5 rounded-md' >5.0</div>
              <div className='flex flex-col items-start gap-1' >
                <Rating size={20} />
                <h1 className='font-semibold' >Genel Puan</h1>
                <h1>77 oy</h1>
              </div>
            </div>
            <div className="flex justify-between items-start mt-5 mb-2">
              <div className="flex flex-col justify-center items-center">
                <div className='flex items-start'>
                  <img
                    className="mr-2 w-6 h-6 rounded-md"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough" />
                  <div className='flex flex-col items-start gap-1 mt-1 text-sm' >
                    <h1>M*** G*****</h1>
                    <div className="flex items-center gap-2  text-xs  ">
                      <FaCalendar className='text-gabiGreen' />
                      <h1 className='text-primaryGray text-[10px]' >Feb. 8, 2022</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2 mt-1' >
                <h1>Puan:</h1>
                <Rating size={10} color="gabiGreen" />
                <p className="text-xs">4.95</p>
              </div>
            </div>
            <p className="text-sm text-start pl-8">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
              instruments for the UX designers. The knowledge of the design tools are as important as the
              creation of the design strategy.</p>
          </article>
          <article className="p-1 miniTelefon:p-6 text-xs bg-white  border-b ">
            <div className="flex justify-between items-start mb-2">
              <div className="flex flex-col justify-center items-center">
                <div className='flex items-start'>
                  <img
                    className="mr-2 w-6 h-6 rounded-md"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Michael Gough" />
                  <div className='flex flex-col items-start gap-1 text-sm mt-1' >
                    <h1>M*** G*****</h1>
                    <div className="flex items-center gap-2  text-xs  ">
                      <FaCalendar className='text-gabiGreen' />
                      <h1 className='text-primaryGray text-[10px]' >Feb. 8, 2022</h1>
                    </div>                   
                  </div>                 
                </div>
              </div>
              <div className='flex items-center gap-2 mt-1' >
                <h1>Puan:</h1>
                <Rating size={10} color="gabiGreen" />
                <p className="text-xs">4.95</p>
              </div>
            </div>
            <p className="text-sm text-start pl-8">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
              instruments for the UX designers. The knowledge of the design tools are as important as the
              creation of the design strategy.</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default TabsItemEvaluations