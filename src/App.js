import logo from './logo.svg';
import './App.css';
import './App.scss';
import Header from './components/Header/Header.js';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.js';
import VideoDetails from './components/VideoDetails/VideoDetails.js';
import CommentSection from './components/CommentSection/CommentSection.js';
import NextVideo from './components/NextVideo/NextVideo.js';

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <div className='section-wrapper'>
        <div className='section-wrapper__left'>
          <VideoDetails />
          <CommentSection />
        </div>
        <div className='section-wrapper__right'>
          <NextVideo />
        </div>
      </div>
    </>
  );
}

export default App;
