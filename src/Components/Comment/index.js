import React from 'react';

export const Comment=(props)=>{
    return(
        <div className="oneComment">
        <span><b>{props.writer} </b>{props.comment.content}</span>
        <img
          alt="heart"
          className="c-icon c-heart like"
          src="images/heart.png"
        />
        <img alt="delete" onClick={props.onDelete} className="c-icon c-delete" src="images/delete.png" />              
      </div>
    );
}