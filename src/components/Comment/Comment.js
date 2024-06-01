import React from "react";

function Comment(){
    return(
        <section className="comment">
            <div className="comment__upper-section">
                <p className="comment__name">Name</p>
                <p className="comment__time">Time</p>
            </div>
            <p className="comment__text">Comment goes here</p>
        </section>
    );
}

export default Comment;