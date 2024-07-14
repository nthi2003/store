import axios from '../../axiosConfig';

import {fetchAllCategorys , setError ,setLoading , deleteCategorySuccess } from '../reducers/categorySlice'

export const fetchCategory = (page , limit) => async(dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await axios.get(`/getAllCategory?page=${page}&limit=${limit}`)
        dispatch(fetchAllCategorys(response.data))
    }
    catch (error) {
        dispatch(setError(error.response.data.message));
    } 
}
export const deleteCategory = (id) => async(dispatch)  => {
    dispatch(setLoading(true));
    try {
        await axios.delete(`/deleteCategory/${id}`);
        dispatch(deleteCategorySuccess({ id }));
    
    }
    catch (error) {
        dispatch(setError(error.response.data.message));
    }
}