import React, { useState, useRef } from 'react'
import dynamic from 'next/dynamic';
import Loading from '../../../../package/components/content/Loading';
import ReactPlayer from 'react-player/lazy';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { BsFilePlayFill } from "react-icons/bs";

const SharesModal = dynamic(() => import('./SharesModal'), {
    loading: () => <Loading />
})

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

    const openModal = (index) => {

        setOpenSharesWideScreen(true);

        if (videoRef.current) {
            videoRef.current.play();
        }
    };
    const closeModal = () => {
        setOpenSharesWideScreen(false);
        // Videoyu duraklat
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }
    return (
        <div className='grid grid-cols-1 miniTablet:grid-cols-3 gap-20 miniTelefon:gap-5 '>
            <SharesModal />
            <div className='video-container'>
                <ReactPlayer
                    controls={false}
                    playing={true}
                    url={[`video2.mp4`]}
                    width='100%'
                    height='100%'
                    style={{}}
                />
            </div>

            <div className='video-container'>
                <div className='custom-play-button-overlay'>
                    <BsFilePlayFill size={30} onClick={()=>window.alert("ssf")} className='cursor-pointer' color='white' />
                </div>
                <ReactPlayer
                    loop={false}
                    playsInline
                    light={false}
                    controls={false}
                    url={['video2.mp4']}
                    width='100%'
                    height='100%'
                    playing={true}
                    muted={true}
                />
            </div>
        </div>





    )
}

export default Shares