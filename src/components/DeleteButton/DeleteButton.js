import React from 'react';
import './DeleteButton.scss';

function DeleteButton({onClick}){
    return (
        <button className="delete-button" onClick={onClick}>Delete</button>
    );
}

export default DeleteButton;