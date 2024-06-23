import React from "react";
import PropTypes from 'prop-types';
import './VideoThumbnail.scss';
import Image from "../Image/Image";

function VideoThumbnail({ videoImage, title, creator, onClick }) {
    return (
        <section className="video-thumbnail" onClick={onClick}>
            <div className="video-thumbnail__wrapper">
                <Image imageSrc={videoImage} altText={title} />
            </div>
            <div className="video-thumbnail__detail">
                <h3 className="video-thumbnail__heading">{title}</h3>
                <p className="video-thumbnail__name">{creator}</p>
            </div>
        </section>
    );
}

export default VideoThumbnail;