import { createSlice } from "@reduxjs/toolkit";
import { setLoading } from "./authSlice";

let initialState = {
    error : null,
    loading : false,
    isAuthenticated : false,
    products : []
}
const productSlice = createSlice({
    name : 'products',
    initialState,
    reducers: {
        setLoading : (state , action) => {
            state.loading = action.payload.loading;
        },
        setError: (state, action) => {
            state.error = action.payload.error;
        },
       
    }
})
export default productSlice.reducer;