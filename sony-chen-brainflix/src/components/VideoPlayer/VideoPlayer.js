import React from "react";
import './VideoPlayer.scss';
import play from '../../assets/icons/play.svg';
import volume from '../../assets/icons/volume_up.svg';
import fullscreen from '../../assets/icons/fullscreen.svg';

function VideoPlayer({videoLink, duration}){
    return(
        <section className="video-player">
            <div className="video-player__section-container">
                <video className="video-player__video" poster={videoLink}></video>
                <div className="video-player__controls">
                    <div className="video-player__play">
                        <img src={play} alt="Video play icon" className="video-player__icon brainflix_icon_sm" />
                    </div>

                    <div className="video-player__scrub">
                        <div className="video-player__scrub-bar"></div>
                        <span className="video-player__scrub-time">0:00 / {duration}</span>
                    </div>

                    <div className="video-player__right-control">
                        <img src={fullscreen} alt="Fullscreen icon" className="video-player__icon brainflix_icon" />
                        <img src={volume} alt="Volume icon" className="video-player__icon brainflix_icon" />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default VideoPlayer;
