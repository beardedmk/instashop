import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Import Axios
import { API_BASE_URL, PRODUCT_API } from "./apiConfig";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}${PRODUCT_API.ALL}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const allProductsSlice = createSlice({
  name: "products",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
  },
});

export default allProductsSlice.reducer;
