import React, { useRef, useState } from "react";
import styles from "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const id = useRef();
  const pw = useRef();

  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  // const handleIdInput = function (e) {
  //   setIdValue(e.target.value);
  //   idValue.includes("@") && pwValue.length >= 5
  //     ? setIsDisabled(true)
  //     : setIsDisabled(false);
  // };

  // const handlePwInput = function (e) {
  //   setPwValue(e.target.value);
  //   idValue.includes("@") && pwValue.length >= 5
  //     ? setIsDisabled(true)
  //     : setIsDisabled(false);
  // };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: id.current.value,
        password: pw.current.value,
      }),
    })
      .then((response) => response.json())
      .then((result) => localStorage.setItem("token", result.token));
  };

  //로그인 버튼을 눌렀을 시 메인으로 이동
  // const goToMain = () => {
  //   if (idValue.includes("@") && pwValue.length >= 5) {
  //     return navigate("/main");
  //   }
  // };

  return (
    <>
      <div className="center login-wrapper">
        {/* 저스트그램 로고 */}
        <div className="login-component">
          <h1 className="center justgram-logo">justgram</h1>
          {/* 로그인폼 */}
          <form className="login-form">
            {/* 이메일 입력창 */}
            <input
              className="login-input"
              id="login-email-input"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              // onChange={handleIdInput}
              ref={id}
            />
            {/* 비밀번호 입력창 */}
            <input
              className="login-input"
              id="login-passwd-input"
              type="password"
              placeholder="비밀번호"
              // onChange={handlePwInput}
              ref={pw}
            />
            {/* 로그인 버튼 */}
            <div className="login-btn-wrapper">
              <button id="login-btn" onClick={(e) => handleLogin(e)}>
                로그인
              </button>
            </div>
          </form>
          {/* 비밀번호찾기 링크 */}
          <div className="center find-passwd">
            <a href="">비밀번호를 잊으셨나요?</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
