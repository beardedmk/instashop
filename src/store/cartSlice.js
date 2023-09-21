import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { cartItems: [], totalPrice: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.cartItem.id === action.payload.cartItem.id
      );
      state.totalPrice += action.payload.cartItem.price;
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const itemToRemove = state.cartItems.find(
        (item) => item.cartItem.id == action.payload
      );
      state.totalPrice -= itemToRemove.cartItem.price;
      if (itemToRemove) {
        if (itemToRemove.quantity === 1) {
          state.cartItems = state.cartItems.filter(
            (item) => item.cartItem.id !== action.payload
          );
        } else {
          itemToRemove.quantity -= 1;
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  incrementQuantity,
  decrementQuantity,
  addToCart,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
