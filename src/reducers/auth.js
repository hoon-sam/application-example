// const LOGIN_REQUEST = 'auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';
const LOGOUT = 'auth/LOGOUT';

// export const loginRequest = () => ({
//   type: LOGIN_REQUEST,
// });

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
});

export const logout = () => ({
  type: LOGOUT,
});

const initialState = {
  isAuthenticated: false,
  userSummary: {
    email: 'default@co.kr',
  },
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE: case LOGOUT:
      return {
        isAuthenticated: false,
        userSummary: {
          email: 'default@co.kr',
        },
      }
    default:
      return state;
  }
}