import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import { BsFilePlayFill } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { MdOutlineModeComment } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { LuBookmark } from "react-icons/lu";
import { IoMdHeart } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { VList, VGrid } from 'virtua';

//All videos
const videoList = [
  { id: 0, name: '/video4.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
  { id: 1, name: '/video4.mp4', caption: 'Video 1', desc: "Dün bugündür bugün yalan şiirlerr ise yarınlardır..." },
  { id: 2, name: '/video4.mp4', caption: 'Video 1', desc: "Berlin sert abiler mert :)" },
];

const TabsItemSocial = () => {
  const [openSharesWideScreen, setOpenSharesWideScreen] = useState(true);
  const [isHearted, setIsHearted] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videoRef = useRef(null);
  const scrollToIndexRef = useRef(null);

  // Switching to new video when scrolling
  useEffect(() => {
    //The index increases and decreases depending on the scrolling forward or backward movement.
    const handleWheel = (event) => {
      if (event.deltaY < 0) {
        // Upward scroll
        setCurrentVideoIndex((prevValue) => Math.max(prevValue - 1, 0));
      } else if (event.deltaY > 0 && currentVideoIndex < videoList.length - 1) {
        // Downward scroll, and not at the end of the list
        setCurrentVideoIndex((prevValue) => Math.max(prevValue - 1, videoList.length - 1));
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };

  }, [currentVideoIndex, videoList, scrollToIndexRef]);

  useEffect(() => {
    const handleTouch = (startY, endY) => {
      const deltaY = startY - endY;
      if (deltaY > 0) {
        // Aşağı kaydırma
        setCurrentVideoIndex((prevValue) => Math.min(prevValue + 1, videoList.length - 1));
      } else if (deltaY < 0) {
        // Yukarı kaydırma
        setCurrentVideoIndex((prevValue) => Math.max(prevValue - 1, 0));
      }
    };

    let startY;

    const touchStart = (event) => {
      startY = event.touches[0].clientY;
    };

    const touchEnd = (event) => {
      const endY = event.changedTouches[0].clientY;
      handleTouch(startY, endY);
    };

    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchend", touchEnd);

    return () => {
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchend", touchEnd);
    };
  }, [setCurrentVideoIndex, videoList]);

  // Include currentVideoIndex in the dependency array
  const openModal = (currentVideo) => {
    setOpenSharesWideScreen(true);
    setCurrentVideoIndex(currentVideo);
    document.body.style.overflowY = "hidden";
    console.log(videoList.findIndex((video) => video.id == currentVideo))
  };

  const closeModal = () => {
    setOpenSharesWideScreen(false);
    document.body.style.overflowY = "auto";
  };


  console.log(currentVideoIndex, videoList.length)

  return (
    <div className='grid grid-cols-1 miniTelefon:grid-cols-2 miniTablet:grid-cols-3 gap-5 pt-5'>

      {videoList && videoList.map((video, i) => (
        <div key={video.id} className='relative row-span cursor-pointer bg-white border rounded-md shadow-md shadow-white'>
          <BsFilePlayFill size={30} className='cursor-pointer absolute top-2 left-1' color='white' />
          <div style={{ borderRadius: '5px', overflow: 'hidden' }}>
            <ReactPlayer
              ref={videoRef}
              loop={false}
              playsInline
              light={false}
              controls={false}
              url={[video.name]}
              width='100%'
              height='50%'
              playing={false}
              muted={true}
            />
          </div>
          <button onClick={() => openModal(video.id)} className='hover:opacity-90 absolute right-2 bottom-20 flex items-center gap-2 bg-primaryPink text-white px-3 py-1 rounded-2xl'>
            <CiPlay1 />
            <h1 className='text-sm'>İzle</h1>
          </button>
          <div className='flex flex-col gap-2 text-start pt-5 h-20 overflow-y-auto'>
            <h1 className='text-xs font-semibold px-2'>{video.desc} 🌟🎬</h1>
          </div>
          <div className='bg-gray-200 text-gray-800 text-[10px] text-end px-2 border-t rounded-b-md'>
            <div className='flex items-center gap-1 justify-end'>
              <CiCalendar />
              <h4>20.28.2018</h4>
            </div>
          </div>
        </div>
      ))}


      {openSharesWideScreen && (
        <div className='fixed tablet:top-20 inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm tablet:bg-none z-50'>
          <div className='w-full max-w-xl bg-secondaryGray shadow-xl telefon:rounded-lg'>
            <span onClick={closeModal} className='text-white absolute z-40 cursor-pointer top-16 telefon:top-3 right-3 tablet:top-7 miniTablet:right-3 rounded-full p-2 bg-black hover:bg-white hover:text-black duration-300'>
              <IoMdClose size={25} className='hover:opacity-80' />
            </span>
            <div className='text-white'>
              <div className='flex items-center justify-between px-3 py-2 mt-5 telefon:mt-0'>
                <div className='flex items-center gap-2'>
                  <img
                    className='h-auto rounded-full w-6'
                    src='https://www.livemedy.com/tr/files/download/950624a9-dd4b-406d-b34e-d52799db33ee'
                    alt='user-avatar'
                  />
                  <div className='text-start text-[9px]'>
                    <h1>Seda Odabaşı</h1>
                    <h3 className='text-textGray'>Uzman, Klinik Psikoloji</h3>
                  </div>
                </div>
                <div className='w-20 flex items-center justify-center py-1 border rounded-md text-white bg-none hover:bg-white hover:text-black duration-300 cursor-pointer'>
                  <FiPlus size={14} className={`heart-icon ${isHearted ? 'heartedmb-1 animate-heart' : ''}`} />
                  <h1 className='text-[11px]  telefon:block'>Takip Et</h1>
                </div>
              </div>
            </div>

            <div className=' h-[100vh]  telefon:h-[430px] overflow-y-auto snap-mandatory snap-y'>
              <div key={videoList[currentVideoIndex]?.id} className='snap-start snap-always py-2 h-[95%]' >
                <div className='h-full telefon:h-4/6 bg-black bg-opacity-80 backdrop-blur-sm telefon:bg-primaryGray'>
                  <ReactPlayer
                    loop={false}
                    playsInline
                    light={false}
                    controls={true}
                    url={[videoList[currentVideoIndex]?.name]}
                    width='100%'
                    height='100%'
                    playing={false}
                    muted={true}
                    className="z-0"
                  />
                </div>
                <div className='flex telefon:hidden flex-col items-end justify-end text-start text-xs max-w-[250px] h-24 overflow-y-auto  gap-3 absolute z-50  bottom-24 left-1 text-white border-none p-3  ' >
                  
                  <p>{videoList[currentVideoIndex]?.desc}</p>

                </div>
                <div className='flex telefon:hidden flex-col items-end gap-3 absolute z-50  bottom-24 right-1 text-white border-none p-3 rounded-md bg-gradient-to-t from-black bg-opacity-80 backdrop-blur-sm ' >
                  <div  >
                    {isHearted ? (
                      <div className='flex flex-col items-center gap-1 '>                        
                        <IoMdHeart
                          size={18}
                          onClick={() => setIsHearted(!isHearted)}
                          className={`heart-icon h-6 w-6 ${isHearted ? 'hearted text-red-700 animate-heart' : ''}`} />
                          <h3 className='text-lg font-extralight text-start text-red'>23</h3>
                      </div>
                    ) : (
                      <div className='flex flex-col items-center gap-1 '>
                        
                        <FaHeart
                          onClick={() => setIsHearted(!isHearted)}
                          className={`heart-icon h-6 w-6 ${isHearted ? 'hearted text-red-700 mb-1 animate-heart' : ''}`} />
                          <h3 className='text-lg font-extralight text-start text-red'>13</h3>
                      </div>
                    )}
                  </div>
                  <div className='flex flex-col items-center gap-1 ' >                    
                    <MdOutlineModeComment className={`h-6 w-6 hover:opacity-60`} />
                    <h3 className='text-lg font-extralight text-start text-red'>23</h3>
                  </div>
                  <div className='flex flex-col items-center gap-1 ' >
                    <BsShare className={`h-6 w-6 mb-1 hover:opacity-60`} />
                  </div>

                </div>
                <div className='hidden comment w-full telefon:h-2/6 overflow-y-auto telefon:flex flex-col items-start justify-between p-3'>
                  <div className=' w-full telefon:flex flex-col gap-2'>
                    <div className='w-full flex gap-1 items-start justify-between cursor-pointer text-white'>
                      <div className='flex items-center gap-2'>
                        <div>
                          {isHearted ? (
                            <IoMdHeart
                              size={18}
                              onClick={() => setIsHearted(!isHearted)}
                              className={`heart-icon h-4 w-4 ${isHearted ? 'hearted text-red-700 animate-heart' : ''}`} />
                          ) : (
                            <FaHeart
                              onClick={() => setIsHearted(!isHearted)}
                              className={`heart-icon h-4 w-4 ${isHearted ? 'hearted text-red-700 mb-1 animate-heart' : ''}`} />
                          )}
                        </div>
                        <MdOutlineModeComment className={`h-4 w-4 hover:opacity-60`} />
                        <BsShare className={`h-4 w-4 mb-1 hover:opacity-60`} />
                      </div>
                      <LuBookmark className={`h-4 w-4 mb-1 hover:opacity-60`} />
                    </div>
                    <h3 className='text-xs text-start text-white'>23 beğenme, 12 yorum</h3>
                    <div className='flex items-start gap-2 text-xs'>
                      <h3 className='text-white font-semibold'>cbrlKilinc</h3>
                      <p className='text-start text-white font-light'>{videoList[currentVideoIndex]?.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </div >
  );
};

export default TabsItemSocial;
