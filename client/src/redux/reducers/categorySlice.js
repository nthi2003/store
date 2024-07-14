import { createSlice } from '@reduxjs/toolkit';




let initialState = {
    user: null,
    error: null,
    loading: false,
    isAuthenticated: false,
    categorys: []
};




const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload.loading;
        },
        setError: (state, action) => {
            state.error = action.payload.error;
        },
        
      
       
        fetchAllCategorys: (state, action) => {

            const { categorys, totalCategory, totalPages, currentPage } = action.payload;
            state.categorys= categorys;
            state.totalCategory = totalCategory;
            state.totalPages = totalPages;
            state.currentPage = currentPage;
            state.loading = false;
            state.error = null;
        },
        deleteCategorySuccess : (state, action) => {
            const {id} = action.payload
            state.categorys = state.categorys.filter(category => category._id !== id) 
            state.loading = false;
            state.error = null;
        }
        
    },
});

export const {fetchAllCategorys , setLoading , setError , deleteCategorySuccess} = categorySlice.actions;

export default categorySlice.reducer;
