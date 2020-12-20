import React from 'react';
import './Header.css';
import SettingButton from './SettingButton';

export default function Header() {
  return (
    <>
      <header className="header">
        명언
        <SettingButton />
      </header>
    </>
  )
};