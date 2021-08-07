import * as AT from "./authTypes";
import axios from "axios";

export const authenticateUser = (username, password) => {
  const credentials = {
    username: username,
    password: password,
  };
  return (dispatch) => {
    dispatch({
      type: AT.LOGIN_REQUEST,
    });
    axios.post("http://localhost:5000/api/authenticate", credentials)
      .then((response) => {
        let token = 'Bearer '+response.data.token;
        console.log(token);
        console.log(credentials);
        console.log(response.data.username);
        localStorage.setItem("jwtToken", token);
        dispatch(success({  isLoggedIn: true }));
      })
      .catch((error) => {
        console.log('error'+error);
        dispatch(failure());
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({
      type: AT.LOGOUT_REQUEST,
    });
    localStorage.removeItem("jwtToken");
    dispatch(success(false));
  };
};

const success = (isLoggedIn) => {
  return {
    type: AT.SUCCESS,
    payload: isLoggedIn,
  };
};

const failure = () => {
  return {
    type: AT.FAILURE,
    payload: false,
  };
};
