import Comment from "./comment";
import { useState, useRef } from "react";

function Feed() {
  //댓글 개수 관리 state
  const [commentArray, setCommentArray] = useState([]); // 댓글용 배열 state 선언

  //댓글을 상태관리
  const [id, setId] = useState(1); // id state 선언
  const value = useRef(); // 댓글 input의 value를 저장

  //댓글을 추가하는 함수
  const addComment = (event) => {
    setId(id + 1); // 세터로 id값 갱신, id++와 비슷하게 동작함
    const newComment = {
      id: id,
      content: value.current.value, // ref로 가져온 입력값
    };

    setCommentArray([...commentArray, newComment]); // 배열을 풀어서 객체 요소를 추가한 뒤, 다시 배열로 만들어 저장
  };

  return (
    <>
      <section>
        <div className="pidHeader">
          <div className="pidHeader_leftBox">
            <img
              className="pidHeader_leftBox_img"
              src="/images/스크린샷 2022-10-04 오후 7.39.13.png"
              alt=""
            />
            <span className="pidHeader_leftBox_span">jung_hyen</span>
          </div>
          <div className="pidHeader_rightBox">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        <div className="pidPhoto"></div>
        <div className="pidMenubar">
          <div className="pidMenubar_leftBox">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-comment"></i>
            <i className="fa-solid fa-arrow-up"></i>
          </div>
          <div className="pidMenubar_rightBox">
            <i className="fa-regular fa-bookmark"></i>
          </div>
        </div>
        <Comment
          commentArray={commentArray}
          value={value}
          addComment={addComment}
          id={id}
        />
      </section>
    </>
  );
}

export default Feed;
