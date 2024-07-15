import React from "react";
import './VideoDetails.scss';
import viewsIcon from '../../assets/icons/views.svg';
import likesIcon from '../../assets/icons/likes.svg';
import InlineIconText from "../InlineIconText/InlineIconText";

function VideoDetails ({title, creator, uploadDate, views, likes, description }){
    return(
        <section className="video-detail">
            <div className="video-detail__wrapper">
                <h1>{title}</h1>

                <div className="video-detail__info-group">
                    <div className="video-detail__left-panel">
                        <h3 className="video-detail__left-panel--name">{creator}</h3>
                        <p className="video-detail__left-panel--date">{uploadDate}</p>
                    </div>

                    <div className="video-detail__right-panel">
                        <InlineIconText icon={viewsIcon} text={views} alt="View icon"  />
                        <InlineIconText icon={likesIcon} text={likes} alt="Like icon"  />
                    </div>
                </div>
            </div>

            <p className="video-detail__description">{description}</p>

        </section>
    );
}

export default VideoDetails;