import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Swiper, SwiperSlide } from 'swiper/react';
//Icons
import { BsFilePlayFill } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdOutlineModeComment } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import { IoMdHeart } from "react-icons/io"
<<<<<<< HEAD
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiPlus } from "react-icons/fi";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
=======
import { FaUserCircle } from "react-icons/fa";
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
>>>>>>> bb29b6f203a0f2a3f8b1d4abf237a1d9486e1e23

import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';
const TabsItemSocial = ({ isFollow, setIsFollow }) => {

  const [openSharesWideScreen, setOpenSharesWideScreen] = useState(false);
  const [isHearted, setIsHearted] = useState(false);

  //currently playing video in <SharesVideos/> compoment
  const [currentVideo, setCurrentVideo] = useState({
    index: 0,
    name: 'video1.mp4',
  });

  const videoRef = useRef(null);

  //All videos
  const videoList = [
    { id: 0, name: '/video.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
    { id: 1, name: '/video.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
    { id: 2, name: '/video.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
  ];

  //Close video modal ( <SharesVideos/> component)
  const openModal = (currentVideo) => {
    setOpenSharesWideScreen(true);
    const findCurrentVideoWithId = videoList.find(video => video.id === currentVideo);
    setCurrentVideo(findCurrentVideoWithId)

    //Play video
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  //Open video modal ( <SharesVideos/> component)
  const closeModal = () => {
    setOpenSharesWideScreen(false);
    // Pause video
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }


  return (
    <div className='grid grid-cols-1 miniTelefon:grid-cols-2 miniTablet:grid-cols-3 gap-5 pt-5 '>

      {
        videoList && videoList.map((video, i) => (
          <div key={i} className='relative cursor-pointer  bg-white border rounded-md shadow-md shadow-white '>
            <BsFilePlayFill size={30} onClick={() => window.alert("ssf")} className='cursor-pointer absolute top-2 left-1' color='white' />
            <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
              <ReactPlayer
                loop={false}
                playsInline
                light={false}
                controls={false}
                url={[video.name]}
                width='100%'
                height="50%"
                playing={false}
                muted={true}
              />
            </div>
<<<<<<< HEAD
            <button onClick={() => openModal(video)} className='hover:opacity-90 absolute right-2  bottom-28 flex items-center gap-2 bg-primaryPink text-white px-3 py-1 rounded-2xl' >
=======
            <button onClick={() => openModal(video.id)} className='hover:opacity-90 absolute right-2  bottom-40 flex items-center gap-2 bg-primaryPink text-white px-3 py-1 rounded-2xl' >
>>>>>>> bb29b6f203a0f2a3f8b1d4abf237a1d9486e1e23
              <CiPlay1 />
              <h1 className='text-sm' >İzle</h1>
            </button>
            <div className='flex flex-col gap-2 text-start pt-5 h-28 overflow-y-auto'>
              <h1 className='text-xs font-semibold px-2'>Video Mükemmeldi! İzlemeyenler Ne Kaçırıyor? 🌟🎬</h1>
              <div >
                <p className='text-[10px] px-2'>
                  Bu başlık, olumlu bir ifade içeriyor ve izleyenleri meraklandıracak bir unsur taşıyor.
                  Eğer daha spesifik bir konsept veya video içeriği varsa,
                  başlığı buna göre özelleştirebilirsiniz.
                </p>
              </div>
            </div>
            <div className='bg-gray-200 text-gray-800 text-[10px] text-end px-2 border-t rounded-b-md' >
              <div className='flex items-center gap-1 justify-end' >
                <CiCalendar />
                <h4>20.28.2018</h4>
              </div>
            </div>
          </div>
        ))
      }

      {/* open video full screen */}
      {openSharesWideScreen &&

<<<<<<< HEAD
        <div className='fixed tablet:top-20 inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm  tablet:bg-none z-50'>
          <div className='w-full max-w-xl bg-secondaryGray shadow-xl rounded-lg'>
            <span className='text-white absolute z-40 cursor-pointer top-3 right-3 tablet:top-10 tablet:right-80 bg-black rounded-full p-1 hover:bg-white hover:text-black duration-300'>
              <IoMdClose onClick={closeModal} size={25} className='hover:opacity-80' />
            </span>
            <div className='text-white'>
              <div className='flex items-center justify-between px-3  py-2 ' >
                <div className='flex items-center gap-2'>
                  <img
                    className='h-auto rounded-full  w-6'
                    src='https://www.livemedy.com/tr/files/download/950624a9-dd4b-406d-b34e-d52799db33ee'
                  />
                  <div className='text-start text-[9px]' >
                    <h1>Seda Odabaşı</h1>
                    <h3 className='text-textGray'>Uzman, Klinik Psikoloji</h3>
                  </div>
                </div>
                <div className='w-20 flex   items-center justify-center py-1  border rounded-md 
                        text-white bg-none  hover:bg-white hover:text-black duration-300 cursor-pointer ' >
                  <FiPlus
                    size={14}
                    className={`heart-icon ${isHearted ? 'heartedmb-1 animate-heart' : ''}`}
                  />
                  <h1 className='text-[11px]  telefon:block' >Takip Et</h1>
                </div>
              </div>
            </div>
            <div className='video-container'>
              <ReactPlayer
                loop={false}
                playsInline
                light={false}
                controls={true}
                url={[currentVideo.name]}
                width='100%'
                height='100%'
                playing={true}
                muted={true}
                style={{ borderRadius: '20px' }}
              />
            </div>
            <div className='flex flex-col items-start justify-between p-3'>
              <div className='flex flex-col gap-2'>
                <div className='w-full flex gap-3 items-start justify-between cursor-pointer text-white'>
                  <div className='flex items-center gap-2' >
                    <div>
                      {isHearted ? (
                        <IoMdHeart
                          size={18}
                          onClick={() => setIsHearted(!isHearted)}
                          className={`heart-icon h-4 w-4  ${isHearted ? 'hearted text-red-700 animate-heart' : ''}`}
                        />
                      ) : (
                        <FaHeart
                          onClick={() => setIsHearted(!isHearted)}
                          className={`heart-icon h-4 w-4  ${isHearted ? 'hearted text-red-700 mb-1 animate-heart' : ''}`}
                        />
                      )}
=======
        <div className='fixed  tablet:top- inset-0 flex flex-col items-center justify-between gap-10 bg-black bg-opacity-60 backdrop-blur-sm  tablet:bg-none z-50 h-screen overflow-y-auto'>
          <div onClick={closeModal} >X</div>
          <Swiper
            direction={'vertical'}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{
              clickable: true,
            }}
            modules={[Mousewheel, Pagination]}
            className="mySwiper"
          >
            {
              videoList.map((item, i) => {
                return (
                  <SwiperSlide>
                    <div className='mt-14'>
                      <div className=' w-full max-w-xl bg-secondaryGray   shadow-xl rounded-lg'>


                        <div className=''>
                          <div className='text-white flex item-center justify-between p-3  bg-white rounded-t-md ' >
                            <div className='flex items-center gap-2  text-xs text-black ' >
                              <FaUserCircle className='text-3xl text-gray-300' />
                              <div className='flex flex-col items-start '>
                                <h1 className='font-semibold' > Cebrail Kılınç</h1>
                                <h3 className='text-textGray text-[8px] ml-[2px]'>Uzman, Klinik Psikoloji</h3>
                              </div>
                            </div>
                            <div>
                              <div className='w-full  cursor-pointer'>
                                {isFollow ? (
                                  <div onClick={() => setIsFollow(!isFollow)} className='w-20 flex   items-center justify-center py-1 gap-1 bg-primaryPink text-white border rounded-md  ' >
                                    <BsCheck
                                      size={16}
                                      className={`heart-icon ${isFollow ? 'hearted text-white  animate-heart ' : ''}`}
                                    />
                                    <h1 className='text-[11px]' >Takip</h1>
                                  </div>
                                ) : (
                                  <div onClick={() => setIsFollow(!isFollow)} className='w-20 flex items-center justify-center py-1  border rounded-md 
                          text-white bg-primaryPink' >
                                    <FiPlus
                                      size={14}
                                      className={`heart-icon ${isFollow ? 'heartedmb-1 animate-heart' : ''}`}
                                    />
                                    <h1 className='text-[11px] '>Takip Et</h1>
                                  </div>
                                )}

                              </div>
                            </div>
                          </div>
                          <div className='video-container'>
                            <ReactPlayer
                              loop={false}
                              playsInline
                              light={false}
                              controls={true}
                              url={[currentVideo.name]}
                              width='100%'
                              height='100%'
                              playing={true}
                              muted={true}
                              style={{ borderRadius: '20px' }}
                            />
                          </div>

                        </div>
                        <div className='flex flex-col items-start justify-between p-3'>
                          <div className='flex flex-col gap-2'>
                            <div className='w-full flex gap-3 items-start justify-between cursor-pointer text-white'>
                              <div className='flex items-center gap-2' >
                                <div>
                                  {isHearted ? (
                                    <IoMdHeart
                                      size={18}
                                      onClick={() => (!isHearted)}
                                      className={`heart-icon h-4 w-4  ${isHearted ? 'hearted text-red-700 animate-heart' : ''}`}
                                    />
                                  ) : (
                                    <FaHeart
                                      onClick={() => setIsHearted(!isHearted)}
                                      className={`heart-icon h-4 w-4  ${isHearted ? 'hearted text-red-700 mb-1 animate-heart' : ''}`}
                                    />
                                  )}
                                </div>
                                <MdOutlineModeComment className={`h-4 w-4 hover:opacity-60`} />
                                <BsShare className={`h-4 w-4 mb-1 hover:opacity-60`} />
                              </div>
                              < LuBookmark className={`h-4 w-4 mb-1 hover:opacity-60`} />
                            </div>
                            <h3 className='text-xs text-start text-white'>23 beğenme, 12 yorum</h3>
                            <div className='flex items-start gap-2 text-xs'>
                              <h3 className='text-white font-semibold'>cbrlKilinc</h3>
                              <p className='text-start text-white font-light'>
                                This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
>>>>>>> bb29b6f203a0f2a3f8b1d4abf237a1d9486e1e23
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>


      }
    </div>
  )
}

export default TabsItemSocial