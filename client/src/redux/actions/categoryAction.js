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

        const response = await axios.put(`/updateCategory/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        dispatch(updateCategorySuccess(response.data));
    } catch (error) {
        dispatch(setError(error.response?.data?.message || 'Có lỗi xảy ra'));
    } finally {
        dispatch(setLoading(false));
    }
};
export const deleteImgae = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await axios.delete(`/deleteImageCategory/${id}`);
        dispatch(deleteImageCategorySuccess({ id }));
    }
    catch (error) {
        dispatch(setError(error.response.data.message));
    }
}
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
        toast.error('Có lỗi xảy ra khi xóa người dùng.');
        dispatch(setError(error.response.data.message));
    }
}