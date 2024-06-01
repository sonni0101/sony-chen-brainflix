import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.js';
import VideoDetails from './components/VideoDetails/VideoDetails.js';

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <VideoDetails />
    </>
  );
}

export default App;
