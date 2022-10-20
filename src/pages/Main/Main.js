import React from "react";
import styles from "./Main.scss";

function Main() {
  //댓글 개수 관리 state
  const [commentArray, setCommentArray] = useState([]);

  //댓글을 상태관리
  const [id, setId] = useState(1);
  const value = useRef();

  //댓글을 추가하는 함수
  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id: id,
      content: value.current.value,
    };
    test;

    setCommentArray([...commentArray, newComment]);
  };

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
                <div>hyeseonii</div>
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
              <img
                className="feed-img"
                src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
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
                  <b>eundining</b>님&nbsp;<b>외 5명</b>이 좋아합니다.
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
                  {commentArray.map((comment) => {
                    return (
                      <div className="feed-comment-card" key={comment.id}>
                        <span className="highlight">cannon_mj</span>
                        <span>{comment.content}</span>
                      </div>
                    );
                  })}
                  <span className="time">42분 전</span>
                </div>
              </div>
              <div className="feed-comment-input-wrapper">
                <input
                  className="feed-comment-input"
                  placeholder="댓글 달기..."
                  ref={value}
                />
                <button
                  className="feed-comment-input-button"
                  onClick={addComment}
                >
                  게시
                </button>
              </div>
            </div>
          </div>
          <div className="feed-card">
            {/* 2피드헤더 */}
            <div className="feed-header-wrapper">
              <div className="feed-header-left">
                {/* 계정 이미지 */}
                <img
                  className="feed-header-account-img"
                  src="https://ca.slack-edge.com/TH0U6FBTN-U04146BRK4Y-76a177a20261-512"
                />
                {/* 계정명 */}
                <div>hyeseonii</div>
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
              <img
                className="feed-img"
                src="https://images.unsplash.com/photo-1534229317157-f846a08d8b73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                alt=""
              />
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
                  <b>eundining</b>님&nbsp;<b>외 5명</b>이 좋아합니다.
                </div>
              </div>
            </div>
            <div className="feed-comment-wrapper">
              <div className="feed-comment-list">
                <div className="feed-comment-card">
                  <span className="highlight">cannon_mj</span>
                  <span>아름다운 별...</span>
                </div>
                <div className="feed-comment-card">
                  <span className="highlight">nesecious</span>
                  <span>반짝반짝</span>
                  <br />
                  {commentArray.map((comment) => {
                    return (
                      <div className="feed-comment-card" key={comment.id}>
                        <span className="highlight">cannon_mj</span>
                        <span>{comment.content}</span>
                      </div>
                    );
                  })}
                  <span className="time">30분 전</span>
                </div>
              </div>
              <div className="feed-comment-input-wrapper">
                <input
                  className="feed-comment-input"
                  placeholder="댓글 달기..."
                  ref={value}
                />
                <button
                  className="feed-comment-input-button"
                  onClick={addComment}
                >
                  게시
                </button>
              </div>
            </div>
          </div>
          <div className="feed-card">
            {/* 3피드헤더 */}
            <div className="feed-header-wrapper">
              <div className="feed-header-left">
                {/* 계정 이미지 */}
                <img
                  className="feed-header-account-img"
                  src="https://ca.slack-edge.com/TH0U6FBTN-U04146BRK4Y-76a177a20261-512"
                />
                {/* 계정명 */}
                <div>hyeseonii</div>
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
              <img
                className="feed-img"
                src="https://images.unsplash.com/photo-1539321908154-04927596764d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                alt=""
              />
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
                  <b>eundining</b>님&nbsp;<b>외 5명</b>이 좋아합니다.
                </div>
              </div>
            </div>
            <div className="feed-comment-wrapper">
              <div className="feed-comment-list">
                <div className="feed-comment-card">
                  <span className="highlight">cannon_mj</span>
                  <span>아름다운 은하수...</span>
                </div>
                <div className="feed-comment-card">
                  <span className="highlight">nesecious</span>
                  <span>반짝반짝</span>
                  <br />
                  {commentArray.map((comment) => {
                    return (
                      <div className="feed-comment-card" key={comment.id}>
                        <span className="highlight">cannon_mj</span>
                        <span>{comment.content}</span>
                      </div>
                    );
                  })}
                  <span className="time">42분 전</span>
                </div>
              </div>
              <div className="feed-comment-input-wrapper">
                <input
                  className="feed-comment-input"
                  placeholder="댓글 달기..."
                  ref={value}
                />
                <button
                  className="feed-comment-input-button"
                  onClick={addComment}
                  게시
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
