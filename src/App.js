import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home/Home';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:videoId' element={<Home />} />
          <Route path='/VideoUploadPage' element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


