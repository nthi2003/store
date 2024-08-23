import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    error : null,
    loading : false,
    isAuthenticated : false,
    products : [],
    productDetails: null,
}
const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers: {
        setLoading : (state , action) => {
            state.loading = action.payload.loading;
            state.error = null;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload?.error || null
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
        getProductDetailsSuccess: (state, action) => {
            state.productDetails = action.payload;
            state.loading = false;
            state.error = null;
        },
        createProductSuccess : (state, action) => {
            state.products.push(action.payload)
            state.loading = false;
            state.error = null
        },
        updateProductSuccess : (state, action) => {
            const {
              _id,
              name,
              images,
              price,
              categoryid,
              categoryName,
              CPU,
              CPUDETAIL,
              RAMDETAIL,
              RAM,
              Screen,
              Keyboard,
              Audio,
              Lan,
              Bluetooth,
              Webcam,
              Weight,
              Size,
              HZ,
              VGA,
              SSD,
              Stock,
            } = action.payload;
          
            const index = state.products.findIndex((product) => product._id === _id);
            if (index !== -1) {
              state.products[index] = {
                ...state.products[index],
                name,
                images,
                price,
                categoryid,
                categoryName,
                CPU,
                CPUDETAIL,
                RAMDETAIL,
                RAM,
                Screen,
                Keyboard,
                Audio,
                Lan,
                Bluetooth,
                Webcam,
                Weight,
                Size,
                HZ,
                VGA,
                SSD,
                Stock,
              };
            }
          },
        deleteProductSuccess : (state, action) => {
            const {id} = action.payload
            state.products = state.products.filter(product => product.id!== id)
            state.loading = false
            state.error = null
        }
       
    }
})
export const {fetchAllProducts, setLoading , setError , createProductSuccess, deleteProductSuccess, updateProductSuccess , getProductDetailsSuccess} = productSlice.actions
export default productSlice.reducer;