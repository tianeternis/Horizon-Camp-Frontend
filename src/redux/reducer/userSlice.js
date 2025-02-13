import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  account: {
    _id: "",
    fullName: "",
    email: "",
    phone: "",
    birthday: "",
    gender: "",
    avatar: "",
    role: "",
    isGoogleAuth: false,
    accessToken: "",
    refreshToken: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (_, action) => ({
      isAuth: true,
      account: {
        _id: action?.payload?._id,
        fullName: action?.payload?.fullName,
        email: action?.payload?.email,
        phone: action?.payload?.phone,
        birthday: action?.payload?.birthday,
        gender: action?.payload?.gender,
        avatar: action?.payload?.avatar,
        role: action?.payload?.role,
        isGoogleAuth: action?.payload?.isGoogleAuth,
        accessToken: action?.payload?.accessToken,
        refreshToken: action?.payload?.refreshToken,
      },
    }),
    logoutSuccess: (_, __) => initialState,
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;

export default userSlice.reducer;
