import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.js';
import VideoDetails from './components/VideoDetails/VideoDetails.js';
import CommentSection from './components/CommentSection/CommentSection.js';

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <VideoDetails />
      <CommentSection />
    </>
  );
}

export default App;
