import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { loginThunk } from '../reducers/auth';

function Login({ loginThunk, isAuthenticated }) {

  const history = useHistory();
  const location = useLocation();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { from } = location.state || { from: {pathname: '/' } };

  useEffect(() => {
    if (isAuthenticated) {
      history.push(from.pathname);
    }
  }, [isAuthenticated, history, from.pathname]);

  const submit = async () => {
    const result = await loginThunk(form.email, form.password);
    if (!result) {
      alert('계정 정보가 일치하지 않습니다.');
      return;
    }
    history.push(from.pathname);
  }

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    })
  }

  return (
    <div>
      <h2>로그인 페이지</h2>
      <div>
        <label htmlFor="email">이메일
          <input type="text" id="email" onChange={updateField} />
        </label>
      </div>
      <div>
        <label htmlFor="password">비밀번호
          <input type="password" id="password" onChange={updateField} />
        </label>
      </div>
      <button onClick={submit}>로그인</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  loginThunk: (email, password) => dispatch(loginThunk(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);