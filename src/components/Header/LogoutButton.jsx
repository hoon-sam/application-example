import React from 'react';
import './LogoutButton.css';

export default function LogoutButton({ logout }) {

  const handleClick = () => {
    logout();
  }

  return (
    <button className="logout-button" onClick={handleClick}>로그아웃</button>
  );
}



