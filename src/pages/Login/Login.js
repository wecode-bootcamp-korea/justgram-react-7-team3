import './Login.scss';
import React, { useState, useEffect } from 'react';

function Login() {
  const [id, setId] = useState('');
  const [password, setPw] = useState('');
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    id.includes('@') && (password.length >= 5) ? setDisable(false) : setDisable(true);
  }, [id, password])

  
  const handleLogin = () => {
    fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((result) => localStorage.setItem("token", result.token));
  };

  return (
    <div id="box">
      <h1>Instagram</h1>
      <form>
        <input
          onChange={(e) => setId(e.target.value)}
          type="text"
          className="writeArea"
          placeholder="전화번호,사용자 이름 또는 이메일"
        />
        <br />
        <input onChange={(e) => setPw(e.target.value)} className="writeArea" type="password" placeholder="비밀번호" />
        <br />

        <button onClick={handleLogin} type="button" className="submit" disabled={disable}>
          로그인
        </button>

        <div id="errmsg"></div>
      </form>

      <p id="wrong">
        비밀번호를 잊으셨나요?
      </p>
    </div>
  );
}

export default Login;
