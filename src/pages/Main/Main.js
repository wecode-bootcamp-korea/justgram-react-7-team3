import React, { useEffect, useState } from "react";
import styles from "./Main.scss";
import Feed from "./Feed/Feed";

function Main() {
  const [feedArray, setFeedArray] = useState([]);
  const [userEmail, setUserEmail] = useState([]);

  useEffect(() => {
    fetch("/data/feedsData.json")
      .then((res) => res.json())
      .then((res) => setFeedArray(res.data));
  }, []);

  useEffect(() => {
    //1. 토큰 가져오기
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      alert("유저가 아닙니다!");
      return;
    }
    fetch("http://localhost:8000/users/me", {
      method: "GET",
      headers: {
        token: token,
      },
    })
      .then((response) => response.json())
      .then((result) => setUserEmail(result.email));
  }, []);

  return (
    <div className="out-wrapper">
      {/* 헤더 */}
      <header className="header-wrapper">
        {/* 저스트그램 로고 */}
        <div className="logo-wrapper">
          <img
            className="logo-img"
            src="../../../images/logo.png"
            alt=""
            width="25px"
          />
          <div className="logo-line"></div>
          <div className="logo-text">justgram</div>
        </div>
        {/* 검색 */}
        <div className="search-wrapper">
          <input className="search-box" type="text" placeholder="검색" />
        </div>
        {/* 오른쪽 메뉴 목록 */}
        <div className="menu-wrapper">
          <img
            className="menu-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt=""
          />
          <img
            className="menu-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt=""
          />
          {/* userEmail이 있다면 이메일을 보여주고, 아니라면 아이콘을 보여줌 */}
          {userEmail ? (
            <div>{userEmail}</div>
          ) : (
            <img
              className="menu-icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt=""
            />
          )}
        </div>
      </header>
      {/* 피드 */}
      <div className="content-wrapper">
        <div className="feed-list">
          {feedArray.map((feed) => (
            <Feed
              key={feed.id}
              accountName={feed.accountName}
              likenum={feed.likenum}
              picture={feed.picture}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
