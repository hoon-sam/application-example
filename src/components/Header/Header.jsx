import React, { useEffect } from 'react';
import './Header.css';
import SettingButton from './SettingButton';
import LoginButton from './LoginButton';
import { loginSuccess, logout } from "../../reducers/auth";
import { connect } from "react-redux";
import LogoutButton from "./LogoutButton";

function Header({ loginSuccess, logout, isAuthenticated }) {
  useEffect(() => {
  }, [isAuthenticated]);

  const renderButton = () => {
    return isAuthenticated ?
      (<>
          <SettingButton />
          <LogoutButton logout={logout} />
        </>) :
      (<LoginButton loginSuccess={loginSuccess} />)
  }

  return (
    <header className="header">
      명언
      { renderButton() }
    </header>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: () => dispatch(loginSuccess()),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);