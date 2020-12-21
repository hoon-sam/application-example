import React from 'react';
import { Router, Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
        <Link to="/">홈</Link>
        <Link to="/record">기록</Link>
        <Link to="/chat">채팅</Link>
        <Link to="/etc">더보기</Link>
    </footer>
  )
}