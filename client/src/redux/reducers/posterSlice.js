import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    error : null,
    loading : false,
    isAuthenticated : false,
    poster : [],

}
const  posterSlice = createSlice({
    name : 'poster',
    initialState,
    reducers : 
})