import React from 'react';
import './LabelText.scss';

function LabelText(prop) {
    return (
        <>
            <h3 className='label-text'>{prop.text}</h3>
        </>
    );
}

export default LabelText;