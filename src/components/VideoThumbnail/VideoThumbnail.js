import React from "react";
import './VideoThumbnail.scss'

function VideoThumbnail(prop){
    return(
        <div className="video-thumbnail">
            <div className="video-thumbnail__wrapper">
                <img src={prop.videoImage} alt={prop.altText} className="video-thumbnail__image" />
            </div>
            <div className="video-thumbnail__detail">
                <h3 className="video-thumbnail__heading">title</h3>
                <p className="video-thumbnail__name">Nmae</p>
            </div>
        </div>
    );
}

export default VideoThumbnail;