import React from 'react';
import './LoginButton.css';
import { useHistory } from 'react-router-dom';

export default function LoginButton() {

  const history = useHistory();

  const handleClick = () => {
    history.push('/login');
  }

  return (
    <button className="login-button" onClick={handleClick}>로그인</button>
  );
}



