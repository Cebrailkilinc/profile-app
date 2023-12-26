import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';

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

const TabsItemSocial = () => {

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
    { name: '/video.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
    { name: '/video.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
    { name: '/video.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
  ];

  //Close video modal ( <SharesVideos/> component)
  const openModal = (currentVideo) => {
    setOpenSharesWideScreen(true);
    setCurrentVideo(currentVideo)
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
    <div className='grid grid-cols-1 miniTelefon:grid-cols-2 miniTablet:grid-cols-3 gap-5 pt-5'>
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
            <button onClick={() => openModal(video)} className='hover:opacity-90 absolute right-2  bottom-40 flex items-center gap-2 bg-primaryPink text-white px-3 py-1 rounded-2xl' >
              <CiPlay1 />
              <h1 className='text-sm' >İzle</h1>
            </button>
            <div className='flex flex-col gap-2 text-start pt-5 h-40 overflow-y-auto'>
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

        <div className='fixed tablet:top-20 inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm  tablet:bg-none z-50'>
          <div className='w-full max-w-xl bg-secondaryGray shadow-xl rounded-lg'>
            <span className='text-white absolute z-40 cursor-pointer top-3 right-3 tablet:top-10 tablet:right-5'>
              <IoMdClose onClick={closeModal} size={25} className='hover:opacity-80' />
            </span>
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
        </div>
      }
    </div>


  )
}

export default TabsItemSocial