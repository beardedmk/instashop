import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProductCategories = createAsyncThunk(
  "allCategoriesThunk",
  async (URL) => {
    const response = await axios.get(URL);
    return response.data;
  },
);

const productCategoriesSlice = createSlice({
  name: "productCategories",
  initialState: { categories: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductCategories.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchAllProductCategories.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.categories = action.payload;
      })
      .addCase(fetchAllProductCategories.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = "rejected";
        state.categories = [];
      });
  },
});

export default productCategoriesSlice.reducer;
