import React from 'react';
import './NextVideo.scss';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';

function NextVideo({videos, onVideoSelect}){
    return(
        <section className='next-video'>
            <h3 className='next-video__heading'>Next Video</h3>

            {videos.map(video => (
            <VideoThumbnail 
                key={video.id}
                videoImage={video.image}
                title={video.title}
                creator={video.channel}
                onClick={() => onVideoSelect(video.id)}
            />
            ))}
        </section>
    );
}

export default NextVideo;