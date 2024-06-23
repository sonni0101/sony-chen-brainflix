import React from 'react';
import PropTypes from 'prop-types';
import './NextVideo.scss';
import VideoThumbnail from '../VideoThumbnail/VideoThumbnail';
import LabelText from '../LabelText/LabelText';

function NextVideo({ videos, onVideoSelect }) {
    return (
        <section className='next-video'>
            <LabelText text="Next video" />
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