import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Home from './pages/Home/Home';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/VideoUploadPage">Video Upload Page</Link></li>
          </ul>
        </nav> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/VideoUploadPage' element={<VideoUploadPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
