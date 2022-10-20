import React from 'react';

export const Header=()=>{
return(
    <header>
        <div className="bar">
          <div className="logo">
            <span>Instagram</span>
          </div>
          <div className="search">
            <i id="glass" className="fa-solid fa-magnifying-glass"></i>
            <input className="s_input" type="search" placeholder="검색" />
          </div>
          <div className="icons">
            <img
              className="icon"
              id="compass"
              alt="compass"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            />
            <img
              className="icon"
              id="heart"
              alt="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            />
            <img
              className="icon"
              id="user"
              alt="user"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            />
          </div>
        </div>
      </header>

);

};