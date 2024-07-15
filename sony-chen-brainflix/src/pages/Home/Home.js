import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.scss';
import Header from '../../components/Header/Header.js';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.js';
import VideoDetails from '../../components/VideoDetails/VideoDetails.js';
import CommentSection from '../../components/CommentSection/CommentSection.js';
import NextVideo from '../../components/NextVideo/NextVideo.js';
import { useParams, useNavigate } from 'react-router-dom';

const apiUrl = 'http://localhost:8080';
const videoPath = "/videos";

function Home() {
  const { videoId } = useParams();
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videoList, setVideoList] = useState([]);
  const navigate = useNavigate();

  const fetchVideoDetails = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}${videoPath}/${id}`);
      setCurrentVideo(response.data);
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  const postComment = async (comment) => {
    try {
      await axios.post(`${apiUrl}${videoPath}/${videoId}/comments`, comment);
      fetchVideoDetails(videoId);
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`${apiUrl}${videoPath}/${videoId}/comments/${commentId}`);
      fetchVideoDetails(videoId);
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`${apiUrl}${videoPath}`);
        setVideoList(response.data);
        if (!videoId && response.data.length > 0) {
          navigate(`/video/${response.data[0].id}`);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [videoId, navigate]);

  useEffect(() => {
    if (videoId) {
      fetchVideoDetails(videoId);
    }
  }, [videoId]);

  const handleVideoSelect = (id) => {
    navigate(`/video/${id}`);
  };

  return (
    <main>
      <Header />
      {currentVideo && (
        <>
          <VideoPlayer videoLink={currentVideo.image} duration={currentVideo.duration} />
          <div className='section-wrapper'>
            <div className='section-wrapper__left'>
              <VideoDetails
                title={currentVideo.title}
                creator={currentVideo.channel}
                uploadDate={new Date(currentVideo.timestamp).toLocaleDateString()}
                views={currentVideo.views}
                likes={currentVideo.likes}
                description={currentVideo.description}
              />
              <CommentSection
                loadComments={currentVideo.comments}
                onCommentSubmit={postComment}
                onCommentDelete={deleteComment}
              />
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
    </main>
  );
}

export default Home;