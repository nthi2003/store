import axios from '../../axiosConfig';
import toast from 'react-hot-toast';
import {fetchAllCategorys , setError ,setLoading , deleteImageCategorySuccess, createCategorySuccess, updateCategorySuccess  } from '../reducers/categorySlice'

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
export const createCategory = (categoryData) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const formData = new FormData();
        formData.append('name', categoryData.name);
        formData.append('image', categoryData.image);

        const { data } = await axios.post('/createCategory', formData);
        

        dispatch(createCategorySuccess(data));
        const {status , message } = data;
        if (status === 'success') {
            toast.success(message);
        } else {
            toast.error(message); 
        }

    } catch (error) {
        dispatch(setError(error.response.data.message ));
    } 
};
export const updateCategory = (id, name, image) => async (dispatch) => {
    dispatch(setLoading(true));
    try {

        const formData = new FormData();
        formData.append('name', name);
        if (image) {
            formData.append('image', image);
        }

        const {data} = await axios.put(`/updateCategory/${id}`, formData);

        dispatch(updateCategorySuccess(data));
        const {status, message } = data;
        if (status === 'success') {
            toast.success(message);
        }
        else {
            toast.error(message);
        }

    } catch (error) {
        dispatch(setError(error.response?.data?.message ));
    } finally {
        dispatch(setLoading(false));
    }
};
export const deleteImage = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.delete(`/deleteImageCategory/${id}`);
        dispatch(deleteImageCategorySuccess({ id }));
        toast.success(response.data.message); 
    } catch (error) {
        dispatch(setError(error.response?.data?.message));
        toast.error(error.response?.data?.message); 
        dispatch(setLoading(false));
    }
};
export const deleteCategory = (id) => async(dispatch)  => {
    dispatch(setLoading(true));
    try {
       const response =  await axios.delete(`/deleteCategory/${id}`);
        dispatch(deleteImageCategorySuccess({ id }));
        const {status , message } = response.data;
        if (status === 'success') {
            toast.success(message);
        } else {
            toast.error(message); 
        }

        return response.data;
    
    }
    catch (error) {
        dispatch(setError(error.response?.data?.message));
        toast.error(error.response?.data?.message); 
    }
}