import React, { useState, useEffect, useRef } from 'react';
import './Main.scss';
function Main() {

  const [btnDisable, setDisable] = useState(true);
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArr] = useState([])
  const [id, setId] = useState(1);
  const commentValue=useRef();

  
  useEffect(()=>{
    const baseComment = {
      id: id,
      content:"나도 갈래"
    }
    setCommentArr([baseComment]);
  },[]);

  useEffect(() => {
    comment.length > 0 ? setDisable(false) : setDisable(true);
  }, [comment]);

  const addComment = (e) => {
    setId((prev)=>
      prev+1
    );
    const newComment = {
      id: id,
      content:commentValue.current.value
    }
    setCommentArr([...commentArray,newComment]);
    commentValue.current.value="";
  }

  const deleteComment=(commentId)=>{
    const newArr=commentArray.filter((comment)=>comment.id!==commentId);
    setCommentArr(newArr);
    
  }

  return (
    <>
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

      <div className="feed">
        <div className="f-header">
          <img className="profile" alt="profile" src="/images/jiwonProfile.jpg" />
          <span>&nbsp;nxwijixhc</span>
          <img alt="dot" className="dot" src="/images/dots.png" />
        </div>
        <div className="f-pic">
          <img alt="feed1" src="/images/feed1.jpg" width="470px" height="470px" />
        </div>
        <div className="f-menu">
          <img className="i-heart like" alt="heart" src="/images/heart.png" />
          <img className="i-comment" src="/images/chat.png" />
          <img className="i-send" src="/images/send.png" />
          <img className="i-bookmark" src="/images/bookmark.png" />
        </div>
        <div className="f-like">
          <img className="c-profile" src="/images/jaemin.jpg" />
          <span><b>na.jaemin0813</b>님 <b>여러 명</b>이 좋아합니다.</span>
        </div>
        <div className="f-comment">
          <span><b>nxwijixhc </b>에글링턴 나들이</span>
          <div className="f-numOfcomment"></div>

          <div className="comment">
            {commentArray.map((comment)=>(
             
                 <div className="oneComment" key={comment.id}>
                 <span><b>haechanahceah </b>{comment.content}</span>
                 <img
                   alt="heart"
                   className="c-icon c-heart like"
                   src="images/heart.png"
                 />
                 <img alt="delete" onClick={()=>deleteComment(comment.id)} className="c-icon c-delete" src="images/delete.png" />              
               </div>
            )
          )}
          </div>
          <p>9시간 전</p>
        </div>
        <div className="f-write">
          <img className="emoji" src="/images/emoji.png" />
         
          <input ref={commentValue} onChange={(e) => setComment(e.target.value)} className="write" type="text" placeholder="댓글달기..." />
          <button type="button" onClick={addComment} className="c-submit" disabled={btnDisable}>게시</button>
        
        </div>
      </div>

      <div className="feed">
        <div className="f-header">
          <img className="profile" alt="profile" src="/images/jiwonProfile.jpg" />
          <span>&nbsp;nxwijixhc</span>
          <img alt="dot" className="dot" src="/images/dots.png" />
        </div>
        <div className="f-pic">
          <img alt="feed1" src="/images/feed2.jpg" width="470px" height="470px" />
        </div>
        <div className="f-menu">
          <img className="i-heart" alt="heart" src="images/heart.png" />
          <img className="i-comment" src="/images/chat.png" />
          <img className="i-send" src="/images/send.png" />
          <img className="i-bookmark" src="/images/bookmark.png" />
        </div>
        <div className="f-like">
          <img className="c-profile" src="/images/haechan.jpg" />
          <span><b>haechanahceah</b>님 <b>여러 명</b>이 좋아합니다.</span>
        </div>
        <div className="f-comment">
          <span><b>nxwijixhc </b>에글링턴 나들이</span>
          <div className="f-numOfcomment"></div>
          <div className="comment">
            <div className="oneComment">
              <span><b>na.jaemin0813 </b>거리가 넘 이쁘잔어</span>
              <img
                alt="heart"
                className="c-icon c-heart like"
                src="/images/heart.png"
              />
              <img alt="delete" className="c-icon c-delete" src="/images/delete.png" />
            </div>

            <div className="oneComment">
              <span><b>yellow_3to3 </b>같이 가자</span>
              <img
                alt="heart"
                className="c-icon c-heart like"
                src="/images/heart.png"
              />
              <img alt="delete" className="c-icon c-delete" src="/images/delete.png" />
            </div>
          </div>
          <p>9시간 전</p>
        </div>
        <div className="f-write">
          <img className="emoji" src="/images/emoji.png" />
          <input onChange={(e) => setComment(e.target.value)} className="write" type="text" placeholder="댓글달기..." />
          <button type="button" className="c-submit" disabled={btnDisable}>게시</button>
        </div>
      </div>

      <div className="feed">
        <div className="f-header">
          <img className="profile" alt="profile" src="/images/jiwonProfile.jpg" />
          <span>&nbsp;nxwijixhc</span>
          <img alt="dot" className="dot" src="/images/dots.png" />
        </div>
        <div className="f-pic">
          <img alt="feed1" src="/images/feed3.jpg" width="470px" height="470px" />
        </div>
        <div className="f-menu">
          <img className="i-heart" alt="heart" src="/images/heart.png" />
          <img className="i-comment" src="/images/chat.png" />
          <img className="i-send" src="/images/send.png" />
          <img className="i-bookmark" src="/images/bookmark.png" />
        </div>
        <div className="f-like">
          <img className="c-profile" src="/images/runjun.jpg" />
          <span><b>yellow_3to3</b>님 <b>여러 명</b>이 좋아합니다.</span>
        </div>
        <div className="f-comment">
          <span><b>nxwijixhc </b>에글링턴 나들이</span>
          <div className="f-numOfcomment"></div>
          <div className="comment">
            <div className="oneComment">
              <span><b>haechanahceah </b>나도 갈래</span>
              <img
                alt="heart"
                className="c-icon c-heart like"
                src="/images/heart.png"
              />
              <img alt="delete" className="c-icon c-delete" src="/images/delete.png" />
            </div>

          </div>
          <p>9시간 전</p>
        </div>
        <div className="f-write">
          <img className="emoji" src="/images/emoji.png" />
          <input onChange={(e) => e.target.value} className="write" type="text" placeholder="댓글달기..." />
          <button type="button" className="c-submit" disabled={btnDisable}>게시</button>
        </div>
      </div>

    </>
  );
}

export default Main;

