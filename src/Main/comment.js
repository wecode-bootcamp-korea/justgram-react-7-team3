function Comment(props) {
  return (
    <div className="pidComment">
      <div className="pidComment_like">
        <span>좋아요를 누른 사람이 없습니다</span>
      </div>
      <div className="pidComment_host">
        <span>
          <b>jung_hyen</b> 벌써 할로윈
        </span>
        <span>...더 보기</span>
      </div>
      <div className="pidComment_visit">
        <span>
          <b>yopi27</b> 할로윈의 기원을 아시나요
        </span>
        {/* 중괄호를 통해 JSX에서 js코드 실행 */}
        {
          props.commentArray.map((comment) => {
            // js코드 영역 시작
            // 고차함수를 통해 commentArray의 객체 요소의 개수만큼 콜백을 실행
            return (
              // 컴포넌트 리턴 영역에서 요소를 반환할 때,
              // 불필요한 랜더링을 줄이기 위해서 key값을 사용하는 것이 좋다

              <p className="commentP" key={comment.id}>
                <span className="writer">yopi27 </span>
                <span className="content">{comment.content}</span>
              </p>
            );
          }) // js코드 영역 종료
        }
      </div>
      <div className="pidComment_time">
        <span>42분 전</span>
      </div>
      <form className="pidComment_input" action="">
        <input
          className="pidComment_input_input"
          placeholder="   댓글 달기..."
          type="text"
          ref={props.value} // input을 ref와 참조시켜서 실시간 값을 저장
        />
        <button
          type="button"
          onClick={props.addComment} // 클릭 시 addComment함수 실행
          className="pidComment_input_button"
        >
          게시
        </button>
      </form>
    </div>
  );
}

export default Comment;
