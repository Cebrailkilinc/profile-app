import React, { useState, useRef } from 'react'
import dynamic from 'next/dynamic';
import Loading from '../../../../package/components/content/Loading';
import ReactPlayer from 'react-player/lazy';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { BsFilePlayFill } from "react-icons/bs";

const SharesVideo = dynamic(() => import('./SharesVideo')) // SharesModal added as dynamic

const Shares = () => {
    const [openSharesWideScreen, setOpenSharesWideScreen] = useState(false);
    const [videoSource, setVideoSource] = useState('./video1.mp4');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentVideo, setCurrentVideo] = useState({
        index: 0,
        name: 'video1.mp4',
    });
    const videoRef = useRef(null);

    const handlePlayButtonClick = () => {
        setIsPlaying(true);
    };
    const videoList = [
        { name: 'video1.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
        { name: 'video2.mp4', caption: 'Video 2', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
    ];

    //Close video modal
    const openModal = (currentVideo) => {
        setOpenSharesWideScreen(true);
        setCurrentVideo(currentVideo)
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    //Open video modal
    const closeModal = () => {
        setOpenSharesWideScreen(false);
        // Videoyu duraklat
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }
    return (
        <div className='grid grid-cols-1 miniTablet:grid-cols-3 gap-20 miniTelefon:gap-5 '>

            <div className='video-container'>
                <ReactPlayer
                    controls={false}
                    playing={true}
                    url={[`video2.mp4`]}
                    width='100%'
                    height='100%'
                />
            </div>
            {
                videoList && videoList.map((video, i) => (
                    <div key={i} onClick={()=>openModal(video)} className='video-container cursor-pointer'>
                        <div className='custom-play-button-overlay'>
                            <BsFilePlayFill size={30} onClick={() => window.alert("ssf")} className='cursor-pointer' color='white' />
                        </div>
                        <ReactPlayer
                            loop={false}
                            playsInline
                            light={false}
                            controls={false}
                            url={[video.name]}
                            width='100%'
                            height='100%'
                            playing={true}
                            muted={true}
                        />
                    </div>
                ))
            }


            {openSharesWideScreen && <SharesVideo currentVideo={currentVideo} closeModal={closeModal} />}
        </div>





    )
}

export default Shares