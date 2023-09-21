import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Import axios
import { API_BASE_URL, PRODUCT_API } from "./apiConfig";

export const fetchSingleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (productId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}${PRODUCT_API.SINGLE(productId)}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: { singleProductDetails: {} },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.singleProductDetails = action.payload;
    });
  },
});

export default productSlice.reducer;
