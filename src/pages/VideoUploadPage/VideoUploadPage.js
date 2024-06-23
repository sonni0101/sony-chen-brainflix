import React from "react";
import './VideoUploadPage.scss';
import Header from "../../components/Header/Header";
import Divider from "../../components/Divider/Divider";
import Image from "../../components/Image/Image";

function VideoUploadPage(){
    return(
        <main>
            <Header />
            <Divider />
            <section className="upload-video">
                <div className="upload-video__section-container">
                    <div className="upload-video__header"><h1>Upload Video</h1></div>
                </div>

                <div className="upload-video__section-wrapper">
                    <div className="upload-video__section-wrapper-left">
                    
                    </div>

                    <div className="upload-video__section-wrapper-right">

                    </div>
                </div>
            </section>
        </main>
    );
}

export default VideoUploadPage;

