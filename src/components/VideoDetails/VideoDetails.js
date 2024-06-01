import React from "react";
import './VideoDetails.scss';
import views from '../../assets/icons/views.svg';
import likes from '../../assets/icons/likes.svg';
import InlineIconText from "../InlineIconText/InlineIconText";

function VideoDetails (){
    return(
        <section className="video-detail">
            <h1>The Future of Artificial Intelligence</h1>

            <div className="video-detail__info-group">
                <div className="video-detail__left-panel">
                    <p className="video-detail__left-panel--name">By Aiden Thompson</p>
                    <p className="video-detail__left-panel--date">8/8/2023</p>
                </div>

                <div className="video-detail__right-panel">
                    <InlineIconText icon={views} text="980,545" alt="View icon"  />
                    <InlineIconText icon={likes} text="22,479" alt="Like icon"  />
                </div>
            </div>

            <p className="video-detail__description">
                Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.
            </p>

        </section>
    );
}

export default VideoDetails;