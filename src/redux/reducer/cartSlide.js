import { getCartItemQuantity } from "@/services/cartService";
import StatusCodes from "@/utils/status/StatusCodes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCartItemsQuantity = createAsyncThunk(
  "cart/fetchCartItemsQuantity",
  async (userID) => {
    const res = await getCartItemQuantity(userID);

    if (res && res.EC === StatusCodes.SUCCESS) {
      return res.DT?.quantity;
    }

    return 0;
  },
);

const initialState = {
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItemsQuantity: (state, action) => {
      state.quantity = action.payload?.quantity;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartItemsQuantity.fulfilled, (state, action) => {
      state.quantity = action?.payload;
    });
  },
});

export const { setCartItemsQuantity } = cartSlice.actions;

export default cartSlice.reducer;
