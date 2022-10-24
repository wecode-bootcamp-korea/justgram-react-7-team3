import React from "react";
import styles from "./Comment.scss";

function Comment({ content, writer }) {
  return (
    <div className="feed-comment-card">
      <span className="highlight">{writer}</span>
      <span>{content}</span>
    </div>
  );
}

export default Comment;
