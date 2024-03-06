import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  isLogin: false,
  userEmail: null,
  userNickname: null,
  userRole: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.userEmail = action.payload.userEmail;
      state.userNickname = action.payload.userNickname;
      state.userRole = action.payload.userRole;
      localStorage.setItem("isLogin", "Y");
      localStorage.setItem("userEmail", action.payload.userEmail);
      localStorage.setItem("userNickname", action.payload.userNickname);
      localStorage.setItem("userRole", action.payload.userRole);
      // console.log("login action setToken()");
    },
    logout: (state) => {
      state.isLogin = false;
      state.userEmail = initialLoginState.userEmail;
      state.userNickname = initialLoginState.userNickname;
      state.userRole = initialLoginState.userRole;

      localStorage.removeItem("isLogin");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userNickname");
      localStorage.removeItem("userRole");
      // console.log("logout action removeToken()");
    },
  },
});

export const loginAction = loginSlice.actions;

export default loginSlice;
