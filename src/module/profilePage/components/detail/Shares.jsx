import React, { useState, useRef } from 'react'
import dynamic from 'next/dynamic';
import Loading from '../../../../package/components/content/Loading';

const SharesModal = dynamic(() => import('./SharesModal'), {
    loading: () => <Loading />
})

const Shares = () => {
    const [openSharesWideScreen, setOpenSharesWideScreen] = useState(false);
    const [videoSource, setVideoSource] = useState('./video1.mp4');
    const [currentVideo, setCurrentVideo] = useState({
        index: 0,
        name: 'video1.mp4',
    });

    const videoRef = useRef(null);

    const videoList = [
        { name: 'video1.mp4', caption: 'Video 1', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },
        { name: 'video2.mp4', caption: 'Video 2', desc: "Bugün çok özel bir video hazırladım sizler için umarım seversiniz." },   
        // ... diğer video dosyaları
    ];

    const openModal = (index) => {
        setCurrentVideo({ index, name: videoList[index].name });
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
        <div class='grid grid-cols-1 miniTablet:grid-cols-3  gap-2 '>
            {openSharesWideScreen ? <SharesModal onClose={closeModal} videoRef={videoRef} videoSource={videoSource} currentVideo={currentVideo}/> : null}
            {videoList && videoList.map((video, index) => (
                <div key={index} onClick={openModal} class='border rounded-md h-56 bg-gray-950 flex flex-col items-center justify-start hover:opacity-70 cursor-pointer'>
                    <video className='rounded-t-md' width="100%" height="100%" controls>
                        <source src={video.name} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <p className='text-white text-start p-2 text-sm' >{video.desc}</p>
                </div>
            ))}

        </div>
    )
}

export default Shares