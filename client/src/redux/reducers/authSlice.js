import { createSlice } from '@reduxjs/toolkit';

// Check if user data is stored in localStorage
const storedUser = localStorage.getItem('user');
let initialState = {
    user: null,
    error: null,
    loading: false,
    isAuthenticated: false,
};

// Parse user data from localStorage if it exists
if (storedUser) {
    try {
        initialState.user = JSON.parse(storedUser);
        initialState.isAuthenticated = true;
    } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
    }
}

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
        updateProfileSuccess: (state, action) => {
            state.user = action.payload.user;
            localStorage.setItem('user', JSON.stringify(state.user));
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

export const { setLoading, setError, registerSuccess, logout, loginSuccess, updateProfileSuccess } = authSlice.actions;

export default authSlice.reducer;
