import './Login.scss';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPw] = useState('');
  const [disable, setDisable] = useState(true);
  const goMain = () => {
    navigate('/main');
  }

  useEffect(() => {
    id.includes('@') && (password.length >= 5) ? setDisable(false) : setDisable(true);
  }, [id, password])

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

        <button onClick={goMain} type="button" className="submit" disabled={disable}>
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
