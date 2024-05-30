import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "products",
  initialState: { data: [], status: "idle" },
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status="idle"
      }).addCase(getProducts.rejected,(state,action)=>{
        state.status="error"
      })
  },
});

export const { fetchProducts } = productSlice.actions;
export default productSlice.reducer;
// export function getProducts() {
//   return async function getProductsThunk(dispatch, getState) {
export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products/");
  const result = await data.json();
  // dispatch(fetchProducts(result));
  return result;
});
