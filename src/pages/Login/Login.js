import React, { useState } from "react";
import styles from "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const [idValue, setIdValue] = useState();
  const [pwValue, setPwValue] = useState();
  const [isDisabled, setIsDisabled] = useState(false);
  const navigate = useNavigate();

  const handleIdInput = function (e) {
    setIdValue(e.target.value);
    idValue.includes("@") && pwValue.length >= 5
      ? setIsDisabled(true)
      : setIsDisabled(false);
  };

  const handlePwInput = function (e) {
    setPwValue(e.target.value);
    idValue.includes("@") && pwValue.length >= 5
      ? setIsDisabled(true)
      : setIsDisabled(false);
  };

  //로그인 버튼을 눌렀을 시 메인으로 이동
  const goToMain = () => {
    return navigate("/main");
  };

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
              onChange={handleIdInput}
            />
            {/* 비밀번호 입력창 */}
            <input
              className="login-input"
              id="login-passwd-input"
              type="password"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
            {/* 로그인 버튼 */}
            <div className="login-btn-wrapper">
              <input
                id="login-btn"
                type="button"
                value="로그인"
                onClick={goToMain}
                style={{
                  backgroundColor: isDisabled ? "#0095f6" : "#b2dffc",
                }}
              />
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
