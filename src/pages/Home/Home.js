import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss';
import Header from '../../components/Header/Header.js';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.js';
import VideoDetails from '../../components/VideoDetails/VideoDetails.js';
import CommentSection from '../../components/CommentSection/CommentSection.js';
import NextVideo from '../../components/NextVideo/NextVideo.js';

const apiUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const videoPath = "videos";
const apiKey = "0fb16f10-b986-40a5-bdc1-70d836686b86";

function Home() {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${apiUrl}${videoPath}?api_key=${apiKey}`);
        setVideoList(response.data);
        fetchVideoDetails(response.data[0].id);
      } catch (error) {
        throw(error);
      }
    };

    const fetchVideoDetails = async (id) => {
      try {
        const response = await axios.get(`${apiUrl}${videoPath}/${id}?api_key=${apiKey}`);
        setCurrentVideo(response.data);
      } catch (error) {
        throw(error);
      }
    };
    fetchVideos();
  }, []);

  const handleVideoSelect = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}${videoPath}/${id}?api_key=${apiKey}`);
      setCurrentVideo(response.data);
    } catch (error) {
      throw(error);
    }
  };

  return (
    <>
      <Header />
      {currentVideo && (
        <>
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
              {Array.isArray(currentVideo.comments) && (
                <CommentSection loadComments={currentVideo.comments} />
              )}
            </div>
            <div className='section-wrapper__right'>
              <NextVideo 
                videos={videoList.filter(video => video.id !== currentVideo.id)}
                onVideoSelect={handleVideoSelect}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;