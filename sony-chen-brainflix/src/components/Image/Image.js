import React from 'react';
import './Image.scss';

function Image({ imageSrc, altText, aspectRatio = '16/9' }) {
    const aspectRatiostyle = {
        aspectRatio: aspectRatio,
    };

    return (
        <div style={aspectRatiostyle} className="image">
            <img src={imageSrc} alt={altText} className="image__inner" />
        </div>
    );
}

export default Image;