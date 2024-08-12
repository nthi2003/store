import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    error : null,
    loading : false,
    isAuthenticated : false,
    products : []
}
const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers: {
        setLoading : (state , action) => {
            state.loading = action.payload.loading;
        },
        setError: (state, action) => {
            state.error = action.payload.error;
        },
        fetchAllProducts : (state, action) => {
            const { products , totalProduct , totalPages, currentPage} = action.payload;
            state.products = products;
            state.totalProduct = totalProduct;
            state.totalPages = totalPages;
            state.currentPage = currentPage;
            state.loading = false;
            state.error = null;
        },
        createProductSuccess : (state, action) => {
            state.products.push(action.payload)
            state.loading = false;
            state.error = null
        },
        deleteProductSuccess : (state, action) => {
            const {id} = action.payload
            state.products = state.products.filter(product => product.id!== id)
            state.loading = false
            state.error = null
        }
       
    }
})
export const {fetchAllProducts, setLoading , setError , createProductSuccess, deleteProductSuccess} = productSlice.actions
export default productSlice.reducer;