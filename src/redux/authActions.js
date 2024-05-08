import axios from 'axios';
import { saveState } from './localStorage';
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from './actionTypes';

export const signup = ({username,email,password}) => {
  return async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw = JSON.stringify({
      username: username,
      email: email,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    fetch("http://localhost:8080/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
};

export const login = (email,password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:8080/login", {email,password});
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      saveState({ auth: response.data}); 
    } catch (error) {
      dispatch({ type: LOGIN_ERROR, payload: error.response.data.error });
      throw error;
    }
  };
};

export const logout = () => {
    return async (dispatch) => {
        try{
            dispatch ({type: LOGOUT});
        }
        catch(error){
            console.log('logout failed', error);
            throw error;
        }
    };
};
