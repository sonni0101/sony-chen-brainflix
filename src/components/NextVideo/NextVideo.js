import React from 'react';
import './NextVideo.scss';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';
import test from '../../assets/images/Mohan-muruge.jpg';

function NextVideo(){
    return(
        <section className='next-video'>
            <h3 className='next-video__heading'>Next Video</h3>
            <VideoThumbnail videoImage={test}  />
        </section>
    );
}

export default NextVideo;