import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  isLogin: false,
  userEmail: null,
  userName: null,
  adminJwt: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.userEmail = action.payload.userEmail;
      state.userName = action.payload.userName;
      state.adminJwt = action.payload.adminJwt;
      localStorage.setItem("isLogin", "Y");
      localStorage.setItem("userEmail", action.payload.userEmail);
      localStorage.setItem("userName", action.payload.userName);
      localStorage.setItem("adminJwt", action.payload.adminJwt);
      // console.log("login action setToken()");
    },
    logout: (state) => {
      state.isLogin = false;
      state.userEmail = initialLoginState.userEmail;
      state.userName = initialLoginState.userName;
      state.adminJwt = initialLoginState.adminJwt;

      localStorage.removeItem("isLogin");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      localStorage.removeItem("adminJwt");
      // console.log("logout action removeToken()");
    },
  },
});

export const loginAction = loginSlice.actions;

export default loginSlice;
