import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: false,
  message: "",
};

export const notifySlice = createSlice({
  name: "notify",
  initialState,
  reducers: {
    showNotification: (_, action) => ({
      show: true,
      message: action?.payload?.message,
    }),
    hideNotification: (_, __) => initialState,
  },
});

export const { showNotification, hideNotification } = notifySlice.actions;

export default notifySlice.reducer;
