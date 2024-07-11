import { createSlice } from '@reduxjs/toolkit';


const storedUser = localStorage.getItem('user');
let initialState = {
    user: null,
    users: [],
    error: null,
    loading: false,
    isAuthenticated: false,
   
};


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
            const updatedUser = action.payload.user;
            state.user = updatedUser;
            localStorage.setItem('user', JSON.stringify(updatedUser));
            state.loading = false;
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
        fetchAllUsers: (state, action) => {

            const { users, totalUsers, totalPages, currentPage } = action.payload;
            state.users= users;
            state.totalUsers = totalUsers;
            state.totalPages = totalPages;
            state.currentPage = currentPage;
       
            state.loading = false;
            state.error = null;
        },
        updateUsersSuccess: (state, action) => {
            const { id, role } = action.payload;
            const index = state.users.findIndex(user => user._id === id);
        
            if (index !== -1) {
                state.users[index] = {
                    ...state.users[index],
                    role: role
                };
            }
        
            state.loading = false;
            state.error = null;
        },
        deleteUsersSuccess: (state, action) => {
            const id = action.payload.id;
            state.users = state.users.filter(user => user._id !== id); 
            state.loading = false;
            state.error = null;
        },

    },
});

export const { setLoading, setError, registerSuccess, logout, loginSuccess, updateProfileSuccess ,fetchAllUsers, updateUsersSuccess, deleteUsersSuccess } = authSlice.actions;

export default authSlice.reducer;
