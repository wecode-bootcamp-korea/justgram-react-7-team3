import "./Login.scss";
import React, { useState, useRef } from "react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

function App() {
  // const [id, setId] = useState("");
  // const [pw, setPw] = useState("");
  const [vital, setVital] = useState(false);
  const navigate = useNavigate();
  const idValue = useRef();
  const pwValue = useRef();

  const moveMain = (event) => {
    event.preventDefault();
    if (
      idValue.current.value.includes("@") &&
      pwValue.current.value.length >= 5
    )
      navigate("/main");
  };
  const handleIdInput = function (event) {
    // setId(event.target.value);
    console.log(idValue.current.value);
    idValue.current.value.includes("@") && pwValue.current.value.length >= 5
      ? setVital(true)
      : setVital(false);
  };
  const handlePwInput = function (event) {
    // setPw(event.target.value);
    idValue.current.value.includes("@") && pwValue.current.value.length >= 5
      ? setVital(true)
      : setVital(false);
  };
  return (
    <Fragment>
      <section id="loginPage">
        <div id="headBox">
          <span>justgram</span>
        </div>
        <div id="inputBox">
          <form id="inputBoxForm">
            <input
              type="text"
              id="inputId"
              onChange={handleIdInput}
              placeholder="  전화번호, 사용자 이름 또는 이메일"
              ref={idValue}
            />
            <input
              type="password"
              id="inputPassword"
              onChange={handlePwInput}
              placeholder="  비밀번호"
              ref={pwValue}
            />
            <button
              id="loginBtn"
              style={{
                backgroundColor: vital
                  ? "rgb(30, 30, 227)"
                  : "rgba(0, 145, 255, 0.354)",
              }}
              onClick={moveMain}
            >
              로그인
            </button>
            <span id="loginFailArelt" className="hidden">
              아이디 또는 비밀번호가 옳바르지 않습니다
            </span>
          </form>
        </div>
        <div id="forgetPassword">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </section>

      {/* <Link to="/main">메인</Link>
      <Link to="/login">로그인</Link> */}
    </Fragment>
  );
}

export default App;
