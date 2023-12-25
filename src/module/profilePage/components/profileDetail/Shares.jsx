import React, { useState, useRef } from 'react'
import dynamic from 'next/dynamic';
import ReactPlayer from 'react-player/lazy';

//Icons
import { BsFilePlayFill } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
const SharesVideo = dynamic(() => import('./SharesVideo')) // SharesModal added as dynamic

const Shares = () => {
    const [openSharesWideScreen, setOpenSharesWideScreen] = useState(false);

    //currently playing video in <SharesVideos/> compoment
    const [currentVideo, setCurrentVideo] = useState({
        index: 0,
        name: 'video1.mp4',
    });
    const videoRef = useRef(null);

    //All videos
    const videoList = [
        { name: 'video.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
        { name: 'video.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
        { name: 'video.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
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
        <div className='grid grid-cols-1 miniTelefon:grid-cols-2 miniTablet:grid-cols-3 gap-5 '>
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
                               <CiCalendar/> 
                               <h4>20.28.2018</h4>
                            </div>                           
                        </div>
                    </div>
                ))
            }


            {openSharesWideScreen && <SharesVideo currentVideo={currentVideo} closeModal={closeModal} />}
        </div>





    )
}

export default Shares