import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    error : null,
    loading : false,
    isAuthenticated : false,
    posters : [],
    poster: null,

}
const  posterSlice = createSlice({
    name : 'poster',
    initialState,
    reducers :  {
        setLoading : (state , action) => {
            state.loading = action.payload.loading;
            state.error = null;
        },
        setError : (state , action) => {
             state.loading = false;
             state.error = action.payload.error|| null;
        },
        getAllPosterSuccess : (state, action) => {
            state.posters = action.payload;
            state.loading = false;
            state.error = null;

        }
    }
})
export const {setLoading , setError , getAllPosterSuccess } = posterSlice.actions
export default posterSlice.reducer;