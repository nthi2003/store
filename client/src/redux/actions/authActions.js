import axios from '../../axiosConfig';
import { setLoading, setError, registerSuccess, logout, loginSuccess, updateProfileSuccess , fetchAllUsers ,updateUsersSuccess, deleteUsersSuccess} from '../reducers/authSlice';
import toast, { Toaster } from 'react-hot-toast';
export const registerUser = (newUser) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post('/register', newUser);
        dispatch(registerSuccess(response.data)); // Dispatch một action plain object
        return response.data;
    } catch (error) {
        dispatch(setError(error.response.data.message));
    } 
};

export const loginUser = (loginData) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await axios.post('/login', loginData);
        dispatch(loginSuccess(response.data));
        const {status , message } = response.data;
        if (status === 'success') {
            toast.success(message);
        } else {
            toast.error(message); 
        }

        return response.data;
    } catch (error) {
        dispatch(setError(error.response.data.message));
    } 
};

export const logoutUser = () => (dispatch) => {
    dispatch(logout());
};
export const updateUserProfile = (updateData) => async (dispatch) => {
    dispatch(setLoading({ loading: true }));
    try {
        const response = await axios.put('/profileUpdate', updateData);
        console.log('Response from server:', response.data);
        dispatch(updateProfileSuccess(response.data));
    } catch (error) {
        console.error('Error in updateUserProfile:', error.response.data.message);
        dispatch(setError({ error: error.response.data.message }));
    } 
};

export const fetchUsers = (page, limit) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(`/getAllUsers?page=${page}&limit=${limit}`);
      dispatch(fetchAllUsers(response.data));
    } catch (error) {
      dispatch(setError(error.response.data.message));
    } 
  };
export const updateUser = (id, role) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
       const response = await axios.put(`/updateUsers/${id} ` , {role})
       dispatch(updateUsersSuccess(response.data));
    }
    catch (error) { 
        dispatch(setError(error.response.data.message));
      } 
}
export const deleteUsers = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
     const response = await axios.delete(`/deleteUsers/${id}`)
      dispatch(deleteUsersSuccess({ id }));
      const {status , message } = response.data;
      if (status === 'success') {
          toast.success(message);
      } else {
          toast.error(message); 
      }
    }
    catch (error) { 
        dispatch(setError(error.response.data.message));
      } 
}