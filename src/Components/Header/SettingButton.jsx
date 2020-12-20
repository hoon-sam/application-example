import React from 'react';
import './SettingButton.css';
import SettingImg from '../../Img/setting.svg';

export default function SettingButton() {
  return (
    <button className="setting-button">
      <img src={SettingImg} className="setting-img" alt=""/>
    </button>
  )
};