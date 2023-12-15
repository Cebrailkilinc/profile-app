import React from 'react'
import { PiStethoscopeFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { LiaHospital } from "react-icons/lia";
import { RiTodoLine } from "react-icons/ri";
const Evaluations = () => {
  return (
    <div>
      <section className=" antialiased">
        <div className='flex items-center gap-2 pb-5 mt-3 ' >
          <RiTodoLine size={25} />
          <h1 className='text-[18px] font-medium' >Değerlendirmeler (20)</h1>
        </div>
        <div className="bg-white max-w-2xl mx-auto px-4">
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
          <article className="p-6 text-xs bg-white rounded-lg ">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-xs text-gray-900  font-semibold"><img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough" />Michael Gough</p>
                <p className="text-xs text-gray-600 "><time pubdate dateTime="2022-02-08"
                  title="February 8th, 2022">Feb. 8, 2022</time></p>
              </div>
              <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                className="inline-flex items-center p-2 text-xs font-medium text-center   bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>

              <div id="dropdownComment1"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-xs text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton">
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Edit</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Remove</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Report</a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className=" text-start">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
              instruments for the UX designers. The knowledge of the design tools are as important as the
              creation of the design strategy.</p>
            <div className="flex items-center mt-4 space-x-4">
              <button type="button"
                className="flex items-center text-xs  hover:underline  font-medium">
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                </svg>
                Cevapla
              </button>
            </div>
          </article>
          <article className="p-6 mb-3 ml-6 lg:ml-12 text-xs bg-white rounded-lg ">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-xs text-gray-900  font-semibold"><img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="Jese Leos" />Jese Leos</p>
                <p className="text-xs text-gray-600 "><time pubdate dateTime="2022-02-12"
                  title="February 12th, 2022">Feb. 12, 2022</time></p>
              </div>
              <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2"
                className="inline-flex items-center p-2 text-xs font-medium text-center  dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>

              <div id="dropdownComment2"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-xs text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton">
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Edit</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Remove</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Report</a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className=" text-start ">Much appreciated! Glad you liked it ☺️</p>
            <div className="flex items-center mt-4 space-x-4">
              <button type="button"
                className="flex items-center text-xs  hover:underline  font-medium">
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                </svg>
                Cevapla
              </button>
            </div>
          </article>
          <article className="p-6 mb-3 text-xs bg-white border-t border-gray-200  ">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-xs text-gray-900  font-semibold"><img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie Green" />Bonnie Green</p>
                <p className="text-xs text-gray-600 "><time pubdate dateTime="2022-03-12"
                  title="March 12th, 2022">Mar. 12, 2022</time></p>
              </div>
              <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
                className="inline-flex items-center p-2 text-xs font-medium text-center  dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
                <span className="sr-only">Comment settings</span>
              </button>

              <div id="dropdownComment3"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-xs text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton">
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Edit</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Remove</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Report</a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className=" text-start ">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
            <div className="flex items-center mt-4 space-x-4">
              <button type="button"
                className="flex items-center text-xs  hover:underline  font-medium">
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                </svg>
                Cevapla
              </button>
            </div>
          </article>
          <article className="p-6 text-xs bg-white border-t border-gray-200  ">
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-xs text-gray-900  font-semibold"><img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                  alt="Helene Engels" />Helene Engels</p>
                <p className="text-xs text-gray-600 "><time pubdate dateTime="2022-06-23"
                  title="June 23rd, 2022">Jun. 23, 2022</time></p>
              </div>
              <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4"
                className="inline-flex items-center p-2 text-xs font-medium text-center  dark:text-gray-40 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>

              <div id="dropdownComment4"
                className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow">
                <ul className="py-1 text-xs text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton">
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Edit</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Remove</a>
                  </li>
                  <li>
                    <a href="#"
                      className="block py-2 px-4 hover:bg-gray-100  ">Report</a>
                  </li>
                </ul>
              </div>
            </footer>
            <p className=" text-start ">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p>
            <div className="flex items-center mt-4 space-x-4">
              <button type="button"
                className="flex items-center text-xs  hover:underline  font-medium">
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z" />
                </svg>
                Cevapla
              </button>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default Evaluations