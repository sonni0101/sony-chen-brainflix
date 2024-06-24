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
import { useNavigate } from "react-router-dom";

function VideoUploadPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const formRef = useRef();
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        setTitleError(!title);
        setDescriptionError(!description);

        if (title && description) {
            alert("Video uploaded successfully");
            navigate('/');
        } else {
            alert("empty");
        }
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        if (titleError){
            setTitleError(false);
        }
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        if (descriptionError){
            setDescriptionError(false);
        }
    };

    return (
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
                                text="Add a title to your video" 
                                value={title}
                                onChange={handleTitleChange}
                                formError={titleError ? "error-border" : ""}
                            />

                            <Textarea 
                                label="Add a video description" 
                                text="Add a description to your video" 
                                textareaHeight="upload-video__section-wrapper-right--textarea" 
                                value={description}
                                onChange={handleDescriptionChange}
                                formError={descriptionError ? "error-border" : ""}
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