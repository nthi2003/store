import toast from 'react-hot-toast';
import axios from '../../axiosConfig';

import { fetchAllProducts, setError, setLoading, createProductSuccess, deleteProductSuccess , updateProductSuccess } from '../reducers/productSlice';
export const fetchProduct = (page , limit) => async(dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await axios.get(`/getAllProducts?page=${page}&limit=${limit}`)
        dispatch(fetchAllProducts(response.data))
    }
    catch (error) {
        dispatch(setError(error.response.data.message))
    }
}
export const createProduct = (productData) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('price', productData.price);
        formData.append('Stock', productData.Stock);
        formData.append('CPU', productData.CPU);
        formData.append('CPUDETAIL', productData.CPUDETAIL);
        formData.append('RAMDETAIL', productData.RAMDETAIL);
        formData.append('RAM', productData.RAM);
        formData.append('Screen', productData.Screen);
        formData.append('Keyboard', productData.Keyboard);
        formData.append('Audio', productData.Audio);
        formData.append('Lan', productData.Lan);
        formData.append('Bluetooth', productData.Bluetooth);
        formData.append('Webcam', productData.Webcam);
        formData.append('Weight', productData.Weight);
        formData.append('Size', productData.Size);
        formData.append('HZ', productData.HZ);
        formData.append('VGA', productData.VGA);
        formData.append('SSD', productData.SSD);
        formData.append('categoryid', productData.categoryid);
        formData.append('categoryName', productData.categoryName);

        for (const image of productData.images) {
            formData.append('images', image);
        }

        const { data } = await axios.post('/createProduct', formData);
        dispatch(createProductSuccess(data));
        const { status , message} = data;
        if (status === 'success') {
            toast.success(message);
        }
        else {
            toast.error(message)
        }
    } catch (error) {
        dispatch(setError(error.response.data.message));
    }
};
export const updateProduct = (
    id,
    name,
    images,
    price,
    categoryid,
    categoryName,
    CPU,
    CPUDETAIL,
    RAMDETAIL,
    RAM,
    Screen,
    Keyboard,
    Audio,
    Lan,
    Bluetooth,
    Webcam,
    Weight,
    Size,
    HZ,
    VGA,
    SSD,
    Stock) => async (dispatch) => {
    dispatch(setLoading(true)); 
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("categoryid", categoryid);
      formData.append("categoryName", categoryName);
      formData.append("CPU", CPU);
      formData.append("CPUDETAIL", CPUDETAIL);
      formData.append("RAMDETAIL", RAMDETAIL);
      formData.append("RAM", RAM);
      formData.append("Screen", Screen);
      formData.append("Keyboard", Keyboard);
      formData.append("Audio", Audio);
      formData.append("Lan", Lan);
      formData.append("Bluetooth", Bluetooth);
      formData.append("Webcam", Webcam);
      formData.append("Weight", Weight);
      formData.append("Size", Size);
      formData.append("HZ", HZ);
      formData.append("VGA", VGA);
      formData.append("SSD", SSD);
      formData.append("Stock", Stock);
      if (images) {
        for (let i = 0; i < images.length; i++) {
          formData.append("images", images[i]);
        }
      }
  
      const { data } = await axios.put(`/updateProduct/${id}`, formData);
  
      dispatch(updateProductSuccess(data));
  
      const { status, message } = data;
      if (status === "success") {
        toast.success(message);
      } else {
        toast.error(message);
      }
    } catch (error) {
      dispatch(setError(error.response?.data?.message ));
    } finally {
      dispatch(setLoading(false)); 
    }
  }
  

export  const deleteProduct = (id) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await axios.delete(`/deleteProduct/${id}`);
        dispatch(deleteProductSuccess({id}))
        const {status , message } = response.data;
        if (status === 'success') {
            toast.success(message);
        } else {
            toast.error(message); 
        }

        return response.data;
        
    }
    catch (error) {
        dispatch(setError(error.response.data.message));
    }
}