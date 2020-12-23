import * as api from '../api'

const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const LOGOUT = 'auth/LOGOUT';

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (userInfo) => ({
  type: LOGIN_SUCCESS,
  payload: {
    userInfo
  },
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

export const loginThunk = (email, password) => (dispatch) => {
  dispatch(loginRequest());
  return api.login(email, password)
    .then((res) => {
      if (res.status === 200) {
        return Promise.resolve(res.json());
      }
      return Promise.reject(res);
    }).then((data) => {
      dispatch(loginSuccess(data));
      return true;
    }).catch((err) => {
      console.log(err.statusText);
      dispatch(loginFailure());
      return false;
    });
}

const initialState = {
  isAuthenticated: false,
  userSummary: {
    email: '',
    username: '',
  },
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE: case LOGOUT:
      return {
        isAuthenticated: false,
        userSummary: {
          email: '',
          username: '',
        },
      }
    default:
      return state;
  }
}