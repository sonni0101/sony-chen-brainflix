import React, { useState } from 'react';
import './Home.scss';
import Header from '../../components/Header/Header.js';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.js';
import VideoDetails from '../../components/VideoDetails/VideoDetails.js';
import CommentSection from '../../components/CommentSection/CommentSection.js';
import NextVideo from '../../components/NextVideo/NextVideo.js';
import VideoDetialsData from '../../data/video-details.json';
import VideoDetials from '../../data/videos.json';

function Home() {
 const [currentVideo, setCurrenVideo] = useState(VideoDetialsData[0]);

 const handleVideoSelect = (id) => {
  const selectedVideo = VideoDetialsData.find(video => video.id === id);
  setCurrenVideo(selectedVideo);
 };

  return (
    <main>
      <Header />
      <VideoPlayer 
        videoLink={currentVideo.image} 
        duration={currentVideo.duration}
      />
      <div className='section-wrapper'>
        <div className='section-wrapper__left'>
          <VideoDetails
           title={currentVideo.title}
           creator={currentVideo.channel}
           uploadDate={new Date(currentVideo.timestamp).toLocaleDateString()}
           views={currentVideo.views}
           likes={currentVideo.likes}
           description={currentVideo.description} />
          <CommentSection loadComments={currentVideo.comments} />
        </div>
        <div className='section-wrapper__right'>
          <NextVideo 
            videos={VideoDetials.filter(video => video.id !== currentVideo.id)}
            onVideoSelect={handleVideoSelect}
            />
        </div>
      </div>
    </main>
  );
}

export default Home;
