import axios from '../../axiosConfig';

import { fetchAllProducts, setError, setLoading,  } from '../reducers/productSlice';
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
// export const createProoduct = (ProductData) =>async(dispatch) =>  {
//     dispatch(setLoading(true));
//     try {
        
//     }
//     catch (error) {}

// }