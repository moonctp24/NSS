import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login/login-slice";
import alertSlice from "./modal/alert-slice";
import spinnerSlice from "./spinner/spinner-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    alert: alertSlice.reducer,
    spinner: spinnerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
