import { createSlice } from "@reduxjs/toolkit";

const initialConfirmState = {
  isOpen: false,
  title: "알림",
  cont: null,
  callback: null,
  data: null,
  isChange: false,
  width: "520", // 900, 700, 520, 320
  cntOpt: null,
  btnOpt: null,
  type: "confirm",
};

const confirmSlice = createSlice({
  name: "confirm",
  initialState: initialConfirmState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.title = action.payload.title || initialConfirmState.title;
      state.cont = action.payload.cont;
      state.callback = action.payload.callback;
      state.data = action.payload.data;
      state.width = action.payload.width || initialConfirmState.width;
      state.cntOpt = action.payload.cntOpt || initialConfirmState.cntOpt;
      state.btnOpt = action.payload.btnOpt || initialConfirmState.btnOpt;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = initialConfirmState.title;
      state.cont = initialConfirmState.cont;
      state.callback = initialConfirmState.callback;
      state.data = initialConfirmState.data;
      state.isChange = initialConfirmState.isChange;
      state.width = initialConfirmState.width;
      state.cntOpt = initialConfirmState.cntOpt;
      state.btnOpt = initialConfirmState.btnOpt;
    },
    setData: (state, action) => {
      if (!!state.data) {
        state.isChange = true;
      }
      state.data = action.payload.data;
    },
  },
});

export const confirmAction = confirmSlice.actions;

export default confirmSlice;
