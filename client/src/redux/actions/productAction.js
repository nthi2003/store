import axios from '../../axiosConfig';

import { fetchAllProducts, setError, setLoading, createProoductSuccess } from '../reducers/productSlice';
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
export const createProduct = (productData) =>async(dispatch) =>  {
    dispatch(setLoading(true));
    try {
        const formData = new FormData();
        formData.append('name', productData.name)
        formData.append('image', productData.image)
        formData.append('price', productData.price)
        formData.append('Stock', productData.Stock)
        formData.append('CPU', productData.CPU)
        formData.append('CPUDETAIL', productData.CPUDETAIL)
        formData.append('RAMDETAIL', productData.RAMDETAIL)
        formData.append('RAM', productData.RAM)
        formData.append('Screen', productData.Screen)
        formData.append('Keyboard', productData.Keyboard)
        formData.append('Audio', productData.Audio)
        formData.append('Lan', productData.Lan)
        formData.append('Bluetooth', productData.Bluetooth)
        formData.append('Webcam', productData.Webcam)
        formData.append('Weight', productData.Weight)
        formData.append('Size', productData.Size)
        formData.append('HZ', productData.HZ)
        formData.append('VGA', productData.VGA)
        formData.append('SSD', productData.SSD)
        formData.append('categoryid', productData.categoryid)
        formData.append('categoryName', productData.categoryName)

        const {data} = await axios.post('createProduct',formData )
        dispatch(createProoductSuccess(data))
        

        
    }
    catch (error) {
        dispatch(setError(error.response.data.message ));
    }

}