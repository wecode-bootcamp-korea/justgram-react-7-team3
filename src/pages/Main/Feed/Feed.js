import React, { useEffect, useState } from "react";
import styles from "./Feed.scss";
import Comment from "./../Comment/Comment";

function Feed({ accountName, likenum, picture }) {
  //댓글 개수 관리 state
  const [commentArray, setCommentArray] = useState([]);

  useEffect(() => {
    fetch("/data/commentsData.json")
      .then((res) => res.json())
      .then((res) => setCommentArray(res.data));
  }, []);

  return (
    <div className="feed-card">
      {/* 피드헤더 */}
      <div className="feed-header-wrapper">
        <div className="feed-header-left">
          {/* 계정 이미지 */}
          <img
            className="feed-header-account-img"
            src="https://ca.slack-edge.com/TH0U6FBTN-U04146BRK4Y-76a177a20261-512"
          />
          {/* 계정명 */}
          <div>{accountName}</div>
        </div>
        <div className="feed-header-right">
          {/* 메뉴바 */}
          <img
            className="feed-header-menubar"
            src="../../../images/option.png"
            alt=""
          />
        </div>
      </div>
      {/* 피드 내용 */}
      <div className="feed-img-wrapper">
        {/* 피드 이미지 */}
        <img className="feed-img" src={picture} alt="" />
      </div>
      <div className="feed-content-wrapper">
        {/* 메뉴바 */}
        <div className="feed-menubar-wrapper">
          <div className="feed-menubar-left">
            <div>
              <img
                className="menubar-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="menubar-icon"
                src="../../../images/chat.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="menubar-icon"
                src="../../../images/upload.png"
                alt=""
              />
            </div>
          </div>
          <div className="feed-menubar-right">
            <img
              className="menubar-icon"
              src="../../../images/bookmark.png"
              alt=""
            />
          </div>
        </div>
        <div className="feed-like-wrapper">
          <img
            className="feed-like-account-img"
            src="https://ca.slack-edge.com/TH0U6FBTN-U04146BRK4Y-76a177a20261-512"
            alt=""
          />
          <div className="like-num">
            <b>eundining</b>님&nbsp;<b>외 {likenum}명</b>이 좋아합니다.
          </div>
        </div>
      </div>
      <div className="feed-comment-wrapper">
        <div className="feed-comment-list">
          <div className="feed-comment-card">
            <span className="highlight">cannon_mj</span>
            <span>아름다운 달...</span>
          </div>
          <div className="feed-comment-card">
            <span className="highlight">nesecious</span>
            <span>반짝반짝</span>
            <br />
          </div>
          {commentArray.map((comment) => {
            return (
              <Comment
                key={comment.id}
                content={comment.content}
                writer={comment.writer}
              />
            );
          })}
          <span className="time">42분 전</span>
        </div>
        <div className="feed-comment-input-wrapper">
          <input className="feed-comment-input" placeholder="댓글 달기..." />
          <button className="feed-comment-input-button">게시</button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
