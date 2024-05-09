import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login/login-slice";
import alertSlice from "./modal/alert-slice";
import spinnerSlice from "./spinner/spinner-slice";
import confirmSlice from "./modal/confirm-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    alert: alertSlice.reducer,
    confirm: confirmSlice.reducer,
    spinner: spinnerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
