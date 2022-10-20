import React from "react";
import styles from "./Main.scss";
import Feed from "./Feed/Feed";

function Main() {
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
          <img
            className="menu-icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt=""
          />
        </div>
      </header>
      {/* 피드 */}
      <div className="content-wrapper">
        <div className="feed-list">
          <Feed />
          <br />
          <Feed />
          <br />
          <Feed />
        </div>
      </div>
    </div>
  );
}

export default Main;
