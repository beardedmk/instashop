// apiConfig.js

export const API_BASE_URL = "https://dummyjson.com";

export const PRODUCT_API = {
  SINGLE: (productId) => `/product/${productId}`,
  ALL: "/products",
};
