import React, { useState, useEffect, useRef } from "react";
import { Comment } from "../Comment";

export const Feed = (props) => {
  const [btnDisable, setDisable] = useState(true);
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArr] = useState([]);
  const [id, setId] = useState(1);
  const commentValue = useRef();

  useEffect(() => {
    comment.length > 0 ? setDisable(false) : setDisable(true);
  }, [comment]);

  const addComment = (e) => {
    setId((prev) => prev + 1);
    const newComment = {
      id: id,
      content: commentValue.current.value,
    };
    setCommentArr([...commentArray, newComment]);
    commentValue.current.value = "";
  };

  const deleteComment = (commentId) => {
    const newArr = commentArray.filter((comment) => comment.id !== commentId);
    setCommentArr(newArr);
  };
  
  return (
    <div className="feed">
      <div className="f-header">
        <img className="profile" alt="profile" src={props.profileImage} />
        <span>&nbsp;{props.writer}</span>
        <img alt="dot" className="dot" src="/images/dots.png" />
      </div>
      <div className="f-pic">
        <img alt="feed1" src={props.ImageURl} width="470px" height="470px" />
      </div>
      <div className="f-menu">
        <img className="i-heart like" alt="heart" src="/images/heart.png" />
        <img className="i-comment" alt="comment" src="/images/chat.png" />
        <img className="i-send" alt="send" src="/images/send.png" />
        <img className="i-bookmark" alt="bookMark" src="/images/bookmark.png" />
      </div>
      <div className="f-like">
        <img className="c-profile" src="/images/jaemin.jpg" />
        <span>
          <b>na.jaemin0813</b>님 <b>여러 명</b>이 좋아합니다.
        </span>
      </div>
      <div className="f-comment">
        <span>
          <b>{props.writer}</b>
          {props.feedContent}
        </span>
        <div className="f-numOfcomment"></div>

        <div className="comment">
          {commentArray.map((comment) => (
            <Comment
            key={comment.id}
              writer={props.writer}
              comment={comment}
              onDelete={() => deleteComment(comment.id)}
            />
          ))}
        </div>
        <p>9시간 전</p>
      </div>
      <div className="f-write">
        <img className="emoji" src="/images/emoji.png" />
        <input
          ref={commentValue}
          onChange={(e) => setComment(e.target.value)}
          className="write"
          type="text"
          placeholder="댓글달기..."
        />
        <button
          type="button"
          onClick={addComment}
          className="c-submit"
          disabled={btnDisable}
        >
          게시
        </button>
      </div>
    </div>
  );
};
