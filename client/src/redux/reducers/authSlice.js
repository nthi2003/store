import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    user: null,
    error: null,
    loading: false,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload.loading;
        },
        setError: (state, action) => {
            state.error = action.payload.error;
        },
        registerSuccess: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('token', action.payload.accessToken);

            state.error = null;
            state.isAuthenticated = true;
            state.loading = false;
        },
        loginSuccess: (state, action) => {
            const { accessToken } = action.payload;
            localStorage.setItem('token', accessToken);
            state.user = action.payload.user;
            state.error = null;
            state.isAuthenticated = true;
            state.loading = false;
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
    },
});
const storedUser = JSON.parse(localStorage.getItem('user'));
if (storedUser) {
    initialState.user = storedUser;
    initialState.isAuthenticated = true;
}

export const { setLoading, setError, registerSuccess, logout, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
