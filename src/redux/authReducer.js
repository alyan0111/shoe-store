import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SIGNUP_ERROR, SIGNUP_SUCCESS } from "./actionTypes";

const initialState = {
  user: null,
  email: null,
  password: null,
  loading: false,
  error: null
};
    
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload.user,
          email: action.payload.email,
          password: action.payload.password,
          error: null
        };
      case SIGNUP_ERROR:
      case LOGIN_ERROR:
        return {
          ...state,
          loading:false,
          error: action.payload,
        };
        case LOGOUT:
        return{
          ...initialState
        };
      default:
        return state;
    }
  };
    
  export default authReducer;
  