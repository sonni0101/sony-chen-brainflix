import React from "react";
import './VideoThumbnail.scss'

function VideoThumbnail({videoImage, title, creator, onClick }){
    return(
        <section className="video-thumbnail" onClick={onClick}>
            <div className="video-thumbnail__wrapper">
                <img src={videoImage} alt={title} className="video-thumbnail__image" />
            </div>
            <div className="video-thumbnail__detail">
                <h3 className="video-thumbnail__heading">{title}</h3>
                <p className="video-thumbnail__name">{creator}</p>
            </div>
        </section>
    );
}

export default VideoThumbnail;