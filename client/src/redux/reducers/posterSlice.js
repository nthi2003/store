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
        createPosterSuccess : (state, action) => {
            state.loading = false;
            state.error = action.payload.error|| null;
            state.poster = action.payload.poster
        },
        getAllPosterSuccess : (state, action) => {
            state.posters = action.payload;
            state.loading = false;
            state.error = null;

        },
        updatePosterSuccess : (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
            const updatedPoster = action.payload;
            const index = state.posters.findIndex((poster) => poster._id === updatedPoster._id );
            if(index !== -1) {
                state.posters[index] = updatedPoster
            }
        }

    }
})
export const {setLoading , setError , getAllPosterSuccess , createPosterSuccess , updatePosterSuccess } = posterSlice.actions
export default posterSlice.reducer;