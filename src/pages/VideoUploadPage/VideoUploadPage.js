import React, { useState, useRef } from "react";
import './VideoUploadPage.scss';
import Header from "../../components/Header/Header";
import Image from "../../components/Image/Image";
import LabelText from "../../components/LabelText/LabelText";
import Textarea from "../../components/Textarea/Textarea";
import InputField from "../../components/InputField/InputField";
import ImagePreview from '../../assets/images/Upload-video-preview.jpg';
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import ButtonIcon from '../../assets/icons/publish.svg';


function VideoUploadPage(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const formRef = useRef();
    
    const handleFormSubmit = (event) =>{
        event.preventDefault();

        if (title && description){
            alert("Video upload succesfully");
        }
    };

    return(
        <main>
            <Header dividerOption="divider-bottom" />
            <section className="upload-video">
                <form className="upload-video__section-container" ref={formRef} onSubmit={handleFormSubmit}>
                    <div className="upload-video__header"><h1>Upload Video</h1></div>

                    <div className="upload-video__section-wrapper">
                        <div className="upload-video__section-wrapper-left">
                            <LabelText text="video thumbnail" />
                            <Image imageSrc={ImagePreview} altText={"Video upload preview image"} />
                        </div>

                        <div className="upload-video__section-wrapper-right">
                            <InputField 
                            label="Title your video" 
                            text="Add a video to your title" 
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            
                            />

                            <Textarea 
                            label="Add a video description" 
                            text="Add a description to your title" 
                            textareaHeight="upload-video__section-wrapper-right--textarea" 
                            value={description}
                            onChange={(event) => setDescription(event.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="upload-video__section-wrapper-buttons">
                        <SecondaryButton 
                        text="Cancel" 
                        iconOption="upload-video__secondary-button--icon-none" 
                        type="cancel" 
                        isLink={false}
                        bntId={"cancel"}
                        />

                        <PrimaryButton 
                        text="Publish" 
                        icon={ButtonIcon} 
                        type="submit" 
                        isLink={false}
                        bntId={"submit"}
                        />
                    </div>
                </form>
            </section>
        </main>
    );
}

export default VideoUploadPage;

