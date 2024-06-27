import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    error: null,
    loading: false,
    isAuthenUser: false ,

};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        registerSuccess: (state, action) => {
            state.users = [...state.users, action.payload];
            localStorage.setItem('token', action.payload.accessToken);
            state.error = null;
            state.isAuthenUser = true;
            state.loading = false;
          
        },
        loginSuccess: (state, action) => {
            localStorage.setItem('token', action.payload.accessToken);
            state.error = null;
            state.isAuthenUser = true;
            state.loading = false;
        },
        logout: (state ) => {
            state.users = [];
            state.error = null;
            state.isAuthenUser = false;
            localStorage.removeItem('token');
        }
    },
});

export const { setLoading, setError, registerSuccess , logout, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
