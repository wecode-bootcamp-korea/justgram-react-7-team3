import React from "react";
import styles from "./Comment.scss";

function Comment({ content }) {
  return (
    <div className="feed-comment-card">
      <span className="highlight">min.young</span>
      <span>{content}</span>
    </div>
  );
}

export default Comment;
