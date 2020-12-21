import React from 'react';
import './LoginButton.css';

export default function LoginButton({ loginSuccess }) {

  const handleClick = () => {
    loginSuccess();
  }

  return (
    <button className="login-button" onClick={handleClick}>로그인</button>
  );
}



