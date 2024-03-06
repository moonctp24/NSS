import { createSlice } from "@reduxjs/toolkit";

const initialAlertState = {
  isOpen: false,
  title: "알림",
  cont: null,
  width: "520", // 900, 700, 520, 320
  callback: null,
};

const alertSlice = createSlice({
  name: "alert",
  initialState: initialAlertState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title || initialAlertState.title;
      state.cont = action.payload.cont;
      state.width = action.payload.width || initialAlertState.width;
      state.callback = action.payload.callback || initialAlertState.callback;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = initialAlertState.title;
      state.cont = initialAlertState.cont;
      state.width = initialAlertState.width;
      state.callback = initialAlertState.callback;
    },
  },
});

export const alertAction = alertSlice.actions;

export default alertSlice;
