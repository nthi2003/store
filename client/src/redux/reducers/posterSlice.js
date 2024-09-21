import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    error: null,
    loading: false,
    isAuthenticated: false,
    posters: [],
    poster: null,

}
const posterSlice = createSlice({
    name: 'poster',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload.loading;
            state.error = null;
        },
        setError: (state, action) => {
            state.loading = false;
            state.error = action.payload?.error || null
        },
        createPosterSuccess: (state, action) => {
            state.loading = false;
            state.error = action.payload.error || null;
            state.poster = action.payload.poster
        },
        getAllPosterSuccess: (state, action) => {
            state.posters = action.payload;
            state.loading = false;
            state.error = null;

        },
        updatePosterSuccess: (state, action) => {
            state.loading = false;
            state.error = null;

            const updatedPoster = action.payload;

            if (state.poster && state.poster._id === updatedPoster._id) {
                state.poster = updatedPoster;
            }


            if (Array.isArray(state.posters)) {
                const index = state.posters.findIndex(poster => poster._id === updatedPoster._id);
                if (index !== -1) {
                    state.posters[index] = updatedPoster;
                }
            }
        },


        deleteImagePoster: (state, action) => {
            state.loading = false;
            state.error = null;
            const { id, imageId, imageType } = action.payload;

   
            if (Array.isArray(state.posters)) {
                const poster = state.posters.find((poster) => poster._id === id);
                if (poster) {
                    const imageTypeMap = {
                        posterHeader: poster.headerFiles,
                        posterSlick: poster.slickFiles,
                        postesLeftSlick: poster.leftSlickFiles,
                        posterBottomSlick: poster.bottomSlickFiles,
                        posterBottom: poster.bottomFiles,
                        posterLeftRight: poster.leftRightFiles,
                    };
                    const images = imageTypeMap[imageType];
                    if (images) {
                        const imageIndex = images.findIndex((image) => image._id === imageId);
                        if (imageIndex !== -1) {
                            images.splice(imageIndex, 1);
                        }
                    }
                }
            } else {
                console.error("state.posters is not an array");
            }
        },

    }
})
export const { setLoading, setError, getAllPosterSuccess, createPosterSuccess, updatePosterSuccess, deleteImagePoster } = posterSlice.actions
export default posterSlice.reducer;